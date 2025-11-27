#!/usr/bin/env node

/**
 * 清理 OSS 上的旧版本静态资源
 *
 * 功能：
 * - 列出 OSS 上的所有文件
 * - 删除旧的构建文件（保留最近 N 个版本）
 * - 清理无用的文件
 *
 * 使用方法：
 * node scripts/clear-oss-cache.js [--keep=3] [--dry-run]
 *
 * 参数：
 * --keep=N: 保留最近 N 个构建版本（默认 3）
 * --dry-run: 只显示将要删除的文件，不实际删除
 */

const OSS = require('ali-oss');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config({ path: '.env.production' });
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// 配置
const config = {
  region: process.env.OSS_REGION || 'oss-cn-hangzhou',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET,
};

// 验证配置
if (!config.accessKeyId || !config.accessKeySecret || !config.bucket) {
  console.error('❌ 错误：缺少 OSS 配置信息');
  process.exit(1);
}

// 初始化 OSS 客户端
const client = new OSS(config);

/**
 * 列出指定前缀的所有文件
 */
async function listFiles(prefix = '_next/static/') {
  let allFiles = [];
  let marker = null;

  do {
    const result = await client.list({
      prefix,
      marker,
      'max-keys': 1000,
    });

    if (result.objects) {
      allFiles = allFiles.concat(result.objects);
    }

    marker = result.nextMarker;
  } while (marker);

  return allFiles;
}

/**
 * 获取构建 ID 列表
 */
function getBuildIds(files) {
  const buildIds = new Set();
  const pattern = /_next\/static\/([^/]+)\//;

  files.forEach((file) => {
    const match = file.name.match(pattern);
    if (match && match[1]) {
      buildIds.add(match[1]);
    }
  });

  return Array.from(buildIds);
}

/**
 * 删除文件
 */
async function deleteFiles(files, dryRun = false) {
  if (files.length === 0) {
    console.log('✅ 没有需要删除的文件');
    return;
  }

  console.log(`\n🗑️  准备删除 ${files.length} 个文件`);

  if (dryRun) {
    console.log('\n⚠️  DRY RUN 模式：只显示将要删除的文件，不实际删除\n');
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
    return;
  }

  // 批量删除（每次最多 1000 个）
  const batchSize = 1000;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await client.deleteMulti(batch);
    console.log(`✅ 已删除 ${Math.min(i + batchSize, files.length)}/${files.length} 个文件`);
  }

  console.log('\n🎉 清理完成！');
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);

  // 解析参数
  let keepVersions = 3;
  let dryRun = false;

  args.forEach((arg) => {
    if (arg.startsWith('--keep=')) {
      keepVersions = Number.parseInt(arg.split('=')[1], 10);
    }
    if (arg === '--dry-run') {
      dryRun = true;
    }
  });

  console.log('🧹 开始清理 OSS 旧版本文件');
  console.log('='.repeat(50));
  console.log(`📦 Bucket: ${config.bucket}`);
  console.log(`🌍 Region: ${config.region}`);
  console.log(`🔢 保留版本数: ${keepVersions}`);
  console.log(`🔍 模式: ${dryRun ? 'DRY RUN' : '实际删除'}`);
  console.log('='.repeat(50));

  // 列出所有文件
  console.log('\n📋 正在列出文件...');
  const files = await listFiles();
  console.log(`✅ 找到 ${files.length} 个文件`);

  // 获取构建 ID
  const buildIds = getBuildIds(files);
  console.log(`\n🔍 找到 ${buildIds.length} 个构建版本:`);

  // 按时间排序（最新的在前）
  const buildIdWithTime = buildIds.map((id) => {
    const buildFiles = files.filter(f => f.name.includes(`_next/static/${id}/`));
    const latestTime = Math.max(...buildFiles.map(f => new Date(f.lastModified).getTime()));
    return { id, time: latestTime };
  });

  buildIdWithTime.sort((a, b) => b.time - a.time);

  buildIdWithTime.forEach((build, index) => {
    const date = new Date(build.time).toLocaleString('zh-CN');
    const status = index < keepVersions ? '✅ 保留' : '🗑️  删除';
    console.log(`  ${status} - ${build.id} (${date})`);
  });

  // 确定要删除的构建 ID
  const toDeleteBuildIds = buildIdWithTime.slice(keepVersions).map(b => b.id);

  if (toDeleteBuildIds.length === 0) {
    console.log('\n✅ 无需清理，所有版本都在保留范围内');
    return;
  }

  // 找出要删除的文件
  const toDeleteFiles = files
    .filter((file) => {
      return toDeleteBuildIds.some(id => file.name.includes(`_next/static/${id}/`));
    })
    .map(file => file.name);

  // 执行删除
  await deleteFiles(toDeleteFiles, dryRun);

  if (!dryRun) {
    const remainingFiles = files.length - toDeleteFiles.length;
    console.log(`\n📊 清理完成统计:`);
    console.log(`   删除文件: ${toDeleteFiles.length} 个`);
    console.log(`   保留文件: ${remainingFiles} 个`);
  }
}

// 执行主函数
main().catch((error) => {
  console.error('\n❌ 清理过程中出现错误：');
  console.error(error);
  process.exit(1);
});

#!/usr/bin/env node

/**
 * 将 Next.js 构建后的静态资源上传到阿里云 OSS
 *
 * 功能：
 * - 上传 .next/static 目录到 OSS
 * - 上传 public 目录的静态资源（可选）
 * - 设置正确的 Content-Type
 * - 设置文件为公共读取
 * - 显示上传进度
 *
 * 使用方法：
 * node scripts/upload-to-oss.js [--public]
 *
 * 参数：
 * --public: 同时上传 public 目录
 */

const fs = require('node:fs');
const path = require('node:path');
const OSS = require('ali-oss');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config({ path: '.env.production' });
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// 配置
const ossRegion = process.env.OSS_REGION?.trim() || 'oss-cn-hangzhou';
const config = {
  region: ossRegion,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET,
};

// 验证配置
if (!config.accessKeyId || !config.accessKeySecret || !config.bucket) {
  console.error('❌ 错误：缺少 OSS 配置信息');
  console.error('请在 .env.production 中配置以下环境变量：');
  console.error('  - OSS_ACCESS_KEY_ID');
  console.error('  - OSS_ACCESS_KEY_SECRET');
  console.error('  - OSS_BUCKET');
  console.error('  - OSS_REGION (可选，默认 oss-cn-hangzhou)');
  process.exit(1);
}

// 验证 region 格式
const validRegionPattern = /^oss-[a-z]+-[a-z]+(-\d+)?$/;
if (!validRegionPattern.test(config.region)) {
  console.error('❌ 错误：OSS_REGION 格式不正确');
  console.error(`当前值: "${config.region}"`);
  console.error('正确格式示例: oss-cn-hangzhou, oss-cn-beijing, oss-us-west-1');
  console.error('请检查以下文件中的 OSS_REGION 配置：');
  console.error('  - .env.production');
  console.error('  - .env.local');
  console.error('  - .env');
  process.exit(1);
}

// 初始化 OSS 客户端
const client = new OSS(config);

// MIME 类型映射
const mimeTypes = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
  '.map': 'application/json',
  '.html': 'text/html',
};

/**
 * 获取文件的 Content-Type
 */
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

/**
 * 递归获取目录下的所有文件
 */
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * 上传单个文件到 OSS
 */
async function uploadFile(localPath, ossPath) {
  try {
    const contentType = getContentType(localPath);

    const result = await client.put(ossPath, localPath, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // 1 年缓存
      },
      meta: {
        uploadTime: new Date().toISOString(),
      },
    });

    // 设置文件为公共读取
    await client.putACL(ossPath, 'public-read');

    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * 上传目录到 OSS
 */
async function uploadDirectory(localDir, ossPrefix = '') {
  if (!fs.existsSync(localDir)) {
    console.log(`⚠️  目录不存在，跳过: ${localDir}`);
    return { total: 0, success: 0, failed: 0 };
  }

  console.log(`\n📦 开始上传目录: ${localDir}`);
  console.log(`📍 OSS 路径前缀: ${ossPrefix || '/'}`);

  const files = getFiles(localDir);
  const total = files.length;
  let success = 0;
  let failed = 0;

  console.log(`📄 共找到 ${total} 个文件\n`);

  for (let i = 0; i < files.length; i++) {
    const localPath = files[i];
    const relativePath = path.relative(localDir, localPath);
    const ossPath = ossPrefix
      ? path.posix.join(ossPrefix, relativePath.replace(/\\/g, '/'))
      : relativePath.replace(/\\/g, '/');

    const fileSize = fs.statSync(localPath).size;
    const fileSizeStr = formatFileSize(fileSize);

    process.stdout.write(
      `[${i + 1}/${total}] 上传中: ${relativePath} (${fileSizeStr})...`,
    );

    const result = await uploadFile(localPath, ossPath);

    if (result.success) {
      success++;
      console.log(' ✅');
    } else {
      failed++;
      console.log(` ❌ ${result.error}`);
    }
  }

  return { total, success, failed };
}

/**
 * 格式化文件大小
 */
function formatFileSize(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / k ** i) * 100) / 100} ${sizes[i]}`;
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  const uploadPublic = args.includes('--public');

  console.log('🚀 开始上传静态资源到 OSS');
  console.log('='.repeat(50));
  console.log(`📦 Bucket: ${config.bucket}`);
  console.log(`🌍 Region: ${config.region}`);
  console.log('='.repeat(50));

  const startTime = Date.now();
  const totalStats = { total: 0, success: 0, failed: 0 };

  // 1. 上传 .next/static 目录（必需）
  const nextStaticDir = path.join(process.cwd(), '.next', 'static');
  const nextStaticResults = await uploadDirectory(nextStaticDir, '_next/static');
  totalStats.total += nextStaticResults.total;
  totalStats.success += nextStaticResults.success;
  totalStats.failed += nextStaticResults.failed;

  // 2. 上传 public 目录（可选）
  if (uploadPublic) {
    const publicDir = path.join(process.cwd(), 'public');
    const publicResults = await uploadDirectory(publicDir, '');
    totalStats.total += publicResults.total;
    totalStats.success += publicResults.success;
    totalStats.failed += publicResults.failed;
  } else {
    console.log('\n💡 提示：使用 --public 参数可以同时上传 public 目录');
  }

  // 显示统计信息
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`\n${'='.repeat(50)}`);
  console.log('📊 上传统计');
  console.log('='.repeat(50));
  console.log(`✅ 成功: ${totalStats.success} 个文件`);
  console.log(`❌ 失败: ${totalStats.failed} 个文件`);
  console.log(`📦 总计: ${totalStats.total} 个文件`);
  console.log(`⏱️  耗时: ${duration} 秒`);
  console.log('='.repeat(50));

  if (totalStats.failed > 0) {
    console.log('\n⚠️  部分文件上传失败，请检查错误信息');
    process.exit(1);
  } else {
    console.log('\n🎉 所有文件上传成功！');

    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || `https://${config.bucket}.${config.region}.aliyuncs.com`;
    console.log('\n📍 CDN 地址:');
    console.log(`   ${cdnUrl}`);
    console.log('\n💡 提示：');
    console.log('   1. 确保在 .env.production 中设置了 NEXT_PUBLIC_CDN_URL');
    console.log('   2. 确保 next.config.ts 中配置了 assetPrefix');
    console.log('   3. 如使用 CDN，建议刷新 CDN 缓存');
  }
}

// 执行主函数
main().catch((error) => {
  console.error('\n❌ 上传过程中出现错误：');
  console.error(error);
  process.exit(1);
});

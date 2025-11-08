#!/usr/bin/env node

/**
 * 批量为页面添加 SEO 配置
 * 自动检测需要更新的页面并添加 generateMetadata 函数
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// SEO 配置模板
const SEO_CONFIGS = {
  '/company': {
    title: '公司介绍 - BrainCo',
    description: 'BrainCo 公司介绍，了解我们的愿景和使命',
  },
  '/education/brain-ai': {
    title: 'BrainAI - 智能教育解决方案',
    description: 'BrainAI 智能教育解决方案，助力学习效率提升',
  },
  '/health/easleep': {
    title: 'EASleep - 智能睡眠改善系统',
    description: 'EASleep 智能睡眠改善系统，科学改善睡眠质量',
  },
  '/health/focus-xin': {
    title: 'FocusXin - 专注力训练系统',
    description: 'FocusXin 专注力训练系统，提升注意力表现',
  },
  '/health/oxyzen': {
    title: 'OxyZen - 冥想放松系统',
    description: 'OxyZen 冥想放松系统，缓解压力改善身心',
  },
  '/health/starkids': {
    title: 'StarKids - 儿童专注力训练',
    description: 'StarKids 儿童专注力训练系统，助力儿童成长',
  },
  '/news': {
    title: '新闻中心 - BrainCo',
    description: 'BrainCo 最新新闻和动态',
  },
  '/products/brain-robotics': {
    title: 'Brain Robotics - 智能仿生手',
    description: 'Brain Robotics 智能仿生手，重塑生活可能',
  },
  '/products/mobius': {
    title: 'Mobius - 脑机接口头环',
    description: 'Mobius 脑机接口头环，专业级脑电采集',
  },
  '/products': {
    title: '产品中心 - BrainCo',
    description: 'BrainCo 全系列产品介绍',
  },
  '/products/revo1': {
    title: 'Revo1 - 第一代脑机接口',
    description: 'Revo1 第一代脑机接口产品',
  },
  '/products/revo2': {
    title: 'Revo2 - 第二代脑机接口',
    description: 'Revo2 第二代脑机接口产品',
  },
  '/recruit/jobs': {
    title: '招聘职位 - BrainCo',
    description: '加入 BrainCo，共同开创脑机接口新时代',
  },
  '/recruit': {
    title: '人才招聘 - BrainCo',
    description: 'BrainCo 诚聘英才，期待你的加入',
  },
  '/easleep-specification': {
    title: 'EASleep 产品规格 - BrainCo',
    description: 'EASleep 详细产品规格和技术参数',
  },
  '/technology': {
    title: '技术介绍 - BrainCo',
    description: 'BrainCo 核心技术和研发实力',
  },
};

// Segment 映射（从文件夹名到 segment 名称）
const SEGMENT_MAP = {
  'company': 'company',
  'brain-ai': 'brain-ai',
  'easleep': 'easleep',
  'focus-xin': 'focus-xin',
  'oxyzen': 'oxyzen',
  'starkids': 'starkids',
  'news': 'news',
  'brain-robotics': 'brain-robotics',
  'mobius': 'mobius',
  'products': 'products',
  'revo1': 'revo1',
  'revo2': 'revo2',
  'jobs': 'jobs',
  'recruit': 'recruit',
  'easleep-specification': 'easleep-specification',
  'technology': 'technology',
};

/**
 * 生成 generateMetadata 函数代码
 */
function generateMetadataCode(segment, config) {
  return `
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, '${segment}', {
    title: '${config.title}',
    description: '${config.description}',
  });
}
`;
}

/**
 * 检查文件是否已有 SEO 配置
 */
function hasSEOConfig(content) {
  return content.includes('createPageMetadata')
    || content.includes('generateSEOMetadata');
}

/**
 * 检查文件是否已导入必要的模块
 */
function hasImports(content) {
  return content.includes('createPageMetadata')
    || content.includes('from \'@/lib/metadata\'');
}

/**
 * 添加必要的导入
 */
function addImports(content) {
  // 如果已经有 Metadata 导入，只添加 createPageMetadata
  if (content.includes('import type { Metadata }')) {
    if (!content.includes('createPageMetadata')) {
      content = content.replace(
        'import type { Metadata } from \'next\';',
        'import type { Metadata } from \'next\';\nimport { createPageMetadata } from \'@/lib/metadata\';',
      );
    }
  } else {
    // 添加所有必要的导入
    const imports = 'import type { Metadata } from \'next\';\nimport { createPageMetadata } from \'@/lib/metadata\';\n';
    // 在第一个 import 之前插入
    if (content.includes('import ')) {
      content = imports + content;
    } else {
      // 如果没有任何 import，在文件开头插入
      content = `${imports}\n${content}`;
    }
  }

  return content;
}

/**
 * 为页面文件添加 SEO 配置
 */
function addSEOToPage(filePath, segment, config) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');

    // 检查是否已有配置
    if (hasSEOConfig(content)) {
      console.log(`  ⏭️  跳过（已配置）: ${path.basename(path.dirname(filePath))}`);
      return false;
    }

    // 添加导入
    if (!hasImports(content)) {
      content = addImports(content);
    }

    // 生成新的 metadata 函数代码
    const newMetadataCode = generateMetadataCode(segment, config);

    // 检查是否已经有 generateMetadata 函数
    if (content.includes('export async function generateMetadata')) {
      // 替换现有的 generateMetadata 函数
      // 使用正则表达式匹配整个函数
      const metadataRegex = /export async function generateMetadata\([^)]*\)[^{]*\{[\s\S]*?\n\}/;

      if (metadataRegex.test(content)) {
        content = content.replace(metadataRegex, newMetadataCode.trim());
        console.log(`  ✅ 已替换: ${path.basename(path.dirname(filePath))}`);
      } else {
        console.log(`  ⚠️  警告: 无法匹配 generateMetadata 函数: ${path.basename(path.dirname(filePath))}`);
        return false;
      }
    } else {
      // 如果没有 generateMetadata，在 export default 之前插入
      if (content.includes('export default')) {
        content = content.replace(
          /export default/,
          `${newMetadataCode}\nexport default`,
        );
        console.log(`  ✅ 已添加: ${path.basename(path.dirname(filePath))}`);
      } else {
        // 如果没有 export default，添加到文件末尾
        content += newMetadataCode;
        console.log(`  ✅ 已添加: ${path.basename(path.dirname(filePath))}`);
      }
    }

    // 写回文件
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  } catch (error) {
    console.error(`  ❌ 错误: ${filePath}`, error.message);
    return false;
  }
}

/**
 * 查找所有需要更新的页面
 */
function findPagesToUpdate() {
  const pages = [];

  Object.entries(SEO_CONFIGS).forEach(([pagePath, config]) => {
    const segment = Object.keys(SEGMENT_MAP).find(key =>
      SEGMENT_MAP[key] && pagePath.endsWith(SEGMENT_MAP[key])
      || pagePath === `/${SEGMENT_MAP[key]}`,
    );

    if (segment) {
      // 根据 segment 查找文件路径
      let filePath;

      if (pagePath.startsWith('/education/')) {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)/education', segment, 'page.tsx');
      } else if (pagePath.startsWith('/health/')) {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)/health', segment, 'page.tsx');
      } else if (pagePath.startsWith('/products/')) {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)/products', segment, 'page.tsx');
      } else if (pagePath.startsWith('/recruit/')) {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)/recruit', segment, 'page.tsx');
      } else if (pagePath === '/products') {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)/products/page.tsx');
      } else if (pagePath === '/recruit') {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)/recruit/page.tsx');
      } else if (pagePath === '/easleep-specification') {
        filePath = path.join(projectRoot, 'src/app/[locale]/easleep-specification/page.tsx');
      } else {
        filePath = path.join(projectRoot, 'src/app/[locale]/(marketing)', segment, 'page.tsx');
      }

      if (fs.existsSync(filePath)) {
        pages.push({ filePath, segment, config, pagePath });
      }
    }
  });

  return pages;
}

/**
 * 主函数
 */
function main() {
  console.log(`\n${'='.repeat(60)}`);
  console.log('  批量添加 SEO 配置');
  console.log(`${'='.repeat(60)}\n`);

  const pages = findPagesToUpdate();

  console.log(`找到 ${pages.length} 个页面需要处理\n`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  pages.forEach(({ filePath, segment, config }) => {
    const result = addSEOToPage(filePath, segment, config);
    if (result) {
      updated++;
    } else if (hasSEOConfig(fs.readFileSync(filePath, 'utf-8'))) {
      skipped++;
    } else {
      errors++;
    }
  });

  console.log(`\n${'='.repeat(60)}`);
  console.log('统计信息:');
  console.log(`  ✅ 成功添加: ${updated}`);
  console.log(`  ⏭️  跳过: ${skipped}`);
  console.log(`  ❌ 错误: ${errors}`);
  console.log(`  📊 总计: ${pages.length}`);
  console.log(`${'='.repeat(60)}\n`);

  if (updated > 0) {
    console.log('💡 下一步:');
    console.log('   1. 运行 npm run dev 查看效果');
    console.log('   2. 在 CMS 中为这些页面配置 SEO 数据');
    console.log('   3. 运行 node scripts/check-seo-pages.mjs 验证\n');
  }
}

main();

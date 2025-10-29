#!/usr/bin/env node

/**
 * 检查项目中哪些页面已经配置了动态 SEO
 * 使用方法: node scripts/check-seo-pages.mjs
 */

import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PAGES_DIR = join(__dirname, '../src/app/[locale]');

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

async function findPageFiles(dir, basePath = '') {
  const pages = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      const relativePath = join(basePath, entry.name);
      
      if (entry.isDirectory()) {
        // 递归查找子目录
        const subPages = await findPageFiles(fullPath, relativePath);
        pages.push(...subPages);
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        // 找到页面文件
        pages.push({
          path: fullPath,
          routePath: basePath.replace(/\([\w-]+\)/g, '').replace(/\\/g, '/') || '/',
        });
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return pages;
}

async function checkPageSEO(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    
    // 检查是否导入了 SEO 相关函数（支持两种方式）
    const hasImport = content.includes('generateSEOMetadata') || content.includes('createPageMetadata');
    
    // 检查是否使用了 SEO 函数
    const hasUsage = content.includes('generateSEOMetadata(') || content.includes('createPageMetadata(');
    
    // 检查是否有 generateMetadata 函数
    const hasGenerateMetadata = content.includes('generateMetadata');
    
    return {
      hasGenerateMetadata,
      hasImport,
      hasUsage,
      configured: hasImport && hasUsage,
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return {
      hasGenerateMetadata: false,
      hasImport: false,
      hasUsage: false,
      configured: false,
    };
  }
}

async function main() {
  console.log(`${colors.cyan}==================================================${colors.reset}`);
  console.log(`${colors.cyan}     SEO 配置检查工具${colors.reset}`);
  console.log(`${colors.cyan}==================================================${colors.reset}\n`);
  
  console.log(`${colors.gray}正在扫描页面文件...${colors.reset}\n`);
  
  const pages = await findPageFiles(PAGES_DIR);
  
  const configured = [];
  const needsUpdate = [];
  const noMetadata = [];
  
  for (const page of pages) {
    const seoStatus = await checkPageSEO(page.path);
    
    if (seoStatus.configured) {
      configured.push(page);
    } else if (seoStatus.hasGenerateMetadata) {
      needsUpdate.push({ ...page, status: seoStatus });
    } else {
      noMetadata.push(page);
    }
  }
  
  // 输出结果
  console.log(`${colors.green}✓ 已配置动态 SEO 的页面 (${configured.length}):${colors.reset}`);
  configured.forEach(page => {
    console.log(`  ${colors.green}●${colors.reset} ${page.routePath}`);
    console.log(`    ${colors.gray}${page.path}${colors.reset}`);
  });
  console.log('');
  
  console.log(`${colors.yellow}⚠ 需要更新为动态 SEO 的页面 (${needsUpdate.length}):${colors.reset}`);
  needsUpdate.forEach(page => {
    console.log(`  ${colors.yellow}●${colors.reset} ${page.routePath}`);
    console.log(`    ${colors.gray}${page.path}${colors.reset}`);
    if (!page.status.hasImport) {
      console.log(`    ${colors.red}✗ 缺少导入${colors.reset}`);
    }
    if (!page.status.hasUsage) {
      console.log(`    ${colors.red}✗ 未使用 SEO 函数${colors.reset}`);
    }
  });
  console.log('');
  
  console.log(`${colors.red}✗ 没有 SEO 配置的页面 (${noMetadata.length}):${colors.reset}`);
  noMetadata.forEach(page => {
    console.log(`  ${colors.red}●${colors.reset} ${page.routePath}`);
    console.log(`    ${colors.gray}${page.path}${colors.reset}`);
  });
  console.log('');
  
  // 统计信息
  const total = pages.length;
  const configuredPercent = ((configured.length / total) * 100).toFixed(1);
  
  console.log(`${colors.cyan}==================================================${colors.reset}`);
  console.log(`${colors.cyan}统计信息:${colors.reset}`);
  console.log(`  总页面数: ${total}`);
  console.log(`  ${colors.green}已配置: ${configured.length} (${configuredPercent}%)${colors.reset}`);
  console.log(`  ${colors.yellow}需要更新: ${needsUpdate.length}${colors.reset}`);
  console.log(`  ${colors.red}未配置: ${noMetadata.length}${colors.reset}`);
  console.log(`${colors.cyan}==================================================${colors.reset}\n`);
  
  // 输出建议
  if (needsUpdate.length > 0 || noMetadata.length > 0) {
    console.log(`${colors.yellow}💡 建议:${colors.reset}`);
    console.log(`   1. 查看文档: docs/SEO_IMPLEMENTATION.md`);
    console.log(`   2. 参考已配置的页面进行更新`);
    console.log(`   3. 在 CMS 中为每个页面配置 SEO 数据\n`);
  } else {
    console.log(`${colors.green}🎉 太棒了！所有页面都已配置动态 SEO！${colors.reset}\n`);
  }
}

main().catch(console.error);


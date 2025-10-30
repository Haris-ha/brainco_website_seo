#!/usr/bin/env node

/**
 * SEO Headers 检查脚本
 * 用于验证 X-Robots-Tag 和 Publisher 元标签是否正确设置
 */

import http from 'node:http';
import https from 'node:https';

// 配置
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const PAGES_TO_CHECK = [
  '/',
  '/about',
  '/technology',
  '/products',
  '/recruit',
  '/zh-CN',
  '/zh-CN/about',
  '/en-US',
  '/en-US/about',
];

// ANSI 颜色代码
const colors = {
  reset: '\x1B[0m',
  green: '\x1B[32m',
  red: '\x1B[31m',
  yellow: '\x1B[33m',
  blue: '\x1B[34m',
  gray: '\x1B[90m',
};

/**
 * 检查单个页面
 */
async function checkPage(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    protocol.get(url, (res) => {
      let html = '';

      res.on('data', (chunk) => {
        html += chunk;
      });

      res.on('end', () => {
        const xRobotsTag = res.headers['x-robots-tag'];

        // 从 HTML 中提取 meta 标签
        const publisherMatch = html.match(/<meta[^>]*name=["']publisher["'][^>]*content=["']([^"']+)["']/i);
        const publisher = publisherMatch ? publisherMatch[1] : null;

        const metaRobotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
        const metaRobots = metaRobotsMatch ? metaRobotsMatch[1] : null;

        resolve({
          url,
          statusCode: res.statusCode,
          xRobotsTag,
          publisher,
          metaRobots,
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * 检查 X-Robots-Tag 是否重复
 */
function hasRobotsTagDuplicate(xRobotsTag) {
  if (!xRobotsTag) {
    return false;
  }

  const parts = xRobotsTag.split(',').map(s => s.trim());
  const unique = [...new Set(parts)];

  return parts.length !== unique.length;
}

/**
 * 格式化结果
 */
function formatResult(result) {
  const { url, statusCode, xRobotsTag, publisher, metaRobots } = result;

  console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}URL:${colors.reset} ${url}`);
  console.log(`${colors.gray}状态码:${colors.reset} ${statusCode}`);

  // 检查 HTTP 响应头中的 X-Robots-Tag
  if (xRobotsTag) {
    const hasDuplicate = hasRobotsTagDuplicate(xRobotsTag);
    const icon = hasDuplicate ? `${colors.red}✗${colors.reset}` : `${colors.green}✓${colors.reset}`;
    const warning = hasDuplicate ? ` ${colors.red}(包含重复值!)${colors.reset}` : '';
    console.log(`${icon} ${colors.gray}X-Robots-Tag (HTTP):${colors.reset} ${xRobotsTag}${warning}`);
  } else {
    console.log(`${colors.yellow}⚠${colors.reset} ${colors.gray}X-Robots-Tag (HTTP):${colors.reset} ${colors.yellow}未设置${colors.reset}`);
  }

  // 检查 HTML meta 标签中的 robots
  if (metaRobots) {
    console.log(`${colors.green}✓${colors.reset} ${colors.gray}Meta Robots:${colors.reset} ${metaRobots}`);
  } else {
    console.log(`${colors.gray}  Meta Robots:${colors.reset} ${colors.gray}未设置${colors.reset}`);
  }

  // 检查 Publisher
  if (publisher) {
    console.log(`${colors.green}✓${colors.reset} ${colors.gray}Publisher:${colors.reset} ${publisher}`);
  } else {
    console.log(`${colors.yellow}⚠${colors.reset} ${colors.gray}Publisher:${colors.reset} ${colors.yellow}未设置${colors.reset}`);
  }
}

/**
 * 主函数
 */
async function main() {
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}SEO Headers 检查${colors.reset}`);
  console.log(`${colors.gray}检查目标:${colors.reset} ${BASE_URL}`);
  console.log(`${colors.gray}检查页面数:${colors.reset} ${PAGES_TO_CHECK.length}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);

  const results = [];
  let hasErrors = false;

  for (const pagePath of PAGES_TO_CHECK) {
    const url = `${BASE_URL}${pagePath}`;

    try {
      const result = await checkPage(url);
      results.push(result);
      formatResult(result);

      // 检查是否有错误
      if (hasRobotsTagDuplicate(result.xRobotsTag)) {
        hasErrors = true;
      }
    } catch (error) {
      console.error(`${colors.red}✗ 检查失败:${colors.reset} ${url}`);
      console.error(`  ${colors.red}错误:${colors.reset} ${error.message}`);
      hasErrors = true;
    }
  }

  // 总结
  console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.blue}检查总结${colors.reset}`);
  console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);

  const pagesWithRobotsTag = results.filter(r => r.xRobotsTag).length;
  const pagesWithPublisher = results.filter(r => r.publisher).length;
  const pagesWithDuplicates = results.filter(r => hasRobotsTagDuplicate(r.xRobotsTag)).length;

  console.log(`${colors.gray}总页面数:${colors.reset} ${results.length}`);
  console.log(`${colors.gray}设置了 X-Robots-Tag:${colors.reset} ${pagesWithRobotsTag}`);
  console.log(`${colors.gray}设置了 Publisher:${colors.reset} ${pagesWithPublisher}`);

  if (pagesWithDuplicates > 0) {
    console.log(`${colors.red}包含重复 X-Robots-Tag:${colors.reset} ${pagesWithDuplicates}`);
  } else {
    console.log(`${colors.green}包含重复 X-Robots-Tag:${colors.reset} 0 ${colors.green}✓${colors.reset}`);
  }

  console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

  if (hasErrors) {
    console.log(`${colors.red}检查完成，发现错误！${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`${colors.green}检查完成，所有测试通过！${colors.reset}\n`);
    process.exit(0);
  }
}

// 运行
main().catch((error) => {
  console.error(`${colors.red}脚本执行失败:${colors.reset}`, error);
  process.exit(1);
});

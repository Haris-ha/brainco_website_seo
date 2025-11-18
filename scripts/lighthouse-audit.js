#!/usr/bin/env node

/**
 * BrainCo 网站 Lighthouse 自动化测试脚本
 * 
 * 功能：
 * - 自动解析 sitemap.xml 获取所有页面 URL
 * - 批量测试移动端和桌面端 Lighthouse 分数
 * - 生成详细的 HTML/JSON 报告
 * - 生成 CSV/Excel 汇总文件
 * - 自动分析需要优化的页面
 * 
 * 使用方法：
 * 1. 在 .env 文件中添加：PAGESPEED_API_KEY=你的API密钥
 * 2. 运行：node scripts/lighthouse-audit.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStringPromise } from 'xml2js';
import dotenv from 'dotenv';

// ES Module 兼容
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 加载环境变量
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const API_KEY = process.env.PAGESPEED_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL_CN || 'https://www.brainco.cn';
// 只测试简体中文（默认，不带前缀）和英文版本
const LOCALES = [
  { code: 'zh-CN', prefix: '' },  // 简体中文：不带前缀
  { code: 'en-US', prefix: '/en-US' },  // 英文：带 /en-US 前缀
];

// 如果没有 API Key，提示用户
if (!API_KEY) {
  console.error('❌ 错误：未找到 PAGESPEED_API_KEY');
  console.log('\n📌 请按以下步骤获取 API Key：');
  console.log('1. 访问：https://console.cloud.google.com/apis/api/pagespeedonline.googleapis.com');
  console.log('2. 创建项目并启用 PageSpeed Insights API');
  console.log('3. 创建 API Key');
  console.log('4. 在 .env 文件中添加：PAGESPEED_API_KEY=你的key\n');
  process.exit(1);
}

/**
 * 从 sitemap.xml 解析所有 URL
 * 如果 sitemap 不存在或 URL 太少，使用默认页面列表
 */
async function parseSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️  未找到 sitemap.xml，将使用默认页面列表');
    return getDefaultUrls();
  }

  try {
    const xmlContent = fs.readFileSync(sitemapPath, 'utf-8');
    const result = await parseStringPromise(xmlContent);
    
    if (!result.urlset || !result.urlset.url) {
      console.warn('⚠️  sitemap.xml 格式不正确，将使用默认页面列表');
      return getDefaultUrls();
    }

    const urls = result.urlset.url
      .map(item => item.loc[0])
      .filter(url => {
        if (!url || !url.startsWith('http')) return false;
        // 过滤掉不应该测试的页面
        const excludedPatterns = [
          '/cart',
          '/checkout',
          '/orders',
          '/sitemap.xml',
          '/robots.txt',
        ];
        return !excludedPatterns.some(pattern => url.includes(pattern));
      });

    // 如果 sitemap 中的 URL 太少（少于 10 个），使用默认列表
    if (urls.length < 10) {
      console.warn(`⚠️  sitemap.xml 只有 ${urls.length} 个 URL，将使用默认页面列表（包含更多页面）`);
      return getDefaultUrls();
    }

    console.log(`✅ 从 sitemap.xml 解析到 ${urls.length} 个 URL`);
    return urls;
  } catch (error) {
    console.error('❌ 解析 sitemap.xml 失败:', error.message);
    console.log('📌 将使用默认页面列表');
    return getDefaultUrls();
  }
}

/**
 * 获取默认页面列表（从代码结构推断）
 * 排除需要认证的页面（cart, checkout, orders）
 * 简体中文不带 /zh-CN 前缀，英文带 /en-US 前缀
 */
function getDefaultUrls() {
  const pages = [
    // 首页
    '/',
    
    // 产品页面
    '/products',
    '/products/brain-robotics',
    '/products/mobius',
    '/products/revo1',
    '/products/revo2',
    
    // 健康产品
    '/health/easleep',
    '/health/oxyzen',
    '/health/focus-zen',
    '/health/focus-xin',
    '/health/starkids',
    
    // 教育产品
    '/education/brain-ai',
    
    // 公司页面
    '/about',
    '/contact',
    '/company',
    '/technology',
    
    // 新闻
    '/news',
    
    // 招聘
    '/recruit',
    '/recruit/jobs',
    
    // 规格页面
    '/easleep-specification',
  ];

  // 为每个语言生成完整 URL
  const urls = [];
  for (const locale of LOCALES) {
    for (const page of pages) {
      if (page === '/') {
        // 首页：简体中文直接是 BASE_URL，英文是 BASE_URL/en-US
        if (locale.prefix === '') {
          urls.push(BASE_URL);
        } else {
          urls.push(`${BASE_URL}${locale.prefix}`);
        }
      } else {
        // 其他页面：简体中文不带前缀，英文带 /en-US 前缀
        if (locale.prefix === '') {
          urls.push(`${BASE_URL}${page}`);
        } else {
          urls.push(`${BASE_URL}${locale.prefix}${page}`);
        }
      }
    }
  }
  
  // 去重并过滤掉不应该测试的页面
  const excludedPatterns = [
    '/cart',
    '/checkout',
    '/orders',
    '/sitemap.xml',
    '/robots.txt',
  ];
  
  return [...new Set(urls)].filter(url => {
    return !excludedPatterns.some(pattern => url.includes(pattern));
  });
}

/**
 * 调用 Google PageSpeed API
 * 注意：需要请求所有类别（performance, accessibility, best-practices, seo）
 */
async function runAudit(url, strategy) {
  // 添加 category 参数以获取所有类别的分数
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO&key=${API_KEY}`;
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `API 请求失败: ${response.status}`;
      
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.error && errorJson.error.message) {
          errorMessage = errorJson.error.message;
          
          // 特殊处理：如果是 NOT_HTML 或 FAILED_DOCUMENT_REQUEST，提供更友好的提示
          if (errorMessage.includes('NOT_HTML')) {
            errorMessage = '页面返回的不是 HTML（可能是 XML 或其他格式）';
          } else if (errorMessage.includes('FAILED_DOCUMENT_REQUEST')) {
            errorMessage = '页面加载失败（可能页面不存在或需要认证）';
          }
        }
      } catch {
        // 如果无法解析错误，使用原始文本
        errorMessage = errorText.substring(0, 200);
      }
      
      throw new Error(errorMessage);
    }

    const result = await response.json();
    
    // 检查是否有错误
    if (result.error) {
      let errorMessage = result.error.message || 'API 返回错误';
      
      // 特殊处理常见错误
      if (errorMessage.includes('NOT_HTML')) {
        errorMessage = '页面返回的不是 HTML（可能是 XML 或其他格式）';
      } else if (errorMessage.includes('FAILED_DOCUMENT_REQUEST')) {
        errorMessage = '页面加载失败（可能页面不存在或需要认证）';
      }
      
      throw new Error(errorMessage);
    }

    return result;
  } catch (error) {
    console.error(`    ❌ ${error.message}`);
    return null;
  }
}

/**
 * 提取 Lighthouse 分数
 */
function extractScores(result) {
  if (!result || !result.lighthouseResult) {
    return null;
  }

  const categories = result.lighthouseResult.categories || {};
  const audits = result.lighthouseResult.audits || {};

  // 检查类别是否存在，如果不存在则返回 null（而不是 0）
  const getScore = (category) => {
    if (!category || category.score === null || category.score === undefined) {
      return null;
    }
    return Math.round(category.score * 100);
  };

  return {
    performance: getScore(categories.performance),
    accessibility: getScore(categories.accessibility),
    bestPractices: getScore(categories['best-practices']),
    seo: getScore(categories.seo),
    
    // 核心 Web Vitals
    lcp: audits['largest-contentful-paint']?.numericValue || 0,
    fid: audits['max-potential-fid']?.numericValue || 0,
    cls: audits['cumulative-layout-shift']?.numericValue || 0,
    fcp: audits['first-contentful-paint']?.numericValue || 0,
    tti: audits['interactive']?.numericValue || 0,
    
    // 其他重要指标
    speedIndex: audits['speed-index']?.numericValue || 0,
    totalBlockingTime: audits['total-blocking-time']?.numericValue || 0,
  };
}

/**
 * 生成 HTML 报告
 */
function generateHTMLReport(results) {
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BrainCo Lighthouse 测试报告</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f5f5f5;
      padding: 20px;
      line-height: 1.6;
    }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 {
      color: #1f2937;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    .summary {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .summary h2 { margin-bottom: 15px; color: #374151; }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    .summary-item {
      padding: 15px;
      background: #f9fafb;
      border-radius: 6px;
    }
    .summary-item strong { display: block; margin-bottom: 5px; color: #6b7280; }
    .summary-item .score {
      font-size: 2rem;
      font-weight: bold;
      color: #1f2937;
    }
    table {
      width: 100%;
      background: white;
      border-collapse: collapse;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    th {
      background: #1f2937;
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: 600;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #e5e7eb;
    }
    tr:hover { background: #f9fafb; }
    .score {
      font-weight: bold;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
    }
    .score.excellent { background: #10b981; color: white; }
    .score.good { background: #3b82f6; color: white; }
    .score.needs-improvement { background: #f59e0b; color: white; }
    .score.poor { background: #ef4444; color: white; }
    .url { color: #3b82f6; word-break: break-all; }
    .warning {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 BrainCo Lighthouse 测试报告</h1>
    <p style="color: #6b7280; margin-bottom: 30px;">生成时间: ${new Date().toLocaleString('zh-CN')}</p>
    
    ${generateSummary(results)}
    
    <h2 style="margin: 30px 0 15px; color: #1f2937;">📊 详细测试结果</h2>
    ${generateTable(results)}
    
    ${generateWarnings(results)}
  </div>
</body>
</html>`;

  return html;
}

function generateSummary(results) {
  const mobile = results.filter(r => r.strategy === 'mobile');
  const desktop = results.filter(r => r.strategy === 'desktop');
  
  const avg = (arr, key) => {
    const valid = arr.filter(r => r.scores && r.scores[key] !== null);
    return valid.length > 0 
      ? Math.round(valid.reduce((sum, r) => sum + r.scores[key], 0) / valid.length)
      : 0;
  };

  return `
    <div class="summary">
      <h2>📈 总体统计</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <strong>移动端平均性能</strong>
          <span class="score ${getScoreClass(avg(mobile, 'performance'))}">${avg(mobile, 'performance')}</span>
        </div>
        <div class="summary-item">
          <strong>桌面端平均性能</strong>
          <span class="score ${getScoreClass(avg(desktop, 'performance'))}">${avg(desktop, 'performance')}</span>
        </div>
        <div class="summary-item">
          <strong>移动端平均 SEO</strong>
          <span class="score ${getScoreClass(avg(mobile, 'seo'))}">${avg(mobile, 'seo')}</span>
        </div>
        <div class="summary-item">
          <strong>桌面端平均 SEO</strong>
          <span class="score ${getScoreClass(avg(desktop, 'seo'))}">${avg(desktop, 'seo')}</span>
        </div>
        <div class="summary-item">
          <strong>移动端平均可访问性</strong>
          <span class="score ${getScoreClass(avg(mobile, 'accessibility'))}">${avg(mobile, 'accessibility')}</span>
        </div>
        <div class="summary-item">
          <strong>桌面端平均可访问性</strong>
          <span class="score ${getScoreClass(avg(desktop, 'accessibility'))}">${avg(desktop, 'accessibility')}</span>
        </div>
      </div>
    </div>
  `;
}

function generateTable(results) {
  const rows = results.map(r => {
    if (!r.scores) return '';
    
    return `
      <tr>
        <td class="url">${r.url}</td>
        <td>${r.strategy}</td>
        <td><span class="score ${getScoreClass(r.scores.performance)}">${r.scores.performance}</span></td>
        <td><span class="score ${getScoreClass(r.scores.accessibility)}">${r.scores.accessibility}</span></td>
        <td><span class="score ${getScoreClass(r.scores.bestPractices)}">${r.scores.bestPractices}</span></td>
        <td><span class="score ${getScoreClass(r.scores.seo)}">${r.scores.seo}</span></td>
        <td>${Math.round(r.scores.lcp)}ms</td>
        <td>${r.scores.cls.toFixed(3)}</td>
      </tr>
    `;
  }).join('');

  return `
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>设备</th>
          <th>性能</th>
          <th>可访问性</th>
          <th>最佳实践</th>
          <th>SEO</th>
          <th>LCP</th>
          <th>CLS</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function generateWarnings(results) {
  const issues = results.filter(r => {
    if (!r.scores) return false;
    return r.scores.performance < 50 || r.scores.seo < 50;
  });

  if (issues.length === 0) {
    return '<div class="warning">✅ 所有页面都达到了良好的性能标准！</div>';
  }

  const warnings = issues.map(r => `
    <li>
      <strong>${r.url}</strong> (${r.strategy}) - 
      性能: ${r.scores.performance}, SEO: ${r.scores.seo}
    </li>
  `).join('');

  return `
    <div class="warning">
      <h3>⚠️ 需要优化的页面 (${issues.length} 个)</h3>
      <ul style="margin-left: 20px; margin-top: 10px;">
        ${warnings}
      </ul>
    </div>
  `;
}

function getScoreClass(score) {
  if (score >= 90) return 'excellent';
  if (score >= 50) return 'good';
  if (score >= 25) return 'needs-improvement';
  return 'poor';
}

/**
 * 生成 CSV 报告
 */
function generateCSV(results) {
  const headers = [
    'URL',
    'Strategy',
    'Performance',
    'Accessibility',
    'Best Practices',
    'SEO',
    'LCP (ms)',
    'FID (ms)',
    'CLS',
    'FCP (ms)',
    'TTI (ms)',
    'Speed Index',
    'Total Blocking Time (ms)',
  ];

  const rows = results.map(r => {
    if (!r.scores) return null;
    return [
      r.url,
      r.strategy,
      r.scores.performance,
      r.scores.accessibility,
      r.scores.bestPractices,
      r.scores.seo,
      Math.round(r.scores.lcp),
      Math.round(r.scores.fid),
      r.scores.cls.toFixed(3),
      Math.round(r.scores.fcp),
      Math.round(r.scores.tti),
      Math.round(r.scores.speedIndex),
      Math.round(r.scores.totalBlockingTime),
    ].join(',');
  }).filter(Boolean);

  return [headers.join(','), ...rows].join('\n');
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始 BrainCo Lighthouse 自动化测试\n');
  console.log(`📌 基础 URL: ${BASE_URL}`);
  console.log(`📌 语言: ${LOCALES.map(l => l.code).join(', ')} (简体中文不带前缀，英文带 /en-US 前缀)\n`);

  // 获取所有 URL
  const urls = await parseSitemap();
  console.log(`📋 共 ${urls.length} 个页面需要测试\n`);

  // 创建报告目录
  const reportsDir = path.join(__dirname, '..', 'reports', 'lighthouse');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const results = [];
  const strategies = ['mobile', 'desktop'];

  // 测试每个页面
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`\n[${i + 1}/${urls.length}] 测试: ${url}`);

    for (const strategy of strategies) {
      console.log(`  ⚡ 测试 ${strategy}...`);
      
      // 调用 API（添加延迟避免速率限制）
      const result = await runAudit(url, strategy);
      
      if (result) {
        const scores = extractScores(result);
        
        if (scores) {
          // 保存完整 JSON 报告
          const safeUrl = url.replace(/https?:\/\//, '').replace(/[\/:]/g, '_');
          const jsonPath = path.join(reportsDir, `${strategy}-${safeUrl}.json`);
          fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2));

          results.push({
            url,
            strategy,
            scores,
          });

          const perf = scores.performance !== null ? scores.performance : 'N/A';
          const seo = scores.seo !== null ? scores.seo : 'N/A';
          const a11y = scores.accessibility !== null ? scores.accessibility : 'N/A';
          console.log(`    ✅ 性能: ${perf}, SEO: ${seo}, 可访问性: ${a11y}`);
          successCount++;
        } else {
          console.log(`    ⚠️  无法提取分数`);
          failCount++;
        }
      } else {
        failCount++;
      }

      // 延迟 1 秒避免 API 速率限制
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`\n📊 测试统计: 成功 ${successCount} 个, 失败 ${failCount} 个`);

  // 生成报告
  console.log('\n📊 生成报告...');
  
  // HTML 报告
  const htmlReport = generateHTMLReport(results);
  const htmlPath = path.join(reportsDir, 'report.html');
  fs.writeFileSync(htmlPath, htmlReport);
  console.log(`  ✅ HTML 报告: ${htmlPath}`);

  // CSV 报告
  const csvReport = generateCSV(results);
  const csvPath = path.join(reportsDir, 'report.csv');
  fs.writeFileSync(csvPath, csvReport);
  console.log(`  ✅ CSV 报告: ${csvPath}`);

  // 统计信息
  const mobileResults = results.filter(r => r.strategy === 'mobile' && r.scores);
  const desktopResults = results.filter(r => r.strategy === 'desktop' && r.scores);

  console.log('\n📈 测试完成！统计信息：');
  console.log(`  移动端: ${mobileResults.length} 个页面`);
  console.log(`  桌面端: ${desktopResults.length} 个页面`);
  
  if (mobileResults.length > 0) {
    const avgPerf = Math.round(mobileResults.reduce((sum, r) => sum + r.scores.performance, 0) / mobileResults.length);
    console.log(`  移动端平均性能: ${avgPerf}`);
  }
  
  if (desktopResults.length > 0) {
    const avgPerf = Math.round(desktopResults.reduce((sum, r) => sum + r.scores.performance, 0) / desktopResults.length);
    console.log(`  桌面端平均性能: ${avgPerf}`);
  }

  console.log(`\n🎉 所有报告已保存到: ${reportsDir}`);
  console.log(`   打开 ${htmlPath} 查看详细报告`);
}

// 运行
main().catch(error => {
  console.error('❌ 执行失败:', error);
  process.exit(1);
});


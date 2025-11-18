#!/usr/bin/env node

/**
 * Lighthouse 报告分析脚本
 * 
 * 功能：
 * - 分析所有 Lighthouse JSON 报告
 * - 提取扣分项和优化建议
 * - 生成详细的优化报告
 * 
 * 使用方法：
 * node scripts/analyze-lighthouse.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPORTS_DIR = path.join(__dirname, '..', 'reports', 'lighthouse');
const OUTPUT_DIR = path.join(__dirname, '..', 'reports', 'lighthouse-analysis');

/**
 * 分析单个 JSON 报告文件
 */
function analyzeReport(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    if (!data.lighthouseResult) {
      return null;
    }

    const result = data.lighthouseResult;
    const audits = result.audits || {};
    const categories = result.categories || {};
    const url = result.finalUrl || result.requestedUrl || 'Unknown';
    
    // 提取所有 audit
    const auditIssues = [];
    
    for (const [id, audit] of Object.entries(audits)) {
      if (!audit || audit.scoreDisplayMode === 'notApplicable' || audit.scoreDisplayMode === 'informative') {
        continue;
      }

      const score = audit.score;
      
      // 只关注有问题的 audit（分数 < 0.9 或 null）
      if (score === null || score < 0.9) {
        const issue = {
          id,
          title: audit.title || id,
          description: audit.description || '',
          score: score !== null ? Math.round(score * 100) : null,
          scoreDisplayMode: audit.scoreDisplayMode,
          displayValue: audit.displayValue || '',
          numericValue: audit.numericValue || null,
          numericUnit: audit.numericUnit || '',
          details: audit.details || null,
          // 提取优化建议
          opportunities: [],
          diagnostics: [],
        };

        // 提取详细信息
        if (audit.details) {
          if (audit.details.type === 'opportunity') {
            issue.opportunities.push({
              wastedBytes: audit.details.overallSavingsMs || 0,
              wastedMs: audit.details.overallSavingsBytes || 0,
              items: audit.details.items || [],
            });
          } else if (audit.details.type === 'table') {
            issue.diagnostics = audit.details.items || [];
          } else if (audit.details.items) {
            issue.diagnostics = audit.details.items;
          }
        }

        auditIssues.push(issue);
      }
    }

    // 按分数排序（分数越低越严重）
    auditIssues.sort((a, b) => {
      if (a.score === null) return 1;
      if (b.score === null) return -1;
      return a.score - b.score;
    });

    return {
      url,
      strategy: result.configSettings?.formFactor || 'unknown',
      categories: {
        performance: categories.performance?.score ? Math.round(categories.performance.score * 100) : null,
        accessibility: categories.accessibility?.score ? Math.round(categories.accessibility.score * 100) : null,
        bestPractices: categories['best-practices']?.score ? Math.round(categories['best-practices'].score * 100) : null,
        seo: categories.seo?.score ? Math.round(categories.seo.score * 100) : null,
      },
      issues: auditIssues,
      totalIssues: auditIssues.length,
      criticalIssues: auditIssues.filter(i => i.score !== null && i.score < 50).length,
      warnings: auditIssues.filter(i => i.score !== null && i.score >= 50 && i.score < 90).length,
    };
  } catch (error) {
    console.error(`❌ 分析文件失败 ${filePath}:`, error.message);
    return null;
  }
}

/**
 * 生成优化建议报告
 */
function generateOptimizationReport(allResults) {
  // 按问题分组
  const issueMap = new Map();
  
  for (const result of allResults) {
    if (!result) continue;
    
    for (const issue of result.issues) {
      const key = issue.id;
      
      if (!issueMap.has(key)) {
        issueMap.set(key, {
          id: issue.id,
          title: issue.title,
          description: issue.description,
          occurrences: [],
          avgScore: null,
          totalImpact: 0,
        });
      }
      
      const entry = issueMap.get(key);
      entry.occurrences.push({
        url: result.url,
        strategy: result.strategy,
        score: issue.score,
        displayValue: issue.displayValue,
        numericValue: issue.numericValue,
        numericUnit: issue.numericUnit,
      });
      
      if (issue.score !== null) {
        const scores = entry.occurrences
          .map(o => o.score)
          .filter(s => s !== null);
        if (scores.length > 0) {
          entry.avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        }
      }
    }
  }

  // 转换为数组并按影响排序
  const issues = Array.from(issueMap.values())
    .sort((a, b) => {
      // 按出现次数和平均分数排序
      if (a.occurrences.length !== b.occurrences.length) {
        return b.occurrences.length - a.occurrences.length;
      }
      if (a.avgScore === null) return 1;
      if (b.avgScore === null) return -1;
      return a.avgScore - b.avgScore;
    });

  return issues;
}

/**
 * 生成 HTML 报告
 */
function generateHTMLReport(allResults, optimizationIssues) {
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lighthouse 优化建议报告</title>
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
      margin-bottom: 10px;
      font-size: 2rem;
    }
    .subtitle {
      color: #6b7280;
      margin-bottom: 30px;
    }
    .summary {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }
    .summary-item {
      padding: 15px;
      background: #f9fafb;
      border-radius: 6px;
    }
    .summary-item strong { display: block; margin-bottom: 5px; color: #6b7280; }
    .summary-item .value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #1f2937;
    }
    .issue-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-left: 4px solid #ef4444;
    }
    .issue-card.warning { border-left-color: #f59e0b; }
    .issue-card.info { border-left-color: #3b82f6; }
    .issue-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 15px;
    }
    .issue-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 5px;
    }
    .issue-badge {
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 600;
    }
    .badge-critical { background: #fee2e2; color: #991b1b; }
    .badge-warning { background: #fef3c7; color: #92400e; }
    .badge-info { background: #dbeafe; color: #1e40af; }
    .issue-description {
      color: #4b5563;
      margin-bottom: 15px;
      line-height: 1.6;
    }
    .issue-stats {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
      padding: 10px;
      background: #f9fafb;
      border-radius: 6px;
    }
    .stat-item {
      display: flex;
      flex-direction: column;
    }
    .stat-label {
      font-size: 0.875rem;
      color: #6b7280;
    }
    .stat-value {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1f2937;
    }
    .occurrences {
      margin-top: 15px;
    }
    .occurrences-title {
      font-weight: 600;
      margin-bottom: 10px;
      color: #374151;
    }
    .occurrence-item {
      padding: 8px 12px;
      background: #f9fafb;
      border-radius: 4px;
      margin-bottom: 5px;
      font-size: 0.875rem;
    }
    .occurrence-url {
      color: #3b82f6;
      word-break: break-all;
    }
    .occurrence-score {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 600;
      margin-left: 8px;
    }
    .score-critical { background: #fee2e2; color: #991b1b; }
    .score-warning { background: #fef3c7; color: #92400e; }
    .code-block {
      background: #1f2937;
      color: #f9fafb;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      margin-top: 10px;
    }
    .toc {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .toc-title {
      font-weight: 600;
      margin-bottom: 15px;
      color: #1f2937;
    }
    .toc-list {
      list-style: none;
    }
    .toc-item {
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .toc-item:last-child {
      border-bottom: none;
    }
    .toc-link {
      color: #3b82f6;
      text-decoration: none;
    }
    .toc-link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔍 Lighthouse 优化建议报告</h1>
    <p class="subtitle">生成时间: ${new Date().toLocaleString('zh-CN')}</p>
    
    ${generateSummary(allResults)}
    
    ${generateTableOfContents(optimizationIssues)}
    
    <h2 style="margin: 30px 0 15px; color: #1f2937;">📋 详细优化建议</h2>
    ${generateIssuesList(optimizationIssues)}
  </div>
</body>
</html>`;

  return html;
}

function generateSummary(allResults) {
  const validResults = allResults.filter(r => r !== null);
  const totalPages = validResults.length;
  const totalIssues = validResults.reduce((sum, r) => sum + r.totalIssues, 0);
  const criticalIssues = validResults.reduce((sum, r) => sum + r.criticalIssues, 0);
  const warnings = validResults.reduce((sum, r) => sum + r.warnings, 0);
  
  const avgPerformance = validResults
    .map(r => r.categories.performance)
    .filter(s => s !== null)
    .reduce((sum, s, _, arr) => sum + s / arr.length, 0);
  
  const avgSEO = validResults
    .map(r => r.categories.seo)
    .filter(s => s !== null)
    .reduce((sum, s, _, arr) => sum + s / arr.length, 0);
  
  const avgAccessibility = validResults
    .map(r => r.categories.accessibility)
    .filter(s => s !== null)
    .reduce((sum, s, _, arr) => sum + s / arr.length, 0);

  return `
    <div class="summary">
      <h2>📊 总体统计</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <strong>测试页面数</strong>
          <span class="value">${totalPages}</span>
        </div>
        <div class="summary-item">
          <strong>总问题数</strong>
          <span class="value">${totalIssues}</span>
        </div>
        <div class="summary-item">
          <strong>严重问题</strong>
          <span class="value" style="color: #ef4444;">${criticalIssues}</span>
        </div>
        <div class="summary-item">
          <strong>警告问题</strong>
          <span class="value" style="color: #f59e0b;">${warnings}</span>
        </div>
        <div class="summary-item">
          <strong>平均性能</strong>
          <span class="value">${Math.round(avgPerformance)}</span>
        </div>
        <div class="summary-item">
          <strong>平均 SEO</strong>
          <span class="value">${Math.round(avgSEO)}</span>
        </div>
        <div class="summary-item">
          <strong>平均可访问性</strong>
          <span class="value">${Math.round(avgAccessibility)}</span>
        </div>
      </div>
    </div>
  `;
}

function generateTableOfContents(issues) {
  const items = issues.slice(0, 20).map((issue, index) => {
    const severity = issue.avgScore === null || issue.avgScore < 50 ? 'critical' : 
                    issue.avgScore < 90 ? 'warning' : 'info';
    return `
      <li class="toc-item">
        <a href="#issue-${index}" class="toc-link">
          ${issue.title} 
          <span class="occurrence-score score-${severity}">${issue.occurrences.length} 处</span>
        </a>
      </li>
    `;
  }).join('');

  return `
    <div class="toc">
      <div class="toc-title">📑 目录（前 20 个最常见问题）</div>
      <ul class="toc-list">
        ${items}
      </ul>
    </div>
  `;
}

function generateIssuesList(issues) {
  return issues.map((issue, index) => {
    const severity = issue.avgScore === null || issue.avgScore < 50 ? 'critical' : 
                    issue.avgScore < 90 ? 'warning' : 'info';
    const badgeClass = `badge-${severity}`;
    const cardClass = `issue-card ${severity}`;
    
    const occurrences = issue.occurrences.map(occ => {
      const scoreClass = occ.score === null || occ.score < 50 ? 'score-critical' :
                        occ.score < 90 ? 'score-warning' : 'score-info';
      return `
        <div class="occurrence-item">
          <span class="occurrence-url">${occ.url}</span>
          <span class="occurrence-score ${scoreClass}">
            ${occ.strategy} - ${occ.score !== null ? occ.score : 'N/A'}
            ${occ.displayValue ? ` (${occ.displayValue})` : ''}
          </span>
        </div>
      `;
    }).join('');

    return `
      <div id="issue-${index}" class="${cardClass}">
        <div class="issue-header">
          <div>
            <div class="issue-title">${issue.title}</div>
            <div class="issue-badge ${badgeClass}">
              ${issue.occurrences.length} 个页面受影响 | 平均分数: ${issue.avgScore !== null ? issue.avgScore : 'N/A'}
            </div>
          </div>
        </div>
        <div class="issue-description">
          ${issue.description}
        </div>
        <div class="issue-stats">
          <div class="stat-item">
            <span class="stat-label">问题 ID</span>
            <span class="stat-value">${issue.id}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">出现次数</span>
            <span class="stat-value">${issue.occurrences.length}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">平均分数</span>
            <span class="stat-value">${issue.avgScore !== null ? issue.avgScore : 'N/A'}</span>
          </div>
        </div>
        <div class="occurrences">
          <div class="occurrences-title">受影响的页面：</div>
          ${occurrences}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 生成 Markdown 报告
 */
function generateMarkdownReport(allResults, optimizationIssues) {
  let md = `# Lighthouse 优化建议报告\n\n`;
  md += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;
  
  md += `## 📊 总体统计\n\n`;
  const validResults = allResults.filter(r => r !== null);
  md += `- 测试页面数: ${validResults.length}\n`;
  md += `- 总问题数: ${validResults.reduce((sum, r) => sum + r.totalIssues, 0)}\n`;
  md += `- 严重问题: ${validResults.reduce((sum, r) => sum + r.criticalIssues, 0)}\n`;
  md += `- 警告问题: ${validResults.reduce((sum, r) => sum + r.warnings, 0)}\n\n`;
  
  md += `## 📋 优化建议\n\n`;
  
  optimizationIssues.forEach((issue, index) => {
    const severity = issue.avgScore === null || issue.avgScore < 50 ? '🔴 严重' : 
                    issue.avgScore < 90 ? '🟡 警告' : '🔵 信息';
    
    md += `### ${index + 1}. ${issue.title} ${severity}\n\n`;
    md += `**问题 ID**: \`${issue.id}\`\n\n`;
    md += `**描述**: ${issue.description}\n\n`;
    md += `**影响范围**: ${issue.occurrences.length} 个页面\n`;
    md += `**平均分数**: ${issue.avgScore !== null ? issue.avgScore : 'N/A'}\n\n`;
    
    md += `**受影响的页面**:\n`;
    issue.occurrences.forEach(occ => {
      md += `- ${occ.url} (${occ.strategy}) - 分数: ${occ.score !== null ? occ.score : 'N/A'}${occ.displayValue ? ` - ${occ.displayValue}` : ''}\n`;
    });
    
    md += `\n---\n\n`;
  });
  
  return md;
}

/**
 * 主函数
 */
async function main() {
  console.log('🔍 开始分析 Lighthouse 报告...\n');

  if (!fs.existsSync(REPORTS_DIR)) {
    console.error(`❌ 报告目录不存在: ${REPORTS_DIR}`);
    process.exit(1);
  }

  // 获取所有 JSON 文件
  const files = fs.readdirSync(REPORTS_DIR)
    .filter(file => file.endsWith('.json') && !file.includes('report'))
    .map(file => path.join(REPORTS_DIR, file));

  console.log(`📁 找到 ${files.length} 个报告文件\n`);

  // 分析所有报告
  const allResults = [];
  for (const file of files) {
    const result = analyzeReport(file);
    if (result) {
      allResults.push(result);
    }
  }

  console.log(`✅ 成功分析 ${allResults.length} 个报告\n`);

  // 生成优化建议
  const optimizationIssues = generateOptimizationReport(allResults);
  console.log(`📋 发现 ${optimizationIssues.length} 个需要优化的问题\n`);

  // 创建输出目录
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 生成 HTML 报告
  const htmlReport = generateHTMLReport(allResults, optimizationIssues);
  const htmlPath = path.join(OUTPUT_DIR, 'optimization-report.html');
  fs.writeFileSync(htmlPath, htmlReport);
  console.log(`✅ HTML 报告: ${htmlPath}`);

  // 生成 Markdown 报告
  const mdReport = generateMarkdownReport(allResults, optimizationIssues);
  const mdPath = path.join(OUTPUT_DIR, 'optimization-report.md');
  fs.writeFileSync(mdPath, mdReport);
  console.log(`✅ Markdown 报告: ${mdPath}`);

  // 生成 JSON 数据
  const jsonData = {
    summary: {
      totalPages: allResults.length,
      totalIssues: allResults.reduce((sum, r) => sum + r.totalIssues, 0),
      criticalIssues: allResults.reduce((sum, r) => sum + r.criticalIssues, 0),
      warnings: allResults.reduce((sum, r) => sum + r.warnings, 0),
    },
    issues: optimizationIssues,
    pageDetails: allResults,
  };
  const jsonPath = path.join(OUTPUT_DIR, 'optimization-data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`✅ JSON 数据: ${jsonPath}`);

  // 输出前 10 个最严重的问题
  console.log(`\n🔴 前 10 个最严重的问题：\n`);
  optimizationIssues.slice(0, 10).forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.title}`);
    console.log(`   影响 ${issue.occurrences.length} 个页面 | 平均分数: ${issue.avgScore !== null ? issue.avgScore : 'N/A'}`);
    console.log(`   ID: ${issue.id}\n`);
  });

  console.log(`\n🎉 分析完成！报告已保存到: ${OUTPUT_DIR}`);
}

main().catch(error => {
  console.error('❌ 执行失败:', error);
  process.exit(1);
});


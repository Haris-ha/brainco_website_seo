# 🚀 BrainCo Lighthouse 自动化测试脚本

自动化批量测试所有页面的 Lighthouse 分数（性能、SEO、可访问性、最佳实践）。

## 📋 功能特性

- ✅ 自动解析 `sitemap.xml` 获取所有页面 URL
- ✅ 批量测试移动端和桌面端 Lighthouse 分数
- ✅ 生成详细的 HTML 可视化报告
- ✅ 生成 CSV 汇总文件（可用 Excel 打开）
- ✅ 保存每个页面的完整 JSON 报告
- ✅ 自动分析需要优化的页面
- ✅ 统计全站平均分数

## 🛠️ 安装依赖

```bash
npm install --save-dev xml2js dotenv
```

## 🔑 获取 Google PageSpeed API Key

1. 访问 [Google Cloud Console](https://console.cloud.google.com/apis/api/pagespeedonline.googleapis.com)
2. 创建新项目（或选择现有项目）
3. 启用 **PageSpeed Insights API**
4. 创建 API Key：
   - 点击"创建凭据" → "API 密钥"
   - 复制生成的 API Key

## ⚙️ 配置

在项目根目录的 `.env` 文件中添加：

```env
PAGESPEED_API_KEY=你的API密钥
NEXT_PUBLIC_SITE_URL_CN=https://www.brainco.cn
```

## 🚀 使用方法

### 方法 1：使用 npm 脚本（推荐）

```bash
npm run lighthouse
```

### 方法 2：直接运行

```bash
node scripts/lighthouse-audit.js
```

## 📊 输出结果

脚本运行后，会在 `reports/lighthouse/` 目录下生成：

### 1. HTML 报告 (`report.html`)
- 可视化报告，包含所有测试结果
- 总体统计信息
- 需要优化的页面列表
- 可直接在浏览器中打开查看

### 2. CSV 报告 (`report.csv`)
- 包含所有页面的详细分数
- 可用 Excel 打开进行数据分析
- 包含以下列：
  - URL
  - Strategy (mobile/desktop)
  - Performance
  - Accessibility
  - Best Practices
  - SEO
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
  - FCP (First Contentful Paint)
  - TTI (Time to Interactive)
  - Speed Index
  - Total Blocking Time

### 3. JSON 报告
每个页面会生成两个 JSON 文件：
- `mobile-{url}.json` - 移动端完整报告
- `desktop-{url}.json` - 桌面端完整报告

包含完整的 Lighthouse 数据，可用于深入分析。

## 📈 报告解读

### 分数标准

- **90-100** (绿色) - 优秀 ✅
- **50-89** (蓝色) - 良好 👍
- **25-49** (橙色) - 需要改进 ⚠️
- **0-24** (红色) - 差 ❌

### 核心 Web Vitals 指标

- **LCP (Largest Contentful Paint)**: 最大内容绘制时间
  - 优秀: < 2.5 秒
  - 需要改进: 2.5-4 秒
  - 差: > 4 秒

- **CLS (Cumulative Layout Shift)**: 累积布局偏移
  - 优秀: < 0.1
  - 需要改进: 0.1-0.25
  - 差: > 0.25

- **FID (First Input Delay)**: 首次输入延迟
  - 优秀: < 100 毫秒
  - 需要改进: 100-300 毫秒
  - 差: > 300 毫秒

## 🔍 如何分析结果

1. **打开 HTML 报告**：查看整体情况
2. **检查需要优化的页面**：HTML 报告底部会列出性能或 SEO 分数低于 50 的页面
3. **查看 CSV 报告**：在 Excel 中打开，可以：
   - 按性能分数排序，找出最慢的页面
   - 按 SEO 分数排序，找出 SEO 问题
   - 对比移动端和桌面端的差异
4. **查看 JSON 报告**：获取详细的优化建议

## ⚠️ 注意事项

1. **API 速率限制**：Google PageSpeed API 有速率限制，脚本已添加 1 秒延迟避免超限
2. **测试时间**：根据页面数量，完整测试可能需要较长时间（每个页面约 2-3 秒）
3. **网络要求**：需要能够访问 Google API
4. **API Key 配额**：免费配额每天约 25,000 次请求，足够测试大量页面

## 🎯 优化建议

根据测试结果，可以：

1. **性能优化**：
   - 优化图片（使用 WebP、懒加载）
   - 减少 JavaScript 体积
   - 使用 CDN
   - 启用缓存

2. **SEO 优化**：
   - 检查 meta 标签
   - 优化标题和描述
   - 确保结构化数据正确
   - 检查 robots.txt 和 sitemap

3. **可访问性优化**：
   - 添加 alt 文本
   - 确保颜色对比度
   - 添加 ARIA 标签
   - 键盘导航支持

## 📝 示例输出

```
🚀 开始 BrainCo Lighthouse 自动化测试

📌 基础 URL: https://www.brainco.cn
📌 语言: zh-CN, en-US, zh-TW

✅ 从 sitemap.xml 解析到 45 个 URL

[1/45] 测试: https://www.brainco.cn/zh-CN
  ⚡ 测试 mobile...
    ✅ 性能: 85, SEO: 92, 可访问性: 95
  ⚡ 测试 desktop...
    ✅ 性能: 92, SEO: 92, 可访问性: 95

📊 生成报告...
  ✅ HTML 报告: reports/lighthouse/report.html
  ✅ CSV 报告: reports/lighthouse/report.csv

📈 测试完成！统计信息：
  移动端: 45 个页面
  桌面端: 45 个页面
  移动端平均性能: 82
  桌面端平均性能: 88

🎉 所有报告已保存到: reports/lighthouse
   打开 reports/lighthouse/report.html 查看详细报告
```

## 🆘 常见问题

### Q: 提示 "未找到 PAGESPEED_API_KEY"
A: 确保在 `.env` 文件中添加了 `PAGESPEED_API_KEY=你的key`

### Q: API 请求失败
A: 检查：
1. API Key 是否正确
2. 是否启用了 PageSpeed Insights API
3. 网络是否正常
4. API 配额是否用完

### Q: sitemap.xml 解析失败
A: 脚本会自动使用默认页面列表，包含所有主要页面

### Q: 测试时间太长
A: 这是正常的，每个页面需要 2-3 秒。可以：
- 减少测试页面数量
- 只测试关键页面
- 分批测试

## 📚 相关资源

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse 文档](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)


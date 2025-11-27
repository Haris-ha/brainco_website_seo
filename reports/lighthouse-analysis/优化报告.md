# Lighthouse 优化建议报告

生成时间: 2025/11/18 18:18:05

## 📊 总体统计

- 测试页面数: 80
- 总问题数: 1885
- 严重问题: 730
- 警告问题: 275

## 📋 优化建议

### 1. Reduce unused JavaScript 🔴 严重

**问题 ID**: `unused-javascript`

**描述**: Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).

**影响范围**: 80 个页面
**平均分数**: 4

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 0 - Est savings of 129 KiB
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: 0 - Est savings of 152 KiB
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: 0 - Est savings of 130 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0 - Est savings of 24 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: 0 - Est savings of 152 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: 0 - Est savings of 130 KiB
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 0 - Est savings of 24 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 50 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: 50 - Est savings of 152 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 0 - Est savings of 103 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 50 - Est savings of 134 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0 - Est savings of 125 KiB
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 0 - Est savings of 44 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: 0 - Est savings of 152 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0 - Est savings of 127 KiB
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0 - Est savings of 103 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 0 - Est savings of 134 KiB
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 50 - Est savings of 126 KiB
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 50 - Est savings of 68 KiB
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0 - Est savings of 44 KiB
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 0 - Est savings of 74 KiB
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0 - Est savings of 46 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 0 - Est savings of 24 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 50 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 0 - Est savings of 68 KiB
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 0 - Est savings of 45 KiB
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: 50 - Est savings of 74 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0 - Est savings of 44 KiB
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0 - Est savings of 24 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0 - Est savings of 43 KiB
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0 - Est savings of 43 KiB
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0 - Est savings of 44 KiB
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: 0 - Est savings of 51 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0 - Est savings of 21 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 0 - Est savings of 74 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0 - Est savings of 21 KiB
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0 - Est savings of 43 KiB
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0 - Est savings of 44 KiB
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 0 - Est savings of 51 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0 - Est savings of 43 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0 - Est savings of 42 KiB
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0 - Est savings of 128 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: 0 - Est savings of 74 KiB
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0 - Est savings of 21 KiB

---

### 2. Legacy JavaScript 🔴 严重

**问题 ID**: `legacy-javascript-insight`

**描述**: Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://developer.chrome.com/docs/performance/insights/legacy-javascript)

**影响范围**: 80 个页面
**平均分数**: 36

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: 50 - Est savings of 11 KiB
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0 - Est savings of 11 KiB

---

### 3. Visual order on the page follows DOM order 🔴 严重

**问题 ID**: `visual-order-follows-dom`

**描述**: DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 4. Structured data is valid 🔴 严重

**问题 ID**: `structured-data`

**描述**: Run the [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 5. Custom controls have ARIA roles 🔴 严重

**问题 ID**: `custom-controls-roles`

**描述**: Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 6. Interactive elements indicate their purpose and state 🔴 严重

**问题 ID**: `interactive-element-affordance`

**描述**: Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 7. Interactive controls are keyboard focusable 🔴 严重

**问题 ID**: `focusable-controls`

**描述**: Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 8. The page has a logical tab order 🔴 严重

**问题 ID**: `logical-tab-order`

**描述**: Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 9. User focus is not accidentally trapped in a region 🔴 严重

**问题 ID**: `focus-traps`

**描述**: A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 10. Offscreen content is hidden from assistive technology 🔴 严重

**问题 ID**: `offscreen-content-hidden`

**描述**: Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 11. HTML5 landmark elements are used to improve navigation 🔴 严重

**问题 ID**: `use-landmarks`

**描述**: Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 12. The user's focus is directed to new content added to the page 🔴 严重

**问题 ID**: `managed-focus`

**描述**: If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 13. Custom controls have associated labels 🔴 严重

**问题 ID**: `custom-controls-labels`

**描述**: Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).

**影响范围**: 80 个页面
**平均分数**: N/A

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: N/A
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: N/A
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: N/A

---

### 14. Improve image delivery 🔴 严重

**问题 ID**: `image-delivery-insight`

**描述**: Reducing the download time of images can improve the perceived load time of the page and LCP. [Learn more about optimizing image size](https://developer.chrome.com/docs/performance/insights/image-delivery)

**影响范围**: 77 个页面
**平均分数**: 33

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 50 - Est savings of 116 KiB
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 50 - Est savings of 756 KiB
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: 50 - Est savings of 240 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0 - Est savings of 226 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0 - Est savings of 1,704 KiB
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 50 - Est savings of 116 KiB
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 50 - Est savings of 756 KiB
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: 50 - Est savings of 240 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0 - Est savings of 1,704 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0 - Est savings of 6,784 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0 - Est savings of 606 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0 - Est savings of 972 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 50 - Est savings of 4,994 KiB
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0 - Est savings of 3,366 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0 - Est savings of 14,520 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0 - Est savings of 98 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 50 - Est savings of 53 KiB
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0 - Est savings of 6,879 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0 - Est savings of 606 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0 - Est savings of 1,828 KiB
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0 - Est savings of 870 KiB
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 50 - Est savings of 5,266 KiB
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0 - Est savings of 3,365 KiB
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0 - Est savings of 14,520 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0 - Est savings of 98 KiB
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0 - Est savings of 1,202 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 50 - Est savings of 12 KiB
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 0 - Est savings of 225 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 50 - Est savings of 85 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0 - Est savings of 2,328 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0 - Est savings of 138 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 50 - Est savings of 1,631 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0 - Est savings of 578 KiB
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 50 - Est savings of 13,973 KiB
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0 - Est savings of 5,608 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 50 - Est savings of 71 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 50 - Est savings of 38 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 50 - Est savings of 2,328 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0 - Est savings of 138 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0 - Est savings of 2,128 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 50 - Est savings of 13,973 KiB
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 50 - Est savings of 1,268 KiB
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0 - Est savings of 12,070 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 50 - Est savings of 71 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0 - Est savings of 104 KiB
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 50 - Est savings of 792 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: 50 - Est savings of 6 KiB
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 50 - Est savings of 6 KiB

---

### 15. Displays images with incorrect aspect ratio 🔴 严重

**问题 ID**: `image-aspect-ratio`

**描述**: Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).

**影响范围**: 71 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0

---

### 16. Speed Index 🔴 严重

**问题 ID**: `speed-index`

**描述**: Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).

**影响范围**: 65 个页面
**平均分数**: 42

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 47 - 2.4 s
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 82 - 1.5 s
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: 39 - 2.6 s
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 44 - 2.4 s
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 45 - 2.4 s
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 41 - 2.5 s
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: 44 - 2.5 s
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 23 - 3.1 s
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 42 - 2.5 s
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 32 - 2.8 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 78 - 1.6 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 50 - 2.3 s
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 11 - 3.9 s
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 65 - 1.9 s
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 17 - 3.4 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 29 - 2.9 s
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 21 - 3.2 s
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 76 - 1.7 s
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 18 - 3.4 s
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 74 - 1.7 s
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 17 - 3.5 s
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 59 - 2.1 s
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 0 - 6.5 s
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 14 - 3.7 s
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 54 - 2.2 s
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 11 - 3.9 s
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 30 - 2.9 s
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 37 - 2.6 s
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 63 - 2.0 s
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 88 - 1.4 s
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 35 - 2.7 s
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 66 - 1.9 s
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 55 - 5.5 s
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 66 - 4.8 s
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 46 - 6.0 s
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 36 - 6.7 s
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 19 - 8.3 s
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 63 - 5.0 s
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 70 - 4.6 s
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 12 - 9.4 s
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 46 - 6.0 s
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 34 - 6.9 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 62 - 5.1 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0 - 21.0 s
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 24 - 7.7 s
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 58 - 5.3 s
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 5 - 11.3 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 2 - 13.1 s
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 19 - 8.3 s
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 63 - 5.0 s
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 86 - 3.6 s
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 71 - 4.6 s
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 82 - 3.9 s
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 42 - 6.3 s
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 68 - 4.7 s
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 5 - 11.3 s
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 2 - 13.2 s
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 38 - 6.6 s
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 4 - 11.7 s
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 39 - 6.5 s
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 30 - 7.2 s
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 69 - 4.7 s
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 41 - 6.3 s
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 55 - 5.5 s
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 75 - 4.4 s

---

### 17. Use efficient cache lifetimes 🔴 严重

**问题 ID**: `cache-insight`

**描述**: A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).

**影响范围**: 59 个页面
**平均分数**: 21

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 50 - Est savings of 8,380 KiB
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 0 - Est savings of 1,095 KiB
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: 50 - Est savings of 7 KiB
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: 50 - Est savings of 625 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0 - Est savings of 282 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0 - Est savings of 2,317 KiB
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 50 - Est savings of 147 KiB
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 50 - Est savings of 1,095 KiB
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: 50 - Est savings of 7 KiB
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: 50 - Est savings of 625 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0 - Est savings of 2,317 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0 - Est savings of 7,610 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0 - Est savings of 681 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0 - Est savings of 15,265 KiB
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 50 - Est savings of 6,021 KiB
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: 50 - Est savings of 7 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0 - Est savings of 15,158 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0 - Est savings of 15,852 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0 - Est savings of 3,517 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 50 - Est savings of 2 KiB
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 50 - Est savings of 59 KiB
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0 - Est savings of 7,782 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0 - Est savings of 681 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 50 - Est savings of 7 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0 - Est savings of 2,355 KiB
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0 - Est savings of 978 KiB
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 50 - Est savings of 6,329 KiB
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: 50 - Est savings of 7 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0 - Est savings of 15,158 KiB
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0 - Est savings of 15,852 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0 - Est savings of 3,517 KiB
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0 - Est savings of 1,554 KiB
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 50 - Est savings of 7 KiB
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 50 - Est savings of 3,046 KiB
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0 - Est savings of 1,212 KiB
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 50 - Est savings of 9 KiB
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0 - Est savings of 639 KiB
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 0 - Est savings of 282 KiB
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: 50 - Est savings of 9 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 50 - Est savings of 11,587 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0 - Est savings of 2,583 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0 - Est savings of 265 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 50 - Est savings of 1,856 KiB
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0 - Est savings of 791 KiB
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0 - Est savings of 16,282 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0 - Est savings of 5,863 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 50 - Est savings of 15,849 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 50 - Est savings of 1,627 KiB
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 50 - Est savings of 9 KiB
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0 - Est savings of 2,585 KiB
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0 - Est savings of 280 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0 - Est savings of 7,714 KiB
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0 - Est savings of 16,282 KiB
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 50 - Est savings of 9 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0 - Est savings of 12,805 KiB
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0 - Est savings of 12,420 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 50 - Est savings of 15,849 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0 - Est savings of 176 KiB
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0 - Est savings of 1,603 KiB

---

### 18. LCP breakdown 🔴 严重

**问题 ID**: `lcp-breakdown-insight`

**描述**: Each [subpart has specific improvement strategies](https://developer.chrome.com/docs/performance/insights/lcp-breakdown). Ideally, most of the LCP time should be spent on loading the resources, not within delays.

**影响范围**: 58 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0

---

### 19. Document does not have a valid `rel=canonical` 🔴 严重

**问题 ID**: `canonical`

**描述**: Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).

**影响范围**: 54 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/company (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/company (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/contact (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/company (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: 0

---

### 20. Largest Contentful Paint 🔴 严重

**问题 ID**: `largest-contentful-paint`

**描述**: Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

**影响范围**: 49 个页面
**平均分数**: 49

**受影响的页面**:
- https://brainco-website-seo.vercel.app/about (desktop) - 分数: 78 - 1.6 s
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 44 - 2.6 s
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 41 - 2.7 s
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 9 - 4.8 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 79 - 1.5 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 79 - 1.5 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 21 - 3.7 s
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 72 - 1.7 s
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 87 - 1.3 s
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 4 - 5.9 s
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 89 - 1.2 s
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 69 - 1.8 s
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 62 - 2.0 s
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 19 - 3.8 s
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 77 - 1.6 s
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 86 - 1.3 s
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 67 - 1.9 s
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 21 - 5.3 s
- https://brainco-website-seo.vercel.app/company (mobile) - 分数: 87 - 2.6 s
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 8 - 6.7 s
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 39 - 4.4 s
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 76 - 3.1 s
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 84 - 2.8 s
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 84 - 2.7 s
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 69 - 3.3 s
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 25 - 5.1 s
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 15 - 5.8 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 28 - 4.9 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 70 - 3.3 s
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 6 - 7.1 s
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 24 - 5.2 s
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 19 - 5.5 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 82 - 2.8 s
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 11 - 6.2 s
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 39 - 4.4 s
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 50 - 4.0 s
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 62 - 3.5 s
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 83 - 2.8 s
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 82 - 2.9 s
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 47 - 4.1 s
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 26 - 5.0 s
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0 - 10.1 s
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 12 - 6.1 s
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 84 - 2.8 s
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 54 - 3.8 s
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 25 - 5.1 s
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 44 - 4.2 s
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 1 - 9.2 s
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 80 - 2.9 s

---

### 21. Layout shift culprits 🔴 严重

**问题 ID**: `cls-culprits-insight`

**描述**: Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://developer.chrome.com/docs/performance/insights/cls-culprit), such as elements being added, removed, or their fonts changing as the page loads.

**影响范围**: 45 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0

---

### 22. Avoid large layout shifts 🔴 严重

**问题 ID**: `layout-shifts`

**描述**: These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)

**影响范围**: 45 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 0 - 2 layout shifts found
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0 - 8 layout shifts found
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 0 - 2 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0 - 8 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0 - 7 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0 - 7 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0 - 6 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0 - 10 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0 - 6 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0 - 11 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0 - 4 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0 - 10 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0 - 7 layout shifts found
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0 - 9 layout shifts found
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0 - 7 layout shifts found
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0 - 6 layout shifts found
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0 - 7 layout shifts found
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0 - 8 layout shifts found
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0 - 6 layout shifts found
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0 - 9 layout shifts found
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0 - 4 layout shifts found
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 0 - 2 layout shifts found
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0 - 1 layout shift found
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0 - 1 layout shift found
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0 - 1 layout shift found
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0 - 4 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0 - 4 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0 - 4 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0 - 7 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0 - 2 layout shifts found
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0 - 4 layout shifts found
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0 - 5 layout shifts found
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0 - 2 layout shifts found
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0 - 3 layout shifts found
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0 - 1 layout shift found

---

### 23. Cumulative Layout Shift 🔴 严重

**问题 ID**: `cumulative-layout-shift`

**描述**: Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).

**影响范围**: 45 个页面
**平均分数**: 10

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 3 - 0.888
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 3 - 0.888
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0 - 1.484
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 2 - 0.974
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 3 - 0.889
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 3 - 0.883
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 1 - 1.225
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 4 - 0.852
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 3 - 0.882
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 3 - 0.878
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 73 - 0.161
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 69 - 0.173
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 3 - 0.877
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 88 - 0.106
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 2 - 1.002
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 89 - 0.104
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 2 - 1.003
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 33 - 0.336

---

### 24. Forced reflow 🔴 严重

**问题 ID**: `forced-reflow-insight`

**描述**: A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developer.chrome.com/docs/performance/insights/forced-reflow) and possible mitigations.

**影响范围**: 44 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0

---

### 25. Browser errors were logged to the console 🔴 严重

**问题 ID**: `errors-in-console`

**描述**: Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)

**影响范围**: 38 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0

---

### 26. LCP request discovery 🔴 严重

**问题 ID**: `lcp-discovery-insight`

**描述**: [Optimize LCP](https://developer.chrome.com/docs/performance/insights/lcp-discovery) by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loading

**影响范围**: 36 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 0

---

### 27. Time to Interactive 🟡 警告

**问题 ID**: `interactive`

**描述**: Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).

**影响范围**: 35 个页面
**平均分数**: 60

**受影响的页面**:
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 87 - 2.6 s
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 85 - 2.7 s
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 43 - 4.8 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 65 - 3.7 s
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 1 - 12.1 s
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 26 - 6.0 s
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 61 - 3.9 s
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 88 - 2.6 s
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 57 - 6.6 s
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 56 - 6.7 s
- https://brainco-website-seo.vercel.app/easleep-specification (mobile) - 分数: 83 - 4.4 s
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 86 - 4.2 s
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 70 - 5.5 s
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 43 - 7.9 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 74 - 5.2 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 36 - 8.7 s
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (mobile) - 分数: 51 - 7.2 s
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 74 - 5.2 s
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 19 - 11.4 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 84 - 4.3 s
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 51 - 7.2 s
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 80 - 4.7 s
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 85 - 4.2 s
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 85 - 4.2 s
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 50 - 7.3 s
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 72 - 5.4 s
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 19 - 11.3 s
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 89 - 3.8 s
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 88 - 4.0 s
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 19 - 11.4 s
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 38 - 8.5 s
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 49 - 7.3 s
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 86 - 4.2 s
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 83 - 4.5 s
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 31 - 9.3 s

---

### 28. Avoid enormous network payloads 🟡 警告

**问题 ID**: `total-byte-weight`

**描述**: Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).

**影响范围**: 28 个页面
**平均分数**: 50

**受影响的页面**:
- https://brainco-website-seo.vercel.app/ (desktop) - 分数: 50 - Total size was 8,982 KiB
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 50 - Total size was 2,956 KiB
- https://brainco-website-seo.vercel.app/en-US (desktop) - 分数: 50 - Total size was 8,966 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 50 - Total size was 2,947 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 50 - Total size was 8,253 KiB
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 50 - Total size was 15,875 KiB
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 50 - Total size was 6,609 KiB
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (desktop) - 分数: 50 - Total size was 15,762 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (desktop) - 分数: 50 - Total size was 16,457 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (desktop) - 分数: 50 - Total size was 4,114 KiB
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 50 - Total size was 8,434 KiB
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 50 - Total size was 2,974 KiB
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 50 - Total size was 6,943 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (desktop) - 分数: 50 - Total size was 15,771 KiB
- https://brainco-website-seo.vercel.app/products/mobius (desktop) - 分数: 50 - Total size was 16,466 KiB
- https://brainco-website-seo.vercel.app/products/revo2 (desktop) - 分数: 50 - Total size was 4,122 KiB
- https://brainco-website-seo.vercel.app/ (mobile) - 分数: 50 - Total size was 3,541 KiB
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 50 - Total size was 11,983 KiB
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 50 - Total size was 2,992 KiB
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 50 - Total size was 16,662 KiB
- https://brainco-website-seo.vercel.app/en-US/products/mobius (mobile) - 分数: 50 - Total size was 6,234 KiB
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 50 - Total size was 16,256 KiB
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 50 - Total size was 2,996 KiB
- https://brainco-website-seo.vercel.app/health/focus-zen (mobile) - 分数: 50 - Total size was 8,091 KiB
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 50 - Total size was 16,664 KiB
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 50 - Total size was 13,176 KiB
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 50 - Total size was 12,794 KiB
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 50 - Total size was 16,258 KiB

---

### 29. Background and foreground colors do not have a sufficient contrast ratio. 🔴 严重

**问题 ID**: `color-contrast`

**描述**: Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast).

**影响范围**: 19 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/recruit/jobs (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/recruit/jobs (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/easleep (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0

---

### 30. Minimize main-thread work 🔴 严重

**问题 ID**: `mainthread-work-breakdown`

**描述**: Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)

**影响范围**: 18 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/recruit (desktop) - 分数: 0 - 13.5 s
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0 - 2.5 s
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0 - 2.0 s
- https://brainco-website-seo.vercel.app/recruit (desktop) - 分数: 0 - 4.0 s
- https://brainco-website-seo.vercel.app/technology (desktop) - 分数: 0 - 2.9 s
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 0 - 2.6 s
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (mobile) - 分数: 0 - 2.4 s
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0 - 2.6 s
- https://brainco-website-seo.vercel.app/en-US/products/brain-robotics (mobile) - 分数: 0 - 2.4 s
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (mobile) - 分数: 0 - 2.0 s
- https://brainco-website-seo.vercel.app/en-US/products/revo2 (mobile) - 分数: 0 - 2.8 s
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0 - 2.4 s
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 0 - 2.2 s
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0 - 2.1 s
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0 - 2.3 s
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 0 - 2.4 s
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 0 - 3.1 s
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0 - 2.5 s

---

### 31. Max Potential First Input Delay 🟡 警告

**问题 ID**: `max-potential-fid`

**描述**: The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).

**影响范围**: 17 个页面
**平均分数**: 79

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 87 - 140 ms
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 86 - 140 ms
- https://brainco-website-seo.vercel.app/news (desktop) - 分数: 89 - 130 ms
- https://brainco-website-seo.vercel.app/about (mobile) - 分数: 86 - 140 ms
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 47 - 260 ms
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 89 - 130 ms
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 88 - 130 ms
- https://brainco-website-seo.vercel.app/en-US/recruit (mobile) - 分数: 88 - 140 ms
- https://brainco-website-seo.vercel.app/health/focus-xin (mobile) - 分数: 82 - 160 ms
- https://brainco-website-seo.vercel.app/health/oxyzen (mobile) - 分数: 84 - 150 ms
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 50 - 250 ms
- https://brainco-website-seo.vercel.app/products/brain-robotics (mobile) - 分数: 85 - 150 ms
- https://brainco-website-seo.vercel.app/products/mobius (mobile) - 分数: 77 - 170 ms
- https://brainco-website-seo.vercel.app/products/revo1 (mobile) - 分数: 58 - 230 ms
- https://brainco-website-seo.vercel.app/products/revo2 (mobile) - 分数: 86 - 140 ms
- https://brainco-website-seo.vercel.app/recruit (mobile) - 分数: 83 - 150 ms
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 84 - 150 ms

---

### 32. Heading elements are not in a sequentially-descending order 🔴 严重

**问题 ID**: `heading-order`

**描述**: Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.11/heading-order).

**影响范围**: 15 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/focus-xin (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/contact (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/products (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0

---

### 33. Image elements do not have explicit `width` and `height` 🟡 警告

**问题 ID**: `unsized-images`

**描述**: Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)

**影响范围**: 12 个页面
**平均分数**: 50

**受影响的页面**:
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/en-US/health/easleep (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/en-US/health/oxyzen (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/en-US/health/starkids (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/health/easleep (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/health/oxyzen (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/health/starkids (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 50
- https://brainco-website-seo.vercel.app/education/brain-ai (mobile) - 分数: 50
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (mobile) - 分数: 50

---

### 34. Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`). 🔴 严重

**问题 ID**: `list`

**描述**: Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.11/list).

**影响范围**: 4 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/easleep-specification (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/products/revo1 (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/products/revo1 (desktop) - 分数: 0

---

### 35. Elements with visible text labels do not have matching accessible names. 🔴 严重

**问题 ID**: `label-content-name-mismatch`

**描述**: Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.11/label-content-name-mismatch).

**影响范围**: 4 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/education/brain-ai (desktop) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/health/focus-xin (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/health/starkids (mobile) - 分数: 0

---

### 36. Touch targets do not have sufficient size or spacing. 🔴 严重

**问题 ID**: `target-size`

**描述**: Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.11/target-size).

**影响范围**: 4 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/news (mobile) - 分数: 0
- https://brainco-website-seo.vercel.app/technology (mobile) - 分数: 0

---

### 37. Links do not have descriptive text 🔴 严重

**问题 ID**: `link-text`

**描述**: Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).

**影响范围**: 2 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/technology (desktop) - 分数: 0 - 7 links found
- https://brainco-website-seo.vercel.app/en-US/technology (mobile) - 分数: 0 - 7 links found

---

### 38. Serves images with low resolution 🔴 严重

**问题 ID**: `image-size-responsive`

**描述**: Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).

**影响范围**: 1 个页面
**平均分数**: 0

**受影响的页面**:
- https://brainco-website-seo.vercel.app/en-US/health/focus-zen (desktop) - 分数: 0

---


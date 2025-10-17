# 阶段 2: 架构搭建 - 完成总结

## ✅ 已完成工作

### 1. 语言代码标准化

**从**:
- `zh` → `zh-CN` （简体中文）
- `en` → `en-US` （英文）
- `zh-TW` → `zh-TW` （繁体中文）

**符合**: BCP 47 国际标准，便于 SEO 和 hreflang 配置

**文件变更**:
- ✅ `src/utils/AppConfig.ts` - 更新语言配置
- ✅ `src/locales/zh.json` → `src/locales/zh-CN.json`
- ✅ `src/locales/en.json` → `src/locales/en-US.json`
- ✅ `src/locales/zh-TW.json` - 保持不变

### 2. 域名和地理配置

**新增配置** (`src/utils/AppConfig.ts`):

```typescript
// 域名配置
export const DomainConfig = {
  cn: 'https://www.brainco.cn',  // 中国站
  us: 'https://www.brainco.tech', // 美国站
};

// 语言与域名映射
export const LocaleToDomain = {
  'zh-CN': brainco.cn,
  'zh-TW': brainco.cn,
  'en-US': brainco.tech,
};

// IP 定位到语言的映射
export const CountryToLocale = {
  'CN': 'zh-CN',     // 中国大陆
  'TW': 'zh-TW',     // 台湾
  'HK': 'zh-TW',     // 香港
  'MO': 'zh-TW',     // 澳门
  'US': 'en-US',     // 美国等其他国家
  // ...
};
```

### 3. IP 定位与智能跳转

**中间件功能** (`src/middleware.ts`):

#### ✅ 搜索引擎爬虫检测
- 识别 Google、百度、Bing 等爬虫
- 爬虫访问时**不执行跳转**，确保 SEO 正常

#### ✅ 地理位置识别
支持多种 IP 定位来源（优先级从高到低）：
1. CloudFront headers: `cloudfront-viewer-country`
2. CDN headers: `x-forwarded-country`
3. Next.js/Vercel geo: `request.geo.country`

#### ✅ 智能跳转逻辑
- 中国用户访问 `.tech` → 自动跳转到 `.cn`
- 非中国用户访问 `.cn` → 自动跳转到 `.tech`
- 港澳台用户可以访问两个站点
- 使用 307 临时跳转（不影响 SEO）

### 4. 依赖包更新

**新增核心依赖**:
```json
{
  "@tanstack/react-query": "^5.62.0",  // 数据请求管理
  "axios": "^1.7.9",                    // HTTP 客户端
  "framer-motion": "^12.0.0",           // 动画库
  "next-seo": "^6.7.0",                 // SEO 优化
  "next-sitemap": "^5.1.0",             // Sitemap 生成
  "qs": "^6.13.2",                      // 查询字符串解析
  "react-hook-form": "^7.54.2",         // 表单管理
  "sharp": "^0.33.6"                    // 图片优化
}
```

**新增开发依赖**:
```json
{
  "@hookform/resolvers": "^3.10.0",     // 表单验证集成
  "@tanstack/react-query-devtools": "^5.62.0",  // 开发工具
  "@types/qs": "^6.9.18"                // TS 类型
}
```

### 5. SEO 配置

**Sitemap 配置** (`next-sitemap.config.js`):

#### ✅ 多语言支持
```javascript
alternateRefs: [
  { href: 'https://www.brainco.cn', hreflang: 'zh-CN' },
  { href: 'https://www.brainco.tech', hreflang: 'en-US' },
  { href: 'https://www.brainco.cn/zh-TW', hreflang: 'zh-TW' },
  { href: 'https://www.brainco.cn', hreflang: 'x-default' },
]
```

#### ✅ Robots.txt 配置
- 允许所有爬虫访问公开页面
- 禁止访问 API 和购买页面
- 百度爬虫特殊配置（crawlDelay）

#### ✅ 优先级和更新频率
- 首页: priority 1.0, daily
- 产品页: priority 0.9, weekly
- 新闻页: priority 0.8, daily
- 公司页: priority 0.6, monthly

### 6. 环境变量模板

**新增配置项** (`.env.example`):
```bash
# 双站域名
NEXT_PUBLIC_SITE_URL_CN=https://www.brainco.cn
NEXT_PUBLIC_SITE_URL_US=https://www.brainco.tech

# Strapi CMS
STRAPI_API_URL=https://cms.brainco.tech
STRAPI_API_TOKEN=your_token
NEXT_PUBLIC_STRAPI_URL=https://cms.brainco.tech

# 分析工具
NEXT_PUBLIC_GA_ID_US=G-XXXXXXXXXX
NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your_id
```

---

## 📊 架构对比

| 特性 | 之前 | 现在 |
|------|------|------|
| 语言代码 | zh, en, zh-TW | zh-CN, en-US, zh-TW ✅ |
| 域名管理 | 单域名 | 双域名（cn / tech）✅ |
| IP 跳转 | 无 | 智能跳转 ✅ |
| SEO 爬虫 | 无特殊处理 | 爬虫检测 ✅ |
| Sitemap | 基础 | 多语言 + 双域名 ✅ |
| 依赖包 | 基础包 | +8 个核心包 ✅ |

---

## 🎯 技术亮点

### 1. 爬虫友好的跳转策略
```typescript
const isBot = /bot|crawler|spider|crawling/i.test(userAgent);
if (!isBot) {
  // 只对真实用户执行跳转
  // 爬虫可以正常抓取所有内容
}
```

### 2. 灵活的 IP 定位
支持多种 CDN 和平台：
- AWS CloudFront
- 阿里云 CDN
- Vercel Edge Network
- 自定义 IP 定位服务

### 3. 307 临时跳转
使用 HTTP 307 而非 301：
- 不会被搜索引擎缓存
- 用户可以通过书签访问原域名
- 便于测试和调试

### 4. 动态 Sitemap 生成
- 自动识别页面优先级
- 根据路径设置更新频率
- 支持多域名和多语言

---

## ⚠️ 已知限制和注意事项

### 1. IP 定位准确性
- **问题**: IP 定位可能不准确（VPN、代理）
- **解决**: 提供手动域名切换选项

### 2. CDN 配置依赖
- **问题**: 需要 CDN 提供 GeoIP headers
- **解决**: 
  - AWS CloudFront: 默认支持
  - 阿里云: 需要开启 GeoIP 功能
  - Vercel: 自动支持

### 3. 搜索引擎索引
- **问题**: 两个域名可能导致内容重复
- **解决**: 
  - 使用 canonical 标签
  - hreflang 标签指定语言区域
  - sitemap 中明确标注

---

## 📝 下一步任务

### 立即需要（Day 3-4）

#### 1. 安装新依赖
```bash
npm install
```

#### 2. 配置环境变量
创建 `.env.local` 文件，填入实际值：
```bash
cp .env.example .env.local
# 编辑 .env.local
```

#### 3. 测试基础功能
```bash
npm run dev
# 访问 http://localhost:3000
# 测试语言切换
```

#### 4. 验证配置
- [ ] 检查所有语言文件是否正常加载
- [ ] 测试路由是否正常工作
- [ ] 验证中间件逻辑

### 准备进入阶段 3（Day 5-12）

#### 页面开发准备
1. **设计系统梳理**
   - 从 Vue3 项目提取颜色、字体、间距
   - 定义 Tailwind 自定义主题

2. **组件库搭建**
   - 基础 UI 组件（Button, Card, Input）
   - 布局组件（Header, Footer, Navigation）
   - 产品组件（ProductCard, ProductHero）

3. **资源迁移**
   - 图片资源复制到 `public/images/`
   - 图标资源整理
   - 字体文件（如需要）

---

## 📚 相关文档

- [重构方案](./REFACTOR_PLAN.md)
- [实施路线图](./IMPLEMENTATION_ROADMAP.md)
- [进度追踪](./PROGRESS.md)
- [项目概览](./README.md)

---

## ✅ 验收标准

- [x] 语言代码符合 BCP 47 标准
- [x] 双域名配置完成
- [x] IP 定位中间件实现
- [x] 爬虫检测逻辑正确
- [x] Sitemap 配置完成
- [x] 所有必要依赖添加
- [ ] 本地测试通过
- [ ] 环境变量配置完成

---

**阶段状态**: ✅ 代码完成，待测试  
**下一阶段**: 阶段 3 - 页面模板开发  
**预计开始**: Day 5  

**完成日期**: 2025-01-XX  
**负责人**: AI Assistant






# BrainCo 官网 - Next.js 版本

这是 BrainCo 官方网站的 Next.js 重构版本，从原来的 Vue3 项目迁移而来。

## 项目概述

BrainCo 是脑机接口技术领导者，本网站主要用于展示公司产品、企业信息和新闻动态。

## 技术栈

- **Next.js 15.5** - React 框架，支持 SSR 和 SSG
- **React 19** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架
- **next-intl** - 国际化支持（中文/英文）
- **ESLint** - 代码规范
- **Zod** - 数据验证

## 项目特点

### 1. 清洁的模板
本项目已移除以下不必要的功能：
- ❌ Clerk 认证系统（无需登录功能）
- ❌ 数据库配置（Drizzle ORM、PGLite）
- ❌ Storybook
- ❌ 监控工具（Sentry、Checkly、PostHog、Arcjet）
- ❌ 演示页面和组件

### 2. 静态网站
- 所有页面都是静态生成，SEO 友好
- 支持渐进式静态再生成（ISR）
- 无需数据库，适合使用 Headless CMS

### 3. 国际化
- 支持简体中文、英文和繁体中文（港澳台）
- 使用 next-intl 进行国际化
- 使用 Crowdin 管理翻译
- URL 支持语言前缀（`/zh`, `/en`, `/zh-TW`）

## 目录结构

```
src/
├── app/
│   ├── [locale]/                 # 国际化路由
│   │   ├── (marketing)/          # 营销页面组
│   │   │   ├── page.tsx          # 首页
│   │   │   ├── products/         # 产品页面
│   │   │   ├── company/          # 公司介绍
│   │   │   ├── news/             # 新闻中心
│   │   │   └── about/            # 关于我们
│   │   └── layout.tsx            # 根布局
│   ├── robots.ts                 # SEO: robots.txt
│   └── sitemap.ts                # SEO: sitemap.xml
├── components/
│   ├── Navigation.tsx            # 导航栏组件
│   └── LocaleSwitcher.tsx        # 语言切换器
├── libs/
│   ├── Env.ts                    # 环境变量配置
│   ├── I18n.ts                   # 国际化配置
│   └── I18nRouting.ts            # 路由配置
├── locales/
│   ├── zh.json                   # 中文翻译
│   └── en.json                   # 英文翻译
├── styles/
│   └── global.css                # 全局样式
└── utils/
    ├── AppConfig.ts              # 应用配置
    └── Helpers.ts                # 工具函数
```

## 原 Vue3 项目功能模块

根据原项目分析，主要包含以下功能模块：

### 产品展示
- 智能仿生手 (brain-robotics)
- 智能轻巧仿生腿 (mobius)
- 开星果 (starkids)
- 睡眠产品 (easleep)
- 冥想产品 (focus-zen)
- 工业灵巧手 (dexterous)
- EMG 产品 (emg)

### 企业信息
- 公司介绍
- 技术展示
- 新闻中心
- 招聘信息
- 联系方式

### 其他功能
- 购买流程（需要后续开发）
- 在线客服（需要后续开发）
- 活动页面（需要后续开发）

## 开发指南

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm run start
```

### 代码检查

```bash
# ESLint 检查
npm run lint

# 自动修复
npm run lint:fix

# TypeScript 类型检查
npm run check:types
```

### 国际化检查

```bash
npm run check:i18n
```

### Crowdin 翻译同步

```bash
# 上传源文件到 Crowdin
npm run crowdin:upload

# 从 Crowdin 下载翻译
npm run crowdin:download

# 完整同步（上传 + 下载）
npm run crowdin:sync
```

详细的 Crowdin 使用说明请参考 [CROWDIN_GUIDE.md](./CROWDIN_GUIDE.md)

## CMS 集成建议

本项目不包含数据库，推荐使用以下 Headless CMS 方案：

### 1. Strapi（推荐）
- 开源免费
- 支持自托管
- 有完善的 REST 和 GraphQL API
- 适合管理产品、新闻等内容

```bash
# 安装 Strapi 客户端
npm install @strapi/client
```

### 2. Sanity
- 实时协作
- 强大的内容建模
- 免费层级足够使用

### 3. Contentful
- 企业级 CMS
- 强大的 CDN
- 内容预览功能

### 4. Markdown 文件（最简单）
- 使用 `gray-matter` 解析 frontmatter
- 使用 `remark` 渲染 Markdown
- 适合新闻文章和静态内容

```bash
npm install gray-matter remark remark-html
```

## SEO 优化

项目已包含以下 SEO 优化：

### 1. Metadata
每个页面都有独立的 title 和 description

### 2. Sitemap
自动生成 sitemap.xml：`/sitemap.xml`

### 3. Robots.txt
配置搜索引擎爬虫规则：`/robots.txt`

### 4. 静态生成
所有页面在构建时生成，加载速度快

### 5. 国际化 URL
支持 `/zh/products` 和 `/en/products`

## 部署

### Vercel（推荐）

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

### 其他平台
- Netlify
- Cloudflare Pages
- 自托管（Node.js 服务器）

## 环境变量

创建 `.env.local` 文件：

```bash
# 应用 URL（可选）
NEXT_PUBLIC_APP_URL=https://www.brainco.cn

# Node 环境
NODE_ENV=production
```

## 后续开发计划

- [ ] 接入 CMS 系统管理新闻内容
- [ ] 迁移所有产品页面详情
- [ ] 实现购买流程（如需要）
- [ ] 添加在线客服功能
- [ ] 优化移动端响应式设计
- [ ] 添加产品图片和视频
- [ ] 实现新闻详情页
- [ ] 添加 sitemap 自动更新
- [ ] 配置 CDN 加速

## 如何重新添加数据库（如需要）

如果后期需要数据库支持，可以快速添加：

### 1. 安装 Drizzle ORM

```bash
npm install drizzle-orm pg
npm install -D drizzle-kit @types/pg
```

### 2. 创建配置文件

```typescript
// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/models/Schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

### 3. 更新环境变量

```typescript
// src/libs/Env.ts
export const Env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
  },
  // ...
});
```

## 许可证

本项目基于原 BrainCo Vue3 项目重构。

## 联系方式

如有问题，请联系开发团队。

---

**注意**：本项目是一个清洁的 Next.js 模板，已移除所有演示代码和不必要的功能，可以直接用于生产环境开发。

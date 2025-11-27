# BrainCo 官网 - Next.js 版本

BrainCo 官方网站的 Next.js 重构版本

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

## 项目特点

- ✅ **清洁的模板** - 移除了所有演示代码和不必要的功能
- ✅ **静态网站** - 所有页面都是静态生成，SEO 友好
- ✅ **动态 SEO 配置** - 从 CMS 自动获取 SEO 数据，支持多语言自动切换
- ✅ **Publisher & X-Robots-Tag** - 完整支持 publisher meta 标签和 X-Robots-Tag HTTP header
- ✅ **多语言支持** - 简体中文、英文、繁体中文（港澳台）
- ✅ **Crowdin 翻译管理** - 专业的翻译工作流程
- ✅ **TypeScript** - 完整的类型安全
- ✅ **Tailwind CSS** - 现代化的样式框架

## 支持的语言

- 🇨🇳 简体中文 (zh) - 默认语言
- 🇺🇸 英文 (en)
- 🇹🇼 繁体中文 (zh-TW) - 港澳台地区

## 技术栈

- **Next.js 15.5** - React 框架
- **React 19** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架
- **next-intl** - 国际化支持
- **Crowdin CLI** - 翻译管理

## 文档

详细的文档请查看 `docs/` 文件夹：

- 📖 [项目概览](./docs/README.md) - 完整的技术栈和功能说明
- 🚀 [快速开始](./docs/SETUP.md) - 配置和开发指南
- 🌍 [多语言管理](./docs/CROWDIN_GUIDE.md) - Crowdin 详细使用指南
- 📋 [迁移记录](./docs/MIGRATION_SUMMARY.md) - 从 Boilerplate 到 BrainCo 的完整记录
- 🔍 [SEO 动态配置](./docs/SEO_SETUP_SUMMARY.md) - 动态 SEO 系统完整指南
- 🐛 [SEO Bug 修复](./docs/SEO_BUGFIX_X_ROBOTS_TAG.md) - **最新！** X-Robots-Tag 重复和 Publisher 丢失问题修复
- 🧪 [客户端导航测试](./docs/SEO_CLIENT_NAVIGATION_TEST.md) - 如何测试站内导航时的 SEO headers

## 开发命令

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器

# 代码质量
npm run lint         # 检查代码
npm run lint:fix     # 自动修复
npm run check:types  # TypeScript 类型检查

# 国际化
npm run check:i18n        # 检查翻译完整性
npm run crowdin:upload    # 上传源文件
npm run crowdin:download  # 下载翻译
npm run crowdin:sync      # 完整同步

# SEO 配置和测试
npm run check:seo         # 检查 SEO 配置状态
npm run check:seo-headers # 检查 X-Robots-Tag 和 Publisher（需先运行 dev 或 start）
npm run test:seo          # 测试 Publisher 和 X-Robots-Tag 功能
```

## 项目结构

```
src/
├── app/
│   ├── [locale]/              # 国际化路由
│   │   ├── (marketing)/       # 营销页面组
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── products/      # 产品
│   │   │   ├── company/       # 公司
│   │   │   ├── news/          # 新闻
│   │   │   └── about/         # 关于
│   │   └── layout.tsx         # 根布局
│   ├── robots.ts              # SEO: robots.txt
│   └── sitemap.ts             # SEO: sitemap.xml
├── components/                # 共享组件
├── libs/                      # 核心库
├── locales/                   # 翻译文件
├── styles/                    # 样式
└── utils/                     # 工具函数
```

## 部署

推荐使用 Vercel：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

## 许可证

本项目基于原 BrainCo Vue3 项目重构。

---

**注意**：本项目是一个清洁的 Next.js 模板，已移除所有演示代码和不必要的功能，可以直接用于生产环境开发。

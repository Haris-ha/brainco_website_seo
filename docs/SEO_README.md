# BrainCo 网站动态 SEO 系统

## 📋 目录

- [系统概述](#系统概述)
- [核心特性](#核心特性)
- [快速开始](#快速开始)
- [文档导航](#文档导航)
- [技术架构](#技术架构)
- [项目文件结构](#项目文件结构)

## 系统概述

BrainCo 网站采用了基于 Strapi CMS 的动态 SEO 管理系统，支持：

- ✅ **多语言 SEO**: 自动根据用户语言（简体中文/英文/繁体中文）显示对应的 SEO 内容
- ✅ **集中管理**: 所有 SEO 配置在 CMS 中统一管理，无需修改代码
- ✅ **实时更新**: 支持在 CMS 中更新后自动同步到网站（带缓存策略）
- ✅ **完整支持**: 包括基础 meta 标签、Open Graph、Twitter Card、结构化数据等
- ✅ **后备机制**: CMS 数据不可用时自动使用本地配置
- ✅ **开发友好**: 简单的 API，一行代码即可配置页面 SEO

## 核心特性

### 1. 多语言自动切换

系统自动根据当前页面语言获取对应的 SEO 数据：

```typescript
// 访问 /zh-CN/about → 获取简体中文 SEO
// 访问 /en-US/about → 获取英文 SEO
// 访问 /zh-TW/about → 获取繁体中文 SEO
```

### 2. 自动生成 hreflang 标签

每个页面自动包含多语言 alternate 链接：

```html
<link rel="alternate" hreflang="zh-CN" href="https://www.brainco.cn/about" />
<link rel="alternate" hreflang="en-US" href="https://www.brainco.cn/en-US/about" />
<link rel="alternate" hreflang="zh-TW" href="https://www.brainco.cn/zh-TW/about" />
```

### 3. 完整的 SEO 元素

- **基础 Meta**: title, description, keywords, robots
- **Open Graph**: Facebook 分享优化
- **Twitter Card**: Twitter 分享优化
- **Canonical URL**: 规范化 URL
- **结构化数据**: JSON-LD schema markup

### 4. 智能缓存

- 生产环境：构建时生成，性能最优
- 开发环境：1小时缓存，平衡性能和开发体验

## 快速开始

### 第一步：环境配置

```bash
# 复制环境变量模板
cp .env.example .env.local

# 编辑 .env.local，配置 CMS 地址
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=https://www.brainco.cn
```

### 第二步：在页面中使用

```typescript
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  return generateSEOMetadata({ locale }, '/your-page-path');
}
```

### 第三步：在 CMS 中配置

1. 访问 Strapi Admin: `http://localhost:1337/admin`
2. 进入 "Page SEO" → "Create new entry"
3. 填写页面信息并发布
4. 为每个语言创建对应的条目

### 第四步：验证配置

```bash
# 运行 SEO 检查工具
npm run check:seo

# 启动开发服务器
npm run dev

# 访问页面并查看源代码
view-source:http://localhost:3000
```

## 文档导航

### 新手入门
- 📚 [**快速开始指南**](./SEO_QUICK_START_CN.md) - 5分钟快速上手
- 📖 [**完整实现指南**](./SEO_IMPLEMENTATION.md) - 详细的实现文档

### CMS 配置
- 🔧 [**Strapi SEO 设置**](../../docs/STRAPI_SEO_SETUP.md) - CMS 端配置指南
- 📊 [**SEO 数据导入**](../../docs/导入SEO数据指南.md) - 批量导入 SEO 数据

### 高级主题
- ⚡ **性能优化** - 缓存策略和性能优化（规划中）
- 🎯 **SEO 最佳实践** - 搜索引擎优化建议（规划中）
- 🔍 **故障排查** - 常见问题解决方案（规划中）

## 技术架构

### 数据流程

```
┌─────────────┐
│ Strapi CMS  │ ← 内容管理（Page SEO）
└──────┬──────┘
       │
       │ API 调用
       ↓
┌─────────────────┐
│ SEO Service     │ ← 数据获取和转换
│ (src/lib/seo.ts)│
└──────┬──────────┘
       │
       │ 转换
       ↓
┌──────────────────────┐
│ Metadata Generator   │ ← 元数据生成
│ (src/lib/metadata.ts)│
└──────┬───────────────┘
       │
       │ 应用
       ↓
┌─────────────────┐
│ Next.js Page    │ ← 页面渲染
└─────────────────┘
```

### 语言映射

| Next.js | Strapi | 说明 |
|---------|--------|------|
| zh-CN | zh-Hans | 简体中文 |
| en-US | en | 英文 |
| zh-TW | zh-Hant | 繁体中文 |

### 技术栈

- **Next.js 15**: App Router + Server Components
- **Strapi 4**: Headless CMS
- **next-intl**: 国际化
- **TypeScript**: 类型安全

## 项目文件结构

```
brainco_website_seo/
├── src/
│   ├── lib/
│   │   ├── seo.ts              # SEO 数据获取服务
│   │   ├── metadata.ts         # 元数据生成辅助函数
│   │   └── api.ts              # API 调用封装
│   │
│   ├── types/
│   │   └── seo.ts              # SEO 类型定义
│   │
│   ├── libs/
│   │   └── Env.ts              # 环境变量配置（已更新）
│   │
│   └── app/[locale]/
│       ├── (home)/
│       │   └── page.tsx        # ✅ 已配置动态 SEO
│       ├── (marketing)/
│       │   ├── about/
│       │   │   └── page.tsx    # ✅ 已配置动态 SEO
│       │   ├── contact/
│       │   │   └── page.tsx    # ✅ 已配置动态 SEO
│       │   └── health/
│       │       └── focus-zen/
│       │           └── page.tsx # ✅ 已配置动态 SEO
│       └── ...
│
├── docs/
│   ├── SEO_README.md           # 本文档
│   ├── SEO_QUICK_START_CN.md   # 快速开始指南
│   └── SEO_IMPLEMENTATION.md   # 完整实现指南
│
├── scripts/
│   └── check-seo-pages.mjs     # SEO 配置检查工具
│
├── .env.example                # 环境变量模板
└── package.json                # 新增 check:seo 命令
```

## 使用示例

### 示例 1: 简单页面

```typescript
// src/app/[locale]/(marketing)/about/page.tsx
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  return generateSEOMetadata({ locale }, '/about');
}

export default function AboutPage() {
  return <div>关于我们</div>;
}
```

### 示例 2: 带后备数据

```typescript
import { generateSEOMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const seoMetadata = await generateSEOMetadata({ locale }, '/products');
  
  if (!seoMetadata.title || seoMetadata.title === 'BrainCo') {
    const t = await getTranslations({ locale, namespace: 'Products' });
    return {
      ...seoMetadata,
      title: t('meta_title'),
      description: t('meta_description'),
    };
  }
  
  return seoMetadata;
}
```

### 示例 3: 产品页面 + 结构化数据

```typescript
import { generateSEOMetadata, generateProductSchema } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  return generateSEOMetadata({ locale }, '/products/focus-zen');
}

export default function FocusZenPage() {
  const schema = generateProductSchema({
    name: 'FocusZen',
    description: '正念舒压系统',
    brand: 'BrainCo',
    image: 'https://www.brainco.cn/images/focuszen.jpg',
    offers: { price: '999', priceCurrency: 'CNY' },
  });
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      <div>产品内容</div>
    </>
  );
}
```

## 开发工具

### SEO 配置检查

```bash
# 运行检查工具，查看哪些页面需要配置 SEO
npm run check:seo
```

输出示例：
```
==================================================
     SEO 配置检查工具
==================================================

✓ 已配置动态 SEO 的页面 (4):
  ● /
  ● /about
  ● /contact
  ● /health/focus-zen

⚠ 需要更新为动态 SEO 的页面 (5):
  ● /company
  ● /news
  ...

统计信息:
  总页面数: 20
  已配置: 4 (20.0%)
  需要更新: 5
  未配置: 11
==================================================
```

## 常见问题

### Q: 如何知道 SEO 数据是否正确加载？

**A**: 查看页面源代码（右键 → 查看网页源代码），检查 `<head>` 标签中的内容。

### Q: 多语言切换后 SEO 没有变化怎么办？

**A**: 确保在 CMS 中为每个语言版本都创建了 SEO 条目，并且 locale 映射正确。

### Q: 可以在不同环境使用不同的 CMS 吗？

**A**: 可以，在不同环境的 `.env` 文件中配置不同的 `NEXT_PUBLIC_CMS_API_URL`。

### Q: 如何批量导入 SEO 数据？

**A**: 参考 [SEO 数据导入指南](../../docs/导入SEO数据指南.md)。

## 路线图

- [x] 基础 SEO 数据获取
- [x] 多语言支持
- [x] Open Graph 和 Twitter Card
- [x] 自动 hreflang 生成
- [x] 开发工具（检查脚本）
- [ ] SEO 数据验证工具
- [ ] 批量更新工具
- [ ] Sitemap 自动生成（已有基础）
- [ ] SEO 性能监控
- [ ] A/B 测试支持

## 贡献指南

如需改进 SEO 系统：

1. 更新相应的服务文件
2. 添加类型定义
3. 更新文档
4. 添加示例
5. 运行检查工具验证

## 支持

如有问题：

1. 查看[完整文档](./SEO_IMPLEMENTATION.md)
2. 运行 `npm run check:seo` 诊断问题
3. 联系技术团队

---

**版本**: 1.0.0  
**最后更新**: 2025-10-29  
**维护者**: BrainCo 技术团队


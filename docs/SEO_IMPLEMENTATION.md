# SEO 动态数据获取实现指南

## 概述

本项目已经实现了从 Strapi CMS 动态获取 SEO 数据的功能，支持多语言（简体中文、英文、繁体中文），可以根据页面路径和当前语言自动获取和应用 SEO 配置。

## 系统架构

### 1. 数据流程

```
Strapi CMS (page-seo) → API 调用 → SEO 服务 → Metadata 生成器 → Next.js 页面
```

### 2. 核心组件

- **类型定义** (`src/types/seo.ts`): 定义了 SEO 数据结构
- **SEO 服务** (`src/lib/seo.ts`): 从 CMS 获取和转换 SEO 数据
- **元数据生成器** (`src/lib/metadata.ts`): 简化页面中的 SEO 配置
- **环境变量** (`src/libs/Env.ts`): 配置 CMS API 地址

## 语言映射

项目使用以下语言映射：

| Next.js Locale | Strapi Locale | 说明 |
|---------------|---------------|------|
| `zh-CN` | `zh-Hans` | 简体中文 |
| `en-US` | `en` | 英文 |
| `zh-TW` | `zh-Hant` | 繁体中文 |

## 环境配置

### 1. 环境变量设置

在项目根目录创建 `.env.local` 文件：

```bash
# 网站配置
NEXT_PUBLIC_SITE_URL=https://www.brainco.cn
NEXT_PUBLIC_APP_URL=https://www.brainco.cn

# CMS API 配置
# 开发环境
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337

# 生产环境（示例）
# NEXT_PUBLIC_CMS_API_URL=https://cms.brainco.cn
```

### 2. CMS 数据准备

在 Strapi CMS 中，确保已经为每个页面创建了 `page-seo` 数据：

- `pageName`: 页面名称（例如：首页、关于我们）
- `pagePath`: 页面路径（例如：`/`, `/about`, `/health/focus-zen`）
- `locale`: 语言（zh-Hans, en, zh-Hant）
- `metaTitle`: 页面标题
- `metaDescription`: 页面描述
- 其他 SEO 字段...

## 使用方法

### 方法一：使用 `generateSEOMetadata` 辅助函数（推荐）

这是最简单的方式，适用于大多数页面：

```typescript
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  // 从 CMS 获取 SEO 数据
  return generateSEOMetadata(
    { locale },
    '/about',  // 页面路径
    {
      // 可选：后备数据（当 CMS 中没有数据时使用）
      title: '关于我们',
      description: '了解 BrainCo 的故事和使命',
    }
  );
}

export default async function AboutPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  
  return <YourPageContent />;
}
```

### 方法二：结合翻译文件作为后备

如果你想在 CMS 数据不可用时使用翻译文件：

```typescript
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  // 尝试从 CMS 获取 SEO 数据
  const seoMetadata = await generateSEOMetadata({ locale }, '/about');
  
  // 如果 CMS 中没有数据，使用翻译文件作为后备
  if (!seoMetadata.title || seoMetadata.title === 'BrainCo') {
    const t = await getTranslations({
      locale,
      namespace: 'About',
    });

    return {
      ...seoMetadata,
      title: t('meta_title'),
      description: t('meta_description'),
    };
  }

  return seoMetadata;
}
```

### 方法三：直接使用 SEO 服务

如果需要更多控制：

```typescript
import type { Metadata } from 'next';
import { getPageSEO, convertToMetadata } from '@/lib/seo';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  // 获取 SEO 数据
  const seoData = await getPageSEO('/about', locale);
  
  // 转换为 Next.js Metadata
  const metadata = convertToMetadata(
    seoData,
    locale,
    '关于我们',  // 后备标题
    '了解 BrainCo'  // 后备描述
  );
  
  return metadata;
}
```

## 页面路径规范

在 CMS 中配置 SEO 数据时，`pagePath` 应该遵循以下规范：

| 页面 | pagePath | 说明 |
|------|----------|------|
| 首页 | `/` | 根路径 |
| 关于我们 | `/about` | 不包含语言前缀 |
| 联系我们 | `/contact` | 不包含语言前缀 |
| 产品页面 | `/health/focus-zen` | 包含完整路径，但不含语言前缀 |
| 新闻列表 | `/news` | 列表页 |

**注意**: 
- ❌ 不要包含语言前缀：`/zh-CN/about`
- ✅ 正确格式：`/about`
- ❌ 不要以斜杠结尾：`/about/`
- ✅ 正确格式：`/about`

## SEO 数据包含的内容

系统会自动处理以下 SEO 元素：

### 基础元数据
- `title`: 页面标题
- `description`: 页面描述
- `keywords`: 关键词
- `robots`: 搜索引擎爬虫指令

### Open Graph
- `og:title`: OG 标题
- `og:description`: OG 描述
- `og:image`: OG 图片
- `og:type`: 页面类型

### Twitter Card
- `twitter:card`: 卡片类型
- `twitter:title`: 推特标题
- `twitter:description`: 推特描述
- `twitter:image`: 推特图片

### 多语言 Alternates
系统会自动为每个页面生成 `hreflang` 标签，支持：
- 简体中文 (zh-CN)
- 英文 (en-US)
- 繁体中文 (zh-TW)

## 结构化数据

如果需要添加结构化数据（JSON-LD），可以使用辅助函数：

```typescript
import { generateProductSchema } from '@/lib/metadata';

export default function ProductPage() {
  const schema = generateProductSchema({
    name: 'FocusZen',
    description: '正念舒压系统',
    image: 'https://www.brainco.cn/images/focuszen.jpg',
    offers: {
      price: '999',
      priceCurrency: 'CNY',
    },
  });
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      {/* 页面内容 */}
    </>
  );
}
```

## 缓存策略

系统使用 Next.js 的 `revalidate` 策略来缓存 SEO 数据：

- **默认重新验证时间**: 3600 秒（1 小时）
- **生产环境**: 自动使用构建时缓存
- **开发环境**: 每次请求都会获取最新数据

如需修改缓存时间，编辑 `src/lib/seo.ts` 中的 `revalidate` 值。

## 故障排查

### 1. SEO 数据未显示

检查：
- CMS 中是否已发布（published）对应的 SEO 数据
- `pagePath` 是否正确（不包含语言前缀）
- `locale` 映射是否正确（zh-CN → zh-Hans）
- 环境变量 `NEXT_PUBLIC_CMS_API_URL` 是否配置正确

### 2. 图片未显示

检查：
- CMS 中图片是否已上传
- `next.config.ts` 中是否添加了图片域名到 `remotePatterns`
- 图片 URL 是否正确

### 3. 多语言切换问题

检查：
- 每个语言版本的 SEO 数据是否都已在 CMS 中创建
- `locale` 参数是否正确传递
- 语言映射是否正确

## 批量更新页面

如果需要为多个页面批量添加 SEO 配置，可以参考以下脚本模板：

```typescript
// scripts/update-all-pages-seo.ts
import { readdir } from 'fs/promises';
import { join } from 'path';

const pages = [
  { path: '/', name: '首页' },
  { path: '/about', name: '关于我们' },
  { path: '/contact', name: '联系我们' },
  { path: '/health/focus-zen', name: 'FocusZen' },
  // ... 更多页面
];

// 批量更新逻辑
```

## 最佳实践

1. **始终提供后备数据**: 即使 CMS 配置完整，也建议提供后备数据
2. **使用有意义的 pagePath**: 保持路径简洁、有意义
3. **优化图片大小**: OG 图片建议 1200x630px
4. **测试多语言**: 确保每个语言版本都有正确的 SEO 配置
5. **监控性能**: 使用 Next.js 的分析工具监控 SEO 数据获取性能

## 相关文档

- [Strapi SEO 配置指南](../../docs/STRAPI_SEO_SETUP.md)
- [SEO 数据导入指南](../../docs/导入SEO数据指南.md)
- [Next.js Metadata 官方文档](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [next-intl 多语言文档](https://next-intl-docs.vercel.app/)

## 示例页面

以下页面已经实现了动态 SEO：

- ✅ 首页: `src/app/[locale]/(home)/page.tsx`
- ✅ 关于我们: `src/app/[locale]/(marketing)/about/page.tsx`
- ✅ 联系我们: `src/app/[locale]/(marketing)/contact/page.tsx`
- ✅ FocusZen: `src/app/[locale]/(marketing)/health/focus-zen/page.tsx`

可以参考这些页面的实现方式来更新其他页面。


# SEO 结构化数据使用指南

## ✅ 已完成的功能

现在所有页面的 SEO 配置都已包含：

1. **Canonical URL** - 自动生成，已在 `<head>` 中显示
2. **Publisher 信息** - 从 CMS 获取，显示在 meta 标签和 Organization Schema 中
3. **X-Robots-Tag** - 通过 HTTP header 自动设置，从 CMS 配置
4. **WebPage Schema** - 包含页面基本信息
5. **多语言支持** - 所有结构化数据支持三种语言

> 📖 **新功能说明**: 查看 [Publisher 和 X-Robots-Tag 配置指南](./docs/PUBLISHER_AND_ROBOTS_TAG.md) 了解如何使用这些功能。

## 📋 已更新的页面

- ✅ 首页 (`/`)
- ✅ About 页面 (`/about`)

## 🔧 如何为其他页面添加结构化数据

### 步骤 1: 导入必要的模块

在你的 `page.tsx` 文件顶部添加：

```typescript
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
```

### 步骤 2: 在页面组件中获取 SEO 数据

```typescript
export default async function YourPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  // 第一个参数是页面路径，必须与 CMS 中的 pagePath 一致
  const seoData = await getPageSEOForStructuredData('/your-page-path', locale);

  return (
    <>
      {/* 添加结构化数据 */}
      <StructuredData seoData={seoData} />
      <YourPageClient />
    </>
  );
}
```

### 步骤 3: 确认页面路径

页面路径必须与 CMS 中的 `pagePath` 完全匹配：

| 页面 | CMS pagePath | 代码中使用 |
|------|-------------|-----------|
| 首页 | `/` | `getPageSEOForStructuredData('/', locale)` |
| About | `/about` | `getPageSEOForStructuredData('/about', locale)` |
| Contact | `/contact` | `getPageSEOForStructuredData('/contact', locale)` |
| Technology | `/technology` | `getPageSEOForStructuredData('/technology', locale)` |
| Products | `/products` | `getPageSEOForStructuredData('/products', locale)` |
| Brain Robotics | `/products/brain-robotics` | `getPageSEOForStructuredData('/products/brain-robotics', locale)` |
| ... | ... | ... |

## 📝 完整示例

以下是 `/contact` 页面的完整示例：

```typescript
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactPageClient from '@/components/company/ContactPageClient';
import { generateSEOMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  const seoMetadata = await generateSEOMetadata(
    { locale },
    '/contact',
  );
  
  if (!seoMetadata.title || seoMetadata.title === 'BrainCo') {
    const t = await getTranslations({
      locale,
      namespace: 'Contact',
    } as any);

    return {
      ...seoMetadata,
      title: t('meta_title'),
      description: t('meta_description'),
    };
  }

  return seoMetadata;
}

export default async function ContactPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/contact', locale);

  return (
    <>
      {/* 添加结构化数据 */}
      <StructuredData seoData={seoData} />
      <ContactPageClient />
    </>
  );
}
```

## 🎨 添加页面特定的结构化数据

如果页面需要额外的结构化数据（如产品页面的 Product Schema），可以这样做：

```typescript
export default async function ProductPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const seoData = await getPageSEOForStructuredData('/products/focus-zen', locale);

  // 产品特定的结构化数据
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Focus Zen',
    'description': '专注力训练头环',
    'brand': {
      '@type': 'Brand',
      'name': 'BrainCo',
    },
    'offers': {
      '@type': 'Offer',
      'price': '1299.00',
      'priceCurrency': 'CNY',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <>
      {/* 添加基础结构化数据 + 产品 Schema */}
      <StructuredData seoData={seoData} additionalSchema={productSchema} />
      <ProductPageClient />
    </>
  );
}
```

## 🔍 验证结构化数据

### 方法 1: 查看页面源代码

1. 访问页面（如 http://localhost:3000/zh-CN）
2. 右键 → 查看网页源代码
3. 搜索 `application/ld+json`
4. 应该能看到类似这样的内容：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrainCo",
  "url": "https://www.brainco.cn",
  "logo": "https://www.brainco.cn/logo.webp"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BrainCo强脑科技 - 全球领先的脑机接口技术公司",
  "description": "...",
  "url": "https://www.brainco.cn/",
  "inLanguage": "zh-CN",
  "publisher": {
    "@type": "Organization",
    "name": "BrainCo",
    ...
  }
}
</script>
```

### 方法 2: 使用 Google Rich Results Test

1. 访问 [Google Rich Results Test](https://search.google.com/test/rich-results)
2. 输入你的页面 URL
3. 查看检测结果

### 方法 3: 使用 Schema.org Validator

1. 访问 [Schema.org Validator](https://validator.schema.org/)
2. 输入页面 URL 或粘贴 HTML
3. 验证结构化数据格式是否正确

## 📊 已包含的结构化数据

每个页面自动包含：

### 1. Organization Schema (Publisher)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrainCo",
  "url": "https://www.brainco.cn",
  "logo": "https://www.brainco.cn/logo.webp"
}
```

### 2. WebPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "页面标题",
  "description": "页面描述",
  "url": "https://www.brainco.cn/zh-CN/",
  "inLanguage": "zh-CN",
  "publisher": {
    "@type": "Organization",
    "name": "BrainCo",
    "url": "https://www.brainco.cn",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.brainco.cn/logo.webp"
    }
  }
}
```

## 🚀 下一步

建议为以下页面添加结构化数据：

- [ ] Contact (`/contact`)
- [ ] Company (`/company`)
- [ ] Technology (`/technology`)
- [ ] Products (`/products`)
- [ ] News (`/news`)
- [ ] Recruit (`/recruit`)
- [ ] 所有产品详情页

只需按照上面的步骤，复制代码模板即可！

## 💡 提示

- 结构化数据会自动提取 CMS 中的 SEO 配置
- Canonical URL 已自动包含在 metadata 中，无需额外处理
- 所有数据支持三种语言（zh-Hans, en, zh-Hant）
- 结构化数据有助于搜索引擎更好地理解页面内容，提升 SEO 效果


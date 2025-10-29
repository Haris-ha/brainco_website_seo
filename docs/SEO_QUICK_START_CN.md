# SEO 动态配置快速开始指南

## 快速开始

### 1. 环境配置（5分钟）

创建或编辑 `.env.local` 文件：

```bash
# CMS API 地址
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337

# 网站地址
NEXT_PUBLIC_SITE_URL=https://www.brainco.cn
```

### 2. 在页面中使用（2分钟）

在任何页面文件中添加 SEO 配置：

```typescript
import type { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  return generateSEOMetadata(
    { locale },
    '/your-page-path',  // 替换为实际页面路径
  );
}
```

### 3. 在 CMS 中配置 SEO 数据（5分钟）

1. 登录 Strapi CMS (http://localhost:1337/admin)
2. 进入 "Page SEO" 内容类型
3. 点击 "Create new entry"
4. 填写以下字段：
   - **Page Name**: 页面名称（如：首页）
   - **Page Path**: 页面路径（如：`/`）
   - **Locale**: 选择语言（zh-Hans/en/zh-Hant）
   - **Meta Title**: 页面标题（10-60字符）
   - **Meta Description**: 页面描述（50-160字符）
5. 点击 "Save" 并 "Publish"
6. 为其他语言重复步骤 3-5

## 常用页面路径参考

| 页面 | pagePath |
|------|----------|
| 首页 | `/` |
| 关于我们 | `/about` |
| 公司介绍 | `/company` |
| 联系我们 | `/contact` |
| 新闻中心 | `/news` |
| 招聘信息 | `/recruit` |
| 技术介绍 | `/technology` |
| FocusZen | `/health/focus-zen` |
| FocusXin | `/health/focus-xin` |
| OxyZen | `/health/oxyzen` |
| EASleep | `/health/easleep` |
| StarKids | `/health/starkids` |
| BrainAI | `/education/brain-ai` |

## 完整示例

```typescript
// src/app/[locale]/(marketing)/products/my-product/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  return generateSEOMetadata(
    { locale },
    '/products/my-product',
    {
      title: '我的产品 - BrainCo',
      description: '这是产品描述...',
    }
  );
}

export default async function MyProductPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  
  return (
    <div>
      <h1>我的产品页面</h1>
      {/* 页面内容 */}
    </div>
  );
}
```

## 验证配置

### 1. 开发环境测试

```bash
# 启动开发服务器
npm run dev

# 访问页面
http://localhost:3000
http://localhost:3000/en-US
http://localhost:3000/zh-TW
```

### 2. 查看页面源代码

在浏览器中右键 → "查看网页源代码"，检查是否包含：

```html
<title>你的页面标题</title>
<meta name="description" content="你的页面描述">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<link rel="alternate" hreflang="zh-CN" href="...">
<link rel="alternate" hreflang="en-US" href="...">
<link rel="alternate" hreflang="zh-TW" href="...">
```

### 3. 使用 SEO 工具检查

推荐工具：
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 常见问题

### Q1: SEO 数据不显示？

**解决方案**:
1. 检查 `.env.local` 文件中的 `NEXT_PUBLIC_CMS_API_URL` 是否正确
2. 确认 Strapi CMS 正在运行
3. 检查 CMS 中的 SEO 数据是否已发布（published）
4. 验证 `pagePath` 是否与代码中的路径一致

### Q2: 切换语言后 SEO 没有变化？

**解决方案**:
1. 确认在 CMS 中为每个语言都创建了对应的 SEO 数据
2. 检查语言代码映射：
   - Next.js `zh-CN` → Strapi `zh-Hans`
   - Next.js `en-US` → Strapi `en`
   - Next.js `zh-TW` → Strapi `zh-Hant`

### Q3: 图片不显示？

**解决方案**:
1. 确认图片已上传到 CMS
2. 检查 `next.config.ts` 中的 `remotePatterns` 配置
3. 查看浏览器控制台是否有图片加载错误

## 下一步

- 📖 阅读[完整实现指南](./SEO_IMPLEMENTATION.md)
- 🔧 了解[高级配置选项](./SEO_ADVANCED.md)
- 📊 查看[SEO 最佳实践](./SEO_BEST_PRACTICES.md)
- 🚀 学习[性能优化技巧](./SEO_PERFORMANCE.md)

## 需要帮助？

如有问题，请联系技术团队或查看项目文档。


# BrainCo 官网重构实施路线图

本文档详细说明了 BrainCo 官网从 Vue3 迁移到 Next.js 的具体实施步骤和技术细节。

## 📋 目录

- [阶段 1: 技术评估与审计（2天）](#阶段-1-技术评估与审计)
- [阶段 2: 架构搭建（2天）](#阶段-2-架构搭建)
- [阶段 3: 页面模板开发（8天）](#阶段-3-页面模板开发)
- [阶段 4: CMS 搭建（7天）](#阶段-4-cms-搭建)
- [阶段 5: SEO 优化（3天）](#阶段-5-seo-优化)
- [阶段 6: 可访问性优化（3天）](#阶段-6-可访问性优化)
- [阶段 7: 跨端优化（3天）](#阶段-7-跨端优化)
- [阶段 8: 测试与部署（2天）](#阶段-8-测试与部署)

---

## 阶段 1: 技术评估与审计（2天）

### 1.1 现状分析

#### Vue3 项目审计清单

- [x] ✅ 项目结构分析完成
- [x] ✅ 路由系统分析完成（18个核心页面）
- [x] ✅ 组件依赖分析完成
- [ ] 📸 截图所有页面作为参考
- [ ] 📊 性能基线测试（Lighthouse）
- [ ] 🔍 SEO 现状审计

#### 页面清单

```
1. 首页 (/)
2. 产品系列 (/products)
   - 智能仿生手 (/products/brain-robotics)
   - 轻凌智能仿生腿 (/products/mobius)
   - 仿生灵巧手 Revo1 (/products/revo1)
   - 仿生灵巧手 Revo2 (/products/revo2)
3. 智能健康系列 (/health)
   - Easleep 深海豚 (/health/easleep)
   - OxyZen 仰慧 (/health/oxyzen)
   - FocusZen 正念 (/health/focus-zen)
   - 专注校 (/health/focus-xin)
   - Starkids 开星果 (/health/starkids)
4. 智能教育 (/education)
   - BrainAI 课程 (/education/brain-ai)
5. 技术 (/technology)
6. 企业新闻 (/news)
7. 公司 (/company)
   - 关于我们 (/company/about)
   - 联系我们 (/company/contact)
8. 购买 (/purchase)
   - 我的订单 (/purchase/orders)
   - 购物车 (/purchase/cart)
9. 招募 (/careers)
```

### 1.2 技术栈评估

#### 当前 Vue3 技术栈

```json
{
  "框架": "Vue 3.2.47",
  "路由": "Vue Router 4.1.6",
  "UI库": ["Element Plus 2.3.4", "Vant 4.2.0"],
  "样式": "Less 4.1.3",
  "动画": ["Animate.css", "AOS"],
  "构建": "Vite 4.1.4"
}
```

#### 目标 Next.js 技术栈

```json
{
  "框架": "Next.js 15.5",
  "UI库": "React 19",
  "样式": "Tailwind CSS 4",
  "国际化": "next-intl 4.3",
  "SEO": ["next-sitemap", "next-seo"],
  "CMS": "Strapi v5",
  "动画": "Framer Motion",
  "表单": "React Hook Form + Zod",
  "数据获取": "TanStack Query (React Query)"
}
```

### 1.3 交付物

- [ ] 《技术架构与 SEO 兼容性评估报告》
- [ ] 页面截图归档
- [ ] 性能基线报告
- [ ] 依赖迁移对照表

---

## 阶段 2: 架构搭建（2天）

### 2.1 项目基础配置

#### 已完成 ✅

- [x] Next.js 15 项目初始化
- [x] TypeScript 配置
- [x] Tailwind CSS 4 配置
- [x] ESLint + Prettier 配置
- [x] next-intl 国际化配置（简中、繁中、英文）
- [x] 基础目录结构

#### 待完成 📝

```bash
# 安装必要的依赖
npm install next-seo next-sitemap framer-motion
npm install @tanstack/react-query axios
npm install react-hook-form @hookform/resolvers zod
npm install sharp # 图片优化
```

### 2.2 多语言路由配置

#### 语言代码调整

从当前的 `zh`, `en`, `zh-TW` 调整为：
- `zh-CN` - 简体中文（中国站 brainco.cn）
- `en-US` - 英文（美国站 brainco.tech）
- `zh-TW` - 繁体中文（港澳台）

#### 文件结构

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # 首页
│   │   ├── products/
│   │   │   ├── page.tsx                # 产品列表
│   │   │   ├── brain-robotics/
│   │   │   ├── mobius/
│   │   │   ├── revo1/
│   │   │   └── revo2/
│   │   ├── health/
│   │   │   ├── page.tsx                # 智能健康列表
│   │   │   ├── easleep/
│   │   │   ├── oxyzen/
│   │   │   ├── focus-zen/
│   │   │   ├── focus-xin/
│   │   │   └── starkids/
│   │   ├── education/
│   │   │   └── brain-ai/
│   │   ├── technology/
│   │   ├── news/
│   │   │   ├── page.tsx                # 新闻列表
│   │   │   └── [category]/             # 新闻分类
│   │   ├── company/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   ├── purchase/
│   │   │   ├── orders/
│   │   │   └── cart/
│   │   └── careers/
│   ├── api/                            # API Routes
│   │   ├── strapi/                     # Strapi 代理
│   │   └── geo/                        # IP 定位
│   ├── robots.ts
│   └── sitemap.ts
```

### 2.3 中间件配置

#### IP 定位与跳转逻辑

```typescript
import createMiddleware from 'next-intl/middleware';
// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './libs/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检测搜索引擎爬虫，不执行跳转
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  if (!isBot) {
    // 获取 IP 地理位置（从 CloudFront / 阿里云 CDN 头）
    const countryCode = request.headers.get('cloudfront-viewer-country')
      || request.headers.get('x-forwarded-country')
      || request.geo?.country;

    const hostname = request.headers.get('host') || '';

    // 中国 IP 访问 .tech 域名 → 跳转到 .cn
    if (countryCode === 'CN' && hostname.includes('brainco.tech')) {
      const url = request.nextUrl.clone();
      url.hostname = 'www.brainco.cn';
      return NextResponse.redirect(url);
    }

    // 非中国 IP 访问 .cn 域名 → 跳转到 .tech
    if (countryCode !== 'CN' && hostname.includes('brainco.cn')) {
      const url = request.nextUrl.clone();
      url.hostname = 'www.brainco.tech';
      return NextResponse.redirect(url);
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: '/((?!_next|_vercel|api|.*\\..*).*)',
  runtime: 'nodejs',
};
```

### 2.4 环境变量配置

```bash
# .env.local

# 网站域名
NEXT_PUBLIC_SITE_URL_CN=https://www.brainco.cn
NEXT_PUBLIC_SITE_URL_US=https://www.brainco.tech

# Strapi CMS
STRAPI_API_URL=https://cms.brainco.tech
STRAPI_API_TOKEN=your_strapi_token
NEXT_PUBLIC_STRAPI_URL=https://cms.brainco.tech

# 多语言
NEXT_PUBLIC_DEFAULT_LOCALE=zh-CN

# IP 定位服务（备选）
IP_GEOLOCATION_API_KEY=your_key

# 分析工具
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your_baidu_id
```

### 2.5 交付物

- [ ] 完整可运行的 Next.js SSR 环境
- [ ] 多语言路由配置完成
- [ ] IP 定位与跳转逻辑实现
- [ ] 基础性能测试 ≥95 分

---

## 阶段 3: 页面模板开发（8天）

### 3.1 组件库搭建

#### 基础组件

```
src/components/
├── ui/                          # 基础 UI 组件
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── Loading.tsx
├── layout/                      # 布局组件
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── LocaleSwitcher.tsx
│   └── DomainSwitcher.tsx      # 中美站切换
├── product/                     # 产品组件
│   ├── ProductCard.tsx
│   ├── ProductHero.tsx
│   ├── ProductFeatures.tsx
│   └── ProductSpecs.tsx
├── news/                        # 新闻组件
│   ├── NewsCard.tsx
│   ├── NewsList.tsx
│   └── NewsCategory.tsx
└── seo/                         # SEO 组件
    ├── MetaTags.tsx
    ├── JsonLd.tsx
    └── BreadcrumbsJsonLd.tsx
```

### 3.2 页面开发优先级

#### 第一优先级（2天）

1. **首页** - 核心展示页面
   - Hero 区域
   - 产品导航
   - 公司介绍
   - 动态内容区

2. **产品列表页** - 产品导航入口
   - 产品分类
   - 产品卡片
   - 筛选功能

#### 第二优先级（3天）

3. **产品详情页模板** - 复用模板
   - 智能仿生手
   - 轻凌智能仿生腿
   - Revo1 & Revo2

4. **智能健康系列** - 5个产品页

#### 第三优先级（2天）

5. **技术页面**
6. **新闻列表页**
7. **公司页面**（关于我们、联系我们）

#### 第四优先级（1天）

8. **购买相关页面**（订单、购物车）
9. **招募页面**

### 3.3 响应式设计

#### 断点配置

```javascript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'sm': '640px', // 移动端
      'md': '768px', // 平板
      'lg': '1024px', // 桌面
      'xl': '1280px', // 大屏
      '2xl': '1536px', // 超大屏
    },
  },
};
```

### 3.4 性能优化

- 图片使用 Next.js Image 组件自动优化
- 懒加载非首屏内容
- 字体优化（next/font）
- 代码分割
- 预加载关键资源

### 3.5 交付物

- [ ] 18个核心页面全部完成
- [ ] 响应式适配完成
- [ ] 页面首屏 ≤ 2s
- [ ] Lighthouse 性能 ≥95

---

## 阶段 4: CMS 搭建（7天）

### 4.1 Strapi 安装与配置（1天）

```bash
# 创建 Strapi 项目
npx create-strapi-app@latest brainco-cms
cd brainco-cms

# 安装插件
npm install @strapi/plugin-i18n
npm install @strapi/plugin-seo
npm install @strapi/plugin-graphql
```

### 4.2 内容模型设计（2天）

#### 产品模型 (Product)

```typescript
{
  title: string,              // 产品名称
  slug: string,               // URL slug
  category: enum,             // 产品分类
  description: richtext,      // 产品描述
  features: component[],      // 产品特性
  specifications: json,       // 技术规格
  images: media[],           // 产品图片
  videos: media[],           // 产品视频
  price: number,             // 价格
  currency: string,          // 货币
  inStock: boolean,          // 是否有货
  seo: component,            // SEO 配置
  localizations: relation,   // 多语言
  publishedAt: datetime,
}
```

#### 新闻模型 (News)

```typescript
{
  title: string,
  slug: string,
  category: relation,        // 新闻分类
  excerpt: text,             // 摘要
  coverImage: media,
  wechatUrl: string,         // 微信文章链接
  publishDate: date,
  author: string,
  tags: string[],
  seo: component,
  localizations: relation,
  publishedAt: datetime,
}
```

#### 新闻分类 (NewsCategory)

```typescript
{
  name: string,
  slug: string,
  description: text,
  seo: component,
  localizations: relation,
}
```

#### 页面内容 (PageContent)

```typescript
{
  page: string,              // 页面标识
  sections: component[],     // 动态区块
  seo: component,
  localizations: relation,
}
```

### 4.3 多语言配置（1天）

#### I18n 插件配置

```javascript
// config/plugins.js
module.exports = {
  i18n: {
    enabled: true,
    config: {
      locales: ['zh-CN', 'en-US', 'zh-TW'],
      defaultLocale: 'zh-CN',
    },
  },
};
```

### 4.4 权限与角色配置（1天）

- 管理员：完全权限
- 编辑：内容编辑权限
- 翻译：翻译权限
- 公开访问：API 读取权限

### 4.5 API 集成（2天）

#### Next.js 端集成

```typescript
// src/libs/strapi.ts
import qs from 'qs';

const STRAPI_URL = process.env.STRAPI_API_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchAPI(
  path: string,
  options: RequestInit = {}
) {
  const url = new URL(path, STRAPI_URL);

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_TOKEN}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// 获取产品列表
export async function getProducts(locale: string) {
  const query = qs.stringify({
    locale,
    populate: '*',
  });

  return fetchAPI(`/api/products?${query}`);
}

// 获取产品详情
export async function getProduct(slug: string, locale: string) {
  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    locale,
    populate: '*',
  });

  return fetchAPI(`/api/products?${query}`);
}

// 获取新闻列表
export async function getNews(locale: string, category?: string) {
  const filters = category
    ? {
        category: { slug: { $eq: category } }
      }
    : {};

  const query = qs.stringify({
    filters,
    locale,
    populate: ['coverImage', 'category'],
    sort: ['publishDate:desc'],
  });

  return fetchAPI(`/api/news?${query}`);
}
```

### 4.6 交付物

- [ ] Strapi CMS 完整部署
- [ ] 所有内容模型创建完成
- [ ] 多语言字段配置完成
- [ ] API 集成并测试通过
- [ ] CMS 可管理全部内容类型

---

## 阶段 5: SEO 优化（3天）

### 5.1 Meta 标签优化（1天）

#### 动态 Meta 组件

```typescript
// src/components/seo/MetaTags.tsx
import { Metadata } from 'next';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  locale: string;
};

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  locale,
}: SEOProps): Metadata {
  const siteUrl = locale === 'zh-CN'
    ? process.env.NEXT_PUBLIC_SITE_URL_CN
    : process.env.NEXT_PUBLIC_SITE_URL_US;

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonical || siteUrl,
      languages: {
        'zh-CN': `${process.env.NEXT_PUBLIC_SITE_URL_CN}/${locale}`,
        'en-US': `${process.env.NEXT_PUBLIC_SITE_URL_US}/${locale}`,
        'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL_CN}/${locale}`,
      },
    },
    openGraph: {
      title,
      description,
      images: [ogImage || '/og-image.jpg'],
      locale,
      type: 'website',
      siteName: 'BrainCo',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || '/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
```

### 5.2 结构化数据（1天）

#### 新闻结构化数据

```typescript
// src/components/seo/NewsJsonLd.tsx
export function NewsJsonLd({ news }: { news: News }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    image: news.coverImage.url,
    datePublished: news.publishDate,
    dateModified: news.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'BrainCo',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BrainCo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.brainco.cn/logo.png',
      },
    },
    description: news.excerpt,
    mainEntityOfPage: news.wechatUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

#### 产品结构化数据

```typescript
// src/components/seo/ProductJsonLd.tsx
export function ProductJsonLd({ product }: { product: Product }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.images.map(img => img.url),
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'BrainCo',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

### 5.3 Sitemap 配置（1天）

```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL_CN || 'https://www.brainco.cn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/purchase/*'],
  alternateRefs: [
    {
      href: 'https://www.brainco.cn',
      hreflang: 'zh-CN',
    },
    {
      href: 'https://www.brainco.tech',
      hreflang: 'en-US',
    },
    {
      href: 'https://www.brainco.cn/zh-TW',
      hreflang: 'zh-TW',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/purchase'],
      },
    ],
  },
};
```

### 5.4 交付物

- [ ] 动态 Meta 标签完成
- [ ] 结构化数据集成完成
- [ ] Sitemap 自动生成
- [ ] Lighthouse SEO ≥95
- [ ] Google Rich Results 测试全绿

---

## 阶段 6: 可访问性优化（3天）

### 6.1 语义化 HTML（1天）

- 使用正确的 HTML5 标签
- 添加 ARIA 属性
- 键盘导航支持
- 焦点状态优化

### 6.2 图片优化（1天）

- 所有图片添加 alt 文本
- 使用 Next.js Image 组件
- 响应式图片
- WebP 格式优化

### 6.3 色彩对比度（1天）

- WCAG AAA 标准
- 确保文字可读性
- 焦点状态明显

### 6.4 交付物

- [ ] 《可访问性优化报告》
- [ ] WCAG 2.1 AAA 合规
- [ ] Lighthouse Accessibility ≥95

---

## 阶段 7: 跨端优化（3天）

### 7.1 移动端适配（1天）

- 触摸友好
- 手势支持
- 移动端菜单
- 底部导航

### 7.2 性能优化（1天）

- 图片懒加载
- 代码分割
- 预加载关键资源
- 减少 JavaScript 体积

### 7.3 动画优化（1天）

- GPU 加速
- 使用 Framer Motion
- 减少重绘和回流

### 7.4 交付物

- [ ] 移动端完美适配
- [ ] Lighthouse 性能 ≥90
- [ ] 首屏加载 < 2s

---

## 阶段 8: 测试与部署（2天）

### 8.1 测试（1天）

- 功能测试
- 跨浏览器测试
- 性能测试
- SEO 验证

### 8.2 部署配置（1天）

#### AWS 部署（美国站）

```bash
# 使用 Vercel 或 AWS Amplify
vercel --prod
```

#### 阿里云部署（中国站）

```bash
# Docker 容器化部署
docker build -t brainco-website .
docker push registry.cn-hangzhou.aliyuncs.com/brainco/website
```

### 8.3 CDN 配置

- CloudFront 配置（美国站）
- 阿里云 CDN 配置（中国站）
- 域名解析
- SSL 证书

### 8.4 监控配置

- Google Analytics
- 百度统计
- 性能监控
- 错误追踪

### 8.5 交付物

- [ ] 《正式环境部署报告》
- [ ] CI/CD 流程完成
- [ ] 监控系统运行
- [ ] 备份策略就绪

---

## 🎯 成功标准

### 性能指标

- Lighthouse 性能 ≥95
- Lighthouse SEO ≥95
- Lighthouse Accessibility ≥95
- Lighthouse Best Practices ≥95
- 首屏加载 < 2s
- TTI (Time to Interactive) < 3s

### SEO 指标

- Google Rich Results 测试通过
- 所有页面可被索引
- Sitemap 正常生成
- 结构化数据正确

### 功能指标

- 18个核心页面全部完成
- 中美双站跳转正常
- 多语言切换流畅
- CMS 内容管理正常

---

## 📅 时间线总览

```
第1-2天:   技术评估与审计
第3-4天:   架构搭建
第5-12天:  页面模板开发
第13-19天: CMS 搭建与集成
第20-22天: SEO 优化
第23-25天: 可访问性优化
第26-28天: 跨端优化
第29-30天: 测试与部署
```

---

**下一步**: 开始阶段 1 的技术评估与审计工作











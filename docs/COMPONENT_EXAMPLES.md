# 组件使用示例

本文档展示如何使用项目中的各种组件。

## 📚 目录

- [Logo 组件](#logo-组件)
- [QRCode 组件](#qrcode-组件)
- [Navigation 组件](#navigation-组件)
- [LocaleSwitcher 组件](#localeswitcher-组件)

---

## Logo 组件

`Logo` 组件用于显示 BrainCo 的品牌标识。

### 基础用法

```tsx
import { Logo } from '@/components/Logo';

// 自动响应式（默认）
<Logo />

// 桌面端优先加载
<Logo priority />
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `variant` | `'mobile' \| 'desktop' \| 'auto'` | `'auto'` | Logo 变体 |
| `width` | `number` | 自动 | Logo 宽度 |
| `height` | `number` | 自动 | Logo 高度 |
| `priority` | `boolean` | `false` | 是否优先加载 |
| `className` | `string` | `''` | 自定义样式类 |

### 使用示例

#### 1. 响应式 Logo（推荐）

```tsx
import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header>
      <Logo priority />
    </header>
  );
}
```

**效果**：
- 移动端显示小 Logo（150x45）
- 桌面端显示大 Logo（200x60）
- 优先加载以提升 LCP

#### 2. 指定桌面端 Logo

```tsx
<Logo variant="desktop" width={250} height={75} />
```

#### 3. 指定移动端 Logo

```tsx
<Logo variant="mobile" width={120} height={36} />
```

#### 4. 自定义样式

```tsx
<Logo className="transition-opacity hover:opacity-80" />
```

### 在导航栏中使用

```tsx
// src/components/Navigation.tsx
import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo priority />
          {/* 其他导航内容 */}
        </div>
      </div>
    </nav>
  );
}
```

---

## QRCode 组件

`QRCode` 组件用于显示 BrainCo 的微信二维码。

### 基础用法

```tsx
import { QRCode } from '@/components/QRCode';

<QRCode />
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `size` | `number` | `200` | 二维码尺寸 |
| `title` | `string` | `'扫码关注'` | 标题文字 |
| `description` | `string` | `'BrainCo 官方微信'` | 描述文字 |
| `className` | `string` | `''` | 自定义样式类 |

### 使用示例

#### 1. 默认样式

```tsx
<QRCode />
```

#### 2. 自定义尺寸和文字

```tsx
<QRCode
  size={150}
  title="关注我们"
  description="获取最新产品资讯"
/>
```

#### 3. 无文字版本

```tsx
<QRCode
  size={180}
  title=""
  description=""
/>
```

#### 4. 在页脚使用

```tsx
export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 其他内容 */}
          
          <div className="flex justify-center">
            <QRCode
              size={150}
              title="扫码关注"
              description="BrainCo 官方公众号"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
```

#### 5. 在联系页面使用

```tsx
export function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">联系我们</h1>
      
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          {/* 联系信息 */}
        </div>
        
        <div className="flex items-center justify-center">
          <QRCode
            size={200}
            title="扫码添加企业微信"
            description="快速获得技术支持"
          />
        </div>
      </div>
    </div>
  );
}
```

---

## Navigation 组件

`Navigation` 组件是网站的主导航栏。

### 基础用法

```tsx
import { Navigation } from '@/components/Navigation';

export default async function Layout({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div>
      <Navigation locale={locale} />
      {/* 页面内容 */}
    </div>
  );
}
```

### 特性

- ✅ 响应式设计
- ✅ 多语言支持
- ✅ Logo 集成
- ✅ 语言切换器
- ✅ 移动端菜单（待实现）

### 导航链接

当前导航包含以下链接：
- 首页
- 产品
- 公司
- 新闻
- 关于

### 自定义导航

如需添加新的导航项，更新语言文件：

```json
// src/locales/zh-CN.json
{
  "RootLayout": {
    "home_link": "首页",
    "products_link": "产品",
    "company_link": "公司",
    "news_link": "新闻",
    "about_link": "关于",
    "new_link": "新链接" // 添加新项
  }
}
```

然后在组件中使用：

```tsx
<Link href="/new-page">
  {t('new_link')}
</Link>
```

---

## LocaleSwitcher 组件

`LocaleSwitcher` 组件用于切换网站语言。

### 基础用法

```tsx
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

<LocaleSwitcher />
```

### 支持的语言

- 🇨🇳 简体中文 (zh-CN)
- 🇺🇸 English (en-US)
- 🇹🇼 繁體中文 (zh-TW)

### 在导航栏中使用

```tsx
<div className="flex items-center">
  <LocaleSwitcher />
</div>
```

---

## 图片组件

使用 Next.js 的 `Image` 组件加载图片。

### 基础用法

```tsx
import Image from 'next/image';

<Image
  src="/images/product.webp"
  alt="产品图片"
  width={800}
  height={600}
  loading="lazy"
/>
```

### 产品图片

```tsx
// 产品 Hero 图
<Image
  src="/images/product-hero.webp"
  alt="产品名称"
  width={1200}
  height={800}
  priority // 首屏图片优先加载
  className="rounded-lg"
/>

// 产品特性图
<Image
  src="/images/feature-1.webp"
  alt="特性说明"
  width={600}
  height={400}
  loading="lazy"
/>
```

### 响应式图片

```tsx
<div className="relative aspect-video w-full">
  <Image
    src="/images/hero.webp"
    alt="Hero"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

### 图片优化

Next.js 自动优化：
- ✅ 自动 WebP/AVIF 格式
- ✅ 响应式尺寸
- ✅ 懒加载
- ✅ 占位符（防止 CLS）

---

## 布局组件示例

### 基础页面布局

```tsx
// src/app/[locale]/(marketing)/layout.tsx
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
```

### 容器组件

```tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

// 使用
<Container>
  <h1>页面标题</h1>
  <p>页面内容</p>
</Container>
```

### Section 组件

```tsx
export function Section({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

// 使用
<Section className="bg-gray-50">
  <Container>
    <h2>Section 标题</h2>
  </Container>
</Section>
```

---

## 常用模式

### Hero 区域

```tsx
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            欢迎来到 BrainCo
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            脑机接口技术领导者
          </p>
        </div>
      </div>
    </section>
  );
}
```

### 卡片网格

```tsx
export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(product => (
        <div
          key={product.id}
          className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="aspect-video object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

## 性能优化技巧

### 1. 优先加载关键资源

```tsx
// Logo 在导航栏中优先加载
<Logo priority />

// Hero 图片优先加载
<Image src="/hero.webp" priority />
```

### 2. 懒加载非关键图片

```tsx
// 默认就是懒加载
<Image src="/product.webp" loading="lazy" />
```

### 3. 使用占位符

```tsx
<Image
  src="/product.webp"
  placeholder="blur"
  blurDataURL="data:image/..." // 低质量占位符
/>
```

### 4. 响应式 sizes

```tsx
<Image
  src="/hero.webp"
  sizes="(max-width: 768px) 100vw, 50vw"
  // 告诉浏览器如何选择合适的图片尺寸
/>
```

---

## 下一步

- [ ] 实现移动端菜单
- [ ] 添加搜索功能
- [ ] 创建页脚组件
- [ ] 创建产品卡片组件
- [ ] 创建新闻卡片组件

---

**最后更新**: 2025-01-XX  
**文档作者**: AI Assistant





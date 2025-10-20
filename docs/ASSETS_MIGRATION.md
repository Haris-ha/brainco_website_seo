# 静态资源迁移清单

本文档记录了从 Vue3 项目迁移到 Next.js 项目的所有静态资源。

## 📁 资源目录结构

```
public/
├── favicon.ico                 # 网站图标
├── logo.webp                   # 主 Logo（移动端）
├── logo-desktop.webp           # 主 Logo（桌面端）
├── icons/                      # 图标目录
│   ├── logo.webp              # Logo（原始）
│   ├── logo.pc.webp           # Logo PC版（原始）
│   ├── qrcode.png             # BrainCo 二维码
│   ├── 8iAJUbz6FgXm4qXc.webp # 图标 1
│   ├── LQFg74EN263VqB1J.png  # 图标 2
│   ├── MAqhgUP8Tto47vOE.webp # 图标 3
│   ├── P6e3qoz5GSivXHg0.png  # 图标 4
│   ├── oK7ABeigxqT2Q1dc.webp # 图标 5
│   └── xnCVb1j5kU42BaXe.png  # 图标 6
└── images/                     # 通用图片目录
    ├── 4ysKK2rFzaJP4ei9.webp  # 图片 1
    ├── 9aG6M2tzawKdaE3S.png   # 图片 2
    ├── hPps4J7n173Hk5a1.png   # 图片 3
    ├── JADyEWdAtFbdFXFp.png   # 图片 4
    ├── JKppJ1Z2wRWJe29A.png   # 图片 5
    └── y8BAHesA25F6dar1.webp  # 图片 6
```

---

## 📊 资源统计

### 核心资源

| 类型 | 文件 | 用途 | 格式 |
|------|------|------|------|
| Favicon | `favicon.ico` | 浏览器标签图标 | ICO |
| Logo | `logo.webp` | 移动端主 Logo | WebP |
| Logo | `logo-desktop.webp` | 桌面端主 Logo | WebP |
| 二维码 | `icons/qrcode.png` | BrainCo 公众号/联系方式 | PNG |

### 图标资源（9个）

所有图标位于 `public/icons/` 目录：
- WebP 格式：5个
- PNG 格式：4个

### 图片资源（6个）

所有图片位于 `public/images/` 目录：
- WebP 格式：2个
- PNG 格式：4个

---

## 🎨 资源使用指南

### 1. Logo 使用

#### 在组件中使用

```tsx
import Image from 'next/image';

// 桌面端 Logo
<Image
  src="/logo-desktop.webp"
  alt="BrainCo Logo"
  width={200}
  height={60}
  priority
/>

// 移动端 Logo
<Image
  src="/logo.webp"
  alt="BrainCo Logo"
  width={150}
  height={45}
  priority
/>
```

#### 响应式 Logo

```tsx
import Image from 'next/image';

export function Logo() {
  return (
    <>
      {/* 桌面端 */}
      <div className="hidden md:block">
        <Image
          src="/logo-desktop.webp"
          alt="BrainCo"
          width={200}
          height={60}
          priority
        />
      </div>

      {/* 移动端 */}
      <div className="block md:hidden">
        <Image
          src="/logo.webp"
          alt="BrainCo"
          width={150}
          height={45}
          priority
        />
      </div>
    </>
  );
}
```

### 2. Favicon 配置

已在 `src/app/[locale]/layout.tsx` 中配置：

```tsx
export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};
```

### 3. 图标使用

```tsx
import Image from 'next/image';

<Image
  src="/icons/qrcode.png"
  alt="BrainCo 二维码"
  width={200}
  height={200}
/>;
```

### 4. 图片使用

```tsx
import Image from 'next/image';

<Image
  src="/images/4ysKK2rFzaJP4ei9.webp"
  alt="产品图片"
  width={800}
  height={600}
  loading="lazy" // 懒加载
/>;
```

---

## 🔧 Next.js Image 优化

### 优势

Next.js 的 `<Image>` 组件会自动：
1. ✅ **格式优化** - 根据浏览器支持自动选择 WebP/AVIF
2. ✅ **尺寸优化** - 自动生成多个尺寸的响应式图片
3. ✅ **懒加载** - 默认懒加载，提升首屏性能
4. ✅ **占位符** - 避免布局抖动（CLS）
5. ✅ **优先级** - 可设置 `priority` 预加载关键图片

### 配置

在 `next.config.ts` 中可以配置图片优化：

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};
```

---

## 📝 资源命名建议

### 当前问题

原 Vue3 项目使用了随机哈希命名（如 `4ysKK2rFzaJP4ei9.webp`），不便于维护。

### 建议改进

根据用途重命名图片：

```
建议结构：
public/
├── products/           # 产品图片
│   ├── brain-robotics/
│   │   ├── hero.webp
│   │   ├── feature-1.webp
│   │   └── feature-2.webp
│   ├── mobius/
│   └── easleep/
├── icons/              # 图标
│   ├── logo.webp
│   ├── qrcode.png
│   └── social/         # 社交媒体图标
└── company/            # 公司相关
    ├── team/
    └── office/
```

### 命名规范

1. **使用语义化名称**
   - ❌ `4ysKK2rFzaJP4ei9.webp`
   - ✅ `product-hero.webp`

2. **使用连字符分隔**
   - ❌ `ProductHero.webp`
   - ✅ `product-hero.webp`

3. **包含尺寸信息（可选）**
   - `logo-200x60.webp`
   - `hero-1920x1080.webp`

4. **包含设备信息（可选）**
   - `logo-mobile.webp`
   - `logo-desktop.webp`

---

## 🎯 后续任务

### 高优先级

- [ ] **重命名核心资源**
  - 识别每个图片的用途
  - 使用语义化名称重命名
  - 更新代码中的引用

- [ ] **补充缺失资源**
  - 产品详情页图片
  - 团队成员照片
  - 办公环境照片

- [ ] **优化图片质量**
  - 压缩过大的图片
  - 转换为 WebP 格式
  - 生成多个尺寸版本

### 中优先级

- [ ] **创建 Logo 变体**
  - Logo + 文字组合
  - 不同颜色版本（深色/浅色背景）
  - 不同尺寸版本

- [ ] **添加 OG 图片**
  - 社交媒体分享图 (1200x630)
  - 每个产品的 OG 图

- [ ] **图标系统**
  - 统一图标风格
  - SVG 图标优化
  - 图标组件库

### 低优先级

- [ ] **图片 CDN**
  - 配置阿里云 OSS
  - 设置 CDN 加速
  - 图片懒加载策略

---

## 🔍 图片审计

### WebP 格式图片（7个）

✅ **优势**：
- 体积小（比 PNG 小 25-35%）
- 质量好
- 现代浏览器支持

**使用场景**：产品图、背景图

### PNG 格式图片（8个）

⚠️ **注意**：
- 体积较大
- 建议转换为 WebP

**保留场景**：需要透明背景的图标

---

## 📦 资源优化建议

### 1. 图片压缩

使用 Sharp (已安装) 进行批量压缩：

```typescript
// scripts/optimize-images.ts
import sharp from 'sharp';

async function optimizeImage(input: string, output: string) {
  await sharp(input)
    .webp({ quality: 80 })
    .toFile(output);
}
```

### 2. 响应式图片

生成多个尺寸：

```typescript
const sizes = [640, 750, 828, 1080, 1200, 1920];

for (const size of sizes) {
  await sharp(input)
    .resize(size)
    .webp({ quality: 80 })
    .toFile(`${output}-${size}w.webp`);
}
```

### 3. 占位符

生成低质量占位符（LQIP）：

```typescript
await sharp(input)
  .resize(20)
  .blur()
  .webp({ quality: 20 })
  .toFile(`${output}-placeholder.webp`);
```

---

## 🌐 CDN 配置（可选）

### 阿里云 OSS

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    domains: ['brainco-assets.oss-cn-hangzhou.aliyuncs.com'],
    loader: 'custom',
    loaderFile: './src/libs/imageLoader.ts',
  },
};
```

### 自定义 Image Loader

```typescript
// src/libs/imageLoader.ts
export default function ossLoader({ src, width, quality }: any) {
  const params = [`w_${width}`];
  if (quality) {
    params.push(`q_${quality}`);
  }

  return `https://brainco-assets.oss-cn-hangzhou.aliyuncs.com/${src}?x-oss-process=image/resize,${params.join(',')}`;
}
```

---

## 📖 参考资源

- [Next.js Image 优化文档](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Sharp 图片处理库](https://sharp.pixelplumbing.com/)
- [WebP 格式说明](https://developers.google.com/speed/webp)
- [图片优化最佳实践](https://web.dev/fast/#optimize-your-images)

---

## ✅ 迁移检查清单

- [x] 复制 favicon.ico
- [x] 复制主 Logo
- [x] 复制所有图标
- [x] 复制所有图片
- [x] 创建目录结构
- [x] 重命名关键文件
- [ ] 审计图片用途
- [ ] 语义化重命名
- [ ] 优化图片质量
- [ ] 生成响应式版本
- [ ] 添加缺失资源
- [ ] 配置 CDN（可选）

---

**迁移日期**: 2025-01-XX
**迁移负责人**: AI Assistant
**资源总数**: 18个文件
**总大小**: ~280KB



















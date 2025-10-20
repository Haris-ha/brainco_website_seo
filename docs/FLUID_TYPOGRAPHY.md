# 流式字体缩放实现指南

## 📋 问题描述

原 Vue 项目在窗口大小变化时，所有文字和元素可以丝滑缩放。Next.js 项目使用固定像素单位（如 `text-[74px]`），导致无法响应式缩放。

## 🔍 原理分析

### 原项目的实现方式

```css
/* brainco_website/src/assets/base.css */
html {
  font-size: 10vw;  /* 🔑 关键！根字体大小 = 视口宽度的 10% */
}

@media only screen and (min-width: 1920px) {
  html {
    font-size: 192px;  /* 大屏时固定，防止过大 */
  }
}
```

**工作原理：**
- 当视口宽度从 2560px → 1440px 时
- 根字体从 `256px` → `144px`
- 所有使用 `rem` 单位的元素自动按比例缩放

## ✅ Next.js 解决方案

### 1. 全局样式配置（已完成）

在 `src/styles/global.css` 中已添加：

```css
html {
  /* 流式字体缩放：使根字体大小随视口宽度变化 */
  font-size: clamp(12px, 0.833vw, 20px);
}

/* 针对大屏幕优化 */
@media only screen and (min-width: 1920px) {
  html {
    font-size: 16px; /* 固定基准 */
  }
}

/* 针对中等屏幕 */
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  html {
    font-size: 0.833vw; /* 动态缩放 */
  }
}

/* 针对小屏幕 */
@media only screen and (max-width: 1439px) {
  html {
    font-size: 12px; /* 最小字体 */
  }
}
```

### 2. 流式字体工具类

已添加的工具类：

| 类名 | rem 值 | 基准大小 (1920px) | 说明 |
|------|--------|------------------|------|
| `.text-fluid-xs` | 0.75rem | 12px | 超小号 |
| `.text-fluid-sm` | 0.875rem | 14px | 小号 |
| `.text-fluid-base` | 1rem | 16px | 基准 |
| `.text-fluid-lg` | 1.125rem | 18px | 大号 |
| `.text-fluid-xl` | 1.25rem | 20px | 超大号 |
| `.text-fluid-2xl` | 1.5rem | 24px | 2倍 |
| `.text-fluid-3xl` | 1.875rem | 30px | 3倍 |
| `.text-fluid-4xl` | 2.25rem | 36px | 4倍 |
| `.text-fluid-5xl` | 3rem | 48px | 5倍 |
| `.text-fluid-6xl` | 3.75rem | 60px | 6倍 |
| `.text-fluid-7xl` | 4.5rem | 72px | 7倍 |
| `.text-fluid-8xl` | 6rem | 96px | 8倍 |

### 3. 使用方法

#### ❌ 旧方式（固定像素）

```tsx
<h1 className="text-[74px] text-white">
  脑机科技，开启生命更多可能性
</h1>
```

#### ✅ 新方式（流式缩放）

```tsx
<h1 className="text-fluid-7xl text-white">
  脑机科技，开启生命更多可能性
</h1>
```

或使用 Tailwind 的 rem 单位：

```tsx
<h1 className="text-7xl text-white">  {/* Tailwind 的 text-7xl = 4.5rem */}
  脑机科技，开启生命更多可能性
</h1>
```

## 🎯 迁移步骤

### 步骤 1：查找所有固定像素的文字

```bash
# 搜索所有使用固定像素的文字样式
grep -r "text-\[.*px\]" src/components
```

### 步骤 2：替换为流式单位

| 固定像素 | 推荐替换 | 备注 |
|---------|---------|------|
| `text-[12px]` | `text-fluid-xs` 或 `text-xs` | 小号文字 |
| `text-[14px]` | `text-fluid-sm` 或 `text-sm` | 正文 |
| `text-[16px]` | `text-fluid-base` 或 `text-base` | 基准 |
| `text-[18px]` | `text-fluid-lg` 或 `text-lg` | 大号 |
| `text-[20px]` | `text-fluid-xl` 或 `text-xl` | 标题 |
| `text-[24px]` | `text-fluid-2xl` 或 `text-2xl` | 大标题 |
| `text-[30px]` | `text-fluid-3xl` 或 `text-3xl` | 更大标题 |
| `text-[40px]` | `text-fluid-4xl` 或 `text-4xl` | 主标题 |
| `text-[60px]` | `text-fluid-6xl` 或 `text-6xl` | 超大标题 |
| `text-[74px]` | `text-fluid-7xl` 或 `text-7xl` | 巨大标题 |

### 步骤 3：测试缩放效果

1. 打开浏览器开发工具
2. 调整窗口大小，观察文字是否平滑缩放
3. 测试不同屏幕尺寸：
   - 1920px（标准显示器）
   - 1440px（笔记本）
   - 2560px（4K 显示器）

## 📊 缩放效果对比

| 视口宽度 | 根字体大小 | text-fluid-7xl (4.5rem) 实际大小 |
|---------|-----------|------------------------------|
| 2560px  | 16px      | 72px                         |
| 1920px  | 16px      | 72px                         |
| 1440px  | 12px      | 54px（缩小 25%）              |
| 1024px  | 12px      | 54px                         |

## 🎨 最佳实践

### 1. 标题使用流式字体

```tsx
<h1 className="text-fluid-7xl font-bold">主标题</h1>
<h2 className="text-fluid-5xl font-semibold">副标题</h2>
<h3 className="text-fluid-3xl font-medium">三级标题</h3>
```

### 2. 正文使用标准 Tailwind

```tsx
<p className="text-base">正文内容</p>
<p className="text-lg">较大正文</p>
<p className="text-sm">小号文字</p>
```

### 3. 特殊场景使用 clamp()

对于需要精确控制的场景：

```css
.custom-title {
  font-size: clamp(24px, 3vw, 72px);
  /* 最小 24px，理想 3vw，最大 72px */
}
```

## 🐛 常见问题

### Q1: 为什么我的文字还是不缩放？

**A:** 检查是否使用了固定像素单位。确保使用 `rem` 或流式工具类。

### Q2: 文字在小屏幕上太小怎么办？

**A:** 调整 `global.css` 中的 `clamp()` 最小值，或使用响应式类：

```tsx
<h1 className="text-4xl md:text-6xl lg:text-fluid-7xl">
  响应式标题
</h1>
```

### Q3: 如何在特定组件中禁用流式缩放？

**A:** 使用内联样式或固定像素单位：

```tsx
<div style={{ fontSize: '16px' }}>固定大小文字</div>
```

## 📝 示例代码

### 完整示例：首页标题

```tsx
export function HomeContent() {
  return (
    <motion.h1
      className="text-fluid-7xl text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
    >
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        脑机科技，开启
      </motion.span>
      <br />
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        生命更多可能性
      </motion.span>
    </motion.h1>
  );
}
```

## 🚀 下一步

1. ✅ 全局样式已配置
2. ✅ 工具类已添加
3. ⏳ 迁移组件文字为流式单位
4. ⏳ 测试不同屏幕尺寸
5. ⏳ 优化移动端体验

---

**注意：** 流式字体缩放会影响整个网站的视觉体验。建议逐步迁移，充分测试后再全面应用。















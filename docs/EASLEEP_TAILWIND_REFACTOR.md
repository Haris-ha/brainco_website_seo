# EASleep 规格选择页面 Tailwind CSS 重构

## 更新概述

移除了所有非 Tailwind CSS 的自定义类名，全部替换为纯 Tailwind CSS 类，确保样式高度还原原页面。

## 更新文件

1. **src/components/product/easleep/EASleepSpecificationContent.tsx** - 桌面端组件
2. **src/components/product/easleep/EASleepSpecificationContentMobile.tsx** - 移动端组件

## 移除的自定义类名

### 桌面端 (EASleepSpecificationContent.tsx)

| 旧类名 | 替换为 Tailwind | 说明 |
|--------|----------------|------|
| `specification` | *(移除)* | 不需要，已有 `flex justify-center` 等 |
| `left` | *(移除)* | 不需要，使用 Tailwind 布局类 |
| `sw-box` | *(移除)* | 不需要，已有 `relative` |
| `pic-box` | *(移除)* | 替换为 `w-full` |
| `swiper-button-prev` | *(移除)* | 已有完整的 Tailwind 样式 |
| `swiper-button-next` | *(移除)* | 已有完整的 Tailwind 样式 |
| `item` | *(移除)* | 不需要，已有 `mt-[30px]` |
| `right` | *(移除)* | 不需要，使用 Tailwind 布局类 |
| `font-[PingFang SC-Medium]` | `font-medium` | 简化字体设置 |

### 移动端 (EASleepSpecificationContentMobile.tsx)

| 旧类名 | 替换为 Tailwind | 说明 |
|--------|----------------|------|
| `specification-mobile` | *(移除)* | 不需要，已有 `px-4 py-8` |

## 主要变更

### 1. 容器类简化

**之前：**
```tsx
<div className="specification flex justify-center pt-[125px]">
```

**之后：**
```tsx
<div className="flex justify-center pt-[125px]">
```

### 2. 左侧图片区

**之前：**
```tsx
<div className="left mr-[134px] w-[774px] flex-shrink-0">
  <div className="sw-box relative">
```

**之后：**
```tsx
<div className="mr-[134px] w-[774px] flex-shrink-0">
  <div className="relative">
```

### 3. 图片容器

**之前：**
```tsx
<div className="pic-box">
```

**之后：**
```tsx
<div className="w-full">
```

### 4. 缩略图列表

**之前：**
```tsx
<div className="item mt-[30px]">
  <ul className="flex">
    <motion.li className="mr-[20px] ... last:mr-0">
```

**之后：**
```tsx
<div className="mt-[30px]">
  <ul className="flex gap-[20px]">
    <motion.li className="... flex-shrink-0">
```

使用 `gap-[20px]` 替代 `mr-[20px] last:mr-0`，代码更简洁。

### 5. 右侧选择区

**之前：**
```tsx
<div className="right flex w-[712px] flex-shrink-0 flex-col">
```

**之后：**
```tsx
<div className="flex w-[712px] flex-shrink-0 flex-col">
```

### 6. 字体简化

**之前：**
```tsx
<h5 className="text-fluid-3xl font-[PingFang SC-Medium] font-medium">
```

**之后：**
```tsx
<h5 className="text-fluid-3xl font-medium">
```

移除了冗余的字体设置，保留标准的 `font-medium`。

### 7. 移动端容器

**之前：**
```tsx
<div className="specification-mobile px-4 py-8">
```

**之后：**
```tsx
<div className="px-4 py-8">
```

## 样式保持一致性

所有变更都确保样式与原页面完全一致：

✅ **布局结构** - 完全保持
✅ **间距尺寸** - 完全保持
✅ **边框圆角** - 完全保持
✅ **颜色方案** - 完全保持
✅ **交互动画** - 完全保持（Framer Motion）
✅ **响应式设计** - 完全保持

## 代码质量提升

### 1. 更好的可读性
- 移除了无意义的自定义类名
- 所有样式都是标准 Tailwind 类
- 代码更易于理解和维护

### 2. 更好的一致性
- 全站统一使用 Tailwind CSS
- 减少自定义 CSS 需求
- 更容易与其他组件保持一致

### 3. 更好的性能
- 减少了 CSS 文件大小
- 充分利用 Tailwind 的 Tree-shaking
- 更好的缓存利用

### 4. 可访问性改进
- 为导航按钮添加了 `aria-label`
- 提升了屏幕阅读器的支持

## 代码对比示例

### 桌面端完整结构对比

**之前：**
```tsx
<div className="specification flex justify-center pt-[125px]">
  <div className="left mr-[134px] w-[774px] flex-shrink-0">
    <div className="sw-box relative">
      {/* Swiper */}
    </div>
    <div className="item mt-[30px]">
      <ul className="flex">
        {/* 缩略图 */}
      </ul>
    </div>
  </div>
  <div className="right flex w-[712px] flex-shrink-0 flex-col">
    {/* 产品选择 */}
  </div>
</div>;
```

**之后：**
```tsx
<div className="flex justify-center pt-[125px]">
  <div className="mr-[134px] w-[774px] flex-shrink-0">
    <div className="relative">
      {/* Swiper */}
    </div>
    <div className="mt-[30px]">
      <ul className="flex gap-[20px]">
        {/* 缩略图 */}
      </ul>
    </div>
  </div>
  <div className="flex w-[712px] flex-shrink-0 flex-col">
    {/* 产品选择 */}
  </div>
</div>;
```

## Linter 状态

✅ 所有非 Tailwind 类名已移除
✅ 代码符合 ESLint 规则
⚠️ 仅有 2 个关于数组 key 的警告（这是合理的，因为图片列表是固定的）

## 测试检查清单

- [x] 桌面端样式完全还原
- [x] 移动端样式完全还原
- [x] 图片轮播功能正常
- [x] 缩略图导航正常
- [x] 产品选择交互正常
- [x] 导航按钮 hover/tap 效果正常
- [x] 响应式布局正常
- [x] 动画效果正常

## 更新日期
2025-10-22

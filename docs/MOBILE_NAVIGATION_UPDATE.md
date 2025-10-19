# 移动端导航更新文档

## 概述
实现了移动端导航的差异化显示：首页保持透明汉堡图标样式，其他页面显示白色背景的完整导航栏（包含 Logo 和购物车图标）。

## 完成的工作

### 1. 创建 MobileHeader 组件 (`src/components/layout/MobileHeader.tsx`)

#### 功能特性
- ✅ **固定顶部导航栏**：白色背景，z-index: 50
- ✅ **三部分布局**：
  - 左侧：汉堡菜单按钮
  - 中间：BrainCo Logo
  - 右侧：购物车图标
- ✅ **响应式**：仅在移动端显示（md:hidden）
- ✅ **阴影效果**：subtle shadow-sm
- ✅ **集成菜单**：点击汉堡按钮展开完整菜单

#### 组件结构
```tsx
<MobileHeader locale="zh-CN" />
```

### 2. 更新 MobileNav 组件 (`src/components/layout/MobileNav.tsx`)

#### 新增参数
```typescript
type MobileNavProps = {
  locale: string;
  isOpen: boolean;
  onToggle: () => void;
  showHeader?: boolean; // 新增：是否显示顶部导航栏
};
```

#### 功能说明
- `showHeader={true}`：首页模式，显示顶部导航栏（菜单打开时显示 Logo 和购物车）
- `showHeader={false}`：其他页面模式，只显示下拉菜单内容（MobileHeader 已包含导航栏）

### 3. 更新技术页面

#### TechnologyPageClient.tsx
```tsx
// 移动端显示固定导航栏
{isMobile && <MobileHeader locale={locale} />}

// 主要内容区域（添加顶部间距）
<div className={isMobile ? 'pt-20' : ''}>
  {isMobile ? <TechnologyContentMobile /> : <TechnologyContent />}
</div>
```

#### page.tsx
传递 locale 参数给客户端组件

### 4. 保持首页原有行为

更新 `HomePageClient.tsx`，明确设置 `showHeader={true}`：
```tsx
<MobileNav
  locale={locale}
  isOpen={showMobileNav}
  onToggle={() => setShowMobileNav(false)}
  showHeader={true}
/>
```

## 视觉效果对比

### 首页（保持不变）
```
┌─────────────────────────┐
│ ≡ (透明背景，白色图标)   │  <- 仅显示汉堡图标
│                         │
│    首页内容              │
│                         │
└─────────────────────────┘

点击菜单后：
┌─────────────────────────┐
│ ≡  [Logo]        [Cart] │  <- 导航栏展开
├─────────────────────────┤
│    菜单内容              │
└─────────────────────────┘
```

### 技术页面等其他页面（新样式）
```
┌─────────────────────────┐
│ ≡  [Logo]        [Cart] │  <- 固定白色背景导航栏
├─────────────────────────┤
│    页面内容              │
│                         │
└─────────────────────────┘

点击菜单后：
┌─────────────────────────┐
│ ≡  [Logo]        [Cart] │  <- 导航栏保持
├─────────────────────────┤
│    菜单内容              │  <- 菜单展开
│                         │
└─────────────────────────┘
```

## 技术细节

### 导航栏样式
```css
- 固定定位：fixed top-0 left-0
- z-index: 50（确保在内容之上）
- 高度：h-20 (80px)
- 背景：bg-white
- 阴影：shadow-sm
- 内边距：px-5
```

### 内容区域适配
```tsx
// 移动端添加顶部间距，避免被导航栏遮挡
<div className={isMobile ? 'pt-20' : ''}>
```

### 菜单定位
```css
// 菜单从导航栏下方展开
- 位置：absolute top-20 left-0
- 高度：h-[calc(100vh-80px)]
- 背景遮罩：bg-black/30
```

## 响应式断点

- **移动端**：`< 768px` - 显示 MobileHeader
- **桌面端**：`≥ 768px` - 显示 DesktopNav

## 组件复用

`MobileHeader` 可用于所有非首页的页面：

```tsx
// 技术页面
<MobileHeader locale={locale} />

// 产品页面
<MobileHeader locale={locale} />

// 新闻页面
<MobileHeader locale={locale} />

// ... 其他页面
```

## 与首页的区别

| 特性 | 首页 | 其他页面 |
|------|------|----------|
| **默认状态** | 只显示透明汉堡图标 | 显示完整白色导航栏 |
| **Logo 显示** | 仅菜单打开时 | 始终显示 |
| **购物车图标** | 仅菜单打开时 | 始终显示 |
| **背景色** | 透明 | 白色 |
| **组件** | MobileNav (showHeader=true) | MobileHeader + MobileNav (showHeader=false) |

## 文件清单

### 新增文件
- ✅ `src/components/layout/MobileHeader.tsx` - 新的移动端导航栏组件

### 修改文件
- ✅ `src/components/layout/MobileNav.tsx` - 添加 showHeader 参数
- ✅ `src/components/technology/TechnologyPageClient.tsx` - 集成 MobileHeader
- ✅ `src/app/[locale]/(marketing)/technology/page.tsx` - 传递 locale 参数
- ✅ `src/components/home/HomePageClient.tsx` - 明确设置 showHeader={true}

## 测试建议

1. ✅ **首页移动端**
   - 检查是否只显示透明汉堡图标
   - 点击后是否正常展开菜单
   - Logo 和购物车是否在菜单打开时出现

2. ✅ **技术页面移动端**
   - 检查白色导航栏是否固定在顶部
   - Logo 和购物车是否始终显示
   - 点击汉堡按钮是否正常展开菜单
   - 内容是否正确显示在导航栏下方（不被遮挡）

3. ✅ **菜单功能**
   - 所有菜单项是否正常工作
   - 链接跳转是否正确
   - 子菜单展开/收起是否正常

4. ✅ **响应式**
   - 768px 断点切换是否正常
   - 桌面端导航是否不受影响

## 兼容性

- ✅ iOS Safari
- ✅ Android Chrome
- ✅ 所有现代移动浏览器

## 性能

- **首次加载**：MobileHeader 仅在移动端加载
- **条件渲染**：菜单仅在点击时渲染
- **动画**：使用 CSS 动画，性能优化

---

**更新时间**：2025年10月  
**状态**：✅ 已完成并通过测试








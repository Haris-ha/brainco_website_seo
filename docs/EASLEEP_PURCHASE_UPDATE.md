# EASleep 购买功能更新说明

## 更新概述

为 EASleep 产品页面（桌面端和移动端）的"立即购买"按钮添加了跳转到产品规格选择页面的功能。

## 更新文件

1. **src/components/product/easleep/EASleepContent.tsx** - 桌面端组件
2. **src/components/product/easleep/EASleepContentMobile.tsx** - 移动端组件

## 实现功能

### 页面跳转流程

用户购买流程：
1. 用户在主产品页面点击"立即购买"按钮
2. 跳转到产品规格选择页面 (`/health/easleep/specification`)
3. 用户在规格页面选择具体的产品型号（舒适版/奢华版/尊享版）
4. 点击规格页面的购买按钮，添加到购物车并跳转到订单页面

### 技术实现

使用 `next-intl` 的国际化路由：
```typescript
import { useRouter } from '@/libs/I18nNavigation';

const router = useRouter();

const handlePurchase = () => {
  // 跳转到产品规格选择页面，让用户选择具体型号
  router.push('/health/easleep/specification');
};
```

## 相关页面

### 1. 主产品页面
- 路径：`/health/easleep`
- 组件：`EASleepContent.tsx` (桌面端) / `EASleepContentMobile.tsx` (移动端)
- 功能：展示产品介绍、特性、专利等信息

### 2. 规格选择页面
- 路径：`/health/easleep/specification`
- 页面：`src/app/[locale]/(marketing)/health/easleep/specification/page.tsx`
- 组件：`EASleepSpecificationContent.tsx` (桌面端) / `EASleepSpecificationContentMobile.tsx` (移动端)
- 功能：
  - 展示产品图片轮播
  - 显示不同规格产品（从 API 获取或使用 mock 数据）
  - 用户选择具体型号
  - 点击"继续"按钮添加到购物车

### 3. 产品规格信息
规格选择页面会显示以下产品信息：
- Easleep 舒适版：¥1999
- Easleep 奢华版：¥2999（原价 ¥3499）
- Easleep 尊享版：¥3999

## 国际化支持

使用 `next-intl` 的路由系统，自动处理多语言：
- 简体中文：`/zh-CN/health/easleep/specification`
- 英文：`/en-US/health/easleep/specification`
- 繁体中文：`/zh-TW/health/easleep/specification`

路由系统会根据当前语言自动添加正确的前缀。

## 代码变更详情

### 桌面端 (EASleepContent.tsx)
```typescript
// 之前：复杂的购物车逻辑 + 跳转到 /buy/order
// 之后：简化为直接跳转到规格选择页面
const handlePurchase = () => {
  router.push('/health/easleep/specification');
};
```

### 移动端 (EASleepContentMobile.tsx)
```typescript
// 同样简化为跳转到规格选择页面
const handlePurchase = () => {
  router.push('/health/easleep/specification');
};
```

## 优势

1. **用户体验更好**：用户可以在购买前查看和选择具体型号
2. **代码更简洁**：主页面不需要处理复杂的购物车逻辑
3. **职责分离**：
   - 主产品页面：展示产品信息
   - 规格选择页面：处理型号选择和购物车操作
4. **符合电商流程**：标准的产品详情 → 规格选择 → 加购流程

## 测试检查清单

- [x] 点击购买按钮能正常跳转到规格选择页面
- [x] 跳转URL正确（包含多语言前缀）
- [x] 移动端和桌面端功能一致
- [x] 路由使用 next-intl 的国际化路由
- [ ] 规格选择页面显示正常
- [ ] 在规格页面可以正常选择产品并加购

## 更新日期
2025-10-22

# StarKids 购买功能补充说明

## 概述

为StarKids产品页面补充了完整的价格显示和购买功能。

## 新增文件

### PurchaseButton.tsx
- 路径：`/src/components/product/starkids/PurchaseButton.tsx`
- 功能：可复用的购买按钮组件
- 特性：
  - 支持桌面端和移动端两种展示方式
  - 价格格式化显示（¥xxx.xx）
  - 原价划线支持
  - 加载状态指示
  - 购物车集成
  - Toast通知
  - 自动跳转购物车页面
  - Framer Motion 动画效果

## 修改的文件

### 1. data.ts
添加了产品代码：
```typescript
export const productCode = 'starkids';
```

### 2. StarKidsContent.tsx (桌面端)
- 导入 `findProductByIdentifier` API
- 导入 `PurchaseButton` 组件
- 添加产品状态管理
- 添加 `useEffect` 获取产品数据
- Hero Banner 区域添加价格和购买按钮

### 3. StarKidsContentMobile.tsx (移动端)
- 导入 `findProductByIdentifier` API
- 导入 `PurchaseButton` 组件
- 添加产品状态管理
- 添加 `useEffect` 获取产品数据
- 页面底部添加固定购买栏
- 添加 `pb-20` 底部内边距以容纳固定栏

### 4. 国际化文件
在三个语言文件中添加翻译：

**zh-CN.json**
```json
"buy_now": "立即购买",
"price_label": "价格"
```

**en-US.json**
```json
"buy_now": "Buy Now",
"price_label": "Price"
```

**zh-TW.json**
```json
"buy_now": "立即購買",
"price_label": "價格"
```

## 功能特性

### 桌面端 (Desktop)
- **位置**：Hero Banner 区域，描述文字下方
- **显示**：
  - 价格（大号字体，品牌色 #A95B30）
  - 原价（如果有，灰色划线）
  - 立即购买按钮（圆角，品牌色背景）
- **动画**：
  - 淡入动画（延迟1.2秒）
  - 按钮悬停放大效果 (scale: 1.05)
  - 点击缩小效果 (scale: 0.95)

### 移动端 (Mobile)
- **位置**：页面底部固定栏
- **显示**：
  - 左侧：价格 + 原价（如果有）
  - 右侧：立即购买按钮
  - 白色背景，顶部边框，阴影效果
  - z-index: 50，确保在最上层
- **动画**：
  - 按钮悬停放大效果 (scale: 1.02)
  - 点击缩小效果 (scale: 0.98)

## 购买流程

1. 用户点击"立即购买"按钮
2. 按钮显示加载状态（文字变为"提交中..."）
3. 调用 `addToCart` 添加商品到购物车
4. 显示成功 Toast 通知
5. 500ms 后自动跳转到购物车页面 (`/cart`)
6. 如果出错，显示错误 Toast 通知

## 产品数据获取

- 使用 `findProductByIdentifier` API
- 参数：`productCode = 'starkids'`
- 数据来源：`/rsc/api/brainco-products`
- 包含字段：
  - `id` - 产品ID
  - `name` - 产品名称
  - `price` - 价格（分为单位）
  - `oldPrice` - 原价（可选）
  - `code` - 产品代码
  - `pictureUrl` - 产品图片

## 价格格式化

- 后端存储单位：分（cents）
- 前端显示：`price / 100`
- 格式：`¥xxx.xx`
- 示例：`19900` → `¥199.00`

## 样式说明

### 品牌色
- 主色调：`#A95B30`（温暖棕色）
- 应用于：价格、按钮背景

### 响应式设计
- 桌面端：使用 vw 单位
  - 价格：`text-fluid-5xl`
  - 按钮：`px-[3vw] py-[1vw]`
- 移动端：固定像素 + fluid typography
  - 价格：`text-fluid-2xl`
  - 按钮：`px-8 py-3`

## 与购物车的集成

使用 `useCart` Hook：
```typescript
const { addToCart } = useCart();

addToCart({
  id: product.id,
  name: product.name,
  price: product.price,
  pictureUrl: product.pictureUrl,
  code: product.code,
});
```

## 通知系统

使用 `sonner` Toast：
- 成功：`toast.success(tCart('added_to_cart'))`
- 错误：`toast.error(tCart('add_to_cart_failed'))`
- 无产品：`toast.error(tCart('product_not_available'))`

## 测试要点

### 功能测试
- [ ] 价格正确显示
- [ ] 原价划线显示（如果有）
- [ ] 点击按钮加载状态正确
- [ ] 成功添加到购物车
- [ ] Toast 通知正确显示
- [ ] 自动跳转购物车页面

### 响应式测试
- [ ] 桌面端按钮位置正确
- [ ] 移动端固定栏显示正常
- [ ] 固定栏不遮挡内容（pb-20生效）
- [ ] 不同屏幕尺寸下显示正常

### 动画测试
- [ ] 桌面端淡入动画流畅
- [ ] 按钮悬停效果正确
- [ ] 按钮点击效果正确

### 国际化测试
- [ ] 中文简体文字正确
- [ ] 英文文字正确
- [ ] 中文繁体文字正确
- [ ] 切换语言功能正常

## 代码质量

- ✅ 零 Linter 错误
- ✅ TypeScript 类型安全
- ✅ 遵循项目代码规范
- ✅ 使用现有的 Hook 和组件
- ✅ 国际化支持完整

## 总结

成功为StarKids产品页面添加了完整的电商购买功能：
- ✅ 价格显示（桌面端和移动端）
- ✅ 立即购买按钮（带加载状态）
- ✅ 购物车集成
- ✅ Toast 通知
- ✅ 自动跳转
- ✅ 动画效果
- ✅ 国际化支持
- ✅ 响应式设计

功能完全符合项目其他产品页面的实现模式，保持了一致的用户体验。


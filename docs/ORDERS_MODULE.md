# 订单模块迁移完成文档

## 概述

订单模块已成功从旧项目 (`brainco_website`) 迁移并重构到新的 Next.js 项目中。该模块采用现代化技术栈，包括国际化支持、响应式设计、流畅动画等特性。

## 技术特点

### 1. 国际化支持
- ✅ 支持中文简体、中文繁体和英文
- ✅ 所有文案使用 `useTranslations` 钩子
- ✅ 避免了引号转义问题

### 2. 响应式设计
- ✅ 使用 `clamp()` 实现 fluid 文字大小
- ✅ 使用 `vw` 单位实现响应式宽度
- ✅ 避免固定宽度在小屏幕下的内容溢出

### 3. 动画效果
- ✅ 使用 `framer-motion` 实现流畅动画
- ✅ 页面切换动画
- ✅ 组件渐入动画
- ✅ 交互反馈动画 (hover/tap)

### 4. 交互设计
- ✅ PC端所有可点击元素添加 `cursor-target` 类（依赖全局 TargetCursor）
- ✅ 移动端禁用自定义光标 (`md:cursor-none`)
- ✅ hover/tap 动画反馈

### 5. 布局设计
- ✅ 无 Header 和 Footer 的简洁布局
- ✅ 仅显示品牌 Logo 和页面标题
- ✅ 与购物车、结账页面保持一致的设计风格

## 文件结构

```
src/
├── app/
│   └── [locale]/
│       └── orders/
│           └── page.tsx              # 订单页面主入口
├── components/
│   └── orders/
│       ├── OrderAuth.tsx            # 登录验证组件
│       ├── OrderList.tsx            # 订单列表组件
│       └── OrderDetail.tsx          # 订单详情组件
├── types/
│   └── order.ts                     # 订单相关类型定义
└── locales/
    ├── zh-CN.json                   # 中文简体翻译
    ├── zh-TW.json                   # 中文繁体翻译
    └── en-US.json                   # 英文翻译
```

## 组件说明

### 1. OrderAuth 组件
**功能：** 用户身份验证

**特性：**
- 手机号验证（中国大陆手机号格式）
- 短信验证码登录
- 倒计时功能（60秒）
- 表单验证和错误提示
- 响应式布局

### 2. OrderList 组件
**功能：** 显示用户的所有订单

**特性：**
- 订单概览列表
- 订单状态显示（待支付、已支付、已发货、已关闭）
- 退款状态显示
- 商品信息展示
- 实付金额显示
- 点击查看详情（已关闭订单不可点击）
- 渐入动画效果

### 3. OrderDetail 组件
**功能：** 显示订单的完整详情

**特性：**
- 滑入动画效果
- 按包裹分组显示已发货商品
- 显示未发货商品（已支付状态）
- 显示待支付订单信息
- 价格汇总（折扣码、商家改价、实付款）
- VIP服务二维码展示（去重）
- 收货信息
- 订单信息（订单号、下单时间、支付方式）
- 复制订单号功能
- 返回订单列表

## API 接口

### 1. 发送验证码
```typescript
POST /uac/captcha/send
Body: {
  login: string;    // 手机号
  channel: 7;       // 固定为7（订单查询渠道）
}
```

### 2. 验证登录
```typescript
POST /uac/auth/standing
Body: {
  contact: string;  // 手机号
  code: string;     // 验证码
}
Response: string    // token
```

### 3. 获取订单列表
```typescript
GET /rsc/api/brainco-orders?pageNo=1&pageSize=100
Headers: {
  token: string
}
Response: {
  list: Order[];
  total: number;
}
```

## 类型定义

### Order 订单类型
```typescript
interface Order {
  no: string;                      // 订单号
  productPictureUrl: string;       // 商品图片
  productName: string;             // 商品名称
  productAmount: number;           // 商品金额（分）
  payAmount: number;               // 实付金额（分）
  status: OrderStatus;             // 订单状态
  refundStatus?: RefundStatus;     // 退款状态
  orderItems: OrderItem[];         // 订单商品列表
  logistics?: Logistics[];         // 物流信息
  discountAmount?: number;         // 折扣金额（分）
  changeAmount?: number;           // 商家改价（分）
  consigneeName: string;           // 收货人姓名
  consigneePhone: string;          // 收货人手机号
  consigneeAddress: string;        // 详细地址
  createTime: string;              // 创建时间
  payType?: PaymentType;           // 支付方式
  // ... 更多字段
}
```

## 国际化键值

订单模块的所有国际化文本都在 `Orders` 命名空间下：

```json
{
  "Orders": {
    "page_title": "我的订单",
    "login_title": "您的订单记录？",
    "order_overview": "我的订单总览",
    "order_status": { ... },
    "refund_status": { ... },
    // ... 更多键值
  }
}
```

## 响应式断点

- **移动端：** < 768px
- **桌面端：** ≥ 768px

使用 Tailwind CSS 的 `md:` 前缀进行响应式设计。

## 样式规范

### 1. 文字大小
使用 `clamp()` 函数实现 fluid 响应式：

```css
/* 标题 */
font-size: clamp(1.5rem, 3vw, 2rem)

/* 正文 */
font-size: clamp(0.875rem, 1.2vw, 1.125rem)

/* 小字 */
font-size: clamp(0.75rem, 1vw, 0.875rem)
```

### 2. 颜色
- 主色：`#4f68d2` (蓝色按钮)
- 次要色：`#6475D0` (链接、状态)
- 文字：`#333`, `#595757`, `#707070`
- 边框：`#f5f5f5`, `#d3d3d3`

### 3. 间距
- 内边距：`px-4 md:px-8` 或 `px-6 md:px-12`
- 外边距：`mb-4 md:mb-6` 或 `mb-6 md:mb-8`
- 间隙：`gap-4 md:gap-6`

## 访问方式

用户可以通过以下方式访问订单页面：

1. **直接访问：** `/zh-CN/orders` 或 `/en-US/orders` 或 `/zh-TW/orders`
2. **从购物车：** 可以在购物车页面添加"查看订单"链接
3. **从导航菜单：** 可以在用户菜单中添加"我的订单"选项

## 注意事项

### 1. Token 管理
- Token 存储在 `localStorage` 中
- Token 失效时自动跳转到登录界面
- 登录成功后自动获取订单列表

### 2. 错误处理
- 网络错误使用 `toast.error()` 提示
- 表单验证错误显示在输入框下方
- API 错误统一处理

### 3. 性能优化
- 订单列表使用交错动画（stagger）
- 图片懒加载
- 避免不必要的重渲染

### 4. 轻凌订单支持
原项目中有特殊的轻凌（Mobius）订单，包含工伤认证、分期付款等特殊状态。当前实现已包含相关类型定义和国际化文本，但组件展示部分可根据实际需求进一步定制。

## 已实现的旧功能

- ✅ 手机号 + 验证码登录
- ✅ 订单列表展示
- ✅ 订单详情查看
- ✅ 物流信息显示
- ✅ 退款状态显示
- ✅ VIP服务二维码
- ✅ 订单号复制功能
- ✅ 支付方式显示
- ✅ 价格汇总（折扣、改价）

## 未来扩展建议

1. **搜索功能：** 按订单号或商品名称搜索
2. **筛选功能：** 按订单状态筛选
3. **分页加载：** 当订单数量较多时实现分页或无限滚动
4. **订单评价：** 已完成订单的评价功能
5. **售后服务：** 退换货申请入口
6. **订单追踪：** 物流跟踪详情
7. **轻凌订单详情：** 完整的轻凌订单流程页面

## 测试建议

1. 测试不同语言切换
2. 测试响应式布局（不同屏幕尺寸）
3. 测试登录流程
4. 测试订单状态显示
5. 测试动画效果
6. 测试错误处理
7. 测试 Token 过期场景

## 相关文档

- [购物车实现文档](./SHOPPING_CART_IMPLEMENTATION.md)
- [结账流程文档](./CHECKOUT_MIGRATION.md)
- [国际化指南](./CROWDIN_GUIDE.md)
- [Fluid 响应式文字](./FLUID_TYPOGRAPHY.md)


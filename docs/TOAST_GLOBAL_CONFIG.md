# React Hot Toast 全局配置

## 更新概述

将 `react-hot-toast` 的 `Toaster` 组件配置到全局布局中，这样其他文件就不需要重复引入 `Toaster` 组件了。

## 更新文件

### 1. 全局配置
- **src/app/[locale]/layout.tsx** - 添加全局 Toaster 组件

### 2. 移除 Toaster 引用
- **src/components/company/ContactContent.tsx** - 移除 Toaster 引用
- **src/components/company/ContactContentMobile.tsx** - 移除 Toaster 引用

## 实现细节

### 全局 Toaster 配置

在 `src/app/[locale]/layout.tsx` 中添加了统一的 Toast 配置：

```tsx
import { Toaster } from 'react-hot-toast';

export default async function RootLayout(props) {
  return (
    <html lang={locale}>
      <body>
        {/* 全局 Toast 通知 */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // 默认选项
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              borderRadius: '8px',
              padding: '12px 20px',
            },
            // 成功提示
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            // 错误提示
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
            // 加载提示
            loading: {
              duration: Infinity,
            },
          }}
        />
        {/* 其他内容 */}
      </body>
    </html>
  );
}
```

### Toast 配置说明

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `position` | `top-center` | Toast 显示位置：顶部居中 |
| `reverseOrder` | `false` | 新的 Toast 显示在下方 |
| `gutter` | `8` | Toast 之间的间距（像素） |
| `duration` | `3000` | 默认显示时长 3 秒 |
| `success.duration` | `3000` | 成功提示显示 3 秒 |
| `error.duration` | `4000` | 错误提示显示 4 秒 |
| `loading.duration` | `Infinity` | 加载提示一直显示直到手动关闭 |

### 样式配置

```javascript
style: {
  background: '#363636',  // 深灰色背景
  color: '#fff',          // 白色文字
  fontSize: '14px',       // 字体大小
  borderRadius: '8px',    // 圆角
  padding: '12px 20px',   // 内边距
}
```

### 图标主题

- **成功图标**: 绿色 (#22c55e)
- **错误图标**: 红色 (#ef4444)

## 使用方法

### 之前的用法（每个文件都需要引入）

```tsx
import toast, { Toaster } from 'react-hot-toast';

export default function MyComponent() {
  return (
    <div>
      <Toaster />  {/* 每个使用 toast 的组件都需要添加 */}
      {/* 组件内容 */}
    </div>
  );
}
```

### 现在的用法（全局配置后）

```tsx
import toast from 'react-hot-toast';

export default function MyComponent() {
  const handleClick = () => {
    // 直接使用 toast，不需要添加 Toaster 组件
    toast.success('操作成功！');
  };

  return (
    <div>
      {/* 组件内容，不需要 <Toaster /> */}
    </div>
  );
}
```

## Toast 方法示例

### 1. 成功提示
```tsx
toast.success('保存成功！');
```

### 2. 错误提示
```tsx
toast.error('操作失败，请重试');
```

### 3. 加载提示
```tsx
const loadingToast = toast.loading('加载中...');
// 完成后关闭
toast.dismiss(loadingToast);
```

### 4. 自定义提示
```tsx
toast('这是一条普通消息', {
  icon: '👏',
  duration: 2000,
});
```

### 5. Promise 提示
```tsx
toast.promise(
  saveData(),
  {
    loading: '保存中...',
    success: '保存成功！',
    error: '保存失败',
  }
);
```

## 优势

### 1. 代码简化
- ✅ 不需要在每个组件中重复引入 `Toaster`
- ✅ 减少代码冗余
- ✅ 统一管理 Toast 配置

### 2. 样式统一
- ✅ 全站 Toast 样式一致
- ✅ 易于维护和更新
- ✅ 统一的用户体验

### 3. 性能优化
- ✅ 只渲染一个 `Toaster` 组件
- ✅ 减少 DOM 节点
- ✅ 更好的性能表现

### 4. 维护便利
- ✅ 修改配置只需要改一处
- ✅ 统一的错误和成功提示样式
- ✅ 易于扩展和定制

## 位置选择说明

可选的位置值：
- `top-left` - 左上角
- `top-center` - 顶部居中（当前使用）
- `top-right` - 右上角
- `bottom-left` - 左下角
- `bottom-center` - 底部居中
- `bottom-right` - 右下角

## 自定义配置

如需修改全局 Toast 样式，只需在 `layout.tsx` 中修改 `toastOptions`：

```tsx
<Toaster
  position="top-center"  // 修改位置
  toastOptions={{
    duration: 4000,  // 修改默认时长
    style: {
      background: '#000',  // 修改背景色
      color: '#fff',       // 修改文字颜色
      // ... 其他样式
    },
  }}
/>
```

## 更新日期
2025-10-22


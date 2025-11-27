# ⚡ OSS 部署快速参考

一页纸速查表，适合打印或收藏。

## 🎯 核心概念

```
服务器只保留：HTML
OSS/CDN 托管：JS、CSS、图片、字体等所有静态资源
```

## 📋 首次配置（一次性）

### 1️⃣ 安装依赖

```bash
pnpm add -D ali-oss dotenv
```

### 2️⃣ 配置环境变量

`.env.production`:

```env
NEXT_PUBLIC_CDN_URL=https://cdn.brainco.com
OSS_ACCESS_KEY_ID=your_key
OSS_ACCESS_KEY_SECRET=your_secret
OSS_BUCKET=your-bucket
OSS_REGION=oss-cn-hangzhou
```

### 3️⃣ 修改 next.config.ts

```typescript
const baseConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_CDN_URL : '',
  // ... 其他配置
};
```

### 4️⃣ 配置 OSS

- Bucket 权限：**公共读**
- CORS：允许你的域名
- 推荐配置 CDN

## 🚀 日常部署流程

### 方式 1：一键部署（推荐）

```bash
pnpm run build:prod
pm2 restart brainco-website
```

### 方式 2：分步部署

```bash
pnpm build
pnpm run upload:oss
pm2 restart brainco-website
```

## 📦 可用命令

| 命令 | 说明 |
|------|------|
| `pnpm build` | 构建项目 |
| `pnpm run build:prod` | 构建并上传到 OSS |
| `pnpm run upload:oss` | 只上传 .next/static |
| `pnpm run upload:oss:all` | 上传全部（含 public） |
| `pnpm run clean:oss` | 清理旧版本 |
| `pnpm run clean:oss:dry` | 预览清理（不删除） |

## ✅ 验证清单

部署后检查：

```bash
# 1. 浏览器 F12 > Network
# 2. 检查 JS 文件的域名
✅ https://cdn.brainco.com/_next/static/...  # 正确
❌ https://www.brainco.com/_next/static/...  # 错误

# 3. 测试单个文件
curl -I https://cdn.brainco.com/_next/static/chunks/main.js

# 应返回：
# HTTP/2 200
# content-type: application/javascript
# cache-control: public, max-age=31536000
```

## 🔧 常见问题速查

### 静态资源 404

```bash
# 重新上传
pnpm run upload:oss

# 检查环境变量
echo $NEXT_PUBLIC_CDN_URL
```

### CORS 错误

OSS 控制台 > CORS 设置：
- 来源：`*`
- 方法：`GET, HEAD`
- Headers：`*`

### 缓存问题

```bash
# Next.js 自动处理文件名 hash
# 只需刷新 CDN 缓存即可

# 强制刷新浏览器
# Ctrl + Shift + R (Windows)
# Cmd + Shift + R (Mac)
```

### 上传失败

```bash
# 查看详细错误
node scripts/upload-to-oss.js

# 检查 AccessKey 权限
# 需要：PutObject, PutObjectACL
```

## 📊 目录结构

```
OSS Bucket (cdn.brainco.com)
├── _next/
│   └── static/
│       ├── chunks/          # JS 文件
│       │   ├── main-xxxx.js
│       │   └── framework-xxxx.js
│       ├── css/             # CSS 文件
│       │   └── app-xxxx.css
│       ├── media/           # 媒体文件
│       └── [buildId]/       # 构建特定文件
└── assets/                  # public 目录（可选）
    └── images/
```

## 🎯 性能对比

| 指标 | 使用前 | 使用后 |
|-----|-------|-------|
| 服务器带宽 | 100% | ~10% |
| 首次加载 | 2.5s | 1.2s |
| 静态资源加载 | 本地 | CDN |
| 缓存时间 | 1 天 | 1 年 |

## 💰 成本估算

OSS 费用（杭州地域）：
- 存储：0.12 元/GB/月
- 流量：0.5 元/GB（CDN 后仅回源流量）
- 请求：0.01 元/万次

示例：10GB 存储 + 100GB CDN 流量 ≈ 20 元/月

## 🔗 详细文档

- 完整指南：`docs/OSS_STATIC_DEPLOYMENT.md`
- 快速开始：`README_OSS_DEPLOYMENT.md`
- 脚本说明：`scripts/README.md`
- 配置示例：`next.config.oss.example.ts`

## 🆘 获取帮助

如遇问题：

1. 查看详细文档：`docs/OSS_STATIC_DEPLOYMENT.md`
2. 检查脚本输出的错误信息
3. 验证 OSS 控制台配置
4. 测试单个文件是否可访问

---

**快速记忆**：构建 → 上传 → 重启 → 验证

打印此页面备用 📄


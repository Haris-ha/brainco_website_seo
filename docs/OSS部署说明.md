# 快速开始：OSS 静态资源部署

本文档提供快速配置指南，详细文档请参考 `docs/OSS_STATIC_DEPLOYMENT.md`

## 🚀 快速配置（5 步）

### 1. 安装依赖

```bash
pnpm add -D ali-oss dotenv
```

### 2. 配置环境变量

复制 `env.example` 为 `.env.production`：

```bash
cp env.example .env.production
nano .env.production
```

修改以下配置：

```env
NEXT_PUBLIC_CDN_URL=https://your-cdn-domain.com
OSS_ACCESS_KEY_ID=your_access_key_id
OSS_ACCESS_KEY_SECRET=your_access_key_secret
OSS_BUCKET=your-bucket-name
```

### 3. 修改 next.config.ts

在 `next.config.ts` 中添加：

```typescript
const baseConfig: NextConfig = {
  // 添加这一行
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_CDN_URL 
    : '',
  // ... 其他配置
};
```

### 4. 构建并上传

```bash
# 一键构建并上传
pnpm run build:prod

# 或分步执行
pnpm build
pnpm run upload:oss
```

### 5. 启动服务

```bash
pm2 restart brainco-website
```

## 📦 可用命令

```bash
# 构建项目
pnpm build

# 构建并自动上传到 OSS
pnpm run build:prod

# 只上传 .next/static 目录
pnpm run upload:oss

# 上传 .next/static 和 public 目录
pnpm run upload:oss:all

# 清理旧版本（保留最近 3 个）
pnpm run clean:oss

# 预览要删除的文件（不实际删除）
pnpm run clean:oss:dry
```

## ✅ 验证部署

访问网站后，按 F12 打开开发者工具，查看 Network 面板：

- JS 文件应该从 CDN 加载：`https://your-cdn-domain.com/_next/static/...`
- CSS 文件应该从 CDN 加载
- HTML 仍从服务器加载

## 📚 详细文档

完整配置和故障排查请查看：

- [OSS 静态资源部署详细指南](./docs/OSS_STATIC_DEPLOYMENT.md)
- [完整部署文档](../../docs/完整部署文档.md)

## 🔧 OSS 配置要求

### Bucket 设置

- **读写权限**：公共读
- **CORS 规则**：允许你的域名访问
- **CDN**：推荐配置 CDN 加速

### AccessKey 权限

需要以下权限：
- `PutObject`
- `PutObjectACL`
- `GetObject`
- `ListObjects`

## ⚠️ 注意事项

1. 首次部署前必须上传静态资源到 OSS
2. 每次构建后都需要重新上传
3. 建议配置 CDN 以提升性能
4. 定期清理旧版本文件以节省成本
5. 确保 OSS CORS 配置正确

## 🆘 常见问题

### 静态资源 404

```bash
# 检查环境变量
cat .env.production | grep CDN

# 重新上传
pnpm run upload:oss
```

### CORS 错误

在 OSS 控制台配置 CORS 规则：
- 来源：`*` 或 `https://www.brainco.com`
- 方法：`GET, HEAD`
- Headers：`*`

### 上传失败

检查 OSS 配置：
```bash
node scripts/upload-to-oss.js
# 查看错误信息
```

---

更新日期：2025-11-27


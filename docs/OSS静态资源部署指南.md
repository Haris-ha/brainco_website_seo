# OSS 静态资源部署指南

本指南详细说明如何将 Next.js 官网的静态资源（JS、CSS、图片等）部署到阿里云 OSS，实现服务器只托管 HTML，静态资源通过 OSS/CDN 分发。

## 📋 目录

- [为什么使用 OSS 托管静态资源](#为什么使用-oss-托管静态资源)
- [工作原理](#工作原理)
- [配置步骤](#配置步骤)
- [上传脚本使用](#上传脚本使用)
- [验证部署](#验证部署)
- [常见问题](#常见问题)

## 为什么使用 OSS 托管静态资源

### 优势

1. **降低服务器负载**
   - 静态资源流量由 OSS 承担
   - 服务器只需处理 HTML 和 API 请求
   - 降低带宽和服务器成本

2. **提升访问速度**
   - 利用 CDN 全球加速
   - 就近访问节点
   - 更好的用户体验

3. **更好的缓存策略**
   - 静态资源长期缓存（1 年）
   - Next.js 自动处理文件指纹（hash）
   - 无需担心缓存更新问题

4. **易于扩展**
   - 无需担心服务器存储空间
   - 高可用性和可靠性
   - 自动备份

## 工作原理

### 访问流程

```
用户访问网站
    ↓
Nginx 反向代理到 Next.js 服务器
    ↓
Next.js 返回 HTML（包含指向 OSS 的资源链接）
    ↓
浏览器解析 HTML
    ↓
浏览器从 OSS/CDN 加载 JS/CSS/图片
    ↓
页面完全渲染
```

### 资源分布

| 资源类型 | 托管位置 | 说明 |
|---------|---------|------|
| HTML | Next.js 服务器 | 动态生成或 SSG |
| JavaScript | OSS/CDN | 所有 JS 文件 |
| CSS | OSS/CDN | 所有样式文件 |
| 图片 | OSS/CDN | public 目录的图片 |
| 字体 | OSS/CDN | Web 字体文件 |
| API 请求 | Next.js 服务器 | API Routes |

## 配置步骤

### 1. 准备 OSS Bucket

#### 1.1 创建 Bucket

1. 登录阿里云 OSS 控制台
2. 创建新的 Bucket
   - 名称：如 `brainco-website-static`
   - 区域：选择离服务器最近的区域
   - 读写权限：**公共读**
   - 其他选项：默认即可

#### 1.2 配置 CORS

在 Bucket 设置中添加 CORS 规则：

```
来源（AllowedOrigin）: *
或指定域名: https://www.brainco.com

允许 Methods: GET, HEAD
允许 Headers: *
暴露 Headers: ETag, Content-Length
缓存时间（秒）: 3600
```

#### 1.3 配置 CDN（推荐）

1. 在阿里云 CDN 控制台创建加速域名
2. 源站设置：
   - 源站类型：OSS 域名
   - 选择对应的 Bucket
3. 缓存规则：
   - `/_next/static/` 路径：缓存 30 天
   - 其他静态资源：缓存 7 天
4. 开启 HTTPS
5. 获取 CDN 域名（如：`cdn.brainco.com`）

### 2. 配置项目

#### 2.1 安装依赖

```bash
pnpm add -D ali-oss dotenv
```

#### 2.2 配置环境变量

复制 `.env.production.example` 为 `.env.production`：

```bash
cp .env.production.example .env.production
nano .env.production
```

填入配置：

```env
# OSS CDN 配置
NEXT_PUBLIC_CDN_URL=https://cdn.brainco.com

# OSS 上传配置
OSS_ACCESS_KEY_ID=your_access_key_id
OSS_ACCESS_KEY_SECRET=your_access_key_secret
OSS_REGION=oss-cn-hangzhou
OSS_BUCKET=brainco-website-static
```

#### 2.3 修改 next.config.ts

```typescript
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const baseConfig: NextConfig = {
  // 配置 CDN 域名
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_CDN_URL 
    : '',
  
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brainco-website-static.oss-cn-hangzhou.aliyuncs.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.brainco.com',
        pathname: '/**',
      },
      // ... 其他域名
    ],
  },
};

let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);
export default configWithPlugins;
```

### 3. 构建和上传

#### 3.1 完整构建流程

```bash
# 1. 构建项目
pnpm build

# 2. 上传静态资源到 OSS
pnpm run upload:oss

# 3. 启动或重启服务
pm2 restart brainco-website
```

#### 3.2 一键构建和上传

```bash
# 构建并自动上传
pnpm run build:prod
```

## 上传脚本使用

### 基本用法

```bash
# 只上传 .next/static 目录（推荐）
node scripts/upload-to-oss.js

# 或使用 npm scripts
pnpm run upload:oss
```

### 上传 public 目录

```bash
# 同时上传 .next/static 和 public 目录
node scripts/upload-to-oss.js --public

# 或使用 npm scripts
pnpm run upload:oss:all
```

### 清理旧版本

```bash
# 清理旧版本，保留最近 3 个构建
pnpm run clean:oss

# 先预览将要删除的文件（不实际删除）
pnpm run clean:oss:dry

# 保留更多版本
node scripts/clear-oss-cache.js --keep=5
```

### 脚本功能

#### upload-to-oss.js

- ✅ 自动上传 `.next/static` 目录
- ✅ 可选上传 `public` 目录
- ✅ 自动设置正确的 Content-Type
- ✅ 设置文件为公共读取
- ✅ 设置缓存策略（1 年）
- ✅ 显示上传进度和统计

#### clear-oss-cache.js

- ✅ 列出所有构建版本
- ✅ 保留最近 N 个版本
- ✅ 删除旧版本文件
- ✅ 支持 dry-run 模式

## 验证部署

### 1. 检查 OSS 文件

访问 OSS 控制台，查看文件是否上传成功：

```
your-bucket/
├── _next/
│   └── static/
│       ├── chunks/
│       ├── css/
│       └── [buildId]/
```

### 2. 检查网站资源

打开浏览器开发者工具（F12），查看 Network 面板：

1. 访问网站：`https://www.brainco.com`
2. 检查 JS 文件的域名：
   - ✅ 应该是：`https://cdn.brainco.com/_next/static/...`
   - ❌ 不应该是：`https://www.brainco.com/_next/static/...`
3. 检查 CSS 文件的域名
4. 检查响应头：
   - `Cache-Control: public, max-age=31536000, immutable`
   - `Access-Control-Allow-Origin: *`

### 3. 使用命令行测试

```bash
# 测试 JS 文件
curl -I https://cdn.brainco.com/_next/static/chunks/main-xxxxx.js

# 应该返回 200 和正确的 Content-Type
HTTP/2 200
content-type: application/javascript
cache-control: public, max-age=31536000, immutable
```

### 4. 性能对比

使用 Chrome DevTools Lighthouse 测试：

- Performance 分数应该提升
- First Contentful Paint (FCP) 应该更快
- Largest Contentful Paint (LCP) 应该更快

## 常见问题

### Q1: 静态资源返回 404

**原因**：
- OSS 上文件不存在
- CDN 域名配置错误
- 环境变量未设置

**解决**：

```bash
# 1. 检查 OSS 文件
# 在 OSS 控制台查看文件是否存在

# 2. 检查环境变量
cat .env.production | grep CDN

# 3. 重新上传
pnpm run upload:oss

# 4. 检查 next.config.ts 中的 assetPrefix
```

### Q2: CORS 错误

**错误信息**：
```
Access to script at 'https://cdn.brainco.com/...' from origin 'https://www.brainco.com' has been blocked by CORS policy
```

**解决**：

1. 在 OSS 控制台配置 CORS
2. 添加允许的源：`https://www.brainco.com` 或 `*`
3. 允许的方法：`GET, HEAD`
4. 允许的 Headers：`*`

### Q3: 文件内容未更新（缓存问题）

**原因**：
- CDN 缓存未刷新
- 浏览器缓存

**解决**：

```bash
# 1. Next.js 自动处理文件指纹
# 每次构建都会生成新的文件名，不会有缓存问题

# 2. 如果使用了自定义文件名，需要刷新 CDN
# 在阿里云 CDN 控制台手动刷新

# 3. 强制刷新浏览器
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (macOS)
```

### Q4: OSS 费用问题

**优化建议**：

1. **启用 CDN**：减少回源请求
2. **设置生命周期规则**：自动删除旧版本
3. **开启 OSS 传输加速**：提升上传速度
4. **监控流量**：设置费用告警

### Q5: 上传失败

**可能原因**：
- AccessKey 权限不足
- Bucket 不存在
- 网络问题

**解决**：

```bash
# 1. 检查 AccessKey 权限
# 需要有 PutObject、PutObjectACL 权限

# 2. 检查 Bucket 名称和区域
echo $OSS_BUCKET
echo $OSS_REGION

# 3. 测试网络连接
curl -I https://$OSS_BUCKET.$OSS_REGION.aliyuncs.com
```

## 部署检查清单

部署前确认：

- [ ] OSS Bucket 已创建并设置为公共读
- [ ] CORS 规则已配置
- [ ] CDN 已配置（推荐）
- [ ] `.env.production` 已正确配置
- [ ] `next.config.ts` 添加了 `assetPrefix`
- [ ] 依赖包已安装（ali-oss, dotenv）
- [ ] 上传脚本有执行权限

部署后验证：

- [ ] 项目构建成功
- [ ] 静态资源上传成功
- [ ] 浏览器可以访问 CDN 资源
- [ ] Network 面板显示资源从 CDN 加载
- [ ] 没有 CORS 错误
- [ ] 页面功能正常
- [ ] 图片加载正常
- [ ] 性能表现良好

## 进阶配置

### 使用不同的 CDN 服务商

如果使用其他 CDN 服务商（如七牛云、腾讯云）：

1. 将 OSS 设为源站
2. 配置 CDN 回源规则
3. 更新 `NEXT_PUBLIC_CDN_URL`

### 多地域部署

如果需要多地域部署：

1. 在不同地域创建 OSS Bucket
2. 使用 CDN 智能路由
3. 根据用户地理位置返回最近的 CDN 节点

### 自动化部署

使用 CI/CD 自动化部署：

```yaml
# GitHub Actions 示例
- name: Build
  run: pnpm build

- name: Upload to OSS
  env:
    OSS_ACCESS_KEY_ID: ${{ secrets.OSS_ACCESS_KEY_ID }}
    OSS_ACCESS_KEY_SECRET: ${{ secrets.OSS_ACCESS_KEY_SECRET }}
  run: pnpm run upload:oss

- name: Deploy to Server
  run: |
    ssh user@server 'cd /var/www/website && pm2 restart brainco-website'
```

## 技术支持

如有问题，请参考：

- [阿里云 OSS 文档](https://help.aliyun.com/product/31815.html)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- 项目主文档：`../docs/完整部署文档.md`

---

**最后更新**: 2025-11-27


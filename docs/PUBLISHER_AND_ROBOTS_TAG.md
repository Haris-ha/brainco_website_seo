# Publisher 和 X-Robots-Tag 配置指南

## 概述

现在网站已经完全支持从 CMS 获取和使用 `publisher` 和 `X-Robots-Tag` 配置。这两个功能可以帮助你更好地控制网站的 SEO 表现。

## ✅ 已实现的功能

### 1. Publisher（发布者）

**在 CMS 中配置：**
- 字段名：`publisher`
- 类型：字符串
- 默认值：`BrainCo`
- 是否本地化：否（全局统一）

**在网站中的使用：**

#### a) Meta 标签
每个页面的 HTML `<head>` 中会自动添加：
```html
<meta name="publisher" content="BrainCo" />
```

#### b) 结构化数据 (Schema.org)
在每个页面的 JSON-LD 结构化数据中自动包含：
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "页面标题",
  "publisher": {
    "@type": "Organization",
    "name": "BrainCo",  // 从 CMS 获取
    "url": "https://www.brainco.cn",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.brainco.cn/logo.webp"
    }
  }
}
```

### 2. X-Robots-Tag（HTTP Header）

**在 CMS 中配置：**
- 字段名：`xRobotsTag`
- 类型：枚举
- 可选值：
  - `index, follow` (默认) - 允许索引和跟踪链接
  - `noindex, nofollow` - 不索引且不跟踪链接
  - `index, nofollow` - 索引但不跟踪链接
  - `noindex, follow` - 不索引但跟踪链接
- 是否本地化：否（全局统一）

**在网站中的使用：**

#### HTTP Response Header
每个页面的 HTTP 响应头中会自动添加：
```
X-Robots-Tag: index, follow
```

这是通过 Next.js middleware 实现的，对搜索引擎爬虫更加友好和权威。

## 🔧 如何在 CMS 中配置

### 步骤 1: 进入 Page SEO 管理

1. 登录 Strapi CMS 后台
2. 进入左侧菜单 `Content Manager`
3. 选择 `Page SEO` 集合

### 步骤 2: 编辑或创建页面 SEO 配置

1. 选择要配置的页面（或创建新页面）
2. 找到以下字段：

#### Publisher 配置
- 字段：`Publisher`
- 输入发布者名称（如：`BrainCo`、`BrainCo Inc.`）
- 留空则使用默认值 `BrainCo`

#### X-Robots-Tag 配置
- 字段：`X Robots Tag`
- 从下拉菜单选择：
  - **index, follow** - 适用于所有正常页面（推荐）
  - **noindex, nofollow** - 适用于隐私页面、测试页面
  - **index, nofollow** - 适用于不希望传递权重的页面
  - **noindex, follow** - 适用于想让爬虫发现链接但不索引的页面

3. 保存并发布

## 📋 使用场景示例

### 场景 1: 正常产品页面
```
Publisher: BrainCo
X-Robots-Tag: index, follow
```
✅ 完全开放给搜索引擎

### 场景 2: 内部测试页面
```
Publisher: BrainCo
X-Robots-Tag: noindex, nofollow
```
🚫 搜索引擎不会索引

### 场景 3: 临时促销页面
```
Publisher: BrainCo
X-Robots-Tag: noindex, follow
```
🔗 允许爬虫跟踪链接但不索引本页面

### 场景 4: 重复内容页面
```
Publisher: BrainCo
X-Robots-Tag: noindex, follow
```
♻️ 避免重复内容惩罚

## 🔍 如何验证配置是否生效

### 验证 Publisher Meta Tag

1. 访问页面（如 `http://localhost:3000/zh-CN`）
2. 右键 → 查看网页源代码
3. 搜索 `publisher`
4. 应该能看到：
```html
<meta name="publisher" content="BrainCo"/>
```

### 验证 Publisher 结构化数据

1. 查看网页源代码
2. 搜索 `application/ld+json`
3. 在 WebPage schema 中应该能看到：
```json
{
  "@type": "WebPage",
  "publisher": {
    "@type": "Organization",
    "name": "BrainCo"
  }
}
```

### 验证 X-Robots-Tag HTTP Header

#### 方法 1: 使用浏览器开发者工具
1. 打开浏览器开发者工具（F12）
2. 切换到 `Network` 标签
3. 刷新页面
4. 点击第一个请求（通常是 HTML 文档）
5. 查看 `Response Headers`
6. 找到 `X-Robots-Tag` 字段

#### 方法 2: 使用 curl 命令
```bash
curl -I http://localhost:3000/zh-CN

# 查找输出中的：
# X-Robots-Tag: index, follow
```

#### 方法 3: 使用在线工具
访问 [HTTP Header Checker](https://httpstatus.io/) 并输入你的页面 URL

## 🎯 最佳实践

### Publisher 设置
- **保持一致性**：全站使用相同的 publisher 名称
- **使用官方名称**：使用公司的正式注册名称
- **不要频繁更改**：稳定的 publisher 信息有助于建立权威性

### X-Robots-Tag 设置
- **默认使用 `index, follow`**：这是最常见和安全的选择
- **仅在必要时限制**：不要过度使用 noindex/nofollow
- **配合 `metaRobots`**：X-Robots-Tag（HTTP header）优先级高于 meta robots 标签
- **测试页面使用 `noindex, nofollow`**：防止测试内容被索引

## 🚨 注意事项

### X-Robots-Tag vs meta robots 标签

两者都能控制搜索引擎行为，但有以下区别：

| 特性 | X-Robots-Tag (HTTP Header) | meta robots (HTML Tag) |
|------|---------------------------|----------------------|
| 优先级 | **更高** | 较低 |
| 适用范围 | 所有文件类型（HTML, PDF, 图片等） | 仅 HTML 页面 |
| 缓存友好 | ✅ 是 | ❌ 否 |
| 实现位置 | 服务器/中间件 | HTML `<head>` |

**推荐做法：**
- 使用 **X-Robots-Tag** 作为主要控制方式（已实现）
- `metaRobots` 字段作为补充（已有）

### 性能考虑

- **缓存机制**：X-Robots-Tag 配置会在 middleware 中缓存 1 小时
- **CMS 更新延迟**：修改 CMS 配置后，可能需要 1 小时才能在所有页面生效
- **强制刷新缓存**：重启开发服务器或重新部署生产环境

## 🔧 技术实现细节

### 相关文件

1. **类型定义**
   - `src/types/seo.ts` - 添加了 `publisher` 和 `xRobotsTag` 类型

2. **数据获取**
   - `src/lib/seo.ts` - 从 CMS 获取并转换 SEO 数据

3. **Metadata 生成**
   - `src/lib/metadata.ts` - 生成页面 metadata，包含 publisher

4. **HTTP Header**
   - `src/middleware.ts` - 在请求处理时添加 X-Robots-Tag header

5. **结构化数据**
   - `src/components/seo/StructuredData.tsx` - 生成包含 publisher 的 JSON-LD

### 缓存策略

```typescript
// middleware.ts
const CACHE_TTL = 3600000; // 1小时
const robotsCache = new Map<string, { value: string; timestamp: number }>();
```

每个页面路径和语言的 X-Robots-Tag 配置会缓存 1 小时，减少对 CMS 的请求次数。

## 📚 相关文档

- [SEO 结构化数据使用指南](../SEO_STRUCTURED_DATA_GUIDE.md)
- [Google X-Robots-Tag 文档](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Schema.org Publisher](https://schema.org/publisher)

## 🎉 总结

现在你的网站已经完全支持：
- ✅ 在页面 meta 标签中显示 publisher
- ✅ 在结构化数据中包含 publisher 信息
- ✅ 通过 HTTP header 设置 X-Robots-Tag
- ✅ 所有配置都可以在 CMS 中轻松管理
- ✅ 支持多语言页面的独立配置
- ✅ 自动缓存优化性能

这些改进将帮助搜索引擎更好地理解和索引你的网站内容！


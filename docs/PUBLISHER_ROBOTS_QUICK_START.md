# Publisher 和 X-Robots-Tag 快速开始指南

本指南将帮助你在 5 分钟内开始使用 Publisher 和 X-Robots-Tag 功能。

## 🚀 5 分钟快速开始

### 步骤 1: 在 CMS 中配置（2分钟）

1. **登录 Strapi CMS**
   - 访问：`http://localhost:1337/admin`

2. **进入 Page SEO 管理**
   - 左侧菜单 → `Content Manager` → `Page SEO`

3. **编辑首页配置**
   - 点击首页（`/`）条目
   - 找到以下字段并填写：

   ```
   Publisher: BrainCo
   X Robots Tag: index, follow
   ```

4. **保存并发布**
   - 点击右上角 `Save` 按钮
   - 点击 `Publish` 按钮

### 步骤 2: 验证配置（2分钟）

1. **运行测试脚本**
   ```bash
   npm run test:seo
   ```

2. **查看测试结果**
   - ✅ 绿色勾号 = 配置成功
   - ❌ 红色叉号 = 需要修复

### 步骤 3: 在浏览器中查看（1分钟）

1. **查看 X-Robots-Tag**
   - 打开 `http://localhost:3000/zh-CN`
   - 按 F12 打开开发者工具
   - 切换到 `Network` 标签
   - 刷新页面
   - 点击第一个请求
   - 在 Response Headers 中查找 `X-Robots-Tag`

2. **查看 Publisher Meta Tag**
   - 右键点击页面 → 查看网页源代码
   - 按 `Ctrl+F` 搜索 `publisher`
   - 应该能看到：`<meta name="publisher" content="BrainCo"/>`

## 🎯 常用配置场景

### 场景 1: 正常的公开页面（首页、产品页等）

```
Publisher: BrainCo
X Robots Tag: index, follow
```
✅ 搜索引擎会索引页面并跟踪所有链接

### 场景 2: 测试页面或内部页面

```
Publisher: BrainCo
X Robots Tag: noindex, nofollow
```
🚫 搜索引擎不会索引页面和跟踪链接

### 场景 3: 临时页面（促销、活动页）

```
Publisher: BrainCo
X Robots Tag: noindex, follow
```
🔗 搜索引擎可以跟踪链接但不会索引此页面

## 📝 为新页面添加 SEO 支持

如果你的页面还没有使用动态 SEO，按照以下步骤添加：

### 1. 导入必要的模块

```typescript
import { generateSEOMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
```

### 2. 添加 generateMetadata 函数

```typescript
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  return generateSEOMetadata(
    { locale },
    '/your-page-path',  // 改成你的页面路径
  );
}
```

### 3. 在页面组件中添加结构化数据

```typescript
export default async function YourPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据
  const seoData = await getPageSEOForStructuredData('/your-page-path', locale);

  return (
    <>
      {/* 添加结构化数据 */}
      <StructuredData seoData={seoData} />
      <YourPageClient />
    </>
  );
}
```

### 4. 在 CMS 中创建页面配置

1. 在 Strapi 中创建新的 Page SEO 条目
2. 填写必要的字段（pagePath、metaTitle、metaDescription 等）
3. 设置 Publisher 和 X Robots Tag
4. 保存并发布

## 🔍 快速检查命令

```bash
# 检查 X-Robots-Tag
curl -I http://localhost:3000/zh-CN | grep -i "x-robots-tag"

# 检查 Publisher meta tag
curl -s http://localhost:3000/zh-CN | grep -o '<meta name="publisher"[^>]*>'

# 完整测试
npm run test:seo
```

## ⚙️ 配置项说明

### Publisher（发布者）
- **类型**: 字符串
- **默认值**: `BrainCo`
- **用途**: 标识内容发布者
- **显示位置**: 
  - HTML `<meta name="publisher">` 标签
  - JSON-LD 结构化数据

### X-Robots-Tag（爬虫控制）
- **类型**: 枚举
- **可选值**:
  - `index, follow` - 允许索引和跟踪（默认）
  - `noindex, nofollow` - 禁止索引和跟踪
  - `index, nofollow` - 允许索引但禁止跟踪
  - `noindex, follow` - 禁止索引但允许跟踪
- **用途**: 控制搜索引擎爬虫行为
- **显示位置**: HTTP Response Header

## 🚨 注意事项

1. **缓存时间**: X-Robots-Tag 配置有 1 小时缓存
   - 修改后需要等待 1 小时或重启服务器

2. **发布状态**: 确保在 CMS 中点击"Publish"按钮
   - 草稿状态的配置不会生效

3. **优先级**: X-Robots-Tag (HTTP Header) 优先级高于 meta robots 标签
   - 推荐使用 X-Robots-Tag

4. **多语言**: 每个语言的页面共享相同的 Publisher 和 X-Robots-Tag
   - 这些字段不支持本地化

## 📚 更多资源

- [完整配置指南](./PUBLISHER_AND_ROBOTS_TAG.md) - 详细的功能说明和配置方法
- [测试指南](./TESTING_PUBLISHER_AND_ROBOTS.md) - 详细的测试步骤和验证方法
- [SEO 结构化数据指南](../SEO_STRUCTURED_DATA_GUIDE.md) - 结构化数据的完整使用指南

## 💡 提示

- **默认安全**: 如果不配置，默认使用 `index, follow`，这对大多数页面来说是合适的
- **测试环境**: 建议在测试环境使用 `noindex, nofollow` 避免搜索引擎索引测试内容
- **定期检查**: 使用 `npm run test:seo` 定期检查配置是否正确

## ❓ 常见问题

### Q: 修改配置后没有立即生效？
A: 这是正常的，因为有 1 小时的缓存。你可以重启开发服务器强制刷新。

### Q: 所有页面都需要配置吗？
A: 不需要。未配置的页面会使用默认值（Publisher: "BrainCo", X-Robots-Tag: "index, follow"）

### Q: X-Robots-Tag 和 meta robots 有什么区别？
A: X-Robots-Tag 是 HTTP header，优先级更高，适用于所有文件类型。推荐使用 X-Robots-Tag。

### Q: 如何验证搜索引擎看到的是正确的配置？
A: 使用 Google Search Console 的 URL 检查工具，或者使用我们提供的测试脚本 `npm run test:seo`。

---

🎉 恭喜！你现在已经掌握了 Publisher 和 X-Robots-Tag 的基本使用。开始优化你的网站 SEO 吧！


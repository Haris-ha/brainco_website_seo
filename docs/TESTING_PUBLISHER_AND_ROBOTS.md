# 测试 Publisher 和 X-Robots-Tag 功能

本文档将指导你如何测试新添加的 Publisher 和 X-Robots-Tag 功能是否正常工作。

## 前置条件

1. ✅ Strapi CMS 后台正在运行
2. ✅ 已在 CMS 中配置了至少一个页面的 SEO 数据
3. ✅ Next.js 开发服务器正在运行

## 测试步骤

### 1. 在 CMS 中配置测试数据

1. 访问 Strapi 后台（通常是 `http://localhost:1337/admin`）
2. 进入 `Content Manager` → `Page SEO`
3. 编辑首页（`/`）或任何其他页面
4. 设置以下字段：
   - **Publisher**: `BrainCo Test`
   - **X Robots Tag**: `index, follow`
5. 保存并发布

### 2. 测试 Publisher Meta Tag

#### 方法 A: 查看页面源代码

1. 访问测试页面：`http://localhost:3000/zh-CN`
2. 右键点击页面 → 选择"查看网页源代码"
3. 按 `Ctrl+F` (或 `Cmd+F`) 搜索 `publisher`
4. 你应该能看到：

```html
<meta name="publisher" content="BrainCo Test"/>
```

#### 方法 B: 使用浏览器开发者工具

1. 访问测试页面
2. 打开开发者工具（F12）
3. 切换到 `Elements` 或 `Inspector` 标签
4. 在 `<head>` 部分查找 `<meta name="publisher">`

### 3. 测试 Publisher 结构化数据

1. 查看页面源代码
2. 搜索 `application/ld+json`
3. 找到 WebPage schema（通常是第二个 `<script type="application/ld+json">`）
4. 验证其中包含：

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "页面标题",
  "publisher": {
    "@type": "Organization",
    "name": "BrainCo Test",  // 应该显示你在 CMS 中配置的值
    "url": "https://www.brainco.cn",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.brainco.cn/logo.webp"
    }
  }
}
```

### 4. 测试 X-Robots-Tag HTTP Header

#### 方法 A: 使用浏览器开发者工具（推荐）

1. 访问测试页面：`http://localhost:3000/zh-CN`
2. 打开开发者工具（F12）
3. 切换到 `Network` 标签
4. 刷新页面（F5 或 Cmd+R）
5. 点击列表中的第一个请求（通常是页面 HTML）
6. 在右侧查看 `Response Headers`
7. 找到 `X-Robots-Tag` 字段
8. 验证其值为：`index, follow`

#### 方法 B: 使用 curl 命令

打开终端并运行：

```bash
# 测试首页
curl -I http://localhost:3000/zh-CN

# 输出中应该包含：
# X-Robots-Tag: index, follow
```

或者使用 grep 过滤：

```bash
curl -I http://localhost:3000/zh-CN | grep -i "x-robots-tag"
```

#### 方法 C: 使用在线工具

1. 如果你的网站已部署到生产环境
2. 访问 [HTTP Header Checker](https://httpstatus.io/)
3. 输入你的页面 URL
4. 点击 "Check Status"
5. 在响应头中查找 `X-Robots-Tag`

### 5. 测试不同的 X-Robots-Tag 值

在 CMS 中修改 X-Robots-Tag 设置并测试：

#### 测试 "noindex, nofollow"

1. 在 CMS 中将 X-Robots-Tag 改为 `noindex, nofollow`
2. 保存并发布
3. 等待 1-2 分钟（缓存刷新）或重启开发服务器
4. 再次检查 HTTP header：

```bash
curl -I http://localhost:3000/zh-CN | grep -i "x-robots-tag"
# 应该显示: X-Robots-Tag: noindex, nofollow
```

#### 测试 "index, nofollow"

1. 在 CMS 中将 X-Robots-Tag 改为 `index, nofollow`
2. 保存并发布
3. 等待 1-2 分钟或重启开发服务器
4. 验证 header 已更新

### 6. 测试多语言支持

测试不同语言的页面是否正确获取配置：

```bash
# 测试中文页面
curl -I http://localhost:3000/zh-CN | grep -i "x-robots-tag"

# 测试英文页面
curl -I http://localhost:3000/en-US | grep -i "x-robots-tag"

# 测试繁体中文页面
curl -I http://localhost:3000/zh-TW | grep -i "x-robots-tag"
```

### 7. 测试缓存机制

验证缓存是否正常工作：

1. 访问一个页面并记录 X-Robots-Tag 的值
2. 在 CMS 中修改该页面的 X-Robots-Tag
3. 立即刷新页面 - 应该还是旧值（因为缓存）
4. 等待 1 小时或重启服务器
5. 再次访问 - 应该显示新值

快速测试缓存（跳过等待）：

```bash
# 1. 记录当前值
curl -I http://localhost:3000/zh-CN | grep -i "x-robots-tag"

# 2. 在 CMS 中修改配置

# 3. 重启开发服务器
# 按 Ctrl+C 停止，然后运行：
npm run dev

# 4. 再次检查 - 应该显示新值
curl -I http://localhost:3000/zh-CN | grep -i "x-robots-tag"
```

## 常见问题排查

### 问题 1: 看不到 publisher meta tag

**可能原因：**
- CMS 中没有配置 publisher 字段
- CMS API 不可访问
- 页面没有使用 `generateSEOMetadata` 函数

**解决方法：**
1. 确认 CMS 中已配置 publisher
2. 检查控制台是否有 CMS API 错误
3. 查看页面代码确认使用了正确的 SEO 函数

### 问题 2: X-Robots-Tag header 不存在

**可能原因：**
- Middleware 没有正常运行
- CMS 连接失败（会使用默认值 "index, follow"）
- 缓存问题

**解决方法：**
1. 检查 `src/middleware.ts` 是否有语法错误
2. 查看服务器控制台输出
3. 重启开发服务器清除缓存

### 问题 3: 修改 CMS 配置后不生效

**可能原因：**
- 缓存还没过期（默认 1 小时）
- CMS 更改没有发布

**解决方法：**
1. 确认在 CMS 中点击了"发布"按钮
2. 重启开发服务器强制刷新缓存
3. 清除浏览器缓存

### 问题 4: 结构化数据中 publisher 是默认值

**可能原因：**
- CMS 中 publisher 字段为空
- CMS API 返回的数据不完整

**解决方法：**
1. 检查 CMS 中确实填写了 publisher 字段
2. 在浏览器访问 CMS API 端点验证数据：
   ```
   http://localhost:1337/api/page-seos?filters[pagePath][$eq]=/&locale=zh-Hans
   ```
3. 确认返回的 JSON 中包含 publisher 字段

## 验证清单

使用以下清单确保所有功能正常：

- [ ] ✅ Publisher meta tag 在 `<head>` 中显示
- [ ] ✅ Publisher 在 WebPage schema 的结构化数据中显示
- [ ] ✅ X-Robots-Tag HTTP header 在响应中存在
- [ ] ✅ 可以在 CMS 中修改 X-Robots-Tag 值
- [ ] ✅ 修改后的值在重启服务器后生效
- [ ] ✅ 所有语言的页面都能正确获取配置
- [ ] ✅ 未配置的页面使用默认值
- [ ] ✅ 浏览器开发者工具中可以看到这些信息

## 生产环境测试

部署到生产环境后，进行以下测试：

### 1. 使用 Google Search Console

1. 登录 [Google Search Console](https://search.google.com/search-console)
2. 使用 "URL 检查" 工具
3. 输入你的页面 URL
4. 查看"覆盖率"部分的 HTTP header 信息

### 2. 使用 Schema Markup Validator

1. 访问 [Schema.org Validator](https://validator.schema.org/)
2. 输入你的页面 URL
3. 验证 WebPage schema 中包含正确的 publisher 信息

### 3. 使用 Rich Results Test

1. 访问 [Google Rich Results Test](https://search.google.com/test/rich-results)
2. 输入你的页面 URL
3. 检查结构化数据是否被正确识别

## 自动化测试脚本

创建一个简单的测试脚本 `test-seo.sh`：

```bash
#!/bin/bash

echo "🧪 测试 Publisher 和 X-Robots-Tag 功能"
echo "=========================================="
echo ""

# 测试 X-Robots-Tag
echo "📋 测试 X-Robots-Tag HTTP Header:"
ROBOTS_TAG=$(curl -s -I http://localhost:3000/zh-CN | grep -i "x-robots-tag" | cut -d' ' -f2-)
if [ -n "$ROBOTS_TAG" ]; then
    echo "✅ X-Robots-Tag: $ROBOTS_TAG"
else
    echo "❌ 未找到 X-Robots-Tag header"
fi
echo ""

# 测试 Publisher meta tag
echo "📋 测试 Publisher Meta Tag:"
PUBLISHER=$(curl -s http://localhost:3000/zh-CN | grep -o '<meta name="publisher" content="[^"]*"' | cut -d'"' -f4)
if [ -n "$PUBLISHER" ]; then
    echo "✅ Publisher: $PUBLISHER"
else
    echo "❌ 未找到 publisher meta tag"
fi
echo ""

# 测试结构化数据
echo "📋 测试结构化数据中的 Publisher:"
STRUCTURED=$(curl -s http://localhost:3000/zh-CN | grep -A 10 '"@type":"WebPage"' | grep '"name"' | head -n 2 | tail -n 1)
if [ -n "$STRUCTURED" ]; then
    echo "✅ 找到 WebPage schema"
else
    echo "❌ 未找到 WebPage schema"
fi
echo ""

echo "=========================================="
echo "✅ 测试完成"
```

使用方法：

```bash
chmod +x test-seo.sh
./test-seo.sh
```

## 总结

完成以上所有测试后，你应该能够确认：

1. ✅ **Publisher** 正确显示在 meta 标签和结构化数据中
2. ✅ **X-Robots-Tag** 通过 HTTP header 正确设置
3. ✅ 两者都可以在 CMS 中动态配置
4. ✅ 缓存机制正常工作
5. ✅ 多语言支持正常

如果所有测试都通过，恭喜！你的 SEO 配置已经完全就绪。🎉


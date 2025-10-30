# Changelog

所有重要的项目变更都将记录在此文件中。

## [未发布] - 2025-10-30

### ✨ 新增功能

#### Publisher 和 X-Robots-Tag 支持
- **Publisher Meta Tag**: 在页面 HTML `<head>` 中添加 `<meta name="publisher">` 标签
- **Publisher 结构化数据**: 在 WebPage Schema 的 JSON-LD 中包含 publisher 信息
- **X-Robots-Tag HTTP Header**: 通过 HTTP Response Header 控制搜索引擎爬虫行为
- **CMS 集成**: 完全通过 Strapi CMS 后台配置，无需修改代码
- **内存缓存**: X-Robots-Tag 配置缓存 1 小时，优化性能
- **多语言支持**: 支持所有三种语言（zh-CN, en-US, zh-TW）
- **降级处理**: CMS 连接失败时使用安全的默认值

### 🔧 技术改进

#### 类型定义
- 在 `PageSEO` 类型中添加 `publisher?: string` 字段
- 在 `PageSEO` 类型中添加 `xRobotsTag?` 枚举字段
- 在 `SEOMetadata` 类型中添加相应字段

#### 核心功能
- 更新 `src/lib/seo.ts` 处理新字段
- 更新 `src/lib/metadata.ts` 在 metadata 中包含 publisher
- 更新 `src/components/seo/StructuredData.tsx` 使用 CMS publisher
- 更新 `src/middleware.ts` 添加 X-Robots-Tag header

### 📚 文档

#### 新增文档
- `docs/PUBLISHER_AND_ROBOTS_TAG.md` - 完整配置指南
- `docs/PUBLISHER_ROBOTS_QUICK_START.md` - 5分钟快速开始
- `docs/TESTING_PUBLISHER_AND_ROBOTS.md` - 详细测试指南
- `PUBLISHER_ROBOTS_IMPLEMENTATION_SUMMARY.md` - 实施总结

#### 更新文档
- `README.md` - 添加新功能说明和测试命令
- `SEO_STRUCTURED_DATA_GUIDE.md` - 更新功能列表

### 🧪 测试工具

- **测试脚本**: `scripts/test-seo-features.sh`
  - 自动检查 X-Robots-Tag HTTP header
  - 自动检查 Publisher meta tag
  - 验证结构化数据
  - 测试多语言支持
  - 彩色输出和详细报告
- **NPM 命令**: `npm run test:seo`

### 📦 依赖

无新增依赖，使用现有技术栈。

### 🔄 向后兼容

- ✅ 完全向后兼容
- ✅ 现有页面自动获得新功能
- ✅ 无需修改现有代码
- ✅ 默认值确保安全行为

### 🎯 影响范围

#### 自动生效的页面
所有已使用动态 SEO 的页面：
- 首页 (`/`)
- About 页面 (`/about`)
- 以及其他使用 `generateSEOMetadata` 和 `StructuredData` 的页面

#### 性能影响
- Middleware: 缓存命中 ~0ms，未命中 ~50-100ms
- 页面体积: 每页约 +200 字节
- 整体影响: 可忽略不计

### 🔐 安全性

- 使用 TypeScript 枚举限制 X-Robots-Tag 值
- 降级到安全的默认值（index, follow）
- 缓存隔离，防止数据泄漏

---

## [1.0.0] - 2025-10-XX

### 初始版本
- Next.js 15.5 + React 19
- 多语言支持（zh-CN, en-US, zh-TW）
- 动态 SEO 配置
- Strapi CMS 集成
- Tailwind CSS 4
- TypeScript 完整支持


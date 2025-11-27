# Schema 数据页面实施总结

## 概述

所有18个主要页面已全部集成动态Schema数据功能。Schema数据现在完全从CMS获取，可以通过CMS后台动态修改，无需修改代码。

## 实施方式

每个页面都添加了以下功能：

1. **动态获取SEO数据**
   ```typescript
   const seoData = await getPageSEOForStructuredData('/page-path', locale);
   ```

2. **渲染结构化数据组件**
   ```tsx
   <StructuredData seoData={seoData} />
   ```

3. **从CMS获取Schema**
   - Schema数据存储在CMS的`structuredData` JSON字段中
   - 支持多语言（zh-Hans, en, zh-Hant）
   - 可以在CMS后台直接编辑

## 已更新的18个主要页面

### 1. 首页及核心页面（5个）✅
- `/` - 首页（Home）
- `/about` - 关于我们
- `/company` - 公司介绍
- `/contact` - 联系我们
- `/technology` - 技术中心

### 2. 产品页面（9个）✅

#### 智能仿生手和脑机接口设备
- `/products` - 产品中心（列表页）
- `/products/brain-robotics` - BrainRobotics 智能仿生手
- `/products/mobius` - Mobius 专业级脑机接口设备
- `/products/revo1` - Revo1 脑机接口设备
- `/products/revo2` - Revo2 脑机接口设备

#### 健康管理产品
- `/health/easleep` - EASleep 智能睡眠改善系统
- `/health/focus-zen` - FocusZen 正念舒压系统
- `/health/focus-xin` - FocusXin 专注力训练系统
- `/health/oxyzen` - OxyZen 冥想放松系统
- `/health/starkids` - StarKids 儿童专注力训练

### 3. 教育产品（1个）✅
- `/education/brain-ai` - BrainAI 智能教育解决方案

### 4. 其他页面（3个）✅
- `/news` - 新闻中心
- `/recruit` - 人才招聘
- `/recruit/jobs` - 招聘职位

## 技术架构

### 数据流程
```
CMS (Strapi) 
  ↓
structuredData JSON字段
  ↓
getPageSEOForStructuredData()
  ↓
StructuredData组件
  ↓
页面HTML中的JSON-LD
```

### 组件结构

#### StructuredData 组件
位置: `/src/components/seo/StructuredData.tsx`

功能：
- 从CMS获取的自定义Schema（`seoData.structuredData`）
- 自动生成WebPage基础信息
- 组合多个Schema并渲染为JSON-LD

```typescript
export default function StructuredData({ seoData }: StructuredDataProps) {
  if (!seoData) return null;

  const schemas = [];

  // 1. 从CMS获取的结构化数据
  if (seoData.structuredData) {
    schemas.push(seoData.structuredData);
  }

  // 2. 自动生成网页基本信息
  schemas.push(generateWebPageSchema(seoData));

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-${index}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
```

### 数据获取函数

位置: `/src/lib/seo.ts`

```typescript
export async function getPageSEOForStructuredData(
  pagePath: string, 
  locale: string
): Promise<PageSEO | null>
```

## CMS配置

### structuredData 字段
- **类型**: JSON
- **国际化**: 已启用（i18n）
- **必填**: 否
- **位置**: Page SEO 内容类型

### Schema数据导入

已提供完整的导入脚本和数据：

1. **合并脚本**: `scripts/merge-seo-schema.js`
   - 合并SEO元数据和Schema数据
   - 自动生成繁体中文翻译

2. **导入脚本**: `scripts/import-seo-schema-data.js`
   - 批量导入所有页面的SEO和Schema数据
   - 支持三种语言（zh-Hans, en, zh-Hant）

3. **数据文件**: `scripts/seo-schema-data.json`
   - 包含所有18个页面的完整数据
   - 每个页面包含三种语言版本

## Schema数据类型

每个页面根据其类型配置了相应的Schema.org结构化数据：

### 产品页面 (Product Schema)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "产品名称",
  "description": "产品描述",
  "brand": {
    "@type": "Brand",
    "name": "BrainCo"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "BrainCo",
    "url": "https://www.brainco.cn"
  }
}
```

### 组织页面 (Organization Schema)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrainCo",
  "legalName": "强脑科技",
  "url": "https://www.brainco.cn",
  "foundingDate": "2015"
}
```

### 普通页面 (WebPage Schema)
自动生成，包含页面基本信息。

## 如何在CMS中编辑Schema数据

1. **登录Strapi CMS**
2. **进入 Content Manager > Page SEO**
3. **选择要编辑的页面和语言**
4. **找到 "Structured Data" 字段**
5. **编辑JSON格式的Schema数据**
6. **保存**

### 编辑示例

为产品页面添加价格信息：
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BrainRobotics智能仿生手",
  "description": "基于脑机接口技术的智能仿生手，为失去手部功能的人群提供更自然的交互方式",
  "brand": {
    "@type": "Brand",
    "name": "BrainCo"
  },
  "offers": {
    "@type": "Offer",
    "price": "99999",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  }
}
```

## 验证Schema数据

### 在线工具
1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - 测试Schema是否被Google正确识别

2. **Schema.org Validator**
   - https://validator.schema.org/
   - 验证Schema语法是否正确

### 检查步骤
1. 访问页面
2. 右键查看源代码
3. 搜索 `application/ld+json`
4. 复制JSON内容到验证工具

## 最佳实践

### 1. Schema数据更新
- ✅ 在CMS中编辑，无需修改代码
- ✅ 更新后立即生效（清除缓存后）
- ✅ 支持多语言独立配置

### 2. 数据质量
- ✅ 使用完整的Schema.org标准
- ✅ 提供准确的产品/组织信息
- ✅ 保持数据与页面内容一致

### 3. SEO优化
- ✅ 每个页面类型使用合适的Schema类型
- ✅ 包含关键业务信息（品牌、产品特点等）
- ✅ 定期验证Schema有效性

## 文档参考

- [Schema数据配置说明](./SCHEMA_DATA_CONFIGURATION.md)
- [Schema导入指南](./SCHEMA_IMPORT_GUIDE.md)
- [Schema SEO实施总结](../docs/SCHEMA_SEO_IMPLEMENTATION_SUMMARY.md)
- [SEO结构化数据指南](../SEO_STRUCTURED_DATA_GUIDE.md)

## 后续维护

### 添加新页面时
1. 在CMS中创建Page SEO条目
2. 填写基本SEO信息（title, description等）
3. 在`structuredData`字段中添加JSON-LD数据
4. 在页面组件中添加`StructuredData`组件

### 更新现有Schema
1. 登录CMS
2. 找到对应的Page SEO条目
3. 编辑`structuredData`字段
4. 保存即可

## 完成状态

- ✅ 18个主要页面全部完成
- ✅ 三种语言全部支持（zh-Hans, en, zh-Hant）
- ✅ CMS动态管理功能已实现
- ✅ 批量导入脚本已提供
- ✅ 完整文档已编写

---

**更新时间**: 2025-10-30  
**状态**: 已完成  
**维护者**: BrainCo开发团队



# Schema 数据验证清单

## 快速验证脚本

您可以运行以下脚本来验证所有页面的Schema数据：

```bash
cd /Users/harris/Desktop/BrainCo/brainco_website_cms/website/brainco_website_seo

# 测试所有页面的Schema
node scripts/check-seo-pages.mjs
```

## 手动验证清单

### 第一步：验证CMS中的数据

登录CMS后台，检查以下页面是否都有`structuredData`字段的数据：

#### 核心页面（5个）
- [ ] `/` - 首页
- [ ] `/about` - 关于我们
- [ ] `/company` - 公司介绍
- [ ] `/contact` - 联系我们
- [ ] `/technology` - 技术中心

#### 产品页面（9个）
- [ ] `/products` - 产品中心
- [ ] `/products/brain-robotics` - BrainRobotics
- [ ] `/products/mobius` - Mobius
- [ ] `/products/revo1` - Revo1
- [ ] `/products/revo2` - Revo2
- [ ] `/health/easleep` - EASleep
- [ ] `/health/focus-zen` - FocusZen
- [ ] `/health/focus-xin` - FocusXin
- [ ] `/health/oxyzen` - OxyZen
- [ ] `/health/starkids` - StarKids

#### 教育产品（1个）
- [ ] `/education/brain-ai` - BrainAI

#### 其他页面（3个）
- [ ] `/news` - 新闻中心
- [ ] `/recruit` - 人才招聘
- [ ] `/recruit/jobs` - 招聘职位

### 第二步：验证前端页面

启动开发服务器：
```bash
cd /Users/harris/Desktop/BrainCo/brainco_website_cms/website/brainco_website_seo
npm run dev
```

访问每个页面并检查：

#### 检查方法1：查看源代码
1. 访问页面
2. 右键 → 查看网页源代码
3. 搜索 `application/ld+json`
4. 确认有Schema数据输出

#### 检查方法2：使用浏览器开发者工具
1. F12 打开开发者工具
2. 切换到 Elements/元素 标签
3. 搜索 `script[type="application/ld+json"]`
4. 确认有多个Schema脚本标签

#### 检查方法3：使用Google Rich Results Test
1. 访问 https://search.google.com/test/rich-results
2. 输入页面URL或粘贴HTML代码
3. 检查是否有错误或警告

### 第三步：验证多语言支持

每个页面都需要验证三种语言：

#### 简体中文 (zh-Hans)
- [ ] 访问 `http://localhost:3000/zh-Hans/[page-path]`
- [ ] 检查Schema中的中文内容是否正确

#### 英文 (en)
- [ ] 访问 `http://localhost:3000/en/[page-path]`
- [ ] 检查Schema中的英文内容是否正确

#### 繁体中文 (zh-Hant)
- [ ] 访问 `http://localhost:3000/zh-Hant/[page-path]`
- [ ] 检查Schema中的繁体中文内容是否正确

## 常见验证点

### 1. WebPage Schema（所有页面都应该有）
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "页面标题",
  "description": "页面描述",
  "url": "页面URL",
  "inLanguage": "zh-CN",
  "publisher": {
    "@type": "Organization",
    "name": "BrainCo",
    "url": "https://www.brainco.cn",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.brainco.cn/logo.webp"
    }
  }
}
```

### 2. Product Schema（产品页面应该有）
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
    "name": "BrainCo"
  }
}
```

### 3. Organization Schema（组织/公司页面应该有）
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrainCo",
  "legalName": "强脑科技",
  "url": "https://www.brainco.cn"
}
```

## 验证工具

### 在线工具
1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - 用途: 测试Google是否能正确解析Schema

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - 用途: 验证Schema语法

3. **JSON-LD Playground**
   - URL: https://json-ld.org/playground/
   - 用途: 调试和格式化JSON-LD

### 浏览器扩展
- **Schema.org Extractor** (Chrome)
- **Rich Results Test** (Chrome)
- **Structured Data Testing Tool** (Chrome)

## 问题排查

### 问题1: 页面没有显示Schema数据

**可能原因**:
- CMS中该页面没有配置`structuredData`
- 页面组件中没有添加`<StructuredData>`组件
- API请求失败

**解决方法**:
1. 检查CMS中是否有数据
2. 检查浏览器控制台是否有错误
3. 检查网络请求是否成功

### 问题2: Schema格式错误

**可能原因**:
- JSON格式不正确
- Schema类型使用错误
- 必填字段缺失

**解决方法**:
1. 使用JSON验证工具检查格式
2. 参考Schema.org文档
3. 使用在线验证工具检查

### 问题3: 多语言Schema内容不正确

**可能原因**:
- CMS中该语言版本未配置
- 语言切换逻辑错误

**解决方法**:
1. 检查CMS中三种语言的配置
2. 重新运行导入脚本
3. 手动在CMS中补充缺失的语言版本

## 性能检查

### 检查点
- [ ] Schema数据不会影响页面加载速度
- [ ] Schema脚本使用`strategy="beforeInteractive"`
- [ ] 没有重复的Schema数据
- [ ] JSON-LD格式正确，无多余空白

### 优化建议
1. 确保Schema数据精简，只包含必要信息
2. 避免在Schema中包含大量图片或大文件
3. 使用CDN加速资源加载

## 验证报告模板

完成验证后，可以填写以下报告：

```
验证日期: ____/____/____
验证人: __________

### 页面验证结果
- 核心页面: __ / 5 ✅
- 产品页面: __ / 9 ✅
- 教育页面: __ / 1 ✅
- 其他页面: __ / 3 ✅

总计: __ / 18 ✅

### 语言验证结果
- 简体中文: __ / 18 ✅
- 英文: __ / 18 ✅
- 繁体中文: __ / 18 ✅

### 发现的问题
1. 
2. 
3. 

### 修复建议
1. 
2. 
3. 
```

## 自动化测试建议

可以创建自动化测试脚本来定期验证Schema数据：

```javascript
// test-schema.js
const pages = [
  '/',
  '/about',
  '/company',
  '/contact',
  '/technology',
  '/products',
  '/products/brain-robotics',
  // ... 更多页面
];

const locales = ['zh-Hans', 'en', 'zh-Hant'];

async function testSchema() {
  for (const locale of locales) {
    for (const page of pages) {
      const url = `http://localhost:3000/${locale}${page}`;
      // 获取页面内容
      // 检查是否包含 application/ld+json
      // 验证JSON格式
      // 验证Schema类型
    }
  }
}
```

---

**建议验证频率**:
- 初次部署: 全面验证
- 日常维护: 每周抽查
- 更新后: 立即验证
- 上线前: 完整验证

**负责团队**: SEO团队 & 开发团队



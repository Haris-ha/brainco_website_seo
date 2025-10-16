# BrainCo 官网项目配置指南

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 环境变量配置

在项目根目录创建 `.env.local` 文件：

```bash
# 应用 URL（可选）
NEXT_PUBLIC_APP_URL=https://www.brainco.cn

# Crowdin Token（用于翻译管理）
CROWDIN_PERSONAL_TOKEN=your_crowdin_token_here
```

### 3. 更新 Crowdin 配置

编辑 `crowdin.yml` 文件，填入您的项目 ID：

```yaml
project_id: "your_crowdin_project_id"
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 多语言配置

本项目支持三种语言：
- 简体中文 (zh) - 默认
- 英文 (en)
- 繁体中文 (zh-TW) - 港澳台

### 访问不同语言版本

- 简体中文：`http://localhost:3000` 或 `http://localhost:3000/zh`
- 英文：`http://localhost:3000/en`
- 繁体中文：`http://localhost:3000/zh-TW`

### Crowdin 设置步骤

1. **注册 Crowdin**
   - 访问 https://crowdin.com/
   - 注册免费账号（开源项目免费）

2. **创建项目**
   - 项目名称：BrainCo Website
   - 源语言：Chinese Simplified
   - 目标语言：English, Chinese Traditional (Taiwan)

3. **获取凭证**
   - 项目 ID：Settings → General → Project ID
   - Access Token：账户设置 → API → Personal Access Tokens

4. **首次上传**
   ```bash
   npm run crowdin:upload
   ```

详细说明请查看 [CROWDIN_GUIDE.md](./CROWDIN_GUIDE.md)

## 开发流程

### 添加新内容

1. 编辑 `src/locales/zh.json` 添加中文内容
2. 上传到 Crowdin：`npm run crowdin:upload`
3. 在 Crowdin 完成翻译
4. 下载翻译：`npm run crowdin:download`

### 创建新页面

1. 在 `src/app/[locale]/(marketing)/` 下创建新文件夹
2. 添加 `page.tsx` 文件
3. 在语言文件中添加翻译键
4. 在导航中添加链接

示例：
```tsx
// src/app/[locale]/(marketing)/technology/page.tsx
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type TechnologyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: TechnologyPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Technology',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function TechnologyPage(props: TechnologyPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Technology',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1>{t('title')}</h1>
    </div>
  );
}
```

## 常用命令

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器

# 代码质量
npm run lint         # 检查代码
npm run lint:fix     # 自动修复
npm run check:types  # TypeScript 类型检查

# 国际化
npm run check:i18n        # 检查翻译完整性
npm run crowdin:upload    # 上传源文件
npm run crowdin:download  # 下载翻译
npm run crowdin:sync      # 完整同步

# 其他
npm run clean        # 清理构建文件
npm run build-stats  # 分析包体积
```

## 项目结构说明

```
src/
├── app/
│   ├── [locale]/              # 国际化路由
│   │   ├── (marketing)/       # 营销页面组
│   │   │   ├── layout.tsx     # 布局（导航+页脚）
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── products/      # 产品
│   │   │   ├── company/       # 公司
│   │   │   ├── news/          # 新闻
│   │   │   └── about/         # 关于
│   │   └── layout.tsx         # 根布局
│   ├── robots.ts              # SEO: robots.txt
│   └── sitemap.ts             # SEO: sitemap.xml
│
├── components/                # 共享组件
│   ├── Navigation.tsx         # 导航栏
│   └── LocaleSwitcher.tsx     # 语言切换器
│
├── libs/                      # 核心库
│   ├── Env.ts                 # 环境变量
│   ├── I18n.ts                # 国际化配置
│   └── I18nRouting.ts         # 路由配置
│
├── locales/                   # 翻译文件
│   ├── zh.json                # 简体中文（源）
│   ├── en.json                # 英文
│   └── zh-TW.json             # 繁体中文
│
├── styles/                    # 样式
│   └── global.css             # 全局样式
│
└── utils/                     # 工具函数
    ├── AppConfig.ts           # 应用配置
    └── Helpers.ts             # 辅助函数
```

## 部署

### Vercel（推荐）

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel
```

在 Vercel 项目设置中添加环境变量：
- `NEXT_PUBLIC_APP_URL`
- `CROWDIN_PERSONAL_TOKEN`（如果使用自动化翻译同步）

### 其他平台

- **Netlify**：支持 Next.js，需要配置构建命令
- **Cloudflare Pages**：支持静态导出
- **自托管**：需要 Node.js 服务器

## 常见问题

### Q: 如何添加新产品页面？

1. 创建产品目录：`src/app/[locale]/(marketing)/products/[slug]/page.tsx`
2. 添加翻译键到 `src/locales/zh.json`
3. 在产品列表中添加链接

### Q: 繁体中文翻译不对怎么办？

1. 登录 Crowdin
2. 选择 Chinese Traditional (Taiwan)
3. 找到对应字符串修改
4. 运行 `npm run crowdin:download`

### Q: 如何本地测试繁体中文？

访问 `http://localhost:3000/zh-TW`

### Q: 语言切换器不工作？

检查：
1. `AppConfig.ts` 中是否包含该语言
2. 对应的语言文件是否存在
3. 浏览器是否缓存了旧版本

## 下一步

- [ ] 配置 Crowdin 账号
- [ ] 迁移 Vue3 项目的产品内容
- [ ] 添加产品详情页
- [ ] 接入 CMS 系统
- [ ] 优化 SEO
- [ ] 添加分析工具

## 需要帮助？

参考文档：
- [README.md](./README.md) - 项目概览
- [CROWDIN_GUIDE.md](./CROWDIN_GUIDE.md) - Crowdin 详细指南
- [Next.js 文档](https://nextjs.org/docs)
- [next-intl 文档](https://next-intl-docs.vercel.app/)


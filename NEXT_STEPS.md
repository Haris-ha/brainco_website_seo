# 下一步操作指南

## ✅ 已完成的工作

### 阶段 1-2 完成 (Day 1-4)
- ✅ 技术评估与审计
- ✅ 架构搭建
- ✅ 多语言配置（zh-CN, en-US, zh-TW）
- ✅ IP 定位与智能跳转
- ✅ SEO 基础设施
- ✅ 项目清理和优化
- ✅ 文档体系建立

---

## 🚀 立即需要执行的操作

### 1. 安装依赖（必须）

```bash
cd /Users/harris/Desktop/BrainCo/brainco_website_seo
npm install
```

这将安装所有更新后的依赖包：
- @tanstack/react-query (数据管理)
- axios (HTTP 客户端)
- framer-motion (动画)
- next-seo (SEO 优化)
- next-sitemap (Sitemap 生成)
- react-hook-form (表单)
- sharp (图片优化)
- 等等...

### 2. 创建环境变量文件（必须）

创建 `.env.local` 文件：

```bash
# 复制示例文件（如果存在）
cp .env.example .env.local

# 或者手动创建并添加以下内容：
cat > .env.local << 'EOF'
# BrainCo 官网环境变量

# 中国站 URL
NEXT_PUBLIC_SITE_URL_CN=https://www.brainco.cn

# 美国站 URL  
NEXT_PUBLIC_SITE_URL_US=https://www.brainco.tech

# 默认语言
NEXT_PUBLIC_DEFAULT_LOCALE=zh-CN

# Node 环境
NODE_ENV=development
EOF
```

### 3. 测试运行（必须）

```bash
# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 验证：
- ✅ 页面能正常加载
- ✅ 语言切换功能正常
- ✅ 无报错信息

### 4. 测试多语言路由

访问以下 URL 测试：
- http://localhost:3000 （默认：简体中文）
- http://localhost:3000/zh-CN （简体中文）
- http://localhost:3000/en-US （英文）
- http://localhost:3000/zh-TW （繁体中文）

---

## 📋 可选操作

### 配置 Crowdin（推荐）

如果需要专业翻译管理：

1. **注册 Crowdin 账号**
   - 访问 https://crowdin.com/
   - 注册免费账号

2. **创建项目**
   - 项目名称：BrainCo Website
   - 源语言：Chinese Simplified (zh-CN)
   - 目标语言：English (en-US), Chinese Traditional (zh-TW)

3. **获取凭证**
   - Project ID: 在项目设置中查看
   - API Token: 账户设置 → API → Personal Access Tokens

4. **配置环境变量**
   ```bash
   # 添加到 .env.local
   CROWDIN_PERSONAL_TOKEN=your_token_here
   ```

5. **更新 crowdin.yml**
   ```yaml
   project_id: "your_project_id"
   ```

6. **上传源文件**
   ```bash
   npm run crowdin:upload
   ```

---

## 🎯 下一阶段：页面开发（Day 5-12）

### 准备工作

#### 1. 资源迁移（1天）

从 Vue3 项目复制资源：

```bash
# 图片资源
cp -r brainco_website/public/* public/

# 或手动迁移：
# - 产品图片
# - Logo 和 favicon
# - 图标文件
```

#### 2. 设计系统提取（0.5天）

从 Vue3 项目提取：
- 品牌颜色（主色、辅色）
- 字体配置
- 间距系统
- 圆角尺寸
- 阴影样式

更新 `src/styles/global.css` 中的 CSS 变量。

#### 3. 组件库搭建（1.5天）

创建基础组件：
```
src/components/
├── ui/                  # 基础 UI
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── layout/              # 布局
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
└── product/             # 产品
    ├── ProductCard.tsx
    └── ProductHero.tsx
```

### 页面开发顺序

#### 第一优先级（2天）
1. **首页** (`src/app/[locale]/(marketing)/page.tsx`)
   - Hero 区域
   - 产品导航
   - 公司介绍
   
2. **产品列表页** (`src/app/[locale]/(marketing)/products/page.tsx`)
   - 产品分类
   - 产品卡片列表

#### 第二优先级（3天）
3. **产品详情页**（4个产品）
   - 智能仿生手 (`products/brain-robotics/page.tsx`)
   - 轻凌智能仿生腿 (`products/mobius/page.tsx`)
   - Revo1 (`products/revo1/page.tsx`)
   - Revo2 (`products/revo2/page.tsx`)

4. **智能健康系列**（5个产品）
   - Easleep (`health/easleep/page.tsx`)
   - OxyZen (`health/oxyzen/page.tsx`)
   - FocusZen (`health/focus-zen/page.tsx`)
   - 专注校 (`health/focus-xin/page.tsx`)
   - Starkids (`health/starkids/page.tsx`)

---

## 📊 当前进度

```
阶段 1: 技术评估   [████████████████████] 100%
阶段 2: 架构搭建   [████████████████████] 100%
阶段 3: 页面开发   [░░░░░░░░░░░░░░░░░░░░]   0%
阶段 4: CMS 搭建   [░░░░░░░░░░░░░░░░░░░░]   0%
阶段 5: SEO 优化   [░░░░░░░░░░░░░░░░░░░░]   0%
阶段 6: 可访问性   [░░░░░░░░░░░░░░░░░░░░]   0%
阶段 7: 跨端优化   [░░░░░░░░░░░░░░░░░░░░]   0%
阶段 8: 测试部署   [░░░░░░░░░░░░░░░░░░░░]   0%

整体进度: [████░░░░░░░░░░░░░░░░] 20%
```

---

## 📚 文档索引

所有文档位于 `docs/` 文件夹：

| 文档 | 说明 |
|------|------|
| [INDEX.md](./docs/INDEX.md) | 文档导航中心 |
| [REFACTOR_PLAN.md](./docs/REFACTOR_PLAN.md) | 官方重构方案 |
| [IMPLEMENTATION_ROADMAP.md](./docs/IMPLEMENTATION_ROADMAP.md) | 技术实施路线图 |
| [PROGRESS.md](./docs/PROGRESS.md) | 项目进度追踪 |
| [PHASE2_SUMMARY.md](./docs/PHASE2_SUMMARY.md) | 阶段2完成总结 |
| [README.md](./docs/README.md) | 项目技术概览 |
| [SETUP.md](./docs/SETUP.md) | 快速开始指南 |
| [CROWDIN_GUIDE.md](./docs/CROWDIN_GUIDE.md) | 多语言管理指南 |

---

## ⚠️ 常见问题

### Q: npm install 失败怎么办？

**A**: 尝试以下方法：
```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### Q: 开发服务器启动失败？

**A**: 检查：
1. `.env.local` 文件是否存在
2. 端口 3000 是否被占用
3. Node.js 版本是否 >= 20

### Q: 找不到某个模块？

**A**: 确保 `npm install` 成功执行，所有依赖都已安装。

### Q: 语言切换不工作？

**A**: 检查：
1. `src/locales/` 下的语言文件是否都存在
2. 文件名是否正确（zh-CN.json, en-US.json, zh-TW.json）
3. 浏览器控制台是否有错误

---

## 🆘 获取帮助

如遇到问题：
1. 查看 [SETUP.md](./docs/SETUP.md) 的常见问题部分
2. 查看 [IMPLEMENTATION_ROADMAP.md](./docs/IMPLEMENTATION_ROADMAP.md) 的技术细节
3. 查看项目文档
4. 联系开发团队

---

## 🎉 完成后的下一步

当以上步骤都完成后：

1. ✅ 确认项目能正常运行
2. ✅ 向我报告"准备好开始页面开发"
3. ✅ 我会开始阶段3的工作：
   - 搭建组件库
   - 开发首页和产品页
   - 迁移 Vue3 内容

---

**当前状态**: ⏳ 等待依赖安装和测试  
**下一步**: 阶段 3 - 页面模板开发  
**预计开始**: 确认测试通过后

**最后更新**: 2025-01-XX  
**文档作者**: AI Assistant


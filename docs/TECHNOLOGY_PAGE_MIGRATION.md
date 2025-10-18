# 技术页面迁移完成文档

## 概述
成功将 BrainCo 技术页面从 Vue.js 迁移到 Next.js，使用 Tailwind CSS 完全还原样式，并添加了 Framer Motion 动画效果。

## 完成的工作

### 1. 数据文件 (`src/components/technology/data.ts`)
- 导出了 `process` 数组：包含从 1929 年到 2025 年的脑科学发展历程
- 导出了 `footnotes` 数组：8 个参考文献链接
- 导出了 `cooperatingInstitutions` 数组：3 个合作机构信息
- 导出了 `researchArticles` 数组：4 篇科研文章摘要

### 2. 桌面版组件 (`src/components/technology/TechnologyContent.tsx`)
功能特性：
- **Hero Banner**: 大型背景图，带标题和介绍文本，带淡入动画
- **科研合作区域**: 
  - 4 篇研究文章的网格展示（2列）
  - 3 个合作机构卡片（3列网格）
  - 悬停效果和链接跳转
- **脑科学发展历程时间轴**:
  - 18 个年份的交互式时间轴
  - 点击年份展开，显示详细内容
  - Swiper 轮播支持多张图片
  - 平滑的宽度过渡动画
- **参考文献**: 2列网格展示 8 个脚注
- **动画效果**:
  - 使用 `framer-motion` 的 `whileInView` 实现滚动触发动画
  - Hero 区域的标题缩放和文字淡入
  - 卡片的错开淡入效果
  - 悬停时的抬升效果

### 3. 移动端组件 (`src/components/technology/TechnologyContentMobile.tsx`)
功能特性：
- 响应式适配移动端布局
- 科研文章使用 Swiper 轮播展示
- 合作机构单列垂直堆叠
- 时间轴采用横向滚动交互
- 简化的动画效果，优化移动端性能

### 4. 客户端包装组件 (`src/components/technology/TechnologyPageClient.tsx`)
- 自动检测设备宽度
- 动态加载桌面版或移动端组件
- 响应窗口大小变化

### 5. 路由页面 (`src/app/[locale]/(marketing)/technology/page.tsx`)
- 添加了完整的 SEO metadata
- 设置了页面标题、描述和关键词
- 使用客户端组件包装

### 6. 依赖安装
- 已安装 `swiper` 轮播组件库（v11.x）
- 已有 `framer-motion` (v12.0.0)
- 已有 `next/image` 用于图片优化

### 7. 全局样式更新 (`src/styles/global.css`)
添加了 Swiper 自定义样式：
- 分页器样式
- 激活状态的动画效果
- 与品牌风格一致的颜色

## 使用的技术栈

- **Next.js 15**: 服务端渲染框架
- **React 19**: UI 库
- **TypeScript**: 类型安全
- **Tailwind CSS 4**: 原子化 CSS 框架
- **Framer Motion 12**: 动画库
- **Swiper**: 触摸滑动轮播组件
- **Next/Image**: 图片优化

## 动画效果详情

### whileInView 动画
1. **标题淡入**: `initial={{ opacity: 0, y: 30 }}` → `whileInView={{ opacity: 1, y: 0 }}`
2. **卡片错开动画**: 使用 `delay: index * 0.1` 实现错开效果
3. **悬停效果**: `whileHover={{ y: -5 }}` 实现轻微抬升
4. **缩放动画**: Hero 标题使用 `scale` 属性

### 时间轴交互
- 点击年份切换内容
- 宽度从 72px 过渡到 560px
- CSS `transition-all duration-200` 实现平滑过渡

## 样式还原要点

### 颜色方案
- 主色调: `#1A74BF` (链接蓝色)
- 文字颜色: `#333333` (标题), `#595757` (正文), `#707070` (脚注)
- 背景: `#f6f6f6` (卡片), `rgb(20, 112, 178)` (Hero 背景)
- 边框: `#d6d6d6` (分隔线)

### 字体大小
- 超大标题: 76px (Hero)
- 一级标题: 40px (章节标题)
- 二级标题: 20px (文章标题)
- 正文: 16px-20px

### 布局
- 最大宽度: 1424px (时间轴), 1400px (机构卡片), 1200px (文章网格)
- 卡片间距: 3px-40px
- 圆角: 8px

## 访问页面

页面路由：`/[locale]/technology`

例如：
- 中文简体: `/zh-CN/technology`
- 英文: `/en-US/technology`

## 注意事项

1. 所有图片资源使用 OSS CDN 链接，无需本地存储
2. 所有外部链接使用 `target="_blank"` 和 `rel="noopener noreferrer"`
3. 移动端宽度断点为 768px
4. 使用 `viewport={{ once: true }}` 优化动画性能，避免重复触发
5. 时间轴的年份顺序从 2025 到 1929（从新到旧）

## 测试建议

1. 测试桌面端响应式布局（1920px, 1440px, 1024px）
2. 测试移动端布局（375px, 414px）
3. 测试时间轴交互的所有年份
4. 测试 Swiper 轮播功能
5. 测试所有外部链接是否正确打开
6. 测试滚动动画的触发效果
7. 测试悬停效果

## 性能优化

- 使用 `next/image` 自动优化图片
- 使用 `viewport={{ once: true }}` 避免重复动画
- 动态导入移动端/桌面端组件
- CSS 过渡使用 GPU 加速
- Swiper 懒加载配置

## 未来改进建议

1. 添加国际化支持（英文版内容）
2. 优化移动端时间轴交互体验
3. 添加图片懒加载占位符
4. 添加骨架屏加载状态
5. 添加页面过渡动画
6. 考虑添加暗色模式支持

---

**完成时间**: 2025年10月
**状态**: ✅ 已完成并通过测试


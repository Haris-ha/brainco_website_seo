#!/usr/bin/env node

/**
 * 生成静态 sitemap.xml 文件
 * 复制 sitemap.ts 的逻辑，但使用 JavaScript 实现
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 加载环境变量
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// 获取基础 URL（与 src/utils/Helpers.ts 保持一致）
function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  if (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // 生产环境默认使用配置的域名
  return process.env.NEXT_PUBLIC_SITE_URL_CN || 'https://www.brainco.cn';
}

// 语言配置
const LOCALES = ['zh-CN', 'en-US'];
const DEFAULT_LOCALE = 'zh-CN';

// 从 CMS 获取新闻列表
async function getNewsList(locale, options = {}) {
  const CMS_API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
  const localeMap = {
    'zh-CN': 'zh-Hans',
    'en-US': 'en',
    'zh-TW': 'zh-Hant',
  };
  
  const strapiLocale = localeMap[locale] || 'zh-Hans';
  
  try {
    const params = new URLSearchParams({
      locale: strapiLocale,
      'sort[0]': 'sortIndex:asc',
      'sort[1]': 'newsDate:desc',
      'pagination[pageSize]': String(options.pageSize || 500),
      'pagination[page]': String(options.page || 1),
      publicationState: 'live',
    });

    const url = `${CMS_API_URL}/api/newses?${params.toString()}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      console.warn(`⚠️  无法从 CMS 获取新闻数据 (locale: ${strapiLocale})`);
      return [];
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.warn(`⚠️  获取新闻列表失败 (locale: ${locale}):`, error.message);
    return [];
  }
}

// 生成 sitemap
async function generateSitemap() {
  const baseUrl = getBaseUrl();
  const urls = [];

  // 静态页面路由
  const staticPages = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/products/brain-robotics', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/mobius', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/revo1', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/revo2', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/easleep', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/oxyzen', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/focus-zen', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/focus-xin', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/starkids', priority: 0.9, changefreq: 'weekly' },
    { path: '/education/brain-ai', priority: 0.9, changefreq: 'weekly' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/company', priority: 0.8, changefreq: 'monthly' },
    { path: '/technology', priority: 0.8, changefreq: 'weekly' },
    { path: '/news', priority: 0.8, changefreq: 'daily' },
    { path: '/recruit', priority: 0.7, changefreq: 'monthly' },
    { path: '/recruit/jobs', priority: 0.7, changefreq: 'monthly' },
    { path: '/easleep-specification', priority: 0.6, changefreq: 'monthly' },
  ];

  // 为每个语言生成 URL
  for (const locale of LOCALES) {
    for (const page of staticPages) {
      let url;
      
      if (locale === DEFAULT_LOCALE) {
        // 简体中文：不带前缀
        url = `${baseUrl}${page.path}`;
      } else {
        // 英文：带 /en-US 前缀
        url = `${baseUrl}/${locale}${page.path}`;
      }

      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changefreq,
        priority: page.priority,
      });
    }

    // 添加新闻详情页（动态路由）
    try {
      const newsList = await getNewsList(locale, { pageSize: 500 });
      
      for (const news of newsList) {
        if (news.documentId) {
          let newsUrl;
          
          if (locale === DEFAULT_LOCALE) {
            newsUrl = `${baseUrl}/news/${news.documentId}`;
          } else {
            newsUrl = `${baseUrl}/${locale}/news/${news.documentId}`;
          }

          urls.push({
            url: newsUrl,
            lastModified: news.updatedAt ? new Date(news.updatedAt) : new Date(news.newsDate),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      }
    } catch (error) {
      console.warn(`⚠️ 获取 ${locale} 新闻列表失败，跳过新闻详情页:`, error.message);
    }
  }

  // 生成 XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.map(url => {
  const lastmod = url.lastModified ? url.lastModified.toISOString() : new Date().toISOString();
  const changefreq = url.changeFrequency || 'daily';
  const priority = url.priority || 0.7;
  
  return `  <url>
    <loc>${url.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  // 保存到 public 目录
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, xml, 'utf-8');
  
  console.log(`✅ Sitemap 生成成功！`);
  console.log(`   文件: ${sitemapPath}`);
  console.log(`   URL 数量: ${urls.length}`);
  console.log(`   基础 URL: ${baseUrl}`);
  
  return urls.length;
}

generateSitemap().catch(error => {
  console.error('❌ 生成 sitemap 失败:', error);
  process.exit(1);
});

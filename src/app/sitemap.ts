import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';
import { AppConfig } from '@/utils/AppConfig';
import { getNewsList } from '@/lib/seo';

/**
 * 生成完整的 sitemap
 * 包含所有静态页面和动态新闻页面
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const urls: MetadataRoute.Sitemap = [];

  // 静态页面路由
  const staticPages = [
    // 首页
    { path: '/', priority: 1.0, changefreq: 'daily' },
    
    // 产品页面
    { path: '/products/brain-robotics', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/mobius', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/revo1', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/revo2', priority: 0.9, changefreq: 'weekly' },
    
    // 健康产品
    { path: '/health/easleep', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/oxyzen', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/focus-zen', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/focus-xin', priority: 0.9, changefreq: 'weekly' },
    { path: '/health/starkids', priority: 0.9, changefreq: 'weekly' },
    
    // 教育产品
    { path: '/education/brain-ai', priority: 0.9, changefreq: 'weekly' },
    
    // 公司页面
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/company', priority: 0.8, changefreq: 'monthly' },
    { path: '/technology', priority: 0.8, changefreq: 'weekly' },
    
    // 新闻列表
    { path: '/news', priority: 0.8, changefreq: 'daily' },
    
    // 招聘
    { path: '/recruit', priority: 0.7, changefreq: 'monthly' },
    { path: '/recruit/jobs', priority: 0.7, changefreq: 'monthly' },
    
    // 规格页面
    { path: '/easleep-specification', priority: 0.6, changefreq: 'monthly' },
  ];

  // 为每个语言生成 URL
  for (const locale of AppConfig.locales) {
    for (const page of staticPages) {
      let url: string;
      
      if (locale === AppConfig.defaultLocale) {
        // 简体中文：不带前缀
        url = `${baseUrl}${page.path}`;
      } else {
        // 英文：带 /en-US 前缀
        url = `${baseUrl}/${locale}${page.path}`;
      }

      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority: page.priority,
      });
    }

    // 添加新闻详情页（动态路由）
    try {
      const newsList = await getNewsList(locale, { pageSize: 500 });
      
      for (const news of newsList) {
        if (news.documentId) {
          let newsUrl: string;
          
          if (locale === AppConfig.defaultLocale) {
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
      // 如果获取新闻失败，继续生成其他页面的 sitemap
      console.warn(`⚠️ 获取 ${locale} 新闻列表失败，跳过新闻详情页:`, error);
    }
  }

  return urls;
}

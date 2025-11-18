/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL_CN || 'https://www.brainco.cn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // 不生成 sitemap，使用自定义脚本生成（scripts/generate-sitemap.mjs）
  // 只生成 robots.txt
  exclude: ['/*'],

  // Robots.txt 配置
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/cart', '/checkout', '/orders'],
      },
      // 百度爬虫特殊配置
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api', '/cart', '/checkout', '/orders'],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://www.brainco.cn/sitemap.xml',
    ],
  },
};

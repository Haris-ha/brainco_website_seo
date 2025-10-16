/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL_CN || 'https://www.brainco.cn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/purchase/*'],

  // 多语言和双域名配置
  alternateRefs: [
    {
      href: 'https://www.brainco.cn',
      hreflang: 'zh-CN',
    },
    {
      href: 'https://www.brainco.tech',
      hreflang: 'en-US',
    },
    {
      href: 'https://www.brainco.cn/zh-TW',
      hreflang: 'zh-TW',
    },
    {
      href: 'https://www.brainco.cn',
      hreflang: 'x-default', // 默认语言
    },
  ],

  // Robots.txt 配置
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/purchase/orders', '/purchase/cart'],
      },
      // 百度爬虫特殊配置
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api', '/purchase'],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://www.brainco.cn/sitemap.xml',
      'https://www.brainco.tech/sitemap.xml',
    ],
  },

  // 变更频率
  changefreq: 'daily',
  priority: 0.7,

  // 自定义转换函数，用于处理动态路由
  transform: async (config, path) => {
    // 默认配置
    let changefreq = config.changefreq;
    let priority = config.priority;

    // 根据路径设置不同的优先级和更新频率
    if (path === '/' || path.includes('/zh-CN') || path.includes('/en-US')) {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/products/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/news')) {
      priority = 0.8;
      changefreq = 'daily';
    } else if (path.includes('/company/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

/**
 * SEO 数据获取服务
 * 从 Strapi CMS 获取页面 SEO 配置
 */

import type { PageSEO, SEOMetadata, StrapiResponse } from '@/types/seo';
import { AppConfig } from '@/utils/AppConfig';

// CMS API 基础 URL
const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:1337';

// 语言映射：Next.js locale -> Strapi locale
const localeMap: Record<string, string> = {
  'zh-CN': 'zh-Hans',
  'en-US': 'en',
  'zh-TW': 'zh-Hant',
};

// Strapi locale -> Next.js locale (用于 hreflang)
const reverseLocaleMap: Record<string, string> = {
  'zh-Hans': 'zh-CN',
  'en': 'en-US',
  'zh-Hant': 'zh-TW',
};

/**
 * 将 Next.js locale 转换为 Strapi locale
 */
export function mapLocaleToStrapi(locale: string): string {
  return localeMap[locale] || 'zh-Hans';
}

/**
 * 将 Strapi locale 转换为 Next.js locale
 */
export function mapLocaleFromStrapi(strapiLocale: string): string {
  return reverseLocaleMap[strapiLocale] || 'zh-CN';
}

/**
 * 从 Strapi 获取页面 SEO 数据
 * @param pagePath 页面路径（例如：'/', '/about', '/products/focus-zen'）
 * @param locale Next.js locale（例如：'zh-CN', 'en-US', 'zh-TW'）
 * @returns 页面 SEO 数据
 */
export async function getPageSEO(
  pagePath: string,
  locale: string = AppConfig.defaultLocale,
): Promise<PageSEO | null> {
  try {
    const strapiLocale = mapLocaleToStrapi(locale);

    // 构建 Strapi API 查询
    // 使用 filters 和 locale 参数查询特定页面和语言的 SEO 数据
    const params = new URLSearchParams({
      'filters[pagePath][$eq]': pagePath,
      'locale': strapiLocale,
    });

    // Strapi v4 populate 参数需要使用数组格式
    params.append('populate[0]', 'ogImage');
    params.append('populate[1]', 'twitterImage');

    const url = `${CMS_API_URL}/api/page-seos?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      // 使用 revalidate 来控制缓存
      next: {
        revalidate: 3600, // 1小时重新验证一次
      },
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        if (response.status === 403) {
          console.warn('\n⚠️  CMS API 访问被拒绝 (403 Forbidden)');
          console.warn(`   页面: ${pagePath} (${locale})`);
          console.warn(`   CMS API: ${CMS_API_URL}`);
          console.warn('\n   💡 解决方案：');
          console.warn('   1. 在 Strapi 中设置 Page SEO 为公开访问');
          console.warn('   2. 进入 Settings → Roles → Public');
          console.warn('   3. 勾选 Page-seo 的 find 和 findOne 权限');
          console.warn('   4. 保存设置');
          console.warn('\n   将使用 fallback SEO 数据继续开发。\n');
        } else if (response.status === 404) {
          console.warn(`⚠️  CMS API 端点不存在 (404): ${url}`);
          console.warn(`   请检查 Strapi 是否正确配置了 Page SEO 内容类型`);
          console.warn(`   将使用 fallback 数据。\n`);
        } else {
          console.warn(`⚠️  无法从 CMS 获取 SEO 数据 (HTTP ${response.status})`);
          console.warn(`   页面: ${pagePath} (${locale})`);
          console.warn(`   CMS API: ${CMS_API_URL}`);
          console.warn(`   将使用 fallback 数据。\n`);
        }
      }
      return null;
    }

    const data: StrapiResponse<PageSEO> = await response.json();

    if (data.data && data.data.length > 0) {
      return data.data[0] ?? null;
    }

    if (process.env.NODE_ENV === 'development') {
      console.warn(`ℹ️  CMS 中未找到 SEO 数据: ${pagePath} (${strapiLocale})`);
      console.warn(`   将使用 fallback 数据。如需添加 SEO 数据，请在 CMS 中创建。`);
    }
    return null;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      const err = error as NodeJS.ErrnoException;
      if (err.code === 'ECONNREFUSED') {
        console.warn('\n⚠️  无法连接到 CMS 服务器');
        console.warn(`   CMS API: ${CMS_API_URL}`);
        console.warn(`   请确保 Strapi CMS 正在运行，或检查 .env.local 中的配置`);
        console.warn(`   将使用 fallback SEO 数据继续开发。\n`);
      } else {
        console.error(`❌ 获取 SEO 数据时出错 (${pagePath}):`, error);
      }
    }
    return null;
  }
}

/**
 * 获取图片完整 URL
 */
function getImageUrl(url?: string): string | undefined {
  if (!url) {
    return undefined;
  }

  // 如果已经是完整 URL，直接返回
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // 否则拼接 CMS 基础 URL
  return `${CMS_API_URL}${url}`;
}

/**
 * 将 PageSEO 数据转换为 Next.js Metadata 格式
 */
export function convertToMetadata(
  seoData: PageSEO | null,
  _currentLocale: string,
  fallbackTitle?: string,
  fallbackDescription?: string,
): SEOMetadata {
  if (!seoData) {
    return {
      title: fallbackTitle || 'BrainCo',
      description: fallbackDescription || 'BrainCo Official Website',
    };
  }

  const metadata: SEOMetadata = {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
  };

  // Keywords
  if (seoData.keywords) {
    metadata.keywords = seoData.keywords;
  }

  // Robots
  if (seoData.metaRobots) {
    metadata.robots = seoData.metaRobots;
  }

  // X-Robots-Tag
  if (seoData.xRobotsTag) {
    metadata.xRobotsTag = seoData.xRobotsTag;
  }

  // Open Graph
  if (seoData.ogTitle || seoData.ogDescription || seoData.ogImage) {
    metadata.openGraph = {
      title: seoData.ogTitle || seoData.metaTitle,
      description: seoData.ogDescription || seoData.metaDescription,
      type: seoData.ogType || 'website',
    };

    if (seoData.ogImage) {
      const imageUrl = getImageUrl(seoData.ogImage.url);
      if (imageUrl) {
        metadata.openGraph.images = [
          {
            url: imageUrl,
            width: seoData.ogImage.width,
            height: seoData.ogImage.height,
            alt: seoData.ogImage.alternativeText || seoData.metaTitle,
          },
        ];
      }
    }
  }

  // Twitter Card
  if (seoData.twitterCard || seoData.twitterTitle || seoData.twitterDescription || seoData.twitterImage) {
    metadata.twitter = {
      card: seoData.twitterCard || 'summary_large_image',
      title: seoData.twitterTitle || seoData.metaTitle,
      description: seoData.twitterDescription || seoData.metaDescription,
    };

    if (seoData.twitterImage) {
      const imageUrl = getImageUrl(seoData.twitterImage.url);
      if (imageUrl) {
        metadata.twitter.images = [imageUrl];
      }
    }
  }

  // Canonical and alternates
  metadata.alternates = {};

  // 使用 CMS 中配置的 canonical URL
  if (seoData.canonicalURL) {
    metadata.alternates.canonical = seoData.canonicalURL;
  }

  // 添加多语言 hreflang 标签
  const languages: Record<string, string> = {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.brainco.cn';

  // 为每个支持的语言添加 alternate link
  AppConfig.locales.forEach((locale) => {
    const localePrefix = locale === AppConfig.defaultLocale ? '' : `/${locale}`;
    const fullUrl = `${baseUrl}${localePrefix}${seoData.pagePath}`;
    languages[locale] = fullUrl;
  });

  metadata.alternates.languages = languages;

  return metadata;
}

/**
 * 生成页面元数据（用于 Next.js generateMetadata）
 * @param pagePath 页面路径
 * @param locale 当前语言
 * @param fallbackTitle 后备标题
 * @param fallbackDescription 后备描述
 * @returns Next.js Metadata 对象
 */
export async function generatePageMetadata(
  pagePath: string,
  locale: string,
  fallbackTitle?: string,
  fallbackDescription?: string,
): Promise<SEOMetadata> {
  const seoData = await getPageSEO(pagePath, locale);
  return convertToMetadata(seoData, locale, fallbackTitle, fallbackDescription);
}

/**
 * 获取页面的结构化数据（用于在页面中渲染）
 * @param pagePath 页面路径
 * @param locale 当前语言
 * @returns PageSEO 数据（包含 structuredData）
 */
export async function getPageSEOForStructuredData(
  pagePath: string,
  locale: string,
): Promise<PageSEO | null> {
  return await getPageSEO(pagePath, locale);
}

/**
 * 获取所有页面路径的 SEO 数据（用于生成 sitemap）
 */
export async function getAllPageSEOs(): Promise<PageSEO[]> {
  try {
    const params = new URLSearchParams({
      'pagination[pageSize]': '100',
    });

    // Strapi v4 populate 参数需要使用数组格式
    params.append('populate[0]', 'ogImage');
    params.append('populate[1]', 'twitterImage');

    const url = `${CMS_API_URL}/api/page-seos?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️  无法从 CMS 获取所有 SEO 数据');
        console.warn('   将返回空列表。sitemap 将使用默认配置。');
      }
      return [];
    }

    const data: StrapiResponse<PageSEO> = await response.json();
    return data.data || [];
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      const err = error as NodeJS.ErrnoException;
      if (err.code === 'ECONNREFUSED') {
        console.warn('⚠️  无法连接到 CMS 服务器获取 SEO 数据');
        console.warn('   sitemap 将使用默认配置。');
      } else {
        console.error('❌ 获取所有 SEO 数据时出错:', error);
      }
    }
    return [];
  }
}

/**
 * 获取网站的 Publisher 信息
 * 硬编码为 'BrainCo'
 * @returns Publisher 名称 'BrainCo'
 */
export function getPublisher(): string {
  return 'BrainCo';
}

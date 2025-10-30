/**
 * Next.js Metadata 生成辅助函数
 * 用于在页面中轻松生成 SEO 元数据
 */

import type { Metadata } from 'next';
import { generatePageMetadata } from './seo';

/**
 * 页面路径映射表
 * 用于自动推断页面路径
 */
const PAGE_PATH_MAP: Record<string, string> = {
  // 首页
  '(home)': '/',

  // 营销页面
  'about': '/about',
  'contact': '/contact',
  'company': '/company',

  // 产品页面
  'products': '/products',
  'brain-ai': '/education/brain-ai',
  'brain-robotics': '/products/brain-robotics',
  'mobius': '/products/mobius',
  'revo1': '/products/revo1',
  'revo2': '/products/revo2',

  // 健康产品
  'focus-zen': '/health/focus-zen',
  'focus-xin': '/health/focus-xin',
  'easleep': '/health/easleep',
  'oxyzen': '/health/oxyzen',
  'starkids': '/health/starkids',

  // 其他页面
  'technology': '/technology',
  'news': '/news',
  'recruit': '/recruit',
  'jobs': '/recruit/jobs',
  'easleep-specification': '/easleep-specification',

  // 功能页面（通常不需要 SEO）
  'cart': '/cart',
  'checkout': '/checkout',
  'orders': '/orders',
};

/**
 * 为页面生成元数据的辅助函数
 * 这个函数可以在任何页面的 generateMetadata 中使用
 *
 * @param params 页面参数（包含 locale）
 * @param params.locale 当前语言
 * @param pagePath 页面路径（例如：'/', '/about', '/products/focus-zen'）
 * @param fallback 后备数据（当 CMS 中没有数据时使用）
 * @param fallback.title 后备标题
 * @param fallback.description 后备描述
 * @returns Next.js Metadata 对象
 *
 * @example
 * ```typescript
 * export async function generateMetadata(props: PageProps): Promise<Metadata> {
 *   const { locale } = await props.params;
 *   return generateSEOMetadata(
 *     { locale },
 *     '/about',
 *     {
 *       title: '关于我们',
 *       description: '了解 BrainCo 的故事和使命',
 *     }
 *   );
 * }
 * ```
 */
export async function generateSEOMetadata(
  params: { locale: string },
  pagePath: string,
  fallback?: {
    title?: string;
    description?: string;
  },
): Promise<Metadata> {
  const { locale } = params;

  const seoMetadata = await generatePageMetadata(
    pagePath,
    locale,
    fallback?.title,
    fallback?.description,
  );

  const metadata: Metadata = {
    title: seoMetadata.title,
    description: seoMetadata.description,
    keywords: seoMetadata.keywords,
    robots: seoMetadata.robots,
    openGraph: seoMetadata.openGraph,
    twitter: seoMetadata.twitter,
    alternates: seoMetadata.alternates,
  };

  return metadata;
}

/**
 * 智能 SEO 元数据生成器
 * 自动从文件路径推断页面路径，无需手动指定
 *
 * @param params 页面参数（包含 locale 和其他 segments）
 * @param params.locale 当前语言
 * @param segment 页面 segment（文件夹名称），如果不提供则自动从参数推断
 * @param fallback 后备数据
 * @param fallback.title 后备标题
 * @param fallback.description 后备描述
 * @returns Next.js Metadata 对象
 *
 * @example
 * ```typescript
 * // 简化版 - 自动推断路径
 * export async function generateMetadata(props: PageProps): Promise<Metadata> {
 *   const params = await props.params;
 *   return createPageMetadata(params, 'about', {
 *     title: '关于我们 - BrainCo',
 *     description: '了解 BrainCo 的故事',
 *   });
 * }
 * ```
 */
export async function createPageMetadata(
  params: { locale: string; [key: string]: string },
  segment?: string,
  fallback?: {
    title?: string;
    description?: string;
  },
): Promise<Metadata> {
  const { locale } = params;

  // 如果提供了 segment，使用映射表查找路径
  let pagePath = '/';

  if (segment && PAGE_PATH_MAP[segment]) {
    pagePath = PAGE_PATH_MAP[segment];
  } else if (segment) {
    // 如果 segment 不在映射表中，使用默认规则
    pagePath = `/${segment}`;
  }

  return generateSEOMetadata({ locale }, pagePath, fallback);
}

/**
 * 生成结构化数据（JSON-LD）
 * 用于增强搜索引擎理解
 *
 * @param type 结构化数据类型
 * @param data 数据对象
 * @returns JSON-LD script 标签字符串
 */
export function generateStructuredData(type: string, data: any): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(structuredData);
}

/**
 * 生成网站组织信息的结构化数据
 */
export function generateOrganizationSchema() {
  return generateStructuredData('Organization', {
    name: 'BrainCo',
    url: 'https://www.brainco.cn',
    logo: 'https://www.brainco.cn/logo.webp',
    sameAs: [
      // 添加社交媒体链接
    ],
  });
}

/**
 * 生成产品信息的结构化数据
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}) {
  return generateStructuredData('Product', {
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      'name': product.brand || 'BrainCo',
    },
    ...(product.offers && {
      offers: {
        '@type': 'Offer',
        'price': product.offers.price,
        'priceCurrency': product.offers.priceCurrency,
      },
    }),
  });
}

/**
 * 生成面包屑导航的结构化数据
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  });
}

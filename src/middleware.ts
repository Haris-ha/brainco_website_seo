import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './libs/I18nRouting';
import { DomainConfig } from './utils/AppConfig';

const handleI18nRouting = createMiddleware(routing);

// 简单的内存缓存用于存储 X-Robots-Tag 配置
const robotsCache = new Map<string, { value: string; timestamp: number }>();
const CACHE_TTL = 3600000; // 1小时

// 语言映射
const localeMap: Record<string, string> = {
  'zh-CN': 'zh-Hans',
  'en-US': 'en',
  'zh-TW': 'zh-Hant',
};

/**
 * 从 CMS 获取页面的 X-Robots-Tag 配置
 */
async function getXRobotsTag(pagePath: string, locale: string): Promise<string> {
  const cacheKey = `${pagePath}:${locale}`;
  const cached = robotsCache.get(cacheKey);

  // 检查缓存
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.value;
  }

  try {
    const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:1337';
    const strapiLocale = localeMap[locale] || 'zh-Hans';

    const params = new URLSearchParams({
      'filters[pagePath][$eq]': pagePath,
      'locale': strapiLocale,
      'fields[0]': 'xRobotsTag',
    });

    const url = `${CMS_API_URL}/api/page-seos?${params.toString()}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600,
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        const xRobotsTag = data.data[0].xRobotsTag || 'index, follow';
        // 更新缓存
        robotsCache.set(cacheKey, {
          value: xRobotsTag,
          timestamp: Date.now(),
        });
        return xRobotsTag;
      }
    }
  } catch (error) {
    // 静默失败，使用默认值
  }

  return 'index, follow'; // 默认值
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检测搜索引擎爬虫，不执行跳转
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling|google|baidu|bing|yahoo/i.test(userAgent);

  // 对于非爬虫流量，执行 IP 定位跳转
  if (!isBot) {
    // 获取 IP 地理位置
    // 优先从 CDN 头获取，其次使用 Vercel/Next.js 的 geo 信息
    const countryCode = request.headers.get('cloudfront-viewer-country')
      || request.headers.get('x-forwarded-country')
      || (request as any).geo?.country
      || null;

    const hostname = request.headers.get('host') || '';

    // 如果能获取到国家代码，执行智能跳转
    if (countryCode) {
      // 中国用户（CN）访问美国站 → 跳转到中国站
      if (countryCode === 'CN' && hostname.includes('brainco.tech')) {
        const url = request.nextUrl.clone();
        url.hostname = new URL(DomainConfig.cn).hostname;
        url.port = '';
        return NextResponse.redirect(url, { status: 307 }); // 临时跳转
      }

      // 非中国用户访问中国站 → 跳转到美国站
      // 但港澳台（TW, HK, MO）可以继续访问中国站
      if (countryCode !== 'CN'
        && countryCode !== 'TW'
        && countryCode !== 'HK'
        && countryCode !== 'MO'
        && hostname.includes('brainco.cn')) {
        const url = request.nextUrl.clone();
        url.hostname = new URL(DomainConfig.us).hostname;
        url.port = '';
        return NextResponse.redirect(url, { status: 307 });
      }
    }
  }

  // 获取当前页面的语言和路径
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = routing.locales.includes(pathSegments[0] as any)
    ? pathSegments[0]
    : routing.defaultLocale;

  // 移除语言前缀获取实际页面路径
  const pagePath = `/${pathSegments.length > 1 && routing.locales.includes(pathSegments[0] as any)
    ? pathSegments.slice(1).join('/')
    : pathSegments.join('/')}`;

  // 获取并添加 X-Robots-Tag header
  const xRobotsTag = await getXRobotsTag(
    pagePath === '/' ? '/' : pagePath.replace(/\/$/, ''),
    locale as string,
  );

  // 执行 next-intl 国际化路由处理
  const response = handleI18nRouting(request);

  // 添加 X-Robots-Tag header 到响应
  if (response) {
    response.headers.set('X-Robots-Tag', xRobotsTag);
  }

  return response;
}

export const config = {
  // 匹配所有路径，除了以下这些
  matcher: '/((?!_next|_vercel|api|.*\\..*).*)',
  runtime: 'nodejs',
};

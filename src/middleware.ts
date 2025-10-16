import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './libs/I18nRouting';
import { DomainConfig } from './utils/AppConfig';

const handleI18nRouting = createMiddleware(routing);

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
      || request.geo?.country
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

  // 执行 next-intl 国际化路由处理
  return handleI18nRouting(request);
}

export const config = {
  // 匹配所有路径，除了以下这些
  matcher: '/((?!_next|_vercel|api|.*\\..*).*)',
  runtime: 'nodejs',
};

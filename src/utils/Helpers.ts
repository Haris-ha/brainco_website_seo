import { routing } from '@/libs/I18nRouting';

export const getBaseUrl = () => {
  // 优先使用配置的生产域名
  if (process.env.NEXT_PUBLIC_SITE_URL_CN) {
    return process.env.NEXT_PUBLIC_SITE_URL_CN;
  }

  // 其次使用 APP_URL（但排除 demo 域名）
  if (process.env.NEXT_PUBLIC_APP_URL && !process.env.NEXT_PUBLIC_APP_URL.includes('demo.nextjs-boilerplate.com')) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'https://www.brainco.cn';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const isServer = () => {
  return typeof window === 'undefined';
};

import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import PublisherMeta from '@/components/seo/PublisherMeta';
// TargetCursor 已暂时禁用 - 如需恢复，请取消下面注释并取消下方使用位置的注释
// import TargetCursor from '@/components/ui/TargetCursor/TargetCursor';
import { getPublisher } from '@/lib/seo';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

// 使用 Inter 字体确保跨平台一致性
// Inter 专为屏幕显示优化，在 Windows、macOS、Linux 上显示一致
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // 获取 Publisher 信息（硬编码为 BrainCo）
  const publisher = getPublisher();

  return (
    <html lang={locale} className={inter.variable}>
      <PublisherMeta publisher={publisher} />
      <body className={inter.className}>
        {/* TargetCursor 仅在桌面端显示 - 已全局隐藏，如需恢复请取消注释 */}
        {/* <div className="hidden md:block">
          <TargetCursor spinDuration={3} hideDefaultCursor />
        </div> */}
        {/* 全局 Toast 通知 */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // 默认选项
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              borderRadius: '8px',
              padding: '12px 20px',
            },
            // 成功提示
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            // 错误提示
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
            // 加载提示
            loading: {
              duration: Infinity,
            },
          }}
        />
        <NextIntlClientProvider>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

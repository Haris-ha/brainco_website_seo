import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import NewsContent from '@/components/news/NewsContent';
import NewsContentMobile from '@/components/news/NewsContentMobile';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'news', {
    title: '新闻中心 - BrainCo',
    description: 'BrainCo 最新新闻和动态',
  });
}

export default async function NewsPage(props: NewsPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // Detect mobile device from user agent
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

  return isMobile ? <NewsContentMobile /> : <NewsContent />;
}

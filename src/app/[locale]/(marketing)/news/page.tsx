import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import NewsContent from '@/components/news/NewsContent';
import NewsContentMobile from '@/components/news/NewsContentMobile';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: NewsPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'News',
  } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
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

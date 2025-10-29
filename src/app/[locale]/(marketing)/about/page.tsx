import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import AboutPageClient from '@/components/company/AboutPageClient';
import { generateSEOMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  
  // 尝试从 CMS 获取 SEO 数据
  const seoMetadata = await generateSEOMetadata(
    { locale },
    '/about',
  );
  
  // 如果 CMS 中没有数据，使用翻译文件作为后备
  if (!seoMetadata.title || seoMetadata.title === 'BrainCo') {
    const t = await getTranslations({
      locale,
      namespace: 'About',
    } as any);

    return {
      ...seoMetadata,
      title: t('meta_title'),
      description: t('meta_description'),
    };
  }

  return seoMetadata;
}

export default async function AboutPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <AboutPageClient />;
}

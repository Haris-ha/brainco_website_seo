import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HomePageClient } from '@/components/home/HomePageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { generateSEOMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;

  // 尝试从 CMS 获取 SEO 数据
  const seoMetadata = await generateSEOMetadata(
    { locale },
    '/',
    {
      title: undefined,
      description: undefined,
    },
  );

  // 如果 CMS 中没有数据，使用翻译文件作为后备
  if (!seoMetadata.title || seoMetadata.title === 'BrainCo') {
    const t = await getTranslations({
      locale,
      namespace: 'Index',
    });

    return {
      ...seoMetadata,
      title: t('meta_title'),
      description: t('meta_description'),
    };
  }

  return seoMetadata;
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据和 Canonical URL
  const seoData = await getPageSEOForStructuredData('/', locale);

  return (
    <>
      {/* 动态更新 Canonical URL - 确保在客户端导航时也能正确更新 */}
      <DynamicCanonical
        canonicalURL={seoData?.canonicalURL}
        locale={locale}
        pagePath="/"
      />

      {/* 添加结构化数据 - 现在使用唯一 key 确保客户端导航时更新 */}
      <StructuredData seoData={seoData} />

      <HomePageClient locale={locale} />
    </>
  );
}

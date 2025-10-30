import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StarKidsContent from '@/components/product/starkids/StarKidsContent';
import StarKidsContentMobile from '@/components/product/starkids/StarKidsContentMobile';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'starkids', {
    title: 'StarKids - 儿童专注力训练',
    description: 'StarKids 儿童专注力训练系统，助力儿童成长',
  });
}

export default async function StarKidsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/health/starkids', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/health/starkids" />
      <StructuredData seoData={seoData} />

      {/* Desktop/Tablet Version */}
      <div className="hidden sm:block">
        <StarKidsContent />
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden">
        <StarKidsContentMobile />
      </div>
    </>
  );
}

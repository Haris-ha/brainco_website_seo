import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import StarKidsPageClient from '@/components/product/starkids/StarKidsPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

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

      {/* 使用JS条件渲染，避免PC和移动端H标签同时被搜索引擎收录 */}
      <StarKidsPageClient />
    </>
  );
}

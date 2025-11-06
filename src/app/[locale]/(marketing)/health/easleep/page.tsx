import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import OnlineServiceClient from '@/components/common/OnlineServiceClient';
import EASleepPageClient from '@/components/product/easleep/EASleepPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'easleep', {
    title: 'EASleep - 智能睡眠改善系统',
    description: 'EASleep 智能睡眠改善系统，科学改善睡眠质量',
  });
}

export default async function EASleepPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/health/easleep', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/health/easleep" />
      <StructuredData seoData={seoData} />

      {/* 使用JS条件渲染，避免PC和移动端H标签同时被搜索引擎收录 */}
      <EASleepPageClient />
      <OnlineServiceClient />
    </>
  );
}

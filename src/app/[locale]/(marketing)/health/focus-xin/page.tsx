import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import OnlineServiceClient from '@/components/common/OnlineServiceClient';
import FocusXinPageClient from '@/components/product/focus-xin/FocusXinPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'focus-xin', {
    title: 'FocusXin - 专注力训练系统',
    description: 'FocusXin 专注力训练系统，提升注意力表现',
  });
}

export default async function FocusXinPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/health/focus-xin', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/health/focus-xin" />
      <StructuredData seoData={seoData} />

      {/* 使用JS条件渲染，避免PC和移动端H标签同时被搜索引擎收录 */}
      <FocusXinPageClient />
      <OnlineServiceClient />
    </>
  );
}

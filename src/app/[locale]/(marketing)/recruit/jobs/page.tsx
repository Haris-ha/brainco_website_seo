import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import JobsPageClient from '@/components/recruit/JobsPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'jobs', {
    title: '招聘职位 - BrainCo',
    description: '加入 BrainCo，共同开创脑机接口新时代',
  });
}

export default async function JobsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/recruit/jobs', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/recruit/jobs" />
      <StructuredData seoData={seoData} />
      <JobsPageClient />
    </>
  );
}

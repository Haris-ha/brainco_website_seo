import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import OnlineServiceClient from '@/components/common/OnlineServiceClient';
import MobiusPageClient from '@/components/product/mobius/MobiusPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'mobius', {
    title: 'Mobius - 脑机接口头环',
    description: 'Mobius 脑机接口头环，专业级脑电采集',
  });
}

export default async function MobiusPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据（包含 Schema 结构化数据）
  const seoData = await getPageSEOForStructuredData('/products/mobius', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/products/mobius" />
      <StructuredData seoData={seoData} />

      {/* 使用JS条件渲染，避免PC和移动端H标签同时被搜索引擎收录 */}
      <MobiusPageClient />
      <OnlineServiceClient />
    </>
  );
}

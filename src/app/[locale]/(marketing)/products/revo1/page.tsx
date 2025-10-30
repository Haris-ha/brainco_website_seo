import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import Revo1Content from '@/components/product/revo1/Revo1Content';
import Revo1ContentMobile from '@/components/product/revo1/Revo1ContentMobile';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'revo1', {
    title: 'Revo1 - 第一代脑机接口',
    description: 'Revo1 第一代脑机接口产品',
  });
}

export default async function Revo1Page(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据（包含 Schema 结构化数据）
  const seoData = await getPageSEOForStructuredData('/products/revo1', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/products/revo1" />
      <StructuredData seoData={seoData} />
      
      {/* Desktop Content */}
      <div className="hidden lg:block">
        <Revo1Content />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden">
        <Revo1ContentMobile />
      </div>

      {/* Online Service - Desktop */}
      <div className="hidden lg:block">
        <OnlineService />
      </div>

      {/* Online Service - Mobile */}
      <div className="block lg:hidden">
        <OnlineServiceMobile />
      </div>
    </>
  );
}

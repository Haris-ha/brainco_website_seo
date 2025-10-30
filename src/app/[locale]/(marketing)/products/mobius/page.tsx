import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import MobiusContent from '@/components/product/mobius/MobiusContent';
import MobiusContentMobile from '@/components/product/mobius/MobiusContentMobile';

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
      
      <div className="hidden lg:block">
        <MobiusContent />
      </div>
      <div className="block lg:hidden">
        <MobiusContentMobile />
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

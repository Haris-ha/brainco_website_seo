import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import EASleepContent from '@/components/product/easleep/EASleepContent';
import EASleepContentMobile from '@/components/product/easleep/EASleepContentMobile';

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

      {/* Desktop Content */}
      <div className="hidden lg:block">
        <EASleepContent />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden">
        <EASleepContentMobile />
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

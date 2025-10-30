import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import FocusXinContent from '@/components/product/focus-xin/FocusXinContent';
import FocusXinContentMobile from '@/components/product/focus-xin/FocusXinContentMobile';

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

      {/* Desktop version */}
      <div className="hidden lg:block">
        <FocusXinContent />
      </div>

      {/* Mobile version */}
      <div className="block lg:hidden">
        <FocusXinContentMobile />
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

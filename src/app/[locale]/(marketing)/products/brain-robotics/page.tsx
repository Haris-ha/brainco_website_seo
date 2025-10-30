import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { getPageSEOForStructuredData } from '@/lib/seo';
import StructuredData from '@/components/seo/StructuredData';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import BrainRoboticsContent from '@/components/product/brain-robotics/BrainRoboticsContent';
import BrainRoboticsContentMobile from '@/components/product/brain-robotics/BrainRoboticsContentMobile';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'brain-robotics', {
    title: 'Brain Robotics - 智能仿生手',
    description: 'Brain Robotics 智能仿生手，重塑生活可能',
  });
}

export default async function BrainRoboticsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据（包含 Schema 结构化数据）
  const seoData = await getPageSEOForStructuredData('/products/brain-robotics', locale);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/products/brain-robotics" />
      <StructuredData seoData={seoData} />
      
      <div className="hidden lg:block">
        <BrainRoboticsContent />
      </div>
      <div className="block lg:hidden">
        <BrainRoboticsContentMobile />
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

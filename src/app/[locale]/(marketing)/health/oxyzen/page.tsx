import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import OnlineServiceClient from '@/components/common/OnlineServiceClient';
import OxyZenPageClient from '@/components/product/oxyzen/OxyZenPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { getBraincoProducts } from '@/lib/api';
import { createPageMetadata } from '@/lib/metadata';
import { getPageSEOForStructuredData } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'oxyzen', {
    title: 'OxyZen - 冥想放松系统',
    description: 'OxyZen 冥想放松系统，缓解压力改善身心',
  });
}

export default async function OxyZenPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/health/oxyzen', locale);

  let productInfo: any = null;

  try {
    const response = await getBraincoProducts();
    // Find OxyZen product (code='oxyzen', id=6)
    productInfo = response.data?.find((item: any) => item.code === 'oxyzen' && item.id === 6);
  } catch (error) {
    console.error('Failed to fetch OxyZen product:', error);
    // Fallback to mock data if API fails
    productInfo = {
      id: 6,
      code: 'oxyzen',
      name: 'OxyZen',
      price: 299900, // Price in cents (¥2999)
      oldPrice: null,
      pictureUrl: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/iftXG0SL0Cr5V08e.webp',
    };
  }

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/health/oxyzen" />
      <StructuredData seoData={seoData} />

      {/* 使用JS条件渲染，避免PC和移动端H标签同时被搜索引擎收录 */}
      <OxyZenPageClient productInfo={productInfo} />
      <OnlineServiceClient />
    </>
  );
}

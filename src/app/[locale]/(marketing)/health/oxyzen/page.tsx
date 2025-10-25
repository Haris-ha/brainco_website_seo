import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import OxyZenContent from '@/components/product/oxyzen/OxyZenContent';
import OxyZenContentMobile from '@/components/product/oxyzen/OxyZenContentMobile';
import { getBraincoProducts } from '@/lib/api';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'OxyZen' } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function OxyZenPage() {
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
      {/* Desktop Content */}
      <div className="hidden lg:block">
        <OxyZenContent productInfo={productInfo} />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden">
        <OxyZenContentMobile productInfo={productInfo} />
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

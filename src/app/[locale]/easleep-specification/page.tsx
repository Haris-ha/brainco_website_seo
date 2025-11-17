import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import EASleepSpecificationPageClient from '@/components/easleep/EASleepSpecificationPageClient';
import { getBraincoProducts } from '@/lib/api';
import { createPageMetadata } from '@/lib/metadata';
import { BackButton } from '@/components/common/BackButton';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'easleep-specification', {
    title: 'EASleep 产品规格 - BrainCo',
    description: 'EASleep 详细产品规格和技术参数',
  });
}

export default async function EASleepSpecificationPage() {
  const t = await getTranslations('EASleep');
  let products: any[] = [];

  try {
    const response = await getBraincoProducts();
    // Filter products by code 'easleep'
    products = response.data?.filter((item: any) => item.code === 'easleep') || [];

    // Sort by price
    products.sort((a: any, b: any) => a.price - b.price);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    // Fallback to mock data if API fails
    products = [
      {
        id: 1,
        code: 'easleep',
        name: 'Easleep 舒适版',
        price: 199900, // Price in cents
        oldPrice: null,
      },
      {
        id: 2,
        code: 'easleep',
        name: 'Easleep 奢华版',
        price: 299900,
        oldPrice: 349900,
      },
      {
        id: 3,
        code: 'easleep',
        name: 'Easleep 尊享版',
        price: 399900,
        oldPrice: null,
      },
    ];
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Logo导航栏 */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 md:px-12">
        <div className="flex items-center gap-1 md:gap-8">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/icon.webp"
            alt="BrainCo 公司 Logo - 脑机接口技术公司 / BrainCo Company Logo - Brain-Computer Interface Technology Company"
            width={180}
            height={80}
            className="h-auto w-[100px] lg:w-[180px]"
            priority
          />
          <div className="relative flex items-center gap-2 pl-3 md:pl-6">
            <div className="absolute top-1/2 left-0 h-[12px] w-[2px] -translate-y-1/2 bg-gray-800 md:h-[16px]" />
            <span className="font-medium text-gray-800" style={{ fontSize: 'clamp(14px, 1.5vw, 1.5rem)' }}>
              {t('spec_title')}
            </span>
          </div>
        </div>
        {/* 返回按钮 */}
        <BackButton />
      </header>

      {/* 使用JS条件渲染，避免PC和移动端H标签同时被搜索引擎收录 */}
      <EASleepSpecificationPageClient products={products} />
    </div>
  );
}

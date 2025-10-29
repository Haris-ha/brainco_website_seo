import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import Revo1Content from '@/components/product/revo1/Revo1Content';
import Revo1ContentMobile from '@/components/product/revo1/Revo1ContentMobile';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'revo1', {
    title: 'Revo1 - 第一代脑机接口',
    description: 'Revo1 第一代脑机接口产品',
  });
}

export default function Revo1Page() {
  return (
    <>
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

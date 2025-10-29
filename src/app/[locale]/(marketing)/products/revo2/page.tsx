import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import Revo2Content from '@/components/product/revo2/Revo2Content';
import Revo2ContentMobile from '@/components/product/revo2/Revo2ContentMobile';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'revo2', {
    title: 'Revo2 - 第二代脑机接口',
    description: 'Revo2 第二代脑机接口产品',
  });
}

export default function Revo2Page() {
  return (
    <>
      {/* Desktop Content */}
      <div className="hidden lg:block">
        <Revo2Content />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden">
        <Revo2ContentMobile />
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

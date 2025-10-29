import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
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

export default function MobiusPage() {
  return (
    <>
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

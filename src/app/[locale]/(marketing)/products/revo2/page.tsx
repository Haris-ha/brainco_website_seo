import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import Revo2Content from '@/components/product/revo2/Revo2Content';
import Revo2ContentMobile from '@/components/product/revo2/Revo2ContentMobile';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Revo2' } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
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

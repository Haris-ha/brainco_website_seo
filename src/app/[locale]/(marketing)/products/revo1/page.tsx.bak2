import { getTranslations } from 'next-intl/server';

import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import Revo1Content from '@/components/product/revo1/Revo1Content';
import Revo1ContentMobile from '@/components/product/revo1/Revo1ContentMobile';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Revo1' } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
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

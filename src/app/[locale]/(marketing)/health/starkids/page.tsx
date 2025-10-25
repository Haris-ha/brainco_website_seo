import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import StarKidsContent from '@/components/product/starkids/StarKidsContent';
import StarKidsContentMobile from '@/components/product/starkids/StarKidsContentMobile';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'StarKids' } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function StarKidsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Desktop/Tablet Version */}
      <div className="hidden sm:block">
        <StarKidsContent />
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden">
        <StarKidsContentMobile />
      </div>
    </>
  );
}

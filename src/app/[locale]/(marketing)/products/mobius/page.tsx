import { getTranslations } from 'next-intl/server';
import MobiusContent from '@/components/product/mobius/MobiusContent';
import MobiusContentMobile from '@/components/product/mobius/MobiusContentMobile';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Mobius' } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
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
    </>
  );
}

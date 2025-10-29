import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import StarKidsContent from '@/components/product/starkids/StarKidsContent';
import StarKidsContentMobile from '@/components/product/starkids/StarKidsContentMobile';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'starkids', {
    title: 'StarKids - 儿童专注力训练',
    description: 'StarKids 儿童专注力训练系统，助力儿童成长',
  });
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

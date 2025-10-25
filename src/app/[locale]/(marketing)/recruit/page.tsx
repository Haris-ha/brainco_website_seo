import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import RecruitPageClient from '@/components/recruit/RecruitPageClient';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Recruit',
  } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function RecruitPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <RecruitPageClient />;
}

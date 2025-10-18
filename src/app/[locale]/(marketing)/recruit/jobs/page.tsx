import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JobsPageClient from '@/components/recruit/JobsPageClient';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Recruit',
  });

  return {
    title: t('jobs_meta_title'),
    description: t('jobs_meta_description'),
  };
}

export default async function JobsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <JobsPageClient />;
}

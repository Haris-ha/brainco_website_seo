import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JobsPageClient from '@/components/recruit/JobsPageClient';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'jobs', {
    title: '招聘职位 - BrainCo',
    description: '加入 BrainCo，共同开创脑机接口新时代',
  });
}

export default async function JobsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <JobsPageClient />;
}

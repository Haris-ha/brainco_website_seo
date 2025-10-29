import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import RecruitPageClient from '@/components/recruit/RecruitPageClient';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'recruit', {
    title: '人才招聘 - BrainCo',
    description: 'BrainCo 诚聘英才，期待你的加入',
  });
}

export default async function RecruitPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <RecruitPageClient />;
}

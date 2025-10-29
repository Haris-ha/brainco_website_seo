import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type CompanyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'company', {
    title: '公司介绍 - BrainCo',
    description: 'BrainCo 公司介绍，了解我们的愿景和使命',
  });
}

export default async function CompanyPage(props: CompanyPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Company',
  } as any);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t('meta_title')}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500">
          {t('meta_description')}
        </p>
      </div>
    </div>
  );
}

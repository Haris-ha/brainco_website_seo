import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: NewsPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'News',
  } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function NewsPage(props: NewsPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'News',
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

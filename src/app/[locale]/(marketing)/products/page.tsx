import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ProductsPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Products',
  } as any);

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ProductsPage(props: ProductsPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Products',
  } as any);

  const products = [
    { id: 'brain-robotics', name: t('brain_robotics'), slug: 'brain-robotics' },
    { id: 'mobius', name: t('mobius'), slug: 'mobius' },
    { id: 'starkids', name: t('starkids'), slug: 'starkids' },
    { id: 'focus-zen', name: t('focus_zen'), slug: 'focus-zen' },
    { id: 'dexterous', name: t('dexterous'), slug: 'dexterous' },
    { id: 'emg', name: t('emg'), slug: 'emg' },
  ];

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

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <div className="mt-4">
                <a
                  href={`/products/${product.slug}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  了解更多 →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




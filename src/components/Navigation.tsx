import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from './LocaleSwitcher';

export async function Navigation({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                BrainCo
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300"
              >
                {t('home_link')}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900"
              >
                {t('products_link')}
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900"
              >
                {t('company_link')}
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900"
              >
                {t('news_link')}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900"
              >
                {t('about_link')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}



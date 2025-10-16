import { setRequestLocale } from 'next-intl/server';
import { Navigation } from '@/components/Navigation';

export default async function MarketingLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <Navigation locale={locale} />
      <main>{props.children}</main>
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            © {new Date().getFullYear()} BrainCo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';

export default async function HomeLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Header locale={locale} />
      {props.children}
    </>
  );
}

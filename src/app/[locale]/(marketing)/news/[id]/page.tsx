import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import NewsDetailContent from '@/components/news/NewsDetailContent';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { generateSEOMetadata } from '@/lib/metadata';
import { getNewsDetail, getNewsList } from '@/lib/seo';

type NewsDetailPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata(props: NewsDetailPageProps): Promise<Metadata> {
  const { locale, id } = await props.params;
  const news = await getNewsDetail(id, locale);

  if (!news) {
    return generateSEOMetadata({ locale }, `/news/${id}`, {
      title: '新闻详情 - BrainCo',
      description: 'BrainCo 新闻详情',
    });
  }

  // 生成新闻详情页的 SEO metadata
  const title = `${news.title} - BrainCo 新闻`;
  const description = news.content
    ? news.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
    : `阅读 ${news.title} 的完整内容`;

  return generateSEOMetadata({ locale }, `/news/${id}`, {
    title,
    description,
  });
}

export default async function NewsDetailPage(props: NewsDetailPageProps) {
  const { locale, id } = await props.params;
  setRequestLocale(locale);

  // 获取新闻详情
  const news = await getNewsDetail(id, locale);

  if (!news) {
    notFound();
  }

  // 获取其他新闻列表（用于生成 GridMotion 的 items）
  const allNews = await getNewsList(locale, { pageSize: 100 });

  // 生成新闻详情页的结构化数据
  const newsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    image: news.coverImage,
    datePublished: news.newsDate,
    dateModified: news.updatedAt || news.newsDate,
    author: {
      '@type': 'Organization',
      name: 'BrainCo',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BrainCo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.brainco.cn/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.brainco.cn/${locale}/news/${id}`,
    },
  };

  return (
    <>
      <DynamicCanonical
        canonicalURL={`https://www.brainco.cn/${locale}/news/${id}`}
        locale={locale}
        pagePath={`/news/${id}`}
      />
      <StructuredData
        seoData={{
          pagePath: `/news/${id}`,
          locale: locale as 'zh-Hans' | 'en' | 'zh-Hant',
          metaTitle: news.title,
          metaDescription: news.content
            ? news.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
            : `阅读 ${news.title} 的完整内容`,
          structuredData: newsStructuredData,
        }}
      />
      <NewsDetailContent news={news} locale={locale} allNews={allNews} />
    </>
  );
}


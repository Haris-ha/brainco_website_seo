import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import NewsContent from '@/components/news/NewsContent';
import NewsContentMobile from '@/components/news/NewsContentMobile';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getNewsList, getPageSEOForStructuredData } from '@/lib/seo';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'news', {
    title: '新闻中心 - BrainCo',
    description: 'BrainCo 最新新闻和动态',
  });
}

export default async function NewsPage(props: NewsPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/news', locale);

  // 获取新闻数据（服务端渲染）
  const newsListData = await getNewsList(locale, { pageSize: 200 });

  // 分离热门新闻和普通新闻（Strapi v5 扁平化结构）
  const hotNews = newsListData
    .filter(item => item?.isHot)
    .map(item => ({
      id: item.id,
      title: item.title,
      time: new Date(item.newsDate).toLocaleDateString().replace(/\//g, '-'),
      img: item.coverImage,
      url: item.externalUrl,
      hot: item.isHot,
      sortIndex: item.sortIndex,
    }));

  const regularNews = newsListData
    .filter(item => item && !item.isHot)
    .map(item => ({
      id: item.id,
      title: item.title,
      time: new Date(item.newsDate).toLocaleDateString().replace(/\//g, '-'),
      img: item.coverImage,
      url: item.externalUrl,
      hot: item.isHot,
      sortIndex: item.sortIndex,
    }));

  // 生成新闻列表的结构化数据（NewsArticle）- Strapi v5 扁平化结构
  const newsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': newsListData
      .filter(news => news?.title)
      .map((news, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'NewsArticle',
          'headline': news.title,
          'image': news.coverImage,
          'datePublished': news.newsDate,
          'url': news.externalUrl,
          'publisher': {
            '@type': 'Organization',
            'name': 'BrainCo',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://www.brainco.cn/logo.webp',
            },
          },
        },
      })),
  };

  // Detect mobile device from user agent
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/news" />
      <StructuredData seoData={seoData} />
      {/* 添加新闻列表的结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsStructuredData),
        }}
      />
      {isMobile
        ? <NewsContentMobile initialHotNews={hotNews} initialNewsList={regularNews} />
        : <NewsContent initialHotNews={hotNews} initialNewsList={regularNews} />}
    </>
  );
}

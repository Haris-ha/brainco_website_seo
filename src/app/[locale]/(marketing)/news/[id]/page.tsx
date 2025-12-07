import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import NewsDetailContent from '@/components/news/NewsDetailContent';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { generateSEOMetadata } from '@/lib/metadata';
import { getNewsDetail } from '@/lib/seo';

type NewsDetailPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

/**
 * 从文本中提取关键词
 */
function extractKeywords(title: string, content?: string): string {
  const keywords: string[] = ['BrainCo', '脑机接口', 'BCI', '新闻'];

  // 从标题中提取关键词（去除常见停用词）
  const titleWords = title
    .replace(/[，。！？、；："'（）【】《》]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 1 && !['的', '和', '与', '及', '或', '是', '在', '有', '为', '了', 'the', 'and', 'or', 'is', 'in', 'on', 'at', 'a', 'an'].includes(word.toLowerCase()))
    .slice(0, 5);

  keywords.push(...titleWords);

  // 从内容中提取关键词（如果有内容）
  if (content) {
    const cleanContent = content.replace(/<[^>]*>/g, ' ').substring(0, 500);
    const contentWords = cleanContent
      .replace(/[，。！？、；："'（）【】《》]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .slice(0, 3);

    keywords.push(...contentWords);
  }

  return [...new Set(keywords)].join(', ');
}

/**
 * 清理 HTML 标签并截取描述
 */
function extractDescription(content?: string, title?: string, maxLength: number = 160): string {
  if (content) {
    const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (cleanContent.length > maxLength) {
      return `${cleanContent.substring(0, maxLength)}...`;
    }
    return cleanContent;
  }

  if (title) {
    return `阅读 ${title} 的完整内容，了解 BrainCo 最新动态和行业资讯。`;
  }

  return 'BrainCo 新闻详情，了解最新脑机接口技术动态和行业资讯。';
}

export async function generateMetadata(props: NewsDetailPageProps): Promise<Metadata> {
  const { locale, id } = await props.params;
  const news = await getNewsDetail(id, locale);

  if (!news) {
    return generateSEOMetadata({ locale }, `/news/${id}`, {
      title: '新闻详情 - BrainCo',
      description: 'BrainCo 新闻详情',
    });
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.brainco.cn';
  const newsUrl = `${baseUrl}/${locale}/news/${id}`;

  // 优先使用 CMS 配置，如果没有则使用自动解析
  const title = news.seoMetaTitle
    ? `${news.seoMetaTitle} - BrainCo`
    : `${news.title} - BrainCo 新闻`;

  const description = news.seoMetaDescription
    ? news.seoMetaDescription
    : extractDescription(news.content, news.title);

  const keywords = news.seoKeywords
    ? news.seoKeywords
    : extractKeywords(news.title, news.content);

  // 处理图片 URL（优先使用 SEO 配置的图片）
  const coverImage = news.coverImage || news.coverImageUrl;
  const ogImageUrl = news.seoOgImage?.startsWith('http')
    ? news.seoOgImage
    : news.seoOgImage
      ? `${baseUrl}${news.seoOgImage}`
      : coverImage?.startsWith('http')
        ? coverImage
        : coverImage
          ? `${baseUrl}${coverImage}`
          : '';

  const twitterImageUrl = news.seoTwitterImage?.startsWith('http')
    ? news.seoTwitterImage
    : news.seoTwitterImage
      ? `${baseUrl}${news.seoTwitterImage}`
      : ogImageUrl;

  // 解析 robots 配置
  const robotsConfig: Metadata['robots'] = news.seoMetaRobots
    ? parseRobotsString(news.seoMetaRobots)
    : {
        index: true,
        follow: true,
        googleBot: {
          'index': true,
          'follow': true,
          'max-video-preview': -1,
          'max-image-preview': 'large' as const,
          'max-snippet': -1,
        },
      };

  // 生成完整的 SEO metadata
  const metadata: Metadata = {
    title,
    description,
    keywords,
    robots: robotsConfig,
    openGraph: {
      title: news.seoOgTitle || news.title,
      description: news.seoOgDescription || description,
      type: 'article',
      url: newsUrl,
      siteName: 'BrainCo',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
      publishedTime: news.newsDate,
      modifiedTime: news.updatedAt || news.newsDate,
      authors: ['BrainCo'],
    },
    twitter: {
      card: 'summary_large_image',
      title: news.seoTwitterTitle || news.title,
      description: news.seoTwitterDescription || description,
      images: [twitterImageUrl],
    },
    alternates: {
      canonical: newsUrl,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN/news/${id}`,
        'en-US': `${baseUrl}/en-US/news/${id}`,
        'zh-TW': `${baseUrl}/zh-TW/news/${id}`,
      },
    },
  };

  return metadata;
}

/**
 * 解析 robots 字符串为 Next.js Metadata 格式
 */
function parseRobotsString(robots: string): Metadata['robots'] {
  const parts = robots.toLowerCase().split(',').map(s => s.trim());
  const index = !parts.includes('noindex');
  const follow = !parts.includes('nofollow');

  return {
    index,
    follow,
    googleBot: {
      index,
      follow,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  };
}

export default async function NewsDetailPage(props: NewsDetailPageProps) {
  const { locale, id } = await props.params;
  setRequestLocale(locale);

  // 获取新闻详情
  const news = await getNewsDetail(id, locale);

  if (!news) {
    // 如果找不到对应语言的新闻，重定向到新闻列表页而不是显示404
    // 这样可以避免在切换语言时出现404错误
    redirect(`/${locale}/news`);
  }

  // 获取其他新闻列表（用于生成 GridMotion 的 items）
  // const allNews = await getNewsList(locale, { pageSize: 100 });

  // 生成新闻详情页的结构化数据
  const newsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': news.title,
    'image': news.coverImage || news.coverImageUrl,
    'datePublished': news.newsDate,
    'dateModified': news.updatedAt || news.newsDate,
    'author': {
      '@type': 'Organization',
      'name': 'BrainCo',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'BrainCo',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.brainco.cn/logo.webp',
      },
    },
    'mainEntityOfPage': {
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
            ? `${news.content.replace(/<[^>]*>/g, '').substring(0, 160)}...`
            : `阅读 ${news.title} 的完整内容`,
          structuredData: newsStructuredData,
        }}
      />
      <NewsDetailContent news={news} locale={locale} />
    </>
  );
}

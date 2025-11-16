'use client';

import type { StrapiNewsItem } from './types';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useMemo } from 'react';
import { marked } from 'marked';
import GridMotion from '@/components/ui/GridMotion/GridMotion.jsx';
import { formatDate } from '@/lib/utils';
import { generateGridItems } from './generateGridItems';

type NewsDetailContentProps = {
  news: StrapiNewsItem;
  locale: string;
  allNews?: StrapiNewsItem[];
};

const EMPTY_NEWS_ARRAY: StrapiNewsItem[] = [];

export default function NewsDetailContent({ news, locale, allNews = EMPTY_NEWS_ARRAY }: NewsDetailContentProps) {
  const router = useRouter();
  const t = useTranslations('News');
  const contentRef = useRef<HTMLDivElement>(null);

  // 生成 GridMotion 所需的 items 数组
  const items = generateGridItems(allNews, news.id);

  // 配置 marked 选项
  useEffect(() => {
    marked.setOptions({
      breaks: true, // 支持换行
      gfm: true, // 支持 GitHub Flavored Markdown
    });
  }, []);

  // 解析 markdown 内容为 HTML
  const parsedContent = useMemo(() => {
    if (!news.content) {
      return '';
    }

    try {
      // 检查内容是否已经是 HTML（包含 HTML 标签）
      const hasHtmlTags = /<[a-z][\s\S]*>/i.test(news.content);

      if (hasHtmlTags) {
        // 如果已经是 HTML，直接返回
        return news.content;
      }

      // 否则解析 markdown
      let html = marked.parse(news.content) as string;

      // 处理 markdown 中的图片链接，确保宽度为 100%，并提取 alt 属性
      html = html.replace(/<img([^>]*)>/gi, (_match, attrs) => {
        // 提取 alt 属性
        const altMatch = attrs.match(/alt=["']([^"']*)["']/i);
        const altText = altMatch ? altMatch[1] : '';
        
        // 如果已经有 style 属性，更新它；否则添加
        let imgTag = _match;
        if (attrs.includes('style=')) {
          imgTag = _match.replace(/style="([^"]*)"/i, (_styleMatch, styleValue) => {
            const newStyle = styleValue.includes('width')
              ? styleValue.replace(/width[^;]*;?/gi, 'width: 100%;')
              : `${styleValue}; width: 100%;`;
            return `style="${newStyle}"`;
          });
        } else {
          imgTag = `<img${attrs} style="width: 100%; height: auto;">`;
        }

        // 如果有 alt 文本，包装在 figure 中并添加 figcaption
        if (altText) {
          return `<figure class="news-media-wrapper">${imgTag}<figcaption class="news-media-caption">${altText}</figcaption></figure>`;
        }
        
        return imgTag;
      });

      // 处理 markdown 中的视频链接，转换为 video 标签（支持 mp4, webm, mov, avi, ogv 等格式）
      const videoExtensions = ['mp4', 'webm', 'mov', 'avi', 'ogv', 'm4v', 'mkv'];
      const videoPattern = new RegExp(
        `<a\\s+([^>]*href=["']([^"']*\\.(${videoExtensions.join('|')}))["'][^>]*)>([^<]*)<\\/a>`,
        'gi',
      );
      html = html.replace(videoPattern, (_match, _attrs, videoUrl, _ext, linkText) => {
        const caption = linkText && linkText.trim() ? linkText.trim() : '';
        const videoTag = `<video src="${videoUrl}" controls style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); margin: 0; display: block;"></video>`;
        
        // 如果有链接文本，包装在 figure 中并添加 figcaption
        if (caption) {
          return `<figure class="news-media-wrapper">${videoTag}<figcaption class="news-media-caption">${caption}</figcaption></figure>`;
        }
        
        // 如果没有标题，也需要包装在 figure 中以保持一致的间距
        return `<figure class="news-media-wrapper">${videoTag}</figure>`;
      });

      return html;
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return news.content; // 如果解析失败，返回原始内容
    }
  }, [news.content]);

  // 处理渲染后的内容，确保视频和图片样式正确
  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    // 处理所有图片，确保宽度为 100%，并添加标题（如果有 alt）
    const images = contentRef.current.querySelectorAll<HTMLImageElement>('img');
    images.forEach((img) => {
      // 如果图片已经在 figure 中，跳过
      if (img.closest('figure.news-media-wrapper')) {
        return;
      }

      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';

      // 如果有 alt 文本，包装在 figure 中
      const altText = img.getAttribute('alt');
      if (altText && altText.trim()) {
        const figure = document.createElement('figure');
        figure.className = 'news-media-wrapper';
        
        const figcaption = document.createElement('figcaption');
        figcaption.className = 'news-media-caption';
        figcaption.textContent = altText;
        
        img.parentNode?.insertBefore(figure, img);
        figure.appendChild(img);
        figure.appendChild(figcaption);
      }
    });

    // 处理所有视频，确保宽度为 100%，并检查是否有标题
    const videos = contentRef.current.querySelectorAll<HTMLVideoElement>('video');
    videos.forEach((video) => {
      // 如果视频已经在 figure 中，跳过
      if (video.closest('figure.news-media-wrapper')) {
        return;
      }

      video.style.width = '100%';
      video.style.height = 'auto';
      video.style.display = 'block';

      // 检查视频是否有 title 属性，如果没有在 figure 中，则包装
      if (!video.closest('figure.news-media-wrapper')) {
        const title = video.getAttribute('title');
        
        const figure = document.createElement('figure');
        figure.className = 'news-media-wrapper';
        
        if (title && title.trim()) {
          const figcaption = document.createElement('figcaption');
          figcaption.className = 'news-media-caption';
          figcaption.textContent = title;
          
          video.parentNode?.insertBefore(figure, video);
          figure.appendChild(video);
          figure.appendChild(figcaption);
        } else {
          // 即使没有标题，也包装在 figure 中以保持一致的间距
          video.parentNode?.insertBefore(figure, video);
          figure.appendChild(video);
        }
      }
    });

    // 处理剩余的视频链接（如果还有）- 支持多种视频格式
    const videoExtensions = ['mp4', 'webm', 'mov', 'avi', 'ogv', 'm4v', 'mkv'];
    const videoLinkSelectors = videoExtensions.map((ext) => `a[href$=".${ext}"]`).join(', ');
    const videoLinks = contentRef.current.querySelectorAll<HTMLAnchorElement>(videoLinkSelectors);
    videoLinks.forEach((link: HTMLAnchorElement) => {
      const videoUrl = link.getAttribute('href');
      if (!videoUrl) {
        return;
      }

      const linkText = link.textContent?.trim() || '';
      
      const video = document.createElement('video');
      video.src = videoUrl;
      video.controls = true;
      video.style.width = '100%';
      video.style.height = 'auto';
      video.style.borderRadius = '8px';
      video.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
      video.style.margin = '0';
      video.style.display = 'block';

      // 包装在 figure 中
      const figure = document.createElement('figure');
      figure.className = 'news-media-wrapper';
      
      // 如果有链接文本，添加 figcaption
      if (linkText) {
        const figcaption = document.createElement('figcaption');
        figcaption.className = 'news-media-caption';
        figcaption.textContent = linkText;
        figure.appendChild(video);
        figure.appendChild(figcaption);
      } else {
        figure.appendChild(video);
      }
      
      link.replaceWith(figure);
    });
  }, [parsedContent]);

  return (
    <main className="min-h-screen bg-white">
      {/* 返回按钮 */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center px-4 py-4 md:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push(`/${locale}/news`)}
            className="flex items-center gap-2 text-[#666666] transition-colors hover:text-[#333333]"
            aria-label={t('back_to_list') || '返回新闻列表'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-lg">{t('back_to_list') || '返回新闻列表'}</span>
          </motion.button>
        </div>
      </div>

      <div className="hidden md:block">
      <GridMotion items={items as any} />
      </div>

      {/* 新闻内容 */}
      <article className="mx-auto max-w-[90vw] md:max-w-[72vw] px-4 pt-16 pb-16 md:px-8 md:pt-24">
        {/* 标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-3xl leading-tight font-semibold text-[#333333] md:mb-8 md:text-4xl lg:text-5xl"
        >
          {news.title}
        </motion.h1>

        {/* 元信息 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center gap-4 text-[#666] md:mb-12"
        >
          <time className="text-base md:text-2xl">
            {formatDate(news.newsDate, 'YYYY年MM月DD日')}
          </time>
          <span className="text-base md:text-xl">•</span>
          <span className="text-base md:text-xl">BrainCo</span>
        </motion.div>

        {/* 封面图片 */}
        {news.coverImage && (
          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-[12px] md:mb-12"
          >
            <Image
              src={news.coverImage}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </motion.figure>
        )}

        {/* 正文内容 */}
        {news.content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            ref={contentRef}
            className="news-content"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        )}

        {/* 如果没有内容，显示提示 */}
        {!news.content && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg bg-[#f8f9fa] p-16 text-center text-[#666666]"
          >
            <p className="text-xl">
              {t('no_content') || '该新闻暂无正文内容，请访问微信公众号查看完整内容。'}
            </p>
            {news.externalUrl && (
              <motion.a
                href={news.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-block rounded-lg bg-[#2563eb] px-6 py-3 !text-white transition-colors hover:bg-[#1d4ed8]"
              >
                {t('open_wechat') || '前往微信公众号阅读'}
              </motion.a>
            )}
          </motion.div>
        )}

        {/* 底部操作栏 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e7eb] pt-8"
        >
          <button
            type="button"
            onClick={() => router.push(`/${locale}/news`)}
            className="flex items-center gap-2 text-[#666666] transition-colors hover:text-[#333333]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-lg md:text-xl">{t('back_to_list') || '返回新闻列表'}</span>
          </button>
          {news.externalUrl && (
            <a
              href={news.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#2563eb] px-4 py-2 text-[#2563eb] hover:!text-[#1d4ed8] transition-colors hover:bg-[#f0f7ff]"
            >
              <svg
                className="h-6 w-7"
                fill="currentColor"
                viewBox="0 0 28 28"
              >
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.595-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm6.673 3.036c-1.693 0-3.22.679-4.337 1.77-1.833 1.43-2.737 3.734-1.873 6.204.12.342.208.693.293 1.04.062.255.12.51.186.762.054.21.11.42.174.628.423 1.386 1.038 2.71 1.73 3.957a.744.744 0 0 0 .953.352l2.312-1.353a.864.864 0 0 1 .717-.098c.92.277 1.872.42 2.836.42 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342zm-1.435 4.554c.52 0 .94.43.94.96a.95.95 0 0 1-.94.96.95.95 0 0 1-.94-.96c0-.53.42-.96.94-.96zm4.598 0c.52 0 .94.43.94.96a.95.95 0 0 1-.94.96.95.95 0 0 1-.94-.96c0-.53.42-.96.94-.96z" />
              </svg>
              <span>{t('open_wechat') || '微信公众号阅读'}</span>
            </a>
          )}
        </motion.div>
      </article>
    </main>
  );
}

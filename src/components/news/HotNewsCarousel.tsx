'use client';

import type { NewsItem } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { createPortal } from 'react-dom';
import { SimpleCarousel } from '@/components/ui/SimpleCarousel';

type HotNewsCarouselProps = {
  hotNews: NewsItem[];
  isMobile?: boolean;
};

export default function HotNewsCarousel({ hotNews, isMobile = false }: HotNewsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [arrowTop, setArrowTop] = useState<string>('50%');
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('News');

  // 计算箭头按钮相对于图片容器的位置
  useEffect(() => {
    const updateArrowPosition = () => {
      if (!carouselRef.current) {
        return;
      }

      // 查找SimpleCarousel的实际容器（第一个子元素）
      const carouselContainer = carouselRef.current.querySelector('[class*="relative overflow-hidden"]');
      if (!carouselContainer || !(carouselContainer instanceof HTMLElement)) {
        return;
      }

      // 查找第一个图片容器
      const firstItem = carouselContainer.querySelector('[class*="aspect-[16/9]"]');
      if (firstItem instanceof HTMLElement) {
        const carouselRect = carouselContainer.getBoundingClientRect();
        const imageRect = firstItem.getBoundingClientRect();

        // 计算图片容器的中心点相对于轮播容器的位置
        const imageCenter = imageRect.top + imageRect.height / 2 - carouselRect.top;
        setArrowTop(`${imageCenter}px`);
      }
    };

    updateArrowPosition();
    window.addEventListener('resize', updateArrowPosition);

    // 使用 ResizeObserver 监听容器大小变化
    let resizeObserver: ResizeObserver | null = null;
    if (carouselRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateArrowPosition();
      });
      resizeObserver.observe(carouselRef.current);
    }

    // 延迟执行以确保图片已加载和DOM渲染完成
    const timer1 = setTimeout(updateArrowPosition, 100);
    const timer2 = setTimeout(updateArrowPosition, 300);
    const timer3 = setTimeout(updateArrowPosition, 500);

    return () => {
      window.removeEventListener('resize', updateArrowPosition);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [hotNews]);

  if (hotNews.length === 0) {
    return null;
  }

  const [showOptionsMap, setShowOptionsMap] = useState<Record<number, boolean>>({});
  const containerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // 点击外部区域关闭选项
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(showOptionsMap).forEach(([indexStr, isOpen]) => {
        if (isOpen) {
          const index = Number(indexStr);
          const container = containerRefs.current[index];
          if (container && !container.contains(event.target as Node)) {
            setShowOptionsMap(prev => ({ ...prev, [index]: false }));
          }
        }
      });
    };

    const hasOpenOptions = Object.values(showOptionsMap).some(Boolean);
    if (hasOpenOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptionsMap]);

  const handleImageClick = (item: NewsItem, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // 检查是否是拖动操作
    const target = e.currentTarget;
    const isDragging = target.closest('[data-dragging="true"]');
    if (isDragging) {
      return;
    }

    // 如果有 documentId，显示选项；否则直接跳转外部链接
    if (item.documentId) {
      setShowOptionsMap(prev => ({ ...prev, [index]: true }));
    } else {
      window.open(item.url || item.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenInSite = (item: NewsItem, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOptionsMap(prev => ({ ...prev, [index]: false }));
    if (item.documentId) {
      router.push(`/${locale}/news/${item.documentId}`);
    }
  };

  const handleOpenWeChat = (item: NewsItem, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOptionsMap(prev => ({ ...prev, [index]: false }));
    window.open(item.url || item.externalUrl, '_blank', 'noopener,noreferrer');
  };

  const carouselItems = hotNews.map((item, index) => (
    <div
      key={`${item.url}-${index}`}
      className="block w-full"
      ref={(el) => {
        containerRefs.current[index] = el;
      }}
    >
      <div className="mx-auto w-full max-w-full">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px] cursor-pointer"
          onClick={(e) => handleImageClick(item, index, e)}
        >
          <Image
            src={item.img}
            alt={`${item.title} - 热点新闻配图 / Hot news image`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 90vw, 1200px"
            priority={index === 0}
            draggable={false}
            onClick={(e) => handleImageClick(item, index, e)}
            style={{ cursor: 'pointer' }}
          />
          {/* PC端：卡片内覆盖层 */}
          {!isMobile && (
            <AnimatePresence>
              {showOptionsMap[index] && item.documentId && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowOptionsMap(prev => ({ ...prev, [index]: false }));
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute inset-0 z-20 flex items-center justify-center gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => handleOpenInSite(item, index, e)}
                      className="flex items-center justify-center gap-3 rounded-[10px] bg-[#2563eb] px-6 py-4 text-lg font-medium text-white transition-colors hover:bg-[#1d4ed8]"
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
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      {t('open_in_site') || '站内打开'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => handleOpenWeChat(item, index, e)}
                      className="flex items-center justify-center gap-3 rounded-[10px] border-2 border-[#2563eb] bg-white px-6 py-4 text-lg font-medium text-[#2563eb] transition-colors hover:bg-[#f0f7ff]"
                    >
                      <svg
                        className="h-6 w-7"
                        fill="currentColor"
                        viewBox="0 0 28 28"
                      >
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.595-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm6.673 3.036c-1.693 0-3.22.679-4.337 1.77-1.833 1.43-2.737 3.734-1.873 6.204.12.342.208.693.293 1.04.062.255.12.51.186.762.054.21.11.42.174.628.423 1.386 1.038 2.71 1.73 3.957a.744.744 0 0 0 .953.352l2.312-1.353a.864.864 0 0 1 .717-.098c.92.277 1.872.42 2.836.42 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342zm-1.435 4.554c.52 0 .94.43.94.96a.95.95 0 0 1-.94.96.95.95 0 0 1-.94-.96c0-.53.42-.96.94-.96zm4.598 0c.52 0 .94.43.94.96a.95.95 0 0 1-.94.96.95.95 0 0 1-.94-.96c0-.53.42-.96.94-.96z" />
                      </svg>
                      {t('open_wechat') || '微信公众号打开'}
                    </motion.button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          )}
        </div>
        <div
          className={`text-center ${
            isMobile ? 'px-[2vw] pt-[2.5vw]' : 'px-[2vw] pt-[24px] md:px-[30px]'
          }`}
        >
          <div
            className={`font-medium text-[#333333] ${
              isMobile ? 'text-fluid-base mb-[1vw]' : 'text-fluid-2xl mb-[1.5vw]'
            }`}
          >
            {item.title}
          </div>
          <div className={`${isMobile ? 'text-fluid-lg' : 'text-fluid-xl'} mb-0 text-[#999999] xl:mb-[1vw]`}>{item.time}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <motion.section
        initial={{ opacity: 0.5, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ duration: 0.3 }}
        className="mb-[2vw] bg-[#FAFAFA] pb-[3vw] md:mb-[40px] md:pb-[40px]"
        aria-label="热点新闻轮播 / Hot news carousel"
      >
        <div ref={carouselRef}>
          <SimpleCarousel
            items={carouselItems}
            autoplay
            autoplayDelay={5000}
            className="w-full"
            showIndicators
            showArrows
            enableDrag={false}
            style={{ '--carousel-arrow-top': arrowTop } as React.CSSProperties}
          />
        </div>
      </motion.section>

      {/* 移动端：全局遮罩弹窗（使用 Portal 渲染到 body） */}
      {isMobile && typeof window !== 'undefined' && hotNews.map((item, index) => {
        if (!showOptionsMap[index] || !item.documentId) {
          return null;
        }
        return createPortal(
          <AnimatePresence key={`modal-${index}-${item.documentId}`}>
            {showOptionsMap[index] && item.documentId && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOptionsMap(prev => ({ ...prev, [index]: false }));
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="fixed left-1/2 top-1/2 z-[60] w-[90%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white p-8 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="mb-6 text-center text-2xl font-medium text-[#333333]">
                    {t('open_modal_title') || '选择打开方式'}
                  </h3>
                  <div className="flex flex-col gap-4">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => handleOpenInSite(item, index, e)}
                      className="flex items-center justify-center gap-3 rounded-[10px] bg-[#2563eb] px-6 py-4 text-lg font-medium !text-white transition-colors hover:bg-[#1d4ed8]"
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
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      {t('open_in_site') || '站内打开'}
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => handleOpenWeChat(item, index, e)}
                      className="flex items-center justify-center gap-3 rounded-[10px] border-2 border-[#2563eb] bg-white px-6 py-4 text-lg font-medium text-[#2563eb] transition-colors hover:bg-[#f0f7ff]"
                    >
                      <svg
                        className="h-6 w-7"
                        fill="currentColor"
                        viewBox="0 0 28 28"
                      >
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.595-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm6.673 3.036c-1.693 0-3.22.679-4.337 1.77-1.833 1.43-2.737 3.734-1.873 6.204.12.342.208.693.293 1.04.062.255.12.51.186.762.054.21.11.42.174.628.423 1.386 1.038 2.71 1.73 3.957a.744.744 0 0 0 .953.352l2.312-1.353a.864.864 0 0 1 .717-.098c.92.277 1.872.42 2.836.42 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342zm-1.435 4.554c.52 0 .94.43.94.96a.95.95 0 0 1-.94.96.95.95 0 0 1-.94-.96c0-.53.42-.96.94-.96zm4.598 0c.52 0 .94.43.94.96a.95.95 0 0 1-.94.96.95.95 0 0 1-.94-.96c0-.53.42-.96.94-.96z" />
                      </svg>
                      {t('open_wechat') || '微信公众号打开'}
                    </motion.button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowOptionsMap(prev => ({ ...prev, [index]: false }));
                    }}
                    className="absolute right-4 top-4 text-[#999999] transition-colors hover:text-[#333333]"
                    aria-label="关闭"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        );
      })}
    </>
  );
}

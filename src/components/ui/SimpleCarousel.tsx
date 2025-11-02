'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const TRANSITION_OPTIONS = {
  type: 'tween' as const,
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1] as const,
};

type SimpleCarouselProps = {
  items: ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  enableDrag?: boolean;
  style?: React.CSSProperties;
};

export function SimpleCarousel({
  items,
  autoplay = false,
  autoplayDelay = 3000,
  className = '',
  showIndicators = true,
  showArrows = false,
  enableDrag = true,
  style,
}: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 检测移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (autoplay && !isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [autoplay, autoplayDelay, items.length, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }

    // 延迟重置拖动状态，防止拖动后立即触发点击
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={enableDrag ? 'flex cursor-grab active:cursor-grabbing' : 'flex'}
        drag={enableDrag ? 'x' : false}
        dragConstraints={enableDrag ? { left: 0, right: 0 } : undefined}
        dragElastic={enableDrag ? 0.1 : undefined}
        onDragStart={enableDrag ? handleDragStart : undefined}
        onDragEnd={enableDrag ? handleDragEnd : undefined}
        animate={!isDragging ? { x: `-${currentIndex * 100}%` } : undefined}
        transition={TRANSITION_OPTIONS}
        data-dragging={isDragging ? 'true' : undefined}
      >
        {items.map((item, index) => (
          <div
            key={`carousel-item-${index}`}
            className="w-full flex-shrink-0"
            style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* 左右切换按钮 */}
      {showArrows && items.length > 1 && (
        <>
          {/* 左箭头 - 相对于图片容器垂直居中 */}
          <motion.button
            type="button"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobile || isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-30 md:h-14 md:w-14"
            style={{
              // 使用 CSS 变量来偏移，相对于图片容器（aspect-[16/9]）的中心
              // 如果没有设置变量，则相对于整个容器居中（向后兼容）
              top: 'var(--carousel-arrow-top, 50%)',
            }}
            aria-label="上一张"
          >
            <svg
              className="h-6 w-6 text-white md:h-7 md:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* 右箭头 - 相对于图片容器垂直居中 */}
          <motion.button
            type="button"
            onClick={goToNext}
            disabled={currentIndex === items.length - 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobile || isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-30 md:h-14 md:w-14"
            style={{
              // 使用 CSS 变量来偏移，相对于图片容器（aspect-[16/9]）的中心
              top: 'var(--carousel-arrow-top, 50%)',
            }}
            aria-label="下一张"
          >
            <svg
              className="h-6 w-6 text-white md:h-7 md:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </>
      )}

      {showIndicators && items.length > 1 && (
        <div className="mt-5 flex w-full justify-center">
          <div className="flex gap-2">
            {items.map((_, index) => (
              <motion.button
                key={`carousel-indicator-${index}`}
                type="button"
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-6 bg-[#666666]'
                    : 'bg-[#d1d5db]'
                }`}
                animate={{
                  scale: currentIndex === index ? 1 : 0.8,
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.3 }}
                aria-label={`跳转到第 ${index + 1} 页`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

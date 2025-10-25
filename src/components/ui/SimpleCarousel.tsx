'use client';

import type { ReactNode } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

type SimpleCarouselProps = {
  items: ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  showIndicators?: boolean;
};

export function SimpleCarousel({
  items,
  autoplay = false,
  autoplayDelay = 3000,
  className = '',
  showIndicators = true,
}: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [autoplay, autoplayDelay, items.length]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={SPRING_OPTIONS}
      >
        {items.map((item, index) => (
          <motion.div
            key={`carousel-item-${index}`}
            className="w-full flex-shrink-0"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

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

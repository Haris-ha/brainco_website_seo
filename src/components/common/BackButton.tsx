'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

/**
 * 返回按钮组件
 * 用于自定义导航栏的返回功能
 */
export function BackButton() {
  const router = useRouter();
  const t = useTranslations('Checkout');

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.button
      type="button"
      onClick={handleBack}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex items-center text-gray-700 transition-colors hover:text-gray-900"
      aria-label="返回上一页 / Back to previous page"
    >
      <svg
        className="h-5 w-5 md:h-7 md:w-7"
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
      <span className="font-medium text-gray-800" style={{ fontSize: 'clamp(14px, 1.5vw, 1.5rem)' }}>
        {t('back')}
      </span>
    </motion.button>
  );
}


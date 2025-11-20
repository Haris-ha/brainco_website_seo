'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/libs/I18nNavigation';

export function CartEmpty() {
  const t = useTranslations('Cart');
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-[60vh] flex-col items-center justify-center"
      aria-labelledby="cart-empty-title"
    >
      <motion.h1
        id="cart-empty-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-fluid-5xl mb-8 text-center font-medium text-[#333] md:mb-16"
      >
        {t('empty_title')}
      </motion.h1>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/')}
        aria-label={t('continue_shopping')}
        className="text-fluid-xl cursor-target h-[72px] w-[260px] rounded-[41px] bg-[rgba(0,0,0,0.16)] font-medium !text-white shadow-lg transition-all hover:bg-[rgba(0,0,0,0.24)] md:h-[72px] md:w-[260px]"
      >
        {t('continue_shopping')}
      </motion.button>
    </motion.section>
  );
}

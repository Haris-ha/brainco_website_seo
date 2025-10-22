'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/libs/I18nNavigation';

interface StepSuccessProps {
  orderNumber: string;
}

export function StepSuccess({ orderNumber }: StepSuccessProps) {
  const t = useTranslations('Checkout');
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[600px] text-center"
    >
      {/* 成功图标 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
        className="mb-8 flex justify-center"
      >
        <div className="flex size-[120px] items-center justify-center rounded-full bg-green-100 md:size-[160px]">
          <CheckCircle className="size-[80px] text-green-500 md:size-[100px]" />
        </div>
      </motion.div>

      {/* 成功标题 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-fluid-5xl mb-4 font-medium text-[#333]"
      >
        {t('order_success')}
      </motion.h2>

      {/* 订单号 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-8 rounded-lg bg-[#f9f9f9] p-6"
      >
        <p className="text-fluid-base mb-2 text-[#595757]">
          {t('order_number')}
        </p>
        <p className="text-fluid-2xl font-mono font-medium text-[#4F68D2]">
          {orderNumber}
        </p>
      </motion.div>

      {/* 操作按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col gap-4 md:flex-row md:justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/')}
          className="text-fluid-xl cursor-target h-[50px] w-full rounded-[25px] border-2 border-[#4F68D2] bg-white font-medium text-[#4F68D2] transition-all hover:bg-[#4F68D2] hover:text-white md:h-[82px] md:w-[260px] md:rounded-[41px]"
        >
          {t('Cart.continue_shopping')}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(`/orders/${orderNumber}`)}
          className="text-fluid-xl cursor-target h-[50px] w-full rounded-[25px] bg-[#4F68D2] font-medium text-white shadow-lg transition-all hover:bg-[#3d52a8] md:h-[82px] md:w-[260px] md:rounded-[41px]"
        >
          {t('view_order')}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}


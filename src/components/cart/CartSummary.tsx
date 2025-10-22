'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/libs/I18nNavigation';

type CartSummaryProps = {
  totalPrice: number;
  hasCheckedItems: boolean;
};

export function CartSummary({ totalPrice, hasCheckedItems }: CartSummaryProps) {
  const t = useTranslations('Cart');
  const router = useRouter();

  const formattedTotal = (totalPrice / 100).toFixed(2);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-8 border-t border-dashed border-[#707070] pt-6 md:mt-12 md:pt-8"
    >
      {/* 价格明细 */}
      <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
        {/* 左侧价格信息 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between md:flex-col md:items-start md:gap-1">
            <span className="text-fluid-xl md:text-fluid-3xl text-[#333]">
              {t('total')}
            </span>
            <span className="text-fluid-2xl md:text-fluid-6xl font-medium text-[#333]">
              ¥
              {' '}
              {formattedTotal}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between md:justify-start md:gap-2">
              <span className="text-fluid-base md:text-fluid-xl text-[#595757]">
                {t('tax_included')}
              </span>
            </div>
            <div className="flex items-center justify-between md:justify-start md:gap-2">
              <span className="text-fluid-base md:text-fluid-xl text-[#595757]">
                {t('shipping')}
              </span>
              <span className="text-fluid-base md:text-fluid-xl text-[#595757]">
                {t('shipping_free')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 结算按钮 */}
      <div className="flex justify-center md:justify-end">
        <motion.button
          whileHover={hasCheckedItems ? { scale: 1.05 } : {}}
          whileTap={hasCheckedItems ? { scale: 0.95 } : {}}
          onClick={handleCheckout}
          disabled={!hasCheckedItems}
          className={`text-fluid-2xl md:text-fluid-2xl cursor-target h-[28px] w-[80px] rounded-[14px] font-medium text-white shadow-lg transition-all md:h-[64px] md:w-[160px] md:rounded-[32px] ${
            hasCheckedItems
              ? 'bg-[#4F68D2] hover:bg-[#3d52a8]'
              : 'cursor-not-allowed bg-[rgba(0,0,0,0.16)]'
          }`}
        >
          {t('checkout')}
        </motion.button>
      </div>
    </motion.div>
  );
}

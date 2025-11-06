'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/libs/I18nNavigation';

type CartSummaryProps = {
  totalPrice: number;
  hasCheckedItems: boolean;
};

/**
 * 购物车结算汇总组件
 * @param props - 组件属性
 * @param props.totalPrice - 总价格（分为单位）
 * @param props.hasCheckedItems - 是否有选中的商品
 */
export function CartSummary({ totalPrice, hasCheckedItems }: CartSummaryProps) {
  const t = useTranslations('Cart');
  const router = useRouter();

  const formattedTotal = (totalPrice / 100).toFixed(2);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-8 pt-6 md:pt-8"
      aria-labelledby="cart-summary-title"
    >
      <h2 id="cart-summary-title" className="sr-only">{t('total')}</h2>
      {/* 快递配送信息 */}
      <div className="mb-4 md:mb-8">
        <div className="flex items-center justify-between md:justify-start md:gap-2">
          <span className="text-fluid-lg md:text-fluid-2xl text-[#595757]">
            {t('shipping')}
          </span>
          <span className="text-fluid-lg md:text-fluid-xl font-medium text-[#4F68D2]">
            {t('shipping_free')}
          </span>
        </div>
      </div>

      {/* 价格明细 */}
      <div className="mb-4 flex flex-col gap-2 md:mb-8">
        <div className="flex items-baseline justify-between md:items-center">
          <span className="text-fluid-xl md:text-fluid-3xl text-[#333]">
            {t('total')}
          </span>
          <span className="text-fluid-2xl md:text-fluid-6xl font-medium text-[#333]">
            ¥
            {' '}
            {formattedTotal}
          </span>
        </div>

        <div className="flex items-center justify-end">
          <span className="text-fluid-lg md:text-fluid-lg text-[#999]">
            {t('tax_included')}
          </span>
        </div>
      </div>

      {/* 结算按钮 */}
      <div className="mb-8 flex justify-center md:mb-12 md:justify-end">
        <motion.button
          type="button"
          whileHover={hasCheckedItems ? { scale: 1.05 } : {}}
          whileTap={hasCheckedItems ? { scale: 0.95 } : {}}
          onClick={handleCheckout}
          disabled={!hasCheckedItems}
          aria-label={hasCheckedItems ? t('checkout') : `${t('checkout')} - ${t('selected_items', { count: 0 })}`}
          className={`text-fluid-xl  cursor-target h-[36px] w-[120px] rounded-[28px] font-medium text-white shadow-lg transition-all md:h-[48px] md:w-[160px] md:rounded-[32px] ${
            hasCheckedItems
              ? 'bg-[#4F68D2] hover:bg-[#3d52a8]'
              : 'cursor-not-allowed bg-[rgba(0,0,0,0.16)]'
          }`}
        >
          {t('checkout')}
        </motion.button>
      </div>

      {/* 版权信息 */}
      <div className="border-t border-dashed border-[#e0e0e0] pt-6 text-center">
        <p className="text-fluid-lg md:text-fluid-lg flex flex-col items-center gap-1 text-[#444] md:flex-row md:justify-center md:gap-3">
          <span>{t('copyright')}</span>
          <span className="hidden md:inline">·</span>
          <span>{t('privacy_legal')}</span>
          <span className="hidden md:inline">·</span>
          <span>{t('icp_number')}</span>
        </p>
      </div>
    </motion.section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CartEmpty } from '@/components/cart/CartEmpty';
import { CartList } from '@/components/cart/CartList';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const t = useTranslations('Cart');
  const router = useRouter();
  const {
    items,
    toggleItemCheck,
    toggleAllCheck,
    updateQuantity,
    removeFromCart,
    getCheckedTotalPrice,
    checkedItemsCount,
  } = useCart();

  const hasItems = items.length > 0;
  const hasCheckedItems = checkedItemsCount > 0;
  const checkedTotalPrice = getCheckedTotalPrice();

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Logo导航栏 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 lg:px-12"
      >
        <div className="flex items-center gap-1 lg:gap-4">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/icon.webp"
            alt="BrainCo 公司 Logo - 脑机接口技术公司 / BrainCo Company Logo - Brain-Computer Interface Technology Company"
            width={180}
            height={80}
            className="h-auto w-[100px] xl:w-[180px]"
            priority
          />
          <div className="relative flex items-center gap-2 pl-3 lg:pl-6">
            <div className="absolute top-1/2 left-0 h-[12px] w-[2px] -translate-y-1/2 bg-gray-800 lg:h-[16px]" />
            <span className="font-medium text-gray-800" style={{ fontSize: 'clamp(14px, 1.5vw, 1.5rem)' }}>
              {t('page_title')}
            </span>
          </div>
        </div>
        {/* 返回按钮 */}
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
            className="h-5 w-5 lg:h-7 lg:w-7"
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
      </motion.header>

      {/* 页面容器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[80vw] py-8 lg:max-w-[70vw]"
      >
        {hasItems
          ? (
              <>
                <CartList
                  items={items}
                  onToggleCheck={toggleItemCheck}
                  onToggleAllCheck={toggleAllCheck}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
                <CartSummary
                  totalPrice={checkedTotalPrice}
                  hasCheckedItems={hasCheckedItems}
                />
              </>
            )
          : (
              <CartEmpty />
            )}
      </motion.div>
    </main>
  );
}

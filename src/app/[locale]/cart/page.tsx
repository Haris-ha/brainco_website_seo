'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { CartEmpty } from '@/components/cart/CartEmpty';
import { CartList } from '@/components/cart/CartList';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const t = useTranslations('Cart');
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

  return (
    <div className="min-h-screen bg-white">
      {/* Logo导航栏 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 flex items-center border-b border-gray-100 bg-white px-6 py-4 md:px-12"
      >
        <div className="flex items-center gap-1 md:gap-8">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/icon.webp"
            alt="BrainCo"
            width={180}
            height={80}
            className="h-auto w-[100px] lg:w-[180px]"
            priority
          />
          <div className="relative flex items-center gap-2 pl-3 md:pl-6">
            <div className="absolute top-1/2 left-0 h-[12px] w-[2px] -translate-y-1/2 bg-gray-800 md:h-[16px]" />
            <span className="font-medium text-gray-800" style={{ fontSize: 'clamp(14px, 1.5vw, 1.5rem)' }}>
              {t('page_title')}
            </span>
          </div>
        </div>
      </motion.header>

      {/* 页面容器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[80vw] py-8 md:max-w-[70vw]"
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
    </div>
  );
}

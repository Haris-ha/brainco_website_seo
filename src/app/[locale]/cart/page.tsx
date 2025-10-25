'use client';

import { motion } from 'framer-motion';
import { CartEmpty } from '@/components/cart/CartEmpty';
import { CartList } from '@/components/cart/CartList';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
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
      {/* 页面容器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[80vw] py-8 md:max-w-[70vw] md:py-24"
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

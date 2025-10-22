'use client';

import type { CartItem as CartItemType } from '@/types/cart';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CartItem } from './CartItem';

type CartListProps = {
  items: CartItemType[];
  onToggleCheck: (id: number | string) => void;
  onToggleAllCheck: (checked: boolean) => void;
  onUpdateQuantity: (id: number | string, quantity: number) => void;
  onRemove: (id: number | string) => void;
};

export function CartList({
  items,
  onToggleCheck,
  onToggleAllCheck,
  onUpdateQuantity,
  onRemove,
}: CartListProps) {
  const t = useTranslations('Cart');

  const allChecked = items.length > 0 && items.every(item => item.checked);
  const checkedCount = items.filter(item => item.checked).length;

  return (
    <div className="w-full">
      {/* 标题和全选 */}
      <div className="mb-4 flex items-center justify-between border-b border-dashed border-[#707070] pb-4 md:mb-8 md:pb-6">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl md:text-fluid-5xl font-medium text-[#333]"
        >
          {t('title')}
        </motion.h1>

        {/* 全选（Desktop） */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden items-center gap-3 md:flex"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onToggleAllCheck(!allChecked)}
            className={`cursor-target flex size-[24px] cursor-pointer items-center justify-center rounded-[4px] border transition-all ${
              allChecked
                ? 'border-[#4F68D2] bg-[#4F68D2]'
                : 'border-[#707070] bg-white'
            }`}
          >
            {allChecked && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="size-[12px] text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            )}
          </motion.div>
          <span className="text-fluid-xl text-[#333]">{t('select_all')}</span>
        </motion.div>
      </div>

      {/* 已选商品数量提示（Mobile） */}
      {checkedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-center md:hidden"
        >
          <span className="text-fluid-base text-[#595757]">
            {t('selected_items', { count: checkedCount })}
          </span>
        </motion.div>
      )}

      {/* 商品列表 */}
      <ul className="space-y-4 md:space-y-6">
        <AnimatePresence mode="popLayout">
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onToggleCheck={onToggleCheck}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

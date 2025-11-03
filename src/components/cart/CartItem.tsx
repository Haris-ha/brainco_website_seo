'use client';

import type { CartItem as CartItemType } from '@/types/cart';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { memo } from 'react';

type CartItemProps = {
  item: CartItemType;
  onToggleCheck: (id: number | string) => void;
  onUpdateQuantity: (id: number | string, quantity: number) => void;
  onRemove: (id: number | string) => void;
};

export const CartItem = memo(({
  item,
  onToggleCheck,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  const t = useTranslations('Cart');

  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = (item.price * item.quantity) / 100;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4  border-b border-dashed border-[#707070] pb-4 md:flex-row md:items-center md:justify-between md:pb-6"
    >
      {/* 复选框和商品信息 */}
      <div className="flex items-center gap-4 md:flex-1 md:items-center md:gap-8">
        {/* 复选框 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggleCheck(item.id)}
          className={`cursor-target mt-1 flex size-[14px] shrink-0 cursor-pointer items-center justify-center rounded-[2px] border transition-all md:mt-0 md:size-[24px] md:rounded-[4px] ${
            item.checked
              ? 'border-[#4F68D2] bg-[#4F68D2]'
              : 'border-[#707070] bg-white'
          }`}
        >
          {item.checked && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="size-[12px] text-white md:size-[24px]"
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

        {/* 商品图片 */}
        <div className="relative size-[44px] shrink-0 overflow-hidden rounded md:size-[100px]">
          <Image
            src={item.pictureUrl}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        {/* 商品名称（Mobile） */}
        <div className="flex flex-1 flex-col md:hidden">
          <p className="text-fluid-base text-[#595757]">{item.name}</p>
        </div>

        {/* 商品名称（Desktop） */}
        <div className="hidden flex-1 md:block">
          <p className="text-fluid-xl text-[#595757]">{item.name}</p>
        </div>
      </div>

      {/* 数量和价格（Desktop） */}
      <div className="hidden items-center gap-8 md:flex">
        {/* 数量调整器 */}
        <div className="flex items-center gap-4">
          <span className="text-fluid-xl text-[#595757]">{t('quantity')}</span>
          <div className="flex h-[40px] overflow-hidden rounded-[5px] border border-[#707070]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(-1)}
              disabled={item.quantity <= 1}
              className="cursor-target flex w-[44px] items-center justify-center bg-[#F4F4F4] text-[25px] leading-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              −
            </motion.button>
            <div className="flex w-[44px] items-center justify-center bg-white text-[18px]">
              {item.quantity}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(1)}
              className="cursor-target flex w-[44px] items-center justify-center bg-[#F4F4F4] text-[25px] leading-none"
            >
              +
            </motion.button>
          </div>
        </div>

        {/* 单价 */}
        <div className="text-fluid-2xl w-[80px] text-center text-[#595757]">
          ¥
          {(item.price / 100).toFixed(2)}
        </div>

        {/* 删除按钮 */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(item.id)}
          className="cursor-target size-[24px] cursor-pointer"
          aria-label={t('delete')}
        >
          <Trash2 className="size-full text-[#707070] transition-colors hover:text-red-500" />
        </motion.button>
      </div>

      {/* 数量、价格和删除（Mobile） */}
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center gap-4">
          {/* 价格 */}
          <span className="text-fluid-lg text-[#595757]">
            ¥
            {(item.price / 100).toFixed(2)}
          </span>

          {/* 数量调整器 */}
          <div className="ml-4 flex h-[20px] overflow-hidden rounded-[5px] border border-[#707070]">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(-1)}
              disabled={item.quantity <= 1}
              className="flex w-[20px] items-center justify-center bg-[#F4F4F4] text-[12px] leading-none disabled:opacity-50"
            >
              −
            </motion.button>
            <div className="flex w-[20px] items-center justify-center bg-white text-[12px]">
              {item.quantity}
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(1)}
              className="flex w-[20px] items-center justify-center bg-[#F4F4F4] text-[12px] leading-none"
            >
              +
            </motion.button>
          </div>
        </div>

        {/* 删除按钮（Mobile） */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(item.id)}
          className="size-[18px]"
          aria-label={t('delete')}
        >
          <Trash2 className="size-full text-[#707070]" />
        </motion.button>
      </div>

      {/* 小计（Mobile） */}
      <div className="text-right md:hidden">
        <span className="text-fluid-lg text-[#333]">
          {t('subtotal')}
          : ¥
          {subtotal.toFixed(2)}
        </span>
      </div>
    </motion.li>
  );
});

CartItem.displayName = 'CartItem';

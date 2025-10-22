'use client';

import type { CartItem } from '@/types/cart';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface OrderPreviewProps {
  items: CartItem[];
  discountAmount?: number;
  shippingFee?: number;
}

export function OrderPreview({
  items,
  discountAmount = 0,
  shippingFee = 0,
}: OrderPreviewProps) {
  const t = useTranslations('Checkout');

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discountAmount + shippingFee;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-lg bg-[#f9f9f9] p-6 md:p-8"
    >
      <h3 className="text-fluid-3xl mb-6 font-medium text-[#333]">
        {t('order_preview')}
      </h3>

      {/* 商品列表 */}
      <div className="mb-6 space-y-4">
        <h4 className="text-fluid-lg font-medium text-[#595757]">
          {t('order_items')}
        </h4>
        <div className="space-y-3">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative size-[50px] shrink-0 overflow-hidden rounded">
                <Image
                  src={item.pictureUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-fluid-base line-clamp-2 text-[#333]">
                  {item.name}
                </p>
                <p className="text-fluid-sm text-[#999]">
                  x{item.quantity}
                </p>
              </div>
              <span className="text-fluid-base shrink-0 text-[#333]">
                ¥{((item.price * item.quantity) / 100).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 价格明细 */}
      <div className="space-y-3 border-t border-[#e0e0e0] pt-4">
        <div className="flex items-center justify-between">
          <span className="text-fluid-base text-[#595757]">
            {t('original_price')}
          </span>
          <span className="text-fluid-base text-[#333]">
            ¥{(subtotal / 100).toFixed(2)}
          </span>
        </div>

        {discountAmount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-fluid-base text-[#595757]">
              {t('discount')}
            </span>
            <span className="text-fluid-base text-red-500">
              -¥{(discountAmount / 100).toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-fluid-base text-[#595757]">
            {t('shipping_fee')}
          </span>
          <span className="text-fluid-base text-[#333]">
            {shippingFee === 0 ? t('Cart.shipping_free') : `¥${(shippingFee / 100).toFixed(2)}`}
          </span>
        </div>

        {/* 总计 */}
        <div className="flex items-center justify-between border-t border-[#e0e0e0] pt-3">
          <span className="text-fluid-xl font-medium text-[#333]">
            {t('final_amount')}
          </span>
          <span className="text-fluid-2xl font-medium text-[#4F68D2]">
            ¥{(total / 100).toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}


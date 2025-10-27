'use client';

import type { CartItem } from '@/types/cart';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

type OrderPreviewProps = {
  items: CartItem[];
  discountAmount?: number;
  currentStep: number;
  onDiscountApplied?: (amount: number) => void;
};

/**
 * 订单预览组件 - 原版样式
 * 显示商品列表、价格明细、折扣码等
 */
export function OrderPreview({
  items,
  discountAmount = 0,
  currentStep,
  onDiscountApplied: _onDiscountApplied,
}: OrderPreviewProps) {
  const t = useTranslations('Checkout');
  const [showMore, setShowMore] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discountAmount;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] md:rounded-2xl"
      onClick={() => setShowQrCode(false)}
    >
      {/* 标题 */}
      <div className="px-4 pt-5 md:px-6 md:pt-7 lg:px-8 lg:pt-8">
        <h4 className="mb-3 text-base font-medium text-[#333] md:mb-4 md:text-lg lg:mb-5 lg:text-xl">
          {t('order_preview')}
        </h4>
      </div>

      {/* 商品列表 */}
      <div className="min-h-[30vh] px-4 md:min-h-[32vh] md:px-6 lg:min-h-[35vh] lg:px-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`mb-4 flex md:mb-6 lg:mb-8 ${index >= 2 && !showMore ? 'hidden' : ''}`}
          >
            {/* 商品图片 */}
            <div className="mr-3 size-[60px] flex-shrink-0 overflow-hidden rounded-xl md:mr-3.5 md:size-[70px] md:rounded-[14px] lg:mr-4 lg:size-[80px] lg:rounded-[16px]">
              <Image
                src={item.pictureUrl}
                alt={item.name}
                width={80}
                height={80}
                className="size-full object-cover"
              />
            </div>

            {/* 商品信息 */}
            <div className="flex flex-1 flex-col justify-around py-0.5 text-base text-[#595757] md:py-1 md:text-[15px] lg:py-1.5 lg:text-base">
              <div className="flex justify-between">
                <p className="mr-4 line-clamp-2 flex-1 overflow-hidden text-ellipsis md:mr-6 lg:mr-7.5">
                  {item.name}
                </p>
                <span className="flex-shrink-0">
                  ¥
                  {item.price / 100}
                </span>
              </div>
              <div className="flex justify-between">
                <p>{t('quantity')}</p>
                <span className="flex w-8 flex-shrink-0 justify-end md:w-9 lg:w-10">
                  X
                  {' '}
                  {item.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* 查看更多按钮 */}
        {items.length > 2 && (
          <div
            className="mb-3 flex cursor-pointer items-center justify-center text-base md:mb-4 md:text-[15px] lg:mb-5 lg:text-base"
            onClick={() => setShowMore(!showMore)}
          >
            <span>{showMore ? t('collapse') : t('view_more')}</span>
            <ChevronDown
              className={`ml-1 size-4 transition-transform ${showMore ? 'rotate-180' : ''}`}
            />
          </div>
        )}
      </div>

      {/* 价格明细 */}
      <div className="border-t border-dashed border-[#bebcbc] px-4 pt-3 pb-5 md:px-6 md:pt-4 md:pb-6 lg:px-8 lg:pt-5 lg:pb-7">
        {/* 折扣码 */}
        <div className="mb-1 flex justify-between text-base text-[#595757] md:text-[15px] lg:text-base">
          <span>{t('discount_code')}</span>
          <span>{discountAmount > 0 ? `¥-${discountAmount / 100}` : '¥0'}</span>
        </div>

        {/* 获取折扣码链接 */}
        {!discountAmount && currentStep !== 2 && (
          <div className="relative mt-1.5 md:mt-2">
            <a
              href="javascript:;"
              className="text-base text-[#4F68D2] md:text-[15px] lg:text-base"
              onClick={(e) => {
                e.stopPropagation();
                setShowQrCode(!showQrCode);
              }}
            >
              {t('get_discount_code')}
            </a>

            {/* 折扣码二维码弹窗（仅桌面端显示） */}
            {showQrCode && (
              <div className="absolute bottom-[-20px] left-[100px] z-10 hidden w-[240px] flex-col items-center justify-center rounded-[10px] bg-white px-0 py-6 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] after:absolute after:bottom-[26px] after:left-[-28px] after:border-[7px] after:border-r-[14px] after:border-transparent after:border-r-white after:[filter:drop-shadow(-1px_-1px_4px_rgba(0,0,0,0.1))] after:content-[''] md:flex lg:left-[160px] lg:w-[260px] lg:py-7 lg:after:bottom-[28px] lg:after:left-[-30px] lg:after:border-[8px] lg:after:border-r-[16px]">
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                  alt="Discount QR Code"
                  width={200}
                  height={200}
                  className="mb-3 w-[160px] lg:mb-4 lg:w-[180px]"
                />
                <p className="px-3 text-center text-xs">扫码添加客服，获取更多折扣信息</p>
              </div>
            )}
          </div>
        )}

        {/* 应付总额 */}
        <div className="mt-2 mb-2 flex items-center justify-between md:mt-2.5 md:mb-3">
          <div>
            <h5 className="text-lg text-[#333] md:text-xl lg:text-2xl">{t('final_amount')}</h5>
            <p className="text-sm text-[#595757] md:text-[15px] lg:text-base">{t('tax_included')}</p>
          </div>
          <span className="text-2xl text-[#333] md:text-3xl lg:text-[32px]">
            ¥
            {total / 100}
          </span>
        </div>

        {/* 快递配送 */}
        <div className="flex justify-between text-base text-[#595757] md:text-[15px] lg:text-base">
          <span>{t('shipping_fee')}</span>
          <span>{t('shipping_free')}</span>
        </div>
      </div>
    </motion.div>
  );
}

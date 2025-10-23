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
  onDiscountApplied,
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
      <div className="px-4 pt-6 md:px-8 md:pt-10 lg:px-11 lg:pt-13">
        <h4 className="mb-4 text-lg font-medium text-[#333] md:mb-6 md:text-xl lg:mb-10 lg:text-[24px]">
          {t('order_preview')}
        </h4>
      </div>

      {/* 商品列表 */}
      <div className="min-h-[30vh] px-4 md:min-h-[35vh] md:px-8 lg:min-h-[38vh] lg:px-11">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`mb-6 flex md:mb-10 lg:mb-14 ${index >= 2 && !showMore ? 'hidden' : ''}`}
          >
            {/* 商品图片 */}
            <div className="mr-3 size-[70px] flex-shrink-0 overflow-hidden rounded-xl md:mr-4 md:size-[90px] md:rounded-[16px] lg:mr-6 lg:size-[118px] lg:rounded-[20px]">
              <Image
                src={item.pictureUrl}
                alt={item.name}
                width={118}
                height={118}
                className="size-full object-cover"
              />
            </div>

            {/* 商品信息 */}
            <div className="flex flex-1 flex-col justify-between py-1 text-sm text-[#595757] md:py-1.5 md:text-base lg:py-2.5 lg:text-[18px]">
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
            className="mb-4 flex cursor-pointer items-center justify-center text-sm md:mb-6 md:text-base lg:mb-9 lg:text-[18px]"
            onClick={() => setShowMore(!showMore)}
          >
            <span>{showMore ? t('collapse') : t('view_more')}</span>
            <ChevronDown
              className={`ml-1 size-4 transition-transform md:size-5 ${showMore ? 'rotate-180' : ''}`}
            />
          </div>
        )}
      </div>

      {/* 价格明细 */}
      <div className="border-t border-dashed border-[#bebcbc] px-4 pt-4 pb-6 md:px-8 md:pt-6 md:pb-8 lg:px-11 lg:pt-9 lg:pb-10">
        {/* 折扣码 */}
        <div className="mb-1 flex justify-between text-sm text-[#595757] md:text-base lg:text-[18px]">
          <span>{t('discount_code')}</span>
          <span>{discountAmount > 0 ? `¥-${discountAmount / 100}` : '¥0'}</span>
        </div>

        {/* 获取折扣码链接 */}
        {!discountAmount && currentStep !== 2 && (
          <div className="relative mt-2 md:mt-2.5">
            <a
              href="javascript:;"
              className="text-sm text-[#4F68D2] md:text-base lg:text-[18px]"
              onClick={(e) => {
                e.stopPropagation();
                setShowQrCode(!showQrCode);
              }}
            >
              {t('get_discount_code')}
            </a>

            {/* 折扣码二维码弹窗（仅桌面端显示） */}
            {showQrCode && (
              <div className="absolute bottom-[-20px] left-[100px] z-10 hidden w-[280px] flex-col items-center justify-center rounded-[10px] bg-white px-0 py-8 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] after:absolute after:bottom-[30px] after:left-[-32px] after:border-[8px] after:border-r-[16px] after:border-transparent after:border-r-white after:[filter:drop-shadow(-1px_-1px_4px_rgba(0,0,0,0.1))] after:content-[''] md:flex lg:left-[200px] lg:w-[330px] lg:py-10 lg:after:bottom-[34px] lg:after:left-[-38px] lg:after:border-[10px] lg:after:border-r-[20px]">
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                  alt="Discount QR Code"
                  width={250}
                  height={250}
                  className="mb-4 w-[200px] lg:mb-5 lg:w-[250px]"
                />
                <p className="px-4 text-center text-xs lg:text-sm">扫码添加客服，获取更多折扣信息</p>
              </div>
            )}
          </div>
        )}

        {/* 应付总额 */}
        <div className="mt-2 mb-3 flex items-center justify-between md:mt-3 md:mb-4">
          <div>
            <h5 className="text-xl text-[#333] md:text-2xl lg:text-[30px]">{t('final_amount')}</h5>
            <p className="text-xs text-[#595757] md:text-sm">{t('tax_included')}</p>
          </div>
          <span className="text-3xl text-[#333] md:text-4xl lg:text-[48px]">
            ¥
            {total / 100}
          </span>
        </div>

        {/* 快递配送 */}
        <div className="flex justify-between text-sm text-[#595757] md:text-base lg:text-[18px]">
          <span>{t('shipping_fee')}</span>
          <span>{t('shipping_free')}</span>
        </div>
      </div>
    </motion.div>
  );
}

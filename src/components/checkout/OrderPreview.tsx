'use client';

import type { CartItem } from '@/types/cart';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

type OrderPreviewProps = {
  items: CartItem[];
  discountAmount?: number;
  currentStep: number;
  onDiscountApplied?: (amount: number) => void;
  orderPayAmount?: number | null; // 订单实际支付金额（分），如果提供则优先使用
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
  orderPayAmount,
}: OrderPreviewProps) {
  const t = useTranslations('Checkout');
  const [showMore, setShowMore] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const calculatedTotal = subtotal - discountAmount;
  // 如果有订单实际支付金额，优先使用订单金额（单位：分）
  const total = orderPayAmount !== null && orderPayAmount !== undefined ? orderPayAmount : calculatedTotal;

  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white px-4 py-4 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] md:rounded-2xl"
      onClick={() => setShowQrCode(false)}
      aria-labelledby="order-preview-title"
    >
      {/* 标题 */}
      <header className="px-4 pt-5 lg:px-6 lg:pt-7 xl:px-8 xl:pt-8">
        <h2 id="order-preview-title" className="mb-3 text-xl font-medium text-[#333] md:text-fluid-2xl md:mb-4 lg:mb-5 lg:text-2xl xl:text-3xl">
          {t('order_preview')}
        </h2>
      </header>

      {/* 商品列表 */}
      <ul className="px-4 lg:px-12">
        {(showMore ? items : items.slice(0, 2)).map(item => (
          <li
            key={item.id}
            className="mb-4 flex lg:mb-6 xl:mb-8 mx-8"
          >
            {/* 商品图片 */}
            <div className="mr-3 size-[50px] flex-shrink-0 overflow-hidden rounded-xl md:mr-3.5 md:size-[60px] lg:mr-4 lg:size-[70px] lg:rounded-[14px] xl:size-[80px] xl:rounded-[16px]">
              <Image
                src={item.pictureUrl}
                alt={`${item.name} - 订单预览商品图片 / ${item.name} - Order Preview Product Image`}
                width={60}
                height={60}
                className="size-full object-cover"
              />
            </div>

            {/* 商品信息 */}
            <div className="flex flex-1 flex-col justify-around py-0.5 text-base text-[#595757] md:py-1 md:text-fluid-lg lg:py-1.5 lg:text-lg xl:text-xl">
              <div className="flex justify-between">
                <p className="mr-4 line-clamp-2 flex-1 overflow-hidden text-ellipsis lg:mr-6 xl:mr-7.5">
                  {item.name}
                </p>
                <span className="flex-shrink-0 md:text-fluid-xl lg:text-xl">
                  ¥
                  {item.price / 100}
                </span>
              </div>
              <div className="flex items-center justify-between md:text-fluid-lg lg:text-xl">
                <p>{t('quantity')}</p>
                <span className="flex w-8 flex-shrink-0 justify-end lg:w-9 xl:w-10">
                  X
                  {item.quantity}
                </span>
              </div>
            </div>
          </li>
        ))}

        {/* 查看更多按钮 */}
        {items.length > 2 && (
          <li>
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              aria-label={showMore ? t('collapse') : t('view_more')}
              aria-expanded={showMore}
              className="cursor-target mb-3 flex w-full items-center justify-center text-base md:mb-4 md:text-fluid-lg lg:mb-5 lg:text-lg xl:text-xl"
            >
              <span>{showMore ? t('collapse') : t('view_more')}</span>
              <ChevronDown
                className={`ml-1 size-4 transition-transform ${showMore ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </li>
        )}
      </ul>

      {/* 价格明细 */}
      <div className="border-t border-dashed border-[#bebcbc] px-4 pt-3 pb-5 lg:px-6 lg:pt-4 lg:pb-6 xl:px-8 xl:pt-5 xl:pb-7">
        {/* 折扣码 */}
        <div className="mb-1 flex justify-between text-base text-[#595757] md:text-fluid-base lg:text-[15px] xl:text-lg">
          <span>{t('discount_code')}</span>
          <span>{discountAmount > 0 ? `¥-${discountAmount / 100}` : '¥0'}</span>
        </div>

        {/* 获取折扣码链接 */}
        {!discountAmount && currentStep !== 2 && (
          <div className="relative mt-1">
            <button
              type="button"
              className="cursor-target text-left text-base text-[#4F68D2] hover:underline md:text-fluid-lg lg:text-lg xl:text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setShowQrCode(!showQrCode);
              }}
            >
              {t('get_discount_code')}
            </button>

            {/* 折扣码二维码弹窗（桌面端：相对定位带箭头；移动端：全屏蒙版居中显示） */}
            <AnimatePresence>
              {showQrCode && (
                <>
                  {/* 桌面端：相对定位的弹窗 */}
                  <div
                    className="absolute bottom-[-20px] left-[100px] z-10 hidden flex-col items-center justify-center rounded-[10px] bg-white px-0 py-6 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] after:absolute after:bottom-[26px] after:left-[-28px] after:border-[7px] after:border-r-[14px] after:border-transparent after:border-r-white after:[filter:drop-shadow(-1px_-1px_4px_rgba(0,0,0,0.1))] after:content-[''] lg:flex xl:left-[160px] xl:w-[260px] xl:py-7 xl:after:left-[-30px] xl:after:border-[8px] xl:after:border-r-[16px]"
                    onClick={e => e.stopPropagation()}
                  >
                    <Image
                      src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                      alt="获取折扣码二维码 - 扫码添加客服获取更多折扣信息 / Discount Code QR Code - Scan to Add Customer Service for More Discount Information"
                      width={200}
                      height={200}
                      className="mb-3 w-[160px] xl:mb-4 xl:w-[180px]"
                    />
                    <p className="px-3 text-center text-lg md:text-fluid-lg xl:text-lg">{t('scan_qr_code_message')}</p>
                  </div>

                  {/* 移动端和tablet：全屏蒙版 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 lg:hidden"
                    onClick={() => setShowQrCode(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      onClick={e => e.stopPropagation()}
                      className="relative flex w-full max-w-xs flex-col items-center justify-center rounded-[10px] bg-white px-0 py-6 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)]"
                    >
                      {/* 关闭按钮 */}
                      <button
                        type="button"
                        onClick={() => setShowQrCode(false)}
                        className="absolute top-4 right-4 z-10 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                        aria-label="关闭"
                      >
                        <span className="text-xl leading-none">×</span>
                      </button>

                      <Image
                        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                        alt="获取折扣码二维码 - 扫码添加客服获取更多折扣信息 / Discount Code QR Code - Scan to Add Customer Service for More Discount Information"
                        width={200}
                        height={200}
                        className="mb-3 w-[160px]"
                      />
                      <p className="px-3 text-center text-lg">{t('scan_qr_code_message')}</p>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* 应付总额 */}
        <dl className="mt-4 mb-4 lg:mt-8 lg:mb-8">
          <div className="flex items-center justify-between">
            <div>
              <dt className="text-lg text-[#333] md:text-fluid-xl lg:text-xl xl:text-2xl">{t('final_amount')}</dt>
              <dd className="text-sm text-[#595757] md:text-fluid-sm lg:text-[15px] xl:text-base">{t('tax_included')}</dd>
            </div>
            <dd className="text-2xl text-[#333] md:text-fluid-3xl lg:text-[26px]">
              ¥
              {total / 100}
            </dd>
          </div>
        </dl>

        {/* 快递配送 */}
        <dl className="flex justify-between text-base text-[#595757] md:text-fluid-base lg:text-[15px] xl:text-base">
          <dt>{t('shipping_fee')}</dt>
          <dd>{t('shipping_free')}</dd>
        </dl>
      </div>
    </motion.section>
  );
}

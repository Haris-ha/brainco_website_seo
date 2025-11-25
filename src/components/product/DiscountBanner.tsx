'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

type DiscountBannerProps = {
  product?: {
    discountAmount?: number;
  };
  isMobile?: boolean;
};

export default function DiscountBanner({ product, isMobile = false }: DiscountBannerProps) {
  const t = useTranslations('DiscountBanner');
  const [showQrCode, setShowQrCode] = useState(false);

  // Only show if product has discount
  if (!product?.discountAmount) {
    return null;
  }

  const handleToggleQrCode = () => {
    setShowQrCode(!showQrCode);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleQrCode();
    }
  };

  if (isMobile) {
    return (
      <section
        className="relative mt-2 flex justify-end pl-3"
        aria-label={t('banner_label')}
      >
        {/* 外层大椭圆容器 */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={handleToggleQrCode}
          onKeyDown={handleKeyDown}
          className="group relative flex h-[60px] w-full max-w-[95vw] items-center gap-2 overflow-hidden rounded-l-[30px] py-2 shadow-md transition-all hover:shadow-lg"
          style={{
            background: 'linear-gradient(to right, #7b5c1c 0%, #866926 50%, #f5e4a9 100%)',
          }}
          aria-label={t('click_to_claim')}
          aria-expanded={showQrCode}
        >
          {/* 内层小椭圆 - 左侧按钮区域 */}
          <div className="ml-2 flex h-full min-w-[120px] items-center justify-center gap-1 rounded-[27px] bg-gradient-to-r from-[#f6eed2] to-[#f6c75f] px-4 shadow-inner">
            <Gift
              className="text-fluid-lg h-9 w-9 text-[#8B6F3B]"
              aria-hidden="true"
            />
            <span className="text-fluid-base font-semibold text-[#8B6F3B]">
              {t('click_to_claim')}
            </span>
          </div>

          {/* 右侧内容区域 - 白色文字，无椭圆背景 */}
          <div className="flex flex-1 flex-col justify-center px-4 py-2 text-left">
            <h3 className="text-fluid-lg font-semibold !text-white">
              {t('first_purchase_gift')}
            </h3>
            <p className="text-fluid-sm !text-white/95">
              {t('offer_description')}
            </p>
          </div>
        </motion.button>

        <AnimatePresence>
          {showQrCode && (
            <>
              {/* 遮罩层 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleToggleQrCode}
                className="fixed inset-0 z-40 bg-black/50"
                aria-hidden="true"
              />

              {/* 二维码弹窗 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="qr-code-title"
                className="fixed top-1/2 left-1/2 z-50 flex w-[280px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[10px] bg-white px-0 py-8 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)]"
              >

                <h4 id="qr-code-title" className="sr-only">
                  {t('qr_code_title')}
                </h4>
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                  alt={t('customer_service_qr_code')}
                  width={160}
                  height={160}
                  className="mb-2"
                />
                <p className="text-fluid-base text-gray-700">
                  {t('scan_qr_message')}
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    );
  }

  // Desktop version
  return (
    <section
      className="relative mt-3 flex justify-end"
      aria-label={t('banner_label')}
    >
      {/* 外层大椭圆容器 */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggleQrCode}
        onKeyDown={handleKeyDown}
        className="group relative flex h-[72px] w-full max-w-[680px] items-center gap-3 overflow-hidden rounded-[36px] shadow-lg transition-all hover:shadow-xl focus:ring-2 focus:ring-[#8B6F3B] focus:ring-offset-2 focus:outline-none"
        style={{
          background: 'linear-gradient(to right, #7b5c1c 0%, #7b5c1c 60%, #f5e4a9 60%, #f5e4a9 100%)',
        }}
        aria-label={t('click_to_claim')}
        aria-expanded={showQrCode}
      >
        {/* 内层小椭圆 - 左侧按钮区域 */}
        <div className="flex h-[64px] min-w-[140px] items-center justify-center gap-3 rounded-[32px] bg-gradient-to-r from-[#f6eed2] to-[#f6c75f] px-6 shadow-inner">
          <Gift
            className="h-6 w-6 text-[#8B6F3B]"
            aria-hidden="true"
          />
          <span className="text-lg font-semibold text-[#8B6F3B]">
            {t('click_to_claim')}
          </span>
        </div>

        {/* 右侧内容区域 - 白色文字，无椭圆背景 */}
        <div className="flex flex-1 flex-col justify-center px-6 py-3 text-left">
          <h3 className="text-xl font-bold !text-white drop-shadow-sm">
            {t('first_purchase_gift')}
          </h3>
          <p className="text-sm !text-white/95">
            {t('offer_description')}
          </p>
        </div>
      </motion.button>

      <AnimatePresence>
        {showQrCode && (
          <>
            {/* 遮罩层 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleToggleQrCode}
              className="fixed inset-0 z-40 bg-black/50"
              aria-hidden="true"
            />

            {/* 二维码弹窗 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="qr-code-title-desktop"
              className="fixed top-1/2 left-1/2 z-50 flex w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[12px] bg-white px-0 py-10 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)]"
            >

              <h4 id="qr-code-title-desktop" className="sr-only">
                {t('qr_code_title')}
              </h4>
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                alt={t('customer_service_qr_code')}
                width={200}
                height={200}
                className="mb-3"
              />
              <p className="text-sm text-gray-700">
                {t('scan_qr_message')}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

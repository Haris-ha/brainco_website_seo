'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type DiscountBannerProps = {
  product?: {
    discountAmount?: number;
  };
  isMobile?: boolean;
};

export default function DiscountBanner({ product, isMobile = false }: DiscountBannerProps) {
  const [showQrCode, setShowQrCode] = useState(false);

  // Only show if product has discount
  if (!product?.discountAmount) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="relative mt-2 flex justify-end px-3">
        <motion.img
          whileTap={{ scale: 0.95 }}
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3GYUzjVgOmJsIEHn.png"
          alt="首购礼金"
          className="h-auto w-full max-w-[580px] cursor-pointer"
          onClick={() => setShowQrCode(!showQrCode)}
        />

        <AnimatePresence>
          {showQrCode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-[calc(100%+10px)] left-7 flex w-[233px] flex-col items-center justify-center rounded-[10px] bg-white px-0 py-8 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)]"
            >
              {/* Arrow */}
              <div className="absolute -bottom-[18px] left-[50px] h-0 w-0 border-t-[10px] border-r-[10px] border-l-[10px] border-t-white border-r-transparent border-l-transparent" />

              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                alt="客服二维码"
                width={160}
                height={160}
                className="mb-2"
              />
              <p className="text-fluid-base text-[10px]">扫码添加客服，获取首购礼金</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative mt-3 flex justify-end">
      <motion.img
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3GYUzjVgOmJsIEHn.png"
        alt="首购礼金"
        className="h-auto w-full max-w-[680px] cursor-pointer"
        onClick={() => setShowQrCode(!showQrCode)}
      />

      <AnimatePresence>
        {showQrCode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-[calc(100%+15px)] left-10 flex w-[280px] flex-col items-center justify-center rounded-[12px] bg-white px-0 py-10 shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)]"
          >
            {/* Arrow */}
            <div className="absolute -bottom-[22px] left-[60px] h-0 w-0 border-t-[12px] border-r-[12px] border-l-[12px] border-t-white border-r-transparent border-l-transparent" />

            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
              alt="客服二维码"
              width={200}
              height={200}
              className="mb-3"
            />
            <p className="text-sm">扫码添加客服，获取首购礼金</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

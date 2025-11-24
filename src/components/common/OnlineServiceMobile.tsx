'use client';

import type { PanInfo } from 'framer-motion';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { findProductByIdentifier } from '@/lib/api';
import { trackingPoint } from '@/lib/tracking';
import { getLastPathValue } from '@/lib/utils';

// 默认企业微信客服链接
const DEFAULT_SERVICE_URL = 'https://work.weixin.qq.com/kfid/kfc5267fd2961e88563';

export default function OnlineServiceMobile() {
  const [show, setShow] = useState(false);
  const dragControls = useDragControls();
  const constraintsRef = useRef(null);
  const t = useTranslations('OnlineService');
  const searchParams = useSearchParams();

  // 禁止页面滚动
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  const handleServiceClick = async () => {
    try {
      // 获取产品标识
      const productId = searchParams?.get('productId');
      const code = searchParams?.get('code');
      const lastPath = getLastPathValue();

      // 查找匹配的产品
      const result = await findProductByIdentifier(productId, code, lastPath);

      // 追踪点击事件
      if (result) {
        trackingPoint('w:c:productPage:serviceButton', {
          $element_name: '在线客服',
          $element_type: 'button',
          $element_content: '在线客服',
          $item_name: result.code,
        });
      }

      // 根据不同条件跳转
      if (result?.serviceUrl) {
        window.location.href = result.serviceUrl;
      } else {
        // 产品未找到或没有服务链接时的处理
        if (!result) {
          // eslint-disable-next-line no-alert
          alert('产品id和产品code不存在');
        }
        // 使用默认企业微信客服
        window.open(DEFAULT_SERVICE_URL, '_blank');
      }

      setShow(false);
    } catch (error) {
      console.error('获取客服链接失败:', error);
      // 出错时使用默认企业微信客服
      window.open(DEFAULT_SERVICE_URL, '_blank');
      setShow(false);
    }
  };

  const handleDragEnd = (_event: any, info: PanInfo) => {
    // If drag distance is very small, treat it as a click
    if (Math.abs(info.offset.x) < 5 && Math.abs(info.offset.y) < 5) {
      setShow(true);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        ref={constraintsRef}
        className="fixed top-[60%] right-0 z-[9] flex h-[80px] w-[90px] items-center justify-start rounded-l-full bg-white pl-4 shadow-[0_3px_20px_1px_rgba(0,0,0,0.16)]"
        drag="y"
        dragControls={dragControls}
        dragConstraints={{ top: 0, bottom: typeof window !== 'undefined' ? window.innerHeight - 80 : 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        onClick={() => setShow(true)}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-start gap-1.5">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/server.png"
              alt="Customer Service"
              width={56}
              height={56}
              className="flex-shrink-0"
            />
          </motion.div>
          <div className="flex flex-col items-center">
            {t('title').split('').map((char, index) => (
              <motion.span
                // eslint-disable-next-line react/no-array-index-key
                key={`char-${char}-${index}`}
                className="text-base leading-[1.3] font-medium text-[#333333]"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, type: 'spring', damping: 15 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-0 left-0 z-[99] h-screen max-h-screen w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute top-0 left-0 h-screen max-h-screen w-full bg-black/50"
              onClick={() => setShow(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div
              className="absolute bottom-0 z-[2] max-h-[85vh] w-full overflow-y-auto rounded-t-3xl bg-[#f8f9fa]"
              style={{
                paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))',
              }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="px-6 pt-8" style={{ paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom, 0px))' }}>
                {/* Title */}
                <motion.h4
                  className="mb-6 text-2xl font-semibold text-[#1a1a1a]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {t('title')}
                </motion.h4>

                {/* Online Service Card */}
                <motion.div
                  className="mb-4 h-[120px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-transform active:scale-[0.98]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={handleServiceClick}
                >
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#6475d0]">
                          <Image
                            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/server.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="brightness-0 invert"
                          />
                        </div>
                        <span className="text-xl font-medium text-[#1a1a1a]">{t('online_service')}</span>
                      </div>
                      <span className="text-4xl text-[#6475d0]">›</span>
                    </div>
                    <p className="text-base text-[#999]">{t('service_time')}</p>
                  </div>
                </motion.div>

                {/* Hotline Card */}
                <motion.div
                  className="mb-4 h-[120px] overflow-hidden rounded-2xl bg-white shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#ff6b6b]">
                        <Image
                          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/phone.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="brightness-0 invert"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-medium text-[#1a1a1a]">{t('hotline')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-base text-[#999]">{t('service_time')}</p>
                      <a
                        href="tel:400-688-6289"
                        className="block text-xl font-bold text-[#6475d0]"
                      >
                        400-688-6289
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* WeChat Service Card */}
                <motion.div
                  className="h-[120px] overflow-hidden rounded-2xl bg-white shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#07c160]">
                          <Image
                            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/icon-a-Iconsimple-wechat.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="brightness-0 invert"
                          />
                        </div>
                        <span className="text-xl font-medium text-[#1a1a1a]">{t('wechat_service')}</span>
                      </div>
                      <div className="flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                          alt="WeChat QR Code"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <p className="text-base text-[#999]">{t('wechat_desc_mobile')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

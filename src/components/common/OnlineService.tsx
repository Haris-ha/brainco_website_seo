'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { findProductByIdentifier } from '@/lib/api';
import { trackingPoint } from '@/lib/tracking';
import { getLastPathValue } from '@/lib/utils';

// 默认企业微信客服链接
const DEFAULT_SERVICE_URL = 'https://work.weixin.qq.com/kfid/kfc5267fd2961e88563';

export default function OnlineService() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const t = useTranslations('OnlineService');
  const searchParams = useSearchParams();

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
        window.open(result.serviceUrl);
      } else {
        // 产品未找到或没有服务链接时的处理
        if (!result) {
          // eslint-disable-next-line no-alert
          alert('产品id和产品code不存在');
        }
        // 使用默认企业微信客服
        window.open(DEFAULT_SERVICE_URL, '_blank');
      }
    } catch (error) {
      console.error('获取客服链接失败:', error);
      // 出错时使用默认企业微信客服
      window.open(DEFAULT_SERVICE_URL, '_blank');
    }
  };

  const containerVariants = {
    collapsed: {
      width: 180,
      height: 80,
      borderRadius: 72,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
    expanded: {
      width: 300,
      height: 'auto',
      borderRadius: 72,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  const avatarVariants = {
    collapsed: {
      width: 60,
      height: 60,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
    expanded: {
      width: 110,
      height: 110,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  const textVariants = {
    collapsed: {
      fontSize: '16px',
      transition: {
        duration: 0.3,
      },
    },
    expanded: {
      fontSize: '24px',
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as any,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn' as any,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeOut' as any,
      },
    },
  };

  const backdropVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleQRCodeClick = () => {
    setIsQRModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQRModalOpen(false);
  };

  return (
    <motion.div
      className="fixed right-10 bottom-10 z-[999] flex flex-col bg-white shadow-[0_3px_20px_1px_rgba(0,0,0,0.16)] transition-shadow hover:shadow-[0_6px_30px_2px_rgba(0,0,0,0.2)] active:shadow-[0_0_3px_1px_rgba(0,0,0,0.2)]"
      variants={containerVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      {/* Avatar and Title */}
      <div className={`relative z-10 flex items-center justify-center gap-5 ${isExpanded ? 'pt-8' : 'pt-3.5'}`}>
        <motion.div
          className="flex-shrink-0"
          variants={avatarVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/server.png"
            alt="Customer Service"
            width={60}
            height={60}
            className="h-full w-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col font-medium text-[#333333]"
          variants={textVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
        >
          <p>BrainCo</p>
          <p>{t('title')}</p>
        </motion.div>
      </div>

      {/* Expanded Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="flex w-full justify-center overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex w-full max-w-[335px] cursor-pointer flex-col items-center justify-center pt-10 pb-4 text-left">
              {/* Online Service */}
              <motion.li
                custom={0}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={handleServiceClick}
                className="cursor-target mb-4 cursor-pointer border-b border-[#f5f5f5] pb-5 transition-transform hover:scale-105"
              >
                <h5 className="flex items-center text-2xl font-bold">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/server.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-5"
                  />
                  <span>{t('online_service')}</span>
                </h5>
                <p className="mt-1.5 ml-11 text-lg text-[#6475d0] transition-colors hover:text-[#5060b0]">
                  {t('contact_service')}
                  {' '}
                  &gt;
                </p>
                <s className="ml-11 text-sm whitespace-nowrap text-[#666666] no-underline">
                  {t('service_time')}
                </s>
              </motion.li>

              {/* Hotline */}
              <motion.li
                custom={1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mb-4 border-b border-[#f5f5f5] pb-5"
              >
                <h5 className="flex items-center text-2xl font-bold">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/phone.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-5"
                  />
                  <span>{t('hotline')}</span>
                </h5>
                <p className="mt-1.5 ml-11 text-xl text-[#6475d0] transition-colors hover:text-[#5060b0]">
                  400-688-6289
                </p>
                <s className="ml-11 text-sm whitespace-nowrap text-[#666666] no-underline">
                  {t('service_time')}
                </s>
              </motion.li>

              {/* WeChat Service */}
              <motion.li
                custom={2}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start pb-5"
              >
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/icon-a-Iconsimple-wechat.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-1.5 ml-1 flex-shrink-0 2xl:ml-0"
                />
                <div className="mr-4 ml-5 flex h-full w-24 flex-shrink-0 flex-col justify-between">
                  <h4 className="text-2xl font-bold whitespace-nowrap">
                    {t('wechat_service')}
                  </h4>
                  <p className="text-lg text-[#6475D0]">
                    {t('wechat_desc')}
                  </p>
                </div>
                <motion.div
                  className="cursor-target h-[58px] w-[58px] flex-shrink-0 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleQRCodeClick}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                    alt="WeChat QR Code"
                    width={58}
                    height={58}
                    className="h-full w-full"
                  />
                </motion.div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code Modal */}
      <AnimatePresence>
        {isQRModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleCloseModal}
            />
            {/* Modal Content */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="cursor-target absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800"
                  aria-label="Close"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* QR Code Image */}
                <div className="flex flex-col items-center">
                  <h3 className="text-fluid-2xl mb-4 font-bold text-[#333333]">
                    {t('wechat_service')}
                  </h3>
                  <div className="overflow-hidden rounded-lg border-4 border-gray-100">
                    <Image
                      src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                      alt="WeChat QR Code"
                      width={300}
                      height={300}
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-fluid-xl mt-4 text-[#666666]">
                    {t('wechat_desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

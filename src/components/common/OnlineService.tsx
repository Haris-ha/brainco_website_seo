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
                  className="h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/05E2A5BB-24A5-4D85-9CE7-331E1B31D080.png"
                    alt="WeChat QR Code"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </motion.div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

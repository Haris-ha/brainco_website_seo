'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function BrainRoboticsContent() {
  const t = useTranslations('BrainRobotics');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Achievement logos
  const achievements = [
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DwLjSuqOMkHtiLZ2.webp',
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/t9TJFPgll8HR5AQr.webp',
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Faqw38wA9nZBc0tg.webp',
  ];

  // Gesture patterns data
  const gestures = [
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jFJvgNc1HrD8GMEN.png',
      name: t('gesture_1_name'),
      desc: t('gesture_1_desc'),
      tips: t('gesture_1_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/S84fB0sj91FMxaQy.png',
      name: t('gesture_2_name'),
      desc: t('gesture_2_desc'),
      tips: t('gesture_2_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/J6rjlqMGv0ZjNB3O.png',
      name: t('gesture_3_name'),
      desc: t('gesture_3_desc'),
      tips: t('gesture_3_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/F15DGmCjXqupOYIn.png',
      name: t('gesture_4_name'),
      desc: t('gesture_4_desc'),
      tips: t('gesture_4_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YSEYo7gYi8oDjLYs.png',
      name: t('gesture_5_name'),
      desc: t('gesture_5_desc'),
      tips: t('gesture_5_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/GH9E31Q8yIvysWzb.png',
      name: t('gesture_6_name'),
      desc: t('gesture_6_desc'),
      tips: t('gesture_6_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UlpxSu8JbuaEhuxy.png',
      name: t('gesture_7_name'),
      desc: t('gesture_7_desc'),
      tips: t('gesture_7_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YuYPPwoEbypUxCl5.png',
      name: t('gesture_8_name'),
      desc: t('gesture_8_desc'),
      tips: t('gesture_8_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gFBiIGwt7Q4xJetE.png',
      name: t('gesture_9_name'),
      desc: t('gesture_9_desc'),
      tips: t('gesture_9_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Wn55F38WXmAatZir.png',
      name: t('gesture_10_name'),
      desc: t('gesture_10_desc'),
      tips: t('gesture_10_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YYmpxyiTSfCTitNZ.png',
      name: t('gesture_11_name'),
      desc: t('gesture_11_desc'),
      tips: t('gesture_11_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/V27n4RnEiRSzgMtg.png',
      name: t('gesture_12_name'),
      desc: t('gesture_12_desc'),
      tips: t('gesture_12_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/veyA5J2ATIDxZbYU.png',
      name: t('gesture_13_name'),
      desc: t('gesture_13_desc'),
      tips: t('gesture_13_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jFW4K5jUsyf5s5Ea.png',
      name: t('gesture_14_name'),
      desc: t('gesture_14_desc'),
      tips: t('gesture_14_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nOyuyzqVC4FhSJh0.png',
      name: t('gesture_15_name'),
      desc: t('gesture_15_desc'),
      tips: t('gesture_15_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jflTF504IoM91KxJ.png',
      name: t('gesture_16_name'),
      desc: t('gesture_16_desc'),
      tips: t('gesture_16_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/zLys3SwmG0pNHxVu.png',
      name: t('gesture_17_name'),
      desc: t('gesture_17_desc'),
      tips: t('gesture_17_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gOTl1Raz04kA4DvE.png',
      name: t('gesture_18_name'),
      desc: t('gesture_18_desc'),
      tips: t('gesture_18_tips'),
    },
  ];

  // Awards timeline data
  const awards = [
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jH6SG28x18gwF9W8.webp',
      title: t('award_1_title'),
      year: t('award_1_year'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xI7qYAI5VeNlub6q.webp',
      title: t('award_2_title'),
      year: t('award_2_year'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ZGU7UbfrthYC6oa1.webp',
      title: t('award_3_title'),
      year: t('award_3_year'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/O9LF6YY4kwXEoC6C.webp',
      title: t('award_4_title'),
      year: t('award_4_year'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Fm44cjoHAot0d6tH.webp',
      title: t('award_5_title'),
      year: t('award_5_year'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/R7b2kQW5YCBHGJnm.png',
      title: t('award_6_title'),
      year: t('award_6_year'),
    },
  ];

  // Technical parameters
  const parameters = [
    {
      name: t('param_1_name'),
      value: t('param_1_value'),
      unit: t('param_1_unit'),
      desc: t('param_1_desc'),
    },
    {
      name: t('param_2_name'),
      value: t('param_2_value'),
      unit: t('param_2_unit'),
      desc: t('param_2_desc'),
    },
    {
      name: t('param_3_name'),
      value: t('param_3_value'),
      unit: t('param_3_unit'),
      desc: t('param_3_desc'),
    },
    {
      name: t('param_4_name'),
      value: t('param_4_value'),
      unit: t('param_4_unit'),
      desc: t('param_4_desc'),
    },
    {
      name: t('param_5_name'),
      value: t('param_5_value'),
      unit: t('param_5_unit'),
      desc: t('param_5_desc'),
    },
  ];

  // Video auto-play on viewport intersection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(err => console.error('Video play failed:', err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="relative">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cScrrdjj07wJs2xb.webp"
            alt={t('product_name')}
            width={990}
            height={990}
            className="left-1/2 h-screen transform object-cover"
            priority
          />
          {/* White gradient overlay from right to left */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white via-white/5 to-transparent" />
        </div>
        <div className="absolute top-0 right-[20px] flex flex-col pt-[200px] 2xl:right-[180px] 2xl:pt-[180px]">
          {/* Achievement Badges */}
          <div className="flex h-[100px] items-center gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
                className={index === 1 ? 'mx-[10px]' : ''}
              >
                <Image
                  src={achievement}
                  alt="Achievement"
                  width={index === 0 ? 120 : index === 1 ? 110 : 88}
                  height={index === 0 ? 120 : index === 1 ? 110 : 68}
                  className={`h-auto ${index === 0 ? 'w-[120px]' : index === 1 ? 'w-[110px]' : 'w-[68px]'}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Product Introduction */}
          <div className="mt-[60px] w-[410px]">
            <motion.p
              className="text-fluid-5xl font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {t('brand_name')}
            </motion.p>
            <motion.h1
              className="text-fluid-7xl mb-[40px] max-w-[350px] font-semibold 2xl:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              {t('product_name')}
            </motion.h1>
            <motion.p
              className="text-fluid-xl max-w-[350px] leading-relaxed 2xl:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            >
              {t('intro_text')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Gestures Section */}
      <div className="relative z-[2] mt-[-335px] pl-[182px] 2xl:pl-[242px]">
        <div className="rounded-l-[85px] bg-white pt-[100px] pr-[74px] pb-[100px] pl-[100px] shadow-lg">
          <div className="grid grid-cols-3 gap-x-[50px] gap-y-[40px]">
            {gestures.map((gesture, index) => (
              <motion.div
                key={gesture.name}
                className="flex items-start"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
              >
                <Image
                  src={gesture.img}
                  alt={gesture.name}
                  width={120}
                  height={120}
                  className="h-[120px] w-[120px] flex-shrink-0"
                />
                <div className="ml-[28px] flex-1">
                  <h3 className="text-fluid-3xl font-normal">{gesture.name}</h3>
                  <p className="text-fluid-xl mt-[8px]">{gesture.desc}</p>
                  {gesture.tips && (
                    <span className="text-fluid-base mt-[4px] block text-gray-600">
                      {gesture.tips}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards and Parameters Section */}
      <div className="flex justify-center px-[60px] pb-40  2xl:px-0 2xl:pb-0">
        {/* Left - Awards Timeline */}
        <div className="mr-[-48px] pt-[120px] 2xl:mr-[-78px] 2xl:pt-[420px]">
          <ul>
            {awards.map((award, index) => (
              <motion.li
                key={award.title}
                className="mb-[20px] flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
              >
                <div className="rounded-[18px] bg-[#c62927] p-[18px]">
                  <Image
                    src={award.img}
                    alt={award.title}
                    width={index === 0 ? 160 : 130}
                    height={index === 0 ? 160 : 130}
                    className={`h-auto ${index === 0 ? 'w-[160px]' : 'w-[130px]'}`}
                  />
                </div>
                <div className="flex w-[240px] flex-col items-end">
                  <p className="text-fluid-lg relative flex h-[60px] w-full items-end justify-end pb-[8px] text-right after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#c62927]">
                    {award.title}
                  </p>
                  <h5 className="text-fluid-5xl relative leading-[60px] before:absolute before:top-1/2 before:left-[-24px] before:h-[6px] before:w-[6px] before:-translate-y-1/2 before:rounded-full before:border-[5px] before:border-[#c62927]">
                    {award.year}
                  </h5>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Center - Product Image */}
        <picture className="w-[458px] flex-shrink-0 2xl:w-[658px]">
          <source
            media="(min-width:800px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3gJn1V7S1loO8cDa.webp"
          />
          <source
            media="(max-width:800px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yY6BfJmjhWrzsF0Y.webp"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3gJn1V7S1loO8cDa.webp"
            alt={t('product_name')}
            width={658}
            height={900}
            className="h-auto w-[458px] 2xl:w-[658px]"
          />
        </picture>

        {/* Right - Technical Parameters */}
        <div className="ml-[-24px] pt-[360px] 2xl:ml-[-44px] 2xl:pt-[460px] 2xl:pt-[660px]">
          <ul>
            {parameters.map((param, index) => (
              <motion.li
                key={param.name}
                className="relative mb-[64px] flex items-center before:order-[-2] before:h-[8px] before:w-[8px] before:rounded-full before:border-[6px] before:border-[#c62927] after:order-[-1] after:mx-[20px] after:w-[94px] after:flex-shrink-0 after:border-b after:border-[#333] after:content-['']"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
              >
                {(index === 0 || index === parameters.length - 1) && (
                  <u
                    className={`absolute left-[40px] h-[335px] border-r border-[#333] before:absolute before:left-[-100px] before:h-[8px] before:w-[8px] before:rounded-full before:border-[6px] before:border-[#c62927] after:absolute after:left-[-66px] after:w-[66px] after:border-b after:border-[#333] after:content-[''] ${
                      index === 0
                        ? 'bottom-1/2 before:top-0 before:-translate-y-1/2 after:top-0'
                        : 'top-1/2 before:bottom-0 before:translate-y-1/2 after:bottom-0'
                    }`}
                  />
                )}
                <div>
                  <h4 className="text-fluid-lg font-normal">{param.name}</h4>
                  <h5 className="text-fluid-5xl relative mt-[16px] inline-block pb-[10px] leading-none after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-[2px] after:bg-[#c62927]">
                    {param.value}
                    <span className="text-fluid-2xl">{param.unit}</span>
                  </h5>
                  <p className="text-fluid-base mt-[6px]">{param.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6c5M9iSKs9fhkrwY.webp"
          className="w-full"
          controlsList="nodownload noremoteplayback"
        >
          <source
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/5jz4jGXNnhfQ4Ynp.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Resources Download Section */}
      <motion.div
        className="mt-[106px] mb-[100px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-fluid-6xl mb-[58px] text-center font-bold">
          {t('resources_title')}
        </h2>
        <div className="mx-auto flex w-[998px] items-center justify-between rounded-[12px] border border-[#1A74BF] px-[80px] py-[40px]">
          <span className="text-fluid-2xl">{t('resource_manual_cn')}</span>
          <a
            href="https://www.brainco.cn/lib/BC2-0900343100-Stark%20%E7%94%A8%E6%88%B7%E8%AF%B4%E6%98%8E%E4%B9%A6%EF%BC%88%E5%A4%A7%E6%89%8B%EF%BC%89-AW-20230925.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-lg flex h-[44px] min-w-[120px] flex-shrink-0 items-center justify-center rounded-[22px] bg-[#1A74BF] px-8 !text-white transition-transform hover:scale-105"
          >
            {t('download_btn')}
          </a>
        </div>
        <div className="mx-auto mt-[58px] flex w-[998px] items-center justify-between rounded-[12px] border border-[#1A74BF] px-[80px] py-[40px]">
          <span className="text-fluid-2xl">{t('resource_manual_en')}</span>
          <a
            href="https://www.brainco.cn/lib/BC2-0900343100-Stark%20%E7%94%A8%E6%88%B7%E8%AF%B4%E6%98%8E%E4%B9%A6%EF%BC%88%E5%A4%A7%E6%89%8B%EF%BC%89-AW-20230925%20%E8%8B%B1%E6%96%87%E7%89%88.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-lg flex h-[44px] min-w-[120px] flex-shrink-0 items-center justify-center rounded-[22px] bg-[#1A74BF] px-8 !text-white transition-transform hover:scale-105"
          >
            {t('download_btn')}
          </a>
        </div>
      </motion.div>
    </div>
  );
}

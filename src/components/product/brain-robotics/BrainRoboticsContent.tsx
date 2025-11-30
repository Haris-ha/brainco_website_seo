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

  // Gesture patterns data - ordered according to design
  const gestures = [
    // Row 1
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
    // Row 2
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
    // Row 3
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
    // Row 4
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
    // Row 5
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jFW4K5jUsyf5s5Ea.png',
      name: t('gesture_14_name'),
      desc: t('gesture_14_desc'),
      tips: t('gesture_14_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/veyA5J2ATIDxZbYU.png',
      name: t('gesture_13_name'),
      desc: t('gesture_13_desc'),
      tips: t('gesture_13_tips'),
    },
    // Row 6
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jflTF504IoM91KxJ.png',
      name: t('gesture_12_name'),
      desc: t('gesture_12_desc'),
      tips: t('gesture_12_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/zLys3SwmG0pNHxVu.png',
      name: t('gesture_17_name'),
      desc: t('gesture_17_desc'),
      tips: t('gesture_17_tips'),
    },
    // Row 7
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/J6rjlqMGv0ZjNB3O.png',
      name: t('gesture_3_name'),
      desc: t('gesture_3_desc'),
      tips: t('gesture_3_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/V27n4RnEiRSzgMtg.png',
      name: t('gesture_16_name'),
      desc: t('gesture_16_desc'),
      tips: t('gesture_16_tips'),
    },
    // Row 8
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/GH9E31Q8yIvysWzb.png',
      name: t('gesture_6_name'),
      desc: t('gesture_6_desc'),
      tips: t('gesture_6_tips'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nOyuyzqVC4FhSJh0.png',
      name: t('gesture_15_name'),
      desc: t('gesture_15_desc'),
      tips: t('gesture_15_tips'),
    },
    // Row 9
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gFBiIGwt7Q4xJetE.png',
      name: t('gesture_9_name'),
      desc: t('gesture_9_desc'),
      tips: t('gesture_9_tips'),
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
    <main className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <header className="relative w-full">
        <div className="relative">
          <Image
            src="https://www.brainco.cn/news-images/intelligentprostheticbionichand_heroscreen.jpg"
            alt="BrainCo 智能仿生手 - 灵巧仿生假肢展示 / BrainCo Brain Robotics - Intelligent Prosthetic Hand"
            width={990}
            height={990}
            className="h-screen w-full object-cover"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-1/8 flex w-1/2 -translate-y-1/2 flex-col items-start px-[20px] 2xl:px-[60px]">
          {/* Achievement Badges */}
          <div className="flex items-center gap-4 rounded-[24px] bg-white px-[30px] py-[20px]">
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
                  alt={`BrainCo 智能仿生手获奖徽章 ${index + 1} / BrainCo Brain Robotics Award Badge ${index + 1}`}
                  width={index === 0 ? 120 : index === 1 ? 110 : 88}
                  height={index === 0 ? 120 : index === 1 ? 110 : 68}
                  className={`h-auto ${index === 0 ? 'w-[120px]' : index === 1 ? 'w-[110px]' : 'w-[68px]'}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Product Introduction */}
          <div className="mt-[60px] flex w-full max-w-[480px] flex-col items-center justify-center 2xl:max-w-[720px]">
            <motion.h1
              className="text-fluid-6xl mb-[30px] w-full max-w-[480px] text-left font-bold 2xl:max-w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {t('product_name')}
            </motion.h1>
            <motion.p
              className="text-fluid-xl max-w-[480px] leading-relaxed 2xl:max-w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              {t('intro_text')}
            </motion.p>
          </div>
        </div>
      </header>

      {/* Gestures Section */}
      <section className="relative" aria-labelledby="gestures-section-title">
        <h2 id="gestures-section-title" className="sr-only">手势控制模式 / Gesture Control Modes</h2>
        <div className=" bg-white py-[100px]">
          <div className="mx-auto w-[76%]">
            <div className="grid grid-cols-2 gap-x-[80px] gap-y-[60px]">
              {gestures.map((gesture, index) => (
                <motion.article
                  key={gesture.name}
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <Image
                    src={gesture.img}
                    alt={`${gesture.name} - 仿生手手势控制示意图 / ${gesture.name} - Hand gesture control illustration`}
                    width={90}
                    height={90}
                    className="h-[90px] w-[90px] flex-shrink-0"
                  />
                  <div className="ml-[20px] flex-1">
                    <h3 className="text-fluid-3xl font-bold text-[#333333]">{gesture.name}</h3>
                    <p className="text-fluid-lg mt-[6px] text-[#666666]">{gesture.desc}</p>
                    {gesture.tips && (
                      <span className="text-fluid-lg mt-[6px] block text-[#666666]">
                        {gesture.tips}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="relative bg-white py-[100px]" aria-labelledby="params-section-title">
        <h2 id="params-section-title" className="sr-only">技术参数 / Technical Parameters</h2>
        <div className="mx-auto w-[76%]">
          <div className="relative flex items-center justify-center">
            {/* Left Parameters - 2 items */}
            <div className="flex w-1/3 flex-col gap-[80px] pr-[60px] 2xl:pr-0">
              {parameters.slice(0, 2).map((param, index) => (
                <motion.div
                  key={param.name}
                  className="relative flex w-full items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
                >
                  <div className="relative flex w-full items-center 2xl:pl-40">
                    <div className="w-full">
                      <h3 className="text-fluid-2xl font-semibold text-[#111827]">{param.name}</h3>
                      <div className="flex w-full items-center justify-between">
                        <p className="text-fluid-5xl relative mt-[16px] inline-block min-w-[160px] pb-[10px] leading-none font-bold text-[#333]">
                          {param.value}
                          <span className="text-fluid-2xl ml-2 font-semibold text-[#333]">{param.unit}</span>
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-[1px] w-[94px] bg-[#333]" />
                          <div className="h-[8px] w-[8px] rounded-full border-[6px] border-[#c62927] bg-white" />
                        </div>
                      </div>
                      <p className="text-fluid-base mt-[6px] max-w-[200px] text-[#666666] 2xl:max-w-none">{param.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center - Product Image */}
            <div className="relative flex w-1/3 flex-shrink-0 justify-center">
              <Image
                src="https://www.brainco.cn/news-images/intelligentprostheticbionichand_spec.png"
                alt={`${t('product_name')} - BrainCo 智能仿生手产品规格图 / ${t('product_name')} - BrainCo Brain Robotics Product Specifications`}
                width={400}
                height={600}
                className="h-auto w-[350px] 2xl:w-[400px]"
              />
            </div>

            {/* Right Parameters - 3 items */}
            <div className="flex w-1/3 flex-col gap-[80px] pl-[40px] 2xl:pl-0">
              {parameters.slice(2, 5).map((param, index) => (
                <motion.div
                  key={param.name}
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
                >
                  <div className="relative flex items-center">
                    <div className="mr-[20px] flex items-center">
                      <div className="mr-2 h-[8px] w-[8px] min-w-[12px] rounded-full border-[6px] border-[#c62927] bg-white" />
                      <div className="h-[1px] w-[94px] bg-[#333]" />
                    </div>
                    <div>
                      <h3 className="text-fluid-2xl h-[45px] font-semibold text-[#111827]">{param.name}</h3>
                      <p className="text-fluid-5xl relative mt-[16px] inline-block pb-[10px] leading-none font-bold text-[#333]">
                        {param.value}
                        <span className="text-fluid-2xl ml-1 font-semibold text-[#333]">{param.unit}</span>
                      </p>
                      <p className="text-fluid-base mt-[6px] text-[#666666]">{param.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Timeline Section */}
      <section className="w-full bg-white py-[80px]" aria-labelledby="awards-section-title">
        <h2 id="awards-section-title" className="sr-only">获奖历史 / Awards History</h2>
        <div className="mx-auto w-[76%]">
          {/* First Row - 4 items */}
          <div className="mb-[60px] grid grid-cols-4 gap-[40px]">
            {awards.slice(0, 4).map((award, index) => (
              <motion.div
                key={award.title}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              >
                <p className="text-fluid-4xl mb-[12px] font-semibold text-[#333333]">{award.year}</p>
                <div className="mb-[12px] flex w-full items-center">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#333333]" />
                  <div className="ml-[8px] h-[1px] flex-1 bg-[#333333]" />
                </div>
                <p className="text-fluid-lg mb-[20px] text-left font-semibold text-[#111827]">{award.title}</p>
                <div className="!h-[120px] w-auto">
                  <Image
                    src={award.img}
                    alt={`${award.title} - ${award.year} 获奖证书 / ${award.title} - ${award.year} Award Certificate`}
                    width={200}
                    height={120}
                    className="!h-[120px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          {/* Second Row - 2 items */}
          <div className="grid grid-cols-4 gap-[40px]">
            {awards.slice(4, 6).map((award, index) => (
              <motion.div
                key={award.title}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 4) * 0.2, ease: 'easeOut' }}
              >
                <p className="text-fluid-4xl mb-[12px] font-semibold text-[#333333]">{award.year}</p>
                <div className="mb-[12px] flex w-full items-center">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#333333]" />
                  <div className="ml-[8px] h-[1px] flex-1 bg-[#333333]" />
                </div>
                <p className="text-fluid-lg mb-[20px] h-[45px] text-left font-semibold text-[#111827]">{award.title}</p>
                <div className="!h-[120px] !w-auto">
                  <Image
                    src={award.img}
                    alt={`${award.title} - ${award.year} 获奖证书 / ${award.title} - ${award.year} Award Certificate`}
                    width={200}
                    height={120}
                    className="!h-[120px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full" aria-labelledby="video-section-title">
        <h2 id="video-section-title" className="sr-only">BrainRobotics 产品演示视频 / BrainRobotics Product Demo Video</h2>
        <motion.div
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
            aria-label="BrainRobotics 智能仿生手产品演示视频 / BrainRobotics Intelligent Prosthetic Hand Product Demo Video"
          >
            <source
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/5jz4jGXNnhfQ4Ynp.mp4"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
        </motion.div>
      </section>

      {/* Resources Download Section */}
      <section className="mt-[106px] mb-[100px]" aria-labelledby="resources-title">
        <motion.h2
          id="resources-title"
          className="text-fluid-6xl mb-[58px] text-center font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('resources_title')}
        </motion.h2>
        <div className="mx-auto flex w-[998px] items-center justify-between rounded-[12px] border border-[#1A74BF] px-[80px] py-[40px]">
          <span className="text-fluid-2xl">{t('resource_manual_cn')}</span>
          <a
            href="https://www.brainco.cn/lib/BC2-0900343100-Stark%20%E7%94%A8%E6%88%B7%E8%AF%B4%E6%98%8E%E4%B9%A6%EF%BC%88%E5%A4%A7%E6%89%8B%EF%BC%89-AW-20230925.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-lg flex h-[44px] min-w-[120px] flex-shrink-0 items-center justify-center rounded-[22px] bg-[#1A74BF] px-8 !text-white transition-transform hover:scale-105"
            aria-label={`${t('download_btn')} - ${t('resource_manual_cn')} / ${t('download_btn')} - ${t('resource_manual_cn')}`}
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
            aria-label={`${t('download_btn')} - ${t('resource_manual_en')} / ${t('download_btn')} - ${t('resource_manual_en')}`}
          >
            {t('download_btn')}
          </a>
        </div>
      </section>
    </main>
  );
}

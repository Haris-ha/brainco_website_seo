'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function BrainRoboticsContentMobile() {
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
    <main className="h-full w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <header className="relative w-full" role="img" aria-label="BrainRobotics 智能仿生手 - 移动端 / BrainRobotics Prosthetic Hand - Mobile">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/T6zim1r0nMcHY2rG.webp"
            alt="BrainRobotics 智能仿生手产品展示 / BrainRobotics Prosthetic Hand Product Display"
            width={750}
            height={900}
            className="w-full"
            priority
          />
        </motion.div>

        <div className="absolute top-0 left-0 h-full w-full">
          {/* Achievement Badges - Top Right */}
          <div className="absolute top-32 right-[14px] z-10 flex flex-col items-start md:top-40 md:right-[40px]">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                className="mb-[10px] md:mb-[15px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
              >
                <Image
                  src={achievement}
                  alt={`BrainCo 智能仿生手获奖徽章 ${index + 1} - 移动端 / BrainCo Brain Robotics Award Badge ${index + 1} - Mobile`}
                  width={index === 0 ? 72 : index === 1 ? 50 : 40}
                  height={index === 0 ? 72 : index === 1 ? 50 : 40}
                  className={`h-auto ${index === 1 ? 'mr-[20px]' : index === 2 ? 'mr-[32px]' : ''} ${index === 0 ? 'md:w-[120px]' : index === 1 ? 'md:mr-[30px] md:w-[110px]' : 'md:mr-[50px] md:w-[88px]'}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Product Introduction - Bottom Left */}
          <div className="absolute bottom-0 left-[35px] mb-6 flex w-[305px] flex-col justify-end rounded-2xl p-8 text-center !text-white backdrop-blur-xs md:left-1/2 md:w-auto md:min-w-[400px] md:-translate-x-1/2">
            <motion.p
              className="text-fluid-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {t('brand_name')}
            </motion.p>
            <motion.h1
              className="text-fluid-5xl my-[5px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {t('product_name')}
            </motion.h1>
            <motion.p
              className="text-fluid-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              {t('intro_text')}
            </motion.p>
          </div>
        </div>
      </header>

      {/* Gestures Section */}
      <section className="mt-[20px] md:mt-[60px] md:px-[60px]" aria-labelledby="gestures-section-title-mobile">
        <h2 id="gestures-section-title-mobile" className="sr-only">手势控制模式 - 移动端 / Gesture Control Modes - Mobile</h2>
        <div className="grid grid-cols-2 gap-y-[20px] md:mx-auto md:max-w-[1200px]">
          {gestures.map((gesture, index) => (
            <motion.article
              key={gesture.name}
              className="flex items-center overflow-hidden px-[20px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
            >
              <Image
                src={gesture.img}
                alt={`${gesture.name} - 仿生手手势控制示意图 - 移动端 / ${gesture.name} - Hand gesture control illustration - Mobile`}
                width={60}
                height={60}
                className="mr-[10px] h-[60px] w-[60px] flex-shrink-0 md:h-[80px] md:w-[80px]"
              />
              <div className="flex-1">
                <h3
                  className="text-fluid-base origin-left"
                  style={{ transform: 'scale(0.8)', width: '120%' }}
                >
                  {gesture.name}
                </h3>
                <p
                  className="text-fluid-base mt-0 origin-left"
                  style={{ transform: 'scale(0.7)', width: '130%' }}
                >
                  {gesture.desc}
                </p>
                {gesture.tips && (
                  <span
                    className="text-fluid-base mt-[-6px] block origin-left"
                    style={{ transform: 'scale(0.7)', width: '130%' }}
                  >
                    {gesture.tips}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Parameters Section - Mobile */}
      <section className="mt-[-28px] flex pr-[14px] md:hidden" aria-labelledby="parameters-section-title-mobile">
        <h2 id="parameters-section-title-mobile" className="sr-only">技术参数 - 移动端 / Technical Parameters - Mobile</h2>
        {/* Product Image */}
        <picture className="w-[204px] flex-shrink-0">
          <source
            media="(min-width:900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3gJn1V7S1loO8cDa.webp"
          />
          <source
            media="(max-width:900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yY6BfJmjhWrzsF0Y.webp"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yY6BfJmjhWrzsF0Y.webp"
            alt="BrainRobotics 智能仿生手产品展示 / BrainRobotics Prosthetic Hand Product Display"
            width={204}
            height={300}
            className="h-auto w-[204px]"
          />
        </picture>

        {/* Technical Parameters - Right */}
        <div className="ml-[-8px] pt-[160px]">
          <ul>
            {parameters.map((param, index) => (
              <motion.li
                key={param.name}
                className="relative mb-[18px] flex items-center before:order-[-2] before:h-[6px] before:w-[6px] before:flex-shrink-0 before:rounded-full before:border before:border-[#c62927] after:order-[-1] after:mx-[4px] after:w-[44px] after:flex-shrink-0 after:border-b after:border-[#333] after:content-['']"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              >
                {(index === 0 || index === parameters.length - 1) && (
                  <u
                    className={`absolute left-[12px] h-[84px] border-r border-[#333] before:absolute before:left-[-38px] before:h-[6px] before:w-[6px] before:rounded-full before:border before:border-[#c62927] after:absolute after:left-[-20px] after:w-[20px] after:border-b after:border-[#333] after:content-[''] ${
                      index === 0
                        ? 'bottom-1/2 before:top-0 before:-translate-y-1/2 after:top-0'
                        : 'top-1/2 before:bottom-0 before:translate-y-1/2 after:bottom-0'
                    }`}
                  />
                )}
                <div>
                  <h3 className="text-fluid-base font-normal">{param.name}</h3>
                  <p className="text-fluid-2xl relative mt-[4px] inline-block pb-[4px] leading-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-[2px] after:bg-[#c62927]">
                    {param.value}
                    <span className="text-fluid-base">{param.unit}</span>
                  </p>
                  <p
                    className="text-fluid-base origin-left"
                    style={{ transform: 'scale(0.6)', width: '160%' }}
                  >
                    {param.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Awards Section - Mobile */}
      <section className="flex pl-[36px] md:hidden" aria-labelledby="awards-section-title-mobile">
        <h2 id="awards-section-title-mobile" className="sr-only">获奖历史 - 移动端 / Awards History - Mobile</h2>
        {/* Awards Timeline - Left */}
        <div className="mr-[-14px] pt-[80px]">
          <ul>
            {awards.map((award, index) => (
              <motion.li
                key={award.title}
                className="mb-[36px] flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              >
                <div className="rounded-[10px] bg-[#c62927] p-[6px]">
                  <Image
                    src={award.img}
                    alt={`${award.title} - ${award.year} 获奖证书 - 移动端 / ${award.title} - ${award.year} Award Certificate - Mobile`}
                    width={50}
                    height={50}
                    className="h-auto w-[50px]"
                  />
                </div>
                <div className="flex w-[92px] flex-shrink-0 flex-col items-end">
                  <p
                    className="text-fluid-base relative flex origin-right items-end justify-end pb-[10px] text-right after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-[#c62927]"
                    style={{ transform: 'scale(0.6)', width: '150%' }}
                  >
                    {award.title}
                  </p>
                  <p className="text-fluid-xl relative flex items-center leading-none after:order-[-1] after:mr-[6px] after:h-[6px] after:w-[6px] after:rounded-full after:border after:border-[#c62927]">
                    {award.year}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Product Image */}
        <picture className="w-[204px] flex-shrink-0">
          <source
            media="(min-width:900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3gJn1V7S1loO8cDa.webp"
          />
          <source
            media="(max-width:900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yY6BfJmjhWrzsF0Y.webp"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yY6BfJmjhWrzsF0Y.webp"
            alt="BrainRobotics 智能仿生手产品展示 / BrainRobotics Prosthetic Hand Product Display"
            width={204}
            height={300}
            className="h-auto w-[204px]"
          />
        </picture>
      </section>

      {/* Awards and Parameters Section - Tablet/Desktop */}
      <section className="hidden md:flex md:justify-center md:px-[40px] md:pb-20" aria-labelledby="awards-params-section-title-md">
        <h2 id="awards-params-section-title-md" className="sr-only">获奖历史与技术参数 - 平板端 / Awards History and Technical Parameters - Tablet</h2>
        {/* Left - Awards Timeline */}
        <div className="mr-[-36px] pt-[160px]">
          <ul>
            {awards.map((award, index) => (
              <motion.li
                key={award.title}
                className="mb-[15px] flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
              >
                <div className="rounded-[14px] bg-[#c62927] p-[12px]">
                  <Image
                    src={award.img}
                    alt={`${award.title} - ${award.year} 获奖证书 / ${award.title} - ${award.year} Award Certificate`}
                    width={index === 0 ? 120 : 100}
                    height={index === 0 ? 120 : 100}
                    className={`h-auto ${index === 0 ? 'w-[120px]' : 'w-[100px]'}`}
                  />
                </div>
                <div className="flex w-[180px] flex-col items-end">
                  <p className="text-fluid-base relative flex h-[45px] w-full items-end justify-end pb-[6px] text-right after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#c62927]">
                    {award.title}
                  </p>
                  <p className="text-fluid-3xl relative leading-[45px] before:absolute before:top-1/2 before:left-[-18px] before:h-[5px] before:w-[5px] before:-translate-y-1/2 before:rounded-full before:border-[4px] before:border-[#c62927]">
                    {award.year}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Center - Product Image */}
        <picture className="w-[400px] flex-shrink-0">
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
            alt={`${t('product_name')} - BrainCo 智能仿生手产品主图 - 产品外观展示 / ${t('product_name')} - BrainCo Brain Robotics Main Product Image - Product Appearance Display`}
            width={458}
            height={900}
            className="h-auto w-[320px]"
          />
        </picture>

        {/* Right - Technical Parameters */}
        <div className="ml-[-80px] pt-[260px]">
          <ul>
            {parameters.map((param, index) => (
              <motion.li
                key={param.name}
                className="relative mb-[36px] flex items-center before:order-[-2] before:h-[6px] before:w-[6px] before:rounded-full before:border-[4px] before:border-[#c62927] after:order-[-1] after:mx-[12px] after:w-[60px] after:flex-shrink-0 after:border-b after:border-[#333] after:content-['']"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
              >
                {(index === 0 || index === parameters.length - 1) && (
                  <u
                    className={`absolute left-[24px] h-[180px] border-r border-[#333] before:absolute before:left-[-60px] before:h-[6px] before:w-[6px] before:rounded-full before:border-[4px] before:border-[#c62927] after:absolute after:left-[-40px] after:w-[40px] after:border-b after:border-[#333] after:content-[''] ${
                      index === 0
                        ? 'bottom-1/2 before:top-0 before:-translate-y-1/2 after:top-0'
                        : 'top-1/2 before:bottom-0 before:translate-y-1/2 after:bottom-0'
                    }`}
                  />
                )}
                <div>
                  <h3 className="text-fluid-base font-normal">{param.name}</h3>
                  <p className="text-fluid-3xl relative mt-[10px] inline-block pb-[6px] leading-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-[2px] after:bg-[#c62927]">
                    {param.value}
                    <span className="text-fluid-xl">{param.unit}</span>
                  </p>
                  <p className="text-fluid-sm mt-[3px]">{param.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full" aria-labelledby="video-section-title-mobile">
        <h2 id="video-section-title-mobile" className="sr-only">BrainRobotics 产品演示视频 - 移动端 / BrainRobotics Product Demo Video - Mobile</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            aria-label="BrainRobotics 智能仿生手产品演示视频 - 移动端 / BrainRobotics Intelligent Prosthetic Hand Product Demo Video - Mobile"
          >
            <source
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/SYCzFRjKbp5Sb8aR.mp4"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
        </motion.div>
      </section>

      {/* Resources Download Section */}
      <section className="mt-[50px] mb-[50px] px-[14px]" aria-labelledby="resources-title-mobile">
        <motion.h2
          id="resources-title-mobile"
          className="text-fluid-3xl mb-[28px] text-center font-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('resources_title')}
        </motion.h2>
        <div className="flex h-[40px] items-center justify-between rounded-[20px] border border-[#1A74BF] px-[24px] md:mx-auto md:h-[60px] md:max-w-[600px]">
          <span className="text-fluid-base">{t('resource_manual_cn')}</span>
          <a
            href="https://www.brainco.cn/lib/BC2-0900343100-Stark%20%E7%94%A8%E6%88%B7%E8%AF%B4%E6%98%8E%E4%B9%A6%EF%BC%88%E5%A4%A7%E6%89%8B%EF%BC%89-AW-20230925.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-base flex h-[24px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#1A74BF] px-4 !text-white transition-transform active:scale-95"
            aria-label={`${t('download_btn')} - ${t('resource_manual_cn')} / ${t('download_btn')} - ${t('resource_manual_cn')}`}
          >
            {t('download_btn')}
          </a>
        </div>
        <div className="mt-[28px] flex h-[40px] items-center justify-between rounded-[20px] border border-[#1A74BF] px-[24px] md:mx-auto md:h-[60px] md:max-w-[600px]">
          <span className="text-fluid-base">{t('resource_manual_en')}</span>
          <a
            href="https://www.brainco.cn/lib/BC2-0900343100-Stark%20%E7%94%A8%E6%88%B7%E8%AF%B4%E6%98%8E%E4%B9%A6%EF%BC%88%E5%A4%A7%E6%89%8B%EF%BC%89-AW-20230925%20%E8%8B%B1%E6%96%87%E7%89%88.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fluid-base flex h-[24px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#1A74BF] px-4 !text-white transition-transform active:scale-95"
            aria-label={`${t('download_btn')} - ${t('resource_manual_en')} / ${t('download_btn')} - ${t('resource_manual_en')}`}
          >
            {t('download_btn')}
          </a>
        </div>
      </section>
    </main>
  );
}

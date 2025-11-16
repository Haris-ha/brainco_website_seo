'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AfterSales from '@/components/common/AfterSales';
import { useRouter } from '@/libs/I18nNavigation';
import 'swiper/css';
import 'swiper/css/pagination';

export default function EASleepContent() {
  const t = useTranslations('EASleep');
  const router = useRouter();

  // 处理购买按钮点击 - 跳转到规格选择页面
  const handlePurchase = () => {
    // 跳转到产品规格选择页面，让用户选择具体型号
    router.push('/easleep-specification');
  };

  // Swiper carousel data
  const swiperData = [
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/mMynz0dRzDiy9JhT.webp',
      title: t('swiper_title_1'),
      description: t('swiper_desc_1'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/hrTYNWx5wJyFCQcZ.webp',
      title: t('swiper_title_2'),
      description: t('swiper_desc_2'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3C27jAd6PbYAmMDM.webp',
      title: t('swiper_title_3'),
      description: t('swiper_desc_3'),
    },
  ];

  // Solution items data
  const solutionItems = [
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EtrZirhCACXWpDdn.webp',
      title: t('solution_1_title'),
      desc1: t('solution_1_desc1'),
      desc2: t('solution_1_desc2'),
      desc3: t('solution_1_desc3'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bneabYkc9aX27WRM.webp',
      title: t('solution_2_title'),
      desc1: t('solution_2_desc1'),
      desc2: t('solution_2_desc2'),
      desc3: t('solution_2_desc3'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/k8PM0RWM525hbekd.webp',
      title: t('solution_3_title'),
      desc1: t('solution_3_desc1'),
      desc2: t('solution_3_desc2'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jtEXAd2hh7jBcxCp.webp',
      title: t('solution_4_title'),
      desc1: t('solution_4_desc1'),
      desc2: t('solution_4_desc2'),
      desc3: t('solution_4_desc3'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xa6H6p4pc4fPxQd2.webp',
      title: t('solution_5_title'),
      desc1: t('solution_5_desc1'),
      desc2: t('solution_5_desc2'),
      desc3: t('solution_5_desc3'),
    },
  ];

  // Patent features data
  const patentFeatures = [
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/blwYUB67kqptMoDV.webp',
      title: t('patent_feature_1_title'),
      desc: t('patent_feature_1_desc'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xHo7DZv40g2VnLp1.webp',
      title: t('patent_feature_2_title'),
      desc: t('patent_feature_2_desc'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/l8zc2vdARKXjgx9T.webp',
      title: t('patent_feature_3_title'),
      desc: t('patent_feature_3_desc'),
    },
  ];

  // Patent numbers
  const patentNumbers = [
    'ZL201910021390.3',
    'ZL202111561593.5',
    'ZL202111587616.X',
    'ZL202111652412.X',
    'ZL202210002731.4',
    'ZL202210037293.5',
    'ZL202210130225.3',
    'ZL202210139837.9',
    'ZL202210197825.1',
    'ZL202210200799.3',
    'ZL202210201230.9',
    'ZL202210373328.2',
    'ZL202210377348.7',
    'ZL202210377349.1',
    'ZL202210377351.9',
    'ZL202210413994.4',
    'ZL202210489343.3',
    'ZL202210495919.7',
    'ZL202211047779.3',
    'ZL202211081812.4',
    'ZL202211091113.8',
    'ZL202211091914.4',
    'ZL202211101524.0',
    'ZL202211113315.8',
    'ZL202211598133.4',
    'ZL202211604039.5',
    'ZL202211603119.9',
    'ZL202211636335.3',
    'ZL202211621391.X',
    'ZL202211630919.X',
    'ZL202211630892.4',
    'ZL202211671781.8',
    'ZL202310001653.0',
    'ZL202310110324.X',
    'ZL202310108639.0',
    'ZL202310246878.2',
  ];

  // Usage scenarios data
  const scenarios = [
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fWsTd0PMynfQTnX0.webp',
      title: t('scenario_1'),
      image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/BMxTNyAzE96nRt4j.webp',
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/exNk38Y76104521m.webp',
      title: t('scenario_2'),
      image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Q57TNEayMm1M3zYz.webp',
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xRPTd1Hr8mbFGpJ2.webp',
      title: t('scenario_3'),
      image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Pm3W81QhfX1DxH3h.webp',
    },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <header className="relative flex items-center justify-center">
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/hD5RMSnyEK5Ad3E8.webp"
          />
          <source
            media="(max-width: 900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/hD5RMSnyEK5Ad3E8.webp"
          />
          <img
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/hD5RMSnyEK5Ad3E8.webp"
            alt="EASleep 睡眠改善助眠设备 - 产品展示 / EASleep Sleep Improvement Device - Product Display"
            className="w-full"
          />
        </picture>
        <div className="absolute inset-0 flex items-end justify-center pb-[120px] 2xl:pb-[200px]">
          <div className="flex flex-col items-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-fluid-7xl font-normal drop-shadow-lg">
                {t('hero_title')}
              </h1>
              <p className="text-fluid-5xl font-normal drop-shadow-lg">
                {t('hero_subtitle')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 flex items-baseline justify-center"
            >
              <span className="text-fluid-5xl font-medium">¥2499</span>
              <span className="text-fluid-4xl ml-1">{t('hero_price_from')}</span>
            </motion.div>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePurchase}
              className="text-fluid-2xl cursor-target h-[72px] w-[260px] cursor-pointer rounded-[41px] bg-[#4f68d2] font-medium text-white transition-all hover:scale-105"
              aria-label={`${t('hero_buy_button')} - EASleep 智能助眠设备 / ${t('hero_buy_button')} - EASleep Smart Sleep Aid Device`}
            >
              {t('hero_buy_button')}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Swiper Carousel */}
      <section className="pb-16">
        <div className="mx-auto w-full max-w-full">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="swiper-carousel pb-12"
          >
            {swiperData.map(item => (
              <SwiperSlide key={`swiper-${item.title}`}>
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={`${item.title} - EASleep 产品功能展示 / ${item.title} - EASleep Product Feature Display`}
                    width={1400}
                    height={600}
                    className="w-full"
                  />
                  <div className="absolute top-[280px] left-[200px] text-white">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="text-fluid-6xl font-normal"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-fluid-xl mt-2 w-[350px] opacity-50"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Clinical Research Section */}
      <section className="mt-16 px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            id="research-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl text-center font-light"
          >
            {t('research_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-3xl text-center font-light"
          >
            {t('research_desc')}
          </motion.p>

          <div className="mt-[160px] flex justify-center">
            <div className="flex items-center">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/z1wnrDWhPxEzQAkd.webp"
                alt="EASleep 临床研究数据图表 - 睡眠改善效果数据 / EASleep Clinical Research Data Chart - Sleep Improvement Effect Data"
                width={900}
                height={400}
                className="animate-zoom-in"
              />
              <div className="ml-[220px] flex flex-col justify-center">
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/zNG8tK7dG2rxGpr6.webp"
                  alt="EASleep 睡眠改善效果图表 - 数据可视化展示 / EASleep Sleep Improvement Chart - Data Visualization Display"
                  width={328}
                  height={200}
                  className="animate-zoom-in"
                />
                <div className="mt-[60px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-fluid-5xl flex items-end leading-none font-light"
                  >
                    <span>{t('research_improvement')}</span>
                    {/* <Image
                      src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/4CJ2D4wzks5eenp6.webp"
                      alt="EASleep 改善趋势上升箭头图标 / EASleep Improvement Trend Up Arrow Icon"
                      width={68}
                      height={68}
                      className="ml-2"
                      role="presentation"
                    /> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mt-[100px]">
        <div className="mx-auto w-full">
          <div className="flex items-center">
            {/* Left side - Text content */}
            <div className="w-1/2 px-10 pr-8">
              <motion.h2
                id="solution-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-fluid-5xl mb-32 text-center font-light"
              >
                {t('solution_title')}
              </motion.h2>

              {/* Top row - 3 items */}
              <div className="mb-24 flex justify-center gap-8">
                {solutionItems.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={`solution-${item.title}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex w-[200px] flex-col items-center"
                  >
                    <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.title} - EASleep 解决方案功能图标 / ${item.title} - EASleep Solution Feature Icon`}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-fluid-xl mb-2 font-bold">{item.title}</h3>
                      <p className="text-fluid-base leading-relaxed font-light">{item.desc1}</p>
                      <p className="text-fluid-base leading-relaxed font-light">{item.desc2}</p>
                      {item.desc3 && (
                        <p className="text-fluid-base leading-relaxed font-light">{item.desc3}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom row - 2 items */}
              <div className="flex justify-center gap-16">
                {solutionItems.slice(3, 5).map((item, index) => (
                  <motion.div
                    key={`solution-${item.title}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                    className="flex w-[200px] flex-col items-center"
                  >
                    <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.title} - EASleep 解决方案功能图标 / ${item.title} - EASleep Solution Feature Icon`}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-fluid-xl mb-2 font-bold">{item.title}</h3>
                      <p className="text-fluid-base leading-relaxed font-light">{item.desc1}</p>
                      <p className="text-fluid-base leading-relaxed font-light">{item.desc2}</p>
                      {item.desc3 && (
                        <p className="text-fluid-base leading-relaxed font-light">{item.desc3}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-1/2 pl-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="animate-zoom-in"
              >
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3HCZ6fNEISGadXJg.webp"
                  alt="EASleep 智能助眠设备产品主图 - 产品外观展示 / EASleep Smart Sleep Aid Device Main Product Image - Product Appearance Display"
                  width={600}
                  height={500}
                  className="h-auto w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Section */}
      <section className="mt-[68px] px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl text-center font-normal text-[#333333]"
          >
            {t('patent_title')}
          </motion.h2>

          <div className="mt-5 flex justify-center">
            <ul className="flex gap-[46px]">
              {patentFeatures.map((feature, index) => (
                <motion.li
                  key={`patent-${feature.title}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} - EASleep 专利特性图标 / ${feature.title} - EASleep Patent Feature Icon`}
                    width={54}
                    height={54}
                    className="mb-2"
                  />
                  <h3 className="text-fluid-3xl font-normal">{feature.title}</h3>
                  <p className="text-fluid-xl font-normal">{feature.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-[30px] flex justify-center">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/n2CSkmATVtzMibhF.webp"
              alt="EASleep 产品专利证书 - 知识产权认证 / EASleep Product Patent Certificate - Intellectual Property Certification"
              width={608}
              height={300}
            />
          </div>

          <motion.h3
            id="patent-count"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-4xl mt-[30px] text-center font-normal"
          >
            {t('patent_count', { count: patentNumbers.length })}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-xl mt-[30px] text-center font-normal"
          >
            {t('patent_desc')}
          </motion.p>

          <div className="mt-[30px] flex flex-wrap justify-center gap-4">
            {patentNumbers.map((patent, index) => (
              <motion.span
                key={patent}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="text-fluid-base text-[#ccc]"
              >
                {t('spec_patent_prefix')}
                {patent}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CES Physical Sleep Aid Section */}
      <section className="mt-[136px] px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h2
            id="ces-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl font-light"
          >
            {t('ces_title')}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-5xl font-light"
          >
            {t('ces_subtitle')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-2xl mx-auto mt-[50px] max-w-[1134px] leading-relaxed font-light"
          >
            {t('ces_desc')}
          </motion.p>

          <div className="mt-[50px] flex justify-center">
            <div className="relative max-w-full px-4 lg:px-8 xl:px-12">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/K53kYsjX6zxJN0EZ.webp"
                alt="EASleep CES 物理助眠技术原理图 - 大脑神经信号可视化 / EASleep CES Physical Sleep Aid Technology Principle - Brain Neural Signal Visualization"
                width={1300}
                height={600}
                className="animate-zoom-in"
              />
              <ul className="absolute inset-0 flex items-center justify-between">
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col items-center"
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SJjwGQ4c5kk1fKAh.webp"
                    alt="EASleep 内啡肽上升箭头图标 / EASleep Endorphins Up Arrow Icon"
                    width={60}
                    height={60}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-[70%]"
                    role="presentation"
                  />
                  <span className="text-fluid-2xl flex h-[64px] w-[250px] items-center justify-center rounded-[32px] bg-[#9686ac] font-normal text-white">
                    {t('ces_effect_1')}
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  <span className="text-fluid-2xl mb-4 flex h-[64px] w-[250px] items-center justify-center rounded-[32px] bg-[#b1b1b1] font-normal text-white">
                    {t('ces_effect_2')}
                  </span>
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cbXAJda8C6aZE3F7.webp"
                    alt="EASleep 皮质醇下降箭头图标 / EASleep Cortisol Down Arrow Icon"
                    width={60}
                    height={60}
                    className="absolute left-1/2 -translate-x-1/2 translate-y-[70%]"
                    role="presentation"
                  />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Binaural Beats Section */}
      <section className="relative mt-[136px]">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/W0rS4D6xaMA0s5iB.webp"
          alt="EASleep 双耳节拍技术背景图 - 音频助眠技术展示 / EASleep Binaural Beats Technology Background - Audio Sleep Aid Technology Display"
          width={1920}
          height={600}
          className="w-full"
          role="presentation"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-[400px] text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-4xl font-bold"
          >
            {t('binaural_title')}
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-4xl font-bold"
          >
            {t('binaural_subtitle')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-xl mt-[40px]"
          >
            {t('binaural_desc1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-xl"
          >
            {t('binaural_desc2')}
          </motion.p>
        </div>
      </section>

      {/* Sleep Manager Section */}
      <section className="mt-[58px] px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h2
            id="manager-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl"
          >
            {t('manager_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-xl mt-[25px]"
          >
            {t('manager_desc1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-xl"
          >
            {t('manager_desc2')}
          </motion.p>

          <div className="mt-[74px] flex justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-fluid-xl mb-[-20px] w-[200px] text-center">
                {t('manager_feature_1')}
              </p>
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/QbjbaAfbAn0cssXX.webp"
                alt={`${t('manager_feature_1')} - EASleep 睡眠报告界面展示 / ${t('manager_feature_1')} - EASleep Sleep Report Interface Display`}
                width={300}
                height={400}
                className="animate-zoom-in"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <p className="text-fluid-xl mb-[-20px] w-[200px] text-center">
                {t('manager_feature_2')}
              </p>
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/WXW8cDYNr9FPXJRz.webp"
                alt={`${t('manager_feature_2')} - EASleep 睡眠阶段分析界面 / ${t('manager_feature_2')} - EASleep Sleep Stages Analysis Interface`}
                width={300}
                height={400}
                className="animate-zoom-in"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <p className="text-fluid-xl mb-[-20px] w-[200px] text-center">
                {t('manager_feature_3')}
              </p>
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/03dkSWxsrWafr2tE.webp"
                alt={`${t('manager_feature_3')} - EASleep B-CBTi 认知行为疗法界面 / ${t('manager_feature_3')} - EASleep B-CBTi Cognitive Behavioral Therapy Interface`}
                width={300}
                height={400}
                className="animate-zoom-in"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-base mt-[30px] text-center text-[rgba(51,51,51,0.33)]"
          >
            {t('manager_note')}
          </motion.p>
        </div>
      </section>

      {/* Usage Scenarios Section */}
      <section className="mt-[140px] px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            id="scenarios-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl mb-[48px] text-center"
          >
            {t('scenarios_title')}
          </motion.h2>

          <div className="flex flex-wrap items-center justify-center gap-[58px] pb-[60px]">
            {scenarios.map((scenario, index) => (
              <motion.article
                key={`scenario-${scenario.title}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col"
              >
                <div className="mb-[30px] flex items-center justify-center">
                  <Image
                    src={scenario.icon}
                    alt={`${scenario.title} - EASleep 使用场景图标 / ${scenario.title} - EASleep Usage Scenario Icon`}
                    width={60}
                    height={60}
                    className="h-16 w-auto"
                  />
                  <h3 className="text-fluid-3xl ml-5 font-normal">{scenario.title}</h3>
                </div>
                <Image
                  src={scenario.image}
                  alt={`${scenario.title} - EASleep 使用场景展示图 / ${scenario.title} - EASleep Usage Scenario Display`}
                  width={260}
                  height={260}
                  className="animate-zoom-in rounded-[20px]"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* After Sales */}
      <AfterSales />
    </main>
  );
}

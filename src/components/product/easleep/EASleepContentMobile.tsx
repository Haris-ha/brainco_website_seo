'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from '@/libs/I18nNavigation';
import 'swiper/css';

export default function EASleepContentMobile() {
  const t = useTranslations('EASleep');
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  // 处理购买按钮点击 - 跳转到规格选择页面
  const handlePurchase = () => {
    // 跳转到产品规格选择页面，让用户选择具体型号
    router.push('/health/easleep/specification');
  };

  // Handle scroll detection
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

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
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative">
        <Image
          className="mt-24 w-full"
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/banner.webp"
          alt="EASleep Banner"
          width={375}
          height={400}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-fluid-4xl font-normal drop-shadow-lg"
          >
            Easleep
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-fluid-4xl font-normal drop-shadow-lg"
          >
            {t('hero_title')}
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-2xl mt-2 font-normal drop-shadow-lg"
          >
            {t('hero_subtitle')}
          </motion.h3>
        </div>
      </section>

      {/* Swiper Carousel */}
      <div className="py-8">
        <Swiper
          style={{ '--swiper-theme-color': '#fff' } as any}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          className="pb-12"
        >
          {swiperData.map(item => (
            <SwiperSlide key={`mobile-swiper-${item.title}`}>
              <div className="py-6 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-fluid-3xl"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-fluid-lg"
                >
                  {item.description}
                </motion.p>
              </div>
              <div className="px-4">
                <Image
                  className="w-full"
                  style={{ paddingTop: '10px' }}
                  src={item.img}
                  alt={item.title}
                  width={375}
                  height={300}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Clinical Research Section */}
      <div className="px-10">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-3xl pt-10 text-center"
        >
          {t('research_title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg px-10 text-center"
        >
          {t('research_desc')}
        </motion.p>
      </div>

      <div className="flex items-center justify-center py-10">
        <div className="text-fluid-5xl">{t('research_percentage')}</div>
        <div className="text-fluid-xl flex items-center">
          <span className="px-2">{t('research_improvement')}</span>
          <Image
            className="transition-transform duration-300 hover:scale-105"
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/round_up.webp"
            alt="Arrow up"
            width={22}
            height={22}
          />
        </div>
      </div>

      <Image
        className="w-full px-10"
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/improve.webp"
        alt="Improvement chart"
        width={375}
        height={200}
      />

      {/* Solution Section */}
      <div className="py-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-3xl"
        >
          {t('solution_title')}
        </motion.h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        {solutionItems.map((item, index) => (
          <motion.div
            key={`mobile-solution-${item.title}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Image
              className="mb-2 h-10 w-auto"
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
            />
            <p className="text-fluid-base text-center">{item.title}</p>
            <p className="text-fluid-base text-center">{item.desc1}</p>
            <p className="text-fluid-base text-center">{item.desc2}</p>
            {item.desc3 && (
              <p className="text-fluid-base text-center">{item.desc3}</p>
            )}
          </motion.div>
        ))}
      </div>

      <Image
        className="w-full py-10"
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/easleep.webp"
        alt="EASleep product"
        width={375}
        height={300}
      />

      {/* Patent Section */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-2xl mb-10 text-center font-normal text-[#333333]"
        >
          {t('patent_title')}
        </motion.h2>

        <ul className="flex gap-10 px-20">
          {patentFeatures.map((feature, index) => (
            <motion.li
              key={`mobile-patent-${feature.title}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-1 flex-col items-center"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
              />
              <h2 className="text-fluid-base font-normal">{feature.title}</h2>
              <h3 className="text-fluid-base font-normal">{feature.desc}</h3>
            </motion.li>
          ))}
        </ul>

        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/n2CSkmATVtzMibhF.webp"
          alt="Patent certificate"
          width={288}
          height={150}
          className="mx-auto mt-[14px]"
        />

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-2xl my-4 text-center font-normal"
        >
          {t('patent_count_prefix')}
          <span className="text-fluid-4xl">{patentNumbers.length}</span>
          {t('patent_count_suffix')}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-base pb-4 text-center font-normal"
        >
          {t('patent_desc')}
        </motion.p>

        <ul className="flex flex-wrap justify-center gap-2 px-4">
          {patentNumbers.map((patent, index) => (
            <motion.li
              key={patent}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="text-fluid-base text-[#ccc]"
            >
              {t('spec_patent_prefix')}
              {patent}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CES Physical Sleep Aid Section */}
      <div className="px-10 py-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-3xl mb-4"
        >
          {t('ces_title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          {t('ces_desc')}
        </motion.p>
      </div>

      <div className="relative text-white">
        <Image
          className="w-full"
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/brain.webp"
          alt="Brain visualization"
          width={375}
          height={200}
        />

        {/* Left side - Endorphins with upward arrow */}
        <div className="absolute top-[60px] left-[20px] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SJjwGQ4c5kk1fKAh.webp"
              alt="Endorphins arrow"
              width={40}
              height={40}
              className="-mb-2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex h-[32px] w-[120px] items-center justify-center rounded-[16px] bg-[#9686ac] text-center"
          >
            <span className="text-fluid-sm font-normal text-white">{t('ces_effect_1')}</span>
          </motion.div>
        </div>

        {/* Right side - Cortisol with downward arrow */}
        <div className="absolute right-[20px] bottom-[40px] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex h-[32px] w-[120px] items-center justify-center rounded-[16px] bg-[#b1b1b1] text-center"
          >
            <span className="text-fluid-sm font-normal text-white">{t('ces_effect_2')}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-2"
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cbXAJda8C6aZE3F7.webp"
              alt="Cortisol arrow"
              width={40}
              height={40}
              className="-mt-2"
            />
          </motion.div>
        </div>
      </div>

      {/* Binaural Beats Section */}
      <div className="px-10 py-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-3xl mb-4"
        >
          {t('binaural_title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          {t('binaural_desc1')}
          <br />
          {t('binaural_desc2')}
        </motion.p>
      </div>

      <Image
        className="w-full"
        style={{ paddingTop: '20px' }}
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/double_voice.webp"
        alt="Binaural beats"
        width={375}
        height={200}
      />

      {/* Sleep Manager Section */}
      <div className="px-10 py-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          {t('manager_title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          {t('manager_desc1')}
          <br />
          {t('manager_desc2')}
        </motion.p>
      </div>

      <div className="mt-4 flex justify-around px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[178px] w-[112px] transition-transform duration-300 hover:scale-105"
        >
          <p className="text-fluid-xl absolute -top-10 -right-5 -left-5 scale-50 text-center">
            {t('manager_feature_1')}
          </p>
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/steward1.webp"
            alt="Sleep report"
            width={112}
            height={178}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[178px] w-[112px] transition-transform duration-300 hover:scale-105"
        >
          <p className="text-fluid-xl absolute -top-10 -right-5 -left-5 scale-50 text-center">
            {t('manager_feature_2')}
          </p>
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/steward2.webp"
            alt="Sleep stages"
            width={112}
            height={178}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-[178px] w-[120px] transition-transform duration-300 hover:scale-105"
        >
          <p className="text-fluid-xl absolute -top-10 -right-5 -left-5 scale-50 text-center">
            {t('manager_feature_3')}
          </p>
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/steward3.webp"
            alt="B-CBTi therapy"
            width={112}
            height={178}
          />
        </motion.div>
      </div>

      <div className="text-fluid-base mt-[-10px] w-full scale-70 px-2.5 text-center text-[#999]">
        {t('manager_note')}
      </div>

      {/* Usage Scenarios Section */}
      <div className="px-10 py-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-3xl"
        >
          {t('scenarios_title')}
        </motion.h3>
      </div>

      <div className="mt-0 mb-10 flex justify-around px-4">
        {scenarios.map((scenario, index) => (
          <motion.div
            key={`mobile-scenario-${scenario.title}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative h-[178px] w-[112px] transition-transform duration-300 hover:scale-105"
          >
            <div className="flex h-8 w-full items-center justify-center">
              <Image
                src={scenario.icon}
                alt={scenario.title}
                width={12}
                height={12}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-fluid-base mb-4 text-center
            "
            >
              {scenario.title}
            </p>
            <Image
              src={scenario.image}
              alt={scenario.title}
              width={112}
              height={150}
            />
          </motion.div>
        ))}
      </div>

      {/* Fixed Bottom Purchase Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isScrolling ? 100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-3 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div className="ml-4 flex items-baseline">
            <span className="text-fluid-2xl font-medium text-gray-900">¥2499</span>
            <span className="text-fluid-base ml-1 text-gray-600">{t('hero_price_from')}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePurchase}
            className="text-fluid-base h-[36px] w-[120px] cursor-pointer rounded-[22px] bg-[#4f68d2] font-medium text-white transition-all"
          >
            {t('hero_buy_button')}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

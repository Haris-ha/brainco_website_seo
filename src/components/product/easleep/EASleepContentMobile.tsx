'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function EASleepContentMobile() {
  const t = useTranslations('EASleep');

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
    <div className="easleep">
      {/* Hero Banner */}
      <section className="section banner">
        <Image
          className="w-full"
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/banner.webp"
          alt="EASleep Banner"
          width={375}
          height={400}
        />
        <div className="head">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title text-fluid-3xl"
          >
            Easleep<br />深海豚脑机智能安睡仪
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-xl"
          >
            脑科学 给您一夜好眠
          </motion.h3>
        </div>
      </section>

      {/* Swiper Carousel */}
      <div className="swiper-box">
        <Swiper
          style={{ '--swiper-theme-color': '#fff' } as any}
          pagination={{ clickable: true }}
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={`mobile-swiper-${item.title}`}>
              <div className="section">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-fluid-2xl"
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
              <div className="accuracy_bg">
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
      <div className="section">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          BrainCo研发团队<br />与三甲医院合作开展
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          的《多功能可穿戴式设备干预失眠的临床研究项目结题报告》临床研究中证明
        </motion.p>
      </div>
      
      <div className="team">
        <div className="percent text-fluid-4xl">{t('research_percentage')}</div>
        <div className="team_improve text-fluid-lg">
          {t('research_improvement')}
          <Image
            className="animate-zoom-in"
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/round_up.webp"
            alt="Arrow up"
            width={22}
            height={22}
          />
        </div>
      </div>
      
      <Image
        className="team_improve_img w-full"
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/improve.webp"
        alt="Improvement chart"
        width={375}
        height={200}
      />

      {/* Solution Section */}
      <div className="section">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          Easleep<br />
          智能闭环的睡眠改善方案
        </motion.h3>
      </div>

      <div className="solution">
        {solutionItems.map((item, index) => (
          <motion.div
            key={`mobile-solution-${item.title}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="solution_item"
          >
            <Image
              className="team_improve_img mb-5 h-10 w-auto"
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
            />
            <p className="text-fluid-sm text-center">{item.title}</p>
            <p className="text-fluid-sm text-center">{item.desc1}</p>
            <p className="text-fluid-sm text-center">{item.desc2}</p>
            {item.desc3 && (
              <p className="text-fluid-sm text-center">{item.desc3}</p>
            )}
          </motion.div>
        ))}
      </div>

      <Image
        className="w-full"
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/easleep.webp"
        alt="EASleep product"
        width={375}
        height={300}
      />

      {/* Patent Section */}
      <div className="patent">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-2xl text-center font-normal text-[#333333]"
        >
          用科技实力说话<br />BrainCo值得信赖
        </motion.h2>
        
        <ul className="featureList flex">
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
                className="mb-2"
              />
              <h2 className="text-fluid-sm font-normal">{feature.title}</h2>
              <h3 className="text-fluid-xs font-normal">{feature.desc}</h3>
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
          className="mt-[15px] text-center text-fluid-lg font-normal"
        >
          多达<span className="text-fluid-xl">{patentNumbers.length}</span>项发明专利技术
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-fluid-xs font-normal"
        >
          不断创研品质之路 用科技造福生活
        </motion.p>
        
        <ul className="basedOnPacketInPatent flex flex-wrap justify-center gap-2">
          {patentNumbers.map((patent, index) => (
            <motion.li
              key={patent}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="text-fluid-xs text-[#ccc]"
            >
              {t('spec_patent_prefix')}
              {patent}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CES Physical Sleep Aid Section */}
      <div className="section">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          CES物理助眠<br />入睡更快 睡更深
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          CES物理助眠，其作用于大脑皮层结构和脑干结构，通过产生低强度、微量的弱脉冲电流，能够有效地刺激大脑分泌具有镇静性作用的内啡肽，减少皮质醇含量，降低焦虑、减缓压力。
        </motion.p>
      </div>

      <div className="brain_bg relative text-fluid-sm text-white">
        <Image
          className="w-full"
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/brain.webp"
          alt="Brain visualization"
          width={375}
          height={200}
        />

        <div className="brain_left absolute left-[30px] top-[90px]">
          <div className="round_bg relative animate-zoom-in">
            <Image
              className="round"
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/round.webp"
              alt="Endorphins"
              width={73}
              height={18}
            />
            <p className="absolute inset-0 scale-75 text-center">{t('ces_effect_1')}</p>
          </div>
        </div>

        <div className="brain_left brain_right absolute bottom-[55px] right-[20px] w-[100px] h-[18px]">
          <div className="round_bg relative animate-zoom-in">
            <Image
              className="round"
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/easleep/round2.webp"
              alt="Cortisol"
              width={98}
              height={18}
            />
            <p className="absolute inset-0 scale-75 text-center">{t('ces_effect_2')}</p>
          </div>
        </div>
      </div>

      {/* Binaural Beats Section */}
      <div className="section">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          双声拍及多重音波综合助眠<br />缓解压力 释放睡意
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          内置双声节拍及多种助眠音波（白噪、粉噪），<br />使用时能有效降低使用者的心率，促进神经递质分泌，快速产生睡意。
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
      <div className="section">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          做最懂您的睡眠管家
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-lg"
        >
          Easleep将客观记录您的脑波数据，<br />精准分析大脑状态，生成多维度的睡眠分析报告，并基于脑科学提供B-CBTi*睡眠修复方案。
        </motion.p>
      </div>
      
      <div className="steward_bg flex justify-around mt-[40px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="steward_item relative h-[178px] w-[112px] animate-zoom-in"
        >
          <p className="absolute -left-5 -right-5 -top-5 scale-50 text-center text-fluid-sm">
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
          className="steward_item relative h-[178px] w-[112px] animate-zoom-in"
        >
          <p className="absolute -left-5 -right-5 -top-5 scale-50 text-center text-fluid-sm">
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
          className="steward_item relative h-[178px] w-[112px] animate-zoom-in"
        >
          <p className="absolute -left-5 -right-5 -top-5 scale-50 text-center text-fluid-sm">
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

      <div className="promote text-fluid-xs text-[#999] mt-[-10px] px-[10px] scale-50 w-[200%] origin-left text-center">
        {t('manager_note')}
      </div>

      {/* Usage Scenarios Section */}
      <div className="section">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-xl"
        >
          随时随地 睡个好觉
        </motion.h3>
      </div>
      
      <div className="sleep_bg flex justify-around mt-0">
        {scenarios.map((scenario, index) => (
          <motion.div
            key={`mobile-scenario-${scenario.title}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="sleep_item relative h-[178px] w-[112px] animate-zoom-in"
          >
            <div className="flex justify-center items-center pb-2">
              <Image
                src={scenario.icon}
                alt={scenario.title}
                width={12}
                height={12}
                className="h-3 w-auto"
              />
            </div>
            <p className="scale-80 text-center text-fluid-sm">{scenario.title}</p>
            <Image
              src={scenario.image}
              alt={scenario.title}
              width={112}
              height={150}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

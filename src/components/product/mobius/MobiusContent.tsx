'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function MobiusContent() {
  const t = useTranslations('Mobius');

  const scenarios = [
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Oi87dQeNPAgJyTbm.webp', name: t('scenario_stop') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gFf61GIPoM02TQyU.webp', name: t('scenario_upstairs') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nRkCQyHxhiU1pm7r.webp', name: t('scenario_downslope') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6tlmX0a5pAWwfGDL.webp', name: t('scenario_sit') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/seVWwEFIqhoMrXxp.webp', name: t('scenario_stand') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Zqms57UeQjGI6zwR.webp', name: t('scenario_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UwhYf0j9KBtxFaHR.webp', name: t('scenario_downstairs') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9J7a4uq0grB5Zi32.webp', name: t('scenario_slow_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dBs6nGUbH0PXK3M8.webp', name: t('scenario_lean') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/lauqZ5KFd4LcPsVW.webp', name: t('scenario_kneel') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NK6B7nd593VUWXR0.webp', name: t('scenario_run') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9vrlIf8Uj3k2dV7J.webp', name: t('scenario_fast_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cf2AsK8QumqPvEpW.webp', name: t('scenario_obstacle') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wAepvfnIuEiWys7d.webp', name: t('scenario_seat') },
  ];

  const patents = [
    { count: t('patent_application_value'), unit: t('unit'), desc: t('patent_application') },
    { count: t('patent_authorized_value'), unit: t('unit'), desc: t('patent_authorized') },
    { count: t('patent_invention_value'), unit: t('unit'), desc: t('patent_invention') },
    { count: t('patent_utility_value'), unit: t('unit'), desc: t('patent_utility') },
    { count: t('patent_design_value'), unit: t('unit'), desc: t('patent_design') },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Banner */}
      <header className="relative w-full">
        <Image
          src="https://www.brainco.cn/news-images/m4_heroscreen.jpg"
          alt="Mobius 轻凌智能仿生腿 - 产品展示 / Mobius Revolimb Intelligent Bionic Leg - Product Display"
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-screen w-full object-cover"
          priority
        />
        <div className="absolute right-0 bottom-0 flex h-full w-1/2 flex-col justify-center pr-40 pl-20">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wgjcXaxT6UzSDlf2.png"
              alt="Mobius 轻凌智能仿生腿 Logo / Mobius Revolimb Intelligent Bionic Leg Logo"
              width={116}
              height={116}
              sizes="116px"
              className="mb-[30px] h-auto w-[116px]"
            />
          </motion.div> */}
          <motion.h1
            className="text-fluid-6xl mb-[30px] font-medium text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {t('product_name')}
          </motion.h1>
          <motion.p
            className="text-fluid-xl leading-[1.6] text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            {t('intro_text')}
          </motion.p>
        </div>
      </header>

      {/* Comparison Images */}
      <section className="mt-[80px] flex gap-[32px] px-[40px]" aria-labelledby="comparison-images-title">
        <h2 id="comparison-images-title" className="sr-only">
          轻凌M2智能仿生腿
          {' '}
          与
          {' '}
          轻凌M3智能仿生腿
          {' '}
          产品对比 / Mobius Revolimb M2 Intelligent Bionic Leg vs M3 Intelligent Bionic Leg Product Comparison
        </h2>
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="https://www.brainco.cn/news-images/m2intelligent bionicleg.jpg"
            alt={`${t('m2_title')} - Mobius 轻凌M2智能仿生腿产品展示 / ${t('m2_title')} - Mobius Revolimb M2 Intelligent Bionic Leg Product Display`}
            width={900}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto min-h-[800px] w-full rounded-[32px] object-cover"
          />
          <motion.div
            className="absolute right-[40px] bottom-[40px] left-[40px] rounded-[24px] bg-[#00000040] p-[30px] backdrop-blur-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[20px] font-medium !text-white">{t('m2_title')}</h3>
            <p className="text-fluid-xl leading-[1.8] !text-white">
              {t('m2_desc')}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="https://www.brainco.cn/news-images/m3.png"
            alt={`${t('m3_title')} - Mobius 轻凌M3智能仿生腿产品展示 / ${t('m3_title')} - Mobius Revolimb M3 Intelligent Bionic Leg Product Display`}
            width={900}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto min-h-[800px] w-full rounded-[32px] object-cover"
          />
          <motion.div
            className="absolute right-[40px] bottom-[40px] left-[40px] rounded-[24px] bg-[#00000040] p-[30px] backdrop-blur-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[20px] font-medium !text-white">{t('m3_title')}</h3>
            <p className="text-fluid-xl leading-[1.8] !text-white">
              {t('m3_desc')}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <motion.section
        className="relative flex w-full items-center justify-center bg-white px-40 py-[100px]"
        aria-labelledby="features-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 id="features-title" className="sr-only">Mobius 产品功能特性 / Mobius Product Features</h2>
        {/* Left Features */}
        <div className="mt-10 flex flex-1 flex-col items-start justify-center gap-[100px] pr-[80px]">
          {/* Button Feature */}
          <motion.div
            className="relative -mr-20 max-w-[400px] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_button_title')}</h3>
            <p className="text-fluid-2xl mb-[20px] text-[#111827]">
              {t('feature_button_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] right-[-100px] flex items-center">
              <div className="h-[1px] w-[90px] bg-[#cccccc]" />
              <div className="ml-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
            </div>
          </motion.div>

          {/* Sleep Feature */}
          <motion.div
            className="relative -mr-20 max-w-[400px] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_sleep_title')}</h3>
            <p className="text-fluid-2xl text-[#111827]">
              {t('feature_sleep_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] right-[-90px] flex items-center">
              <div className="h-[1px] w-[90px] bg-[#cccccc]" />
              <div className="ml-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* Center Image */}
        <motion.div
          className="relative z-10 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="https://www.brainco.cn/news-images/front.png"
            alt="Mobius 轻凌M3智能仿生腿正面功能展示图 / Mobius Revolimb M3 Intelligent Bionic Leg Front Features Display"
            width={400}
            height={600}
            className="h-auto w-[500px]"
          />
        </motion.div>

        {/* Right Feature */}
        <div className="flex flex-1 flex-col items-start justify-center pl-[80px]">
          <motion.div
            className="relative -ml-20 max-w-[400px] text-left 2xl:-ml-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_vibration_title')}</h3>
            <p className="text-fluid-2xl text-[#111827]">
              {t('feature_vibration_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] left-[-130px] flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
              <div className="h-[1px] w-[90px] bg-[#cccccc]" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features - Back View */}
      <motion.section
        className="relative flex w-full items-center justify-center bg-white px-40 pt-[100px]"
        aria-labelledby="features-back-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 id="features-back-title" className="sr-only">Mobius 产品背面功能特性 / Mobius Product Back Features</h2>
        {/* Left Features */}
        <div className="mt-10 flex flex-1 flex-col items-start justify-center gap-[80px] pr-[80px]">
          {/* Angle Feature */}
          <motion.div
            className="relative -mr-20 max-w-[400px] min-w-[300px] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_angle_title')}</h3>
            <p className="text-fluid-2xl mb-[20px] text-[#111827]">
              {t('feature_angle_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] right-[-100px] flex items-center">
              <div className="h-[1px] w-[80px] bg-[#cccccc]" />
              <div className="ml-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
            </div>
          </motion.div>

          {/* Hydraulic Feature */}
          <motion.div
            className="relative -mr-20 max-w-[400px] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_hydraulic_title')}</h3>
            <p className="text-fluid-2xl text-[#111827]">
              {t('feature_hydraulic_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] right-[-90px] flex items-center">
              <div className="h-[1px] w-[80px] bg-[#cccccc]" />
              <div className="ml-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
            </div>
          </motion.div>

          {/* Battery Feature */}
          <motion.div
            className="relative -mr-20 max-w-[400px] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_battery_title')}</h3>
            <p className="text-fluid-2xl text-[#111827]">
              {t('feature_battery_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] right-[-90px] flex items-center">
              <div className="h-[1px] w-[90px] bg-[#cccccc]" />
              <div className="ml-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
            </div>
          </motion.div>
        </div>

        {/* Center Image */}
        <motion.div
          className="relative z-10 ml-14 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="https://www.brainco.cn/news-images/back.png"
            alt="Mobius 轻凌M3智能仿生腿背面功能展示图 / Mobius Revolimb M3 Intelligent Bionic Leg Back Features Display"
            width={400}
            height={600}
            className="h-auto w-[400px]"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-1 flex-col items-start justify-center gap-[80px] pl-[100px]">
          {/* Sensors Feature */}
          <motion.div
            className="relative -ml-20 max-w-[400px] text-left 2xl:-ml-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_sensors_title')}</h3>
            <p className="text-fluid-2xl text-[#111827]">
              {t('feature_sensors_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] left-[-130px] flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
              <div className="h-[1px] w-[90px] bg-[#cccccc]" />
            </div>
          </motion.div>

          {/* Algorithm Feature */}
          <motion.div
            className="relative -ml-20 max-w-[400px] text-left 2xl:-ml-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-5xl mb-[16px] font-semibold text-[#333333]">{t('feature_algorithm_title')}</h3>
            <p className="text-fluid-2xl text-[#111827]">
              {t('feature_algorithm_desc')}
            </p>
            {/* Connection Line */}
            <div className="absolute top-[18px] left-[-130px] flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#333333] bg-white" />
              <div className="h-[1px] w-[90px] bg-[#cccccc]" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Control Button Switch Section */}
      <motion.section
        className="relative mt-[150px] flex min-h-[550px] w-full items-center justify-end bg-cover bg-center px-20"
        style={{
          backgroundImage: 'url(https://www.brainco.cn/news-images/onebuttonswitchesmultiplefunctions.jpg)',
        }}
        aria-labelledby="control-button-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex w-1/2 flex-col items-center py-[80px] mr-10">
          {/* Title */}
          <motion.h2
            className="text-fluid-6xl mb-[80px] text-center leading-tight font-medium text-[#333333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <span dangerouslySetInnerHTML={{ __html: t('control_button_title') }} />
          </motion.h2>

          {/* Activities Grid */}
          <div className="flex gap-[40px]">
            {[
              { img: 'bicycle.png', name: t('activity_cycling') },
              { img: 'fitness.png', name: t('activity_fitness') },
              { img: 'table-tennis.png', name: t('activity_pingpong') },
              { img: 'yoga.png', name: t('activity_yoga') },
              { img: 'golf.png', name: t('activity_golf') },
            ].map((activity, index) => (
              <motion.div
                key={activity.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              >
                <div className="mb-[20px] flex h-[60px] w-[60px] items-center justify-center">
                  <Image
                    src={`https://www.brainco.cn/news-images/${activity.img}`}
                    alt={`${activity.name} - Mobius 适用运动场景图标 / ${activity.name} - Mobius Applicable Sports Activity Icon`}
                    width={60}
                    height={60}
                    className="h-auto w-full object-contain"
                    role="presentation"
                  />
                </div>
                <span className="text-fluid-lg min-w-[100px] rounded-full bg-white px-6 py-2 text-center text-[#3b3b3b]">
                  {activity.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Applicable Scenarios */}
      <section className="mx-auto mt-[80px] w-full max-w-[90vw] px-40" aria-labelledby="scenario-title">
        <motion.h2
          id="scenario-title"
          className="text-fluid-6xl text-center font-semibold text-[#333333]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('scenario_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-xl mx-auto mt-[20px] w-[70%] text-center text-[#333333]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {t('scenario_desc')}
        </motion.p>

        <div className="mx-auto mt-[88px] grid grid-cols-5 gap-x-12 gap-y-24">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div className="flex h-[80px] w-[80px] items-center justify-center">
                <Image
                  src={scenario.img}
                  alt={`${scenario.name} - Mobius 适用场景图标 / ${scenario.name} - Mobius Applicable Scenario Icon`}
                  width={80}
                  height={80}
                  className="h-auto max-h-full w-auto max-w-full object-cover"
                />
              </div>
              <span className="text-fluid-lg mt-4 w-[160px] rounded-full bg-[#f4f4f4] px-4 py-4 text-center font-semibold text-[#333] md:mt-6 2xl:w-[200px]">
                {scenario.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Parameters */}
      <motion.section
        className="mx-auto mt-[100px] w-full max-w-[1220px] bg-white px-40 py-[80px]"
        aria-labelledby="parameters-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 id="parameters-title" className="sr-only">Mobius 产品技术参数 / Mobius Product Technical Parameters</h2>
        <div className="flex flex-col gap-[60px]">
          {/* Top - Multi-Sensor */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-fluid-4xl mb-[10px] font-semibold text-[#333333]">
              {t('feature_sensor_title')}
            </h3>
            <div className="text-fluid-8xl mb-[40px] flex items-center gap-2 font-medium text-[#333333]">
              {t('feature_sensor_freq').slice(0, -2)}
              <div className="text-fluid-5xl font-semibold text-[#333333]">
                {t('feature_sensor_freq').slice(-2)}
              </div>
            </div>

            {/* Three Sensor Circles */}
            <div className="flex items-center justify-around gap-[40px]">
              {[
                { name: t('sensor_hall') },
                { name: t('sensor_gyro') },
                { name: t('sensor_temperature') },
              ].map((sensor, index) => (
                <motion.div
                  key={sensor.name}
                  className="flex h-[160px] w-[160px] items-center justify-center rounded-full border-2 border-[#979797] bg-white 2xl:h-[200px] 2xl:w-[200px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                >
                  <span className="text-fluid-2xl text-center font-semibold text-[#333333]">{sensor.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Grid - 4 Parameters */}
          <div className="grid grid-cols-4 gap-[40px]">
            {/* Battery Duration */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="text-fluid-6xl mb-[10px] font-semibold text-[#333333]">
                {t('feature_duration_value')}
                {/* <span className="text-fluid-4xl ml-2">{t('feature_duration_unit')}</span> */}
              </div>
              <span className="text-fluid-2xl font-semibold text-[#333]">{t('feature_duration')}</span>
            </motion.div>

            {/* Maximum Flexion */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="text-fluid-6xl mb-[10px] font-semibold text-[#333333]">
                {t('feature_flexion_value')}
                {/* <span className="text-fluid-4xl ml-2">{t('feature_flexion_unit')}</span> */}
              </div>
              <span className="text-fluid-2xl font-semibold text-[#333]">{t('feature_flexion')}</span>
            </motion.div>

            {/* Pressure Test */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="text-fluid-6xl mb-[10px] font-semibold text-[#333333]">
                {t('feature_pressure_value')}
                {/* <span className="text-fluid-4xl ml-2">{t('feature_pressure_unit')}</span> */}
              </div>
              <span className="text-fluid-2xl font-semibold text-[#333]">{t('feature_pressure')}</span>
            </motion.div>

            {/* Waterproof Rating */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <div className="text-fluid-6xl mb-[10px] font-semibold text-[#333333]">
                {t('feature_waterproof_value')}
              </div>
              <span className="text-fluid-2xl font-semibold text-[#333]">{t('feature_waterproof')}</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Carbon Fiber Shell - Image Left, Text Right */}
      <motion.section
        className="mx-auto mt-[100px] flex w-full max-w-[90vw] items-center bg-white px-40"
        aria-labelledby="shell-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left - Image */}
        <motion.div
          className="flex w-1/2 items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src="https://www.brainco.cn/news-images/High-strength-carbon-fiber-casing.png"
            alt={`${t('feature_shell_title')} - Mobius 高强度碳纤维外壳展示图 / ${t('feature_shell_title')} - Mobius High-Strength Carbon Fiber Shell Display`}
            width={700}
            height={800}
            className="h-auto w-full"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="flex w-1/2 flex-col items-start justify-center py-[100px] pl-[80px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <h2 id="shell-title" className="text-fluid-5xl mb-[20px] font-semibold text-[#333333]">
            {t('feature_shell_title')}
          </h2>
          <h3 className="text-fluid-5xl mb-[60px] font-semibold text-[#333333]">
            {t('feature_shell_subtitle')}
          </h3>
          <div className="flex flex-col gap-[20px] text-center">
            <span className="text-fluid-2xl min-w-[320px] rounded-full bg-[#F4F4F4] px-16 py-4 font-semibold !text-[#333] 2xl:min-w-[400px]">
              {t('feature_shell_1')}
            </span>
            <span className="text-fluid-2xl min-w-[320px] rounded-full bg-[#F4F4F4] px-16 py-4 font-semibold !text-[#333] 2xl:min-w-[400px]">
              {t('feature_shell_2')}
            </span>
            <span className="text-fluid-2xl min-w-[320px] rounded-full bg-[#F4F4F4] px-16 py-4 font-semibold !text-[#333] 2xl:min-w-[400px]">
              {t('feature_shell_3')}
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* Variable Damping - Text Left, Image Right */}
      <motion.section
        className="mx-auto mt-[100px] flex w-full max-w-[90vw] items-center bg-white pl-40"
        aria-labelledby="damping-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left - Text */}
        <motion.div
          className="flex w-1/2 flex-col items-start justify-center py-[100px] pl-[60px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 id="damping-title" className="text-fluid-5xl mb-[60px] font-semibold text-[#333333]">
            {t('feature_damping_title')}
          </h2>
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[20px] text-left">
              <span className="text-fluid-6xl font-semibold text-[#333333]">
                {t('feature_precision')}
              </span>
              <div className="text-fluid-2xl font-semibold text-[#333333]">
                {t('feature_precision_value')}
              </div>
            </div>
            <div className="flex items-center gap-[20px] text-left">
              <span className="text-fluid-6xl font-semibold text-[#333333]">
                {t('feature_rebound')}
              </span>
              <span className="text-fluid-2xl font-semibold text-[#333333]">
                {t('feature_rebound_value')}
              </span>
            </div>
            <div className="flex items-center gap-[20px] text-left">
              <span className="text-fluid-6xl font-semibold text-[#333333]">
                {t('feature_load')}
              </span>
              <span className="text-fluid-2xl font-semibold text-[#333333]">
                {t('feature_load_value')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="flex w-1/2 items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Image
            src="https://www.brainco.cn/news-images/Bidirectional-variable-damping.png"
            alt={`${t('feature_damping_title')} - Mobius 双向可变阻尼展示图 / ${t('feature_damping_title')} - Mobius Bidirectional Variable Damping Display`}
            width={700}
            height={800}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.section>

      {/* App Control Section */}
      <motion.section
        className="mx-auto mt-[50px] w-full bg-[#f8f8f8] p-40 text-center"
        aria-labelledby="app-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          id="app-title"
          className="text-fluid-6xl mb-[40px] font-medium text-[#333333]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {t('app_title')}
          {/* {t('app_subtitle')} */}
        </motion.h2>
        <motion.p
          className="text-fluid-2xl mx-auto max-w-[600px] text-[#111827]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {t('app_desc')}
        </motion.p>
      </motion.section>

      {/* M3 vs M2 Comparison */}
      <motion.section
        className="mx-auto mt-[100px] w-full max-w-[90vw] px-40 py-[80px]"
        aria-labelledby="comparison-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Title */}
        <motion.h2
          id="comparison-title"
          className="text-fluid-6xl mb-[60px] text-center font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {t('comparison_title')}
        </motion.h2>

        {/* Product Images */}
        <div className="mb-[60px] flex items-end justify-center gap-[100px]">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <Image
              src="https://www.brainco.cn/news-images/m3@2x.png"
              alt={`${t('M3 Name')} - Mobius 轻凌M3智能仿生腿产品图 / ${t('M3 Name')} - Mobius Revolimb M3 Intelligent Bionic Leg Product Image`}
              width={300}
              height={400}
              className="h-auto w-[200px]"
            />
            <span className="text-fluid-5xl mt-[20px] font-medium">{t('M3 Name')}</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Image
              src="https://www.brainco.cn/news-images/M2@2x.png"
              alt={`${t('M2 Name')} - Mobius 轻凌M2智能仿生腿产品图 / ${t('M2 Name')} - Mobius Revolimb M2 Intelligent Bionic Leg Product Image`}
              width={300}
              height={400}
              className="h-auto w-[200px]"
            />
            <span className="text-fluid-5xl mt-[20px] font-medium">{t('M2 Name')}</span>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-hidden rounded-lg bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-[#f5f5f5]">
                <th className="text-fluid-3xl border-r border-gray-200 px-6 py-6 text-center font-semibold text-[#333333]">
                  {t('comparison_parameter')}
                </th>
                <th className="text-fluid-3xl border-r border-gray-200 py-6 text-center font-semibold text-[#333333]">
                  {t('comparison_m3')}
                </th>
                <th className="text-fluid-3xl py-6 text-center font-semibold text-[#333333]">
                  {t('comparison_m2')}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Support Material */}
              <tr className="border-t border-gray-200">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_support')}
                </td>
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_support_value')}
                </td>
                <td className="text-fluid-xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_support_value')}
                </td>
              </tr>
              {/* Height */}
              <tr className="border-t border-gray-200 bg-[#fafafa]">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_height')}
                </td>
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_height_value')}
                </td>
                <td className="text-fluid-xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_height_value')}
                </td>
              </tr>
              {/* Waterproof */}
              <tr className="border-t border-gray-200 bg-[#fafafa]">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_waterproof')}
                </td>
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_waterproof_value')}
                </td>
                <td className="text-fluid-xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_waterproof_value')}
                </td>
              </tr>
              {/* Weight */}
              <tr className="border-t border-gray-200">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_weight')}
                </td>
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_weight_value')}
                </td>
                <td className="text-fluid-xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_weight_value')}
                </td>
              </tr>
              {/* Charging Time */}
              <tr className="border-t border-gray-200">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_charging')}
                </td>
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_charging_value')}
                </td>
                <td className="text-fluid-xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_charging_value')}
                </td>
              </tr>
              {/* Battery Life */}
              <tr className="border-t border-gray-200 bg-[#fafafa]">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_battery')}
                </td>
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_battery_m3')}
                </td>
                <td className="text-fluid-xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_battery_m2')}
                </td>
              </tr>
              {/* Stair Climbing */}
              <tr className="border-t border-gray-200">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_stair')}
                </td>
                <td className="text-fluid-2xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_yes')}
                </td>
                <td className="text-fluid-2xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_no')}
                </td>
              </tr>
              {/* Running */}
              <tr className="border-t border-gray-200 bg-[#fafafa]">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_run')}
                </td>
                <td className="text-fluid-2xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_yes')}
                </td>
                <td className="text-fluid-2xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_no')}
                </td>
              </tr>
              {/* Obstacle */}
              <tr className="border-t border-gray-200">
                <td className="text-fluid-xl border-r border-gray-200 px-6 py-5 text-center font-semibold text-[#333333]">
                  {t('comparison_obstacle')}
                </td>
                <td className="text-fluid-2xl border-r border-gray-200 px-6 py-5 text-center text-[#111827]">
                  {t('comparison_yes')}
                </td>
                <td className="text-fluid-2xl px-6 py-5 text-center text-[#111827]">
                  {t('comparison_no')}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Common Features */}
          <div className="border-t-2 border-gray-300 bg-[#f5f5f5] px-6 py-6">
            <p className="text-fluid-2xl mb-6 text-center font-semibold text-[#333333]">
              {t('comparison_common')}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                t('comparison_feature_1'),
                t('comparison_feature_2'),
                t('comparison_feature_3'),
                t('comparison_feature_4'),
                t('comparison_feature_5'),
                t('comparison_feature_6'),
                t('comparison_feature_7'),
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex w-full items-center rounded-full bg-white px-8 py-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05, ease: 'easeOut' }}
                >
                  <span className="mr-2 mb-1 text-xl text-black">•</span>
                  <span className="text-fluid-lg text-[#111827]">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Patents */}
      <motion.section
        className="mx-auto mt-[50px] mb-[100px] w-full max-w-[90vw] px-4 text-center"
        aria-labelledby="patent-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 id="patent-title" className="text-fluid-6xl mb-[24px] px-40 font-semibold text-[#333333]">
          {t('patent_title')}
        </h2>
        <div className="mt-[60px] flex min-h-[600px] items-stretch gap-12 px-40 md:gap-16">
          {/* Left: Patent Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hidden h-full w-1/2 flex-shrink-0 lg:block"
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fC7y3OzorWYn9Vmb.webp"
              alt="Mobius 智能假肢领域专利数量展示图 / Mobius Intelligent Prosthetics Patent Count Display"
              width={1200}
              height={600}
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Right: Patent Data - First row 1 item, Second and Third rows 2 items each */}
          <div className="ml-10 flex h-full w-1/2 flex-col justify-between gap-24 py-4 2xl:ml-20 2xl:gap-28">
            {/* First Row - 1 item (full width) */}
            {patents[0] && (
              <motion.div
                key={patents[0].desc}
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <h3 className="text-fluid-5xl leading-none font-semibold text-[#333333]">
                  {patents[0].count}
                  <span className="text-fluid-2xl ml-2">{patents[0].unit}</span>
                </h3>
                <p className="text-fluid-2xl mt-[8px] font-semibold text-[#333333]">{patents[0].desc}</p>
              </motion.div>
            )}

            {/* Second Row - 2 items */}
            <div className="grid grid-cols-2 gap-24">
              {patents.slice(1, 3).map((patent, index) => (
                <motion.div
                  key={patent.desc}
                  className="text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                >
                  <h3 className="text-fluid-5xl leading-none font-semibold text-[#333333]">
                    {patent.count}
                    <span className="text-fluid-2xl ml-2">{patent.unit}</span>
                  </h3>
                  <p className="text-fluid-2xl mt-[8px] font-semibold text-[#333333]">{patent.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Third Row - 2 items */}
            <div className="grid grid-cols-2 gap-24">
              {patents.slice(3).map((patent, index) => (
                <motion.div
                  key={patent.desc}
                  className="text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                >
                  <h3 className="text-fluid-5xl leading-none font-semibold text-[#333333]">
                    {patent.count}
                    <span className="text-fluid-2xl ml-2">{patent.unit}</span>
                  </h3>
                  <p className="text-fluid-2xl mt-[8px] font-semibold text-[#333333]">{patent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

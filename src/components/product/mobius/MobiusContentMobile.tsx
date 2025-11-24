'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function MobiusContentMobile() {
  const t = useTranslations('Mobius');

  const scenarios = [
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Oi87dQeNPAgJyTbm.webp', name: t('scenario_stop') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gFf61GIPoM02TQyU.webp', name: t('scenario_upstairs') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nRkCQyHxhiU1pm7r.webp', name: t('scenario_downslope') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6tlmX0a5pAWwfGDL.webp', name: t('scenario_sit') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/seVWwEFIqhoMrXxp.webp', name: t('scenario_stand') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9vrlIf8Uj3k2dV7J.webp', name: t('scenario_fast_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cf2AsK8QumqPvEpW.webp', name: t('scenario_obstacle') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Zqms57UeQjGI6zwR.webp', name: t('scenario_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UwhYf0j9KBtxFaHR.webp', name: t('scenario_downstairs') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9J7a4uq0grB5Zi32.webp', name: t('scenario_slow_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wAepvfnIuEiWys7d.webp', name: t('scenario_seat') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dBs6nGUbH0PXK3M8.webp', name: t('scenario_lean') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/lauqZ5KFd4LcPsVW.webp', name: t('scenario_kneel') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NK6B7nd593VUWXR0.webp', name: t('scenario_run') },
  ];

  const swiperList = [
    { img: 'https://www.brainco.cn/news-images/m2.png', title: t('m2_title'), text: t('m2_desc') },
    { img: 'https://www.brainco.cn/news-images/m3.png', title: t('m3_title'), text: t('m3_desc') },
  ];

  const patents = [
    { count: t('patent_application_value'), unit: t('unit'), desc: t('patent_application') },
    { count: t('patent_authorized_value'), unit: t('unit'), desc: t('patent_authorized') },
    { count: t('patent_invention_value'), unit: t('unit'), desc: t('patent_invention') },
    { count: t('patent_utility_value'), unit: t('unit'), desc: t('patent_utility') },
    { count: t('patent_design_value'), unit: t('unit'), desc: t('patent_design') },
  ];

  return (
    <main className="h-full w-full overflow-x-hidden bg-white">
      {/* Hero Banner */}
      <motion.header
        className="relative h-[80vh] w-full overflow-hidden pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        role="img"
        aria-label={`${t('product_name')} - Mobius 轻凌智能仿生腿产品展示 / ${t('product_name')} - Mobius Revolimb Intelligent Bionic Leg Product Display`}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/QhGk39MAOtN7E0UZ.webp"
            alt="Mobius 轻凌智能仿生腿 - 产品展示 / Mobius Revolimb Intelligent Bionic Leg - Product Display"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            priority
          />
        </div>
        <div className="absolute right-0 bottom-20 left-0 flex items-center justify-center px-[20px]">
          <motion.div
            className="rounded-[12px] bg-black/20 p-[30px] backdrop-blur-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-fluid-4xl mb-[20px] font-medium text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              {t('product_name')}
            </motion.h1>
            <motion.p
              className="text-fluid-base leading-[1.6] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            >
              {t('intro_text')}
            </motion.p>
          </motion.div>
        </div>
      </motion.header>

      {/* Product Comparison Carousel */}
      <section className="mt-[20px] flex w-full snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-labelledby="comparison-carousel-title-mobile">
        <h2 id="comparison-carousel-title-mobile" className="sr-only">
          {t('m2_title')}
          {' '}
          与
          {' '}
          {t('m3_title')}
          {' '}
          产品对比 /
          {' '}
          {t('m2_title')}
          {' '}
          vs
          {' '}
          {t('m3_title')}
          {' '}
          Product Comparison
        </h2>
        {swiperList.map((item, index) => (
          <div key={index} className="relative w-full flex-shrink-0 snap-start">
            <Image
              src={item.img}
              alt={`${item.title} - Mobius 轻凌智能仿生腿产品展示 / ${item.title} - Mobius Revolimb Intelligent Bionic Leg Product Display`}
              width={750}
              height={1000}
              className="w-full"
            />
            <motion.div
              className="absolute right-[20px] bottom-[60px] left-[20px] rounded-[10px] bg-black/30 p-[20px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-fluid-3xl mb-[10px] font-medium !text-white">{item.title}</h3>
              <p className="text-fluid-sm leading-[1.6] !text-white">
                {item.text}
              </p>
            </motion.div>
            <div className="absolute bottom-[30px] flex w-full justify-center">
              {swiperList.map((_, i) => (
                <div
                  key={i}
                  className={`h-[8px] w-[8px] rounded-full ${i === index ? 'bg-white' : 'border border-white bg-transparent'
                  } ${i > 0 ? 'ml-[16px]' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Feature Description List */}
      <section className="mt-[70px]" aria-labelledby="features-title-mobile">
        <h2 id="features-title-mobile" className="sr-only">Mobius 产品功能特性 / Mobius Product Features</h2>
        {/* First Group: 弯曲角度大, 液压系统, 智能算法 */}
        <motion.div
          className="mb-[80px] flex items-center justify-center md:mb-[120px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/PzgtwOr0hcjJVXb6.webp"
            alt="Mobius 产品功能特性展示图 1 - 正面视图 / Mobius Product Features Display 1 - Front View"
            width={130}
            height={400}
            className="w-[130px] md:w-[195px]"
          />
          <div className="ml-[20px] flex w-[170px] flex-col justify-center space-y-[38px] md:ml-[30px] md:w-[255px] md:space-y-[57px]">
            {[
              { title: t('feature_angle_title'), desc: t('feature_angle_desc') },
              { title: t('feature_hydraulic_title'), desc: t('feature_hydraulic_desc') },
              { title: t('feature_algorithm_title'), desc: t('feature_algorithm_desc') },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="relative flex items-start text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Indicator: Circle and Line */}
                <div className="mt-[6px] mr-[8px] flex items-center md:mt-[9px] md:mr-[12px]">
                  <div className="h-[10px] w-[10px] rounded-full border border-[#333333] bg-white md:h-[15px] md:w-[15px]" />
                  <div className="ml-[4px] h-[1px] w-[20px] bg-[#cccccc] md:ml-[6px] md:w-[30px]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-fluid-lg md:text-fluid-base mb-[4px] font-medium text-[#333333] md:mb-[6px]">{feature.title}</h3>
                  <p className="text-fluid-base leading-[1.4] text-[#161414]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second Group: 多种传感器融合, 电池续航 */}
        <motion.div
          className="mb-[80px] flex items-center justify-center md:mb-[120px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5rixLAfkQDtXY1pR.webp"
            alt="Mobius 产品功能特性展示图 2 - 侧面视图 / Mobius Product Features Display 2 - Side View"
            width={156}
            height={400}
            className="w-[156px] md:w-[234px]"
          />
          <div className="ml-[20px] flex w-[170px] flex-col justify-center space-y-[28px] md:ml-[30px] md:w-[255px] md:space-y-[42px]">
            {[
              { title: t('feature_sensors_title'), desc: t('feature_sensors_desc') },
              { title: t('feature_battery_title'), desc: t('feature_battery_desc') },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="relative flex items-start text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Indicator: Circle and Line */}
                <div className="mt-[6px] mr-[8px] flex items-center md:mt-[9px] md:mr-[12px]">
                  <div className="h-[10px] w-[10px] rounded-full border border-[#333333] bg-white md:h-[15px] md:w-[15px]" />
                  <div className="ml-[4px] h-[1px] w-[20px] bg-[#cccccc] md:ml-[6px] md:w-[30px]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-fluid-lg md:text-fluid-base mb-[4px] font-medium text-[#333333] md:mb-[6px]">{feature.title}</h3>
                  <p className="text-fluid-base leading-[1.4] text-[#161414]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Third Group: 睡眠功能, 震动反馈, 按键功能 */}
        <motion.div
          className="mb-[80px] flex items-center justify-center md:mb-[120px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Ss4EmqyCFXUiYIh3.webp"
            alt="Mobius 产品功能特性展示图 3 - 背面视图 / Mobius Product Features Display 3 - Back View"
            width={130}
            height={400}
            className="w-[130px] md:w-[195px]"
          />
          <div className="ml-[20px] flex w-[170px] flex-col justify-center space-y-[38px] md:ml-[30px] md:w-[255px] md:space-y-[57px]">
            {[
              { title: t('feature_sleep_title'), desc: t('feature_sleep_desc') },
              { title: t('feature_vibration_title'), desc: t('feature_vibration_desc') },
              { title: t('feature_button_title'), desc: t('feature_button_desc') },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="relative flex items-start text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Indicator: Circle and Line */}
                <div className="mt-[6px] mr-[8px] flex items-center md:mt-[9px] md:mr-[12px]">
                  <div className="h-[10px] w-[10px] rounded-full border border-[#333333] bg-white md:h-[15px] md:w-[15px]" />
                  <div className="ml-[4px] h-[1px] w-[20px] bg-[#cccccc] md:ml-[6px] md:w-[30px]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-fluid-lg md:text-fluid-base mb-[4px] font-medium text-[#333333] md:mb-[6px]">{feature.title}</h3>
                  <p className="text-fluid-base leading-[1.4] text-[#161414]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Control Button Switch Section */}
      <motion.section
        className="relative mt-[30px] flex min-h-[400px] w-full items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat px-[20px] py-[40px]"
        style={{
          backgroundImage: 'url(https://www.brainco.cn/news-images/controlbuttonswitchbg@2x.png)',
          backgroundSize: 'cover',
        }}
        aria-labelledby="control-button-title-mobile"
        role="img"
        aria-label="Mobius 按键功能展示 - 假肢按键操作图 / Mobius Button Function Display - Prosthetic Button Operation"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Title and Activities */}
        <div className="flex w-1/2 max-w-[280px] flex-col">
          {/* Title */}
          <motion.h2
            id="control-button-title-mobile"
            className="text-fluid-xl mb-[20px] text-left font-medium text-[#333333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t('control_button_title')}
          </motion.h2>

          {/* Activities Grid */}
          <div className="flex flex-wrap gap-[10px]">
            {[
              { img: 'bicycle.png', name: t('activity_cycling') },
              { img: 'fitness.png', name: t('activity_fitness') },
              { img: 'table-tennis.png', name: t('activity_pingpong') },
              { img: 'golf.png', name: t('activity_golf') },
              { img: 'yoga.png', name: t('activity_yoga') },
            ].map((activity, index) => (
              <motion.div
                key={activity.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              >
                <div className="mb-[8px] flex h-[30px] w-[30px] items-center justify-center">
                  <Image
                    src={`https://www.brainco.cn/news-images/${activity.img}`}
                    alt={`${activity.name} - Mobius 适用运动场景图标 / ${activity.name} - Mobius Applicable Sports Activity Icon`}
                    width={30}
                    height={30}
                    className="h-auto w-full object-contain"
                    role="presentation"
                  />
                </div>
                <span className={`rounded-full bg-white px-2 py-1 text-center text-[10px] leading-tight text-[#3b3b3b] ${activity.img === 'table-tennis.png' ? 'whitespace-nowrap' : ''}`}>
                  {activity.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Applicable Scenarios */}
      <section className="pt-[40px]" aria-labelledby="scenario-title-mobile">
        <motion.h2
          id="scenario-title-mobile"
          className="text-fluid-3xl text-center text-[#333333]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('scenario_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-sm mt-[10px] px-14 text-center text-[#666666]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('scenario_desc')}
        </motion.p>

        <div className="mt-[5px] flex flex-wrap px-[20px]">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              className="mt-[15px] flex w-1/4 flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <div className="flex h-[48px] w-[48px] items-center justify-center">
                <Image
                  src={scenario.img}
                  alt={`${scenario.name} - Mobius 适用场景图标 / ${scenario.name} - Mobius Applicable Scenario Icon`}
                  width={48}
                  height={48}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-fluid-sm mt-[8px] rounded-[10px] bg-[#f4f4f4] px-[4px] py-[2px] text-[#3b3b3b]">
                {scenario.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Characteristics */}
      <section className="mt-[70px] bg-white px-4 py-[40px]" aria-labelledby="characteristics-title-mobile">
        <motion.h2
          id="characteristics-title-mobile"
          className="text-fluid-2xl mb-[10px] text-center leading-[28px] font-medium text-[#666666] px-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('feature_sensor_title')}
        </motion.h2>
        <motion.div
          className="text-fluid-5xl mb-[30px] text-center font-medium text-[#333333]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('feature_sensor_freq')}
        </motion.div>

        {/* Three Sensor Circles */}
        <div className="mb-[40px] flex items-center justify-center gap-[15px]">
          {[
            { name: t('sensor_hall') },
            { name: t('sensor_gyro') },
            { name: t('sensor_temperature') },
          ].map((sensor, index) => (
            <motion.div
              key={sensor.name}
              className="flex h-[90px] w-[90px] items-center justify-center rounded-full border-2 border-[#333333] bg-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
            >
              <span className="text-fluid-xs text-center text-[#333333]">{sensor.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-fluid-base mt-[45px] flex flex-wrap pl-[30px] md:text-center">
          {[
            { value: t('feature_duration_value'), unit: t('feature_duration_unit'), label: t('feature_duration') },
            { value: t('feature_pressure_value'), unit: t('feature_pressure_unit'), label: t('feature_pressure') },
            { value: t('feature_flexion_value'), unit: t('feature_flexion_unit'), label: t('feature_flexion') },
            { value: t('feature_waterproof_value'), unit: '', label: t('feature_waterproof') },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              className="mb-[20px] w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <span className="text-fluid-4xl font-bold">
                {item.value}
                {item.unit && <span className="ml-1">{item.unit}</span>}
              </span>
              {' '}{' '}
              {item.label}
            </motion.div>
          ))}
        </div>

        {/* Product Data */}
        <div className="mt-[65px]">
          <motion.h2
            id="comparison-title-mobile"
            className="text-fluid-3xl text-center leading-[1.5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('feature_shell_title')}
            <br />
            {t('feature_shell_subtitle')}
          </motion.h2>
          <div className="mt-[24px] flex justify-center space-x-[20px]">
            {[t('feature_shell_1'), t('feature_shell_2'), t('feature_shell_3')].map((text, idx) => (
              <motion.div
                key={text}
                className="text-fluid-sm flex px-4 h-[30px] min-w-[62px] items-center justify-center rounded-[15px] bg-[#707070] !text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {text}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-[20px] px-28 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/S8Oxr4uEvtPB9aNZ.webp"
              alt="Mobius 高强度碳纤维外壳详细展示图 / Mobius High-Strength Carbon Fiber Shell Detail Display"
              width={1200}
              height={600}
              className="w-[90%]"
            />
          </motion.div>
          <div className="text-fluid-lg mt-[20px] pl-[72px] md:text-center">
            {[
              { value: t('feature_precision_value'), label: t('feature_precision') },
              { value: t('feature_rebound_value'), label: t('feature_rebound') },
              { value: t('feature_load_value'), label: t('feature_load') },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                className="mb-[10px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="text-fluid-5xl pr-[10px] font-bold">{item.value}</span>
                {item.label}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-[20px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oUt4iV5RpLDBkurT.webp"
              alt="Mobius 产品性能展示图 - 双向可变阻尼性能参数 / Mobius Product Performance Display - Bidirectional Variable Damping Performance Parameters"
              width={750}
              height={600}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* App Introduction */}
      <section className="bg-[#F8F8F8] py-[48px]" aria-labelledby="app-title-mobile">
        <motion.h2
          id="app-title-mobile"
          className="text-fluid-3xl text-center leading-[1.5]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('app_title')}
          <br />
          {t('app_subtitle')}
        </motion.h2>
        <motion.p
          className="text-fluid-sm mt-[15px] px-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('app_desc')}
        </motion.p>
        {/* <div className="text-fluid-sm mt-[34px] flex flex-col items-center space-y-[34px]">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pszNLwCfbcVEJ9Ry.png"
              alt="Mobius 轻凌App用户端图标 / Mobius Revolimb App User Icon"
              width={120}
              height={120}
            />
            <p className="mt-[22px]">{t('app_user')}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/aIHVeqFEQBWUbt29.webp"
              alt="Mobius 轻凌App装配师端界面展示 / Mobius Revolimb App Fitter Interface Display"
              width={300}
              height={300}
            />
            <p className="mt-[22px]">{t('app_fitter')}</p>
          </motion.div>
        </div> */}
      </section>

      {/* M3 vs M2 Comparison */}
      <motion.section
        className="mx-auto mt-[60px] w-full px-4"
        aria-labelledby="comparison-title-mobile"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Title */}
        <motion.h2
          id="comparison-title-mobile"
          className="text-fluid-3xl mb-[40px] text-center font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {t('comparison_title')}
        </motion.h2>

        {/* Product Images */}
        <div className="mb-[40px] flex items-end justify-center gap-[30px]">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <Image
              src="https://www.brainco.cn/news-images/m3@2x.png"
              alt={`${t('comparison_m3')} - Mobius 轻凌M3智能仿生腿产品图 / ${t('comparison_m3')} - Mobius Revolimb M3 Intelligent Bionic Leg Product Image`}
              width={120}
              height={160}
              className="h-auto w-[120px]"
            />
            <span className="text-fluid-base mt-[10px] font-medium">{t('comparison_m3')}</span>
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
              alt={`${t('comparison_m2')} - Mobius 轻凌M2智能仿生腿产品图 / ${t('comparison_m2')} - Mobius Revolimb M2 Intelligent Bionic Leg Product Image`}
              width={120}
              height={160}
              className="h-auto w-[120px]"
            />
            <span className="text-fluid-base mt-[10px] font-medium">{t('comparison_m2')}</span>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-hidden rounded-lg bg-white md:mx-10 mx-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-[#f5f5f5]">
                <th className="text-fluid-base border-r border-gray-200 py-3 text-center font-medium text-[#333333]">
                  {t('comparison_m3')}
                </th>
                <th className="text-fluid-base py-3 text-center font-medium text-[#333333]">
                  {t('comparison_m2')}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { m3: t('comparison_support_value'), m2: t('comparison_support_value') },
                { m3: t('comparison_height_value'), m2: t('comparison_height_value') },
                { m3: t('comparison_weight_value'), m2: t('comparison_weight_value') },
                { m3: t('comparison_waterproof_value'), m2: t('comparison_waterproof_value') },
                { m3: t('comparison_charging_value'), m2: t('comparison_charging_value') },
                { m3: t('comparison_battery_m3'), m2: t('comparison_battery_m2') },
                { m3: t('comparison_yes'), m2: t('comparison_no') },
                { m3: t('comparison_yes'), m2: t('comparison_no') },
                { m3: t('comparison_yes'), m2: t('comparison_no') },
              ].map((row, idx) => (
                <tr
                  key={`comparison-row-${idx}`}
                  className={`border-t border-gray-200 ${idx % 2 === 1 ? 'bg-[#fafafa]' : ''}`}
                >
                  <td className="text-fluid-sm border-r border-gray-200 px-3 py-3 text-center text-[#666666]">
                    {row.m3}
                  </td>
                  <td className="text-fluid-sm px-3 py-3 text-center text-[#666666]">{row.m2}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Common Features */}
          <div className="border-t-2 border-gray-300 bg-[#f5f5f5] px-4 py-4 text-center">
            <p className="text-fluid-base mb-3 font-medium text-[#333333]">
              {t('comparison_common')}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                t('comparison_feature_1'),
                t('comparison_feature_2'),
                t('comparison_feature_3'),
                t('comparison_feature_4'),
                t('comparison_feature_5'),
                t('comparison_feature_6'),
                t('comparison_feature_7'),
              ].map((feature, index) => (
                <motion.span
                  key={feature}
                  className="text-fluid-xs rounded-full bg-white px-3 py-2 text-[#666666]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05, ease: 'easeOut' }}
                >
                  •
                  {' '}
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Patents */}
      <section className="mt-[35px] mb-[100px] px-[50px]" aria-labelledby="patent-title-mobile">
        <motion.h2
          id="patent-title-mobile"
          className="text-fluid-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('patent_title')}
        </motion.h2>
        <motion.div
          className="mx-auto mt-[30px] w-[258px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/GF70hH681ErUi3qu.webp"
            alt="Mobius 智能假肢领域专利数量展示图 / Mobius Intelligent Prosthetics Patent Count Display"
            width={258}
            height={200}
          />
        </motion.div>
        <div className="mt-[30px] flex flex-col gap-6">
          {/* Top Row - 3 items */}
          <div className="grid grid-cols-3 gap-4">
            {patents.slice(0, 3).map((patent, idx) => (
              <motion.div
                key={patent.desc}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="mb-[6px] flex flex-col items-center leading-none">
                  <span className="text-fluid-4xl font-bold">{patent.count}</span>
                  <span className="text-fluid-sm mt-1">{patent.unit}</span>
                </div>
                <p className="text-fluid-sm">{patent.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 items */}
          <div className="grid grid-cols-3 gap-4">
            {patents.slice(3).map((patent, idx) => (
              <motion.div
                key={patent.desc}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx + 3) * 0.1 }}
              >
                <div className="mb-[6px] flex flex-col items-center leading-none">
                  <span className="text-fluid-4xl font-bold">{patent.count}</span>
                  <span className="text-fluid-sm mt-1">{patent.unit}</span>
                </div>
                <p className="text-fluid-sm">{patent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

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
    <div className="h-full w-full overflow-x-hidden bg-white">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/vaYWlcHEsNmSDpu5.webp"
          alt={t('product_name')}
          width={750}
          height={800}
          className="w-full"
          priority
        />
      </motion.div>

      {/* Product Comparison Carousel */}
      <div className="mt-[20px] flex w-full snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {swiperList.map((item, index) => (
          <div key={index} className="relative w-full flex-shrink-0 snap-start">
            <Image
              src={item.img}
              alt={item.title}
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
              <h3 className="text-fluid-3xl mb-[10px] font-medium text-white">{item.title}</h3>
              <p className="text-fluid-sm leading-[1.6] text-white">
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
      </div>

      {/* Feature Description List */}
      <div className="mt-[70px]">
        <motion.div
          className="mb-[80px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/PzgtwOr0hcjJVXb6.webp"
            alt="Feature 1"
            width={130}
            height={400}
            className="w-[130px]"
          />
          <div className="ml-[20px] flex w-[170px] flex-col justify-center space-y-[38px]">
            {['bB4AxiytVL31qKru', '5yqH1VnlLEW2hzdR', 'amDVp7lX3zYGUgIj'].map((img, idx) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Image
                  src={`https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/${img}.webp`}
                  alt={`Feature detail ${idx + 1}`}
                  width={170}
                  height={50}
                  className="w-[170px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-[80px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5rixLAfkQDtXY1pR.webp"
            alt="Feature 2"
            width={156}
            height={400}
            className="w-[156px]"
          />
          <div className="ml-[20px] flex w-[170px] flex-col justify-center space-y-[28px]">
            {['tCp0g2IXQvZN8hHL', 'nfLgmbSdw6FXP5OB'].map((img, idx) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Image
                  src={`https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/${img}.webp`}
                  alt={`Feature detail ${idx + 1}`}
                  width={170}
                  height={50}
                  className="w-[170px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-[80px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Ss4EmqyCFXUiYIh3.webp"
            alt="Feature 3"
            width={130}
            height={400}
            className="w-[130px]"
          />
          <div className="ml-[20px] flex w-[170px] flex-col justify-center space-y-[38px]">
            {['wjKb5Od67XSe2aHF', 'zBSMpTcWliAJELhn', 'u1GhfgsPBEcTkprx'].map((img, idx) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Image
                  src={`https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/${img}.webp`}
                  alt={`Feature detail ${idx + 1}`}
                  width={170}
                  height={50}
                  className="w-[170px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-[30px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UZGovFh4DECznVcA.webp"
          alt="Product Detail"
          width={750}
          height={1000}
          className="w-full"
        />
      </motion.div>

      {/* Applicable Scenarios */}
      <div className="pt-[40px]">
        <motion.h2
          className="text-fluid-3xl text-center text-[#333333]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('scenario_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-sm mt-[10px] px-28 text-left text-[#666666]"
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
                  alt={scenario.name}
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
      </div>

      {/* Characteristics */}
      <div className="mt-[70px] bg-white px-4 py-[40px]">
        <motion.h2
          className="text-fluid-2xl mb-[10px] text-center leading-[28px] font-medium text-[#666666]"
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
        <div className="text-fluid-base mt-[45px] flex flex-wrap pl-[30px]">
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
              {' '}
              {item.label}
            </motion.div>
          ))}
        </div>

        {/* Product Data */}
        <div className="mt-[65px]">
          <motion.h4
            className="text-fluid-3xl text-center leading-[1.5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('feature_shell_title')}
            <br />
            {t('feature_shell_subtitle')}
          </motion.h4>
          <div className="mt-[24px] flex justify-center space-x-[20px]">
            {[t('feature_shell_1'), t('feature_shell_2'), t('feature_shell_3')].map((text, idx) => (
              <motion.div
                key={text}
                className="text-fluid-sm flex h-[30px] w-[62px] items-center justify-center rounded-[15px] bg-[#707070] text-white"
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
            className="mt-[20px] px-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/S8Oxr4uEvtPB9aNZ.webp"
              alt="Shell Detail"
              width={1200}
              height={600}
              className="w-full"
            />
          </motion.div>
          <div className="text-fluid-lg mt-[20px] pl-[72px]">
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
              alt="Performance"
              width={750}
              height={600}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* App Introduction */}
      <div className="bg-[#F8F8F8] pt-[78px] pb-[30px]">
        <motion.h4
          className="text-fluid-3xl text-center leading-[1.5]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('app_title')}
          <br />
          {t('app_subtitle')}
        </motion.h4>
        <motion.p
          className="text-fluid-sm mt-[15px] px-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('app_desc')}
        </motion.p>
        <div className="text-fluid-sm mt-[34px] flex flex-col items-center space-y-[34px]">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pszNLwCfbcVEJ9Ry.png"
              alt="User App"
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
              alt="Fitter App"
              width={300}
              height={300}
            />
            <p className="mt-[22px]">{t('app_fitter')}</p>
          </motion.div>
        </div>
      </div>

      {/* M3 vs M2 Comparison */}
      <motion.div
        className="mx-auto mt-[60px] w-full px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Title */}
        <motion.h2
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
              alt={t('comparison_m3')}
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
              alt={t('comparison_m2')}
              width={120}
              height={160}
              className="h-auto w-[120px]"
            />
            <span className="text-fluid-base mt-[10px] font-medium">{t('comparison_m2')}</span>
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
      </motion.div>

      {/* Patents */}
      <div className="mt-[35px] mb-[100px] px-[50px]">
        <motion.h4
          className="text-fluid-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('patent_title')}
        </motion.h4>
        <motion.div
          className="mx-auto mt-[30px] w-[258px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/GF70hH681ErUi3qu.webp"
            alt="Patents"
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
      </div>
    </div>
  );
}

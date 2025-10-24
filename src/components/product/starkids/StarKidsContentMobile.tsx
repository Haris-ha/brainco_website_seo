'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import AfterSalesMobile from '@/components/common/AfterSalesMobile';
import { findProductByIdentifier } from '@/lib/api';

import { imgBase, PRIMARY_COLOR, productCode, systemFeatures, trainingModelsMobile } from './data';
import PurchaseButton from './PurchaseButton';

export default function StarKidsContentMobile() {
  const t = useTranslations('StarKids');
  const [product, setProduct] = useState<any>(null);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await findProductByIdentifier(null, productCode, productCode);
      if (productData) {
        setProduct(productData);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="w-full pb-32" style={{ fontFamily: 'PingFang SC', color: '#333' }}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32"
      >
        <Image
          src={`${imgBase}wWBgMfiRAIreQClF.webp`}
          alt="StarKids Mobile Banner"
          width={375}
          height={500}
          className="h-auto w-full"
        />
      </motion.section>

      {/* System Section */}
      <section className="bg-[#F4F4F4] px-6 py-10">
        <div className="text-center">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/mGWZ1YCsNC1Sa1r2.webp"
            alt={t('system_icon_alt')}
            width={100}
            height={100}
            className="mx-auto mb-4 h-auto w-[100px]"
          />
          <h2
            className="text-fluid-2xl font-medium"
            style={{ color: PRIMARY_COLOR }}
            dangerouslySetInnerHTML={{
              __html: t('system_title').replace(/\n/g, '<br/>'),
            }}
          />
        </div>

        {/* Device Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex justify-center"
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/XCIlFueETcdvDBZg.webp"
            alt="StarKids Device"
            width={280}
            height={280}
            className="h-auto w-[280px]"
          />
        </motion.div>

        {/* Features List */}
        <div className="mt-6">
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mt-6 flex items-start px-10"
            >
              <i
                className="mt-3.5 mr-3.5 h-2 w-2 flex-shrink-0 rounded-full"
                style={{ background: PRIMARY_COLOR }}
              />
              <div>
                <h5
                  className="text-fluid-2xl font-medium"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {t(feature.title)}
                </h5>
                <p className="text-fluid-lg">{t(feature.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-10">
        {/* Statistics */}
        <div className="flex justify-evenly">
          {[
            {
              number: t('stats_modules'),
              unit: t('stats_modules_unit'),
              label: t('stats_modules_label'),
            },
            {
              number: t('stats_goals'),
              unit: t('stats_goals_unit'),
              label: t('stats_goals_label'),
            },
            {
              number: t('stats_courses'),
              unit: t('stats_courses_unit'),
              label: t('stats_courses_label'),
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center">
                <span
                  className="text-[32px] leading-none font-bold"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {stat.number}
                </span>
                {stat.unit && (
                  <span
                    className="ml-1.5 text-[10px]"
                    style={{ color: PRIMARY_COLOR }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-fluid-base mt-1 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Module Images */}
        <div className="mt-3 space-y-6">
          {trainingModelsMobile.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`mx-auto ${index === trainingModelsMobile.length - 1 ? 'w-[250px]' : 'w-[276px]'}`}
            >
              <Image
                src={src}
                alt={`Training module ${index + 1}`}
                width={276}
                height={300}
                className="h-auto w-full"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Scene Section */}
      <section className="mt-8 text-center" style={{ color: PRIMARY_COLOR }}>
        <h3 className="text-fluid-2xl font-medium">{t('interactive_title')}</h3>
        <p className="text-fluid-lg mt-2.5">{t('interactive_subtitle')}</p>

        <motion.video
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          autoPlay
          muted
          playsInline
          loop
          className="mx-auto mt-4 w-[320px] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/OaqBxdIPlQRLrAoC.mp4"
        />
        <div className="mt-10">
          <Image
            src={`${imgBase}qlfWXrDgcyPSOJNU.webp`}
            alt="Interactive scene decoration"
            width={375}
            height={200}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Training Mode Section */}
      <section className="mx-6 mt-10 text-center" style={{ color: PRIMARY_COLOR }}>
        <h3 className="text-fluid-2xl font-medium">{t('training_mode_title')}</h3>
        <p className="text-fluid-lg mt-2.5">{t('training_mode_subtitle')}</p>

        <h4 className="text-fluid-lg mt-6 font-medium text-[#333]">
          {t('training_principle')}
        </h4>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <Image
            src={`${imgBase}VlFMqDNQRuUfEHBz.webp`}
            alt="Training principles"
            width={375}
            height={300}
            className="h-auto w-full"
          />
        </motion.div>

        <div className="mt-6 space-y-6 text-center">
          <div>
            <h4 className="text-fluid-lg font-medium text-[#333]">
              {t('neurofeedback_training')}
            </h4>
            <p className="text-fluid-base mt-2">
              {t('neurofeedback_training_desc')}
            </p>
          </div>
          <div>
            <h4 className="text-fluid-lg font-medium text-[#333]">
              {t('video_course')}
            </h4>
            <p className="text-fluid-base mt-2">
              {t('video_course_desc')}
            </p>
          </div>
        </div>

        <motion.video
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          controls
          className="mx-auto mt-6 w-full cursor-pointer rounded-[2.5vw]"
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/video/K9hDdccdM7rYrPwAgzska.mp4"
        />
      </section>

      {/* Recommend Section */}
      <section className="mt-8 bg-[#F4F4F4] pb-10">
        {[
          `${imgBase}lYeGAavBTkrZNKRC.webp`,
          `${imgBase}tPNUWOCvidwHoKIA.webp`,
          `${imgBase}bMQdRfkXcvUwemLP.webp`,
          `${imgBase}rOSylghBkWGqFAHI.webp`,
          `${imgBase}JITGkndKioNvUHWO.webp`,
        ].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              ${index === 0 ? 'w-full' : 'mx-auto'}
              ${index === 1 ? 'mt-6 w-[315px]' : ''}
              ${index === 2 ? 'mt-6 mr-[26px] w-[300px]' : ''}
              ${index === 3 ? 'mt-6 -ml-1 w-[330px]' : ''}
              ${index === 4 ? 'mx-auto mt-7.5 w-[324px]' : ''}
            `}
          >
            <Image
              src={src}
              alt={`Recommendation ${index + 1}`}
              width={375}
              height={400}
              className="h-auto w-full"
            />
          </motion.div>
        ))}
      </section>

      {/* Tracking Section */}
      <section className="mt-8 pt-8 text-center" style={{ color: PRIMARY_COLOR }}>
        <h3 className="text-fluid-2xl font-medium">{t('track_title')}</h3>
        <p className="text-fluid-lg mt-2.5">{t('track_subtitle')}</p>

        <div className="mt-4 space-y-4">
          {[
            `${imgBase}itacOYewsFhgQBvu.webp`,
            `${imgBase}xGSeHUcnudEVPqLj.webp`,
            `${imgBase}zreiQdBWvhqDFHwE.webp`,
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mx-auto w-[300px]"
            >
              <Image
                src={src}
                alt={`Tracking ${index + 1}`}
                width={300}
                height={400}
                className="h-auto w-full"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quantitative Data Section */}
      <section className="mt-8 text-center">
        <h4 className="text-fluid-2xl font-medium">{t('track_data_title')}</h4>
        <div className="text-fluid-base mt-4 space-y-2 px-7.5">
          <p>{t('track_data_desc_1')}</p>
          <p>{t('track_data_desc_2')}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-3"
        >
          <Image
            src={`${imgBase}fWUBcupQhoSIwimG.webp`}
            alt="Quantitative data"
            width={375}
            height={300}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* Intervention Section */}
      <section className="mt-8" style={{ color: PRIMARY_COLOR }}>
        <h3 className="text-fluid-2xl text-center font-medium">
          {t('intervene_title')}
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <Image
            src={`${imgBase}zjHgecWrYumLsvqG.webp`}
            alt="Intervention research"
            width={375}
            height={500}
            className="h-auto w-full"
          />
        </motion.div>

        <div className="mt-6 space-y-4 px-6 text-[#333]">
          <p className="text-[14px]">{t('intervene_disclaimer')}</p>
          <p className="text-[14px]">{t('intervene_hospital_desc')}</p>
          <p className="text-[14px]">{t('intervene_paper')}</p>
          <span className="block text-[12px] text-[#808080]">
            {t('intervene_study_details')}
          </span>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="mt-16 text-center" style={{ color: PRIMARY_COLOR }}>
        <h3 className="text-fluid-2xl font-medium">{t('auth_title')}</h3>
        <p className="text-fluid-lg mt-2.5">{t('auth_subtitle')}</p>

        <div className="mt-4 space-y-2">
          {[
            `${imgBase}iSCerIldwUNBOcmh.webp`,
            `${imgBase}ITKmvLWRMCsxhSdY.webp`,
            `${imgBase}OGhHVYBTDdNiyRMt.webp`,
            `${imgBase}EcBmKxjWeNlHaAhq.webp`,
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mx-auto w-[328px]"
            >
              <Image
                src={src}
                alt={`Innovation ${index + 1}`}
                width={328}
                height={400}
                className="h-auto w-full"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* After Sales Component */}
      <div className="mt-12">
        <AfterSalesMobile
          text={t('after_sales_text')}
          text2={t('after_sales_note')}
        />
      </div>

      {/* Fixed Purchase Button */}
      {product && <PurchaseButton product={product} isMobile />}
    </div>
  );
}

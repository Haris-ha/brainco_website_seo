'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AfterSalesMobile from '@/components/common/AfterSalesMobile';
import {
  deviceFeatures,
  imageUrls,
  meditationCornerImages,
  mindfulnessScenes,
  productPrice,
  productSku,
  salonImages,
  solutionItems,
} from './data';
import PurchaseButton from './PurchaseButton';

export default function FocusZenContentMobile() {
  const t = useTranslations('FocusZen');

  // Product info for purchase button
  const product = {
    id: productSku,
    name: 'FocusZen',
    price: productPrice,
    code: productSku,
    pictureUrl: imageUrls.deviceMain,
  };

  return (
    <div>
      {/* Hero Banner Section */}
      <section
        className="relative flex min-h-[500px] items-end justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrls.heroBannerMobile})`,
        }}
      >
        <div className="flex h-full flex-col items-center px-4 pb-10 text-center text-white">
          {/* 毛玻璃背景容器 */}
          <div className="rounded-2xl px-6 py-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-fluid-3xl mb-1 font-medium"
            >
              {t('hero_title')}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-4xl mb-2 font-medium"
            >
              {t('hero_subtitle')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-4 h-[1px] w-[60px] bg-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-fluid-sm mb-4 opacity-90"
            >
              {t('hero_slogan_1')}
              ,
              {t('hero_slogan_2')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Device Features Section */}
      <section className="py-12">
        <div className="px-4">
          <Image
            src={imageUrls.deviceMain}
            alt="FocusZen Device"
            width={800}
            height={600}
            className="mb-8 w-full"
          />

          <div className="space-y-8">
            {deviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <Image
                  src={feature.icon}
                  alt={t(feature.titleKey)}
                  width={48}
                  height={48}
                  className="flex-shrink-0"
                />
                <div>
                  <h3 className="text-fluid-xl mb-2 font-medium">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-fluid-sm font-light text-gray-700">
                    {t(feature.desc1Key)}
                  </p>
                  <p className="text-fluid-sm font-light text-gray-700">
                    {t(feature.desc2Key)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Neurofeedback Section */}
      <section className="py-12">
        <div className="px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-base mb-1 font-normal"
          >
            {t('neuromindfulness_title')}
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-2xl mb-4 font-medium"
          >
            {t('neurofeedback_title')}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-sm mb-2 font-light"
          >
            {t('neurofeedback_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-fluid-sm mb-8 font-light"
          >
            {t('neurofeedback_desc_2')}
          </motion.p>

          {/* Video */}
          <div className="relative mb-8">
            <video
              muted
              controls
              preload="metadata"
              poster={imageUrls.videoPoster}
              src={imageUrls.videoSrcMobile}
              className="w-full rounded-lg"
            />

            {/* Mindfulness Scenes Overlay */}
            <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-around space-y-4 p-6">
              {mindfulnessScenes.map((scene, index) => (
                <motion.div
                  key={scene.nameKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative w-14"
                >
                  <Image
                    src={scene.image}
                    alt={t(scene.nameKey)}
                    width={58}
                    height={58}
                    className="rounded"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Image
                      src={scene.icon}
                      alt="icon"
                      width={12}
                      height={12}
                      className="mb-1"
                    />
                    <span className="scale-75 transform text-[10px]">
                      {t(scene.nameKey)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Dimensional Report Section */}
      <section className="py-12">
        <div className="px-4">
          <div className="mb-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-2xl relative mb-8 inline-block pb-6 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-gray-900 after:content-['']"
            >
              {t('report_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-sm mb-2 font-light"
            >
              {t('report_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-sm font-light"
            >
              {t('report_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[348px]">
            <Image
              src={imageUrls.report1}
              alt="Report 1"
              width={180}
              height={300}
              className="absolute top-0 left-10 z-10"
            />
            <Image
              src={imageUrls.report2}
              alt="Report 2"
              width={180}
              height={300}
              className="absolute right-10 bottom-0"
            />
          </div>
        </div>
      </section>

      {/* Premium Content Section */}
      <section className="bg-[#edf1f2] py-12">
        <div className="px-4">
          <div className="mb-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-2xl relative mb-8 inline-block pb-6 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-gray-900 after:content-['']"
            >
              {t('content_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-sm mb-2 font-light"
            >
              {t('content_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-sm font-light"
            >
              {t('content_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[348px]">
            <Image
              src={imageUrls.content1}
              alt="Content 1"
              width={180}
              height={300}
              className="absolute top-0 left-8 z-10"
            />
            <Image
              src={imageUrls.content2}
              alt="Content 2"
              width={180}
              height={300}
              className="absolute right-8 bottom-0"
            />
          </div>
        </div>
      </section>

      {/* Group Mindfulness Mode Section */}
      <section className="py-12">
        <div className="relative px-4">
          <div className="mb-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-2xl relative mb-8 inline-block pb-6 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-gray-900 after:content-['']"
            >
              {t('group_mode_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-sm font-light"
            >
              {t('group_mode_desc_1')}
              {t('group_mode_desc_2')}
            </motion.p>
          </div>

          <div
            className="relative h-[290px] bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrls.groupBg})` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={imageUrls.groupMain}
                alt="Group Main"
                width={212}
                height={230}
              />
            </div>
            <Image
              src={imageUrls.groupScreen}
              alt="Screen"
              width={125}
              height={234}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src={imageUrls.groupAvatar1}
              alt="Avatar 1"
              width={17}
              height={17}
              className="absolute top-20 right-24"
            />
            <Image
              src={imageUrls.groupAvatar2}
              alt="Avatar 2"
              width={30}
              height={30}
              className="absolute right-24 bottom-24"
            />
            <Image
              src={imageUrls.groupAvatar3}
              alt="Avatar 3"
              width={24}
              height={24}
              className="absolute bottom-20 left-20"
            />
            <Image
              src={imageUrls.groupAvatar4}
              alt="Avatar 4"
              width={37}
              height={37}
              className="absolute top-22 left-16"
            />
          </div>
        </div>
      </section>

      {/* Community Practice Section */}
      <section className="py-12">
        <div className="px-4">
          <div className="mb-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-2xl mb-8 font-medium"
            >
              {t('community_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-sm font-light"
            >
              {t('community_desc_1')}
              {t('community_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[400px]">
            <Image
              src={imageUrls.community1}
              alt="Community 1"
              width={131}
              height={237}
              className="absolute top-8 left-12"
            />
            <Image
              src={imageUrls.community2}
              alt="Community 2"
              width={131}
              height={237}
              className="absolute top-20 left-1/2 z-20 -translate-x-1/2"
            />
            <Image
              src={imageUrls.community3}
              alt="Community 3"
              width={131}
              height={237}
              className="absolute top-6 right-8"
            />
            <Image
              src={imageUrls.community4}
              alt="Community 4"
              width={44}
              height={58}
              className="absolute top-14 right-32 z-10"
            />
            <Image
              src={imageUrls.community5}
              alt="Community 5"
              width={49}
              height={66}
              className="absolute bottom-40 left-24 z-10"
            />
          </div>
        </div>
      </section>

      {/* Business Solution Section */}
      <section className="relative py-12">
        <Image
          src={imageUrls.businessBg}
          alt="Business Background"
          width={800}
          height={600}
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-end px-6">
          <div className="max-w-xs text-right text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-base mb-2 font-normal"
            >
              {t('business_solution_title')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-sm mb-2 flex items-center justify-end space-x-2"
            >
              <span className="relative pr-2 after:absolute after:top-1/2 after:right-0 after:h-4 after:w-[3px] after:-translate-y-1/2 after:bg-white after:content-['']">
                {t('business_institution')}
              </span>
              <span>{t('business_institution_subtitle')}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-xs mb-6 text-right font-light"
            >
              {t('business_desc')}
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {solutionItems.map((item, index) => (
                <motion.div
                  key={item.nameKey}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={item.icon}
                    alt={t(item.nameKey)}
                    width={24}
                    height={24}
                    className="mb-1"
                  />
                  <span className="text-[10px] font-bold">
                    {t(item.nameKey)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Data Section */}
      <section className="bg-[#edf1f2] py-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-2xl mb-4 px-4 font-normal"
        >
          {t('training_title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-sm mb-2 px-4 font-light"
        >
          {t('training_desc_1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-fluid-sm mb-6 px-4 font-light"
        >
          {t('training_desc_2')}
        </motion.p>

        <div className="relative px-4">
          <Image
            src={imageUrls.training1}
            alt="Training Data"
            width={283}
            height={200}
            className="mx-auto"
          />
          <Image
            src={imageUrls.training2}
            alt="Training Additional"
            width={67}
            height={122}
            className="absolute right-7 bottom-0"
          />
        </div>
      </section>

      {/* Meditation Corner Section */}
      <section className="py-12">
        <div className="px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-2xl mb-10 font-normal"
          >
            <span className="relative pr-3 after:absolute after:top-1/2 after:right-0 after:h-6 after:w-[2px] after:-translate-y-1/2 after:bg-gray-900 after:content-['']">
              {t('meditation_corner')}
            </span>
            <span className="ml-3">{t('meditation_corner_subtitle')}</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-sm mb-8 px-2 text-gray-600"
          >
            {t('meditation_corner_desc_1')}
            {t('meditation_corner_desc_2')}
          </motion.p>

          <div className="flex space-x-2">
            {meditationCornerImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1"
              >
                <Image
                  src={img.url}
                  alt={`Meditation Corner ${index + 1}`}
                  width={120}
                  height={150}
                  className="w-full rounded"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mindfulness Salon Section */}
      <section className="py-12">
        <div className="px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-2xl mb-4 font-medium"
          >
            <span className="relative pr-3 after:absolute after:top-1/2 after:right-0 after:h-6 after:w-[2px] after:-translate-y-1/2 after:bg-gray-900 after:content-['']">
              {t('salon_title')}
            </span>
            <span className="ml-3">{t('salon_subtitle')}</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-sm mb-2 font-light"
          >
            {t('salon_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-sm mb-2 font-light"
          >
            {t('salon_desc_2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-fluid-sm mb-8 font-light"
          >
            {t('salon_desc_3')}
          </motion.p>

          <div className="grid grid-cols-3 gap-0">
            {salonImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Image
                  src={img.url}
                  alt={`Salon ${index + 1}`}
                  width={200}
                  height={150}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12">
        <div className="px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-2xl mb-10 font-normal"
          >
            {t('partners_title')}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={imageUrls.partners}
              alt="Partners"
              width={375}
              height={300}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Fixed Bottom Purchase Bar */}
      <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="ml-4 flex items-baseline">
            <span className="text-fluid-2xl font-medium text-gray-900">
              ¥
              {productPrice / 100}
            </span>
          </div>
          <div className="w-[120px]">
            <PurchaseButton product={product} isMobile />
          </div>
        </div>
      </div>
      <div className="h-20" />
      {' '}
      {/* Spacer for fixed button */}

      {/* After Sales */}
      <AfterSalesMobile />
    </div>
  );
}

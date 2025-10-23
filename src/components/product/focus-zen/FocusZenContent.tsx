'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AfterSales from '@/components/common/AfterSales';
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

export default function FocusZenContent() {
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
      <section className="relative flex min-h-[600px] items-center justify-center lg:min-h-[800px]">
        <Image
          src={imageUrls.heroBanner}
          alt="FocusZen Banner"
          width={1920}
          height={1080}
          className="w-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-20 xl:px-32">
          <div className="flex flex-col items-center text-center text-white">
            {/* 毛玻璃背景容器 */}
            <div className="rounded-3xl bg-white/10 px-12 py-10 backdrop-blur-sm lg:px-16 lg:py-14">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-fluid-6xl mb-2 font-medium"
              >
                {t('hero_title')}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-fluid-7xl relative mb-6 pb-4 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[60%] after:-translate-x-1/2 after:bg-white/80 after:content-['']"
              >
                {t('hero_subtitle')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-fluid-3xl mb-2 font-light opacity-90"
              >
                {t('hero_slogan_1')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-fluid-3xl mb-8 font-light opacity-90"
              >
                {t('hero_slogan_2')}
              </motion.p>

              {/* 价格显示 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mb-6 flex items-baseline justify-center"
              >
                <span className="text-fluid-5xl font-medium text-white">
                  ¥2999
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <PurchaseButton product={product} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Features Section */}
      <section className="relative h-[864px] overflow-hidden pt-[99px] pb-[120px] 2xl:h-[1080px] 2xl:pt-[124px] 2xl:pb-[150px]">
        {/* Circular background decoration - Arc */}
        <div className="absolute top-[-411px] left-[-339px] h-[1272px] w-[1272px] rounded-full border border-[#707070] 2xl:top-[-514px] 2xl:left-[-424px] 2xl:h-[1590px] 2xl:w-[1590px]" />

        {/* Large Device Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative ml-[-90px] 2xl:ml-[-112px]"
        >
          <Image
            src={imageUrls.deviceMain}
            alt="FocusZen Device"
            width={1435}
            height={1000}
            className="w-[1148px] 2xl:w-[1435px]"
            priority
          />
        </motion.div>

        {/* Feature Items on the Arc */}
        <div className="absolute top-0 left-[800px] flex h-full flex-col justify-around 2xl:left-[1000px]">
          {deviceFeatures.map((feature, index) => {
            // Different margin-left for each item to follow the arc curve
            // Normal: 80% scaled, 2xl: original (using CSS classes)
            const marginClasses = [
              'ml-[96px] 2xl:ml-[120px]',
              'ml-[78px] 2xl:ml-[98px]',
              'ml-[-76px] pb-[21px] 2xl:ml-[-106px] 2xl:pb-[26px]',
            ];

            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-start ${marginClasses[index]}`}
              >
                <Image
                  src={feature.icon}
                  alt={t(feature.titleKey)}
                  width={72}
                  height={72}
                  className="relative z-10 mr-4 w-[58px] flex-shrink-0 2xl:mr-5 2xl:w-[72px]"
                />
                <div className="mt-2">
                  <h3 className="text-fluid-4xl 2xl:text-fluid-4xl mb-3 font-normal 2xl:mb-4">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-fluid-xl font-light text-gray-700">
                    {t(feature.desc1Key)}
                  </p>
                  <p className="text-fluid-xl font-light text-gray-700">
                    {t(feature.desc2Key)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Video Neurofeedback Section */}
      <section className="relative mt-10 w-screen">
        {/* Background Video */}
        <video
          muted
          autoPlay
          loop
          playsInline
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          controls={false}
          preload="metadata"
          poster={imageUrls.videoPoster}
          src={imageUrls.videoSrc}
          className="w-full object-contain"
        />

        {/* Left side - Text Content (Absolute positioned) */}
        <div className="absolute -top-20 left-40 flex h-full w-[400px] flex-col justify-center pt-[250px]">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-3xl mb-0 flex items-start leading-tight font-normal"
          >
            {t('neuromindfulness_title')}
            <span className="text-fluid-sm ml-1 leading-none">
              {t('neuromindfulness_trademark')}
            </span>
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-4xl relative mb-6 pb-12 leading-tight font-normal after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
          >
            {t('neurofeedback_title')}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-xl mb-4 font-light"
          >
            {t('neurofeedback_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-xl font-light"
          >
            {t('neurofeedback_desc_2')}
          </motion.p>

          {/* Mindfulness Scenes */}
          <div className="mt-[60px] flex space-x-4">
            {mindfulnessScenes.map((scene, index) => (
              <motion.div
                key={scene.nameKey}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-[88px] flex-shrink-0"
              >
                <Image
                  src={scene.image}
                  alt={t(scene.nameKey)}
                  width={88}
                  height={88}
                  className="cursor-target rounded-lg transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Image
                    src={scene.icon}
                    alt="icon"
                    width={18}
                    height={18}
                    className="mb-2"
                  />
                  <span className="text-fluid-sm">{t(scene.nameKey)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Dimensional Report Section */}
      <section className="scale-[0.8] py-10">
        <div className="mx-auto flex max-w-[90%] items-center justify-center">
          <div className="relative h-[948px] w-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 z-10"
            >
              <Image
                src={imageUrls.report1}
                alt="Report 1"
                width={490}
                height={800}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 bottom-0"
            >
              <Image
                src={imageUrls.report2}
                alt="Report 2"
                width={490}
                height={800}
              />
            </motion.div>
          </div>

          <div className="ml-32 flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-6xl relative mb-12 pb-12 font-normal after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
            >
              {t('report_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-2xl mb-4 font-light"
            >
              {t('report_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl font-light"
            >
              {t('report_desc_2')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Premium Content Section */}
      <section className="bg-[#edf1f2]">
        <div className="mx-auto flex max-w-[90%] items-center justify-center">
          <div className="ml-32 flex flex-col items-end justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-6xl relative mb-12 pb-12 text-left font-normal after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
            >
              {t('content_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-2xl mb-4 w-full max-w-[400px] text-left font-light"
            >
              {t('content_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl w-full max-w-[400px] text-left font-light"
            >
              {t('content_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[948px] w-[800px] scale-[0.7]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 z-10"
            >
              <Image
                src={imageUrls.content1}
                alt="Content 1"
                width={505}
                height={800}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 bottom-0"
            >
              <Image
                src={imageUrls.content2}
                alt="Content 2"
                width={505}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Mindfulness Mode Section */}
      <section className="relative">
        <Image
          src={imageUrls.groupBg}
          alt="Group Background"
          width={1920}
          height={1080}
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-16 2xl:space-x-32">
            {/* Phone and avatars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative scale-[0.8] 2xl:scale-100"
            >
              <Image
                src={imageUrls.groupMain}
                alt="Group Main"
                width={828}
                height={900}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:scale-100">
                <Image
                  src={imageUrls.groupScreen}
                  alt="Screen"
                  width={495}
                  height={920}
                />
              </div>
              {/* Avatar decorations */}
              <Image
                src={imageUrls.groupAvatar1}
                alt="Avatar 1"
                width={67}
                height={67}
                className="absolute top-36 right-24"
              />
              <Image
                src={imageUrls.groupAvatar2}
                alt="Avatar 2"
                width={120}
                height={120}
                className="absolute right-24 bottom-48"
              />
              <Image
                src={imageUrls.groupAvatar3}
                alt="Avatar 3"
                width={95}
                height={95}
                className="absolute bottom-32 left-8"
              />
              <Image
                src={imageUrls.groupAvatar4}
                alt="Avatar 4"
                width={144}
                height={144}
                className="absolute top-44 left-0"
              />
            </motion.div>

            {/* Text content */}
            <div className="text-white">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-fluid-6xl relative mb-12 pb-12 font-normal after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-white after:content-['']"
              >
                {t('group_mode_title')}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-fluid-2xl w-full max-w-[400px] text-left font-light"
              >
                {t('group_mode_desc_1')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-fluid-2xl w-full max-w-[400px] text-left font-light"
              >
                {t('group_mode_desc_2')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Practice Section */}
      <section className="py-24">
        <div className="mx-auto flex max-w-[90%] items-center justify-center gap-16 px-8">
          <div className="ml-10 flex min-w-[320px] flex-1 flex-col items-start justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-6xl relative mb-12 w-full pb-12 text-left font-normal after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
            >
              {t('community_title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-2xl text-left font-light"
            >
              {t('community_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl text-left font-light"
            >
              {t('community_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[880px] w-[880px] scale-[0.8] 2xl:scale-100">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={imageUrls.community1}
                alt="Community 1"
                width={420}
                height={600}
                className="absolute top-6 left-0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="z-20"
            >
              <Image
                src={imageUrls.community2}
                alt="Community 2"
                width={420}
                height={600}
                className="absolute top-36 left-1/2 -translate-x-1/2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={imageUrls.community3}
                alt="Community 3"
                width={420}
                height={600}
                className="absolute top-0 right-0"
              />
            </motion.div>
            <Image
              src={imageUrls.community4}
              alt="Community 4"
              width={140}
              height={160}
              className="absolute top-24 right-96 z-30"
            />
            <Image
              src={imageUrls.community5}
              alt="Community 5"
              width={158}
              height={180}
              className="absolute bottom-52 left-36 z-30"
            />
          </div>
        </div>
      </section>

      {/* Business Solution Section */}
      <section className="relative">
        <Image
          src={imageUrls.businessBg}
          alt="Business Background"
          width={1920}
          height={1080}
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-end px-64">
          <div className="text-right text-white">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-5xl mb-4 font-normal"
            >
              {t('business_solution_title')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-3xl mb-4 flex items-center justify-end space-x-4"
            >
              <span className="relative pr-4 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[3px] after:-translate-y-1/2 after:bg-white after:content-['']">
                {t('business_institution')}
              </span>
              <span>{t('business_institution_subtitle')}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl mb-16 font-light"
            >
              {t('business_desc')}
            </motion.p>

            <div className="flex w-full justify-between">
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
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <span className="text-fluid-3xl font-bold">
                    {t(item.nameKey)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Data Section */}
      <section className="mb-24 bg-[#edf1f2] pt-24 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-5xl mb-6 font-normal"
        >
          {t('training_title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-2xl mb-4 font-light"
        >
          {t('training_desc_1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-fluid-2xl mb-8 font-light"
        >
          {t('training_desc_2')}
        </motion.p>

        <div className="relative mx-auto mt-8 flex max-w-4xl justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={imageUrls.training1}
              alt="Training Data"
              width={1020}
              height={600}
            />
          </motion.div>
          <Image
            src={imageUrls.training2}
            alt="Training Additional"
            width={200}
            height={200}
            className="absolute -right-16 -bottom-16"
          />
        </div>
      </section>

      {/* Meditation Corner Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[90%] px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl mb-10 flex items-center justify-center space-x-4 font-normal"
          >
            <span className="relative pr-5 after:absolute after:top-1/2 after:right-0 after:h-12 after:w-1 after:-translate-y-1/2 after:bg-gray-900 after:content-['']">
              {t('meditation_corner')}
            </span>
            <span>{t('meditation_corner_subtitle')}</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-xl mx-auto mb-4 max-w-[800px] text-gray-600"
          >
            {t('meditation_corner_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-xl mb-12 text-gray-600"
          >
            {t('meditation_corner_desc_2')}
          </motion.p>

          <div className="flex justify-center space-x-4">
            {meditationCornerImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={img.url}
                  alt={`Meditation Corner ${index + 1}`}
                  width={600}
                  height={1000}
                  className="h-full w-full rounded-lg object-cover transition-transform hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mindfulness Salon Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-3xl mb-4 flex items-center justify-center space-x-4 font-medium"
          >
            <span className="relative pr-6 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[5px] after:-translate-y-1/2 after:bg-gray-900 after:content-['']">
              {t('salon_title')}
            </span>
            <span>{t('salon_subtitle')}</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-2xl mb-2 font-light"
          >
            {t('salon_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-2xl mb-2 font-light"
          >
            {t('salon_desc_2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-2xl mb-12 font-light"
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Image
                  src={img.url}
                  alt={`Salon ${index + 1}`}
                  width={640}
                  height={480}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pt-24">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl mb-12 font-normal"
          >
            {t('partners_title')}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src={imageUrls.partners}
              alt="Partners"
              width={1115}
              height={600}
            />
          </motion.div>
        </div>
      </section>

      {/* AfterSales Section */}
      <AfterSales />
    </div>
  );
}

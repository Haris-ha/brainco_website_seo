'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AfterSales from '@/components/common/AfterSales';
import { findProductByIdentifier } from '@/lib/api';
import {
  imageUrls,
  literatureList,
  modeList,
  patentList,
  problemList,
  productCode,
  trainingTypes,
  videoUrls,
} from './data';
import PurchaseButton from './PurchaseButton';

export default function FocusXinContent() {
  const t = useTranslations('FocusXin');
  const [product, setProduct] = useState<any>(null);
  const [showPrincipleVideo, setShowPrincipleVideo] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);

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
    <div className="text-center">
      {/* Hero Banner Section */}
      <section className="relative">
        <Image
          src={imageUrls.heroBanner}
          alt="FocusXin Hero"
          width={1920}
          height={800}
          className="w-full"
        />
        <div className="absolute bottom-[16vw] left-[10vw] text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-fluid-6xl mb-4 font-medium"
          >
            {t('hero_title')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-4xl mb-2 font-normal"
          >
            {t('hero_subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-xl mb-8"
          >
            {t('hero_description')}
          </motion.p>

          {product && (
            <div className="mb-8 flex items-center">
              <span className="text-fluid-4xl font-medium">
                ¥
                {product.price / 100}
              </span>
              {product.oldPrice && (
                <span className="text-fluid-2xl ml-6 text-gray-500 line-through">
                  ¥
                  {product.oldPrice / 100}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center space-x-5">
            {product && <PurchaseButton product={product} />}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowIntroVideo(true)}
              className="text-fluid-xl cursor-target flex h-[82px] w-[260px] items-center justify-center rounded-[41px] border-2 border-gray-900 font-medium transition-all hover:bg-gray-100"
            >
              {t('watch_video')}
              <span className="ml-2">›</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Problem Identification Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-[15vw] font-medium"
        >
          {t('problem_title')}
        </motion.h2>

        <div className="relative mx-auto flex justify-center">
          <Image
            src={imageUrls.problemCenter}
            alt="Problem Center"
            width={528}
            height={528}
            className="w-[27.5vw]"
          />

          {/* Problem bubbles positioned absolutely */}
          <ul className="absolute inset-0">
            {problemList.map((problem, index) => {
              const positions = [
                'left-[calc(50%-27.5vw)] top-1/2 -translate-y-1/2 h-[10vw] w-[10vw]',
                'left-[calc(50%-23.5vw)] top-[calc(50%-18vw)] h-[10.8vw] w-[10.8vw]',
                'left-1/2 top-[calc(50%-27.5vw)] h-[13vw] w-[13vw] -translate-x-1/2',
                'left-[calc(50%+13.5vw)] top-[calc(50%-18vw)] h-[7.8vw] w-[7.8vw]',
                'left-[calc(50%+16.5vw)] top-1/2 -translate-y-1/2 h-[9.8vw] w-[9.8vw]',
              ];
              const backgrounds = ['bg-[#CAD4E7]', 'bg-[#96A2BF]', 'bg-[#96A2BF]', 'bg-[#CCD6E7]', 'bg-[#6B74A8]'];

              return (
                <motion.li
                  key={problem.textKey}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-fluid-xl absolute flex items-center justify-center rounded-full text-white ${positions[index]} ${backgrounds[index]}`}
                  dangerouslySetInnerHTML={{ __html: t(problem.textKey) }}
                />
              );
            })}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-fluid-3xl absolute top-[calc(100%+3vw)] rounded-[2.25vw] bg-[#4F59A5] px-[4.7vw] py-[1.25vw] font-medium text-white"
          >
            {t('problem_conclusion')}
          </motion.p>
        </div>
      </section>

      {/* Neurofeedback Principle Section */}
      <section className="relative pt-24">
        <Image
          src={imageUrls.principle}
          alt="Principle"
          width={1920}
          height={800}
          className="w-full"
        />

        <div className="absolute top-[8vw] left-1/2 flex -translate-x-1/2 flex-col items-center text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-4xl mb-8 text-center font-medium"
            dangerouslySetInnerHTML={{ __html: t('principle_title') }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPrincipleVideo(true)}
            className="text-fluid-xl cursor-target flex h-14 w-[16.2vw] items-center justify-center rounded-[1.5vw] border-2 border-gray-900 font-medium transition-all hover:bg-gray-100"
          >
            {t('watch_principle')}
            <div className="text-fluid-3xl mb-1 ml-2">›</div>
          </motion.button>
        </div>

        <p className="text-fluid-base absolute right-[15vw] bottom-[8%] text-gray-500">
          {t('principle_footnote')}
          <sup>[1]</sup>
        </p>
      </section>

      {/* Mode Advantages Section */}
      <section className="relative -mt-[10vw]">
        <Image
          src={imageUrls.mode}
          alt="Mode"
          width={1920}
          height={800}
          className="w-full"
        />

        <ul className="absolute top-1/2 left-1/2 translate-x-[12vw] -translate-y-1/2 space-y-8">
          {modeList.map((mode, index) => (
            <motion.li
              key={mode.titleKey}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-fluid-4xl flex items-start font-medium"
            >
              {t(mode.titleKey)}
              {mode.superscriptKey && (
                <sup className="text-fluid-base mt-4 ml-1">{t(mode.superscriptKey)}</sup>
              )}
            </motion.li>
          ))}
        </ul>

        <ul className="mt-5 max-w-[80vw] space-y-2 px-[3vw] text-left text-[0.73vw] text-[#A6A6A6]">
          {literatureList.map(lit => (
            <li key={lit.key} className="break-words">
              {t(lit.key)}
            </li>
          ))}
        </ul>
      </section>

      {/* Training Modules Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-[4.8vw] font-medium"
          dangerouslySetInnerHTML={{ __html: t('training_title') }}
        />

        <div className="mx-auto flex max-w-7xl justify-center space-x-5">
          {trainingTypes.map((training, index) => (
            <motion.div
              key={training.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-[23.75vw]"
            >
              <h5 className="text-fluid-2xl mb-4 font-medium">{t(training.nameKey)}</h5>
              <Image
                src={training.image}
                alt={t(training.nameKey)}
                width={456}
                height={456}
                className="w-full"
              />
              <p className="text-fluid-lg mt-5 text-[#3b3b3b]">{t(training.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Assessment Integration Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-4 font-medium"
        >
          {t('assessment_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-xl mb-[4.6vw]"
          dangerouslySetInnerHTML={{ __html: t('assessment_description') }}
        />

        <div className="relative mx-auto flex max-w-6xl justify-center space-x-6">
          <Image
            src={imageUrls.assessment1}
            alt="Assessment 1"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.assessment2}
            alt="Assessment 2"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.logo}
            alt="Logo"
            width={104}
            height={104}
            className="absolute -bottom-8 left-1/2 w-[5.4vw] translate-x-[34vw]"
          />
        </div>
      </section>

      {/* Gamified Training Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-4 font-medium"
        >
          {t('game_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-xl mb-[4.6vw]"
          dangerouslySetInnerHTML={{ __html: t('game_description') }}
        />

        <div className="relative mx-auto flex max-w-6xl justify-center space-x-6">
          <Image
            src={imageUrls.game1}
            alt="Game 1"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.game2}
            alt="Game 2"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.logo}
            alt="Logo"
            width={104}
            height={104}
            className="absolute -bottom-8 left-1/2 w-[5.4vw] translate-x-[34vw]"
          />
        </div>
      </section>

      {/* Effect Tracking Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-4 font-medium"
        >
          {t('tracking_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-xl mb-[4.6vw]"
          dangerouslySetInnerHTML={{ __html: t('tracking_description') }}
        />

        <div className="relative mx-auto flex max-w-6xl justify-center space-x-6">
          <Image
            src={imageUrls.tracking1}
            alt="Tracking 1"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.tracking2}
            alt="Tracking 2"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.logo}
            alt="Logo"
            width={104}
            height={104}
            className="absolute -bottom-8 left-1/2 w-[5.4vw] translate-x-[34vw]"
          />
        </div>
      </section>

      {/* Scientific Verification Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-[5.7vw] font-medium"
        >
          {t('verification_title')}
        </motion.h2>

        <div className="mx-auto flex max-w-7xl justify-center space-x-[8.3vw]">
          <Image
            src={imageUrls.verification1}
            alt="Verification 1"
            width={654}
            height={654}
            className="w-[34vw]"
          />
          <Image
            src={imageUrls.verification2}
            alt="Verification 2"
            width={654}
            height={654}
            className="w-[34vw]"
          />
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-[5.2vw] font-medium"
          dangerouslySetInnerHTML={{ __html: t('patent_title') }}
        />

        <Image
          src={imageUrls.patent}
          alt="Patent"
          width={828}
          height={400}
          className="mx-auto mb-7 w-[43vw]"
        />

        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-3 gap-y-3 text-[0.94vw] text-gray-500">
          {patentList.map((patentNumber, groupIndex) => (
            <div key={groupIndex} className="flex flex-col space-y-3">
              <span>
                {t('patent_prefix')}
                {patentNumber}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AfterSales Section */}
      <AfterSales is15Days={true} />

      {/* Principle Video Modal */}
      <AnimatePresence>
        {showPrincipleVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
            onClick={() => setShowPrincipleVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative h-full w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPrincipleVideo(false)}
                className="absolute top-5 right-5 z-10 cursor-pointer text-6xl text-white hover:text-gray-300"
              >
                ×
              </button>
              <video
                autoPlay
                controls
                controlsList="nodownload noremoteplayback"
                src={videoUrls.principle}
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Introduction Video Modal */}
      <AnimatePresence>
        {showIntroVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
            onClick={() => setShowIntroVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative h-full w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowIntroVideo(false)}
                className="absolute top-5 right-5 z-10 cursor-pointer text-6xl text-white hover:text-gray-300"
              >
                ×
              </button>
              <video
                autoPlay
                controls
                controlsList="nodownload noremoteplayback"
                src={videoUrls.introduction}
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

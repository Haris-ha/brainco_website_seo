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
import PlayIcon from './PlayIcon';
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
    <main className="text-center">
      {/* Hero Banner Section */}
      <header className="relative">
        <Image
          src={imageUrls.heroBanner}
          alt="FocusXin 专注力训练课堂设备 - 产品展示 / FocusXin Focus Training Classroom Device - Product Display"
          width={1920}
          height={800}
          className="w-full"
        />
        <div className="absolute bottom-[10vw] left-[10vw] text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-fluid-5xl mb-4 font-bold whitespace-pre-wrap"
          >
            {t('hero_title')}
          </motion.h1>
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-5xl mb-8 font-normal"
          >
            {t('hero_subtitle')}
          </motion.h2> */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-2xl mb-8 max-w-[60%]"
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

          <div className="flex flex-col items-start justify-center gap-8">
            {product && <PurchaseButton product={product} />}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowIntroVideo(true)}
              className="text-fluid-2xl cursor-target flex h-[72px] w-[260px] items-center justify-center rounded-[41px] border-2 border-[#4F59A5] font-medium !text-[#4F59A5] transition-all hover:bg-gray-100"
            >
              {t('watch_video')}
              <PlayIcon size={24} color="#4F59A5" className="mb-1 ml-2" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Problem Identification Section */}
      <section className="py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-5xl mb-[24vw] font-semibold"
        >
          {t('problem_title')}
        </motion.h2>

        <div className="relative mx-auto flex justify-center">
          <Image
            src={imageUrls.problemCenter}
            alt="FocusXin 专注力问题识别中心图 - 常见专注力问题可视化 / FocusXin focus problem identification center - Common focus issues visualization"
            width={528}
            height={528}
            className="w-[27.5vw]"
          />

          {/* Problem bubbles positioned absolutely */}
          <ul className="absolute inset-0">
            {problemList.map((problem, index) => {
              const positions = [
                'left-[calc(50%-32.5vw)] top-1/2 -translate-y-1/2 h-[10vw] w-[10vw] !text-[#333]',
                'left-[calc(50%-26.5vw)] top-[calc(50%-20vw)] h-[10.8vw] w-[10.8vw] !text-white',
                'left-1/2 top-[calc(50%-30.5vw)] h-[13vw] w-[13vw] -translate-x-1/2 !text-[#333]',
                'left-[calc(50%+16.5vw)] top-[calc(50%-18vw)] h-[8.8vw] w-[8.8vw] !text-[#333]',
                'left-[calc(50%+23.5vw)] top-1/2 -translate-y-1/2 h-[9.8vw] w-[9.8vw] !text-white',
              ];
              const backgrounds = ['bg-[#808BC98A]', 'bg-[#808BC9]', 'bg-[#9EA8DF8A]', 'bg-[#808BC994]', 'bg-[#808BC9]'];

              return (
                <motion.li
                  key={problem.textKey}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-fluid-xl absolute flex items-center justify-center rounded-full font-medium ${positions[index]} ${backgrounds[index]}`}
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
            className="text-fluid-3xl absolute top-[calc(100%+6vw)] rounded-[2.25vw] bg-[#4F59A5] px-[4.7vw] py-[1.25vw] font-medium !text-white"
          >
            {t('problem_conclusion')}
          </motion.p>
        </div>
      </section>

      {/* Neurofeedback Principle Section */}
      <section className="relative pt-82">
        <Image
          src={imageUrls.principle}
          alt="FocusXin 神经反馈训练原理示意图 - 脑电信号实时反馈机制 / FocusXin neurofeedback training principle - Real-time EEG signal feedback mechanism"
          width={1920}
          height={800}
          className="w-full"
        />

        <div className="absolute top-[12vw] left-1/2 flex -translate-x-1/2 flex-col items-center text-left">
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
            className="text-fluid-2xl cursor-target flex h-[72px] w-[360px] items-center justify-center rounded-full border-2 border-[#4F59A5] font-medium !text-[#4F59A5] transition-all hover:bg-gray-100"
          >
            {t('watch_principle')}
            <PlayIcon size={24} color="#4F59A5" className="mb-1 ml-2" />
          </motion.button>
        </div>

        <p className="text-fluid-base absolute right-[15vw] bottom-[4%] text-gray-500">
          {t('principle_footnote')}
          <sup>[1]</sup>
        </p>
      </section>

      {/* Mode Advantages Section */}
      <section className="relative -mt-[10vw]">
        <Image
          src={imageUrls.mode}
          alt="FocusXin 训练模式优势展示 - 多种训练模式对比 / FocusXin training mode advantages - Multiple training modes comparison"
          width={1920}
          height={800}
          className="w-full"
        />

        <ul className="absolute top-1/2 left-1/2 translate-x-[8vw] -translate-y-1/2 space-y-8">
          {modeList.map((mode, index) => (
            <motion.li
              key={mode.titleKey}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-fluid-4xl flex items-start font-semibold text-[#111827] "
            >
              {t(mode.titleKey)}
              {mode.superscriptKey && (
                <sup className="text-fluid-base mt-4 ml-1">{t(mode.superscriptKey)}</sup>
              )}
            </motion.li>
          ))}
        </ul>

        <ul className="mt-8 ml-24 max-w-[80vw] space-y-2 px-[3vw] text-left text-[0.9vw] text-[#6B7280]">
          {literatureList.map(lit => (
            <li key={lit.key} className="flex items-start break-words">
              <span className="mt-2 mr-4 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: '#6B7280' }} />
              {t(lit.key)}
            </li>
          ))}
        </ul>
      </section>

      {/* Training Modules Section */}
      <section className="py-64">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-5xl mx-auto mb-[4.8vw] max-w-[72vw] font-semibold"
          dangerouslySetInnerHTML={{ __html: t('training_title') }}
        />

        <div className="mx-auto flex items-start justify-between space-x-5">
          {trainingTypes.map((training, index) => (
            <motion.div
              key={training.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <h5 className="text-fluid-3xl mb-4 font-semibold">{t(training.nameKey)}</h5>
              <Image
                src={training.image}
                alt={`${t(training.nameKey)} - FocusXin 训练模块示意图 / ${t(training.nameKey)} - FocusXin training module illustration`}
                width={456}
                height={456}
                className="w-full"
              />
              <p className="text-fluid-2xl mx-auto mt-8 max-w-[80%] text-center text-[#111827]">{t(training.descKey)}</p>
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
          className="text-fluid-4xl mb-4 font-semibold"
        >
          {t('assessment_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-2xl mb-[4.6vw] text-[#111827]"
          dangerouslySetInnerHTML={{ __html: t('assessment_description') }}
        />

        <div className="relative mx-auto flex max-w-6xl justify-center space-x-6">
          <Image
            src={imageUrls.assessment1}
            alt="FocusXin 能力评估界面 1 - 专注力评估测试展示 / FocusXin ability assessment interface 1 - Focus assessment test display"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.assessment2}
            alt="FocusXin 能力评估界面 2 - 评估结果分析展示 / FocusXin ability assessment interface 2 - Assessment result analysis display"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.logo}
            alt="FocusXin Logo - 专注力训练产品标识 / FocusXin Logo - Focus training product logo"
            width={104}
            height={104}
            className="absolute -bottom-8 left-1/2 w-[5.4vw] translate-x-[34vw]"
          />
        </div>
      </section>

      {/* Gamified Training Section */}
      <section className="pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-4xl mb-4 font-semibold"
        >
          {t('game_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-2xl mb-[4.6vw] text-[#111827]"
          dangerouslySetInnerHTML={{ __html: t('game_description') }}
        />

        <div className="relative mx-auto flex max-w-6xl justify-center space-x-6">
          <Image
            src={imageUrls.game1}
            alt="FocusXin 游戏化训练界面 1 - 互动训练游戏展示 / FocusXin gamified training interface 1 - Interactive training game display"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.game2}
            alt="FocusXin 游戏化训练界面 2 - 训练游戏场景展示 / FocusXin gamified training interface 2 - Training game scene display"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.logo}
            alt="FocusXin Logo - 专注力训练产品标识 / FocusXin Logo - Focus training product logo"
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
          className="text-fluid-4xl mb-4 font-semibold"
        >
          {t('tracking_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-2xl mb-[4.6vw] text-[#111827]"
          dangerouslySetInnerHTML={{ __html: t('tracking_description') }}
        />

        <div className="relative mx-auto flex max-w-6xl justify-center space-x-6">
          <Image
            src={imageUrls.tracking1}
            alt="FocusXin 训练效果追踪界面 1 - 专注力变化趋势图 / FocusXin training effect tracking interface 1 - Focus change trend chart"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.tracking2}
            alt="FocusXin 训练效果追踪界面 2 - 训练数据分析报告 / FocusXin training effect tracking interface 2 - Training data analysis report"
            width={728}
            height={728}
            className="w-[38vw]"
          />
          <Image
            src={imageUrls.logo}
            alt="FocusXin Logo - 专注力训练产品标识 / FocusXin Logo - Focus training product logo"
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
            alt="FocusXin 科学验证研究 1 - 专注力训练效果验证报告 / FocusXin scientific verification research 1 - Focus training effectiveness validation report"
            width={654}
            height={654}
            className="w-[34vw]"
          />
          <Image
            src={imageUrls.verification2}
            alt="FocusXin 科学验证研究 2 - 训练效果数据统计 / FocusXin scientific verification research 2 - Training effect data statistics"
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
          alt="FocusXin 产品专利证书 - 技术创新与知识产权 / FocusXin product patents - Technical innovation and intellectual property"
          width={828}
          height={400}
          className="mx-auto mb-7 w-[43vw]"
        />

        {/* AfterSales Section */}
        <div className="my-16">
          <AfterSales is15Days={true} />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-4 gap-x-4 gap-y-3 text-[0.94vw] text-[#6B7280]">
          {patentList.map((patentNumber, groupIndex) => (
            <div key={groupIndex} className="text-center whitespace-nowrap">
              {t('patent_prefix')}
              {patentNumber}
            </div>
          ))}
        </div>
      </section>

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
                type="button"
                onClick={() => setShowPrincipleVideo(false)}
                className="absolute top-5 right-5 z-10 cursor-pointer text-6xl !text-white hover:text-gray-300"
                aria-label="关闭视频 / Close video"
              >
                ×
              </button>
              <video
                autoPlay
                controls
                controlsList="nodownload noremoteplayback"
                src={videoUrls.principle}
                className="h-full w-full"
                aria-label="FocusXin 神经反馈训练原理演示视频 / FocusXin neurofeedback training principle demo video"
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
                type="button"
                onClick={() => setShowIntroVideo(false)}
                className="absolute top-5 right-5 z-10 cursor-pointer text-6xl !text-white hover:text-gray-300"
                aria-label="关闭视频 / Close video"
              >
                ×
              </button>
              <video
                autoPlay
                controls
                controlsList="nodownload noremoteplayback"
                src={videoUrls.introduction}
                className="h-full w-full"
                aria-label="FocusXin 产品介绍演示视频 / FocusXin product introduction demo video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

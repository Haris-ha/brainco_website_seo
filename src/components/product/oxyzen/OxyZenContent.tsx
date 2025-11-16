'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import AfterSales from '@/components/common/AfterSales';
import { appDownloadData, purchaseLink, socialMediaData } from './data';
import PurchaseButton from './PurchaseButton';

type OxyZenContentProps = {
  productInfo?: any;
};

export default function OxyZenContent({ productInfo }: OxyZenContentProps) {
  const t = useTranslations('OxyZen');
  const locale = useLocale();
  const isChineseLocale = locale.startsWith('zh');

  return (
    <main className="bg-white text-[#333]">
      {/* Hero Banner */}
      <header className="relative">
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oC1WrNlfkwV4dAXv.webp"
          />
          <source
            media="(max-width: 900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fxm7kxmChGi5Rw44.webp"
          />
          <img
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oC1WrNlfkwV4dAXv.webp"
            alt="OxyZen 氧气能量补充设备 - 产品展示 / OxyZen Oxygen Energy Device - Product Display"
            className="w-full"
          />
        </picture>

        <div className="absolute top-0 left-1/2 flex h-full w-full max-w-[332px] -translate-x-[-80px] flex-col items-center justify-center">
          <motion.h1
            className={`text-fluid-6xl font-normal ${isChineseLocale ? 'text-white' : 'text-[#1F1F1F]'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('product_name')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jwVL5GHGoetrtLNM.webp"
              alt={`${t('product_subtitle')} - OxyZen 产品副标题标识 / ${t('product_subtitle')} - OxyZen Product Subtitle Logo`}
              width={160}
              height={80}
              className="h-auto w-40"
            />
          </motion.div>
          <motion.div
            className="mt-4 w-full border-t border-[#666666] pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p
            className="text-fluid-3xl mb-2 w-full text-center font-light text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {t('tagline_1')}
          </motion.p>
          <motion.p
            className="text-fluid-3xl mb-9 w-full text-center font-light text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {t('tagline_2')}
          </motion.p>

          {productInfo && (
            <motion.div
              className="flex w-full flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="flex justify-center">
                <span className="text-fluid-5xl mr-7 text-[#333]">
                  ¥
                  {productInfo.price / 100}
                </span>
                {productInfo.oldPrice && (
                  <s className="text-fluid-5xl text-[#000] opacity-50">
                    ¥
                    {productInfo.oldPrice / 100}
                  </s>
                )}
              </div>
              <PurchaseButton product={productInfo} />
            </motion.div>
          )}
        </div>
      </header>

      {/* Product Image */}
      <section className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/iftXG0SL0Cr5V08e.webp"
          alt="OxyZen 产品佩戴展示图 - 氧气能量补充设备使用场景 / OxyZen Product Wearing Display - Oxygen Energy Device Usage Scene"
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
        <motion.div
          className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-end pb-[4.27vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5fiJCWcxEy5VLUxa.webp"
            alt="OxyZen 获奖标识 / OxyZen Award Logo"
            width={290}
            height={100}
            className="mb-8 h-auto w-[15.1vw]"
            role="presentation"
          />
          <p className="text-fluid-2xl">{t('award_text')}</p>
        </motion.div>
      </section>

      {/* Data Collection */}
      <section className="pt-[5.83vw] pb-[10.15vw] text-center">
        <motion.h2
          className="text-fluid-5xl mb-5 font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('data_collection_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-2xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('data_collection_desc_1')}
        </motion.p>
        <motion.p
          className="text-fluid-2xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('data_collection_desc_2')}
        </motion.p>

        <ul className="mt-[3.125vw] flex justify-center gap-[3.33vw]">
          {[
            { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/v1KcdkCd82vI9Jak.webp', label: 'eeg' },
            { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yEhR5bpcCX5euLzV.webp', label: 'heart_rate' },
            { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UifZOlpUJ2jyiWfR.webp', label: 'blood_oxygen' },
          ].map((item, index) => (
            <motion.li
              key={item.label}
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Image
                src={item.icon}
                alt={`${t(item.label as any)} - OxyZen 数据采集功能图标 / ${t(item.label as any)} - OxyZen Data Collection Feature Icon`}
                width={60}
                height={60}
                className="mr-3 h-auto w-auto"
              />
              <span className="text-fluid-3xl">{t(item.label as any)}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mx-auto mt-[7.7vw] w-[43.95vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Xk6yoAjyJNl4ND2V.webp"
            alt="OxyZen 数据采集设备展示图 - 多维度健康数据监测 / OxyZen Data Collection Device Display - Multi-dimensional Health Data Monitoring"
            width={844}
            height={600}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* Design Features */}
      <section className="bg-[#edf1f2] px-[1.56vw] py-[2.6vw]">
        <div className="flex justify-center gap-[1.56vw]">
          {/* Left Column */}
          <div className="flex w-[38.33vw] flex-col gap-[1.56vw]">
            <motion.div
              className="flex flex-col items-center rounded-[2.86vw] bg-white px-[2.08vw] pt-[3.38vw] pb-[2.08vw]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-fluid-5xl mb-5 font-medium">{t('design_magnetic_title')}</h3>
              <p
                className="text-fluid-2xl leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: t('design_magnetic_desc').replace(/\n/g, '<br />') }}
              />
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/LewVPJHtk60Dy2hS.webp"
                alt={`${t('design_magnetic_title')} - OxyZen 磁吸设计示意图 / ${t('design_magnetic_title')} - OxyZen Magnetic Design Illustration`}
                width={568}
                height={300}
                className="mt-5 h-auto w-[29.58vw]"
              />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-[2.86vw] bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/beazFEGimF59Rbvo.webp"
                alt="OxyZen 设计特性展示图 - 产品外观与功能展示 / OxyZen Design Features Display - Product Appearance and Functionality"
                width={736}
                height={400}
                className="h-auto w-full"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex w-[26.66vw] flex-col gap-[1.56vw]">
            <motion.div
              className="flex flex-col items-center rounded-[2.86vw] bg-white px-[2.08vw] pt-[3.38vw] pb-[2.08vw]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h3 className="text-fluid-5xl mb-6 font-medium">{t('design_comfortable_title')}</h3>
              <p
                className="text-fluid-2xl text-center leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: t('design_comfortable_desc').replace(/\n/g, '<br />') }}
              />
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CrrdayolPeH3kgXx.webp"
                alt={`${t('design_comfortable_title')} - OxyZen 舒适设计示意图 / ${t('design_comfortable_title')} - OxyZen Comfortable Design Illustration`}
                width={275}
                height={200}
                className="mt-6 h-auto w-[14.32vw]"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center rounded-[2.86vw] bg-white px-[2.08vw] pt-[3.02vw] pb-[1.87vw]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3 className="text-fluid-5xl mb-6 font-medium">{t('design_portable_title')}</h3>
              <p
                className="text-fluid-2xl text-center leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: t('design_portable_desc').replace(/\n/g, '<br />') }}
              />
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SEH2rPIKwdnQxgx1.webp"
                alt={`${t('design_portable_title')} - OxyZen 便携设计示意图 / ${t('design_portable_title')} - OxyZen Portable Design Illustration`}
                width={390}
                height={300}
                className="mt-[2.7vw] h-auto w-[20.31vw]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Indicators */}
      <section className="flex items-center justify-center gap-[12.5vw] py-[3.125vw]">
        <div className="max-w-[600px] text-left">
          <motion.h2
            className="text-fluid-5xl relative mb-[3.125vw] pb-[3.125vw] font-medium after:absolute after:bottom-0 after:left-0 after:h-[0.26vw] after:w-[2.08vw] after:bg-[#333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('indicators_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-2xl mb-5 font-thin"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('indicators_desc_1')}
          </motion.p>
          <motion.p
            className="text-fluid-2xl font-thin"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            dangerouslySetInnerHTML={{ __html: t('indicators_desc_2').replace(/\n/g, '<br />') }}
          />

          <ul className="mt-[4.9vw] flex items-center gap-[2.6vw]">
            {[
              { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/erf4oSW4RsApX9an.webp', label: 'mindfulness_index' },
              { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/b4AIgvmOSvtoi2TC.webp', label: 'heart_rate' },
              { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CwWiNTmB7klLvtDa.webp', label: 'blood_oxygen' },
            ].map((item, index) => (
              <motion.li
                key={item.label}
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <Image
                  src={item.icon}
                  alt={`${t(item.label as any)} - OxyZen 3D指标功能图标 / ${t(item.label as any)} - OxyZen 3D Indicator Feature Icon`}
                  width={60}
                  height={60}
                  className="mr-4 h-auto w-auto"
                />
                <span className="text-fluid-3xl">{t(item.label as any)}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="w-[27.6vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fHPc2QXmcbrsKvHA.webp"
            alt="OxyZen 3D指标应用界面展示 - 健康数据可视化 / OxyZen 3D Indicators App Interface Display - Health Data Visualization"
            width={530}
            height={600}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* 9D Parsing */}
      <section className="pt-[5.83vw] pb-[6.125vw] text-center">
        <motion.h2
          className="text-fluid-5xl mb-5 font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('parsing_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-2xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('parsing_desc_1')}
        </motion.p>
        <motion.p
          className="text-fluid-2xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('parsing_desc_2')}
        </motion.p>

        <div className="relative mx-auto mt-[4.58vw] h-[34.68vw] w-[58.43vw] rounded-full border border-[#d8d6d6] p-[1.09vw]">
          <div className="h-full w-full rounded-full border border-[#d8d6d6]" />

          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/WAowa05JcAyTF6AL.webp"
            alt="OxyZen 9D解析维度图 1 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 1 - Health Data Analysis Dimension"
            width={270}
            height={200}
            className="absolute top-0 left-1/2 z-10 h-auto w-[14.06vw] -translate-x-[12.5vw] -translate-y-[3.64vw]"
            role="presentation"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Ls3phK4hHBivlNDI.webp"
            alt="OxyZen 9D解析维度图 2 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 2 - Health Data Analysis Dimension"
            width={276}
            height={200}
            className="absolute top-0 left-1/2 h-auto w-[14.37vw] -translate-x-[2.08vw] -translate-y-[1.3vw]"
            role="presentation"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Tyw4f2mxbbxhy7kD.png"
            alt="OxyZen 9D解析中心图 - 多维度健康数据分析 / OxyZen 9D Parsing Center - Multi-dimensional Health Data Analysis"
            width={358}
            height={300}
            className="absolute top-[39%] left-1/2 z-20 h-auto w-[18.64vw] -translate-x-1/2"
          />

          <ul className="absolute top-0 left-0 h-full w-full">
            {[
              { label: 'dimension_1', style: 'top-[2.34vw] left-[5.52vw]' },
              { label: 'dimension_2', style: 'top-[12.76vw] left-[-3.125vw]' },
              { label: 'dimension_3', style: 'top-[24.06vw] left-0' },
              { label: 'dimension_4', style: 'top-[30vw] left-[12.5vw]' },
              { label: 'dimension_5', style: 'top-[31.25vw] left-[30.62vw]' },
              { label: 'dimension_6', style: 'left-[45.83vw] top-[26.82vw]' },
              { label: 'dimension_7', style: 'top-[18.02vw] left-[52.29vw]' },
              { label: 'dimension_8', style: 'left-[50.93vw] top-[7.29vw]' },
              { label: 'dimension_9', style: 'top-0 left-[42.7vw]' },
            ].map((item, index) => (
              <motion.li
                key={item.label}
                className={`text-fluid-xl absolute flex h-[4vw] w-[8vw] items-center justify-center rounded-[1.35vw] bg-gradient-to-b from-[#edfdfd] to-[#82c8c4] font-light ${item.style}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                {t(item.label as any)}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sleep Content */}
      <section className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KMdRLRBvdixnEOm7.webp"
          alt="OxyZen 睡眠内容背景图 - 优质睡眠内容展示 / OxyZen Sleep Content Background - Premium Sleep Content Display"
          width={1920}
          height={1080}
          className="h-auto w-full"
          role="presentation"
        />
        <div className="absolute top-0 left-0 h-full w-full pt-[5.83vw] text-center text-white">
          <motion.h2
            className="text-fluid-5xl mb-5 font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('content_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-2xl leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('content_desc_1')}
          </motion.p>
          <motion.p
            className="text-fluid-2xl leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('content_desc_2')}
          </motion.p>
          <motion.div
            className="mx-auto mt-[1.82vw] w-[66.25vw]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3cnnb6RhNtvQJW7d.webp"
              alt="OxyZen 睡眠内容界面展示 - 优质睡眠课程内容 / OxyZen Sleep Content Interface Display - Premium Sleep Course Content"
              width={1272}
              height={800}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Social Media & Downloads */}
      <section className="flex justify-center gap-[0.41vw] bg-[#f8f8f8] pt-[0.83vw] pb-[5.83vw]">
        {/* Follow Us */}
        <div className="w-[14.84vw]">
          <h3 className="text-fluid-2xl mb-2 pt-8 font-normal">{t('follow_us')}</h3>
          <div className="mb-2 flex h-[9.73vw] items-center justify-center bg-white">
            <Image
              src={socialMediaData.wechat.qrCode}
              alt="OxyZen 微信公众号二维码 - 扫码关注获取更多信息 / OxyZen WeChat Official Account QR Code - Scan to Follow for More Information"
              width={82}
              height={82}
              className="mr-[1.56vw] h-auto w-[4.27vw]"
            />
            <span className="text-fluid-lg w-[5.72vw] text-center">{t('wechat_official')}</span>
          </div>
          <div className="flex h-[9.73vw] items-center justify-center bg-white">
            <Image
              src={socialMediaData.xiaohongshu.qrCode}
              alt="OxyZen 小红书账号二维码 - 扫码关注获取更多信息 / OxyZen Xiaohongshu Account QR Code - Scan to Follow for More Information"
              width={82}
              height={82}
              className="mr-[1.56vw] h-auto w-[4.27vw]"
            />
            <div className="flex w-[5.72vw] flex-col items-center">
              <span className="text-fluid-lg text-center">{t('xiaohongshu')}</span>
              <span className="text-fluid-lg text-center">{t('xiaohongshu_account')}</span>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="ml-[0.41vw] w-[13.54vw] pt-[3.85vw]">
          <div className="flex h-full items-center justify-center bg-white">
            <Image
              src={socialMediaData.mainImage}
              alt="OxyZen 产品主图 - 氧气能量补充设备 / OxyZen Product Main Image - Oxygen Energy Device"
              width={164}
              height={164}
              className="h-auto w-[8.54vw]"
            />
          </div>
        </div>

        {/* Downloads */}
        <div className="ml-[1.25vw] w-[28.33vw]">
          <div className="flex gap-[0.41vw]">
            <ul>
              <li className="text-fluid-2xl mb-2 pt-8">{t('download_app')}</li>
              <li className="mb-2 flex h-[5.1vw] w-[14.84vw] items-center bg-white pl-4">
                <Image
                  src={appDownloadData.ios.qrCode}
                  alt="OxyZen iOS 应用下载二维码 - 扫码下载 iOS 应用 / OxyZen iOS App Download QR Code - Scan to Download iOS App"
                  width={80}
                  height={80}
                  className="mr-[4.16vw] h-auto w-[4.16vw]"
                />
                <span className="text-fluid-lg">{t('ios')}</span>
              </li>
              <li className="flex h-[5.1vw] w-[14.84vw] items-center bg-white pl-4">
                <Image
                  src={appDownloadData.android.qrCode}
                  alt="OxyZen Android 应用下载二维码 - 扫码下载 Android 应用 / OxyZen Android App Download QR Code - Scan to Download Android App"
                  width={80}
                  height={80}
                  className="mr-[4.16vw] h-auto w-[4.16vw]"
                />
                <span className="text-fluid-lg">{t('android')}</span>
              </li>
            </ul>

            <div className="w-[13.02vw]">
              <h3 className="text-fluid-2xl mb-2 pt-8 font-normal">{t('cooperation')}</h3>
              <div className="flex h-[10.62vw] flex-col items-center justify-center bg-white">
                <Image
                  src={socialMediaData.cooperation.qrCode}
                  alt="OxyZen 微信客服二维码 - 扫码联系客服 / OxyZen WeChat Assistant QR Code - Scan to Contact Customer Service"
                  width={82}
                  height={82}
                  className="h-auto w-[4.27vw]"
                />
                <span className="text-fluid-lg mt-4">{t('wechat_assistant')}</span>
              </div>
            </div>
          </div>

          {/* Purchase Link */}
          <div className="mt-2">
            <h3 className="text-fluid-2xl mb-2 font-normal">{t('purchase_link')}</h3>
            <div className="text-fluid-base flex h-[5.46vw] items-center justify-center bg-white">
              {purchaseLink}
            </div>
          </div>
        </div>
      </section>

      {/* After Sales */}
      <AfterSales />
    </main>
  );
}

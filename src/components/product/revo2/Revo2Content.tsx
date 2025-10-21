'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colorImages, productVersions, technicalSpecs } from './data';

export default function Revo2Content() {
  const t = useTranslations('Revo2');
  const [selectedColorIndex, setSelectedColorIndex] = useState(1); // Default to middle (流光银)

  return (
    <div className="bg-black text-white">
      {/* Hero Video Section */}
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          loop
          muted
          autoPlay
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/b7z0t3TqNhyEO6sv.mp4"
          className="block w-full"
        />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
          <motion.h1
            className="text-fluid-6xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('product_name')}
            <span className="ml-6 bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-bold text-transparent">
              {t('product_model')}
            </span>
          </motion.h1>
          <motion.p
            className="text-fluid-3xl mt-5 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            className="mt-14 flex gap-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              href="/company/contact#contact"
              className="cursor-target text-fluid-3xl flex h-[90px] w-[264px] items-center justify-center rounded-[45px] bg-[#1a74bf] !text-white transition-transform hover:scale-105"
            >
              {t('contact_us')}
            </Link>
            <a
              href="https://www.brainco-hz.com/docs/revolimb-hand/revo2/parameters.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-fluid-3xl flex h-[90px] w-[264px] items-center justify-center rounded-[45px] border border-white !text-white transition-transform hover:scale-105"
            >
              {t('documentation')}
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Compact Feature */}
      <section className="mt-29 text-center">
        <motion.h2
          className="text-fluid-5xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-normal text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_compact_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-2xl mt-7 text-[#c7cdd4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('feature_compact_desc').replace(/\n/g, '<br />') }}
        />
        <motion.div
          className="mx-auto mt-10 w-[1126px] overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/J2yne8HbRF6EMqzx.webp"
            alt=""
            width={1126}
            height={524}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* Lightweight Feature */}
      <section className="mt-29 text-center">
        <motion.h2
          className="text-fluid-5xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-normal text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_light_title')}
        </motion.h2>
        <motion.h4
          className="text-fluid-2xl mt-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('feature_light_weight')}
          <span className="text-fluid-6xl mx-1.5 font-bold">{t('feature_light_value')}</span>
          {t('feature_light_unit')}
        </motion.h4>
        <motion.p
          className="text-fluid-2xl mt-0 text-[#c7cdd4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('feature_light_desc')}
        </motion.p>
        <motion.div
          className="mx-auto mt-21 w-[1126px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/v6cp3BJudmDz0fZY.webp"
            alt=""
            width={1126}
            height={600}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* Bionic Feature */}
      <section className="mt-29 text-center">
        <motion.h2
          className="text-fluid-5xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-normal text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_bionic_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-2xl mt-7 text-[#c7cdd4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('feature_bionic_desc').replace(/\n/g, '<br />') }}
        />
        <motion.div
          className="mx-auto mt-10 w-[1126px] overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <video
            loop
            muted
            autoPlay
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/tXjhFTyo4v8Ik1aN.mp4"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* Customizable Colors */}
      <section className="mx-auto mt-34 flex w-[1126px] flex-col items-center pb-24">
        <motion.div
          className="flex w-full flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-fluid-5xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-normal text-transparent">
            {t('feature_custom_title')}
          </h2>
          <p
            className="text-fluid-2xl mt-7 text-[#c7cdd4]"
            dangerouslySetInnerHTML={{ __html: t('feature_custom_desc').replace(/\n/g, '<br />') }}
          />
        </motion.div>

        {/* 机械手图片展示区 */}
        <motion.div
          className="relative mt-12 flex h-[400px] w-full items-center justify-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {colorImages.map((item, index) => (
            <motion.div
              key={item.img}
              className="flex flex-col items-center justify-center"
              animate={{
                scale: selectedColorIndex === index ? 1.15 : 1,
                y: selectedColorIndex === index ? -20 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                zIndex: selectedColorIndex === index ? 10 : 1,
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={400}
                className="h-75 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 颜色选择器 */}
        <motion.div
          className="mt-12 ml-20 flex items-center justify-center gap-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {colorImages.map((item, index) => (
            <button
              key={item.color}
              type="button"
              onClick={() => setSelectedColorIndex(index)}
              className="cursor-target flex flex-col items-center gap-6 transition-transform hover:scale-110"
            >
              <motion.div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full"
                style={{
                  backgroundColor: item.color,
                  border: '2px solid #D6D6D6',
                }}
                animate={{
                  scale: selectedColorIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-fluid-lg whitespace-nowrap text-white">
                {item.name}
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="mx-auto w-[1200px] border-y border-[#666] py-20 text-center">
        <motion.h5
          className="text-fluid-5xl font-semibold text-[#fafafa]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('specs_title')}
        </motion.h5>
        <motion.p
          className="text-fluid-3xl mt-13 text-[#d6d6d6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('specs_desc').replace(/\n/g, '<br />') }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/aF9mk28Q5CHfLPJX.webp"
            alt=""
            width={403}
            height={403}
            className="mx-auto mt-10"
          />
        </motion.div>
        <motion.div
          className="mx-auto mt-10 w-[998px] rounded-3xl bg-[#333]/30 px-6 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ul className="gap-x-auto mb-12 grid grid-cols-3 justify-items-center border-b border-[#333] px-25">
            {technicalSpecs.map((spec, index) => (
              <motion.li
                key={spec.label}
                className="mb-14 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.5 }}
              >
                <span className="text-fluid-2xl">{t(spec.label as any)}</span>
                {spec.customStyle
                  ? (
                      <h3 className="text-fluid-5xl mt-3 flex flex-col items-start leading-[50px] font-bold">
                        {spec.value.split('&').map((part, i) => (
                          <i key={i} className="text-fluid-2xl m-0 leading-[30px] font-normal not-italic">
                            {part}
                          </i>
                        ))}
                      </h3>
                    )
                  : (
                      <h3 className="text-fluid-5xl mt-3 flex items-center leading-[50px] font-bold">
                        {spec.value}
                        {spec.unit && (
                          <i className="text-fluid-2xl ml-2 font-normal not-italic">{spec.unit}</i>
                        )}
                      </h3>
                    )}
              </motion.li>
            ))}
          </ul>
          <p className="text-fluid-lg mt-4 text-[#666]">{t('spec_protection')}</p>
          <p className="text-fluid-lg mt-4 text-[#666]">{t('spec_sdk')}</p>
          <p className="text-fluid-lg mt-4 text-[#666]">{t('spec_ota')}</p>
        </motion.div>
      </section>

      {/* Product Versions */}
      <section className="mx-auto mt-20 w-[1200px] border-b border-[#666] pb-20">
        <motion.h2
          className="text-fluid-5xl mb-14 text-center font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('version_title')}
        </motion.h2>
        <ul className="flex flex-wrap gap-15">
          {productVersions.map((version, index) => (
            <motion.li
              key={version.title}
              className={`flex-1 rounded-3xl p-10 ${version.border ? 'mt-8 w-full flex-[100%_0_0] border border-[#1a74bf]' : ''}`}
              style={version.gradient ? { background: version.gradient } : {}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-fluid-3xl font-bold">{t(version.title as any)}</h3>
              <p className="text-fluid-xl mt-1">{t(version.model as any)}</p>
              <ol>
                {version.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="mt-8 flex justify-between border-b border-[#666] leading-[34px]"
                  >
                    <span className="text-fluid-lg">{t(detail.label as any)}</span>
                    <span className="text-fluid-lg">
                      {detail.value.startsWith('version_') ? t(detail.value as any) : detail.value}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Summary Section */}
      <section className="mt-20 text-center">
        <motion.h1
          className="text-fluid-6xl font-semibold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('product_name')}
          <span className="ml-2 bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-[860] text-transparent">
            {t('product_model')}
          </span>
        </motion.h1>
        <motion.h5
          className="text-fluid-3xl mt-11 text-[#d6d6d6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('summary_desc').replace(/\n/g, '<br />') }}
        />
        <motion.div
          className="mt-19 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/company/contact#contact"
            className="cursor-target text-fluid-3xl flex h-[90px] w-[264px] items-center justify-center rounded-[45px] bg-[#1a74bf] !text-white transition-transform hover:scale-105"
          >
            {t('contact_us')}
          </Link>
        </motion.div>
        <motion.p
          className="text-fluid-2xl mt-10 font-medium text-[#8d8d8d]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('email_note')}
        </motion.p>
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/YyJKNZgji6LtTRoX.webp"
          alt=""
          width={1920}
          height={1080}
          className="w-full"
        />
      </section>
    </div>
  );
}

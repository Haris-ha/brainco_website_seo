'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { colorImages, productVersions, technicalSpecs } from './data';

export default function Revo2ContentMobile() {
  const t = useTranslations('Revo2');
  const [selectedColorIndex, setSelectedColorIndex] = useState(1); // Default to middle (流光银)

  return (
    <div className="bg-gradient-to-b from-[#07111b] via-[#0a233b] to-[#010b13] !text-white">
      {/* Hero Video */}
      <motion.video
        autoPlay
        muted
        playsInline
        loop
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/PtmpayvYJ8qRWrxK.mp4"
        className="mt-24 block h-full w-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Contact Section */}
      <section className="bg-[#070707] pt-10 pb-16 text-center">
        <motion.h1
          className="text-fluid-4xl flex justify-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('product_name')}
          <span className="ml-4 bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-bold text-transparent">
            {t('product_model')}
          </span>
        </motion.h1>
        <motion.p
          className="text-fluid-lg mt-2 text-[#d6d6d6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/contact#contact"
            className="flex h-[38px] w-[112px] items-center justify-center rounded-[20px] bg-[#1a74bf] !text-white"
          >
            {t('contact_us')}
          </Link>
          <a
            href="https://www.brainco-hz.com/docs/revolimb-hand/revo2/parameters.html"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex h-[38px] w-[112px] items-center justify-center rounded-[20px] border border-white !text-white"
          >
            {t('documentation')}
          </a>
        </motion.div>
      </section>

      {/* Compact Feature */}
      <section className="pt-10 text-center">
        <motion.h2
          className="text-fluid-2xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_compact_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-lg mt-4 px-20 text-[#c7cdd4]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('feature_compact_desc').replace(/\n/g, '<br />') }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/t2Mda4kQufo6sIj9.webp"
            alt=""
            width={375}
            height={400}
            className="mt-5 w-full"
          />
        </motion.div>
      </section>

      {/* Lightweight Feature */}
      <section className="pt-10 text-center">
        <motion.h2
          className="text-fluid-2xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_light_title')}
        </motion.h2>
        <motion.h3
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('feature_light_weight')}
          <span className="text-fluid-3xl mx-1 font-bold">{t('feature_light_value')}</span>
          <i className="text-fluid-3xl font-bold not-italic">{t('feature_light_unit')}</i>
        </motion.h3>
        <motion.p
          className="text-fluid-lg mt-4 text-[#c7cdd4]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('feature_light_desc')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/z7EPSTuwaq5RnpYM.webp"
            alt=""
            width={375}
            height={400}
            className="mt-5 w-full"
          />
        </motion.div>
      </section>

      {/* Bionic Feature */}
      <section className="pt-10 text-center">
        <motion.h2
          className="text-fluid-2xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_bionic_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-lg mt-4 px-20 text-[#c7cdd4]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('feature_bionic_desc').replace(/\n/g, '<br />') }}
        />
        <motion.video
          autoPlay
          muted
          playsInline
          loop
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/uKvQ2HdZ0mtUbosx.mp4"
          className="mt-5 block w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </section>

      {/* Customizable Colors */}
      <section className="px-4 pt-10 text-center">
        <motion.h2
          className="text-fluid-xl bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('feature_custom_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-lg mt-4 text-[#c7cdd4]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: t('feature_custom_desc').replace(/\n/g, '<br />') }}
        />

        {/* 机械手图片展示区 */}
        <motion.div
          className="relative mt-8 flex h-[200px] w-full items-center justify-center gap-6"
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
                scale: selectedColorIndex === index ? 1.2 : 1,
                y: selectedColorIndex === index ? -10 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                zIndex: selectedColorIndex === index ? 10 : 1,
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={120}
                height={120}
                className="h-auto w-[90px]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 颜色选择器 */}
        <motion.div
          className=" mt-4 ml-12 flex items-center justify-center gap-8"
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
              className=" flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <motion.div
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full"
                style={{
                  backgroundColor: item.color,
                  border: '2px solid #D6D6D6',
                }}
                animate={{
                  scale: selectedColorIndex === index ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-fluid-sm whitespace-nowrap !text-white">
                {item.name}
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="mt-10 flex flex-col items-center bg-[#070707] py-10 text-center">
        <motion.h2
          className="text-fluid-2xl mb-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('specs_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-sm mt-6 px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/zZGQR7miawub5MHk.webp"
            alt=""
            width={230}
            height={230}
            className="mt-10"
          />
        </motion.div>
        <motion.ul
          className="mt-9 mb-10 ml-12 grid grid-cols-2 gap-x-0 px-14 pr-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {technicalSpecs.map((spec, index) => (
            <motion.li
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.05, duration: 0.5 }}
            >
              <h6 className="text-fluid-lg text-[#c7cdd4]">{t(spec.label as any)}</h6>
              {spec.customStyle
                ? (
                    <div className="text-fluid-3xl mt-2 mb-8 flex items-center leading-10 font-bold">
                      {spec.value.split('&').map((part, i) => (
                        <span key={i} className="text-fluid-lg block">
                          {part}
                        </span>
                      ))}
                    </div>
                  )
                : (
                    <p className="text-fluid-3xl mt-2 mb-8 flex items-center leading-10 font-bold">
                      {spec.value}
                      {spec.unit && <span className="text-fluid-lg ml-1.5">{spec.unit}</span>}
                    </p>
                  )}
            </motion.li>
          ))}
        </motion.ul>
        <p className="text-fluid-lg m-0 mb-6 text-[#666]">{t('spec_protection')}</p>
        <p className="text-fluid-lg m-0 mb-6 text-[#666]">{t('spec_sdk')}</p>
        <p className="text-fluid-lg m-0 text-[#666]">{t('spec_ota')}</p>
      </section>

      {/* Product Versions */}
      <section className="bg-[#070707] pt-10 pb-8">
        <motion.h2
          className="text-fluid-2xl mx-auto mb-8 w-[326px] border-t border-[#666] pt-10 text-center font-bold text-[#d6d6d6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('version_title')}
        </motion.h2>
        <ul>
          {productVersions.map((version, index) => (
            <motion.li
              key={version.title}
              className={`mx-auto mb-6 w-[326px] rounded-3xl p-10 ${version.border ? 'border border-white' : ''}`}
              style={version.gradient ? { background: version.gradient } : {}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-fluid-2xl">{t(version.title as any)}</h3>
              <p className="text-fluid-xl">{t(version.model as any)}</p>
              <ol>
                {version.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="text-fluid-lg mt-9 flex justify-between border-b border-[#aaa] leading-7 text-[#c7cdd4]"
                  >
                    <span>{t(detail.label as any)}</span>
                    <span className="w-[130px] flex-[130px_0_0] text-right">
                      {detail.value.startsWith('version_') ? t(detail.value as any) : detail.value}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <section className="bg-[#070707] text-center">
        <motion.h2
          className="text-fluid-2xl flex justify-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('product_name')}
          <span className="ml-2 bg-gradient-to-r from-[#acd0f4] to-[#5da1e6] bg-clip-text font-bold text-transparent">
            {t('product_model')}
          </span>
        </motion.h2>
        <motion.h5
          className="text-fluid-lg mt-2 text-[#d6d6d6]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('subtitle')}
        </motion.h5>
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/contact#contact"
            className=" flex h-[38px] w-[112px] items-center justify-center rounded-[20px] bg-[#1a74bf] !text-white"
          >
            {t('contact_us')}
          </Link>
        </motion.div>
        <motion.p
          className="text-fluid-lg mt-8 text-[#8d8d8d]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('email_note')}
        </motion.p>
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/udHicpVmJf5AKOFq.webp"
          alt=""
          width={375}
          height={300}
          className="w-full"
        />
      </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { SimpleCarousel } from '@/components/ui/SimpleCarousel';
import { getCooperatingInstitutions, getFootnotes, getProcess, getResearchArticles } from './data';

export default function TechnologyContentMobile() {
  const locale = useLocale();
  const t = useTranslations('Technology');
  const [processIndex, setProcessIndex] = useState(0);

  const process = getProcess(locale);
  const footnotes = getFootnotes(locale);
  const cooperatingInstitutions = getCooperatingInstitutions(locale);
  const researchArticles = getResearchArticles(locale);

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <header className="relative min-h-[700px] w-full">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ftbqmsviOKpgLDrW.webp"
          alt="BrainCo 脑机接口技术研究 - 移动端背景 / BrainCo Brain-Computer Interface Technology Research - Mobile Background"
          width={750}
          height={700}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          style={{ minHeight: '700px', objectPosition: 'center' }}
        />
        {/* 半透明遮罩层，确保文字对比度 */}
        <div className="absolute inset-0 z-[1] bg-black/5" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex min-h-full w-full flex-col justify-center px-[10vw] text-left text-white h-[700px]"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-fluid-4xl mb-6 text-left font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            {t('page_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-base leading-[1.7] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          >
            {t('page_intro')}
          </motion.p>
        </motion.div>
      </header>

      {/* Research Section */}
      <section className="mt-[36px] px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-3xl mb-8 text-center font-bold"
        >
          {t('research_collaboration')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-4"
        >
          <SimpleCarousel
            items={researchArticles.map(article => (
              <motion.div
                key={article.link}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex h-[320px] flex-col rounded-lg bg-gradient-to-br from-gray-50 to-white p-5"
              >
                {/* 装饰性渐变效果 */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-50" />

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-fluid-lg line-clamp-8 leading-relaxed text-[#595757]">{article.content}</p>
                    <h4 className="text-fluid-xl mt-5 line-clamp-3 leading-[1.3] font-bold text-[#333333]">
                      {article.title}
                    </h4>
                  </div>
                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative text-base font-bold text-[#1A74BF]">
                      {t('learn_more')}
                    </span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                      }}
                    >
                      <Image
                        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dXLzUFuSgVRtErQb.png"
                        alt="箭头图标 / Arrow icon"
                        width={17}
                        height={17}
                      />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>
            ))}
            autoplay={false}
            showIndicators
            className="pb-[50px]"
          />
        </motion.div>
      </section>

      {/* Cooperating Institutions */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-8 px-5"
      >
        {cooperatingInstitutions.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-[30px] overflow-hidden rounded-lg bg-[#f6f6f6] pb-[20px]"
          >
            <div className="w-full">
              <Image
                src={item.img}
                alt={`${item.title} - 合作机构 / ${item.title} - Cooperating Institution`}
                width={400}
                height={250}
                className="h-auto w-full"
              />
            </div>
            <div className="px-5">
              <h2 className="text-fluid-xl mt-6 leading-[1.5] font-semibold">
                {item.title}
              </h2>
              <p className="text-fluid-base mt-3 leading-[1.5]">
                {item.desc}
              </p>
              <motion.a
                href={item.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative text-base font-bold text-[#1A74BF]">
                  {t('learn_more')}
                </span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dXLzUFuSgVRtErQb.png"
                    alt="arrow"
                    width={17}
                    height={17}
                    className="ml-0.5"
                  />
                </motion.div>
              </motion.a>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Process Timeline */}
      <section className="mt-[55px] mb-[60px]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-3xl mb-10 text-center font-bold"
        >
          {t('timeline_title')}
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex"
        >
          {process.map((item, index) => (
            <li
              key={item.year}
              className={`
                relative flex items-center justify-center overflow-hidden
                transition-all duration-300
                ${processIndex === index
              ? 'flex-1 border-x border-[rgba(214,214,214,0.5)]'
              : processIndex === index + 1 || processIndex === index - 1
                ? 'w-[38px] flex-[38px_0_0]'
                : 'w-0 flex-[0_0_0]'
            }
              `}
            >
              <button
                type="button"
                className="flex h-full w-full items-center justify-center"
                onClick={() => setProcessIndex(index)}
                aria-label={`查看 ${item.year} 年的历程 / View ${item.year} timeline`}
                aria-pressed={processIndex === index}
              >
                {processIndex !== index && (
                  <h3 className="absolute flex h-full items-center text-lg text-[#bebebe]">
                    {item.year}
                  </h3>
                )}
                {processIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <SimpleCarousel
                      items={item.data.map(data => (
                        <div key={data.url} className="flex flex-col justify-start px-6">
                          <div className="flex h-[170px] items-center overflow-hidden">
                            <Image
                              src={data.url}
                              alt={`${item.year} 年历程图片 / ${item.year} timeline image`}
                              width={300}
                              height={170}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                          <h3 className="text-fluid-4xl my-[14px] flex items-end leading-[1.2]">
                            {item.year}
                            {t('year_suffix') && <span className="text-fluid-lg mb-2 no-underline">{t('year_suffix')}</span>}
                          </h3>
                          <p className="text-fluid-lg w-full text-left leading-relaxed">
                            {data.desc}
                          </p>
                        </div>
                      ))}
                      autoplay={false}
                      showIndicators
                    />
                  </motion.div>
                )}
              </button>
            </li>
          ))}
        </motion.ul>
      </section>

      {/* Footnotes */}
      <motion.ol
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-[90px] px-5 break-words"
      >
        {footnotes.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="mb-2.5"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fluid-base cursor-target !text-[#656565] hover:text-[#1A74BF]"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </motion.ol>
    </main>
  );
}

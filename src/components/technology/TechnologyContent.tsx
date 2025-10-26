'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SimpleCarousel } from '@/components/ui/SimpleCarousel';
import { getCooperatingInstitutions, getFootnotes, getProcess, getResearchArticles } from './data';

export default function TechnologyContent() {
  const locale = useLocale();
  const t = useTranslations('Technology');
  const [selectedYear, setSelectedYear] = useState(0);

  // Handle scroll to section based on URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('t');

    if (!section) {
      return;
    }

    let scrollTimer: NodeJS.Timeout | null = null;

    const timer = setTimeout(() => {
      const elementId = section === 'research' ? 'research' : 'course';
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        scrollTimer = setTimeout(() => {
          const currentScroll = window.scrollY || window.pageYOffset;
          window.scrollTo({
            top: currentScroll,
            behavior: 'smooth',
          });
        }, 800);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  const process = getProcess(locale);
  const footnotes = getFootnotes(locale);
  const cooperatingInstitutions = getCooperatingInstitutions(locale);
  const researchArticles = getResearchArticles(locale);

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex h-[100vh] w-full items-center justify-center"
        style={{
          backgroundColor: 'rgb(20, 112, 178)',
          backgroundImage: 'url(https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qAalqdWuEovgsKUx.webp)',
          backgroundSize: '100% 1196px',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-4/5 text-white">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-fluid-7xl mb-[62px] leading-[70px] font-bold"
          >
            {t('page_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-fluid-2xl max-w-[708px]"
          >
            {t('page_intro')}
          </motion.p>
        </div>
      </motion.div>

      {/* Research Collaboration Section */}
      <section id="research" className="bg-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-[40px] font-bold text-[#333333]">
            {t('research_collaboration')}
          </h2>
        </motion.div>

        {/* Research Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 grid max-w-[1200px] grid-cols-2 gap-10"
        >
          {researchArticles.map((article, index) => (
            <motion.div
              key={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 },
              }}
              className="group relative rounded-xl bg-gradient-to-br from-gray-50 to-white p-8 text-xl font-light shadow-md transition-all duration-300 hover:from-blue-50 hover:to-white"
            >
              {/* 装饰性渐变边框 */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-blue-400/5 opacity-0 transition-opacity duration-300 group-hover:from-blue-400/5 group-hover:to-purple-400/5 group-hover:opacity-100" />

              <div className="relative">
                <p className="mb-5 leading-relaxed text-[#595757] transition-colors duration-300 group-hover:text-[#4a4a4a]">
                  {article.content}
                </p>
                <h3 className="mb-4 leading-[1.4] font-bold text-[#333333] transition-colors duration-300 group-hover:text-[#1A74BF]">
                  {article.title}
                </h3>
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base font-semibold !text-[#1A74BF] transition-all duration-300"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative">
                    {t('learn_more')}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1A74BF] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
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
                      width={18}
                      height={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cooperating Institutions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 px-20"
        >
          <div className="grid grid-cols-3 gap-3">
            {cooperatingInstitutions.map((institution, index) => (
              <motion.div
                key={institution.openUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer overflow-hidden rounded-lg bg-[#f6f6f6] pb-10"
                onClick={() => window.open(institution.openUrl, '_blank')}
              >
                <div className="h-auto w-full">
                  <Image
                    src={institution.img}
                    alt={institution.title}
                    width={500}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="mt-10 px-8">
                  <h3 className="mb-5 text-lg font-semibold text-[#333333]">
                    {institution.title}
                  </h3>
                  <p className="mb-5 text-base leading-relaxed text-[#333333]">
                    {institution.desc}
                  </p>
                  <div className="flex items-center">
                    <span className="cursor-pointer font-semibold !text-[#1A74BF]">
                      {t('learn_more')}
                    </span>
                    <Image
                      src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dXLzUFuSgVRtErQb.png"
                      alt="arrow"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="course" className="mb-[82px] flex flex-col items-center bg-white py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-center text-[40px] font-bold text-[#333333]">
            {t('timeline_title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1400px] px-20"
        >
          <ul className="flex border-l border-[#d6d6d6]">
            {process.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(index)}
                type="button"
                aria-pressed={selectedYear === index}
                aria-label={`选择年份 ${item.year}`}
                className={`
                  flex cursor-pointer flex-col items-center
                  justify-center overflow-hidden border-r
                  border-[#d6d6d6] transition-all duration-200 ease-in-out
                  ${selectedYear === index
                ? 'w-[560px] justify-start px-10 pt-20'
                : 'h-[1000px] w-[72px]'
              }
                `}
              >
                {selectedYear !== index
                  ? (
                      <span className="text-xl text-[#bebebe]">{item.year}</span>
                    )
                  : (
                      <div className="w-full pb-10">
                        <SimpleCarousel
                          items={item.data.map(data => (
                            <motion.div
                              key={data.url}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <div className="mb-[30px] flex h-[320px] w-full items-center justify-center overflow-hidden">
                                <Image
                                  src={data.url}
                                  alt={item.year}
                                  width={480}
                                  height={320}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <h4 className="mb-6 text-5xl font-normal">
                                {item.year}
                                {t('year_suffix') && <span className="ml-1 text-xl">{t('year_suffix')}</span>}
                              </h4>
                              <p className="text-xl leading-[1.7] font-light">
                                {data.desc}
                              </p>
                            </motion.div>
                          ))}
                          autoplay={false}
                          showIndicators
                        />
                      </div>
                    )}
              </button>
            ))}
          </ul>
        </motion.div>

        {/* Footnotes */}
        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40 grid grid-cols-2 gap-x-20 gap-y-6 px-20"
        >
          {footnotes.map((note, index) => (
            <motion.li
              key={`footnote-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base !text-[#707070] transition-colors hover:!text-[#1A74BF]"
              >
                {note.label}
              </a>
            </motion.li>
          ))}
        </motion.ol>
      </section>
    </div>
  );
}

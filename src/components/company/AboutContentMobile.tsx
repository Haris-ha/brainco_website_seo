'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutContentMobile() {
  const t = useTranslations('About');

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/8YPFxdcLUlb4CDa7.webp"
          alt={t('page_title')}
          width={750}
          height={800}
          className="w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-[calc(100vh-80px)] w-full flex-col justify-center px-20 pr-5">
          <h1 className="text-[40px] font-bold text-white">
            {t('page_title')}
          </h1>
          <p className="mt-5 text-base text-white">{t('intro_text')}</p>
        </div>
      </div>

      {/* Brand Culture Section */}
      <div className="px-[42px]">
        <h2 className="mb-[14px] mt-[54px] text-center text-2xl font-bold">
          {t('brand_culture')}
        </h2>
        <dl>
          <dt className="mb-[18px] mt-[38px] inline-block border-b-[3px] border-[#333] pb-[6px] pr-1 text-xl">
            {t('mission')}
          </dt>
          <dd className="mb-[6px] text-[#707070]">{t('mission_text')}</dd>

          <dt className="mb-[18px] mt-[38px] inline-block border-b-[3px] border-[#333] pb-[6px] pr-1 text-xl">
            {t('vision')}
          </dt>
          <dd className="mb-[6px] text-[#707070]">{t('vision_text')}</dd>

          <dt className="mb-[18px] mt-[38px] inline-block border-b-[3px] border-[#333] pb-[6px] pr-1 text-xl">
            {t('values')}
          </dt>
          <dd className="mb-[6px] text-[#707070]">{t('values_1')}</dd>
          <dd className="mb-[6px] text-[#707070]">{t('values_2')}</dd>
          <dd className="mb-[6px] text-[#707070]">{t('values_3')}</dd>
          <dd className="mb-[6px] text-[#707070]">{t('values_4')}</dd>
        </dl>
      </div>

      {/* Social Contribution Section */}
      <div className="mb-[50px] mt-[50px] px-[42px]">
        <h2 className="mb-[14px] mt-[54px] text-center text-2xl font-bold">
          {t('social_contribution')}
        </h2>
        <ul>
          <li>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/mZvimSaC46hEWw9I.webp"
              alt={t('social_contribution')}
              width={750}
              height={400}
              className="w-full object-cover"
            />
            <p className="mt-[10px] text-sm text-[#707070]">
              {t('contribution_text')}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}


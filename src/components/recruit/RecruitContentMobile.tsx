'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function RecruitContentMobile() {
  const t = useTranslations('Recruit');

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="relative pb-[40px]">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/8A2MXC4jP6f5cPJc.webp"
          alt="Banner"
          width={750}
          height={600}
          className="w-full"
        />
        <div className="absolute top-0 left-1/2 flex h-full w-[230px] -translate-x-1/2 flex-col items-start justify-center pt-[130px] text-white">
          <div className="mb-[34px] flex w-full flex-col items-center justify-center text-center text-[40px]">
            <div>{t('join_us')}</div>
            <div>{t('change_world')}</div>
          </div>
          <div className="mb-[58px] w-full text-center text-[14px] font-light">{t('brain_tech_slogan')}</div>
        </div>
      </div>

      {/* Content List */}
      <div className="w-full">
        <div className="flex flex-col">
          {/* Titles */}
          <span className="mx-auto block px-[42px] text-center text-[14px] font-bold">
            {t('great_product_title_1')}
          </span>
          <span className="mx-auto block px-[42px] text-center text-[14px] font-bold">
            {t('great_product_title_2')}
          </span>

          <p className="mx-0 my-[30px] px-[42px] text-[14px] text-[#595757]">
            {t('philosophy_paragraph')}
          </p>

          <span className="mx-auto mt-[60px] block px-[42px] text-center text-[24px] font-bold">
            {t('nine_years_title')}
          </span>

          <p className="mx-0 my-[30px] px-[42px] text-[14px] text-[#595757]">
            {t('journey_paragraph')}
          </p>

          {/* What We Offer */}
          <span className="mx-auto mt-[60px] block px-[42px] text-center text-[24px] font-bold">
            {t('what_we_offer')}
          </span>

          {/* Cards */}
          <div className="mt-[52px] flex justify-center">
            <div className="mr-[4px] flex w-[88px] flex-[88px_0_0] flex-col items-center rounded-[10px] bg-white px-0 py-[14px] shadow-[6px_7px_62px_1px_#ededed]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KBEw9rk75UDa0f27.webp"
                alt={t('personalized_training')}
                width={26}
                height={26}
                className="mb-[12px]"
              />
              <span className="scale-[0.7] text-center text-[12px]">
                {t('personalized_training')}
              </span>
            </div>
            <div className="mr-[4px] flex w-[88px] flex-[88px_0_0] flex-col items-center rounded-[10px] bg-white px-0 py-[14px] shadow-[6px_7px_62px_1px_#ededed]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/7FkZy7Pqx6Mc3qW2.webp"
                alt={t('competitive_salary')}
                width={26}
                height={26}
                className="mb-[12px]"
              />
              <span className="scale-[0.7] text-center text-[12px]">
                {t('competitive_salary')}
              </span>
            </div>
            <div className="flex w-[88px] flex-[88px_0_0] flex-col items-center rounded-[10px] bg-white px-0 py-[14px] shadow-[6px_7px_62px_1px_#ededed]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rqnSfilDvu8b7CBh.webp"
                alt={t('elite_environment')}
                width={26}
                height={26}
                className="mb-[12px]"
              />
              <span className="scale-[0.7] text-center text-[12px]">
                {t('elite_environment')}
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mt-[40px] px-[42px] text-[14px]">
            <span className="mb-[30px] block text-[#595757]">{t('intro_1')}</span>
            <span className="mb-[30px] block text-[#595757]">{t('intro_2')}</span>
            <span className="mb-[30px] block text-[#595757]">{t('intro_3')}</span>
          </div>

          {/* Pictures */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sIZR2ml7GHJWwlMx.webp"
              alt="Office 1"
              width={302}
              height={120}
              className="mb-[10px]"
            />
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/q68z09sE7HdzUPWy.webp"
              alt="Office 2"
              width={302}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

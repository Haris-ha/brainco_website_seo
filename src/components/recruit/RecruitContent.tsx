'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function RecruitContent() {
  const t = useTranslations('Recruit');
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTransformValue(window.innerWidth / 5);
    }
  }, []);

  const handlePrev = () => {
    if (typeof window !== 'undefined') {
      setTransformValue(window.innerWidth / 5);
    }
  };

  const handleNext = () => {
    if (typeof window !== 'undefined') {
      setTransformValue(-window.innerWidth / 2.2);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div
        className="relative flex h-[880px] w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fwXXuwCQ9Z0O636D.webp)',
        }}
      >
        <div className="flex h-[270px] w-[660px] flex-col items-center justify-between">
          <div className="flex w-full justify-between text-[76px] text-white">
            <span>{t('join_us')}</span>
            <span>{t('change_world')}</span>
          </div>
          <span className="h-[95px] text-2xl text-white">
            {t('brain_tech_slogan')}
          </span>
        </div>
      </div>

      {/* Content List */}
      <div className="flex w-full justify-center bg-white">
        <div className="flex flex-col items-center pt-[214px]">
          {/* Title Section */}
          <span className="pb-[5px] text-[44px] font-medium text-[#2b2b2b]">
            {t('great_product_title_1')}
          </span>
          <span className="pt-[5px] text-[44px] font-medium text-[#2b2b2b]">
            {t('great_product_title_2')}
          </span>
          <p className="mt-[50px] w-[654px] text-2xl leading-10 text-[#838483]">
            {t('philosophy_paragraph')}
          </p>

          <span className="mt-[160px] text-[44px] font-medium text-[#2b2b2b]">
            {t('nine_years_title')}
          </span>
          <p className="mt-[50px] h-[155px] w-[824px] text-2xl leading-10 text-[#838483]">
            {t('journey_paragraph')}
          </p>

          {/* What We Offer */}
          <span className="mt-[260px] h-[90px] w-[622px] text-[62px] leading-[75px] font-medium text-[#2b2b2b]">
            {t('what_we_offer')}
          </span>

          {/* Cards */}
          <div className="mt-[135px] flex w-[1100px] justify-between">
            <div className="flex h-[372px] w-[353px] flex-col items-center justify-center rounded-[10px] bg-white shadow-[6px_7px_62px_1px_#ededed]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KBEw9rk75UDa0f27.webp"
                alt={t('personalized_training')}
                width={100}
                height={100}
              />
              <span className="mt-[39px] h-[84px] w-[224px] text-center text-[32px] leading-[38px] text-[#2b2b2b]">
                {t('personalized_training')}
              </span>
            </div>
            <div className="flex h-[372px] w-[353px] flex-col items-center justify-center rounded-[10px] bg-white shadow-[6px_7px_62px_1px_#ededed]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/7FkZy7Pqx6Mc3qW2.webp"
                alt={t('competitive_salary')}
                width={100}
                height={100}
              />
              <span className="mt-[39px] h-[84px] w-[224px] text-center text-[32px] leading-[38px] text-[#2b2b2b]">
                {t('competitive_salary')}
              </span>
            </div>
            <div className="flex h-[372px] w-[353px] flex-col items-center justify-center rounded-[10px] bg-white shadow-[6px_7px_62px_1px_#ededed]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rqnSfilDvu8b7CBh.webp"
                alt={t('elite_environment')}
                width={100}
                height={100}
              />
              <span className="mt-[39px] h-[84px] w-[224px] text-center text-[32px] leading-[38px] text-[#2b2b2b]">
                {t('elite_environment')}
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mt-[123px] mb-[80px] flex h-[475px] w-[678px] flex-col justify-between text-center text-2xl leading-10 text-[#2b2b2b]">
            <span>{t('intro_1')}</span>
            <span>{t('intro_2')}</span>
            <span>{t('intro_3')}</span>
          </div>

          {/* Scenario Carousel */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translate3d(${transformValue}px, 0px, 0px)` }}
              >
                <div className="mr-[20px] flex items-center justify-center">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sIZR2ml7GHJWwlMx.webp"
                    alt="Office 1"
                    width={1020}
                    height={405}
                    className="rounded-[10px] object-cover shadow-[6px_7px_62px_1px_#ededed]"
                  />
                </div>
                <div className="mr-[20px] flex items-center justify-center">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/q68z09sE7HdzUPWy.webp"
                    alt="Office 2"
                    width={1020}
                    height={405}
                    className="rounded-[10px] object-cover shadow-[6px_7px_62px_1px_#ededed]"
                  />
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="absolute top-1/2 left-[30px] z-[3] h-[62px] w-[62px] -translate-y-1/2 cursor-pointer bg-[url('https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pwdX3SFceyMKwR6G.webp')] bg-[length:62px_62px]"
              />
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="absolute top-1/2 right-[30px] z-[3] h-[62px] w-[62px] -translate-y-1/2 cursor-pointer bg-[url('https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/s9xb8MwzcxMcD01n.webp')] bg-[length:62px_62px]"
              />
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mt-[181px] h-[186px] w-[530px] text-[129px] leading-[203px] text-[#e7e7e7]">
            <span>JOIN US</span>
          </div>

          <div className="mb-[100px] w-[582px] text-[21px] leading-[31px] text-[#e7e7e7]">
            <span>{t('join_us_final')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

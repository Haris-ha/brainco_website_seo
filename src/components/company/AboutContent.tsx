'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutContent() {
  const t = useTranslations('About');

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div
        className="relative flex h-[1026px] w-full flex-col items-center justify-end bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/lQh40fjPTJJQ5w5y.webp)',
        }}
      >
        <div className="flex flex-col items-center pb-[200px]">
          <h1 className="text-[76px] leading-[92px] text-white">
            {t('page_title')}
          </h1>
          <p className="mt-[47px] w-[705px] text-xl leading-[34px] text-white">
            {t('intro_text')}
          </p>
        </div>
      </div>

      {/* Brand Culture Section */}
      <div className="flex h-[1080px] w-full items-center justify-center bg-white">
        <div className="flex w-4/5 items-center justify-around">
          <div className="flex h-[711px] flex-col justify-between">
            <h2 className="text-[60px] font-medium leading-[80px] text-[#333333]">
              {t('brand_culture')}
            </h2>
            <div>
              <h3 className="text-2xl font-medium leading-10 text-[#333333]">
                {t('mission')}
              </h3>
              <div className="my-[9px] h-px w-[49px] border-t border-[#333333]" />
              <p className="w-[461px] text-xl leading-[34px] text-[#707070]">
                {t('mission_text')}
              </p>

              <h3 className="mt-[40px] text-2xl font-medium leading-10 text-[#333333]">
                {t('vision')}
              </h3>
              <div className="my-[9px] h-px w-[49px] border-t border-[#333333]" />
              <p className="w-[461px] text-xl leading-[34px] text-[#707070]">
                {t('vision_text')}
              </p>

              <h3 className="mt-[40px] text-2xl font-medium leading-10 text-[#333333]">
                {t('values')}
              </h3>
              <div className="my-[9px] h-px w-[49px] border-t border-[#333333]" />
              <div className="w-[461px] text-xl leading-[34px] text-[#707070]">
                <p>{t('values_1')}</p>
                <p>{t('values_2')}</p>
                <p>{t('values_3')}</p>
                <p>{t('values_4')}</p>
              </div>
            </div>
          </div>
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6jQXUJYZkMrzmswu.webp"
            alt={t('brand_culture')}
            width={659}
            height={711}
            className="object-contain"
          />
        </div>
      </div>

      {/* Social Contribution Section */}
      <div className="flex h-[1080px] w-full items-center justify-center bg-white">
        <div className="flex w-4/5 items-center justify-around">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5m3wubcuKufndRpU.webp"
            alt={t('social_contribution')}
            width={659}
            height={711}
            className="mr-[100px] object-contain"
          />
          <div className="flex h-[711px] flex-col justify-between">
            <h2 className="text-[60px] font-medium leading-[80px] text-[#333333]">
              {t('social_contribution')}
            </h2>
            <div>
              <div className="mb-[40px] h-px w-[75px] border-t border-[#333333]" />
              <p className="text-xl leading-[34px] text-[#707070]">
                {t('contribution_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


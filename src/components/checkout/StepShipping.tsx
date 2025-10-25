'use client';

import type { UserInfo } from '@/types/cart';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

type StepShippingProps = {
  basicInfo: { name: string; phone: string };
  onSubmit: (data: UserInfo) => Promise<void>;
  onBack: () => void;
  initialData?: UserInfo;
};

/**
 * 第二步：收货信息
 * 原版样式：收件人姓名、收货地址（省市区选择器）、详细地址、电话号码
 */
export function StepShipping({
  basicInfo,
  onSubmit,
  onBack,
  initialData,
}: StepShippingProps) {
  const t = useTranslations('Checkout');

  const [formData, setFormData] = useState<UserInfo>({
    name: initialData?.name || basicInfo.name,
    phone: initialData?.phone || basicInfo.phone,
    address: initialData?.address || '',
    email: initialData?.email || '',
  });
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 提交表单
  const handleSubmit = async () => {
    // 验证手机号
    if (!formData.phone || !/^1[3-9]\d{9}$/.test(formData.phone)) {
      return;
    }

    if (!formData.name || !formData.address) {
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO: 如果设置为默认地址，保存地址
      if (defaultAddress) {
        // await saveDefaultAddress(formData);
      }

      await onSubmit(formData);
    } catch (error) {
      console.error('Submit failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = !formData.name || !formData.address || !formData.phone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-[620px]"
    >
      {/* 返回按钮 */}
      <div
        className="absolute top-[20px] left-0 flex cursor-pointer items-center text-sm leading-8 md:top-[28px] md:left-[-60px] md:text-base lg:top-[34px] lg:left-[-80px] lg:text-[18px] lg:leading-10"
        onClick={onBack}
      >
        <span className="mr-1 text-sm md:text-base">←</span>
        <span>{t('back')}</span>
      </div>

      {/* 步骤指示 */}
      <span className="mt-12 mb-6 block text-base md:mt-6 md:mb-8 md:text-lg lg:mt-9 lg:mb-11 lg:text-[24px]">
        {t('step_indicator', { current: 2, total: 3 })}
      </span>

      {/* 标题 */}
      <h1 className="text-3xl text-[#333] md:text-4xl lg:text-[56px]">
        {t('step_2_title')}
      </h1>

      <p className="flex flex-col items-start justify-between gap-2 text-sm md:flex-row md:items-center md:text-base lg:text-[18px]">
        <span>{t('step_2_desc')}</span>
        <div className="flex items-center text-[#6076D6]">
          <input
            type="checkbox"
            id="defaultAddress"
            checked={defaultAddress}
            onChange={e => setDefaultAddress(e.target.checked)}
            className="mr-1 border-[#6076D6]"
          />
          <label htmlFor="defaultAddress" className="cursor-pointer text-sm md:text-base">
            {t('set_default_address')}
          </label>
        </div>
      </p>

      {/* 表单 */}
      <ul className="mt-4 w-full md:mt-5">
        {/* 姓名 */}
        <li className="mb-4 md:mb-5 lg:mb-6">
          <label className="mb-1.5 block text-sm text-[#333] md:mb-2 md:text-base lg:text-[18px]">
            {t('name')}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="h-[50px] w-full rounded-[25px] border border-[#707070] px-4 text-base focus:border-[#4F68D2] focus:outline-none md:h-[60px] md:rounded-[30px] md:px-6 md:text-lg lg:h-[80px] lg:rounded-[40px] lg:px-8 lg:text-[24px]"
          />
        </li>

        {/* 收货地址（简化版） */}
        <li className="mb-4 md:mb-5 lg:mb-6">
          <label className="mb-1.5 block text-sm text-[#333] md:mb-2 md:text-base lg:text-[18px]">
            {t('province_city_district')}
          </label>
          <input
            type="text"
            placeholder={t('province_city_district_placeholder')}
            className="h-[50px] w-full rounded-[25px] border border-[#707070] px-4 text-base focus:border-[#4F68D2] focus:outline-none md:h-[60px] md:rounded-[30px] md:px-6 md:text-lg lg:h-[80px] lg:rounded-[40px] lg:px-8 lg:text-[24px]"
          />
        </li>

        {/* 详细地址 */}
        <li className="mb-4 md:mb-5 lg:mb-6">
          <label className="mb-1.5 block text-sm text-[#333] md:mb-2 md:text-base lg:text-[18px]">
            {t('detailed_address')}
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            placeholder={t('detailed_address_placeholder')}
            className="h-[50px] w-full rounded-[25px] border border-[#707070] px-4 text-base focus:border-[#4F68D2] focus:outline-none md:h-[60px] md:rounded-[30px] md:px-6 md:text-lg lg:h-[80px] lg:rounded-[40px] lg:px-8 lg:text-[24px]"
          />
        </li>

        {/* 电话号码 */}
        <li className="mb-4 md:mb-5 lg:mb-6">
          <label className="mb-1.5 block text-sm text-[#333] md:mb-2 md:text-base lg:text-[18px]">
            {t('phone')}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="h-[50px] w-full rounded-[25px] border border-[#707070] px-4 text-base focus:border-[#4F68D2] focus:outline-none md:h-[60px] md:rounded-[30px] md:px-6 md:text-lg lg:h-[80px] lg:rounded-[40px] lg:px-8 lg:text-[24px]"
          />
        </li>
      </ul>

      {/* 下单按钮 */}
      <button
        onClick={handleSubmit}
        disabled={isDisabled || isSubmitting}
        className="mx-auto mt-12 flex h-[50px] w-[180px] items-center justify-center rounded-[25px] border-none bg-[#4f68d2] text-xl font-medium text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:bg-[#f4f4f4] disabled:text-[#707070] md:mt-16 md:h-[64px] md:w-[220px] md:rounded-[32px] md:text-2xl lg:mt-26 lg:h-[82px] lg:w-[260px] lg:rounded-[40px] lg:text-[34px]"
      >
        {isSubmitting ? t('submitting') : t('submit_order')}
      </button>
    </motion.div>
  );
}

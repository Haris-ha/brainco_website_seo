'use client';

import type { UserInfo } from '@/types/cart';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Area, Popup } from 'react-vant';
import { areaList } from '@vant/area-data';

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
    province: initialData?.province || '',
    city: initialData?.city || '',
    district: initialData?.district || '',
  });
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAreaPicker, setShowAreaPicker] = useState(false);
  const [areaValue, setAreaValue] = useState<string[]>([]);

  // 根据省市区名称查找代码
  const findAreaCode = (name: string, type: 'province' | 'city' | 'district'): string => {
    if (!name) return '';
    
    if (type === 'province') {
      return Object.keys(areaList.province_list).find(
        key => areaList.province_list[key] === name
      ) || '';
    }
    
    if (type === 'city') {
      return Object.keys(areaList.city_list).find(
        key => areaList.city_list[key] === name
      ) || '';
    }
    
    if (type === 'district') {
      return Object.keys(areaList.county_list).find(
        key => areaList.county_list[key] === name
      ) || '';
    }
    
    return '';
  };

  // 初始化 areaValue
  useEffect(() => {
    if (initialData?.province && initialData?.city && initialData?.district) {
      const provinceCode = findAreaCode(initialData.province, 'province');
      const cityCode = findAreaCode(initialData.city, 'city');
      const districtCode = findAreaCode(initialData.district, 'district');
      
      if (provinceCode && cityCode && districtCode) {
        setAreaValue([provinceCode, cityCode, districtCode]);
      }
    }
  }, [initialData]);

  // 处理省市区选择
  const handleAreaConfirm = (value: string[]) => {
    const [provinceCode, cityCode, districtCode] = value;
    const province = (provinceCode && areaList.province_list[provinceCode]) || '';
    const city = (cityCode && areaList.city_list[cityCode]) || '';
    const district = (districtCode && areaList.county_list[districtCode]) || '';
    
    setFormData({
      ...formData,
      province,
      city,
      district,
    });
    setAreaValue(value);
    setShowAreaPicker(false);
  };

  // 获取省市区显示文本
  const getAreaDisplayText = () => {
    if (formData.province && formData.city && formData.district) {
      return `${formData.province} ${formData.city} ${formData.district}`;
    }
    return '';
  };

  // 提交表单
  const handleSubmit = async () => {
    // 验证手机号
    if (!formData.phone || !/^1[3-9]\d{9}$/.test(formData.phone)) {
      return;
    }

    if (!formData.name || !formData.address || !formData.province || !formData.city || !formData.district) {
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

  const isDisabled = !formData.name || !formData.address || !formData.phone || !formData.province || !formData.city || !formData.district;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-[620px]"
      aria-labelledby="step-2-title"
    >
      {/* 返回按钮 */}
      <button
        type="button"
        onClick={onBack}
        aria-label={t('back')}
        className="cursor-target flex items-center text-xs leading-6 md:top-[20px] md:left-[-50px] md:text-sm lg:top-[24px] lg:left-[-60px] lg:text-[15px] lg:leading-7"
      >
        <span className="mr-1 text-sm md:text-base">←</span>
        <span>{t('back')}</span>
      </button>

      {/* 步骤指示 */}
      <nav aria-label={t('step_indicator', { current: 2, total: 3 })}>
        <span className="mt-10 mb-4 block text-base md:mt-4 md:mb-5 md:text-base lg:mt-5 lg:mb-6 lg:text-lg">
          {t('step_indicator', { current: 2, total: 3 })}
        </span>
      </nav>

      {/* 标题 */}
      <h1 id="step-2-title" className="text-2xl text-[#333] md:text-3xl lg:text-4xl">
        {t('step_2_title')}
      </h1>

      <div className="mt-3 flex flex-col items-start justify-between gap-2 text-sm md:mt-4 md:flex-row md:items-center md:text-[15px] lg:mt-5 lg:text-base">
        <span>{t('step_2_desc')}</span>
        <div className="flex items-center text-[#6076D6]">
          <input
            type="checkbox"
            id="defaultAddress"
            checked={defaultAddress}
            onChange={e => setDefaultAddress(e.target.checked)}
            className="cursor-target mr-1 border-[#6076D6]"
          />
          <label htmlFor="defaultAddress" className="cursor-target text-xs md:text-sm">
            {t('set_default_address')}
          </label>
        </div>
      </div>

      {/* 表单 */}
      <form
        id="step-2-form"
        className="mt-3 w-full md:mt-4"
        onSubmit={(e) => {
          e.preventDefault(); handleSubmit();
        }}
      >
        <fieldset>
          <legend className="sr-only">{t('step_2_title')}</legend>
          <ul className="w-full">
            {/* 姓名 */}
            <li className="mb-3 md:mb-4 lg:mb-4">
              <label htmlFor="shipping-name" className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-base">
                {t('name')}
              </label>
              <input
                id="shipping-name"
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('name_placeholder')}
                aria-required="true"
                className="cursor-target h-[44px] w-full rounded-[22px] border border-[#707070] px-4 text-sm focus:border-[#4F68D2] focus:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:text-base"
              />
            </li>

            {/* 收货地址（省市区选择器） */}
            <li className="mb-3 md:mb-4 lg:mb-4">
              <label htmlFor="shipping-region" className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-base">
                {t('province_city_district')}
              </label>
              <div
                id="shipping-region"
                onClick={() => setShowAreaPicker(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setShowAreaPicker(true);
                  }
                }}
                aria-required="true"
                className="cursor-target flex h-[44px] w-full items-center rounded-[22px] border border-[#707070] px-4 text-sm focus-within:border-[#4F68D2] focus-within:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:text-base"
              >
                <span className={getAreaDisplayText() ? 'text-[#333]' : 'text-gray-400'}>
                  {getAreaDisplayText() || t('province_city_district_placeholder')}
                </span>
              </div>
              <Popup
                visible={showAreaPicker}
                position="bottom"
                onClose={() => setShowAreaPicker(false)}
                style={{ height: '40%' }}
              >
                <Area
                  title={t('province_city_district')}
                  value={areaValue}
                  areaList={areaList}
                  onConfirm={handleAreaConfirm}
                  onCancel={() => setShowAreaPicker(false)}
                />
              </Popup>
            </li>

            {/* 详细地址 */}
            <li className="mb-3 md:mb-4 lg:mb-4">
              <label htmlFor="shipping-address" className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-base">
                {t('detailed_address')}
              </label>
              <input
                id="shipping-address"
                type="text"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                placeholder={t('detailed_address_placeholder')}
                aria-required="true"
                className="cursor-target h-[44px] w-full rounded-[22px] border border-[#707070] px-4 text-sm focus:border-[#4F68D2] focus:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:text-base"
              />
            </li>

            {/* 电话号码 */}
            <li className="mb-3 md:mb-4 lg:mb-4">
              <label htmlFor="shipping-phone" className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-base">
                {t('phone')}
              </label>
              <input
                id="shipping-phone"
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t('phone_placeholder')}
                aria-required="true"
                className="cursor-target h-[44px] w-full rounded-[22px] border border-[#707070] px-4 text-sm focus:border-[#4F68D2] focus:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:text-base"
              />
            </li>
          </ul>
        </fieldset>
      </form>

      {/* 下单按钮 */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isDisabled || isSubmitting}
        aria-label={isSubmitting ? t('submitting') : t('submit_order')}
        className="cursor-target mx-auto mt-8 flex h-[44px] w-[140px] items-center justify-center rounded-[22px] border-none bg-[#4f68d2] text-base font-medium !text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:bg-[#f4f4f4] disabled:!text-[#707070] md:mt-10 md:h-[48px] md:w-[160px] md:rounded-[24px] md:text-lg lg:mt-12 lg:h-[52px] lg:w-[180px] lg:rounded-[26px] lg:text-xl"
      >
        {isSubmitting ? t('submitting') : t('submit_order')}
      </button>
    </motion.section>
  );
}

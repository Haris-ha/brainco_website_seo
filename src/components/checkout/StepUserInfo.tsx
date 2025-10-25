'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';

type StepUserInfoProps = {
  onContinue: (data: { name: string; phone: string }) => void;
  initialData?: { name: string; phone: string };
};

/**
 * 第一步：基本信息
 * 原版样式：姓名、电话号码、验证码
 */
export function StepUserInfo({ onContinue, initialData }: StepUserInfoProps) {
  const t = useTranslations('Checkout');

  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    code: '',
  });
  const [codeText, setCodeText] = useState(t('get_code'));
  const [countdown, setCountdown] = useState(0);
  const [validation, setValidation] = useState('');

  // 获取验证码
  const handleGetCode = async () => {
    if (countdown > 0) {
      return;
    }

    // 验证手机号
    if (!formData.phone) {
      setValidation('请输入手机号码');
      return;
    }
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      setValidation('手机号码格式不正确');
      return;
    }

    try {
      // TODO: 调用发送验证码 API
      // await sendVerificationCode(formData.phone);

      toast.success('验证码已发送');
      setValidation('');

      // 开始倒计时
      let count = 60;
      setCountdown(count);
      setCodeText(t('code_countdown', { count }));

      const timer = setInterval(() => {
        count -= 1;
        if (count <= 0) {
          clearInterval(timer);
          setCountdown(0);
          setCodeText(t('get_code'));
        } else {
          setCountdown(count);
          setCodeText(t('code_countdown', { count }));
        }
      }, 1000);
    } catch {
      setValidation('验证码发送失败');
    }
  };

  // 提交表单
  const handleSubmit = () => {
    if (!formData.name) {
      setValidation('请输入姓名');
      return;
    }
    if (!formData.phone) {
      setValidation('请输入手机号码');
      return;
    }
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      setValidation('手机号码格式不正确');
      return;
    }
    if (!formData.code) {
      setValidation('请输入验证码');
      return;
    }
    if (!/^\d{6}$/.test(formData.code)) {
      setValidation('验证码格式不正确');
      return;
    }

    setValidation('');

    // TODO: 调用验证验证码 API
    // await verifyCode(formData.phone, formData.code);

    onContinue({
      name: formData.name,
      phone: formData.phone,
    });
  };

  const isSubmitDisabled = !formData.name || !/^1[3-9]\d{9}$/.test(formData.phone) || !/^\d{6}$/.test(formData.code);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[620px]"
    >
      {/* 步骤指示 */}
      <span className="mt-4 mb-6 block text-base md:mt-6 md:mb-8 md:text-lg lg:mt-9 lg:mb-11 lg:text-[24px]">
        {t('step_indicator', { current: 1, total: 3 })}
      </span>

      {/* 标题 */}
      <h1 className="text-3xl text-[#333] md:text-4xl lg:text-[56px]">
        {t('step_1_title')}
      </h1>

      <p className="text-sm md:text-base lg:text-[18px]">
        {t('step_1_desc')}
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

        {/* 验证码 */}
        <li className="mb-4 md:mb-5 lg:mb-6">
          <label className="mb-1.5 block text-sm text-[#333] md:mb-2 md:text-base lg:text-[18px]">
            {t('verification_code')}
          </label>
          <div className="relative flex">
            <input
              type="text"
              value={formData.code}
              onChange={e => setFormData({ ...formData, code: e.target.value })}
              className="h-[50px] w-full rounded-[25px] border border-[#707070] px-4 pr-[120px] text-base focus:border-[#4F68D2] focus:outline-none md:h-[60px] md:rounded-[30px] md:px-6 md:pr-[140px] md:text-lg lg:h-[80px] lg:rounded-[40px] lg:px-8 lg:pr-[180px] lg:text-[24px]"
            />
            <button
              type="button"
              onClick={handleGetCode}
              disabled={countdown > 0 || !/^1[3-9]\d{9}$/.test(formData.phone)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm text-[#4F68D2] disabled:cursor-not-allowed disabled:text-[#ccc] md:right-4 md:text-base lg:right-5 lg:text-[18px]"
            >
              {codeText}
            </button>
          </div>
        </li>
      </ul>

      {/* 错误提示 */}
      {validation && (
        <span className="block text-sm text-red-500 md:text-base">{validation}</span>
      )}

      {/* 继续按钮 */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        className="mx-auto mt-12 flex h-[50px] w-[180px] items-center justify-center rounded-[25px] border-none bg-[#4f68d2] text-xl font-medium text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:bg-[#f4f4f4] disabled:text-[#707070] md:mt-16 md:h-[64px] md:w-[220px] md:rounded-[32px] md:text-2xl lg:mt-26 lg:h-[82px] lg:w-[260px] lg:rounded-[40px] lg:text-[34px]"
      >
        {t('continue_btn')}
      </button>
    </motion.div>
  );
}

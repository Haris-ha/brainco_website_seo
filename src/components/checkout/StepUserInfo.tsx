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
      className="w-full max-w-[720px]"
    >
      {/* 步骤指示 */}
      <span className="mt-3 mb-4 block text-sm md:mt-4 md:mb-5 md:text-base lg:mt-5 lg:mb-6 lg:text-lg">
        {t('step_indicator', { current: 1, total: 3 })}
      </span>

      {/* 标题 */}
      <h1 className="text-2xl text-[#333] md:text-3xl lg:text-4xl">
        {t('step_1_title')}
      </h1>

      <p className="mt-3 text-lg">
        {t('step_1_desc')}
      </p>

      {/* 表单 */}
      <ul className="mt-3 w-full md:mt-4">
        {/* 姓名 */}
        <li className="mb-3 md:mb-4 lg:mb-4">
          <label className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-lg">
            {t('name')}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="h-[44px] w-full rounded-[22px] border border-[#707070] px-4 text-sm focus:border-[#4F68D2] focus:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:text-base"
          />
        </li>

        {/* 电话号码 */}
        <li className="mb-3 md:mb-4 lg:mb-4">
          <label className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-lg">
            {t('phone')}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="h-[44px] w-full rounded-[22px] border border-[#707070] px-4 text-sm focus:border-[#4F68D2] focus:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:text-base"
          />
        </li>

        {/* 验证码 */}
        <li className="mb-3 md:mb-4 lg:mb-4">
          <label className="mb-1 block text-sm text-[#333] md:mb-1.5 md:text-[15px] lg:text-lg">
            {t('verification_code')}
          </label>
          <div className="relative flex">
            <input
              type="text"
              value={formData.code}
              onChange={e => setFormData({ ...formData, code: e.target.value })}
              className="h-[44px] w-full rounded-[22px] border border-[#707070] px-4 pr-[100px] text-sm focus:border-[#4F68D2] focus:outline-none md:h-[48px] md:rounded-[24px] md:px-5 md:pr-[110px] md:text-[15px] lg:h-[52px] lg:rounded-[26px] lg:px-6 lg:pr-[120px] lg:text-base"
            />
            <button
              type="button"
              onClick={handleGetCode}
              disabled={countdown > 0 || !/^1[3-9]\d{9}$/.test(formData.phone)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-xs text-[#4F68D2] disabled:cursor-not-allowed disabled:text-[#ccc] md:right-3.5 md:text-sm lg:right-4 lg:text-[14px]"
            >
              {codeText}
            </button>
          </div>
        </li>
      </ul>

      {/* 错误提示 */}
      {validation && (
        <span className="block text-xs text-red-500 md:text-sm">{validation}</span>
      )}

      {/* 继续按钮 */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        className="mx-auto mt-8 flex h-[44px] w-[140px] items-center justify-center rounded-[22px] border-none bg-[#4f68d2] text-base font-medium text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:bg-[#f4f4f4] disabled:text-[#707070] md:mt-10 md:h-[48px] md:w-[160px] md:rounded-[24px] md:text-lg lg:mt-12 lg:h-[52px] lg:w-[180px] lg:rounded-[26px] lg:text-xl"
      >
        {t('continue_btn')}
      </button>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { sendVerificationCode, verifyCode } from '@/lib/api';

type OrderAuthProps = {
  onAuthSuccess: () => void;
};

/**
 * 订单验证登录组件
 * 用户输入手机号和验证码进行身份验证
 */
export function OrderAuth({ onAuthSuccess }: OrderAuthProps) {
  const t = useTranslations('Orders');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [validation, setValidation] = useState('');
  const [codeDisabled, setCodeDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = async () => {
    setValidation('');

    if (!phone) {
      setValidation(t('enter_phone'));
      return;
    }

    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setValidation(t('enter_valid_phone'));
      return;
    }

    try {
      // 使用封装好的 API 函数，使用正确的 base URL (https://bc-api.brainco.cn)
      await sendVerificationCode(phone, 7);

      let time = 60;
      setCountdown(time);
      setCodeDisabled(true);

      const timer = setInterval(() => {
        time -= 1;
        if (time <= 0) {
          setCountdown(0);
          setCodeDisabled(false);
          clearInterval(timer);
        } else {
          setCountdown(time);
        }
      }, 1000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setValidation(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleLogin = async () => {
    setValidation('');

    if (!phone) {
      setValidation(t('enter_phone'));
      return;
    }

    if (!code) {
      setValidation(t('verification_code_placeholder'));
      return;
    }

    try {
      // verifyCode 会自动保存 token 到 localStorage
      await verifyCode(phone, code);
      toast.success(t('view_orders'));
      onAuthSuccess();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setValidation(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <style>
        {`
          input:focus,
          input:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }
        `}
      </style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[90vw] px-4 md:max-w-[760px] lg:max-w-[860px]"
      >
        <h1 className="mb-6 text-center font-bold md:mb-8" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
          {t('login_title')}
        </h1>
        <p className="mb-8 text-center text-gray-600 md:mb-12" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)' }}>
          {t('login_subtitle')}
        </p>

        <div className="space-y-5 md:space-y-6">
          {/* 手机号输入 */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
              {t('phone_label')}
            </label>
            <div className="group relative rounded-lg border-2 border-gray-200 bg-white px-4 py-3 transition-all focus-within:border-[#4f68d2] focus-within:shadow-md md:px-5 md:py-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('phone_placeholder')}
                inputMode="numeric"
                className="w-full border-none bg-transparent text-gray-900 placeholder:text-gray-400 
                          outline-none focus:outline-none ring-0 focus:ring-0
                          transition-colors"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
              />
            </div>
          </div>

          {/* 验证码输入 */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
              {t('verification_code_label')}
            </label>
            <div className="flex items-stretch gap-3 md:gap-4">
              <div className="group relative flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 transition-all focus-within:border-[#4f68d2] focus-within:shadow-md md:px-5 md:py-4">
                <input
                  type="text"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  maxLength={6}
                  placeholder={t('verification_code_placeholder')}
                  inputMode="numeric"
                  className="w-full border-none bg-transparent text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                  style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
                />
              </div>
              <motion.button
                type="button"
                onClick={handleSendCode}
                disabled={codeDisabled}
                whileHover={{ scale: codeDisabled ? 1 : 1.02 }}
                whileTap={{ scale: codeDisabled ? 1 : 0.98 }}
                className="flex-shrink-0 cursor-pointer whitespace-nowrap rounded-lg border-2 border-gray-800 bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 md:cursor-none md:px-8 md:py-4"
                style={{ fontSize: 'clamp(0.875rem, 1.3vw, 1rem)' }}
              >
                {countdown > 0 ? t('seconds_remaining', { seconds: countdown }) : t('get_verification_code')}
              </motion.button>
            </div>
          </div>

          {/* 错误提示 */}
          {validation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500"
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
            >
              *
              {validation}
            </motion.div>
          )}

          {/* 提交按钮 */}
          <motion.button
            type="button"
            onClick={handleLogin}
            disabled={!phone || !code}
            whileHover={{ scale: !phone || !code ? 1 : 1.02 }}
            whileTap={{ scale: !phone || !code ? 1 : 0.98 }}
            className="mx-auto mt-10 flex cursor-pointer items-center justify-center rounded-full bg-[#4f68d2] px-12 py-4 font-medium !text-white transition-all disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:shadow-none md:mt-16 md:cursor-none md:px-16 md:py-5"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
              boxShadow: !phone || !code ? 'none' : '0px 3px 20px 1px rgba(0, 0, 0, 0.16)',
            }}
          >
            {t('view_orders')}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

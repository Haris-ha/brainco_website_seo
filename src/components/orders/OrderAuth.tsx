'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';

import request from '@/lib/request';

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
      await request.post('/uac/captcha/send', {
        login: phone,
        channel: 7,
      });

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
      setValidation(err instanceof Error ? err.message : String(err));
    }
  };

  const handleLogin = async () => {
    setValidation('');

    try {
      const res = await request.post<string>('/uac/auth/standing', {
        contact: phone,
        code,
      });

      localStorage.setItem('token', res.data);
      toast.success(t('view_orders'));
      onAuthSuccess();
    } catch (err) {
      setValidation(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
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

        <div className="space-y-5 md:space-y-7">
          {/* 手机号输入 */}
          <div className="flex flex-col">
            <div className="rounded bg-gray-100 px-5 py-4 md:px-6 md:py-5">
              <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>{t('phone_label')}</span>
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder={t('phone_placeholder')}
                className="w-full border-none bg-transparent text-base outline-none"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}
              />
            </div>
          </div>

          {/* 验证码输入 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 rounded bg-gray-100 px-5 py-4 md:gap-4 md:px-6 md:py-5">
              <div className="flex-1">
                <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>{t('verification_code_label')}</span>
                <input
                  type="text"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  maxLength={6}
                  placeholder={t('verification_code_placeholder')}
                  className="w-full border-none bg-transparent text-base outline-none"
                  style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}
                />
              </div>
              <motion.button
                type="button"
                onClick={handleSendCode}
                disabled={codeDisabled}
                whileHover={{ scale: codeDisabled ? 1 : 1.02 }}
                whileTap={{ scale: codeDisabled ? 1 : 0.98 }}
                className="flex-shrink-0 cursor-pointer rounded-full border-2 border-black px-6 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400 md:cursor-none md:border-[3px] md:px-10 md:py-3"
                style={{ fontSize: 'clamp(0.875rem, 1.3vw, 1.125rem)' }}
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

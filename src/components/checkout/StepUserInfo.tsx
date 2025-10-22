'use client';

import type { UserInfo } from '@/types/cart';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface StepUserInfoProps {
  onContinue: (data: UserInfo) => void;
  initialData?: UserInfo;
}

export function StepUserInfo({ onContinue, initialData }: StepUserInfoProps) {
  const t = useTranslations('Checkout');

  // 表单验证 schema
  const userInfoSchema = z.object({
    name: z.string().min(1, t('required_field')),
    phone: z.string().regex(/^1[3-9]\d{9}$/, t('invalid_phone')),
    address: z.string().min(1, t('required_field')),
    email: z.string().email(t('invalid_email')).optional().or(z.literal('')),
  });

  type UserInfoForm = z.infer<typeof userInfoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserInfoForm>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: initialData || {
      name: '',
      phone: '',
      address: '',
      email: '',
    },
  });

  const onSubmit = (data: UserInfoForm) => {
    onContinue(data as UserInfo);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[600px]"
    >
      <h2 className="text-fluid-4xl mb-6 text-center font-medium text-[#333] md:mb-8">
        {t('user_info')}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 姓名 */}
        <div>
          <label className="text-fluid-lg mb-2 block text-[#333]">
            {t('name')}
            <span className="ml-1 text-red-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            {...register('name')}
            placeholder={t('name_placeholder')}
            className={`text-fluid-base w-full rounded-lg border px-4 py-3 transition-all focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#e0e0e0] focus:ring-[#4F68D2]'
            }`}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* 电话 */}
        <div>
          <label className="text-fluid-lg mb-2 block text-[#333]">
            {t('phone')}
            <span className="ml-1 text-red-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="tel"
            {...register('phone')}
            placeholder={t('phone_placeholder')}
            className={`text-fluid-base w-full rounded-lg border px-4 py-3 transition-all focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#e0e0e0] focus:ring-[#4F68D2]'
            }`}
          />
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.phone.message}
            </motion.p>
          )}
        </div>

        {/* 地址 */}
        <div>
          <label className="text-fluid-lg mb-2 block text-[#333]">
            {t('address')}
            <span className="ml-1 text-red-500">*</span>
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            {...register('address')}
            placeholder={t('address_placeholder')}
            rows={3}
            className={`text-fluid-base w-full resize-none rounded-lg border px-4 py-3 transition-all focus:outline-none focus:ring-2 ${
              errors.address
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#e0e0e0] focus:ring-[#4F68D2]'
            }`}
          />
          {errors.address && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.address.message}
            </motion.p>
          )}
        </div>

        {/* 邮箱（可选） */}
        <div>
          <label className="text-fluid-lg mb-2 block text-[#333]">
            {t('email')}
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            {...register('email')}
            placeholder={t('email_placeholder')}
            className={`text-fluid-base w-full rounded-lg border px-4 py-3 transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-[#e0e0e0] focus:ring-[#4F68D2]'
            }`}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        {/* 继续按钮 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="text-fluid-xl md:text-fluid-2xl cursor-target mx-auto mt-8 block h-[50px] w-[162px] rounded-[25px] bg-[#4F68D2] font-medium text-white shadow-lg transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:opacity-50 md:h-[82px] md:w-[260px] md:rounded-[41px]"
        >
          {isSubmitting ? t('submitting') : t('continue_btn')}
        </motion.button>
      </form>
    </motion.div>
  );
}


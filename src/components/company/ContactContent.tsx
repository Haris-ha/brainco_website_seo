'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactContent() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    company: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    project: '',
    cooperationType: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      cooperationType: checked
        ? [...prev.cooperationType, value]
        : prev.cooperationType.filter(item => item !== value),
    }));
  };

  const handleSubmit = async () => {
    if (!formData.company) {
      toast.error(t('alert_company'));
      return;
    }
    if (!formData.address) {
      toast.error(t('alert_address'));
      return;
    }
    if (!formData.name) {
      toast.error(t('alert_name'));
      return;
    }
    if (!formData.email) {
      toast.error(t('alert_email'));
      return;
    }
    if (!formData.phone) {
      toast.error(t('alert_phone'));
      return;
    }
    if (!formData.project) {
      toast.error(t('alert_project'));
      return;
    }
    if (formData.cooperationType.length === 0) {
      toast.error(t('alert_cooperation_type'));
      return;
    }

    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('/rsc/api/schemaless-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: 'brainco_official_website_cooperation',
          items: [
            { label: t('form_company'), value: formData.company },
            { label: t('form_name'), value: formData.name },
            { label: t('form_email'), value: formData.email },
            { label: t('form_address'), value: formData.address },
            { label: t('form_phone'), value: formData.phone },
            { label: t('form_project'), value: formData.project },
            {
              label: t('form_cooperation_type'),
              value: formData.cooperationType.join(','),
            },
          ],
        }),
      });

      if (response.ok) {
        toast.success(t('submit_success'));
        setFormData({
          company: '',
          address: '',
          name: '',
          email: '',
          phone: '',
          project: '',
          cooperationType: [],
        });
      } else {
        toast.error(t('submit_error'));
      }
    } catch {
      toast.error(t('submit_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      <Toaster />
      {/* Top Banner */}
      <div
        className="flex h-screen w-full flex-col items-start justify-center bg-cover bg-center px-[240px] pt-20 2xl:px-[300px]"
        style={{
          backgroundImage:
            'url(https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jnBeGhhj5wSkShKc.webp)',
        }}
      >
        <motion.h1
          className="text-fluid-6xl leading-[92px] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          {t('page_title')}
        </motion.h1>
        <motion.p
          className="text-fluid-xl mt-[26px] w-[333px] leading-[34px] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          {t('intro_text')}
        </motion.p>
      </div>

      {/* Contact Details */}
      <div className="flex h-screen w-full flex-col justify-center bg-white">
        <div className="flex items-end justify-around">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-[50px] h-px w-[75px] border-t-[3px] border-[#333333]" />
            <div className="w-[343px]">
              <motion.div
                className="mt-[40px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <div className="text-2xl leading-10 font-medium text-[#333333]">
                  {t('location_hangzhou')}
                </div>
                <div className="text-xl leading-10 text-[#707070]">
                  {t('address_hangzhou')}
                </div>
              </motion.div>

              <motion.div
                className="mt-[40px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <div className="text-2xl leading-10 font-medium text-[#333333]">
                  {t('location_shenzhen')}
                </div>
                <div className="text-xl leading-10 text-[#707070]">
                  {t('address_shenzhen')}
                </div>
              </motion.div>

              <motion.div
                className="mt-[40px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="text-2xl leading-10 font-medium text-[#333333]">
                  {t('location_boston')}
                </div>
                <div className="text-xl leading-10 text-[#707070]">
                  {t('address_boston')}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-[264px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <span className="text-xl leading-10 font-medium text-[#333333]">
                {t('media_inquiry')}
              </span>
              <br />
              <span className="text-xl leading-10 font-medium text-[#00baff]">
                pr@brainco.cn
              </span>
            </motion.div>
            <motion.div
              className="mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <span className="text-xl leading-10 font-medium text-[#333333]">
                {t('hr_inquiry')}
              </span>
              <br />
              <span className="text-xl leading-10 font-medium text-[#00baff]">
                hr@brainco.cn
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Business Areas */}
      <div className="grid h-screen w-full grid-cols-4">
        {[
          {
            bg: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/HKyIiSGZxRQOcU4C.webp',
            title: t('area_rehabilitation'),
            desc: t('area_rehabilitation_desc'),
          },
          {
            bg: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/kzlQKuZBEOFSsoLY.webp',
            title: t('area_health'),
            desc: t('area_health_desc'),
          },
          {
            bg: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/bWrnAysk45iOQlgM.webp',
            title: t('area_education'),
            desc: t('area_education_desc'),
          },
          {
            bg: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/GFEKoWaRrcjdyin1.webp',
            title: t('area_embodied_intelligence'),
            desc: t('area_embodied_intelligence_desc'),
          },
        ].map((area, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${area.bg})` }}
          >
            <div className="flex h-[60%] w-[50%] flex-col justify-around">
              <h2 className="text-fluid-7xl pr-10 leading-[80px] font-medium text-[#333333]">
                {area.title}
              </h2>
              <div className="flex h-[50%] flex-col justify-start">
                <div className="mb-[50px] h-px w-[75px] border-t-[3px] border-[#333333]" />
                <p className="text-fluid-xl w-full leading-[34px] text-[#707070]">
                  {area.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cooperation Form */}
      <div className="my-[200px] flex h-screen w-full items-center justify-center bg-white">
        <motion.div
          className="flex w-[65%] flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="mb-[45px] text-[60px] leading-[80px] font-medium text-[#333333]">
            {t('cooperation_title')}
          </h2>

          <motion.div
            className="mb-[43px] flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_company')}
              {' '}
              *
            </Label>
            <Input
              type="text"
              value={formData.company}
              onChange={e => handleInputChange(e, 'company')}
              className="rounded-none border-0 border-b border-[#000] text-[25px] shadow-none focus-visible:ring-0"
            />
          </motion.div>

          <motion.div
            className="mb-[43px] flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_address')}
              {' '}
              *
            </Label>
            <Input
              type="text"
              value={formData.address}
              onChange={e => handleInputChange(e, 'address')}
              className="rounded-none border-0 border-b border-[#000] text-[25px] shadow-none focus-visible:ring-0"
            />
          </motion.div>

          <motion.div
            className="mb-[43px] flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_name')}
              {' '}
              *
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={e => handleInputChange(e, 'name')}
              className="rounded-none border-0 border-b border-[#000] text-[25px] shadow-none focus-visible:ring-0"
            />
          </motion.div>

          <motion.div
            className="mb-[43px] flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_email')}
              {' '}
              *
            </Label>
            <Input
              type="email"
              value={formData.email}
              onChange={e => handleInputChange(e, 'email')}
              className="rounded-none border-0 border-b border-[#000] text-[25px] shadow-none focus-visible:ring-0"
            />
          </motion.div>

          <motion.div
            className="mb-[43px] flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_phone')}
              {' '}
              *
            </Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={e => handleInputChange(e, 'phone')}
              className="rounded-none border-0 border-b border-[#000] text-[25px] shadow-none focus-visible:ring-0"
            />
          </motion.div>

          <motion.div
            className="mb-[43px] flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_project')}
            </Label>
            <Input
              type="text"
              placeholder={t('form_project_placeholder')}
              value={formData.project}
              onChange={e => handleInputChange(e, 'project')}
              className="rounded-none border-0 border-b border-[#000] text-[25px] shadow-none focus-visible:ring-0"
            />
          </motion.div>

          <motion.div
            className="flex flex-col space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Label className="text-2xl font-medium text-[#333333]">
              {t('form_cooperation_type')}
              {' '}
              *
            </Label>
            <div className="flex flex-wrap items-center justify-between">
              {[
                { id: 'rd', value: t('cooperation_rd') },
                { id: 'sales', value: t('cooperation_sales') },
                { id: 'brand', value: t('cooperation_brand') },
                { id: 'other', value: t('cooperation_other') },
              ].map(type => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={type.id}
                    checked={formData.cooperationType.includes(type.value)}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckboxChange(type.value, checked)}
                  />
                  <Label
                    htmlFor={type.id}
                    className="cursor-pointer text-xl font-normal text-[rgba(51,51,51,0.5)]"
                  >
                    {type.value}
                  </Label>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-[96px] flex w-full items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="h-20 w-[274px] rounded-[68px] border-[3px] border-[#333333] bg-white text-[28px] hover:bg-gray-50"
            >
              {t('submit_button')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

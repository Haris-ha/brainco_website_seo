'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactContentMobile() {
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

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.includes('#contact')) {
      return;
    }

    let adjustTimer: NodeJS.Timeout | null = null;

    const timer = setTimeout(() => {
      const element = document.querySelector('#contact') as HTMLElement | null;
      if (element) {
        // 先滚动到元素位置
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 然后再向上调整100px
        adjustTimer = setTimeout(() => {
          const currentScroll = window.scrollY || window.pageYOffset;
          window.scrollTo({
            top: currentScroll - 100,
            behavior: 'smooth',
          });
        }, 800);
      }
    }, 600);

    return () => {
      clearTimeout(timer);
      if (adjustTimer) {
        clearTimeout(adjustTimer);
      }
    };
  }, []);

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

  const businessAreas = [
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/HKyIiSGZxRQOcU4C.webp',
      title: t('area_rehabilitation'),
      desc: t('area_rehabilitation_desc'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/kzlQKuZBEOFSsoLY.webp',
      title: t('area_health'),
      desc: t('area_health_desc'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/bWrnAysk45iOQlgM.webp',
      title: t('area_education'),
      desc: t('area_education_desc'),
    },
    {
      img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/GFEKoWaRrcjdyin1.webp',
      title: t('area_embodied_intelligence'),
      desc: t('area_embodied_intelligence_desc'),
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* Top Banner */}
      <header className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/aiz6TJnJ7iWSNVJ1.webp"
          alt="BrainCo 联系我们页面背景 / BrainCo Contact Us Background"
          width={750}
          height={800}
          className="w-full object-cover"
        />
        <motion.div
          className="absolute top-0 left-0 flex h-[calc(100vh-80px)] w-full flex-col justify-center px-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-fluid-5xl font-bold !text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {t('page_title')}
          </motion.h1>
          <motion.p
            className="text-fluid-base mt-3 !text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            {t('intro_text')}
          </motion.p>
        </motion.div>
      </header>

      {/* Contact Details */}
      <section className="w-full bg-white" aria-labelledby="contact-details-mobile-title">
        <h2 id="contact-details-mobile-title" className="sr-only">联系方式 / Contact Information</h2>
        <motion.address
          className="mt-[30px] px-10 not-italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-[50px] h-px w-[75px] border-t-[3px] border-[#333333]" />
          <div>
            <motion.div
              className="mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="text-fluid-xl font-medium text-[#333333]">
                {t('location_hangzhou')}
              </div>
              <div className="text-fluid-base text-[#656565]">
                {t('address_hangzhou')}
              </div>
            </motion.div>

            <motion.div
              className="mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="text-fluid-xl font-medium text-[#333333]">
                {t('location_shenzhen')}
              </div>
              <div className="text-fluid-base text-[#656565]">
                {t('address_shenzhen')}
              </div>
            </motion.div>

            <motion.div
              className="mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="text-fluid-xl font-medium text-[#333333]">
                {t('location_boston')}
              </div>
              <div className="text-fluid-base text-[#656565]">
                {t('address_boston')}
              </div>
            </motion.div>
          </div>
        </motion.address>

        <motion.div
          className="mt-[30px] px-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className="mt-[10px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="text-fluid-xl block leading-10 font-medium text-[#333333]">
              {t('media_inquiry')}
            </span>
            <span className="text-fluid-base font-medium text-[#00baff]">
              pr@brainco.cn
            </span>
          </motion.div>
          <motion.div
            className="mt-[10px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="text-fluid-xl block leading-10 font-medium text-[#333333]">
              {t('hr_inquiry')}
            </span>
            <span className="text-fluid-base font-medium text-[#00baff]">
              hr@brainco.cn
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Business Areas */}
      <div className="mt-[60px] w-full">
        {businessAreas.map((area, index) => (
          <div key={index} className="relative w-full">
            <Image
              src={area.img}
              alt={area.title}
              width={750}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full px-10">
              <h4 className="text-fluid-2xl relative mt-12 mb-[18px] pb-6 font-bold after:absolute after:bottom-0 after:left-0 after:h-0 after:w-[76px] after:border-b-[3px] after:border-[#333] after:content-['']">
                {area.title}
              </h4>
              <p className="text-fluid-base text-[#656565]">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cooperation Form */}
      <motion.div
        id="contact"
        className="mt-20 mb-[50px] w-full bg-white px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-fluid-3xl mb-10 text-center text-[#333333]">
          {t('cooperation_title')}
        </h2>

        <motion.div
          className="mb-[26px] flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <Label htmlFor="company-mobile" className="text-fluid-base text-[#333333]">
            {t('form_company')}
            *
          </Label>
          <Input
            id="company-mobile"
            type="text"
            value={formData.company}
            onChange={e => handleInputChange(e, 'company')}
            className="text-fluid-base rounded-none border-0 border-b border-[#000] leading-[30px] shadow-none focus-visible:ring-0"
          />
        </motion.div>

        <motion.div
          className="mb-[26px] flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <Label htmlFor="address-mobile" className="text-fluid-base text-[#333333]">
            {t('form_address')}
            *
          </Label>
          <Input
            id="address-mobile"
            type="text"
            value={formData.address}
            onChange={e => handleInputChange(e, 'address')}
            className="text-fluid-base rounded-none border-0 border-b border-[#000] leading-[30px] shadow-none focus-visible:ring-0"
          />
        </motion.div>

        <motion.div
          className="mb-[26px] flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <Label htmlFor="name-mobile" className="text-fluid-base text-[#333333]">
            {t('form_name')}
            *
          </Label>
          <Input
            id="name-mobile"
            type="text"
            value={formData.name}
            onChange={e => handleInputChange(e, 'name')}
            className="text-fluid-base rounded-none border-0 border-b border-[#000] leading-[30px] shadow-none focus-visible:ring-0"
          />
        </motion.div>

        <motion.div
          className="mb-[26px] flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          <Label htmlFor="email-mobile" className="text-fluid-base text-[#333333]">
            {t('form_email')}
            *
          </Label>
          <Input
            id="email-mobile"
            type="email"
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
            className="text-fluid-base rounded-none border-0 border-b border-[#000] leading-[30px] shadow-none focus-visible:ring-0"
          />
        </motion.div>

        <motion.div
          className="mb-[26px] flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <Label htmlFor="phone-mobile" className="text-fluid-base text-[#333333]">
            {t('form_phone')}
            *
          </Label>
          <Input
            id="phone-mobile"
            type="tel"
            value={formData.phone}
            onChange={e => handleInputChange(e, 'phone')}
            className="text-fluid-base rounded-none border-0 border-b border-[#000] leading-[30px] shadow-none focus-visible:ring-0"
          />
        </motion.div>

        <motion.div
          className="mb-[26px] flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
        >
          <Label htmlFor="project-mobile" className="text-fluid-base text-[#333333]">
            {t('form_project')}
          </Label>
          <Input
            id="project-mobile"
            type="text"
            placeholder={t('form_project_placeholder')}
            value={formData.project}
            onChange={e => handleInputChange(e, 'project')}
            className="text-fluid-base rounded-none border-0 border-b border-[#000] leading-[30px] shadow-none focus-visible:ring-0"
          />
        </motion.div>

        <motion.div
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Label className="text-fluid-base text-[#333333]">
            {t('form_cooperation_type')}
            *
          </Label>
          <div className="flex flex-wrap items-center justify-between">
            {[
              { id: 'rd-mobile', value: t('cooperation_rd') },
              { id: 'sales-mobile', value: t('cooperation_sales') },
              { id: 'brand-mobile', value: t('cooperation_brand') },
              { id: 'other-mobile', value: t('cooperation_other') },
            ].map(type => (
              <div
                key={type.id}
                className="mt-[10px] flex flex-[50%] items-center justify-start space-x-2"
              >
                <Checkbox
                  id={type.id}
                  checked={formData.cooperationType.includes(type.value)}
                  onCheckedChange={checked =>
                    handleCheckboxChange(type.value, checked as boolean)}
                />
                <Label
                  htmlFor={type.id}
                  className="text-fluid-base cursor-pointer font-normal text-[rgba(51,51,51,0.5)]"
                >
                  {type.value}
                </Label>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            variant="outline"
            className="text-fluid-base h-12 w-[166px] rounded-3xl border-[2px] border-[#333333] bg-white hover:bg-gray-50"
          >
            {t('submit_button')}
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}

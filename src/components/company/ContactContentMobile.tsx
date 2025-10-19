'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    if (hash.includes('#contact')) {
      setTimeout(() => {
        document
          .querySelector('#contact')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      cooperationType: checked
        ? [...prev.cooperationType, value]
        : prev.cooperationType.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async () => {
    if (!formData.company) return alert(t('alert_company'));
    if (!formData.address) return alert(t('alert_address'));
    if (!formData.name) return alert(t('alert_name'));
    if (!formData.email) return alert(t('alert_email'));
    if (!formData.phone) return alert(t('alert_phone'));
    if (!formData.project) return alert(t('alert_project'));
    if (formData.cooperationType.length === 0)
      return alert(t('alert_cooperation_type'));

    if (isSubmitting) return;
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
        alert(t('submit_success'));
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
        alert(t('submit_error'));
      }
    } catch (error) {
      alert(t('submit_error'));
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
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/aiz6TJnJ7iWSNVJ1.webp"
          alt={t('page_title')}
          width={750}
          height={800}
          className="w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-[calc(100vh-80px)] w-full flex-col justify-center px-20 pr-10">
          <h1 className="text-[40px] font-bold text-white">
            {t('page_title')}
          </h1>
          <p className="mt-3 text-base text-white">{t('intro_text')}</p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="w-full bg-white">
        <div className="mt-[30px] px-10">
          <div className="mb-[50px] h-px w-[75px] border-t-[3px] border-[#333333]" />
          <div>
            <div className="mt-[30px]">
              <div className="text-xl font-medium text-[#333333]">
                {t('location_hangzhou')}
              </div>
              <div className="text-sm text-[#707070]">
                {t('address_hangzhou')}
              </div>
            </div>

            <div className="mt-[30px]">
              <div className="text-xl font-medium text-[#333333]">
                {t('location_shenzhen')}
              </div>
              <div className="text-sm text-[#707070]">
                {t('address_shenzhen')}
              </div>
            </div>

            <div className="mt-[30px]">
              <div className="text-xl font-medium text-[#333333]">
                {t('location_boston')}
              </div>
              <div className="text-sm text-[#707070]">
                {t('address_boston')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px] px-10">
          <div className="mt-[10px]">
            <span className="block text-xl font-medium leading-10 text-[#333333]">
              {t('media_inquiry')}
            </span>
            <span className="text-sm font-medium text-[#00baff]">
              pr@brainco.cn
            </span>
          </div>
          <div className="mt-[10px]">
            <span className="block text-xl font-medium leading-10 text-[#333333]">
              {t('hr_inquiry')}
            </span>
            <span className="text-sm font-medium text-[#00baff]">
              hr@brainco.cn
            </span>
          </div>
        </div>
      </div>

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
            <div className="absolute left-0 top-0 h-full w-full px-10">
              <h4 className="relative mb-[18px] mt-12 pb-6 text-xl font-bold leading-none tracking-[6px] after:absolute after:bottom-0 after:left-0 after:h-0 after:w-[76px] after:border-b-[3px] after:border-[#333] after:content-['']">
                {area.title}
              </h4>
              <p className="text-[18px] text-[#707070]">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cooperation Form */}
      <div
        id="contact"
        className="mb-[50px] mt-20 w-full bg-white px-10"
      >
        <h2 className="mb-20 text-center text-2xl text-[#333333]">
          {t('cooperation_title')}
        </h2>

        <div className="mb-[26px] flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_company')}*
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange(e, 'company')}
            className="border-0 border-b border-[#000] text-sm leading-[30px] outline-none"
          />
        </div>

        <div className="mb-[26px] flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_address')}*
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange(e, 'address')}
            className="border-0 border-b border-[#000] text-sm leading-[30px] outline-none"
          />
        </div>

        <div className="mb-[26px] flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_name')}*
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e, 'name')}
            className="border-0 border-b border-[#000] text-sm leading-[30px] outline-none"
          />
        </div>

        <div className="mb-[26px] flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_email')}*
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
            className="border-0 border-b border-[#000] text-sm leading-[30px] outline-none"
          />
        </div>

        <div className="mb-[26px] flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_phone')}*
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
            className="border-0 border-b border-[#000] text-sm leading-[30px] outline-none"
          />
        </div>

        <div className="mb-[26px] flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_project')}
          </label>
          <input
            type="text"
            placeholder={t('form_project_placeholder')}
            value={formData.project}
            onChange={(e) => handleInputChange(e, 'project')}
            className="border-0 border-b border-[#000] text-sm leading-[30px] outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="mt-[26px] text-sm text-[#333333]">
            {t('form_cooperation_type')}*
          </label>
          <div className="flex flex-wrap items-center justify-between">
            {[
              { id: 'rd-mobile', value: t('cooperation_rd') },
              { id: 'sales-mobile', value: t('cooperation_sales') },
              { id: 'brand-mobile', value: t('cooperation_brand') },
              { id: 'other-mobile', value: t('cooperation_other') },
            ].map((type) => (
              <div
                key={type.id}
                className="mt-[10px] flex flex-[50%] items-center justify-start"
              >
                <input
                  id={type.id}
                  type="checkbox"
                  checked={formData.cooperationType.includes(type.value)}
                  onChange={(e) =>
                    handleCheckboxChange(type.value, e.target.checked)
                  }
                  className="mr-2"
                />
                <label
                  htmlFor={type.id}
                  className="text-sm text-[rgba(51,51,51,0.5)]"
                >
                  {type.value}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[72px] flex items-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="h-12 w-[166px] cursor-pointer rounded-3xl border-[3px] border-[#333333] bg-white text-base hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t('submit_button')}
          </button>
        </div>
      </div>
    </div>
  );
}


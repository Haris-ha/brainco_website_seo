'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Product = {
  name: string;
  img: string;
  previewImg: string;
  href: string;
  desc: string;
};

type ProductCategory = {
  title: string;
  products: Product[];
};

type ProductsMenuDesktopProps = {
  onClose?: () => void;
};

export function ProductsMenuDesktop({ onClose }: ProductsMenuDesktopProps) {
  const t = useTranslations('ProductsMenuDesktop');

  useEffect(() => {
    // 保存当前滚动位置
    const scrollY = window.scrollY;

    // 固定页面位置防止滚动
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';

    return () => {
      // 恢复原状
      const scrollPos = Math.abs(Number.parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';

      // 恢复滚动位置
      window.scrollTo(0, scrollPos);
    };
  }, []);

  const productCategories: ProductCategory[] = [
    {
      title: t('intelligent_bionics'),
      products: [
        {
          name: t('mobius_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/iBCIDeObGYNVWhEq.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/aNIUvPigSeFGEbHW.webp',
          href: '/products/mobius',
          desc: t('mobius_desc'),
        },
        {
          name: t('brain_robotics_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sTFJhVGYtwbOmvBN.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nGjyEWDFRvCrwald.webp',
          href: '/products/brain-robotics',
          desc: t('brain_robotics_desc'),
        },
        {
          name: t('dexterous_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pKlkrsJEDIgBCYRy.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/uRsplIedTmtaAUYk.webp',
          href: '/products/revo1',
          desc: t('dexterous_desc'),
        },
      ],
    },
    {
      title: t('intelligent_health'),
      products: [
        {
          name: t('easleep_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DJqKOvlTBcFyidSf.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/BAGWcXOZRtdxgpsk.webp',
          href: '/health/easleep',
          desc: t('easleep_desc'),
        },
        {
          name: t('oxyzen_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KJgdiOXZcRnGYhDH.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/vJBVfyIDRSmEpieZ.webp',
          href: '/health/oxyzen',
          desc: t('oxyzen_desc'),
        },
        {
          name: t('focus_zen_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qyrUWeHbfgRsVAPS.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NKmGxfsUrSWyTBQe.webp',
          href: '/health/focus-zen',
          desc: t('focus_zen_desc'),
        },
        {
          name: t('focus_xin_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qyrUWeHbfgRsVAPS.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NKmGxfsUrSWyTBQe.webp',
          href: '/health/focus-xin',
          desc: t('focus_xin_desc'),
        },
        {
          name: t('starkids_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qyrUWeHbfgRsVAPS.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/QqcGWLgUfmjhPZEz.webp',
          href: '/health/starkids',
          desc: t('starkids_desc'),
        },
      ],
    },
    {
      title: t('intelligent_education'),
      products: [
        {
          name: t('brain_ai_name'),
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oMVDmWAPurnEGZiw.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MIhtXTQFnymLuCwS.webp',
          href: '/education/brain-ai',
          desc: t('brain_ai_desc'),
        },
      ],
    },
  ];

  // 使用类别标题作为 key，初始化每个类别的悬停产品索引为 0
  const initialHoveredState = productCategories.reduce(
    (acc, category) => {
      acc[category.title] = 0;
      return acc;
    },
    {} as { [key: string]: number },
  );

  const [hoveredProduct, setHoveredProduct] = useState<{
    [key: string]: number;
  }>(initialHoveredState);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-20 right-0 bottom-0 left-0 z-999 hidden w-full gap-4 overflow-y-auto bg-white px-4 pt-10 !pb-10 shadow-lg md:flex md:justify-around 2xl:gap-0 2xl:px-8"
    >
      {productCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: categoryIndex * 0.1, ease: 'easeOut' }}
          className="flex flex-col"
        >
          {/* 分类标题 */}
          <h3 className="mb-6 ml-4 text-left text-2xl font-medium text-[#333]">{category.title}</h3>

          <div className="flex w-full gap-2 md:gap-4 2xl:gap-8">
            {/* 产品列表 */}
            <ul className="flex w-full flex-col items-center gap-1 overflow-y-auto 2xl:gap-2">
              {category.products.map((product, index) => (
                <motion.li
                  key={product.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                  onMouseEnter={() =>
                    setHoveredProduct(prev => ({
                      ...prev,
                      [category.title]: index,
                    }))}
                >
                  <Link
                    href={product.href}
                    onClick={onClose}
                    className={`cursor-target flex flex-col items-center rounded-lg px-2 py-2 transition-all duration-300 md:px-4 md:py-3 ${
                      hoveredProduct[category.title] === index
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* 产品图标 */}
                    <motion.div
                      className="mx-2 flex h-[60px] w-[60px] items-center justify-center md:h-[80px] md:w-[80px]"
                      animate={hoveredProduct[category.title] === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={80}
                        height={80}
                        className={`h-auto max-h-full w-auto transition-all duration-300 ${
                          hoveredProduct[category.title] === index
                            ? 'brightness-110'
                            : 'group-hover:brightness-110'
                        }`}
                      />
                    </motion.div>
                    {/* 产品名称 */}
                    <motion.span
                      className={`mt-1 text-sm transition-colors duration-300 md:text-lg ${
                        hoveredProduct[category.title] === index
                          ? 'text-[#666]'
                          : 'text-[#333] group-hover:text-[#666]'
                      }`}
                      animate={hoveredProduct[category.title] === index ? { y: -2 } : { y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* 产品预览 */}
            {category.title !== t('intelligent_bionics') || hoveredProduct[category.title]! < 2
              ? (
                  <motion.div
                    key={`preview-${category.title}-${hoveredProduct[category.title]}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-[400px] w-[280px] flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-[#f5f5f5] p-4 shadow-md md:h-[500px] md:w-[240px] md:p-8"
                  >
                    <Link
                      href={category.products[hoveredProduct[category.title]!]!.href}
                      onClick={onClose}
                      className="cursor-target flex h-full flex-col items-center justify-center"
                    >
                      {/* 预览图 */}
                      <motion.div
                        className="mb-6 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={category.products[hoveredProduct[category.title]!]!.previewImg}
                          alt={category.products[hoveredProduct[category.title]!]!.name}
                          width={220}
                          height={220}
                          className="h-auto max-h-[180px] w-auto md:max-h-[220px]"
                        />
                      </motion.div>
                      {/* 描述 */}
                      <div className="text-center text-sm text-[#666] md:text-base">
                        {category.products[hoveredProduct[category.title]!]!.desc.split(/(?<=关节)|(?<=产品)|(?<=流畅)|(?<=安睡仪)|(?<=系统)|(?<=套件)/).map((line: string, lineIndex: number) => (
                          <motion.span
                            key={`desc-${category.title}-${lineIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: lineIndex * 0.1 }}
                            className="block"
                          >
                            {line}
                          </motion.span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                )
              : (
                /* 工业灵巧手特殊显示 */
                  <motion.div
                    key={`preview-${category.title}-${hoveredProduct[category.title]}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-[400px] w-[280px] flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-[#f5f5f5] p-4 shadow-md md:h-[500px] md:w-[240px] md:p-8"
                  >
                    <div className="flex w-full flex-col gap-2 md:gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href="/products/revo1" onClick={onClose} className="cursor-target block overflow-hidden rounded-2xl">
                          <Image
                            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/E2OMTcHyivahBS45.webp"
                            alt="Revo 1"
                            width={320}
                            height={180}
                            className="h-auto w-full transition-transform hover:scale-105"
                          />
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href="/products/revo2" onClick={onClose} className="cursor-target block overflow-hidden rounded-2xl">
                          <Image
                            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/laCLywA51tPhZJ7D.webp"
                            alt="Revo 2"
                            width={320}
                            height={180}
                            className="h-auto w-full transition-transform hover:scale-105"
                          />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

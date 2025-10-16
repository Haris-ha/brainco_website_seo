'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

export function ProductsMenuDesktop() {
  const productCategories: ProductCategory[] = [
    {
      title: '智能仿生',
      products: [
        {
          name: '智能仿生腿',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/iBCIDeObGYNVWhEq.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/aNIUvPigSeFGEbHW.webp',
          href: '/products/mobius',
          desc: '采用脑机接口算法的仿生膝关节',
        },
        {
          name: '智能仿生手',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sTFJhVGYtwbOmvBN.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nGjyEWDFRvCrwald.webp',
          href: '/products/brain-robotics',
          desc: '结合脑机接口与AI算法的智能产品',
        },
        {
          name: '工业灵巧手',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pKlkrsJEDIgBCYRy.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/uRsplIedTmtaAUYk.webp',
          href: '/products/revo1',
          desc: '屡获殊荣，符合人体工学，适应性强，操作流畅',
        },
      ],
    },
    {
      title: '智能健康',
      products: [
        {
          name: '深海豚',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DJqKOvlTBcFyidSf.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/BAGWcXOZRtdxgpsk.webp',
          href: '/health/easleep',
          desc: '深海豚脑机智能安睡仪',
        },
        {
          name: '仰憩',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KJgdiOXZcRnGYhDH.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/vJBVfyIDRSmEpieZ.webp',
          href: '/health/oxyzen',
          desc: '仰憩舒压助眠系统',
        },
        {
          name: 'FocusZen',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qyrUWeHbfgRsVAPS.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NKmGxfsUrSWyTBQe.webp',
          href: '/health/focus-zen',
          desc: 'FocusZen正念舒压系统',
        },
        {
          name: '专注欣',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qyrUWeHbfgRsVAPS.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NKmGxfsUrSWyTBQe.webp',
          href: '/health/focus-xin',
          desc: '专注欣脑机接口注意力训练系统',
        },
        {
          name: '开星果',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/qyrUWeHbfgRsVAPS.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/QqcGWLgUfmjhPZEz.webp',
          href: '/health/starkids',
          desc: '开星果脑机接口社交沟通训练系统',
        },
      ],
    },
    {
      title: '智能教育',
      products: [
        {
          name: 'Brain AI',
          img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oMVDmWAPurnEGZiw.webp',
          previewImg:
            'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MIhtXTQFnymLuCwS.webp',
          href: '/education/brain-ai',
          desc: '用于STEM教育的可组装假手套件',
        },
      ],
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState<{
    [key: string]: number;
  }>({
    智能仿生: 0,
    智能健康: 0,
    智能教育: 0,
  });

  return (
    <div className="animate-fade-in fixed top-[78px] left-0 hidden w-full bg-white px-[110px] py-20 md:flex md:justify-between">
      {productCategories.map(category => (
        <div key={category.title} className="flex-1">
          {/* 分类标题 */}
          <h3 className="mb-15 text-2xl">{category.title}</h3>

          <div className="flex">
            {/* 产品列表 */}
            <ul className="mr-14">
              {category.products.map((product, index) => (
                <li
                  key={product.name}
                  className="flex flex-col items-center text-center"
                  onMouseEnter={() =>
                    setHoveredProduct(prev => ({
                      ...prev,
                      [category.title]: index,
                    }))}
                >
                  <Link href={product.href} className="flex flex-col items-center">
                    {/* 产品图标 */}
                    <div className="flex h-[102px] w-[102px] items-center justify-center p-2.5">
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={102}
                        height={102}
                        className="h-auto max-h-full w-auto"
                      />
                    </div>
                    {/* 产品名称 */}
                    <span className="text-xl text-[#666]">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* 产品预览 */}
            {category.title !== '智能仿生' || hoveredProduct[category.title] < 2 ? (
              <div className="flex h-[400px] w-[344px] flex-shrink-0 flex-col items-center bg-[#f5f5f5] pt-12">
                <Link
                  href={category.products[hoveredProduct[category.title]].href}
                  className="flex flex-col items-center"
                >
                  {/* 预览图 */}
                  <div className="mb-5 flex h-[242px] items-center justify-center">
                    <Image
                      src={
                        category.products[hoveredProduct[category.title]].previewImg
                      }
                      alt={category.products[hoveredProduct[category.title]].name}
                      width={242}
                      height={242}
                      className="h-auto max-h-full w-auto"
                    />
                  </div>
                  {/* 描述 */}
                  <div className="flex flex-col items-center text-base">
                    {category.products[hoveredProduct[category.title]].desc
                      .split(/(?<=关节)|(?<=产品)|(?<=流畅)|(?<=安睡仪)|(?<=系统)|(?<=套件)/)
                      .map((line, index) => (
                        <span key={index}>{line}</span>
                      ))}
                  </div>
                </Link>
              </div>
            ) : (
              /* 工业灵巧手特殊显示 */
              <div className="flex w-[210px] flex-col gap-4">
                <Link href="/products/revo1">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/E2OMTcHyivahBS45.webp"
                    alt="Revo 1"
                    width={210}
                    height={192}
                    className="h-auto w-full"
                  />
                </Link>
                <Link href="/products/revo2">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/laCLywA51tPhZJ7D.webp"
                    alt="Revo 2"
                    width={210}
                    height={192}
                    className="h-auto w-full"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}

      <style jsx>
        {`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
      `}
      </style>
    </div>
  );
}

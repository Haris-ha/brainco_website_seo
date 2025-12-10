import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AfterSales from '@/components/common/AfterSales';
import { appDownloadData, imageUrls, purchaseLink, socialMediaData } from './data';
import PurchaseButton from './PurchaseButton';

type OxyZenContentProps = {
  productInfo?: any;
};

export default function OxyZenContent({ productInfo }: OxyZenContentProps) {
  const t = useTranslations('OxyZen');

  return (
    <main className="bg-white text-[#333]">
      {/* Hero Banner */}
      <header className="relative">
        <Image
          src="https://www.brainco.cn/news-images/hero_oz.jpg"
          alt="OxyZen 氧气能量补充设备 - 产品展示 / OxyZen Oxygen Energy Device - Product Display"
          width={1920}
          height={1080}
          className="h-auto w-full"
          priority
        />

        <div className="absolute top-0 right-0 flex h-full w-full max-w-[600px] flex-col items-start justify-center pr-[8vw] pl-[4vw] 2xl:max-w-[800px] 2xl:pr-[16vw]">
          <motion.h1
            className="text-fluid-6xl mb-4 font-bold text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('product_name')}
          </motion.h1>
          <motion.p
            className="text-fluid-3xl mb-2 w-full text-left text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('tagline_1')}
          </motion.p>
          <motion.p
            className="text-fluid-3xl mb-6 w-full text-left text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('tagline_2')}
          </motion.p>

          {productInfo && (
            <motion.div
              className="flex w-full flex-col items-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="mb-4 flex">
                <span className="text-fluid-5xl font-medium text-[#333]">
                  ¥
                  {productInfo.price / 100}
                </span>
                {productInfo.oldPrice && (
                  <s className="text-fluid-5xl ml-2 font-medium text-[#000] opacity-50">
                    ¥
                    {productInfo.oldPrice / 100}
                  </s>
                )}
              </div>
              <PurchaseButton product={productInfo} />
            </motion.div>
          )}
        </div>
      </header>

      {/* Product Image */}
      <section className="relative mx-auto max-w-[90%] px-[5%]">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/iftXG0SL0Cr5V08e.webp"
          alt="OxyZen 产品佩戴展示图 - 氧气能量补充设备使用场景 / OxyZen Product Wearing Display - Oxygen Energy Device Usage Scene"
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
        <motion.div
          className="mx-auto flex w-full max-w-[70%] items-center justify-between gap-24 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 左侧：reward.png - 高度固定，宽度自适应 */}
          <div className="flex h-full flex-col items-center justify-end">
            <Image
              src={imageUrls.reward}
              alt="OxyZen 奖项标识 / OxyZen Award Badges"
              width={400}
              height={224}
              className="h-full w-[800px] scale-90 object-contain"
            />
          </div>

          {/* 右侧：获奖标识和文字 - 高度与左侧一致，内容分布两端 */}
          <div className="flex h-full w-[480px] flex-col items-start justify-between py-2">
            <Image
              src={imageUrls.awardLogo}
              alt="OxyZen 获奖标识 / OxyZen Award Logo"
              width={290}
              height={100}
              className="h-36 w-[200px] object-contain"
              role="presentation"
            />
            <p className="text-fluid-xl mt-3 text-left font-medium">{t('award_text')}</p>
          </div>
        </motion.div>
      </section>

      {/* Data Collection */}
      <section className="pt-[10.83vw] pb-[6.15vw] text-center text-[#333]">
        <motion.h2
          className="text-fluid-5xl mb-5 font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('data_collection_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('data_collection_desc_1')}
        </motion.p>
        <motion.p
          className="text-fluid-xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('data_collection_desc_2')}
        </motion.p>

        <ul className="mt-[5.125vw] flex justify-center gap-[3.33vw]">
          {[
            { icon: 'https://www.brainco.cn/news-images/eeg.png', label: 'eeg' },
            { icon: 'https://www.brainco.cn/news-images/Heart rate.png', label: 'heart_rate' },
            { icon: 'https://www.brainco.cn/news-images/Blood oxygen.png', label: 'blood_oxygen' },
          ].map((item, index) => (
            <motion.li
              key={item.label}
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Image
                src={item.icon}
                alt={`${t(item.label as any)} - OxyZen 数据采集功能图标 / ${t(item.label as any)} - OxyZen Data Collection Feature Icon`}
                width={60}
                height={60}
                className="mr-3 h-14 w-14"
              />
              <span className="text-fluid-3xl font-medium text-[#333]">{t(item.label as any)}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mx-auto mt-[5.7vw] w-[36.95vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Xk6yoAjyJNl4ND2V.webp"
            alt="OxyZen 数据采集设备展示图 - 多维度健康数据监测 / OxyZen Data Collection Device Display - Multi-dimensional Health Data Monitoring"
            width={844}
            height={600}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* Design Features */}
      <section className="bg-[#edf1f2] px-[5vw] py-[5vw]">
        <div className="mx-auto grid max-w-[70vw] grid-cols-5 grid-rows-5 gap-[1.5vw]">
          {/* 左上：Detachable Magnetic Design */}
          <motion.div
            className="col-span-3 row-span-3 flex flex-col items-start justify-start rounded-[2vw] bg-white p-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-fluid-4xl mb-4 font-semibold text-[#111827]">{t('design_magnetic_title')}</h3>
            <div className="text-fluid-xl mb-6 space-y-4 leading-relaxed text-[#333]">
              {t('design_magnetic_desc').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/LewVPJHtk60Dy2hS.webp"
              alt={`${t('design_magnetic_title')} - OxyZen 磁吸设计示意图 / ${t('design_magnetic_title')} - OxyZen Magnetic Design Illustration`}
              width={568}
              height={300}
              className="mt-auto h-auto w-full object-contain"
            />
          </motion.div>

          {/* 右上：Comfortable & Skin-friendly */}
          <motion.div
            className="col-span-2 row-span-3 flex flex-col items-start justify-start rounded-[2vw] bg-white p-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h3 className="text-fluid-4xl mb-4 font-semibold text-[#111827]">{t('design_comfortable_title')}</h3>
            <div className="text-fluid-xl mb-6 space-y-4 leading-relaxed text-[#333]">
              {t('design_comfortable_desc').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CrrdayolPeH3kgXx.webp"
              alt={`${t('design_comfortable_title')} - OxyZen 舒适设计示意图 / ${t('design_comfortable_title')} - OxyZen Comfortable Design Illustration`}
              width={275}
              height={200}
              className="mx-auto mt-auto h-auto w-[80%] object-contain"
            />
          </motion.div>

          {/* 左下：多彩头带图片 */}
          <motion.div
            className="col-span-3 row-span-2 flex items-center justify-center overflow-hidden rounded-[2vw] bg-white pb-[2vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/beazFEGimF59Rbvo.webp"
              alt="OxyZen 设计特性展示图 - 产品外观与功能展示 / OxyZen Design Features Display - Product Appearance and Functionality"
              width={736}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* 右下：Lightweight & Portable */}
          <motion.div
            className="col-span-2 row-span-2 flex flex-col items-start justify-start rounded-[2vw] bg-white p-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-fluid-4xl mb-4 font-semibold text-[#111827]">{t('design_portable_title')}</h3>
            <div className="text-fluid-xl mb-10 space-y-4 leading-relaxed text-[#333]">
              {t('design_portable_desc').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SEH2rPIKwdnQxgx1.webp"
              alt={`${t('design_portable_title')} - OxyZen 便携设计示意图 / ${t('design_portable_title')} - OxyZen Portable Design Illustration`}
              width={390}
              height={300}
              className="mt-auto h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* 3D Indicators */}
      <section className="flex items-center justify-center gap-[10vw] py-[6.125vw]">
        <div className="max-w-[600px] text-left">
          <motion.h2
            className="text-fluid-5xl relative mb-[3.125vw] pb-[3.125vw] font-medium after:absolute after:bottom-0 after:left-0 after:h-[0.26vw] after:w-[2.08vw] after:bg-[#333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('indicators_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-2xl mb-5 font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('indicators_desc_1')}
          </motion.p>
          <motion.p
            className="text-fluid-2xl font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            dangerouslySetInnerHTML={{ __html: t('indicators_desc_2').replace(/\n/g, '<br />') }}
          />

          <ul className="mt-[4.9vw] flex items-center gap-[2.6vw]">
            {[
              { icon: 'https://www.brainco.cn/news-images/meditation state.png', label: 'mindfulness_index' },
              { icon: 'https://www.brainco.cn/news-images/Heart rate.png', label: 'heart_rate' },
              { icon: 'https://www.brainco.cn/news-images/Blood oxygen.png', label: 'blood_oxygen' },
            ].map((item, index) => (
              <motion.li
                key={item.label}
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <Image
                  src={item.icon}
                  alt={`${t(item.label as any)} - OxyZen 3D指标功能图标 / ${t(item.label as any)} - OxyZen 3D Indicator Feature Icon`}
                  width={48}
                  height={48}
                  className="mr-2 h-14 w-14"
                />
                <span className="text-fluid-2xl">{t(item.label as any)}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="w-[20vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            src="https://www.brainco.cn/news-images/screen_home.png"
            alt="OxyZen 3D指标应用界面展示 - 健康数据可视化 / OxyZen 3D Indicators App Interface Display - Health Data Visualization"
            width={400}
            height={500}
            className="h-auto w-full"
          />
        </motion.div>
      </section>

      {/* 9D Parsing */}
      <section className="bg-[#F6F6F6] pt-[5.83vw] pb-[6.125vw] text-center">
        <motion.h2
          className="text-fluid-5xl mb-5 font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('parsing_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-2xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('parsing_desc_1')}
        </motion.p>
        <motion.p
          className="text-fluid-2xl leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('parsing_desc_2')}
        </motion.p>

        <div className="relative mx-auto mt-[10.58vw] h-[42.68vw] w-[58.43vw] rounded-full p-[1.09vw]">
          {/* <div className="h-full w-full rounded-full border border-[#d8d6d6]" /> */}

          {/* 左侧第一张手机截图 - 最低 */}
          <motion.div
            className="absolute top-0 left-1/2 z-10 -translate-x-[20vw] -translate-y-[2vw]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="https://www.brainco.cn/news-images/report1.png"
              alt="OxyZen 9D解析维度图 1 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 1 - Health Data Analysis Dimension"
              width={270}
              height={200}
              className="h-auto w-[14.06vw]"
              role="presentation"
            />
          </motion.div>
          {/* 中间第二张手机截图 - 最高 */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-[7vw] -translate-y-[6vw]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="https://www.brainco.cn/news-images/report2.png"
              alt="OxyZen 9D解析维度图 2 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 2 - Health Data Analysis Dimension"
              width={276}
              height={200}
              className="h-auto w-[14.37vw]"
              role="presentation"
            />
          </motion.div>
          {/* 右侧第三张手机截图 - 比第一张稍高 */}
          <motion.div
            className="absolute top-0 left-1/2 translate-x-[6vw] -translate-y-[3.5vw]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src="https://www.brainco.cn/news-images/report3.png"
              alt="OxyZen 9D解析维度图 3 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 3 - Health Data Analysis Dimension"
              width={276}
              height={200}
              className="h-auto w-[14.37vw]"
              role="presentation"
            />
          </motion.div>
          {/* 中心莲花图 */}
          <motion.div
            className="absolute top-[28%] left-1/2 z-20 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="https://www.brainco.cn/news-images/lotus.png"
              alt="OxyZen 9D解析中心图 - 多维度健康数据分析 / OxyZen 9D Parsing Center - Multi-dimensional Health Data Analysis"
              width={358}
              height={300}
              className="h-auto w-[32vw]"
            />
          </motion.div>

          {/* 9个维度标签 - 爱心弧度等距分布 */}
          <ul className="absolute top-0 left-0 h-full w-full">
            {[
              { label: 'dimension_1', style: 'top-[-4vw] left-[-4vw]' }, // 左上 - 略微向内
              { label: 'dimension_2', style: 'top-[8vw] left-[-10vw]' }, // 左中上 - 向外
              { label: 'dimension_3', style: 'top-[20vw] left-[-8vw]' }, // 左中 - 最外侧（爱心最宽处）
              { label: 'dimension_4', style: 'top-[30vw] left-[0vw]' }, // 左中下 - 向内收
              { label: 'dimension_5', style: 'bottom-[4vw] left-1/2 -translate-x-1/2' }, // 底部中间 - 爱心尖端
              { label: 'dimension_6', style: 'top-[30vw] right-[0vw]' }, // 右中下 - 向内收（对称）
              { label: 'dimension_7', style: 'top-[20vw] right-[-8vw]' }, // 右中 - 最外侧（对称）
              { label: 'dimension_8', style: 'top-[8vw] right-[-10vw]' }, // 右中上 - 向外（对称）
              { label: 'dimension_9', style: 'top-[-4vw] right-[-4vw]' }, // 右上 - 略微向内（对称）
            ].map((item, index) => (
              <motion.li
                key={item.label}
                className={`text-fluid-xl absolute flex h-[3vw] min-w-[8vw] items-center justify-center rounded-full bg-gradient-to-b from-[#edfdfd] to-[#82c8c4] px-2 px-4 ${item.style}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                {t(item.label as any)}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sleep Content */}
      <section className="relative">
        <Image
          src="https://www.brainco.cn/news-images/group_mindfulness.jpg"
          alt="OxyZen 睡眠内容背景图 - 优质睡眠内容展示 / OxyZen Sleep Content Background - Premium Sleep Content Display"
          width={1920}
          height={1080}
          className="h-auto w-full"
          role="presentation"
        />
        <div className="absolute top-0 left-0 h-full w-full pt-[5vw] text-center !text-[#333]">
          <motion.h2
            className="text-fluid-5xl mb-5 font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('content_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-2xl leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('content_desc_1')}
          </motion.p>
          <motion.p
            className="text-fluid-2xl leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('content_desc_2')}
          </motion.p>
          {/* <motion.div
            className="mx-auto mt-[1.82vw] w-[66.25vw]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/3cnnb6RhNtvQJW7d.webp"
              alt="OxyZen 睡眠内容界面展示 - 优质睡眠课程内容 / OxyZen Sleep Content Interface Display - Premium Sleep Course Content"
              width={1272}
              height={800}
              className="h-auto w-full"
            />
          </motion.div> */}
        </div>
      </section>

      {/* Social Media & Downloads */}
      <section className="flex justify-center gap-[0.41vw] bg-[#f8f8f8] pt-[0.83vw] pb-[5.83vw]">
        {/* Follow Us */}
        <div className="w-[14.84vw]">
          <h3 className="text-fluid-2xl mb-2 pt-8 font-normal">{t('follow_us')}</h3>
          <div className="mb-2 flex h-[9.73vw] items-center justify-center bg-white">
            <Image
              src={socialMediaData.wechat.qrCode}
              alt="OxyZen 微信公众号二维码 - 扫码关注获取更多信息 / OxyZen WeChat Official Account QR Code - Scan to Follow for More Information"
              width={82}
              height={82}
              className="mr-[1.56vw] h-auto w-[4.27vw]"
            />
            <span className="text-fluid-lg w-[5.72vw] text-center">{t('wechat_official')}</span>
          </div>
          <div className="flex h-[9.73vw] items-center justify-center bg-white">
            <Image
              src={socialMediaData.xiaohongshu.qrCode}
              alt="OxyZen 小红书账号二维码 - 扫码关注获取更多信息 / OxyZen Xiaohongshu Account QR Code - Scan to Follow for More Information"
              width={82}
              height={82}
              className="mr-[1.56vw] h-auto w-[4.27vw]"
            />
            <div className="flex w-[5.72vw] flex-col items-center">
              <span className="text-fluid-lg text-center">{t('xiaohongshu')}</span>
              <span className="text-fluid-lg text-center">{t('xiaohongshu_account')}</span>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="ml-[0.41vw] w-[13.54vw] pt-[3.85vw]">
          <div className="flex h-full items-center justify-center bg-white pt-2">
            <Image
              src={socialMediaData.mainImage}
              alt="OxyZen 产品主图 - 氧气能量补充设备 / OxyZen Product Main Image - Oxygen Energy Device"
              width={164}
              height={164}
              className="h-auto w-[8.54vw]"
            />
          </div>
        </div>

        {/* Downloads */}
        <div className="ml-[1.25vw] w-[28.33vw]">
          <div className="flex gap-[0.41vw]">
            <ul>
              <li className="text-fluid-2xl mb-2 pt-8">{t('download_app')}</li>
              <li className="mb-2 flex h-[5.1vw] w-[14.84vw] items-center bg-white pl-4">
                <Image
                  src={appDownloadData.ios.qrCode}
                  alt="OxyZen iOS 应用下载二维码 - 扫码下载 iOS 应用 / OxyZen iOS App Download QR Code - Scan to Download iOS App"
                  width={80}
                  height={80}
                  className="mr-[4.16vw] h-auto w-[4.16vw]"
                />
                <span className="text-fluid-lg">{t('ios')}</span>
              </li>
              <li className="flex h-[5.1vw] w-[14.84vw] items-center bg-white pl-4">
                <Image
                  src={appDownloadData.android.qrCode}
                  alt="OxyZen Android 应用下载二维码 - 扫码下载 Android 应用 / OxyZen Android App Download QR Code - Scan to Download Android App"
                  width={80}
                  height={80}
                  className="mr-[4.16vw] h-auto w-[4.16vw]"
                />
                <span className="text-fluid-lg">{t('android')}</span>
              </li>
            </ul>

            <div className="w-[13.02vw]">
              <h3 className="text-fluid-2xl mb-2 pt-8 font-normal">{t('cooperation')}</h3>
              <div className="flex h-[10.62vw] flex-col items-center justify-center bg-white">
                <Image
                  src={socialMediaData.cooperation.qrCode}
                  alt="OxyZen 微信客服二维码 - 扫码联系客服 / OxyZen WeChat Assistant QR Code - Scan to Contact Customer Service"
                  width={82}
                  height={82}
                  className="h-auto w-[4.27vw]"
                />
                <span className="text-fluid-lg mt-4">{t('wechat_assistant')}</span>
              </div>
            </div>
          </div>

          {/* Purchase Link */}
          <div className="mt-6">
            <h3 className="text-fluid-2xl mb-2 font-normal">{t('purchase_link')}</h3>
            <div className="text-fluid-base flex h-[5.46vw] items-center justify-center bg-white">
              {purchaseLink}
            </div>
          </div>
        </div>
      </section>

      {/* After Sales */}
      <AfterSales />
    </main>
  );
}

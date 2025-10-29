import { setRequestLocale } from 'next-intl/server';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import FocusZenContent from '@/components/product/focus-zen/FocusZenContent';
import FocusZenContentMobile from '@/components/product/focus-zen/FocusZenContentMobile';
import { generateSEOMetadata } from '@/lib/metadata';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  
  // 尝试从 CMS 获取 SEO 数据
  const seoMetadata = await generateSEOMetadata(
    { locale },
    '/health/focus-zen',
  );
  
  // 如果 CMS 中没有数据，使用硬编码的后备数据
  if (!seoMetadata.title || seoMetadata.title === 'BrainCo') {
    // 根据语言返回不同的元数据
    const metadata = {
      'zh-CN': {
        title: 'FocusZen正念舒压系统 - 强脑科技BrainCo',
        description: 'FocusZen正念舒压系统，高精度可穿戴脑电设备，自主研发AI算法，实时正念神经反馈，帮助您实现科学舒压和正念练习。',
      },
      'zh-TW': {
        title: 'FocusZen正念舒壓系統 - 強腦科技BrainCo',
        description: 'FocusZen正念舒壓系統，高精度可穿戴腦電設備，自主研發AI算法，實時正念神經反饋，幫助您實現科學舒壓和正念練習。',
      },
      'en-US': {
        title: 'FocusZen Mindfulness & Stress Relief System - BrainCo',
        description: 'FocusZen mindfulness & stress relief system with high-precision wearable EEG device, proprietary AI algorithms, real-time mindfulness neurofeedback for scientific stress relief and meditation practice.',
      },
    };

    const fallback = metadata[locale as keyof typeof metadata] || metadata['zh-CN'];
    return {
      ...seoMetadata,
      ...fallback,
    };
  }

  return seoMetadata;
}

export default async function FocusZenPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:block">
        <FocusZenContent />
      </div>

      {/* Mobile version */}
      <div className="block lg:hidden">
        <FocusZenContentMobile />
      </div>

      {/* Online Service - Desktop */}
      <div className="hidden lg:block">
        <OnlineService />
      </div>

      {/* Online Service - Mobile */}
      <div className="block lg:hidden">
        <OnlineServiceMobile />
      </div>
    </>
  );
}

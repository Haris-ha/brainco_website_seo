import { setRequestLocale } from 'next-intl/server';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import FocusXinContent from '@/components/product/focus-xin/FocusXinContent';
import FocusXinContentMobile from '@/components/product/focus-xin/FocusXinContentMobile';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  // 根据语言返回不同的元数据
  const metadata = {
    'zh-CN': {
      title: '专注欣 - 脑机接口注意力训练系统 - 强脑科技BrainCo',
      description: '专注欣是基于脑机接口神经反馈训练的儿童注意力问题干预方案，采用科学验证的神经反馈训练方法，帮助儿童提升注意力。',
    },
    'zh-TW': {
      title: '專注欣 - 腦機接口注意力訓練系統 - 強腦科技BrainCo',
      description: '專注欣是基於腦機接口神經反饋訓練的兒童注意力問題幹預方案，採用科學驗證的神經反饋訓練方法，幫助兒童提升注意力。',
    },
    'en-US': {
      title: 'FocusXin - BCI Attention Training System for Children - BrainCo',
      description: 'FocusXin is a brain-computer interface neurofeedback training intervention for children with attention problems, using scientifically validated neurofeedback training methods to help children improve attention.',
    },
  };

  return metadata[locale as keyof typeof metadata] || metadata['zh-CN'];
}

export default async function FocusXinPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:block">
        <FocusXinContent />
      </div>

      {/* Mobile version */}
      <div className="block lg:hidden">
        <FocusXinContentMobile />
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


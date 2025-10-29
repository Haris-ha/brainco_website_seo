import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import BrainAIContent from '@/components/product/brain-ai/BrainAIContent';
import BrainAIContentMobile from '@/components/product/brain-ai/BrainAIContentMobile';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'brain-ai', {
    title: 'BrainAI - 智能教育解决方案',
    description: 'BrainAI 智能教育解决方案，助力学习效率提升',
  });
}

export default function BrainAIPage() {
  return (
    <>
      <div className="hidden lg:block">
        <BrainAIContent />
      </div>
      <div className="block lg:hidden">
        <BrainAIContentMobile />
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

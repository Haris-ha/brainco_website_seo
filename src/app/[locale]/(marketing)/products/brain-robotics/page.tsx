import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';
import OnlineService from '@/components/common/OnlineService';
import OnlineServiceMobile from '@/components/common/OnlineServiceMobile';
import BrainRoboticsContent from '@/components/product/brain-robotics/BrainRoboticsContent';
import BrainRoboticsContentMobile from '@/components/product/brain-robotics/BrainRoboticsContentMobile';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  
  return createPageMetadata(params, 'brain-robotics', {
    title: 'Brain Robotics - 智能仿生手',
    description: 'Brain Robotics 智能仿生手，重塑生活可能',
  });
}

export default function BrainRoboticsPage() {
  return (
    <>
      <div className="hidden lg:block">
        <BrainRoboticsContent />
      </div>
      <div className="block lg:hidden">
        <BrainRoboticsContentMobile />
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

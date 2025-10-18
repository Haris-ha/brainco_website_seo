import type { Metadata } from 'next';
import TechnologyPageClient from '@/components/technology/TechnologyPageClient';

export const metadata: Metadata = {
  title: '脑机接口技术 - BrainCo 强脑科技',
  description: 'BrainCo强脑科技以技术为核心，以科研为导向，拥有领先的科学家团队。在脑机接口领域拥有核心发明专利200余项，在全球脑机接口企业中处于领先地位。',
  keywords: '脑机接口, BCI, 脑电信号, 神经反馈, 科研合作, 强脑科技',
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <TechnologyPageClient />
    </main>
  );
}


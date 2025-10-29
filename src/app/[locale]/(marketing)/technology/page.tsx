import type { Metadata } from 'next';
import TechnologyPageClient from '@/components/technology/TechnologyPageClient';
import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'technology', {
    title: '脑机接口技术 - BrainCo 强脑科技',
    description: 'BrainCo强脑科技以技术为核心，以科研为导向，拥有领先的科学家团队。在脑机接口领域拥有核心发明专利200余项，在全球脑机接口企业中处于领先地位。',
  });
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <TechnologyPageClient />
    </main>
  );
}

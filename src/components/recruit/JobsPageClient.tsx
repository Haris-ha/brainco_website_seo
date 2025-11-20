'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import JobsContent from '@/components/recruit/JobsContent';
import JobsContentMobile from '@/components/recruit/JobsContentMobile';

export default function JobsPageClient() {
  const isMobile = useIsMobile();

  return isMobile ? <JobsContentMobile /> : <JobsContent />;
}

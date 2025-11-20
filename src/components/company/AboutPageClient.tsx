'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import AboutContent from '@/components/company/AboutContent';
import AboutContentMobile from '@/components/company/AboutContentMobile';

export default function AboutPageClient() {
  const isMobile = useIsMobile();

  return isMobile ? <AboutContentMobile /> : <AboutContent />;
}

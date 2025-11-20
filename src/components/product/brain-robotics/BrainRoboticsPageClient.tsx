'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import BrainRoboticsContent from './BrainRoboticsContent';
import BrainRoboticsContentMobile from './BrainRoboticsContentMobile';

export default function BrainRoboticsPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <BrainRoboticsContentMobile /> : <BrainRoboticsContent />;
}

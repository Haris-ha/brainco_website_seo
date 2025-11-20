'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import OnlineService from './OnlineService';
import OnlineServiceMobile from './OnlineServiceMobile';

export default function OnlineServiceClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <OnlineServiceMobile /> : <OnlineService />;
}

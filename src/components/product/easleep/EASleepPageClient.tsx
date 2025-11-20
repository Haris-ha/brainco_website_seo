'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import EASleepContent from './EASleepContent';
import EASleepContentMobile from './EASleepContentMobile';

export default function EASleepPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <EASleepContentMobile /> : <EASleepContent />;
}

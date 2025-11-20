'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import MobiusContent from './MobiusContent';
import MobiusContentMobile from './MobiusContentMobile';

export default function MobiusPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <MobiusContentMobile /> : <MobiusContent />;
}

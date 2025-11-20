'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import FocusZenContent from './FocusZenContent';
import FocusZenContentMobile from './FocusZenContentMobile';

export default function FocusZenPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <FocusZenContentMobile /> : <FocusZenContent />;
}

'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import FocusXinContent from './FocusXinContent';
import FocusXinContentMobile from './FocusXinContentMobile';

export default function FocusXinPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <FocusXinContentMobile /> : <FocusXinContent />;
}

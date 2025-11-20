'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import Revo2Content from './Revo2Content';
import Revo2ContentMobile from './Revo2ContentMobile';

export default function Revo2PageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <Revo2ContentMobile /> : <Revo2Content />;
}

'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import Revo1Content from './Revo1Content';
import Revo1ContentMobile from './Revo1ContentMobile';

export default function Revo1PageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <Revo1ContentMobile /> : <Revo1Content />;
}

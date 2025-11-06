'use client';

import { useEffect, useState } from 'react';
import FocusZenContent from './FocusZenContent';
import FocusZenContentMobile from './FocusZenContentMobile';

export default function FocusZenPageClient() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMountedLocal = true;

    const checkMobile = () => {
      if (!isMountedLocal) {
        return;
      }

      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isSmallScreen = window.innerWidth < 1024; // lg breakpoint

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    setMounted(true);

    window.addEventListener('resize', checkMobile);
    return () => {
      isMountedLocal = false;
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? <FocusZenContentMobile /> : <FocusZenContent />;
}

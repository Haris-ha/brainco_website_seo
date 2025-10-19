'use client';

import { useEffect, useState } from 'react';
import AboutContent from '@/components/company/AboutContent';
import AboutContentMobile from '@/components/company/AboutContentMobile';

export default function AboutPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <AboutContentMobile /> : <AboutContent />;
}

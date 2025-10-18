'use client';

import { useEffect, useState } from 'react';
import RecruitContent from './RecruitContent';
import RecruitContentMobile from './RecruitContentMobile';

export default function RecruitPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <RecruitContentMobile /> : <RecruitContent />;
}

'use client';

import { useEffect, useState } from 'react';
import JobsContent from './JobsContent';
import JobsContentMobile from './JobsContentMobile';

export default function JobsPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <JobsContentMobile /> : <JobsContent />;
}

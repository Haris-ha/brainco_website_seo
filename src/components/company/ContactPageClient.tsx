'use client';

import { useEffect, useState } from 'react';
import ContactContent from '@/components/company/ContactContent';
import ContactContentMobile from '@/components/company/ContactContentMobile';

export default function ContactPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <ContactContentMobile /> : <ContactContent />;
}

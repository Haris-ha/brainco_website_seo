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

  useEffect(() => {
    // 检查URL中是否有#contact hash
    const hash = window.location.hash;
    if (!hash.includes('#contact')) {
      return;
    }

    let adjustTimer: NodeJS.Timeout | null = null;

    // 延迟确保页面完全加载
    const timer = setTimeout(() => {
      const element = document.querySelector('#contact') as HTMLElement | null;
      if (element) {
        // 先滚动到元素位置
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 然后再向上调整150px
        adjustTimer = setTimeout(() => {
          const currentScroll = window.scrollY || window.pageYOffset;
          window.scrollTo({
            top: currentScroll - 200,
            behavior: 'smooth',
          });
        }, 500);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (adjustTimer) {
        clearTimeout(adjustTimer);
      }
    };
  }, []);

  return isMobile ? <ContactContentMobile /> : <ContactContent />;
}

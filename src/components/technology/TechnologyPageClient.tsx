'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import TechnologyContent from '@/components/technology/TechnologyContent';
import TechnologyContentMobile from '@/components/technology/TechnologyContentMobile';

export default function TechnologyPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 避免水合不匹配，先不渲染任何内容
  if (!mounted) {
    return null;
  }

  return (
    <div>
      {isMobile ? <TechnologyContentMobile /> : <TechnologyContent />}
    </div>
  );
}

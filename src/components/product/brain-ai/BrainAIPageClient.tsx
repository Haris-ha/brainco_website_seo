'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import BrainAIContent from './BrainAIContent';
import BrainAIContentMobile from './BrainAIContentMobile';

export default function BrainAIPageClient() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 避免水合不匹配，先不渲染任何内容
  if (!mounted) {
    return null;
  }

  return isMobile ? <BrainAIContentMobile /> : <BrainAIContent />;
}

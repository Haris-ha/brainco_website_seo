'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { HomeContent } from '@/components/home/HomeContent';
import { HomeContentMobile } from '@/components/home/HomeContentMobile';
import { Footer } from '../layout/Footer';

type HomePageClientProps = {
  locale: string;
};

export function HomePageClient({ locale }: HomePageClientProps) {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f5f5]">
      {/* 内容区域 */}
      <div className="flex flex-1 flex-col">
        {mounted && (isMobile ? <HomeContentMobile /> : <HomeContent />)}
      </div>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}

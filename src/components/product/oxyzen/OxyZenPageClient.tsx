'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import OxyZenContent from './OxyZenContent';
import OxyZenContentMobile from './OxyZenContentMobile';

type OxyZenPageClientProps = {
  productInfo: any;
};

export default function OxyZenPageClient({ productInfo }: OxyZenPageClientProps) {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile
    ? (
        <OxyZenContentMobile productInfo={productInfo} />
      )
    : (
        <OxyZenContent productInfo={productInfo} />
      );
}

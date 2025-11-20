'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import EASleepSpecificationContent from '../product/easleep/EASleepSpecificationContent';
import EASleepSpecificationContentMobile from '../product/easleep/EASleepSpecificationContentMobile';

type EASleepSpecificationPageClientProps = {
  products: any[];
};

export default function EASleepSpecificationPageClient({ products }: EASleepSpecificationPageClientProps) {
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
        <EASleepSpecificationContentMobile products={products} />
      )
    : (
        <EASleepSpecificationContent products={products} />
      );
}

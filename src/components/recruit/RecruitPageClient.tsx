'use client';

import { useEffect, useState } from 'react';
import RecruitContent from '@/components/recruit/RecruitContent';
import RecruitContentMobile from '@/components/recruit/RecruitContentMobile';
import ShapeBlur from '@/components/ShapeBlur';

export default function RecruitPageClient() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    setMounted(true);
    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <RecruitContentMobile />;
  }

  return (
    <>
      {mounted && !isMobile && (
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <ShapeBlur
            variation={0}
            pixelRatioProp={
              typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
            }
            shapeSize={1.6}
            roundness={0.6}
            borderSize={0.02}
            circleSize={1.6}
            circleEdge={2}
          />
        </div>
      )}
      <RecruitContent />
    </>
  );
}

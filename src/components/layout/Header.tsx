'use client';

import { useState } from 'react';
import { Logo } from '../Logo';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

type HeaderProps = {
  locale: string;
};

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 桌面端导航 */}
      <DesktopNav locale={locale} />

      {/* 移动端导航 */}
      <MobileNav
        locale={locale}
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
    </>
  );
}


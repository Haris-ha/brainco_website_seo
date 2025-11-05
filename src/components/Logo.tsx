import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'mobile' | 'desktop' | 'auto';
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function Logo({
  variant = 'auto',
  width,
  height,
  priority = false,
  className = '',
}: LogoProps) {
  // 自动模式：响应式显示
  if (variant === 'auto') {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        {/* 桌面端 Logo */}
        <div className="hidden md:block">
          <Image
            src="/logo-desktop.webp"
            alt="BrainCo - 强脑科技，全球领先的脑机接口技术公司 / BrainCo - Leading Brain-Computer Interface Technology Company"
            width={width || 200}
            height={height || 60}
            priority={priority}
            className="h-auto w-auto"
          />
        </div>

        {/* 移动端 Logo */}
        <div className="block md:hidden">
          <Image
            src="/logo.webp"
            alt="BrainCo - 强脑科技，全球领先的脑机接口技术公司 / BrainCo - Leading Brain-Computer Interface Technology Company"
            width={width || 150}
            height={height || 45}
            priority={priority}
            className="h-auto w-auto"
          />
        </div>
      </Link>
    );
  }

  // 指定桌面端 Logo
  if (variant === 'desktop') {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        <Image
          src="/logo-desktop.webp"
          alt="BrainCo - 强脑科技，全球领先的脑机接口技术公司 / BrainCo - Leading Brain-Computer Interface Technology Company"
          width={width || 200}
          height={height || 60}
          priority={priority}
          className="h-auto w-auto"
        />
      </Link>
    );
  }

  // 指定移动端 Logo
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/logo.webp"
        alt="BrainCo - 强脑科技，全球领先的脑机接口技术公司 / BrainCo - Leading Brain-Computer Interface Technology Company"
        width={width || 150}
        height={height || 45}
        priority={priority}
        className="h-auto w-auto"
      />
    </Link>
  );
}

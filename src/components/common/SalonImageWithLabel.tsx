import Image from 'next/image';

type SalonImageWithLabelProps = {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  className?: string;
};

export function SalonImageWithLabel({
  src,
  alt,
  label,
  width = 640,
  height = 480,
  className = '',
}: SalonImageWithLabelProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
      />
      {/* 渐变模糊效果层 - 使用 mask 实现渐变模糊 */}
      <div className="absolute right-0 bottom-0 left-0 h-20 bg-white/10 [mask-image:linear-gradient(to_top,black_60%,transparent_100%)] backdrop-blur-sm" />
      {/* 文字标签层 */}
      <div className="absolute right-0 bottom-0 left-0 z-10 flex h-16 items-center justify-center">
        <span className="text-fluid-2xl block text-center font-semibold !text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

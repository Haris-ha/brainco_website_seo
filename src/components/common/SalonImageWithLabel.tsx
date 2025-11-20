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
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
      />
      <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2 bg-black/30 py-4">
        <span className="block text-center text-2xl font-medium !text-white drop-shadow-lg md:text-3xl">
          {label}
        </span>
      </div>
    </div>
  );
}

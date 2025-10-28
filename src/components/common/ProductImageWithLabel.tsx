import Image from 'next/image';

type ProductImageWithLabelProps = {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  className?: string;
  isMenu?: boolean;
};

export function ProductImageWithLabel({
  src,
  alt,
  label,
  width = 180,
  height = 180,
  className = '',
  isMenu = true,
}: ProductImageWithLabelProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="-mt-6 h-auto w-full object-contain object-top"
      />
      <div className={`absolute ${isMenu ? 'bottom-8' : 'bottom-2'} right-0 left-0`}>
        <span className="block text-center text-sm font-medium text-[#666] md:text-base">
          {label}
        </span>
      </div>
    </div>
  );
}

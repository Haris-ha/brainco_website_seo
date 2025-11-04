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
  width = 160,
  height = 160,
  className = '',
  isMenu = true,
}: ProductImageWithLabelProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="-mt-8 h-auto w-full object-contain object-top"
      />
      <div className={`absolute ${isMenu ? 'bottom-8' : 'bottom-2'} right-0 left-0`}>
        <span className="text-fluid-base block text-center font-medium text-[#555]">
          {label}
        </span>
      </div>
    </div>
  );
}

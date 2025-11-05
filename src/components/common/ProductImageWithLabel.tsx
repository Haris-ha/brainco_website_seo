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
  isMenu = true,
  width = isMenu ? 160 : 140,
  height = isMenu ? 160 : 140,
  className = '',
}: ProductImageWithLabelProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className} px-2`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`-mt-6 h-auto w-full object-cover object-top ${isMenu ? 'mt-2' : '-mt-6'}`}
      />
      <div className={`absolute ${isMenu ? 'bottom-4' : 'bottom-2 2xl:bottom-0'} right-0 left-0`}>
        <span className={`block text-center ${isMenu ? 'text-base font-normal' : 'text-base font-bold'} text-[#666]`}>
          {label}
        </span>
      </div>
    </div>
  );
}

type PlayIconProps = {
  size?: number | string;
  color?: string;
  className?: string;
};

export default function PlayIcon({ size = 20, color = 'currentColor', className = '' }: PlayIconProps) {
  const sizeNum = typeof size === 'string' ? Number.parseInt(size.replace(/\D/g, '')) : size;

  return (
    <svg
      width={sizeNum}
      height={sizeNum}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.5 7.00002C5.5 5.45825 7.16905 4.49656 8.50161 5.27256L19.3584 11.5451C20.6854 12.3177 20.6854 14.2273 19.3584 15.0001L8.50161 21.2726C7.16905 22.0486 5.5 21.0869 5.5 19.5451V7.00002Z"
        fill={color}
      />
    </svg>
  );
}

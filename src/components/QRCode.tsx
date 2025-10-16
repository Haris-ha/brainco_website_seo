import Image from 'next/image';

type QRCodeProps = {
  size?: number;
  title?: string;
  description?: string;
  className?: string;
};

export function QRCode({
  size = 200,
  title = '扫码关注',
  description = 'BrainCo 官方微信',
  className = '',
}: QRCodeProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image
        src="/icons/qrcode.png"
        alt="BrainCo 二维码"
        width={size}
        height={size}
        className="rounded-lg"
      />
      {title && (
        <p className="mt-2 text-sm font-medium text-gray-900">{title}</p>
      )}
      {description && (
        <p className="text-xs text-gray-500">{description}</p>
      )}
    </div>
  );
}



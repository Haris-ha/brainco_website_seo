'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PurchaseButtonProps {
  product: any;
  buttonText?: string;
}

export default function PurchaseButton({ product, buttonText }: PurchaseButtonProps) {
  const t = useTranslations('EASleep');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    
    try {
      // Add to cart functionality using localStorage
      const shoppingCartList = JSON.parse(localStorage.getItem('shoppingCartList') || '[]');
      
      // Check if product already exists in cart
      const existingItem = shoppingCartList.find((item: any) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        shoppingCartList.unshift({ ...product, quantity: 1 });
      }
      
      localStorage.setItem('shoppingCartList', JSON.stringify(shoppingCartList));
      
      // Show success message (you can replace this with a toast library)
      alert('加购成功!');
      
      // Redirect to shopping cart
      router.push('/shopping-cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('添加失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={isLoading}
      className="mt-[74px] h-[80px] w-[260px] cursor-pointer self-center rounded-[40px] border-0 bg-[#4f68d2] text-fluid-2xl font-medium text-white transition-all hover:scale-105 disabled:opacity-50"
    >
      {isLoading ? '处理中...' : (buttonText || t('spec_continue'))}
    </button>
  );
}

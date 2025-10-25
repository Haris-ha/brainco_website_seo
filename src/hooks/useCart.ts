'use client';

import type { CartItem } from '@/types/cart';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { useCartStore } from '@/store/cartStore';

export function useCart() {
  const t = useTranslations('Cart');
  const store = useCartStore();

  const addToCart = (product: Omit<CartItem, 'checked' | 'quantity'> & { quantity?: number }) => {
    store.addToCart(product);
    toast.success(t('added_to_cart'));
  };

  const removeFromCart = (id: number | string) => {
    store.removeFromCart(id);
    toast.success(t('removed_from_cart'));
  };

  const updateQuantity = (id: number | string, quantity: number) => {
    if (quantity < 1) {
      toast.error(t('min_quantity_error'));
      return;
    }
    store.updateQuantity(id, quantity);
  };

  return {
    items: store.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleItemCheck: store.toggleItemCheck,
    toggleAllCheck: store.toggleAllCheck,
    clearCart: store.clearCart,
    getCheckedItems: store.getCheckedItems,
    getTotalPrice: store.getTotalPrice,
    getCheckedTotalPrice: store.getCheckedTotalPrice,
    checkedItemsCount: store.items.filter(item => item.checked).length,
    totalItemsCount: store.items.length,
  };
}

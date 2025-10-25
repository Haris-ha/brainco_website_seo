import type { CartItem } from '@/types/cart';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartStore = {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'checked' | 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  toggleItemCheck: (id: number | string) => void;
  toggleAllCheck: (checked: boolean) => void;
  clearCart: () => void;
  getCheckedItems: () => CartItem[];
  getTotalPrice: () => number;
  getCheckedTotalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);

          if (existingItem) {
            // 如果商品已存在，增加数量
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                  : item,
              ),
            };
          } else {
            // 添加新商品
            return {
              items: [
                ...state.items,
                {
                  ...product,
                  quantity: product.quantity || 1,
                  checked: false,
                },
              ],
            };
          }
        });
      },

      removeFromCart: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item,
          ),
        }));
      },

      toggleItemCheck: (id) => {
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item,
          ),
        }));
      },

      toggleAllCheck: (checked) => {
        set(state => ({
          items: state.items.map(item => ({ ...item, checked })),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getCheckedItems: () => {
        return get().items.filter(item => item.checked);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getCheckedTotalPrice: () => {
        return get().items.filter(item => item.checked).reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'shoppingCartList', // 与旧系统保持一致的 localStorage key
      partialize: state => ({ items: state.items }), // 只持久化 items
    },
  ),
);

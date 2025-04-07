
// {
//     "accountId": "A001",
//     "productId": "P00002",
//     "quantity": 2,
//     "unitPrice": 150000.00

import { create } from "zustand";

//   }
interface CartItem {
    accountId: string;
    productId: string;
    quantity: number;
    unitPrice: number;
    total: number;
    productName: string;
    productImage: string;
    key: string;
}


interface CartState {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: string) => void;
    setCart: (cart: CartItem[]) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (item) =>
        set((state) => {
            const existingItemIndex = state.cart.findIndex(
                (cartItem) =>
                    cartItem.accountId === item.accountId && cartItem.productId === item.productId
            );

            if (existingItemIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + item.quantity, 
                    total: updatedCart[existingItemIndex].total + item.unitPrice * item.quantity,
                };

                return { cart: updatedCart };
            }

            return { cart: [...state.cart, { ...item }] };
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((cartItem) => cartItem.productId !== id),
        })),
    setCart: (cart) => set({ cart }),
}));
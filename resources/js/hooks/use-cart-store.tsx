// use-cart-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    img: string
}

interface CartStore {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    clearCart: () => void
    totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => set((state) => ({ items: [...state.items, item] })),
            removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
            clearCart: () => set({ items: [] }),
            totalPrice: () => get().items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
        }),
        {
            name: 'cart-storage', // localStorage 키
        }
    )
)

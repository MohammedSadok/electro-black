import { create } from "zustand";
import { Product } from "../types";

export interface CartState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  incrementQuantity: (product: Product) => void;
  decrementQuantity: (product: Product) => void;
  clearCart: () => void;
  total: number;
}

const useCartStore = create<CartState>((set) => ({
  products: [],
  total: 0,
  addProduct: (product: Product) =>
    set((state) => {
      const hasProduct = state.products.find((p) => p.id === product.id);
      state.total += +product.price;

      if (hasProduct) {
        return {
          products: state.products.map((p) => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity + 1 };
            }
            return p;
          }),
        };
      } else {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }),
  incrementQuantity: (product: Product) =>
    set((state) => {
      state.total += +product.price;
      return {
        products: state.products.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        }),
      };
    }),
  decrementQuantity: (product: Product) =>
    set((state) => {
      state.total -= +product.price;
      return {
        products: state.products.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        }),
      };
    }),
  reduceProduct: (product: Product) =>
    set((state) => {
      state.total -= +product.price * product.quantity;
      return {
        products: state.products.filter((p) => p.id !== product.id),
      };
    }),
  clearCart: () =>
    set((state) => {
      state.total = 0;
      return {
        products: [],
      };
    }),
}));
export default useCartStore;

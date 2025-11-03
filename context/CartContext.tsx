"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartCount: number;
  isAdded: boolean;
  addToCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    if (!isAdded) {
      setCartCount((prev) => prev + 1);
      setIsAdded(true);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, isAdded, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartCount: number;
  isAdded: boolean;
  addToCart: () => void;
  clearCart: () => void; // ✅ カートを空にする関数を追加
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  // ✅ 商品をカートに追加
  const addToCart = () => {
    if (!isAdded) {
      setCartCount((prev) => prev + 1);
      setIsAdded(true);
    }
  };

  // ✅ カートを空にする（注文完了後に呼ぶ）
  const clearCart = () => {
    setCartCount(0);
    setIsAdded(false);
  };

  return (
    <CartContext.Provider value={{ cartCount, isAdded, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

import Header from "@/components/Header/Header";
import { CartProvider } from "@/context/CartContext";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
  );
}

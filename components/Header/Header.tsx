"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  const cartImage = cartCount > 0 ? "/cart-1.png" : "/cart-0.png";

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        <button className={styles.menuButton}>☰</button>

        {/* ✅ ロゴ押すと productへ */}
        <div className={styles.logoWrapper}>
          <Link href="/m-423154667/main/product">
            <Image
              src="/logo.png"
              alt="4秒通販"
              width={120}
              height={50}
              className={styles.logo}
            />
          </Link>
        </div>

        <div className={styles.rightArea}>
          <span className={styles.account}>あああああさんのアカウント</span>
          <Link href="/m-423154667/main/cart" className={styles.cartIcon}>
            <Image src={cartImage} alt="cart" width={57} height={57} />
          </Link>
        </div>
      </div>

      {/* ✅ Welcome部分シンプルに */}
      <div className={styles.bottomHeader}>
        <span className={styles.welcomeText}>ようこそ、４秒通販へ</span>
      </div>
    </header>
  );
}

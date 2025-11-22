"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Image from "next/image";
import { useCart } from "@/context/CartContext"; // ✅ カートの状態を読み込み

export default function CartPage() {
  const router = useRouter();
  const { cartCount } = useCart(); // ✅ カート内の商品数を取得
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400 + Math.random() * 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/m-423154667/main/checkout");
    }, 600);
  };

  if (!visible) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      {/* ✅ カートが空の場合のメッセージ */}
      {cartCount === 0 ? (
        <div className={styles.emptyCart}>
          <p className={styles.emptyText}>カートに商品が入っていません。</p>
        </div>
      ) : (
        <div className={styles.cartContainer}>
          {/* ===== 左：ショッピングカート（PCのみ表示） ===== */}
          <div className={styles.cartCard}>
            <div className={styles.cardHeader}>
              <h2>ショッピングカート</h2>
              <span className={styles.priceLabel}>価格</span>
            </div>
            <hr />
            <div className={styles.productRow}>
              <Image
                src="/product_white.png"
                alt="お届け物"
                width={120}
                height={120}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <p className={styles.productTitle}>お届け物</p>
                <p className={styles.productDelivery}>4秒でお届け</p>
                <p className={styles.productCount}>×{cartCount}</p>
              </div>
              <div className={styles.productPrice}>
                <span className={styles.yen}>¥</span>
                <span className={styles.amount}>0</span>
              </div>
            </div>
          </div>

          {/* ===== 右：小計カード ===== */}
          <div className={styles.summaryCard}>
            <p className={styles.summaryTitle}>小計（{cartCount}個の商品）</p>
            <p className={styles.summaryPrice}>
              <span className={styles.yen}>¥</span>
              <span className={styles.amount}>0</span>
            </p>

            <button
              className={styles.checkoutButton}
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? <div className={styles.spinnerSmall}></div> : "レジに進む"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

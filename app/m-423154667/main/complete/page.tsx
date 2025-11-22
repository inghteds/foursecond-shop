"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Complete.module.css";
import ProductCard from "@/components/Header/ProductCard/ProductCard";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // ✅ カートのコンテキストをインポート

export default function CompletePage() {
  const { clearCart } = useCart(); // ✅ カートを空にする関数を取得
  const [status, setStatus] = useState("発送準備中");
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    // ✅ ページ表示時にカートをリセット
    clearCart();

    // 配送ステップのアニメーション
    timers.current.push(
      window.setTimeout(() => {
        setStatus("配送中");
        setStep(2);
      }, 200)
    );

    timers.current.push(
      window.setTimeout(() => {
        setStatus("配達中");
        setStep(3);
      }, 300)
    );

    timers.current.push(
      window.setTimeout(() => {
        setStatus("配達失敗");
        setStep(4);
      }, 4000)
    );

    return () => {
      timers.current.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, [clearCart]); // ← clearCart を依存配列に追加

  const products = Array.from({ length: 20 }, () => ({
    imageSrc: "/product_white.png",
    title: "お届け物",
    price: "¥0",
    delivery: "4秒でお届け",
    careful:
      "※交通事情や配達人の都合により、予定のお届け時間が前後する場合がございます。",
  }));

  return (
    <div className={styles.completePage}>
      <h1 className={styles.thanks}>ご購入ありがとうございます！</h1>
      <img src="/product_white.png" alt="商品画像" className={styles.productImage} />

      <p className={styles.deliveryText}>{status}</p>

      {/* ✅ ステータスバー */}
      <div className={styles.statusContainer}>
        {[1, 2, 3, 4].map((num) => (
          <div className={styles.statusItem} key={num}>
            <div
              className={`${styles.circle} ${step >= num ? styles.active : ""}`}
            />
            {num < 4 && (
              <div
                className={`${styles.line} ${step > num ? styles.active : ""}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.statusLabels}>
        <span>注文済み</span>
        <span>発送済み</span>
        <span>配達中</span>
        <span>配達済み</span>
      </div>

      {/* ✅ 携帯専用「買い物を続ける」ボタン */}
      <div className={styles.continueShoppingWrapper}>
        <Link href="/m-423154667/main/product" className={styles.continueButton}>
          買い物を続ける
        </Link>
      </div>

      {/* おすすめ */}
      <div className={styles.recommendSection}>
        <h2 className={styles.recommendTitle}>おすすめの商品</h2>
        <div className={styles.productGrid}>
          {products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Complete.module.css";
import ProductCard from "@/components/Header/ProductCard/ProductCard";

export default function CompletePage() {
  const [status, setStatus] = useState("発送準備中"); // ✅ 初期値で設定
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // ✅ 初期ステップセット
  const timers = useRef<number[]>([]);

  useEffect(() => {
    // 0.2秒後 → 配送中（step2）
    timers.current.push(
      window.setTimeout(() => {
        setStatus("配送中");
        setStep(2);
      }, 200)
    );

    // 0.3秒後 → 配達中（step3固定）
    timers.current.push(
      window.setTimeout(() => {
        setStatus("配達中");
        setStep(3);
      }, 300)
    );

    // 4秒後 → 配達完了（終了）
    timers.current.push(
      window.setTimeout(() => {
        setStatus("配達完了");
        setStep(4);
      }, 4000)
    );

    return () => {
      timers.current.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, []);

  const products = Array.from({ length: 20 }, () => ({
    imageSrc: "/product_white.jpeg",
    title: "お届け物",
    price: "¥0",
    delivery: "4秒でお届け",
    careful: "※交通事情や配達人の都合により、予定のお届け時間が前後する場合がございます。",
  }));

  return (
    <div className={styles.completePage}>
      <h1 className={styles.thanks}>ご購入ありがとうございます！</h1>
      <img src="/product_white.jpeg" alt="商品画像" className={styles.productImage} />

      {/* ✅ 配送状況テキスト */}
      <p className={styles.deliveryText}>{status}</p>

      {/* ✅ ステータスバー */}
      <div className={styles.statusContainer}>
        {[1, 2, 3, 4].map((num) => (
          <div className={styles.statusItem} key={num}>
            <div className={`${styles.circle} ${step >= num ? styles.active : ""}`} />
            {num < 4 && (
              <div className={`${styles.line} ${step > num ? styles.active : ""}`} />
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

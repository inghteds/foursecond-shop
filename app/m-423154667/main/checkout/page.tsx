"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Checkout.module.css";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOrder = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/m-423154667/main/complete");
    }, 1500); // 1.5秒後に遷移
  };

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.container}>
        {/* --- カード1：動画案内 --- */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            初めてご購入の方は、こちらの動画を必ずご覧ください。
          </h2>
          <hr />
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/x1jQxQZj4Qk?si=6g6dnEAzOdWND31o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* --- カード2：注文内容 --- */}
        <div className={styles.card}>
          <button
            className={styles.orderButton}
            onClick={handleOrder}
            disabled={loading}
          >
            {loading ? <div className={styles.spinner}></div> : "注文を確定する"}
          </button>

          <div className={styles.row}>
            <span>商品の小計：</span>
            <span className={styles.price}>¥0</span>
          </div>
          <div className={styles.row}>
            <span>手数料・配送料：</span>
            <span className={styles.price}>¥0</span>
          </div>
          <div className={styles.row}>
            <span>合計：</span>
            <span className={styles.price}>¥0</span>
          </div>

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>ご請求額：</span>
            <span className={styles.totalPrice}>¥0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

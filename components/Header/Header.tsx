"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext"; // ✅ ユーザーコンテキストをインポート

export default function Header() {
  const { cartCount } = useCart();
  const { username } = useUser(); // ✅ ユーザー名を取得
  const cartImage = cartCount > 0 ? "/cart-1.png" : "/cart-0.png";
  const [found, setFound] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFound(true), 10000); // 10秒後に発見
    return () => clearTimeout(timer);
  }, []);

  // ✅ 検索ボタン押下時：ページをリロード
  const handleSearchClick = () => {
    window.location.reload();
  };

  // ✅ ユーザー名が未設定なら「ゲストさん」と表示
  const displayName = username ? `${username}さん` : "ゲストさん";

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.topHeader}>
        {/* メニュー */}
        <button className={styles.menuButton}>☰</button>

        {/* ロゴ */}
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

        {/* お届け先 */}
        <div className={styles.deliveryWrapper}>
          <span className={styles.deliveryLabel}>お届け先　{displayName}</span>

          {!found ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <span className={styles.deliveryStatus}>居場所を探しています。</span>
            </div>
          ) : (
            <span className={styles.deliveryStatus}>発見しました。</span>
          )}
        </div>

        {/* 検索バー */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="検索"
          />
          <button
            className={styles.searchButton}
            type="button"
            onClick={handleSearchClick}
          >
            <Image
              src="/search-icon-white.png"
              alt="検索"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* 右エリア */}
        <div className={styles.rightArea}>
          <div className={styles.jpFlag}>
            <Image src="/jp-flag.png" alt="JP" width={28} height={18} />
            <span className={styles.jpText}>JP</span>
          </div>
          <span className={styles.account}>
            {displayName}の<br />アカウント
          </span>
          <Link href="/m-423154667/main/cart" className={styles.cartIcon}>
            <Image src={cartImage} alt="cart" width={57} height={57} />
          </Link>
        </div>
      </div>

      {/* 下段 */}
      <div className={styles.bottomHeader}>
        <span className={styles.welcomeText}>ようこそ、４秒通販へ</span>
      </div>
    </header>
  );
}

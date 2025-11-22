"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";

export default function Header() {
  const router = useRouter();
  const { cartCount } = useCart();
  const { username } = useUser();
  const cartImage = cartCount > 0 ? "/cart-1.png" : "/cart-0.png";

  // ✅ 初期値を null にして「探索中」状態を表現
  const [found, setFound] = useState<boolean | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState("ようこそ、４秒通販へ");

  useEffect(() => {
    // ✅ 10秒後に「発見できませんでした」に切り替え
    const timer = setTimeout(() => {
      setFound(false);
      setWelcomeMessage("あなたにお届けすることはできません。");
    }, 10000);

    // ✅ クリーンアップ
    return () => clearTimeout(timer);
  }, []);

  const handleSearchClick = () => {
    router.push("/m-423154667/main/product");
  };

  const displayName = username ? `${username}さん` : "ゲストさん";

  return (
    <header className={styles.headerWrapper}>
      {/* ======== 携帯用：検索バー（最上段） ======== */}
      <div className={styles.mobileSearchWrapper}>
        <input
          type="text"
          className={styles.mobileSearchInput}
          placeholder="商品を検索"
        />
        <button
          className={styles.mobileSearchButton}
          type="button"
          onClick={handleSearchClick}
        >
          <Image src="/search-icon-white.png" alt="検索" width={20} height={20} />
        </button>
      </div>

      {/* ======== PC用トップヘッダー ======== */}
      <div className={styles.topHeader}>
        <button className={styles.menuButton}>☰</button>

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

        <div className={styles.deliveryWrapper}>
          <span className={styles.deliveryLabel}>お届け先　{displayName}</span>

          {found === null ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <span className={styles.deliveryStatus}>居場所を探しています。</span>
            </div>
          ) : found ? (
            <span className={styles.deliveryStatus}>発見しました。</span>
          ) : (
            <span className={styles.deliveryStatus}>発見できませんでした。</span>
          )}
        </div>

        <div className={styles.searchWrapper}>
          <input type="text" className={styles.searchInput} placeholder="検索" />
          <button
            className={styles.searchButton}
            type="button"
            onClick={handleSearchClick}
          >
            <Image src="/search-icon-white.png" alt="検索" width={20} height={20} />
          </button>
        </div>

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

      {/* ======== 携帯用：お届け先・カート・ようこそ ======== */}
      <div className={styles.mobileInfoArea}>
        <div className={styles.mobileRow}>
          <div className={styles.mobileDelivery}>
            <span className={styles.deliveryLabel}>お届け先　{displayName}</span>
            {found === null ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <span className={styles.deliveryStatus}>居場所を探しています。</span>
              </div>
            ) : found ? (
              <span className={styles.deliveryStatus}>発見しました。</span>
            ) : (
              <span className={styles.deliveryStatus}>発見できませんでした。</span>
            )}
          </div>

          <Link href="/m-423154667/main/cart" className={styles.cartIconMobile}>
            <Image src={cartImage} alt="cart" width={40} height={40} />
          </Link>
        </div>

        <div className={styles.bottomHeaderMobile}>
          <span className={styles.welcomeText}>{welcomeMessage}</span>
        </div>
      </div>

      {/* ======== PC用下部 ======== */}
      <div className={styles.bottomHeader}>
        <span className={styles.welcomeText}>{welcomeMessage}</span>
      </div>
    </header>
  );
}

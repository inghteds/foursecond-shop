"use client";

import Image from "next/image";
import styles from "./ProductCard.module.css";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

type ProductCardProps = {
  imageSrc: string;
  title: string;
  price: string;
  delivery: string;
  careful: string ;
};

export default function ProductCard({ imageSrc, title, delivery, careful }: ProductCardProps) {
  const { isAdded, addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart();
      setLoading(false);
    }, 500); // 0.5秒ぐるぐる
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.price}>
          <span className={styles.yen}>¥</span>
          <span className={styles.amount}>0</span>
        </div>

        <p className={styles.delivery}>{delivery}</p>
        <p className={styles.careful}>{careful}</p>

        {!isAdded && (
          <button
            className={styles.cartButton}
            onClick={handleAddToCart}
            disabled={loading}
          >
            {loading ? <div className={styles.spinner}></div> : "カートに入れる"}
          </button>
        )}
      </div>
    </div>
  );
}

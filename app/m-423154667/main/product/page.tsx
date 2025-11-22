import ProductCard from "@/components/Header/ProductCard/ProductCard";
import styles from "./ProductsPage.module.css"; // ← 新しいCSSモジュールを使用

export default function ProductsPage() {
  const products = Array.from({ length: 100 }, () => ({
    imageSrc: "/product_white.png",
    title: "[４秒通販限定]お楽しみボックス",
    price: "¥0",
    delivery: "無料配送・4秒でお届け",
    careful:
      "※交通事情や配達人の都合により、予定のお届け時間が前後する場合がございます。",
  }));

  return (
    <main className={styles.container}>
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </main>
  );
}

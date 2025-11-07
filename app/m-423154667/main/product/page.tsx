import ProductCard from "@/components/Header/ProductCard/ProductCard";

export default function ProductsPage() {
  const products = Array.from({ length: 100 }, () => ({
    imageSrc: "/product_white.png",
    title: "[４秒通販限定]お楽しみボックス",
    price: "¥0",
    delivery: "無料配送・4秒でお届け",
    careful: "※交通事情や配達人の都合により、予定のお届け時間が前後する場合がございます。",
  }));

  return (
    <main style={styles.container }>
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </main>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // ← 横5列に変更
    gap: "8px", // ← 空白をちょっとだけに
    padding: "16px",
    maxWidth: "1400px", // ← 中央に収める最大幅
    margin: "0 auto", // ← 真ん中に寄せる
  },
};

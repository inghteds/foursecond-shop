"use client";

import { useRouter } from "next/navigation";
import styles from "./Error.module.css";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className={styles.errorPage}>
      <h2 className={styles.title}>エラーが発生しました。</h2>
      <button
        className={styles.reloadButton}
        onClick={() => router.push("/main/product")}
      >
        再読み込み
      </button>
    </div>
  );
}

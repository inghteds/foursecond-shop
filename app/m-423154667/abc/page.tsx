"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: "#fff",
        color: "#202124",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans JP", Arial, sans-serif',
        padding: "40px 48px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        {/* === 上段：アイコン＋サイト情報 === */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          {/* 丸いアイコン（左端基準） */}
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/icon.png" // ← public/icon.png に保存した画像
              alt="４秒通販 アイコン"
              width={28}
              height={28}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* サイト名とURL＋チョボ */}
          <div style={{ flexGrow: 1 }}>
            <div style={{ fontSize: "14px", color: "#202124" }}>４秒通販</div>
            <div
              style={{
                fontSize: "13px",
                color: "#4d5156",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>https://4secondshop.vercel.app/</span>
              {/* 縦に並んだ3つの点（少しだけ大きめ） */}
              <span
                style={{
                  fontSize: "22px",   // ← 前より少し大きく
                  lineHeight: "0",
                  color: "#5f6368",
                  marginTop: "-2px",
                }}
              >
                ⋮
              </span>
            </div>
          </div>
        </div>

        {/* === 下段：タイトルと説明 === */}
        {/* marginLeft をやめて、アイコンと同じ左端にそろえる */}
        <div>
          {/* サイト名（大きく） */}
          <a
            href="https://4secondshop.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              fontSize: "20px",
              color: "#1a0dab",
              textDecoration: "none",
              lineHeight: 1.4,
              marginBottom: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            ４秒通販
          </a>

          {/* サイト説明 */}
          <div
            style={{
              fontSize: "14px",
              color: "#4d5156",
              lineHeight: 1.6,
            }}
          >
            ４秒通販です。４秒でお届けいたします。
          </div>
        </div>
      </div>
    </main>
  );
}

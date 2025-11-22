import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ フォントをここで読み込み
import { Noto_Sans_JP } from "next/font/google";
const notoSansJp = Noto_Sans_JP({
  weight: ["500"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ UserContext をインポート
import { UserProvider } from "@/context/UserContext";

// ✅ Google Search Console 用の meta タグを「other」キー内に追加
export const metadata: Metadata = {
  title: "4秒通販",
  description: "4秒通販です。４秒で商品をお届けいたします。",
  icons: {
    icon: "/logo2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-site-verification": "JuIbKa05TqSx1A1UZniPMTViLnpIB9NBg9_cGu1TvF8",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJp.className} antialiased`}
      >
        {/* ✅ UserProviderで全体をラップ */}
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

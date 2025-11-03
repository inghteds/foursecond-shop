import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ フォントをここで読み込み
import { Noto_Sans_JP } from "next/font/google";
const notoSansJp = Noto_Sans_JP({
  weight: ["500"], // 普通 / 中 / 太字
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

export const metadata: Metadata = {
  title: "4秒通販",
  description: "4秒でお届けいたします。",
  icons: {
    icon: "/logo2.png", // public/logo2.png
  },
  robots: {
    index: true, // ← 検索結果に出してOK
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJp.className} antialiased`}
      >
        {children}å
      </body>
    </html>
  );
}

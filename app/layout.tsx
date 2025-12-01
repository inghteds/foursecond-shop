import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { UserProvider } from "@/context/UserContext";

// ✅ 日本語フォント
const notoSansJp = Noto_Sans_JP({
  weight: ["500"],
  subsets: ["latin"],
});

// ✅ 英語フォント
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ メタデータ設定
export const metadata: Metadata = {
  title: "4秒通販",
  description: "4秒通販です。４秒で商品をお届けいたします。",
  applicationName: "4秒通販",
  metadataBase: new URL("https://4secondshop.vercel.app"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
    ],
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "4秒通販",
    description: "4秒で商品をお届けいたします。",
    url: "https://4secondshop.vercel.app",
    siteName: "4秒通販",
    images: ["/favicon.ico"],
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
  // ✅ 構造化データ
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "4秒通販",
    alternateName: ["4SecondShop", "4びょう通販"],
    url: "https://4secondshop.vercel.app/",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "4秒通販",
    url: "https://4secondshop.vercel.app/",
    logo: "https://4secondshop.vercel.app/favicon.ico",
  };

  return (
    <html lang="ja">
      <head>
        {/* ✅ サイト名とアイコンを明示 */}
        <meta name="application-name" content="4秒通販" />
        <meta name="apple-mobile-web-app-title" content="4秒通販" />
        <meta property="og:site_name" content="4秒通販" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJp.className} antialiased`}
      >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

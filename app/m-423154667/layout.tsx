export const metadata = {
  robots: {
    index: false, // 検索結果に出さない
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
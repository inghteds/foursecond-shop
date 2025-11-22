import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white font-[Noto_Sans_JP] text-center text-black">
      {/* ロゴ画像（中央に大きく表示） */}
      <Image
        src="/logo.png"
        alt="4秒通販ロゴ"
        width={300}
        height={300}
        className="mb-8"
      />

      {/* 新規登録ページへのボタン */}
      <Link
        href="/m-423154667/auth/signup"
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-sans font-medium rounded-full px-8 py-3 transition"
      >
        新規登録ページへ
      </Link>
    </div>
  );
}

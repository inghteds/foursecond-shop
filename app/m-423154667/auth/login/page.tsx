'use client';

// app/login/page.tsx
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/m-423154667/main/product");
    }, 1000);
  };

  return (
    <div className="page">
      <div className="logoWrapper">
        <Image src="/logo.png" alt="Logo" width={200} height={200} className="logo" />
      </div>

      <div className="card">
        <h2 className="title">ログイン</h2>

        <div className="field">
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" placeholder="example@mail.com" />
        </div>

        <div className="field">
          <label htmlFor="username">ユーザーネーム</label>
          <input type="text" id="username" placeholder="ユーザーネームを入力" />
        </div>

        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <div className="spinner" /> : "ログイン"}
        </button>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background-color: #fff;
          padding-top: 60px;
        }

        .logoWrapper {
          margin-bottom: 30px;
        }

        .card {
          width: 300px;
          border: 1px solid #000;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-sizing: border-box;
        }

        .title {
          font-size: 20px;
          text-align: center;
          margin-bottom: 8px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 14px;
        }

        input {
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }

        .loginButton {
          margin-top: 12px;
          background-color: #ffd814;
          border: none;
          border-radius: 20px;
          padding: 10px 0;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loginButton:hover {
          background-color: #fcd200;
        }

        .loginButton:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(0, 0, 0, 0.2);
          border-top: 3px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/context/UserContext";

export default function SignupPage() {
  const router = useRouter();
  const { setUsername } = useUser();
  const [loading, setLoading] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!usernameInput.trim()) {
      setError("ユーザーネームを入力してください。");
      return;
    }
    setError("");
    setLoading(true);
    setUsername(usernameInput);
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
        <h2 className="title">新規登録</h2>

        <div className="field">
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" placeholder="example@mail.com" />
        </div>

        <div className="field">
          <label htmlFor="username">ユーザーネーム</label>
          <input
            type="text"
            id="username"
            placeholder="ユーザーネームを入力"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
        </div>

        <button
          className="registerButton"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? <div className="spinner" /> : "新規登録"}
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
          font-family: "Noto Sans JP", sans-serif;
          color: #000;
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
          color: #000;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 14px;
          color: #000;
        }

        input {
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
          color: #000;
        }

        input::placeholder {
          color: #aaa;
        }

        .error {
          color: red;
          font-size: 13px;
          margin-top: 4px;
        }

        .registerButton {
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
          color: #000; /* ボタン文字：黒 */
        }

        .registerButton:hover {
          background-color: #fcd200;
        }

        .registerButton:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        /* スピナー */
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

        /* ======================
           携帯版デザイン
        ====================== */
        @media (max-width: 768px) {
          .card {
            width: 90%;
            padding: 20px;
            border-radius: 10px;
          }

          .title,
          label,
          .registerButton {
            color: #000; /* 文字すべて黒 */
          }

          input {
            color: #666; /* 入力文字グレー */
          }

          input::placeholder {
            color: #666; /* プレースホルダーもグレー */
          }
        }
      `}</style>
    </div>
  );
}

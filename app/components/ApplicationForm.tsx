/**
 * AIセミナー申込みフォームコンポーネント
 * このコンポーネントはブラウザ上で動作します（クライアントコンポーネント）
 *
 * 処理の流れ：
 * 1. ユーザーが氏名・メールアドレスを入力
 * 2. フォーム送信時にローカルストレージに一時保存
 * 3. 参加人数に応じて適切な価格の決済ページへリダイレクト
 *    - 最初の10名: ¥4,980（早割）
 *    - 11名以降: ¥6,980（通常価格）
 * 4. 決済完了後、successページでローカルストレージから取得しGASへ送信
 *    ※決済完了した人のデータのみがGASに保存される
 */

'use client'; // このファイルはブラウザ上で実行されることを示す

import { useState, FormEvent, useEffect } from 'react';
import { Sparkles, AlertCircle, Loader2 } from 'lucide-react';

// StripeのPrice ID（環境変数から取得）
// 早割価格（最初の10名）: ¥4,980
const STRIPE_PRICE_ID_EARLY = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY || '';
// 通常価格（11名以降）: ¥6,980
const STRIPE_PRICE_ID_REGULAR = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR || '';

// セミナーの設定
const SEMINAR_CAPACITY = Number(process.env.NEXT_PUBLIC_SEMINAR_CAPACITY) || 30; // 定員30名
const EARLY_BIRD_LIMIT = Number(process.env.NEXT_PUBLIC_EARLY_BIRD_LIMIT) || 10; // 早割は10名まで

// Google Apps ScriptのURL（参加人数取得用）
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL || '';

export default function ApplicationForm() {
  // フォームの送信状態を管理（送信中かどうか）
  const [isSubmitting, setIsSubmitting] = useState(false);
  // エラーメッセージを管理
  const [error, setError] = useState<string | null>(null);
  // 現在の参加人数を管理
  const [currentParticipants, setCurrentParticipants] = useState(0);
  // ローディング状態
  const [isLoading, setIsLoading] = useState(true);

  /**
   * コンポーネント読み込み時に現在の参加人数を取得
   * GASから実際の参加人数を取得
   */
  useEffect(() => {
    const fetchParticipantCount = async () => {
      try {
        if (GAS_URL) {
          // GASから参加人数を取得
          const response = await fetch(GAS_URL);
          const data = await response.json();
          
          if (data.count !== undefined) {
            setCurrentParticipants(data.count);
            console.log('現在の参加人数:', data.count);
          } else {
            // エラー時は0人として扱う
            setCurrentParticipants(0);
            console.warn('参加人数の取得に失敗しました');
          }
        } else {
          // GAS URLが未設定の場合は0人からスタート
          setCurrentParticipants(0);
          console.log('GAS URL未設定。参加人数: 0');
        }
      } catch (error) {
        // エラー時は0人として扱う
        console.error('参加人数取得エラー:', error);
        setCurrentParticipants(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipantCount();
  }, []);

  /**
   * 現在の価格を計算
   * 参加人数に応じて早割か通常価格かを判定
   */
  const getCurrentPrice = () => {
    return currentParticipants < EARLY_BIRD_LIMIT ? 4980 : 6980;
  };

  /**
   * 使用するPrice IDを決定
   * 参加人数に応じて早割Price IDか通常価格Price IDを返す
   */
  const getPriceId = () => {
    return currentParticipants < EARLY_BIRD_LIMIT
      ? STRIPE_PRICE_ID_EARLY
      : STRIPE_PRICE_ID_REGULAR;
  };

  /**
   * 満員かどうかを判定
   */
  const isFull = () => {
    return currentParticipants >= SEMINAR_CAPACITY;
  };

  /**
   * フォーム送信時の処理
   * 決済前にローカルストレージに保存し、決済完了後にGASへ送信する
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロードを防ぐ

    // 満員チェック
    if (isFull()) {
      setError('申し訳ございません。定員に達したため受付を終了しました。');
      return;
    }

    setIsSubmitting(true); // 送信中状態にする
    setError(null); // エラーをリセット

    // フォームからデータを取得
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      timestamp: new Date().toISOString(), // 申込日時
      price: getCurrentPrice(), // 適用される価格
    };

    try {
      // Price IDの確認
      const priceId = getPriceId();
      if (!priceId) {
        setError('決済設定に問題があります。管理者にお問い合わせください。');
        setIsSubmitting(false);
        return;
      }

      console.log('使用するPrice ID:', priceId);
      console.log('現在の参加人数:', currentParticipants);
      console.log('適用価格:', getCurrentPrice());

      // 決済完了後にGASへ送信するため、ローカルストレージに一時保存
      if (typeof window !== 'undefined') {
        localStorage.setItem('seminar_registration', JSON.stringify(data));
        console.log('フォームデータをローカルストレージに保存:', data);
      }

      // Checkout Sessionを作成
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          priceId: priceId,
        }),
      });

      if (!response.ok) {
        throw new Error('Checkout Sessionの作成に失敗しました');
      }

      const { url } = await response.json();

      if (!url) {
        throw new Error('決済URLが取得できませんでした');
      }

      // Stripe Checkoutページにリダイレクト
      window.location.href = url;

    } catch (err) {
      console.error('送信エラー:', err);
      setError('送信中にエラーが発生しました。もう一度お試しください。');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* エラーメッセージの表示 */}
      {error && (
        <div className="rounded-md bg-red-50 p-4 flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* 氏名 */}
      <div>
        <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
          お名前 <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          className="block w-full rounded-lg border border-gray-300 px-4 py-3 sm:py-3.5 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors min-h-[44px]"
          placeholder="山田 太郎"
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-900 mb-2">
          メールアドレス <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className="block w-full rounded-lg border border-gray-300 px-4 py-3 sm:py-3.5 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors min-h-[44px]"
          placeholder="example@email.com"
        />
      </div>

      {/* 同意チェックボックス */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          disabled={isSubmitting}
          className="h-5 w-5 sm:h-4 sm:w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5 disabled:cursor-not-allowed flex-shrink-0"
        />
        <label htmlFor="terms" className="text-sm sm:text-base text-gray-700 leading-relaxed">
          <a href="/privacy" target="_blank" className="text-blue-600 hover:text-blue-500 underline font-medium">
            プライバシーポリシー
          </a>
          および
          <a href="/legal" target="_blank" className="text-blue-600 hover:text-blue-500 underline font-medium">
            特定商取引法に基づく表記
          </a>
          に同意します <span className="text-red-600">*</span>
        </label>
      </div>

       {/* 価格・残席情報の表示 */}
       {!isLoading && (
         <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
           <div className="text-center">
             {currentParticipants < EARLY_BIRD_LIMIT ? (
               <>
                 <div className="flex items-center justify-center gap-2 mb-1">
                   <Sparkles className="w-4 h-4 text-blue-600" />
                   <p className="text-sm font-medium text-blue-900">
                     早割価格適用中（残り{EARLY_BIRD_LIMIT - currentParticipants}名）
                   </p>
                 </div>
                 <p className="text-3xl font-bold text-blue-600">
                   ¥{getCurrentPrice().toLocaleString()}
                 </p>
                <p className="text-xs text-gray-600 mt-1">
                  {EARLY_BIRD_LIMIT}名到達後は ¥6,980 になります
                </p>
               </>
             ) : (
               <>
                 <p className="text-sm font-medium text-gray-700 mb-1">
                   通常価格
                 </p>
                 <p className="text-3xl font-bold text-gray-900">
                   ¥{getCurrentPrice().toLocaleString()}
                 </p>
               </>
             )}
             <p className="text-sm text-gray-600 mt-2">
               残席: {SEMINAR_CAPACITY - currentParticipants}名 / 定員{SEMINAR_CAPACITY}名
             </p>
           </div>
         </div>
       )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={isSubmitting || isFull() || isLoading}
        className="w-full rounded-lg bg-blue-600 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[56px]"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm sm:text-base">読み込み中</span>
          </span>
        ) : isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm sm:text-base">処理中</span>
          </span>
        ) : isFull() ? (
          <span className="text-sm sm:text-base">満員・受付終了</span>
        ) : (
          <span className="text-sm sm:text-base">{`¥${getCurrentPrice().toLocaleString()}で申し込む（決済へ進む）`}</span>
        )}
      </button>

      <p className="text-center text-xs sm:text-sm text-gray-500 px-4">
        ※お申し込み後、Stripe決済ページに移動します
      </p>
    </form>
  );
}


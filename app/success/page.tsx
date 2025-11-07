/**
 * 決済完了ページ
 * ペライチ風のフレンドリーなデザイン（絵文字なし・アイコン使用）
 */

import Link from 'next/link';
import { CheckCircle, Calendar, Monitor, Link as LinkIcon, FileText, MessageCircle, Video, ArrowLeft, Bot } from 'lucide-react';

export const metadata = {
  title: 'お申し込みありがとうございます | ホームページ作成セミナー',
  description: '決済が完了しました',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* 成功アニメーション */}
        <div className="text-center mb-8">
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-bounce">
            <CheckCircle className="w-16 h-16 text-white" strokeWidth={3} />
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4">
            お申し込み完了
          </h1>
          <p className="text-xl text-gray-600 font-bold mb-2">
            ありがとうございます
          </p>
          <p className="text-gray-700">
            決済が正常に完了しました。<br />
            ご登録のメールアドレスに確認メールをお送りしました。
          </p>
        </div>

        {/* 詳細カード */}
        <div className="rounded-3xl bg-white shadow-2xl p-8 mb-8 border-4 border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            次のステップ
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full flex items-center justify-center text-lg font-black shadow-lg">
                1
              </span>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 mb-1">確認メールをチェック</p>
                <p className="text-sm text-gray-600">
                  届いていない場合は迷惑メールフォルダをご確認ください
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-full flex items-center justify-center text-lg font-black shadow-lg">
                2
              </span>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 mb-1">Zoomリンクをお送りします</p>
                <p className="text-sm text-gray-600">
                  セミナー前日にメールでお送りします
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-full flex items-center justify-center text-lg font-black shadow-lg">
                3
              </span>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 mb-1">当日をお楽しみに</p>
                <p className="text-sm text-gray-600">
                  準備物：ノートPC、インターネット環境
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* セミナー情報 */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 mb-8 shadow-xl">
          <div className="rounded-[22px] bg-white p-8">
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900 mb-4">
                ホームページ作成セミナー
              </p>
              <p className="text-base text-gray-600 mb-4">
                ChatGPT × Readdy で<br />
                ホームページ・LP作成をたった2時間でマスター
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center justify-center gap-2 font-bold">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  2025年12月4日（水）21:00～22:30
                </p>
                <p className="flex items-center justify-center gap-2 font-bold">
                  <Monitor className="w-5 h-5 text-green-600" />
                  オンライン開催（Zoom）
                </p>
                <p className="flex items-center justify-center gap-2 font-bold">
                  <LinkIcon className="w-5 h-5 text-purple-600" />
                  Zoomリンクはセミナー前日にメールでお送りします
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 特典カード */}
        <div className="rounded-3xl bg-gradient-to-br from-yellow-100 to-orange-100 p-8 mb-8 border-4 border-yellow-200 shadow-lg">
          <p className="text-xl font-black text-gray-900 mb-2 text-center flex items-center justify-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" />
            参加者限定特典
          </p>
          <p className="text-sm text-gray-600 text-center mb-6">
            総額¥33,000相当
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div>
              <Bot className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">カスタムGPTs×2</p>
              <p className="text-xs text-gray-600 mt-1">HP制作特化GPTs</p>
              <p className="text-xs text-pink-600 font-bold mt-2">¥15,000相当</p>
            </div>
            <div>
              <FileText className="w-10 h-10 text-yellow-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">テンプレート集</p>
              <p className="text-xs text-gray-600 mt-1">すぐに使えるデザイン</p>
              <p className="text-xs text-pink-600 font-bold mt-2">¥5,000相当</p>
            </div>
            <div>
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">質問し放題</p>
              <p className="text-xs text-gray-600 mt-1">セミナー後2週間</p>
              <p className="text-xs text-pink-600 font-bold mt-2">¥10,000相当</p>
            </div>
            <div>
              <Video className="w-10 h-10 text-pink-600 mx-auto mb-2" />
              <p className="font-bold text-gray-900 text-sm">録画視聴OK</p>
              <p className="text-xs text-gray-600 mt-1">復習に最適</p>
              <p className="text-xs text-pink-600 font-bold mt-2">¥3,000相当</p>
            </div>
          </div>
        </div>

        {/* ボタン */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-4 text-white font-black hover:from-blue-600 hover:to-purple-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            トップページに戻る
          </Link>

          <p className="text-sm text-gray-600">
            ご不明な点がございましたら、
            <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-700 font-bold">
              こちら
            </a>
            までお問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
}

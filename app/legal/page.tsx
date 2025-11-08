/**
 * 特定商取引法に基づく表記
 * ※このページは法律で義務付けられています。必ず正確な情報を記載してください
 */

import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export const metadata = {
  title: '特定商取引法に基づく表記 | ホームページ作成セミナー',
  description: '特定商取引法に基づく表記',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-black text-gray-900">
              特定商取引法に基づく表記
            </h1>
          </div>
          <p className="text-gray-600 font-bold">
            特定商取引法に基づき、以下の通り表記いたします。
          </p>
        </div>

        {/* 本文 */}
        <div className="space-y-8">
          {/* 販売業者 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              販売業者
            </h2>
            <p className="text-gray-700">
              合同会社ICHI.
            </p>
          </section>

          {/* 運営責任者 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              運営責任者
            </h2>
            <p className="text-gray-700">
              代表社員 志水 康太
            </p>
          </section>

          {/* 所在地 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              所在地
            </h2>
            <p className="text-gray-700">
              愛知県豊川市宿町光道寺1番地
            </p>
          </section>

          {/* メールアドレス */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              メールアドレス
            </h2>
            <p className="text-gray-700">
              info@ichi-company.net<br />
              受付時間：平日 10:00〜17:00
            </p>
          </section>

          {/* 販売価格 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              販売価格
            </h2>
            <p className="text-gray-700">
              セミナー参加費：<br />
              ・早割価格（先着10名様）：4,980円（税込）<br />
              ・通常価格（11名以降）：6,980円（税込）<br />
              <br />
              特典総額：28,000円相当<br />
              ・カスタムGPTs×2（15,000円相当）<br />
              ・質問し放題・2週間（10,000円相当）<br />
              ・録画視聴OK（3,000円相当）<br />
              <br />
              ※表示価格はすべて税込価格です
            </p>
          </section>

          {/* 商品代金以外の必要料金 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              商品代金以外の必要料金
            </h2>
            <p className="text-gray-700">
              なし<br />
              ※インターネット接続料金、通信費などはお客様のご負担となります
            </p>
          </section>

          {/* お支払方法 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              お支払方法
            </h2>
            <p className="text-gray-700">
              クレジットカード決済（Stripe）<br />
              対応ブランド：VISA、MasterCard、American Express、JCB等
            </p>
          </section>

          {/* お支払時期 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              お支払時期
            </h2>
            <p className="text-gray-700">
              お申し込み時に即時決済となります
            </p>
          </section>

          {/* サービスの提供時期 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              サービスの提供時期
            </h2>
            <p className="text-gray-700">
              セミナー開催日：2025年12月4日（水）21:00～22:30<br />
              開催形式：オンライン（Zoom）<br />
              Zoomリンク：セミナー前日までにメールでお送りします
            </p>
          </section>

          {/* 返品・キャンセルポリシー */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              返品・キャンセルポリシー
            </h2>
            <div className="text-gray-700 space-y-3">
              <p className="font-semibold">【キャンセル・返金について】</p>
              <p>
                商品の性質上、お申し込み後の返品・キャンセル・返金は原則としてお受けできません。<br />
                ただし、以下の場合に限り対応いたします：
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>天災・システム障害等、当社の責に帰すべき事由によりセミナーが中止となった場合：全額返金</li>
                <li>技術的な問題により、当社の責に帰すべき理由でセミナーに参加できなかった場合：個別に対応</li>
              </ul>

              <p className="font-semibold mt-4">【お客様都合のキャンセル】</p>
              <p>
                お客様都合によるキャンセルの場合、返金は承っておりません。<br />
                ただし、録画動画の提供により対応させていただきます。
              </p>

              <p className="font-semibold mt-4">【お問い合わせ】</p>
              <p>
                キャンセル・返金に関するお問い合わせは下記メールアドレスまでご連絡ください：<br />
                info@ichi-company.net
              </p>

              <p className="mt-4 text-sm text-gray-600">
                ※デジタルコンテンツ（録画動画・GPTs・テンプレート等）の提供後は、返品・返金はできません<br />
                ※お申し込み前に、セミナー内容・日時をご確認の上、お申し込みください
              </p>
            </div>
          </section>

          {/* 不良品の取扱い */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              技術的なトラブルへの対応
            </h2>
            <p className="text-gray-700">
              Zoomの接続トラブル等、当社の責に帰すべき技術的な問題により
              セミナーに参加できなかった場合は、
              下記までご連絡ください。状況を確認の上、適切な対応をいたします。<br />
              <br />
              お問い合わせ先：info@ichi-company.net
            </p>
          </section>

          {/* 表現および商品に関する注意事項 */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              表現および商品に関する注意事項
            </h2>
            <p className="text-gray-700">
              本セミナーは、AIを活用したホームページ作成に関する知識やスキルの習得を目的としたものであり、
              特定の成果や効果を保証するものではありません。<br />
              セミナーで得られる効果や成果は、受講者様の活用方法や状況により異なります。
            </p>
          </section>

          {/* 個人情報の取り扱い */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              個人情報の取り扱い
            </h2>
            <p className="text-gray-700">
              お客様からお預かりした個人情報は、セミナーの運営、サービスの提供、
              お問い合わせへの回答のみに使用し、それ以外の目的では使用いたしません。<br />
              詳しくは
              <Link href="/privacy" className="text-blue-600 hover:text-blue-500 mx-1">
                プライバシーポリシー
              </Link>
              をご覧ください。
            </p>
          </section>

          {/* 決済システム */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              決済システム
            </h2>
            <p className="text-gray-700">
              本サイトでは、安全な決済のためStripe（ストライプ）を使用しています。<br />
              クレジットカード情報は、当社のサーバーには保存されず、
              Stripeのセキュアなサーバーで暗号化されて保護されます。<br />
              <br />
              Stripeについて：
              <a
                href="https://stripe.com/jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 ml-1"
              >
                https://stripe.com/jp
              </a>
            </p>
          </section>
        </div>

        {/* フッター */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            ※上記の内容は、特定商取引法に基づき表示が義務付けられている事項です。<br />
            ご購入前に必ずご確認ください。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}


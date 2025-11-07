/**
 * プライバシーポリシーページ
 * ※このページは法的に重要です。必ず法律の専門家に相談して内容を確認してください
 */

import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'プライバシーポリシー | ホームページ作成セミナー',
  description: '個人情報の取り扱いについて',
};

export default function PrivacyPage() {
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
            <Shield className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-black text-gray-900">
              プライバシーポリシー
            </h1>
          </div>
          <p className="text-gray-600 font-bold">制定日: 2022年3月1日 | 最終更新日: 2025年9月1日</p>
        </div>

        {/* 本文 */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              合同会社ICHI.（以下「当社」といいます）は、個人情報保護法およびその他関連法令を遵守し、
              個人情報を適切に取り扱うことを宣言します。
              本ウェブサイト上で提供するサービスにおける、個人情報の取扱いについて、
              以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第1条（個人情報）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、
              生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、
              連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、
              及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報
              （個人識別情報）を指します。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第2条（個人情報の収集）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下の個人情報を収集いたします。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>氏名</li>
              <li>会社名、部署名（任意）</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>住所（必要に応じて）</li>
              <li>お問い合わせ内容</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>収集方法：</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>お問い合わせフォーム</li>
              <li>セミナー申し込み</li>
              <li>名刺交換</li>
              <li>メール、電話でのご連絡</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第3条（個人情報を収集・利用する目的）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社が個人情報を収集・利用する目的は、以下のとおりです。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>お問い合わせへの対応</li>
              <li>サービス提案、情報提供</li>
              <li>契約締結および履行</li>
              <li>セミナーの運営・管理</li>
              <li>決済処理</li>
              <li>セミナー資料・録画動画の提供</li>
              <li>マーケティング活動</li>
              <li>法的義務の履行</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第4条（個人情報の安全管理）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、個人情報の漏えい、滅失またはき損の防止その他個人情報の安全管理のために、
              適切な管理体制および技術的・組織的安全管理措置を講じます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第5条（個人情報の第三者提供）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下の場合を除き、あらかじめ本人の同意を得ることなく、
              個人情報を第三者に提供しません。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              <li>決済処理のため、決済代行サービス（Stripe）に必要最小限の情報を提供する場合</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>第三者提供先：</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Stripe（決済処理）</li>
              <li>Google（Google Workspace、データ管理）</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第6条（個人情報の開示・訂正・削除）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本人から個人情報の開示を求められたときは、遅滞なく本人に対し開示します。
              ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないことがあります。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
              <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
              <li>法令に違反することとなる場合</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              個人情報が誤っている場合には、本人からの請求に基づき、
              遅滞なく訂正、追加または削除を行います。
            </p>
          </section>


          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第7条（個人情報の利用停止等）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              本人から、個人情報が利用目的の範囲を超えて取り扱われている、
              または不正の手段により取得されたものであるという理由により、
              利用の停止または消去を求められた場合には、遅滞なく必要な調査を行い、
              その結果に基づき、個人情報の利用停止等を行います。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第8条（プライバシーポリシーの変更）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーの内容は、法令その他の理由により、必要に応じて変更することがあります。
              変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第9条（お問い合わせ窓口）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>合同会社ICHI.</strong><br />
                〒444-0059 愛知県岡崎市康生通西3丁目28番地<br />
                代表者：志水 康太<br />
                メールアドレス: info@ichi-company.net<br />
                受付時間: 平日 10:00〜17:00
              </p>
            </div>
          </section>
        </div>

        {/* フッター */}
        <div className="mt-12 pt-8 border-t border-gray-200">
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


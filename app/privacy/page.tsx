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
          <p className="text-gray-600 font-bold">最終更新日: 2025年11月6日</p>
        </div>

        {/* 本文 */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              AI初心者のためのホームページ作成セミナー運営事務局（以下「当社」といいます）は、
              本ウェブサイト上で提供するサービス（以下「本サービス」といいます）における、
              ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
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
              第2条（個人情報の収集方法）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、ユーザーが利用登録をする際に、氏名、メールアドレス、電話番号などの個人情報をお尋ねすることがあります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              また、決済に関する情報は、決済代行サービス（Stripe）を通じて安全に処理されます。
              当社は、クレジットカード番号などの決済情報を直接保管することはありません。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第3条（個人情報を収集・利用する目的）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社が個人情報を収集・利用する目的は、以下のとおりです。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>セミナーの運営・管理のため</li>
              <li>ユーザーへの連絡・通知のため</li>
              <li>決済処理のため</li>
              <li>セミナー資料・録画動画の提供のため</li>
              <li>ユーザーからのお問い合わせに対応するため</li>
              <li>サービスの改善・新サービスの開発のため</li>
              <li>メールマガジン・各種お知らせの配信のため</li>
              <li>キャンペーン・アンケート・モニターの実施のため</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第4条（利用目的の変更）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、
              個人情報の利用目的を変更するものとします。
              利用目的の変更を行った場合には、変更後の目的について、
              当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第5条（個人情報の第三者提供）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、
              第三者に個人情報を提供することはありません。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              <li>決済処理のため、決済代行サービス（Stripe）に必要最小限の情報を提供する場合</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第6条（個人情報の開示）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
              ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、
              開示しない決定をした場合には、その旨を遅滞なく通知します。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第7条（個人情報の訂正および削除）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、
              当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下「訂正等」といいます）を請求することができます。
              当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、
              遅滞なく、当該個人情報の訂正等を行うものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第8条（個人情報の利用停止等）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、
              または不正の手段により取得されたものであるという理由により、
              その利用の停止または消去（以下「利用停止等」といいます）を求められた場合には、
              遅滞なく必要な調査を行います。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第9条（プライバシーポリシーの変更）
            </h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
              ユーザーに通知することなく、変更することができるものとします。
              当社が別途定める場合を除いて、変更後のプライバシーポリシーは、
              本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              第10条（お問い合わせ窓口）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>AI初心者のためのホームページ作成セミナー運営事務局</strong><br />
                メールアドレス: privacy@example.com<br />
                電話番号: 03-XXXX-XXXX<br />
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


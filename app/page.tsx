/**
 * ホームページ作成セミナー ランディングページ
 * シンプルで洗練されたデザイン
 */

import ApplicationForm from './components/ApplicationForm';
import Image from 'next/image';
import {
  Calendar,
  Monitor,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  Bot,
  FileText,
  MessageCircle,
  Video,
  Sparkles,
  Target,
  BookOpen,
  Heart
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* 左側：テキスト */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 sm:mb-8 leading-tight">
                ホームページ<br />作成セミナー
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 leading-relaxed">
                ChatGPT × Readdy で<br />
                ホームページ・LP作成を<br />
                たった2時間でマスター
              </p>

              {/* 開催情報 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                  <div>
                    <Calendar className="w-5 h-5 mb-2 opacity-80" />
                    <div className="text-sm opacity-80">日時</div>
                    <div className="font-bold">11/5（火）</div>
                    <div className="text-sm">16:00-18:00</div>
                  </div>
                  <div>
                    <Monitor className="w-5 h-5 mb-2 opacity-80" />
                    <div className="text-sm opacity-80">形式</div>
                    <div className="font-bold">オンライン</div>
                    <div className="text-sm">Zoom使用</div>
                  </div>
                  <div>
                    <Users className="w-5 h-5 mb-2 opacity-80" />
                    <div className="text-sm opacity-80">定員</div>
                    <div className="font-bold">30名</div>
                    <div className="text-sm">少人数制</div>
                  </div>
                </div>
              </div>

              {/* 早割価格 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-gray-700">早割価格（先着10名）</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-3xl sm:text-4xl font-black text-pink-600">¥4,980</span>
                      <span className="text-lg sm:text-xl text-gray-400 line-through">¥6,980</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">※特典総額¥33,000相当が含まれます</p>
                  </div>
                </div>
              </div>

              <a
                href="#application"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white shadow-xl hover:bg-pink-700 transition-all duration-200 hover:scale-105 min-h-[44px]"
              >
                今すぐ申し込む
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* 右側：画像 */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-[280px] sm:max-w-sm md:max-w-md">
                <Image
                  src="/images/hero-person.png"
                  alt="パソコンで作業をする人"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セミナー内容セクション */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-12 sm:mb-16 text-center">
            このセミナーで<br className="sm:hidden" />できること
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">こんなお悩みありませんか？</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-lg text-gray-700">ホームページを作りたいけど、制作会社に頼むと<strong>数十万円</strong>もかかる</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-lg text-gray-700">自分で作ろうと思ったけど、<strong>専門知識の学習に時間</strong>がかかりすぎる</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-lg text-gray-700">WordPressやノーコードツールも<strong>複雑で挫折</strong>してしまった</p>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-gray-700 bg-blue-50 p-6 rounded-xl">
                このセミナーでは、<strong className="text-blue-600">ChatGPT</strong>でコンテンツや構成を作成し、
                それを<strong className="text-blue-600">Readdy（レディ）</strong>に入力するだけで、
                プロ並みのホームページやLP（ランディングページ）が完成します。
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm">
                <Image
                  src="/images/person-beginner.png"
                  alt="AI初心者でも安心"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-20">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <div className="bg-blue-50 rounded-2xl p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">当日の流れ</h3>
                  <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">ChatGPTで土台を作る</h4>
                    <p className="text-gray-700">ホームページの文章、デザイン案、レイアウト構成をChatGPTで作成します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Readdyに入力して完成</h4>
                    <p className="text-gray-700">作成した内容をReaddyに入力するだけで、あなただけのホームページが完成します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">効果的な活用のコツを学ぶ</h4>
                    <p className="text-gray-700">ChatGPTとReaddyを最大限に活用するためのポイントをお伝えします。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm">
              <Image
                src="/images/workshop.png"
                alt="ワークショップの様子"
                width={400}
                height={400}
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-8">このセミナーで解決できること</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>高額な制作費</strong>を払わずに、プロ品質のホームページが手に入る</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>専門知識ゼロ</strong>でも、たった2時間で自分のサイトが完成</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>学習コスト不要</strong>で、すぐに活用できるスキルが身につく</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span><strong>ホームページだけでなくLP（ランディングページ）</strong>も作成可能で、圧倒的なコスパ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span>セラピスト、コーチ、個人事業主に最適な情報発信の場が手に入る</span>
              </li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-blue-600 p-6 mt-8 rounded">
              <p className="text-sm text-gray-600 mb-2">※ 公開に必要なコストについて</p>
              <p className="text-gray-700">
                ホームページ公開にはツール利用料が必要です（月額約3,000円、初期費用1,000〜2,000円程度）。
                制作会社への依頼（数十万円）と比べ、大幅にコストを抑えられます。
              </p>
            </div>

            {/* 価格比較表 */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">他サービスとの価格比較</h3>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-10">ホームページ作成にかかる一般的なコスト</p>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow-lg rounded-xl">
                    <table className="min-w-full border-collapse bg-white">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 border-b-2 border-gray-200 whitespace-nowrap">サービス</th>
                          <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 border-b-2 border-gray-200 whitespace-nowrap">費用</th>
                          <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 border-b-2 border-gray-200 whitespace-nowrap">期間/学習時間</th>
                          <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 border-b-2 border-gray-200 whitespace-nowrap">サポート</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">制作会社に依頼</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-bold whitespace-nowrap">¥300,000〜¥500,000</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">1〜3ヶ月</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">有料保守</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">フリーランスに依頼</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-bold whitespace-nowrap">¥50,000〜¥150,000</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">2週間〜1ヶ月</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">基本なし</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">オンライン講座で学習</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-bold whitespace-nowrap">¥10,000〜¥30,000</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">学習50〜100時間</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">基本なし</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">類似セミナー（一般）</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-bold whitespace-nowrap">¥8,000〜¥15,000</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">1日〜2日</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 whitespace-nowrap">セミナー中のみ</td>
                        </tr>
                        <tr className="bg-gradient-to-r from-pink-50 to-blue-50 border-2 border-pink-500">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-bold whitespace-nowrap">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                              <span className="text-xs sm:text-sm">このセミナー</span>
                              <span className="inline-block text-xs bg-pink-600 text-white px-2 py-1 rounded w-fit">おすすめ</span>
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                              <span className="text-xl sm:text-2xl font-black text-pink-600 whitespace-nowrap">¥4,980</span>
                              <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">¥6,980</span>
                            </div>
                            <p className="text-xs text-pink-600 font-bold mt-1 whitespace-nowrap">早割価格（先着10名）</p>
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-bold whitespace-nowrap">たった2時間</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-bold whitespace-nowrap">質問し放題</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* なぜこの価格？ */}
              <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">なぜこの価格で提供できるのか？</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-8 h-8 text-blue-600" />
                      <h5 className="font-bold text-gray-900">AI技術の活用</h5>
                    </div>
                    <p className="text-gray-700 text-sm">ChatGPTとReaddyを組み合わせることで、従来の制作工程を大幅に効率化。その分をお客様に還元しています。</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-8 h-8 text-pink-600" />
                      <h5 className="font-bold text-gray-900">初回限定価格</h5>
                    </div>
                    <p className="text-gray-700 text-sm">この価格は初回開催限定の特別価格です。次回以降は通常価格¥9,980での提供を予定しています。</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                      <h5 className="font-bold text-gray-900">再現性の高いノウハウ</h5>
                    </div>
                    <p className="text-gray-700 text-sm">一度覚えれば何度でも使えるスキル。ホームページやLP（ランディングページ）を、追加コストなしで複数作成可能です。</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-8 h-8 text-pink-600" />
                      <h5 className="font-bold text-gray-900">多くの方に届けたい</h5>
                    </div>
                    <p className="text-gray-700 text-sm">「高額で諦めていた」という方にこそ、このツールの可能性を知ってほしい。その思いで価格設定しています。</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-xl p-6 text-center">
                  <p className="text-lg text-gray-900 mb-2">
                    <strong className="text-pink-600">特典総額¥33,000相当</strong>が含まれて、この価格
                  </p>
                  <p className="text-sm text-gray-700">
                    セミナー料金を大きく上回る価値を提供することをお約束します
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 開催概要セクション */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-12 sm:mb-16 text-center">
            開催概要
          </h2>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                { label: "日時", value: "2025年12月4日（水）21:00～22:30" },
                { label: "定員", value: "最大30名（先着順）" },
                { label: "開催形式", value: "オンライン開催（Zoom）" },
                { label: "参加費", value: "早割 ¥4,980 / 通常 ¥6,980（税込）※特典総額¥33,000相当" },
                { label: "対象者", value: "専門知識ゼロ、AI初心者でもOK" },
                { label: "準備物", value: "ノートPC、インターネット環境" },
              ].map((item) => (
                <div key={item.label} className="px-10 py-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <dt className="text-base font-bold text-blue-600 sm:w-32 flex-shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-gray-900 text-lg">{item.value}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-500 to-pink-600 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                参加者限定特典
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                セミナー参加費を大きく上回る価値の特典をご用意
              </p>
              <p className="text-xl font-bold text-pink-600 text-center mb-8">
                総額¥33,000相当
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-center mb-3">
                    <Bot className="w-12 h-12 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900">カスタムGPTs×2</p>
                  <p className="text-sm text-gray-600 mt-2">ホームページ制作に特化した2つのGPTs</p>
                  <p className="text-xs text-pink-600 font-bold mt-3">¥15,000相当</p>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-center mb-3">
                    <FileText className="w-12 h-12 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900">テンプレート集</p>
                  <p className="text-sm text-gray-600 mt-2">すぐに使えるデザインテンプレート</p>
                  <p className="text-xs text-pink-600 font-bold mt-3">¥5,000相当</p>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-center mb-3">
                    <MessageCircle className="w-12 h-12 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900">質問し放題</p>
                  <p className="text-sm text-gray-600 mt-2">セミナー後2週間、質問サポート</p>
                  <p className="text-xs text-pink-600 font-bold mt-3">¥10,000相当</p>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-center mb-3">
                    <Video className="w-12 h-12 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900">録画視聴OK</p>
                  <p className="text-sm text-gray-600 mt-2">復習に最適な録画データ</p>
                  <p className="text-xs text-pink-600 font-bold mt-3">¥3,000相当</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 申込みフォーム */}
      <section id="application" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block rounded-full bg-pink-100 px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-pink-700">
                残席わずか
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              今すぐ申し込む
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 px-4">
              早割価格¥4,980は先着10名様限定<br />
              お早めにお申し込みください
            </p>
            <p className="text-xs sm:text-sm text-gray-500 px-4">
              ※通常価格¥6,980 / 次回以降¥9,980を予定
            </p>
          </div>

          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl sm:rounded-3xl bg-gray-50 p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              AI初心者のためのホームページ作成セミナー
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
              © 2025 All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm px-4">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors font-bold min-h-[44px] flex items-center">
                プライバシーポリシー
              </a>
              <a href="/legal" className="text-gray-400 hover:text-white transition-colors font-bold min-h-[44px] flex items-center">
                特定商取引法に基づく表記
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold min-h-[44px] flex items-center">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

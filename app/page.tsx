/**
 * ホームページ作成セミナー ランディングページ
 * シンプルで洗練されたデザイン
 */

'use client';

import { useState, useEffect } from 'react';
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

// セミナーの設定
const SEMINAR_CAPACITY = Number(process.env.NEXT_PUBLIC_SEMINAR_CAPACITY) || 30;
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL || '';

export default function Home() {
  const [currentParticipants, setCurrentParticipants] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 参加人数を取得
  useEffect(() => {
    const fetchParticipantCount = async () => {
      try {
        if (GAS_URL) {
          const response = await fetch(GAS_URL);
          const data = await response.json();
          if (data.count !== undefined) {
            setCurrentParticipants(data.count);
          }
        }
      } catch (error) {
        console.error('参加人数取得エラー:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipantCount();
  }, []);

  // 残席を計算
  const remainingSeats = SEMINAR_CAPACITY - currentParticipants;
  // 残席が10名未満の場合にのみ「残席わずか」を表示
  const showLimitedSeats = remainingSeats < 10 && remainingSeats > 0;
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 py-12 sm:py-16 lg:py-24">
        {/* 装飾的な背景要素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* 左側：テキスト */}
            <div>
              {/* キャッチコピーバッジ */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-bold">AI × ノーコードで誰でも簡単</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                ホームページ<br />
                作成セミナー
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 leading-relaxed">
                ChatGPT × Readdy でたった2時間。<br />
                専門知識ゼロからプロ級サイトを作成
              </p>

              {/* 開催情報 - コンパクト */}
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">12/4（水）21:00-22:30</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <Monitor className="w-4 h-4" />
                    <span className="text-sm font-medium">オンライン</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">定員30名</span>
                  </div>
                </div>
              </div>

              {/* 通常価格 - シンプルなデザイン */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1 mb-6 sm:mb-8 shadow-2xl">
                <div className="bg-white rounded-xl p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {!isLoading && showLimitedSeats && `残席${remainingSeats}名`}
                          {!isLoading && !showLimitedSeats && remainingSeats > 0 && '受付中'}
                          {!isLoading && remainingSeats <= 0 && '満員御礼'}
                        </div>
                        <div className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          早割終了
                        </div>
                      </div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">¥6,980</span>
                        <span className="text-lg sm:text-xl text-gray-400 line-through">¥4,980</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">特典総額¥28,000相当含む</p>
                      <p className="text-xs text-gray-500">※早割価格（先着10名）は終了しました</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAボタン */}
              <a
                href="#application"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 min-h-[44px]"
              >
                今すぐ申し込む
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* 安心要素 */}
              <p className="text-xs sm:text-sm text-white/80 mt-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>録画視聴OK・質問サポート付き</span>
              </p>
            </div>

            {/* 右側：画像（PCのみ） */}
            <div className="hidden lg:flex relative justify-center lg:justify-end">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* 左側：テキスト */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">こんなお悩みありませんか？</h3>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700">ホームページを作りたいけど、制作会社に頼むと<strong>数十万円</strong>もかかる</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700">自分で作ろうと思ったけど、<strong>専門知識の学習に時間</strong>がかかりすぎる</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mt-1">
                    <span className="text-pink-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700">WordPressやノーコードツールも<strong>複雑で挫折</strong>してしまった</p>
                </div>
              </div>
            </div>

            {/* 右側：画像 */}
            <div className="flex justify-center">
              <div className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-sm">
                <Image
                  src="/images/person-beginner.png"
                  alt="お悩みを抱える方"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* 解決策の説明 */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 bg-blue-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              このセミナーでは、<strong className="text-blue-600">ChatGPT</strong>でコンテンツや構成を作成し、
              それを<strong className="text-blue-600">Readdy（レディ）</strong>に入力するだけで、
              プロ並みのホームページやLP（ランディングページ）が完成します。
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-20 lg:relative">
            <div className="lg:max-w-xl lg:ml-auto">
              <div className="bg-blue-50 rounded-2xl p-6 sm:p-10">
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

              {/* スマホでは画像を下に表示 */}
              <div className="flex justify-center mt-8 lg:hidden">
                <div className="w-full max-w-[200px]">
                  <Image
                    src="/images/workshop.png"
                    alt="ワークショップの様子"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* PCでは画像を左側に表示 */}
            <div className="hidden lg:flex justify-center absolute top-0 left-0 w-5/12 h-full items-center">
              <div className="w-full max-w-sm">
                <Image
                  src="/images/workshop.png"
                  alt="ワークショップの様子"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
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
                            <div className="flex flex-col gap-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-xl sm:text-2xl font-black text-pink-600 whitespace-nowrap">¥6,980</span>
                                <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">¥4,980</span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1 whitespace-nowrap">早割終了・通常価格</p>
                            </div>
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
                    <strong className="text-pink-600">特典総額¥28,000相当</strong>が含まれて、この価格
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
                { label: "参加費", value: "¥6,980（税込）※早割終了・特典総額¥28,000相当" },
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
                総額¥28,000相当
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {!isLoading && showLimitedSeats && (
              <div className="inline-block mb-4">
                <span className="inline-block rounded-full bg-pink-100 px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-pink-700">
                  残席わずか
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              今すぐ申し込む
            </h2>
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4 mx-4 sm:mx-auto max-w-2xl">
              <p className="text-sm sm:text-base text-gray-800 font-bold mb-1">
                ⚠️ 早割価格（¥4,980）は終了しました
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                現在は通常価格 <span className="font-bold text-pink-600">¥6,980</span> での受付となります
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 px-4">
              ※次回以降¥9,980を予定
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

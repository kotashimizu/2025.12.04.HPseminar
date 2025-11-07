# AI初心者のためのホームページ作成セミナー LP

AIホームページ作成ツール「Readdy」を使ったセミナーのランディングページです。

## 主な特徴

- **ペライチ風デザイン**: 親しみやすく明るいデザイン
- **絵文字なし**: Lucide Reactアイコンを使用したプロフェッショナルなUI
- **早割価格システム**: 先着10名様限定の早割価格を自動適用
- **動的残席表示**: リアルタイムで参加人数・残席を表示
- **ソコストイラスト対応**: フリー素材を活用したビジュアル
- **完全レスポンシブ**: すべてのデバイスに最適化

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **決済**: Stripe (決済リンク)
- **顧客管理**: Google Apps Script + Google Spreadsheet
- **デプロイ**: Vercel

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成：

```bash
# Stripe 決済リンク（2つ作成が必要）
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY=https://buy.stripe.com/xxxxx
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR=https://buy.stripe.com/xxxxx

# Google Apps Script URL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/YOUR_ID/exec

# セミナー設定
NEXT_PUBLIC_SEMINAR_CAPACITY=30
NEXT_PUBLIC_EARLY_BIRD_LIMIT=10
```

詳細は `SETUP.md` をご覧ください。

### 3. 画像のダウンロード（重要！）

ソコスト（https://soco-st.com/）から以下の画像をダウンロードして、`public/images/` フォルダに配置してください：

#### 必要な画像リスト

| ファイル名 | 推奨画像 |
|-----------|---------|
| `hero-person.png` | パソコンで作業をする人 |
| `team-discussion.png` | 会議・ミーティング |
| `workshop.png` | 勉強・学習する人 |
| `person-ai.png` | ガッツポーズをする人 |
| `person-hp.png` | パソコンで作業する人 |
| `person-beginner.png` | 考える人・質問する人 |
| `person-therapist.png` | 笑顔の女性 |
| `person-lp.png` | 案内する人 |
| `person-growth.png` | グラフと人 |

**詳細な手順は `IMAGE_GUIDE.md` をご覧ください。**

現在、プレースホルダー画像（SVG）が配置されています。実際の画像に置き換えると、より魅力的なサイトになります。

### 4. Google Apps Script の設定

1. Googleスプレッドシートを新規作成
2. 「拡張機能」→「Apps Script」を開く
3. `gas-script.js` の内容をコピー＆ペースト
4. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」
5. 設定：
   - 次のユーザーとして実行: 自分
   - アクセスできるユーザー: 全員
6. デプロイURLをコピーして `.env.local` に設定

### 5. Stripe 決済リンクの作成

#### 早割価格（¥2,980）

1. Stripeダッシュボードにログイン
2. 「商品」→「商品を追加」
3. 商品情報：
   - 商品名: `AI初心者のためのホームページ作成セミナー（早割）`
   - 価格: `2980` JPY
4. 「支払いリンクを作成」
5. URLを `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY` に設定

#### 通常価格（¥3,480）

1. 同様の手順で作成
2. 商品名: `AI初心者のためのホームページ作成セミナー（通常価格）`
3. 価格: `3480` JPY
4. URLを `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR` に設定

### 6. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## 主な機能

### フロントエンド

- ヒーローセクション（早割バッジ付き）
- セミナー概要
- こんな方におすすめ（6項目）
- セミナーで学べること（3ステップ）
- 開催概要
- 申込みフォーム
- プライバシーポリシー
- 特定商取引法に基づく表記

### バックエンド

- GASによる申込データ管理
- 早割価格の自動適用
- リアルタイム参加人数取得
- Stripe決済連携

## デザインの特徴

### カラーパレット

- **プライマリー**: Blue (#3b82f6) ↔ Cyan (#06b6d4)
- **セカンダリー**: Purple (#a855f7)
- **アクセント**: Pink (#ec4899) ↔ Orange (#f97316)
- **警告**: Yellow (#fbbf24)
- **成功**: Green (#10b981)

### UIコンポーネント

- **絵文字なし**: すべてLucide Reactアイコンを使用
- **丸みのあるデザイン**: `rounded-3xl`、`rounded-full`
- **グラデーション**: 明るく鮮やかな配色
- **ホバーエフェクト**: スケール変化、影の変化
- **アニメーション**: `animate-bounce` 等

## ディレクトリ構造

```
hp_seminar/
├── app/
│   ├── components/
│   │   └── ApplicationForm.tsx    # 申込みフォーム
│   ├── privacy/
│   │   └── page.tsx              # プライバシーポリシー
│   ├── legal/
│   │   └── page.tsx              # 特定商取引法
│   ├── success/
│   │   └── page.tsx              # 決済完了ページ
│   ├── layout.tsx                # 共通レイアウト
│   └── page.tsx                  # トップページ
├── public/
│   └── images/                   # 画像ファイル
│       ├── placeholder.svg       # プレースホルダー
│       ├── hero-person.png
│       ├── team-discussion.png
│       └── ...
├── gas-script.js                 # Google Apps Script
├── IMAGE_GUIDE.md                # 画像ダウンロードガイド
├── SETUP.md                      # 詳細セットアップガイド
└── README.md                     # このファイル
```

## デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリにプッシュ
2. Vercelダッシュボードでプロジェクトをインポート
3. 環境変数を設定（上記の`.env.local`と同じ内容）
4. デプロイ

詳細は `DEPLOYMENT.md` をご覧ください。

## カスタマイズ

### 早割人数を変更

`.env.local` で変更：

```bash
NEXT_PUBLIC_EARLY_BIRD_LIMIT=15  # 15名まで早割
```

### 定員を変更

```bash
NEXT_PUBLIC_SEMINAR_CAPACITY=50  # 定員50名
```

### 価格を変更

1. Stripeで新しい価格の商品を作成
2. `.env.local` の決済リンクを更新
3. `app/legal/page.tsx` の価格表示を更新

### セミナー日時・内容を変更

- `app/page.tsx`: メインコンテンツ
- `app/success/page.tsx`: 決済完了ページ
- `gas-script.js`: 確認メール本文

## トラブルシューティング

### 画像が表示されない

1. `public/images/` に画像が配置されているか確認
2. ファイル名が正しいか確認（`IMAGE_GUIDE.md` 参照）
3. 開発サーバーを再起動: `npm run dev`

### 環境変数が反映されない

開発サーバーを再起動してください：

```bash
# Ctrl+C で停止
npm run dev
```

### GASエラー「権限がありません」

1. Apps Scriptエディタで「実行」→「関数を実行」→「doPost」
2. 権限を許可

### 決済リンクに遷移しない

1. `.env.local` の決済リンクURLを確認
2. Stripeダッシュボードでリンクが有効か確認

## セキュリティ注意事項

- `.env.local` ファイルは絶対にGitにコミットしない
- Stripeシークレットキーは絶対に公開しない
- GAS URLは「全員」アクセス可能だが、機密データは保存しない

## ライセンス

このプロジェクトはMITライセンスです。

## サポート

問題が発生した場合：

1. `IMAGE_GUIDE.md` - 画像関連
2. `SETUP.md` - 環境変数・セットアップ
3. [Next.js ドキュメント](https://nextjs.org/docs)
4. [Stripe ドキュメント](https://stripe.com/docs)
5. [Lucide React](https://lucide.dev/)

---

**素晴らしいセミナーサイトをお楽しみください！** 🚀

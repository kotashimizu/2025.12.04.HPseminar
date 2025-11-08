# 環境変数設定ガイド

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、以下の内容をコピーしてください。

## .env.local ファイルの作成

```bash
# Stripe API Keys
# Stripeダッシュボード（https://dashboard.stripe.com/apikeys）から取得
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxx

# Stripe Price IDs
# 早割価格（最初の10名）: ¥4,980
NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY=price_xxxxxxxxxxxxxxxx
# 通常価格（11名以降）: ¥6,980
NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR=price_xxxxxxxxxxxxxxxx

# セミナー設定
NEXT_PUBLIC_SEMINAR_CAPACITY=30
NEXT_PUBLIC_EARLY_BIRD_LIMIT=10

# Google Apps Script URL
# GASをWebアプリとして公開した際に取得できるURL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# アプリケーションのベースURL（本番環境のURL）
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## 各環境変数の説明

### STRIPE_SECRET_KEY
- **用途**: サーバー側でStripe APIを呼び出すためのシークレットキー
- **取得方法**:
  1. Stripeダッシュボードにログイン
  2. 「開発者」→「APIキー」を開く
  3. 「シークレットキー」を表示してコピー
- **注意**:
  - `sk_test_` で始まるのはテストキー、`sk_live_` は本番キー
  - **絶対に公開しないこと！**
  - Gitにコミットしないこと！

### NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY
- **用途**: 早割価格（最初の10名）: ¥4,980
- **取得方法**:
  1. Stripeダッシュボードで「商品」を開く
  2. 既存の早割商品の価格IDをコピー
  または
  1. 「商品を追加」→ 商品名と価格を設定
  2. 価格: ¥4,980、タイプ: 1回払い
  3. 作成後、価格IDをコピー

### NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR
- **用途**: 通常価格（11名以降）: ¥6,980
- **取得方法**:
  1. Stripeダッシュボードで「商品」を開く
  2. 既存の通常価格商品の価格IDをコピー
  または
  1. 「商品を追加」→ 商品名と価格を設定
  2. 価格: ¥6,980、タイプ: 1回払い
  3. 作成後、価格IDをコピー

### NEXT_PUBLIC_SEMINAR_CAPACITY
- **用途**: セミナーの定員
- **デフォルト値**: 30名

### NEXT_PUBLIC_EARLY_BIRD_LIMIT
- **用途**: 早割適用人数
- **デフォルト値**: 10名（最初の10名まで早割価格）

### NEXT_PUBLIC_GAS_URL
- **用途**: 申込みデータをGoogleスプレッドシートに送信するためのURL
- **取得方法**:
  1. Googleスプレッドシートを作成
  2. 「拡張機能」→「Apps Script」を開く
  3. `gas-script.js` の内容を貼り付け
  4. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」
  5. 「アクセスできるユーザー」を「全員」に設定
  6. デプロイURLをコピー

### NEXT_PUBLIC_BASE_URL
- **用途**: 決済完了後のリダイレクトURLのベースとなるドメイン
- **設定値**:
  - 本番環境: `https://your-domain.vercel.app`
  - 開発環境: 設定不要（自動的に `http://localhost:3000` が使用されます）
- **注意**: Vercelにデプロイした後、実際のドメインに変更してください

## Vercelでの環境変数設定

Vercelにデプロイする場合は、以下の手順で環境変数を設定してください：

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Environment Variables」を開く
3. 上記の全ての環境変数を追加：
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY`
   - `NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR`
   - `NEXT_PUBLIC_SEMINAR_CAPACITY`
   - `NEXT_PUBLIC_EARLY_BIRD_LIMIT`
   - `NEXT_PUBLIC_GAS_URL`
   - `NEXT_PUBLIC_BASE_URL`
4. 「Save」をクリック
5. プロジェクトを再デプロイ

## セキュリティ注意事項

⚠️ **重要**: 
- `.env.local` ファイルは `.gitignore` に含まれています
- Gitにコミットしないでください
- `STRIPE_SECRET_KEY` は絶対に公開しないでください
- `NEXT_PUBLIC_` で始まる変数はブラウザに公開されます

## トラブルシューティング

### 環境変数が反映されない
- 開発サーバーを再起動してください: `npm run dev`

### GASへの送信が失敗する
- GASのURLが正しいか確認
- GASが「全員」アクセス可能に設定されているか確認
- GASのログを確認（Apps Scriptエディタで「実行」→「ログ」）

### Stripeページに遷移しない
- 決済リンクURLが正しいか確認
- ブラウザのコンソールでエラーを確認


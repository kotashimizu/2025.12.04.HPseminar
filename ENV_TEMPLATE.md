# 環境変数設定ガイド

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、以下の内容をコピーしてください。

## .env.local ファイルの作成

```bash
# Stripe API Keys
# Stripeダッシュボード（https://dashboard.stripe.com/apikeys）から取得
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxx

# Stripe Price ID
# 既に作成済み: price_1SQTKmIeL5Sb4fWhbQ7DpugQ
NEXT_PUBLIC_STRIPE_PRICE_ID=price_1SQTKmIeL5Sb4fWhbQ7DpugQ

# Google Apps Script URL
# GASをWebアプリとして公開した際に取得できるURL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 各環境変数の説明

### NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- **用途**: ブラウザ側でStripeを初期化するための公開可能キー
- **取得方法**: 
  1. Stripeダッシュボードにログイン
  2. 「開発者」→「APIキー」を開く
  3. 「公開可能キー」をコピー
- **注意**: `pk_test_` で始まるのはテストキー、`pk_live_` は本番キー

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

### NEXT_PUBLIC_STRIPE_PRICE_ID
- **用途**: セミナーの価格ID
- **既存の価格**: `price_1SQTKmIeL5Sb4fWhbQ7DpugQ`（¥9,800）
- **新しい価格を作成する場合**:
  1. Stripeダッシュボードで「商品」→「商品を追加」
  2. 価格を設定
  3. 価格IDをコピー

### NEXT_PUBLIC_GAS_URL
- **用途**: 申込みデータをGoogleスプレッドシートに送信するためのURL
- **取得方法**: 
  1. Googleスプレッドシートを作成
  2. 「拡張機能」→「Apps Script」を開く
  3. `gas-script.js` の内容を貼り付け
  4. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」
  5. 「アクセスできるユーザー」を「全員」に設定
  6. デプロイURLをコピー

## Vercelでの環境変数設定

Vercelにデプロイする場合は、以下の手順で環境変数を設定してください：

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Environment Variables」を開く
3. 上記の4つの環境変数を追加
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


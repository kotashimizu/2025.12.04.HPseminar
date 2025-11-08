# 決済後のスプレッドシート同期修正

## 問題の内容

ユーザーが決済完了後、スプレッドシートにデータが反映されない問題が発生していました。

## 原因

Stripe Payment Linkを使用していましたが、決済成功後に`/success`ページへ自動リダイレクトする設定がなかったため、GASへのデータ送信処理が実行されませんでした。

### 問題のあったフロー
```
1. フォーム入力 → localStorageに保存
2. Stripe Payment Linkへリダイレクト
3. 決済完了 → Stripeのページに留まる ❌
4. /successページに遷移しない → GASへのデータ送信が実行されない ❌
```

## 解決策

Payment LinkからCheckout Sessionに変更し、決済成功後に確実に`/success`ページへリダイレクトするようにしました。

### 修正後のフロー
```
1. フォーム入力 → localStorageに保存
2. サーバーでCheckout Sessionを作成
3. Stripe Checkoutページへリダイレクト
4. 決済完了 → /successページへ自動リダイレクト ✅
5. /successページでlocalStorageからデータを取得してGASへ送信 ✅
6. スプレッドシートに反映 ✅
```

## 修正内容

### 1. 新規作成したファイル

#### `app/api/create-checkout-session/route.ts`
Stripe Checkout Sessionを作成するAPIエンドポイント。
- 決済成功時のリダイレクトURL: `{ベースURL}/success`
- キャンセル時のリダイレクトURL: `{ベースURL}/?canceled=true`

### 2. 修正したファイル

#### `app/components/ApplicationForm.tsx`
- Payment LinkからCheckout Session使用に変更
- `STRIPE_PAYMENT_LINK_*` → `STRIPE_PRICE_ID_*`
- フォーム送信時にCheckout Sessionを作成してリダイレクト

#### `ENV_TEMPLATE.md`
環境変数の設定を更新：
- `NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY`: 早割価格のPrice ID
- `NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR`: 通常価格のPrice ID
- `STRIPE_SECRET_KEY`: サーバーサイドでCheckout Session作成に必要
- `NEXT_PUBLIC_BASE_URL`: リダイレクトURL生成に使用

#### `vercel.json`
環境変数の設定を更新

## セットアップ手順

### 1. Stripeで価格（Price）のIDを取得

1. [Stripe Dashboard](https://dashboard.stripe.com/) にログイン
2. 「商品」を開く
3. 既存の商品の価格IDをコピー

**早割商品（¥4,980）の場合:**
- 商品ページを開く
- 価格の部分をクリック
- Price ID（`price_xxxxx`）をコピー

**通常価格商品（¥6,980）の場合:**
- 同様に価格IDをコピー

**商品がまだない場合:**
1. 「商品を追加」をクリック
2. 早割商品:
   - 名前: ホームページ作成セミナー参加費（早割）
   - 価格: ¥4,980
   - 支払いタイプ: 1回払い
3. 通常価格商品:
   - 名前: ホームページ作成セミナー参加費（通常価格）
   - 価格: ¥6,980
   - 支払いタイプ: 1回払い

### 2. Stripe Secret Keyを取得

1. [Stripe Dashboard](https://dashboard.stripe.com/) にログイン
2. 「開発者」→「APIキー」を開く
3. 「シークレットキー」を表示してコピー
   - テストモード: `sk_test_xxxxx`
   - 本番モード: `sk_live_xxxxx`

### 3. 環境変数を設定

#### ローカル開発環境
プロジェクトルートに`.env.local`ファイルを作成：

```bash
# Stripe Secret Key
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Stripe Price IDs
NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR=price_xxxxxxxxxxxxx

# セミナー設定
NEXT_PUBLIC_SEMINAR_CAPACITY=30
NEXT_PUBLIC_EARLY_BIRD_LIMIT=10

# Google Apps Script URL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# ベースURL（ローカルでは不要、本番環境で設定）
# NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

#### Vercel本番環境

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Environment Variables」
3. 以下の環境変数を追加：
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PRICE_ID_EARLY`
   - `NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR`
   - `NEXT_PUBLIC_SEMINAR_CAPACITY`
   - `NEXT_PUBLIC_EARLY_BIRD_LIMIT`
   - `NEXT_PUBLIC_GAS_URL`
   - `NEXT_PUBLIC_BASE_URL`（本番ドメイン）
4. 「Save」をクリック
5. プロジェクトを再デプロイ

### 4. 動作確認

1. ローカルで開発サーバーを起動:
```bash
npm run dev
```

2. ブラウザで `http://localhost:3000` を開く

3. フォームに入力して申し込みボタンをクリック

4. Stripe Checkoutページに遷移することを確認

5. テストカードで決済:
   - カード番号: `4242 4242 4242 4242`
   - 有効期限: 任意の未来の日付（例: 12/34）
   - CVC: 任意の3桁（例: 123）

6. 決済完了後、`/success`ページに自動リダイレクトされることを確認

7. Googleスプレッドシートにデータが追加されていることを確認

## トラブルシューティング

### 環境変数が反映されない
- 開発サーバーを再起動: `npm run dev`
- `.env.local`ファイルがプロジェクトルートにあることを確認

### Checkout Sessionの作成に失敗する
- `STRIPE_SECRET_KEY`が正しく設定されているか確認
- Price IDが正しいか確認（`price_`で始まる）
- ブラウザのコンソールでエラーを確認

### /successページに遷移しない
- `NEXT_PUBLIC_BASE_URL`が正しく設定されているか確認（本番環境のみ）
- ローカル環境では自動的に`http://localhost:3000`が使用される

### スプレッドシートにデータが反映されない
- ブラウザのコンソールログを確認
- `NEXT_PUBLIC_GAS_URL`が正しく設定されているか確認
- GASが「全員」アクセス可能に設定されているか確認
- localStorageにデータが保存されているか確認（開発者ツール → Application → Local Storage）

## 重要な注意事項

⚠️ **本番環境への移行時**
1. Stripeを本番モードに切り替え
2. 本番用のPrice IDを取得
3. 本番用のSecret Keyを取得
4. 環境変数を本番用に更新
5. `NEXT_PUBLIC_BASE_URL`を本番ドメインに設定

⚠️ **セキュリティ**
- `STRIPE_SECRET_KEY`は絶対に公開しない
- `.env.local`ファイルはGitにコミットしない
- 本番環境の環境変数はVercelの設定画面でのみ管理

## まとめ

この修正により、決済完了後に確実にスプレッドシートへデータが反映されるようになりました。

**変更点:**
- ✅ Payment Link → Checkout Session に変更
- ✅ 決済成功後に `/success` ページへ自動リダイレクト
- ✅ スプレッドシートへのデータ送信が確実に実行される
- ✅ より柔軟な決済フロー管理が可能

---

**作成日**: 2025年11月8日

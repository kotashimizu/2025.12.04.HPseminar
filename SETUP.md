# 🚀 環境変数セットアップガイド

## 必要な環境変数

プロジェクトルートに `.env.local` ファイルを作成し、以下の環境変数を設定してください。

```bash
# ========================
# Stripe 決済リンク設定
# ========================

# 早割価格（最初の10名様限定）: ¥2,980
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY=https://buy.stripe.com/test_xxxxx

# 通常価格（11名以降）: ¥3,480
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR=https://buy.stripe.com/test_xxxxx

# ========================
# Google Apps Script 設定
# ========================

# GAS WebアプリのURL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# ========================
# セミナー設定
# ========================

# 定員（デフォルト: 30名）
NEXT_PUBLIC_SEMINAR_CAPACITY=30

# 早割適用人数（デフォルト: 10名）
NEXT_PUBLIC_EARLY_BIRD_LIMIT=10
```

---

## Stripe決済リンクの作成

### 早割価格（¥2,980）の作成

1. Stripeダッシュボードにログイン
2. 「商品」→「商品を追加」
3. 商品情報を入力：
   - 商品名: `AI初心者のためのホームページ作成セミナー（早割）`
   - 説明: `先着10名様限定の早割価格`
   - 価格: `2980` JPY
   - 支払いタイプ: 1回限り
4. 「支払いリンクを作成」をクリック
5. 作成されたURLを `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY` に設定

### 通常価格（¥3,480）の作成

1. Stripeダッシュボードで同様の手順
2. 商品情報を入力：
   - 商品名: `AI初心者のためのホームページ作成セミナー（通常価格）`
   - 説明: `11名以降の通常価格`
   - 価格: `3480` JPY
   - 支払いタイプ: 1回限り
3. 「支払いリンクを作成」をクリック
4. 作成されたURLを `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR` に設定

---

## Google Apps Script設定

### 1. スプレッドシートの作成

1. [Googleスプレッドシート](https://sheets.google.com)で新規作成
2. シート名を「セミナー申込者リスト」に変更

### 2. Apps Scriptのデプロイ

1. スプレッドシートで「拡張機能」→「Apps Script」
2. `gas-script.js` の内容をコピー＆ペースト
3. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」
4. 設定：
   - **次のユーザーとして実行**: 自分
   - **アクセスできるユーザー**: 全員
5. 「デプロイ」をクリック
6. デプロイURLをコピーして `.env.local` に設定

### 3. スプレッドシートの列構成

GASが自動的に以下の列を作成します：

| 列 | 項目 | 説明 |
|----|------|------|
| A | タイムスタンプ | 申込日時 |
| B | 氏名 | 申込者の名前 |
| C | メールアドレス | 申込者のメール |
| D | 適用価格 | ¥2,980 または ¥3,480 |
| E | 決済ステータス | 未決済 / 決済完了 |

---

## 動作確認

### 1. 開発サーバーの起動

```bash
npm run dev
```

### 2. ブラウザで確認

http://localhost:3000 を開いて以下を確認：

- ✅ 早割価格の表示（¥2,980）
- ✅ 残席情報の表示
- ✅ フォームの動作
- ✅ Stripe決済ページへの遷移

### 3. テスト決済

Stripeのテストカードで決済をテスト：

- カード番号: `4242 4242 4242 4242`
- 有効期限: 任意の未来の日付（例：12/30）
- CVC: 任意の3桁（例：123）

### 4. GASの確認

1. Googleスプレッドシートを開く
2. 申込データが記録されているか確認
3. 適用価格が正しいか確認

---

## トラブルシューティング

### 環境変数が反映されない

```bash
# 開発サーバーを再起動
npm run dev
```

### GASエラー「権限がありません」

1. Apps Scriptエディタで「実行」→「関数を実行」→「doPost」
2. 権限を許可

### 決済リンクに遷移しない

1. `.env.local` の決済リンクURLを確認
2. Stripeダッシュボードでリンクが有効か確認

---

## 本番環境へのデプロイ

### Vercel環境変数の設定

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Environment Variables」
3. 以下を追加：
   - `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY`
   - `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR`
   - `NEXT_PUBLIC_GAS_URL`
   - `NEXT_PUBLIC_SEMINAR_CAPACITY`
   - `NEXT_PUBLIC_EARLY_BIRD_LIMIT`

### 本番用Stripeリンクの作成

⚠️ **重要**: 本番環境では**テストモードではなく本番モード**のStripeリンクを使用してください！

1. Stripeダッシュボードで「本番環境に切り替え」
2. 上記と同じ手順で商品と決済リンクを作成
3. Vercelの環境変数に本番リンクを設定

---

## セキュリティ注意事項

- ⚠️ `.env.local` ファイルは**絶対にGitにコミットしない**
- ⚠️ 決済リンクURLは公開されても問題ないが、Stripeシークレットキーは**絶対に公開しない**
- ⚠️ GAS URLは「全員」アクセス可能だが、セキュリティ上問題のあるデータは保存しない

---

## サポート

問題が発生した場合：

1. [Stripe ドキュメント](https://stripe.com/docs)
2. [Google Apps Script ガイド](https://developers.google.com/apps-script)
3. [Next.js ドキュメント](https://nextjs.org/docs)

---

**セットアップ完了後、素晴らしいセミナーサイトの完成です！** 🎉


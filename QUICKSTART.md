# 🚀 クイックスタートガイド

このガイドに従えば、5分でローカル環境を立ち上げられます！

## ステップ1: 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成します：

```bash
# .env.localファイルを作成
touch .env.local
```

以下の内容をコピー＆ペーストしてください：

```bash
# Stripe API Keys（後で設定）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY

# 既に作成済みの価格ID
NEXT_PUBLIC_STRIPE_PRICE_ID=price_1SQTKmIeL5Sb4fWhbQ7DpugQ

# GAS URL（後で設定）
NEXT_PUBLIC_GAS_URL=
```

## ステップ2: 開発サーバーを起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

**これだけで、ランディングページが表示されます！** 🎉

---

## 次のステップ（本番化）

開発サーバーが起動したら、以下の順番で設定を進めてください：

### 1️⃣ Stripe設定（5分）

1. https://stripe.com/jp でアカウント作成
2. ダッシュボードで「開発者」→「APIキー」を開く
3. `.env.local` に公開可能キーとシークレットキーを設定

**テスト決済リンク（既に作成済み）:**
- `https://buy.stripe.com/test_dRm4gzfWd3Onde1bAQfw400`
- テストカード: `4242 4242 4242 4242`

### 2️⃣ Google Apps Script設定（10分）

1. https://sheets.google.com で新しいスプレッドシート作成
2. 「拡張機能」→「Apps Script」を開く
3. `gas-script.js` の内容をコピー＆ペースト
4. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」
5. 「アクセスできるユーザー」→「全員」
6. デプロイURLを `.env.local` の `NEXT_PUBLIC_GAS_URL` に設定
7. 開発サーバーを再起動: `npm run dev`

### 3️⃣ 動作確認（3分）

1. http://localhost:3000 にアクセス
2. 申込みフォームに入力
3. 決済ページに遷移することを確認
4. テストカードで決済
5. スプレッドシートにデータが記録されることを確認

### 4️⃣ Vercelデプロイ（5分）

```bash
# Gitにコミット
git add .
git commit -m "Initial commit"
git push

# Vercelにデプロイ
# 1. https://vercel.com にログイン
# 2. 「New Project」→ GitHubリポジトリを選択
# 3. 環境変数を設定（.env.localの内容をコピー）
# 4. 「Deploy」をクリック
```

---

## 📝 カスタマイズポイント

最低限、以下を変更してください：

### 1. セミナー情報（`app/page.tsx`）
- セミナー名
- 開催日時
- 参加費
- セミナー内容
- 講師情報

### 2. 法的ページ（`app/privacy/page.tsx`, `app/legal/page.tsx`）
- 会社名
- 住所
- 電話番号
- メールアドレス

### 3. メタデータ（`app/layout.tsx`）
- サイトタイトル
- ディスクリプション

---

## 🆘 困ったときは

### 開発サーバーが起動しない
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### フォーム送信がエラーになる
- ブラウザのコンソールを確認
- GAS URLが正しいか確認
- GASのアクセス権限を確認

### 決済ページに遷移しない
- Stripeの決済リンクが正しいか確認
- ブラウザのポップアップブロックを無効化

---

## 📚 詳細なドキュメント

- **詳細セットアップ**: `README.md`
- **環境変数設定**: `ENV_TEMPLATE.md`
- **GASスクリプト**: `gas-script.js`

---

## ✅ チェックリスト

開発開始前に確認：
- [ ] Node.js がインストールされている（v18以上推奨）
- [ ] npm install が完了している
- [ ] .env.local ファイルを作成した

本番公開前に確認：
- [ ] Stripe APIキーを本番用に切り替えた
- [ ] GASが正常に動作している
- [ ] プライバシーポリシーと特商法ページを編集した
- [ ] セミナー情報（日時、金額等）を確認した
- [ ] テスト決済が成功した
- [ ] 本番環境でフォーム送信をテストした

---

**準備ができたら、開発を楽しんでください！** 🎉

何か問題があれば、README.mdのトラブルシューティングセクションを参照してください。


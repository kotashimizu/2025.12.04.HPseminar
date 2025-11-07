# 🚢 デプロイガイド - Vercel編

このガイドでは、プロジェクトをVercelにデプロイする手順を説明します。

---

## 📋 事前準備

デプロイ前に、以下を確認してください：

### ✅ チェックリスト
- [ ] ローカル環境で正常に動作している
- [ ] Stripe本番APIキーを取得済み
- [ ] Google Apps Scriptをデプロイ済み
- [ ] プライバシーポリシー・特商法ページを編集済み
- [ ] セミナー情報（日時、金額等）が正確
- [ ] GitHubアカウントを持っている
- [ ] Vercelアカウントを持っている

---

## ステップ1: Gitリポジトリの作成

### 1-1. GitHubで新しいリポジトリを作成

1. https://github.com/new にアクセス
2. リポジトリ名を入力（例: `ai-seminar-lp`）
3. **Private** を選択（公開したくない場合）
4. 「Create repository」をクリック

### 1-2. ローカルリポジトリをプッシュ

```bash
# 初期化（既に実行済みの場合はスキップ）
git init

# すべてのファイルを追加
git add .

# コミット
git commit -m "Initial commit: AI seminar landing page"

# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# プッシュ
git branch -M main
git push -u origin main
```

---

## ステップ2: Vercelでプロジェクトをインポート

### 2-1. Vercelにログイン

1. https://vercel.com にアクセス
2. 「Sign Up」または「Log In」
3. GitHubアカウントで認証

### 2-2. 新しいプロジェクトを作成

1. ダッシュボードで「Add New...」→「Project」をクリック
2. 「Import Git Repository」から先ほど作成したリポジトリを選択
3. 「Import」をクリック

### 2-3. プロジェクト設定

以下の設定を確認：

- **Framework Preset**: Next.js（自動検出）
- **Root Directory**: `./`（デフォルト）
- **Build Command**: `npm run build`（自動設定）
- **Output Directory**: `.next`（自動設定）

---

## ステップ3: 環境変数の設定

### 3-1. 環境変数を追加

「Environment Variables」セクションで、以下の変数を追加します：

#### 必須の環境変数

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_xxx` | Stripe公開可能キー（本番用） |
| `STRIPE_SECRET_KEY` | `sk_live_xxx` | Stripeシークレットキー（本番用） |
| `NEXT_PUBLIC_STRIPE_PRICE_ID` | `price_xxx` | Stripe価格ID |
| `NEXT_PUBLIC_GAS_URL` | `https://script.google.com/...` | GAS WebアプリURL |

#### 環境変数の設定方法

1. 「Name」に変数名を入力
2. 「Value」に値を入力
3. 「Add」をクリック
4. すべての変数を追加

⚠️ **重要**: 
- 本番環境では `pk_live_` と `sk_live_` で始まるキーを使用
- テストキー（`pk_test_`, `sk_test_`）は使用しない

---

## ステップ4: デプロイ実行

### 4-1. デプロイ開始

「Environment Variables」の設定が完了したら：

1. 「Deploy」ボタンをクリック
2. ビルドプロセスが開始されます（2-3分）
3. 完了するまで待ちます

### 4-2. デプロイ完了

✅ デプロイが成功すると：
- 本番URLが発行されます（例: `https://your-project.vercel.app`）
- 自動的にHTTPSが有効化されます
- グローバルCDNで配信されます

---

## ステップ5: 本番環境の動作確認

### 5-1. サイトの表示確認

1. デプロイ完了後のURLにアクセス
2. ランディングページが正しく表示されるか確認
3. すべてのセクションがスクロールできるか確認
4. プライバシーポリシー・特商法ページが表示されるか確認

### 5-2. フォーム送信テスト

1. 申込みフォームに実際のデータを入力
2. 「申し込む」ボタンをクリック
3. Stripe決済ページに遷移することを確認
4. **テストカードを使用しないでください！本番環境です**

### 5-3. 決済テスト（慎重に！）

⚠️ **注意**: 本番環境では実際に決済されます

テストする場合は：
- 最小金額で実施
- テスト後すぐに返金処理

または：
- 決済せずに、ページ遷移だけを確認

### 5-4. GAS連携確認

1. フォームを送信
2. Googleスプレッドシートにデータが記録されるか確認
3. 記録されない場合は、GASのログを確認

---

## ステップ6: カスタムドメインの設定（オプション）

独自ドメインを使用する場合：

### 6-1. ドメインを追加

1. Vercelダッシュボードで「Settings」→「Domains」
2. 「Add」をクリック
3. ドメイン名を入力（例: `seminar.example.com`）
4. DNSレコードの設定指示が表示される

### 6-2. DNSレコードを設定

お使いのドメインレジストラ（お名前.com、ムームードメイン等）で：

```
タイプ: CNAME
ホスト: seminar（サブドメイン）
値: cname.vercel-dns.com
```

または

```
タイプ: A
ホスト: @（ルートドメイン）
値: 76.76.21.21
```

### 6-3. 反映を待つ

- DNS設定の反映には最大48時間かかる場合があります
- 通常は数分〜数時間で完了

---

## ステップ7: Stripe決済リンクの更新

本番URLが確定したら、Stripe決済リンクのリダイレクトURLを更新します。

### 7-1. 新しい決済リンクを作成（推奨）

Stripeダッシュボードで：

1. 「商品」→既存の商品を選択
2. 「支払いリンクを作成」
3. リダイレクトURL: `https://your-domain.com/success`
4. 作成した決済リンクをコピー

### 7-2. コードを更新

`app/components/ApplicationForm.tsx` の `STRIPE_PAYMENT_LINK` を更新：

```typescript
const STRIPE_PAYMENT_LINK = '新しい決済リンクURL';
```

### 7-3. 再デプロイ

```bash
git add .
git commit -m "Update Stripe payment link"
git push
```

Vercelが自動的に再デプロイします。

---

## 🔧 Vercel設定のベストプラクティス

### セキュリティ設定

1. **環境変数の暗号化**: 自動で暗号化されます
2. **HTTPSの強制**: 自動で有効化されます
3. **CORS設定**: 必要に応じて設定

### パフォーマンス最適化

1. **画像最適化**: Next.js Image コンポーネントを使用
2. **CDN配信**: 自動で有効化
3. **圧縮**: 自動で有効化

---

## 📊 デプロイ後の監視

### Vercel Analytics（オプション）

1. Vercelダッシュボードで「Analytics」タブ
2. 「Enable Analytics」をクリック
3. アクセス数、パフォーマンスを監視

### エラーログの確認

1. Vercelダッシュボードで「Deployments」タブ
2. 最新のデプロイをクリック
3. 「Runtime Logs」でエラーを確認

---

## 🐛 トラブルシューティング

### ビルドエラーが発生する

```bash
# ローカルでビルドテスト
npm run build

# エラーを修正後
git add .
git commit -m "Fix build errors"
git push
```

### 環境変数が反映されない

1. Vercelダッシュボードで「Settings」→「Environment Variables」
2. 変数が正しく設定されているか確認
3. 変更後、「Redeploy」をクリック

### 決済ページに遷移しない

1. ブラウザのコンソールでエラーを確認
2. Stripe APIキーが本番用か確認
3. 決済リンクURLが正しいか確認

### GASにデータが送信されない

1. GAS URLが正しいか確認
2. GASのアクセス権限が「全員」になっているか確認
3. GASのログを確認（Apps Scriptエディタ）

---

## 🔄 継続的デプロイ（CI/CD）

Vercelは自動的にCI/CDを設定します：

- **main ブランチへのプッシュ**: 本番環境に自動デプロイ
- **その他のブランチ**: プレビュー環境を自動作成
- **Pull Request**: プレビューURLが自動生成

### ブランチ戦略（推奨）

```bash
# 開発ブランチを作成
git checkout -b develop

# 機能追加
git add .
git commit -m "Add new feature"
git push origin develop

# GitHubでPull Requestを作成
# プレビューURLで確認後、mainにマージ
```

---

## 📈 本番運用のヒント

### 定期的なバックアップ

1. Googleスプレッドシートのバックアップ
2. データベースのバックアップ（使用している場合）

### セキュリティアップデート

```bash
# 定期的に依存関係を更新
npm outdated
npm update
npm audit fix
```

### パフォーマンスモニタリング

- Vercel Analyticsで監視
- Google Analyticsを追加（オプション）

---

## 🎉 デプロイ完了！

お疲れ様でした！セミナーサイトが本番環境で公開されました。

次のステップ：
1. ✅ SNSで告知
2. ✅ メールマガジンで配信
3. ✅ 広告を開始
4. ✅ 申込者リストを確認

セミナーの成功を祈っています！🚀

---

## 📞 サポート

問題が発生した場合：
- Vercel ドキュメント: https://vercel.com/docs
- Stripe ドキュメント: https://stripe.com/docs
- Next.js ドキュメント: https://nextjs.org/docs


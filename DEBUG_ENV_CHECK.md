# 環境変数デバッグチェック

## 問題
「決済設定に問題があります。管理者にお問い合わせください。」エラーが表示される

## 原因
`NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR` 環境変数がビルド時に読み込まれていない

## 確認手順

### 1. ブラウザコンソールでログを確認

F12を押してConsoleタブで以下を確認：

```
使用するPrice ID: （空白の場合、環境変数が未設定）
現在の参加人数: 10
適用価格: 6980
```

### 2. 環境変数が設定されているか確認

Vercel Dashboard → プロジェクト → Settings → Environment Variables

確認項目：
- `NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR` が存在するか
- 値が `price_` で始まる正しいIDか
- **どの環境に設定されているか**
  - ✅ Production
  - ✅ Preview
  - ✅ Development

### 3. どのブランチがデプロイされているか確認

Vercel Dashboard → Deployments

- 最新のデプロイがどのブランチか確認
- `claude/fix-payment-sheet-sync-011CUvQC5dSudYRXt88Cxt2o` ブランチの場合、**Preview環境**
- `main` ブランチの場合、**Production環境**

## 解決方法

### Preview環境（ブランチデプロイ）の場合

環境変数が **Preview** 環境に設定されていない可能性が高いです。

**解決策A: Preview環境にも環境変数を設定**
1. Vercel → Settings → Environment Variables
2. `NEXT_PUBLIC_STRIPE_PRICE_ID_REGULAR` を編集
3. Environment: **Preview** にもチェックを入れる
4. Save
5. Deployments → 最新のデプロイ → Redeploy

**解決策B: mainブランチにマージして本番デプロイ**
1. GitHubで以下のURLを開く:
   ```
   https://github.com/kotashimizu/2025.12.04.HPseminar/compare/main...claude/fix-payment-sheet-sync-011CUvQC5dSudYRXt88Cxt2o
   ```
2. Create pull request → Merge pull request
3. Vercelが自動的に本番デプロイ（Production環境変数が使用される）

## 重要な注意点

⚠️ **環境変数の変更後は必ず再デプロイが必要**

環境変数を追加・変更しただけでは反映されません。以下のいずれかを実行：

- Vercel Dashboard → Deployments → Redeploy
- 新しいコミットをプッシュ
- または空コミット: `git commit --allow-empty -m "Trigger redeploy" && git push`

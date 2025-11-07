# Stripe決済設定完了のお知らせ

## 🎉 設定完了事項

現在ログインされているStripeアカウントで、以下の設定が完了しました。

### ✅ 作成された商品と価格

1. **早割価格（最初の10名）**
   - 商品名: ホームページ作成セミナー参加費（早割）
   - 価格: ¥4,980
   - 決済リンク: `https://buy.stripe.com/test_28E4gygrZg0632u3pX38402`

2. **通常価格（11名以降）**
   - 商品名: ホームページ作成セミナー参加費（通常価格）
   - 価格: ¥6,980
   - 決済リンク: `https://buy.stripe.com/test_eVq28qgrZbJQ0Um8Kh38403`

### 🎯 セミナー設定

- **定員**: 30名
- **早割枠**: 最初の10名
- **早割価格**: ¥4,980
- **通常価格**: ¥6,980

---

## 📁 更新されたファイル

### 1. `.env.local` (新規作成)
環境変数ファイル。Stripe決済リンクとセミナー設定を管理します。

```env
# Stripe決済リンク
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY=https://buy.stripe.com/test_28E4gygrZg0632u3pX38402
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR=https://buy.stripe.com/test_eVq28qgrZbJQ0Um8Kh38403

# セミナーの定員と早割枠
NEXT_PUBLIC_SEMINAR_CAPACITY=30
NEXT_PUBLIC_EARLY_BIRD_LIMIT=10
```

### 2. `app/components/ApplicationForm.tsx` (更新)
申込みフォームを大幅に機能強化しました：

**追加機能:**
- ✨ 参加人数に応じた自動価格切り替え（早割 → 通常価格）
- ✨ リアルタイムの残席表示
- ✨ 満員時の自動受付停止
- ✨ 早割残り人数の表示
- ✨ 視覚的な価格・残席情報ボックス

**仕組み:**
```
参加人数 < 10名  → 早割価格 ¥4,980 を使用
参加人数 >= 10名 → 通常価格 ¥6,980 を使用
参加人数 >= 30名 → 満員表示＆受付停止
```

### 3. `app/page.tsx` (更新)
ランディングページの価格表示を更新：

- 日時: 2025年12月15日（日）13:00～16:00
- 定員: 30名
- 参加費: 早割 ¥4,980 / 通常 ¥6,980

---

## 🔧 現在の状態

### ⚠️ テストモードで動作中

- 現在、Stripeは**テストモード**で設定されています
- URLに `test_` が含まれているため、実際の決済は発生しません
- テスト用のカード番号でのみ決済可能です

**テストカード番号:**
- カード番号: `4242 4242 4242 4242`
- 有効期限: 任意の未来の日付（例: 12/34）
- CVC: 任意の3桁（例: 123）

### 📊 参加人数の管理（今後の対応）

現在、参加人数は「0名」からスタートする設定になっています。

**将来の実装予定:**
```typescript
// TODO: GASから実際の参加人数を取得する処理を実装
// app/components/ApplicationForm.tsx の44-49行目
```

Google Apps Script (GAS) を設定することで：
1. 申込時にGASに顧客情報を保存
2. GASで参加人数をカウント
3. フォーム読み込み時にGASから現在の参加人数を取得
4. 自動的に適切な価格を表示

---

## 🚀 本番環境への移行手順

本番運用を開始する際は、以下の手順を実施してください：

### Step 1: Stripeを本番モードに切り替え

1. [Stripe Dashboard](https://dashboard.stripe.com/)にログイン
2. 右上のトグルを「テストモード」→「本番モード」に切り替え
3. 同じ商品・価格を本番モードで作成
4. 新しい決済リンクを取得

### Step 2: 環境変数を更新

`.env.local` ファイルの決済リンクを本番用に変更：

```env
# 本番用のリンクに変更（test_ が含まれないURL）
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_EARLY=https://buy.stripe.com/【本番用ID】
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_REGULAR=https://buy.stripe.com/【本番用ID】
```

### Step 3: Vercelなどのホスティングサービスで環境変数を設定

Vercelを使用する場合：
1. Vercelダッシュボードでプロジェクトを選択
2. Settings → Environment Variables
3. `.env.local` と同じ環境変数を設定
4. 再デプロイ

---

## 💡 よくある質問

### Q1: 10名に達したら自動的に価格が切り替わりますか？

**A:** はい！参加人数が10名に達すると、次の申込者から自動的に ¥6,980 の決済リンクが使用されます。

ただし、現在は参加人数を手動で管理する必要があります。Google Apps Script を設定することで、完全自動化が可能です。

### Q2: 手動で価格を切り替える方法は？

**A:** `.env.local` ファイルで参加人数を手動設定できます（開発用）：

```typescript
// app/components/ApplicationForm.tsx で直接変更
setCurrentParticipants(10); // 10名として扱う → 通常価格が適用される
```

### Q3: 定員を変更したい場合は？

**A:** `.env.local` ファイルの値を変更してください：

```env
NEXT_PUBLIC_SEMINAR_CAPACITY=50  # 定員を50名に変更
NEXT_PUBLIC_EARLY_BIRD_LIMIT=20  # 早割を20名に変更
```

---

## 📝 次のステップ（オプション）

1. **Google Apps Script の設定**
   - 申込情報をスプレッドシートに自動保存
   - 参加人数の自動カウント
   - 残席情報の自動更新

2. **メール通知の設定**
   - Stripe Webhookを使った自動メール送信
   - 申込完了メール
   - 領収書の自動発行

3. **アナリティクス設定**
   - Google Analyticsで申込状況を追跡
   - コンバージョン率の測定

---

## 📞 サポート

質問や問題が発生した場合は、お気軽にお問い合わせください！

---

**作成日:** 2025年11月6日  
**最終更新:** 2025年11月6日


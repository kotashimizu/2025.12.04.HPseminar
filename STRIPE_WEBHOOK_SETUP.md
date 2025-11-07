# Stripe Webhook 設定ガイド（決済ステータス自動更新）

このガイドでは、Stripe決済完了時に自動的にスプレッドシートの決済ステータスを更新する仕組みを設定します。

---

## 🎯 Webhookとは

**Webhook（ウェブフック）** は、Stripeから「決済が完了しました」という通知を受け取る仕組みです。

### メリット
- ✅ 決済完了時に自動的にステータス更新
- ✅ 手動作業が不要
- ✅ リアルタイムで状態を同期

---

## ⚠️ 現在の制限

**重要**: ローカル環境（localhost）では、Stripe Webhookを直接受け取ることができません。

### 解決策

以下の2つの方法があります：

#### 方法1: Stripe CLI を使用（開発環境）
- ローカル環境でもWebhookをテスト可能
- やや複雑

#### 方法2: 本番環境（Vercel等）でのみ設定
- 本番デプロイ後に設定
- シンプル

**推奨**: まずは手動更新で運用し、本番環境デプロイ後にWebhookを設定

---

## 📋 Webhook設定手順（本番環境用）

### Step 1: Webhook用のAPIエンドポイントを作成

プロジェクトに新しいファイルを作成します：

**ファイルパス**: `app/api/stripe-webhook/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // 決済完了イベントを処理
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_email || session.customer_details?.email;

    if (customerEmail) {
      // GASのupdatePaymentStatus関数を呼び出す
      try {
        const gasUrl = process.env.NEXT_PUBLIC_GAS_URL;
        if (gasUrl) {
          await fetch(`${gasUrl}?action=updatePayment&email=${encodeURIComponent(customerEmail)}`, {
            method: 'POST',
          });
        }
      } catch (error) {
        console.error('Failed to update payment status:', error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
```

### Step 2: GASスクリプトに処理を追加

`gas-script.js` の `doGet` 関数を以下のように修正：

```javascript
function doGet(e) {
  try {
    // Webhookからの決済ステータス更新リクエスト
    if (e.parameter.action === 'updatePayment' && e.parameter.email) {
      const email = e.parameter.email;
      const result = updatePaymentStatus(email, '決済完了');
      
      return ContentService
        .createTextOutput(JSON.stringify({ success: result }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 通常の参加人数取得
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    const participantCount = lastRow > 0 ? lastRow - 1 : 0;
    
    const response = {
      count: participantCount,
      capacity: 30,
      earlyBirdLimit: 10,
      isEarlyBird: participantCount < 10,
      currentPrice: participantCount < 10 ? 4980 : 6980
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: 環境変数を設定

`.env.local` に追加：

```env
# Stripeのシークレットキー（ダッシュボードから取得）
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# WebhookシークレットキーStripeダッシュボードで取得）
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

### Step 4: StripeダッシュボードでWebhookを設定

1. [Stripe Dashboard](https://dashboard.stripe.com/) にログイン
2. **「開発者」→「Webhook」** をクリック
3. **「エンドポイントを追加」** をクリック
4. 以下を入力：
   - エンドポイントURL: `https://あなたのドメイン.com/api/stripe-webhook`
   - リッスンするイベント: `checkout.session.completed`
5. **「エンドポイントを追加」** をクリック
6. **署名シークレット**をコピーして、`.env.local` に設定

---

## 🧪 テスト方法

### ローカル環境でのテスト（Stripe CLI使用）

```bash
# Stripe CLIをインストール
brew install stripe/stripe-cli/stripe

# Stripeにログイン
stripe login

# Webhookをフォワード
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

### 本番環境でのテスト

1. 実際に決済を実行
2. Stripeダッシュボードで「Webhook」→「最近のイベント」を確認
3. スプレッドシートで決済ステータスが自動更新されることを確認

---

## 📝 まとめ

### 現在の状況

| 機能 | 状態 | 更新方法 |
|------|------|----------|
| 申込情報の保存 | ✅ 動作中 | 自動 |
| 決済処理 | ✅ 動作中 | Stripe |
| 決済ステータス更新 | ⚠️ 手動 | スプレッドシートで手動変更 |

### Webhook実装後

| 機能 | 状態 | 更新方法 |
|------|------|----------|
| 申込情報の保存 | ✅ 動作中 | 自動 |
| 決済処理 | ✅ 動作中 | Stripe |
| 決済ステータス更新 | ✅ 動作中 | **自動（Webhook）** |

---

**推奨**: まずは本ガイドの「Step 1」のリダイレクト設定のみを実施し、Webhookは本番デプロイ後に設定することをお勧めします。

---

**作成日**: 2025年11月6日  
**最終更新**: 2025年11月6日


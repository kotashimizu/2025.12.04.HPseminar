import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, priceId } = body;

    // リクエストの検証
    if (!email || !name || !priceId) {
      return NextResponse.json(
        { error: 'メールアドレス、名前、価格IDが必要です' },
        { status: 400 }
      );
    }

    // ベースURLを取得（本番/開発環境で自動切り替え）
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
                    req.headers.get('origin') ||
                    'http://localhost:3000';

    // Checkout Sessionを作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/?canceled=true`,
      customer_email: email,
      metadata: {
        customer_name: name,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout Session作成エラー:', error);
    return NextResponse.json(
      { error: 'セッションの作成に失敗しました' },
      { status: 500 }
    );
  }
}

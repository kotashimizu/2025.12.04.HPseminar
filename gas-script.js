/**
 * Google Apps Script (GAS) - ホームページ作成セミナー申込み情報管理
 * 
 * 【セットアップ手順】
 * 1. Googleスプレッドシートを作成
 * 2. 「拡張機能」→「Apps Script」を開く
 * 3. このコードを貼り付け
 * 4. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」として公開
 * 5. 「次のユーザーとして実行」→「自分」
 * 6. 「アクセスできるユーザー」→「全員」
 * 7. デプロイURLをコピーして、.env.localの NEXT_PUBLIC_GAS_URL に設定
 * 
 * 【スプレッドシートの列構成】
 * A列: タイムスタンプ（申込日時）
 * B列: 氏名
 * C列: メールアドレス
 * D列: 適用価格（¥4,980 または ¥6,980）
 * E列: 決済ステータス（初期値：未決済）
 */

/**
 * POSTリクエストを処理する関数
 * Webサイトからフォームデータが送信されたときに実行される
 */
function doPost(e) {
  try {
    // スプレッドシートを取得（現在のスプレッドシート）
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // ヘッダー行がない場合は作成
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'タイムスタンプ',
        '氏名',
        'メールアドレス',
        '適用価格',
        '決済ステータス'
      ]);
      
      // ヘッダー行を装飾
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setBackground('#3b82f6'); // 青色
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
    }
    
    // リクエストボディからJSONデータを取得
    const data = JSON.parse(e.postData.contents);
    
    // スプレッドシートに新しい行を追加
    sheet.appendRow([
      new Date(data.timestamp),     // タイムスタンプ
      data.name,                    // 氏名
      data.email,                   // メールアドレス
      `¥${data.price || 6980}`,    // 適用価格
      '未決済'                      // 決済ステータス（初期値）
    ]);
    
    // メール送信（有効化済み）
    // 申込み確認メールを自動送信
    MailApp.sendEmail({
      to: data.email,
      subject: '【AI初心者のためのホームページ作成セミナー】お申し込みありがとうございます',
      body: `
${data.name} 様

この度は「AI初心者のためのホームページ作成セミナー」にお申し込みいただき、誠にありがとうございます。

━━━━━━━━━━━━━━━━━━━━━━━━━
 📅 セミナー情報
━━━━━━━━━━━━━━━━━━━━━━━━━

日時：2025年12月4日（水）21:00〜22:30
形式：オンライン開催（Zoom）
定員：最大30名（先着順）
適用価格：¥${data.price || 6980}（税込）

━━━━━━━━━━━━━━━━━━━━━━━━━
 🎁 参加者限定特典（総額¥28,000相当）
━━━━━━━━━━━━━━━━━━━━━━━━━

✅ カスタムGPTs×2（¥15,000相当）
   ホームページ制作に特化した2つのGPTs

✅ 質問し放題（¥10,000相当）
   セミナー後2週間、質問サポート

✅ 録画視聴OK（¥3,000相当）
   復習に最適な録画データ

━━━━━━━━━━━━━━━━━━━━━━━━━
 📝 このセミナーでできること
━━━━━━━━━━━━━━━━━━━━━━━━━

✓ ChatGPT × Readdy でホームページ・LP作成をたった2時間でマスター
✓ 専門知識ゼロでもプロ品質のホームページが完成
✓ 高額な制作費（30〜50万円）を払わずに自分で作成できる
✓ 一度覚えれば追加コストなしで複数サイトを作成可能

━━━━━━━━━━━━━━━━━━━━━━━━━
 🚀 次のステップ
━━━━━━━━━━━━━━━━━━━━━━━━━

【1】決済を完了してください
→ 決済完了後、このメールアドレスに領収書が届きます

【2】Zoomリンクをお送りします
→ セミナー前日（12月3日）にメールでお送りいたします

【3】準備物をご用意ください
→ ノートPC、インターネット環境

【4】セミナー当日をお楽しみに！
→ ChatGPTアカウント（無料版でOK）があるとスムーズです

━━━━━━━━━━━━━━━━━━━━━━━━━

【ご注意】
※ ホームページ公開には別途ツール利用料が必要です
  （月額約3,000円、初期費用1,000〜2,000円程度）
※ セミナーではホームページの作り方を学びます

【お問い合わせ】
ご不明な点がございましたら、このメールに返信してお問い合わせください。

セミナーでお会いできることを楽しみにしております！

━━━━━━━━━━━━━━━━━━━━━━━━━
主催：みかわAI学校 by ICHI.
━━━━━━━━━━━━━━━━━━━━━━━━━
      `
    });
    
    // 成功レスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'データが正常に保存されました'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // エラーレスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GETリクエストを処理する関数
 * ブラウザでURLにアクセスしたときに現在の参加人数を返す
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    // ヘッダー行を除いた参加人数
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

/**
 * Stripe Webhookからの決済完了通知を処理する関数
 * Stripeで決済が完了したときに実行される
 * 
 * 【使い方】
 * 別のGASプロジェクトとして作成し、Stripe Webhookから呼び出す
 */
function updatePaymentStatus(email, status = '決済完了') {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  // メールアドレスで該当行を検索
  for (let i = 2; i <= lastRow; i++) {
    const rowEmail = sheet.getRange(i, 3).getValue(); // C列（メールアドレス）
    
    if (rowEmail === email) {
      // 決済ステータスを更新（E列）
      sheet.getRange(i, 5).setValue(status);
      
      // 更新日時を記録（オプション）
      // sheet.getRange(i, 6).setValue(new Date());
      
      Logger.log(`決済ステータスを更新しました: ${email}`);
      return true;
    }
  }
  
  Logger.log(`該当するメールアドレスが見つかりません: ${email}`);
  return false;
}

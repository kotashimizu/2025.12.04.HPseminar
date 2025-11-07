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
 * D列: 適用価格（¥2,980 または ¥3,480）
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
      `¥${data.price || 3480}`,    // 適用価格
      '未決済'                      // 決済ステータス（初期値）
    ]);
    
    // メール送信（オプション）
    // 申込み確認メールを自動送信する場合はコメントを外す
    /*
    MailApp.sendEmail({
      to: data.email,
      subject: '【AI初心者のためのホームページ作成セミナー】お申し込みありがとうございます',
      body: `
${data.name} 様

この度は「AI初心者のためのホームページ作成セミナー」にお申し込みいただき、ありがとうございます。

【セミナー情報】
日時：2025年12月4日（水）21:00〜22:30
形式：オンライン（Zoom）
適用価格：¥${data.price || 3480}（税込）

決済完了後、別途Zoomリンクをお送りいたします。
セミナー当日をお楽しみに！

ご不明な点がございましたら、このメールに返信してお問い合わせください。

よろしくお願いいたします。

---
AI初心者のためのホームページ作成セミナー運営事務局
      `
    });
    */
    
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
 * GETリクエストを処理する関数（動作確認用）
 * ブラウザでURLにアクセスしたときに実行される
 */
function doGet() {
  return ContentService.createTextOutput('GASが正常に動作しています！');
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

/**
 * 現在の参加人数を取得する関数
 * Webアプリから呼び出される（GET リクエスト）
 */
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  // ヘッダー行を除いた参加人数
  const participantCount = lastRow > 0 ? lastRow - 1 : 0;
  
  const response = {
    count: participantCount,
    capacity: 30,
    earlyBirdLimit: 10,
    isEarlyBird: participantCount < 10,
    currentPrice: participantCount < 10 ? 2980 : 3480
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}


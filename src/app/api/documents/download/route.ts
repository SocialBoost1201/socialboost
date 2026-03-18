import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { company, name, email, phone, documentTitle, pdfUrl } = data;

    if (!name || !email || !documentTitle) {
      return NextResponse.json(
        { error: '必須項目が不足しています' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.log('Skipping actual email sending for document download because RESEND_API_KEY is not set.', data);
      return NextResponse.json({ success: true, mock: true });
    }

    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'info@socialboost.jp';
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'no-reply@socialboost.jp';

    // 1. お客様への資料ダウンロード用メール
    await resend.emails.send({
      from: `SocialBoost <${fromEmail}>`,
      to: email,
      subject: `【SocialBoost】お役立ち資料のご送付：「${documentTitle}」`,
      text: `
${name} 様

この度はSocialBoostのお役立ち資料をダウンロードいただき、誠にありがとうございます。

ご要望いただきました資料「${documentTitle}」は、以下のURLよりダウンロードまたは閲覧いただけます。

▼ 資料ダウンロードURL
${pdfUrl || 'https://example.com/dummy.pdf'}

本資料が${company ? company + 'の' : '貴社の'}ビジネスの一助となれば幸いです。
何かご不明な点やWebに関するお悩みがございましたら、本メールにご返信いただくか、公式サイトのお問い合わせフォームよりお気軽にご相談ください。

━━━━━━━━━━━━━━━━━━━━━━━━━━
SocialBoost
デジタル戦略パートナー
Email: info@socialboost.jp
URL: https://socialboost.jp
━━━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    });

    // 2. 管理者へのリード獲得通知メール
    await resend.emails.send({
      from: `SocialBoost Leads <${fromEmail}>`,
      to: toEmail,
      subject: `【リード獲得】資料ダウンロード：${name}様（${company || '会社名なし'}）`,
      text: `
お役立ち資料の新規ダウンロードがありました。
リード情報としてお知らせします。

■ ダウンロードされた資料
${documentTitle}

■ お客様情報
会社名・屋号: ${company || '未入力'}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}

必要に応じてフォローアップをご検討ください。
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Document download API error:', error);
    return NextResponse.json(
      { error: 'Failed to process document download' },
      { status: 500 }
    );
  }
}

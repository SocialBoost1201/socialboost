import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vercel等の環境変数で RESEND_API_KEY を設定する前提
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { company, name, email, phone, preferred_date, type, message } = data;

    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: '必須項目が不足しています' },
        { status: 400 }
      );
    }

    // 環境変数が未設定の場合は成功を返す（ローカル検証・開発用モック挙動）
    if (!process.env.RESEND_API_KEY) {
      console.log('Skipping actual email sending because RESEND_API_KEY is not set.', data);
      return NextResponse.json({ success: true, mock: true });
    }

    // 管理者への通知メール
    await resend.emails.send({
      from: 'SocialBoost Contact <no-reply@socialboost.jp>',
      to: 'info@socialboost.jp',
      subject: `【お問い合わせ】${name}様より新規のご相談`,
      text: `
SocialBoost Webサイトより、新規のお問い合わせを受け付けました。

■ 会社名・屋号: ${company || '未入力'}
■ お名前: ${name}
■ メールアドレス: ${email}
■ 電話番号: ${phone || '未入力'}
■ 希望日: ${preferred_date || '未入力'}
■ ご相談種別: ${type}
■ ご相談内容:
${message}
      `,
    });

    // お客様への自動返信メール
    await resend.emails.send({
      from: 'SocialBoost <no-reply@socialboost.jp>',
      to: email,
      subject: '【SocialBoost】お問い合わせを受け付けました',
      text: `
${name} 様

この度はSocialBoostへお問い合わせいただき、誠にありがとうございます。
以下の内容でご相談を受け付けました。

内容を確認の上、担当者より1〜2営業日以内にご連絡させていただきます。

---
■ 会社名・屋号: ${company || '未入力'}
■ お名前: ${name}
■ メールアドレス: ${email}
■ 電話番号: ${phone || '未入力'}
■ 希望日: ${preferred_date || '未入力'}
■ ご相談種別: ${type}
■ ご相談内容:
${message}
---

※本メールは送信専用アドレスから自動で配信されています。
ご不明な点がございましたら、別途担当者からの連絡をお待ちください。

━━━━━━━━━━━━━━━━━━━━━━━━━━
SocialBoost
デジタル戦略パートナー
Email: info@socialboost.jp
URL: https://socialboost.jp
━━━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

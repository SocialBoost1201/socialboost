import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vercel等の環境変数で RESEND_API_KEY を設定する前提
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { company, name, email, phone, preferred_date, type, service, message } = data;

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

    // 環境変数からメールアドレスを取得（フォールバックあり）
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'info@socialboost.jp';
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'no-reply@socialboost.jp';

    // ─────────────────────────────────────────────────────────
    // 🤖 AI リード解析 ＆ 返信ドラフト生成 (GPT-4o-mini)
    // ─────────────────────────────────────────────────────────
    let aiAnalysis = "※OPENAI_API_KEYが設定されていないため、AI解析はスキップされました。";
    
    if (process.env.OPENAI_API_KEY) {
      try {
        const aiPrompt = `
あなたはSocialBoostの優秀なインサイドセールス・Webコンサルタントです。
以下の「見込み顧客（リード）からのお問い合わせ内容」を分析し、次の3点を出力してください。

1. 【受注見込み度（熱量）の判定】 高・中・低 とその理由（短く）
2. 【想定される顧客課題と、提案すべきソリューションの方向性】
3. 【この顧客にそのまま送れる一次返信メールのドラフト（叩き台）】
   ※丁寧かつ専門的で、相談日程調整へスムーズに誘導する文章にしてください。

--- お問い合わせ内容 ---
会社名・屋号: ${company || '未入力'}
お名前: ${name}
希望日: ${preferred_date || '未入力'}
ご相談種別: ${type}
希望サービス: ${service || '未選択'}
ご相談内容:
${message}
        `;

        const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: aiPrompt }],
            temperature: 0.7,
            max_tokens: 1500,
          }),
        });

        if (aiRes.ok) {
          const json = await aiRes.json();
          aiAnalysis = json.choices[0].message.content;
        } else {
          aiAnalysis = "※AI解析中にエラーが発生しました（APIステータス異常）";
        }
      } catch (err) {
        console.error("AI Analysis Error:", err);
        aiAnalysis = "※AI解析中に非同期エラーが発生しました";
      }
    }

    // 管理者への通知メール
    await resend.emails.send({
      from: `SocialBoost Contact <${fromEmail}>`,
      to: toEmail,
      subject: `【お問い合わせ】${name}様より新規のご相談`,
      text: `
SocialBoost Webサイトより、新規のお問い合わせを受け付けました。

■ 会社名・屋号: ${company || '未入力'}
■ お名前: ${name}
■ メールアドレス: ${email}
■ 電話番号: ${phone || '未入力'}
■ 希望日: ${preferred_date || '未入力'}
■ ご相談種別: ${type}
■ 希望サービス: ${service || '未選択'}
■ ご相談内容:
${message}

───────────────────────────────
🤖 AI インサイドセールス リード解析結果
───────────────────────────────
${aiAnalysis}
      `,
    });

    // お客様への自動返信メール
    await resend.emails.send({
      from: `SocialBoost <${fromEmail}>`,
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
■ 希望サービス: ${service || '未選択'}
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

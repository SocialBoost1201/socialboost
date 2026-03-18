import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { company_name, client_name, project_name, rating, comment } = data;

    if (!client_name || !comment) {
      return NextResponse.json(
        { error: '必須項目が不足しています' },
        { status: 400 }
      );
    }

    // 1. microCMS の「reviews」エンドポイントに下書き（draft）として登録
    const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY;

    let microCmsSuccess = false;
    if (serviceDomain && apiKey) {
      try {
        const payload = {
          company_name: company_name || '',
          client_name,
          project_name: project_name || '',
          rating: Number(rating) || 5,
          comment,
        };

        // status=draft を付与して下書き状態でPOSTする
        const cmsRes = await fetch(`https://${serviceDomain}.microcms.io/api/v1/reviews?status=draft`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-MICROCMS-API-KEY": apiKey,
          },
          body: JSON.stringify(payload),
        });

        if (cmsRes.ok) {
          microCmsSuccess = true;
        } else {
          console.warn("microCMSへのFeedback投稿に失敗しました", await cmsRes.text());
        }
      } catch (err) {
        console.error("microCMS Request Error:", err);
      }
    }

    // 2. 管理者へ通知メールの送信 (Resend)
    if (process.env.RESEND_API_KEY) {
      const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'info@socialboost.jp';
      const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'no-reply@socialboost.jp';

      await resend.emails.send({
        from: `SocialBoost Feedback <${fromEmail}>`,
        to: toEmail,
        subject: `【レビュー到着】お客様の声が届きました（${client_name}様）`,
        text: `
クライアントからのプロジェクト評価・レビューが届きました。
${microCmsSuccess ? "※microCMSの「reviews」APIに下書き保存されていますので、管理画面から公開してください。" : "※microCMSの設定が存在しないかエラーのため、メールのみでの通知となります。"}

■ 会社名: ${company_name || '未入力'}
■ お名前: ${client_name}
■ 対象プロジェクト: ${project_name || '未入力'}
■ 満足度評価: ${rating} / 5
■ クライアントコメント:
${comment}
        `,
      });
    }

    return NextResponse.json({ success: true, savedToCms: microCmsSuccess });
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}

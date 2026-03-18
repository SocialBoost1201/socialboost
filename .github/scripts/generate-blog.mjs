/**
 * generate-blog.mjs
 * GitHub Actions から呼び出されるAI記事自動生成スクリプト
 *
 * 必要な環境変数（GitHub Secrets）:
 *   - OPENAI_API_KEY
 *   - MICROCMS_SERVICE_DOMAIN
 *   - MICROCMS_API_KEY
 *   - MANUAL_KEYWORD (任意: workflow_dispatch時に手動指定)
 */
import fs from "fs";
import path from "path";

// ============================================================
// キーワードリスト（週次でローテーション）
// ============================================================
const KEYWORD_LIST = [
  // Web制作・LP
  "LP制作の費用相場と成功のポイント",
  "コーポレートサイトリニューアルのタイミングと方法",
  "Webサイトのコンバージョン率を上げる7つの施策",
  "BtoBサイトで問い合わせを増やすための設計術",
  "ファーストビューの重要性とデザインの法則",
  // システム・開発
  "SaaSと自社開発はどちらを選ぶべきか",
  "Next.jsとWordPressを比較：選択基準を解説",
  "小規模スタートアップのためのMVP開発戦略",
  "業務システム開発で失敗しないための要件定義術",
  // AI
  "中小企業でのChatGPT活用法・業務効率化の実例",
  "RAG（検索拡張生成）とは？社内AI構築に活用する方法",
  "AIツール導入前に確認すべき5つのポイント",
  "生成AIを使った顧客対応自動化の始め方",
  // SEO・マーケ
  "GEO（生成AI最適化）とは？SEOとの違いと対策",
  "Core Web Vitalsを改善してGoogle検索順位を上げる方法",
  "横浜・神奈川でWeb制作を依頼するならどこがいい？",
];

// カテゴリマッピング
const CATEGORY_MAP = {
  "LP制作": "Webサイト制作",
  "コーポレート": "Webサイト制作",
  "Web": "Webサイト制作",
  "LP": "Webサイト制作",
  "システム": "システム開発",
  "SaaS": "システム開発",
  "開発": "システム開発",
  "アプリ": "システム開発",
  "ChatGPT": "AI導入",
  "AI": "AI導入",
  "RAG": "AI導入",
  "生成AI": "AI導入",
  "SEO": "SEO・マーケティング",
  "GEO": "SEO・マーケティング",
  "Core Web": "SEO・マーケティング",
};

function detectCategory(keyword) {
  for (const [key, cat] of Object.entries(CATEGORY_MAP)) {
    if (keyword.includes(key)) return cat;
  }
  return "Webサイト制作";
}

function generateSlug() {
  const date = new Date().toISOString().split("T")[0]; // 2026-03-18
  const random = Math.random().toString(36).substring(2, 6);
  return `blog-${date}-${random}`;
}

// 実行時間（時間単位）でキーワードをローテーションし、同日でも被らないようにする
function pickKeyword() {
  if (process.env.MANUAL_KEYWORD) return process.env.MANUAL_KEYWORD;
  const hoursSinceEpoch = Math.floor(Date.now() / (60 * 60 * 1000));
  return KEYWORD_LIST[hoursSinceEpoch % KEYWORD_LIST.length];
}

// ============================================================
// OpenAI API で記事生成 (テキスト)
// ============================================================
async function generateArticle(keyword) {
  const systemPrompt = `あなたはSocialBoost（デジタル戦略パートナー）の専門コンテンツライターです。
BtoBの経営者・マーケター・IT担当者向けに、実践的で信頼性の高いコラム記事を書いてください。

ルール：
- 文字数: 2000〜3000字
- 見出し（h2/h3）を適切に使い、SEO・GEO対策を意識した構成にする
- 根拠のない数値は使わない
- SocialBoostのサービス（Web制作・システム開発・AI導入）への自然な誘導を末尾に1回だけ入れる
- 出力はJSON形式のみ（マークダウンや説明文は不要）

JSON形式：
{
  "title": "記事タイトル（30〜60字）",
  "description": "メタディスクリプション（80〜120字）",
  "body": "HTML形式の記事本文（h2/h3/p/ul/li/strong タグを使用）",
  "tags": ["タグ1", "タグ2", "タグ3"],
  "readTime": "約〇分"
}`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `次のキーワードで記事を書いてください：「${keyword}」` },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error: ${res.status} ${err}`);
  }

  const json = await res.json();
  const content = json.choices[0].message.content;

  // JSON部分を抽出（```json ... ``` のコードブロックにも対応）
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("OpenAI response is not valid JSON");
  return JSON.parse(match[0]);
}

// ============================================================
// DALL-E 3 でアイキャッチ画像（サムネイル）生成
// ============================================================
async function generateThumbnail(keyword, slug) {
  const prompt = `A modern, high-quality flat vector illustration representing the business concept of "${keyword}". Clean, corporate, minimalist style, suitable for a BtoB IT tech or digital strategy blog. Use a sophisticated color palette featuring deep navy blues, bright electric blues, and subtle emerald green accents. NO TEXT in the image.`;
  
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DALL-E 3 API error: ${res.status} ${err}`);
  }

  const json = await res.json();
  const imageUrl = json.data[0].url;

  // ダウンロードしてローカルに保存
  const imgRes = await fetch(imageUrl);
  const arrayBuffer = await imgRes.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const dir = path.join(process.cwd(), 'public', 'images', 'ai-blogs');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, `${slug}.png`);
  fs.writeFileSync(filePath, buffer);
  
  return `/images/ai-blogs/${slug}.png`;
}

// ============================================================
// microCMS に投稿
// ============================================================
async function postToMicroCMS(article, keyword, slug, thumbnailUrl) {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error("MICROCMS_SERVICE_DOMAIN or MICROCMS_API_KEY is not set");
  }

  const category = detectCategory(keyword);

  const payload = {
    title: article.title,
    slug,
    category,
    description: article.description,
    body: article.body,
    tags: (article.tags ?? []).join(", "),
    author: "SocialBoost 編集部（AI生成）",
    readTime: article.readTime ?? "約3分",
    ...(thumbnailUrl && { thumbnail_url: thumbnailUrl }), // GitHub画像のパスを格納する
  };

  const res = await fetch(`https://${serviceDomain}.microcms.io/api/v1/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`microCMS API error: ${res.status} ${err}`);
  }

  const result = await res.json();
  console.log(`✅ 記事を投稿しました: ${article.title} (id: ${result.id})`);
  return result;
}

// ============================================================
// メイン処理
// ============================================================
async function main() {
  console.log("🤖 AI Blog Auto Generator 起動");

  const keyword = pickKeyword();
  console.log(`📝 キーワード: ${keyword}`);

  const slug = generateSlug();

  // 1. テキスト記事生成
  console.log("⏳ OpenAI API (gpt-4o-mini) で記事生成中...");
  const article = await generateArticle(keyword);
  console.log(`✍️ 記事タイトル: ${article.title}`);

  // 2. DALL-E 3 画像生成
  console.log("🎨 OpenAI API (dall-e-3) でサムネイル画像を生成中...");
  let thumbnailUrl = null;
  try {
    thumbnailUrl = await generateThumbnail(keyword, slug);
    console.log(`🖼 画像を保存しました: ${thumbnailUrl}`);
  } catch (err) {
    console.error("⚠️ サムネイル生成に失敗しました（スキップします）:", err.message);
  }

  // 3. microCMS に投稿
  console.log("📤 microCMSに投稿中...");
  await postToMicroCMS(article, keyword, slug, thumbnailUrl);

  console.log("🎉 生成完了！この後GitHub Actionが画像をコミット＆プッシュします");
}

main().catch((err) => {
  console.error("❌ エラー:", err.message);
  process.exit(1);
});

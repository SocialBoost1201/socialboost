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
  const systemPrompt = `ROLE
あなたは以下の専門家です。
・プロの編集者
・SEO / GEOライター
・事業コンサルタント
・一次情報ベースで記事を書くリサーチャー

あなたの役割は「記事を書くこと」ではありません。
・人間が書いたとしか思えない自然な文章
・読者の理解を深める構成
・検索意図に対して最短で答える
・信頼できる根拠に基づく情報
これらを満たした記事を作成することです。

MISSION
指定されたテーマに対して、SEOおよびGEOに最適化された記事を作成してください。
この記事は以下の目的を持ちます。
・検索流入獲得
・読者の課題解決
・サービス理解の促進
・問い合わせ導線の強化

ABSOLUTE RULES（絶対ルール）
以下を厳守してください。
・AIが書いたような文章にしない
・不自然な敬語やテンプレ表現を使わない
・「まず」「次に」「最後に」などの機械的構成を多用しない
・記号（★、※、→、✔など）を使用しない
・過剰な箇条書きを避ける
・同じ語尾を連続させない
・説明しすぎない（余白を残す）
・根拠のない情報を書かない
・曖昧な表現（多くの場合、一般的に、など）を多用しない
・誇張しない
・事実ベースで書く

CONTENT RULES（内容ルール）
・必ず一次情報または信頼できる情報をベースにする
・事実と意見を分けて書く
・数字や具体例を可能な限り入れる
・読者の「なぜ？」に答える構造にする
・専門的な内容は噛み砕いて説明する
・ただしレベルを下げすぎない

禁止
・根拠のない断言
・ネットでよくある浅いまとめ
・誰でも書ける内容
・情報のコピペ

WRITING STYLE（文章スタイル）
・自然な日本語
・人が考えながら書いたような流れ
・適度な主観を入れる
・結論を先に書く
・無駄な前置きを省く
・短文と中文をバランスよく使う
・読みやすいリズムを作る

NG例
「本記事では〜について解説します」
「〜といえるでしょう」
「重要です」
の多用

OK
・具体的な指摘
・踏み込んだ説明
・現場感のある表現

STRUCTURE（構成）
以下の構成で作成してください。
1 導入
・結論を先に提示
・読者の課題を明確にする
2 本文（複数セクション）
・検索意図に対して論理的に展開
・見出しごとに明確な意味を持たせる
・不要な見出しは作らない
3 深掘り
・他記事と差が出るポイント
・具体例や実務視点
4 まとめ
・簡潔に
・繰り返しすぎない
5 CTA（必要な場合のみ）
・自然な流れで挿入

SEO / GEO RULES
・タイトルにキーワードを自然に含める
・見出しにも適切に配置
・過剰なキーワード詰め込みは禁止
・冒頭で検索意図に答える
・要約しやすい構造にする
・1記事1テーマを徹底

IMAGE GENERATION RULES
記事内に使用する画像（アイキャッチ画像）は必ず以下の条件で生成してください。
・記事内容と完全に一致すること
・抽象画像は禁止
・具体的なシーンを描写
・テキストは含めない
・高品質（リアルまたは洗練されたイラスト）
・ブランドイメージに合う（高級感・モダン）

EXPERT INSIGHT
記事の中に必ず1つ以上、以下を含めてください。
・実務視点
・経験ベースの示唆
・一般論ではない切り口
例：よくある失敗、現場での判断基準、誤解されがちなポイント

QUALITY CHECK（出力前チェック）
・AIっぽくないか
・情報に根拠があるか
・浅い内容になっていないか
・読みやすいか
・検索意図に答えているか
・同じ表現を繰り返していないか
・不要な記号を使っていないか

OUTPUT
以下のJSONフォーマットで厳格に出力してください。（システムで自動処理するため、人間向けの説明文やマークダウンのコードブロック \`\`\`json 等は一切使用せず、生のJSON文字列のみ出力すること）
{
  "title": "記事タイトル（30〜60字。タイトルにキーワードを自然に含める）",
  "description": "メタディスクリプション（80〜120字。検索意図を満たす概要）",
  "body": "HTML形式の記事本文（h2/h3/p/strongなどを適切に使用し、指定のSTRUCTURE構成に従うこと。改行やダブルクォーテーションは適切にエスケープすること）",
  "tags": ["タグ1", "タグ2", "タグ3"],
  "readTime": "約〇分",
  "imagePrompt": "アイキャッチ画像用の英語生成プロンプト（IMAGE GENERATION RULESを満たす、記事内容に完全に一致した具体的な英語の情景描写）"
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
async function generateThumbnail(imagePrompt, slug) {
  const prompt = `Create a modern, ultra-high-quality flat vector illustration. Scene concept: ${imagePrompt}. Design style: Clean, corporate, minimalist, suitable for a premium BtoB IT tech web agency blog. Color palette: sophisticated deep navy blues, bright electric blues, and subtle emerald green or gold accents. Masterpiece quality, highly detailed yet flat. STRICTLY NO TEXT, NO LETTERS, NO WORDS in the image.`;
  
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
  
  return {
    localPath: `/images/ai-blogs/${slug}.png`,
    publicUrl: imageUrl // Instagram投稿用にDALL-Eの一時公開URLも返す
  };
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
// Google Indexing Ping
// ============================================================
async function pingGoogle() {
  try {
    const sitemapUrl = "https://socialboost.jp/sitemap.xml";
    const res = await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    if (res.ok) {
      console.log("🌐 Googleに最新のサイトマップをリクエスト（Ping）しました");
    } else {
      console.warn("⚠️ Google Pingに失敗しました:", res.status);
    }
  } catch (err) {
    console.warn("⚠️ Google Ping中にエラー発生:", err.message);
  }
}

// ============================================================
// X (Twitter) 自動投稿
// ============================================================
async function postToX(article, slug) {
  const { TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET } = process.env;
  if (!TWITTER_API_KEY || !TWITTER_API_SECRET || !TWITTER_ACCESS_TOKEN || !TWITTER_ACCESS_SECRET) {
    console.log("ℹ️ X (Twitter)のAPIキーが未設定のため、SNS連携はスキップします。");
    return;
  }

  // OAuth 1.0a署名を自前で行うのは難しいため、twitter-api-v2等のモジュールが通常必要ですが、
  // GitHub Actions 上で一時的にインストールして実行される想定とします。
  try {
    // スクリプト実行時に動的インポート（package.json に無い場合のエラー回避）
    const { TwitterApi } = await import("twitter-api-v2");
    
    const client = new TwitterApi({
      appKey: TWITTER_API_KEY,
      appSecret: TWITTER_API_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });

    const tweetText = `【新着記事のご案内】\n\n「${article.title}」\n\n${article.description}\n\n詳細はこちら👇\nhttps://socialboost.jp/blog/${slug}\n\n#SocialBoost #Web制作 #システム開発 #DX推進`;
    await client.v2.tweet(tweetText);
    console.log("🕊 X (Twitter) に自動投稿しました");
  } catch (err) {
    console.error("⚠️ X (Twitter)への投稿に失敗しました:", err.message);
    // Twitterモジュールが無い場合はインストールガイドを表示
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      console.error("💡 ヒント: auto-blog.yml で 'npm install twitter-api-v2' を実行するように追加してください");
    }
  }
}

// ============================================================
// Instagram 自動投稿 (Graph API)
// ============================================================
async function postToInstagram(article, slug, imageUrl) {
  const { IG_USER_ID, IG_ACCESS_TOKEN } = process.env;
  if (!IG_USER_ID || !IG_ACCESS_TOKEN) {
    console.log("ℹ️ Instagram (Graph API) の認証情報が未設定のため、Instagram連携はスキップします。");
    return;
  }
  if (!imageUrl) {
    console.log("⚠️ Instagram投稿用の公開画像URLがないためスキップします。");
    return;
  }

  // トークンの簡易クリーンアップ（改行や引用符の混入対策）
  const cleanToken = IG_ACCESS_TOKEN.trim().replace(/^["']|["']$/g, '');
  const cleanId = IG_USER_ID.trim().replace(/^["']|["']$/g, '');

  try {
    const caption = `【新着記事のご案内】\n\n「${article.title}」\n\n${article.description}\n\n詳細はこちら👇\nhttps://socialboost.jp/blog/${slug}\n\n#SocialBoost #Web制作 #システム開発 #DX推進`;

    // 1. 画像コンテナを作成
    console.log(`⏳ Instagramコンテナ作成中... (Token length: ${cleanToken.length})`);
    const containerRes = await fetch(`https://graph.facebook.com/v19.0/${cleanId}/media?access_token=${cleanToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image_url: imageUrl,
        caption: caption,
      }),
    });

    const containerData = await containerRes.json();
    if (!containerRes.ok || containerData.error) {
      throw new Error(containerData.error?.message || "コンテナ作成失敗");
    }

    const creationId = containerData.id;

    // 2. コンテナを公開
    console.log("⏳ Instagram投稿を公開中...");
    const publishRes = await fetch(`https://graph.facebook.com/v19.0/${cleanId}/media_publish?access_token=${cleanToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creation_id: creationId,
      }),
    });

    const publishData = await publishRes.json();
    if (!publishRes.ok || publishData.error) {
      throw new Error(publishData.error?.message || "メディア公開失敗");
    }

    console.log(`📸 Instagram に自動投稿しました (ID: ${publishData.id})`);
  } catch (err) {
    console.error("⚠️ Instagramへの投稿に失敗しました:", err.message);
  }
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
  let thumbnailData = null;
  try {
    const imageConcept = article.thumbnail_prompt || keyword;
    thumbnailData = await generateThumbnail(imageConcept, slug);
    console.log(`🖼 画像を保存しました: ${thumbnailData.localPath}`);
  } catch (err) {
    console.error("⚠️ サムネイル生成に失敗しました（スキップします）:", err.message);
  }

  // 3. microCMS に投稿
  console.log("📤 microCMSに投稿中...");
  await postToMicroCMS(article, keyword, slug, thumbnailData?.localPath);

  // 4. SEO Ping
  await pingGoogle();

  // 5. X (Twitter) へ自動連携
  await postToX(article, slug);

  // 6. Instagram へ自動連携
  await postToInstagram(article, slug, thumbnailData?.publicUrl);

  console.log("🎉 生成完了！この後GitHub Actionが画像をコミット＆プッシュします");
}

main().catch((err) => {
  console.error("❌ エラー:", err.message);
  process.exit(1);
});

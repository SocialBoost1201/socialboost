# CODEX.md — socialboost（事業エージェント向け文脈）

> 最終更新: 2026-03-19 | グループ: B（SocialBoost / テック系）

---

## Project Goal（事業の目的）

**「中小企業・個人事業主がSNS集客で成果を出せる環境を作る」**

SNSマーケティングのノウハウ・実行支援・AI活用ツールを提供し、
「やってみたいけど何から始めればいいか分からない」事業者が、
3ヶ月以内に SNS 経由の問い合わせを増やせる状態にすることを目的とする。

ターゲット: 年商5,000万〜5億円規模の中小企業・個人事業主
差別化: ツール提供だけでなく「伴走型サポート」を軸とする

---

## Brand Identity（ブランドアイデンティティ）

**「先進と信頼の両立」**

- 電気ブルー（#0040FF）＋ダークネイビー（#0D2E57）で「速い・強い・プロ」を体現
- ホバー時のスプリングアニメーション + グロー効果で「触れる前から反応する」体験
- 数値・実績・具体的成果を前面に出し、抽象的な表現を排除

---

## 技術アーキテクチャ概要

- Next.js App Router + microCMS でコンテンツ管理
- Resend でお問い合わせ自動返信
- GSAP + Lenis + Framer Motion でアニメーション重層構成
- Vercel にデプロイ（Edge + ISR）

---

## 現在の進捗と次タスク

**完了済み（推定）**
- コーポレートサイトのUI・コンテンツ構造構築
- お問い合わせフォームの実装

**次タスクの候補**
- PPR 有効化 + AVIF 対応
- Cloudflare Turnstile のお問い合わせフォームへの組み込み
- Three.js / R3F によるヒーローセクションの強化
- microCMS 連携ブログ機能の構築

---

## AEO（AI回答エンジン最適化）ルール

```tsx
// Organization（全ページ）
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SocialBoost",
  "description": "中小企業向けSNSマーケティング支援サービス",
  "url": "https://example.com",
  "sameAs": ["https://twitter.com/...", "https://instagram.com/..."],
}

// Service（サービスページ）
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SNSマーケティング支援",
  "offers": { "@type": "Offer", "priceCurrency": "JPY" },
}

// FAQPage（よくある質問）
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [/* 各FAQを Question / Answer 形式で定義 */],
}
```

---

## プライバシー・個人情報取り扱いルール

### AI生成コンテンツのルール
- **禁止**: 実在しない企業名・実績数値を生成して掲載
- **禁止**: お客様の会社名・SNSアカウント情報を学習データに使用
- **必須**: 成功事例コンテンツは必ず本人確認・掲載許可を取ること
- **必須**: AI生成ブログ記事には「AI補助作成」の表記を入れる

### 個人情報取り扱い
- お問い合わせデータの保持期間: 問い合わせから3年間
- Cloudflare Turnstile をフォームに必ず実装
- GDPR/個人情報保護法に基づくプライバシーポリシーページを必ず設ける

---

## PPR & Edge 設定

```ts
// next.config.ts
experimental: { ppr: true }
// ランディングページのヘッダー・CTA・フッターを静的シェルとして即時配信
// 実績数値・お客様の声は Suspense でストリーミング
```

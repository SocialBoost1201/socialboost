# global-rules.md — socialboost

> グループ: **B（SocialBoost / テック系）**  
> 最終更新: 2026-03-19

---

## 1. ブランドアイデンティティ

### カラーシステム

| 役割 | HEX | 用途 |
|------|-----|------|
| プライマリブルー | `#0040FF` | メインCTA・リンク・ブランドカラー |
| ダークネイビー | `#0D2E57` | ヘッダー・フッター・深いセクション背景 |
| ミッドブルー | `#0066CC` | ホバー・中間トーン |
| アクセント | `#00CFFF` | グロー・ハイライト（控えめに） |
| 背景 | `#FFFFFF` または `#F0F4FF` | ベース背景 |
| テキスト | `#0D1A2E` | 本文（ネイビー系黒）|

### Tailwind v4 カラー定義
```css
/* app/globals.css */
@theme {
  --color-brand-primary: #0040FF;
  --color-brand-dark:    #0D2E57;
  --color-brand-mid:     #0066CC;
  --color-brand-accent:  #00CFFF;
  --color-bg-base:       #FFFFFF;
  --color-bg-subtle:     #F0F4FF;
  --color-text-base:     #0D1A2E;
  --color-text-muted:    #4A5568;
}
```

### ブランドトーン
- SNSマーケティング支援・ビジネス成長を支える専門集団としての信頼感
- 「速い・強い・スマート」を体感させるビジュアルと言葉
- 曖昧な表現禁止。数値・実績・具体的なベネフィットで語る

---

## 2. デザインシステム

### 基本方針
- **エッジの効いた直線的・近未来的デザイン**
- グリッड・ライン・幾何学的形状を積極的に使用
- グラデーションはブランドカラー内で使用可（派手すぎない範囲）
- 角丸は `rounded-lg`（`rounded-2xl` は禁止）
- ボーダーは `1px` の明確なライン

### グラデーション
```css
.gradient-brand {
  background: linear-gradient(135deg, #0040FF 0%, #0D2E57 100%);
}
.gradient-glow {
  background: linear-gradient(135deg, #0066CC 0%, #0040FF 50%, #0D2E57 100%);
}
```

---

## 3. アニメーション（GSAP + Lenis + Framer Motion）

このプロジェクトは `gsap@^3.14` / `lenis@^1.3` / `framer-motion@^12` を使用。

### 使い分け方針
| 用途 | 採用ライブラリ |
|------|--------------|
| スクロール連動・パラレル | GSAP + ScrollTrigger |
| UIマウント/アンマウント | Framer Motion |
| スムーズスクロール | Lenis |

### ホバーインタラクション（テック系必須）
```tsx
// 全CTA・カードに適用するホバーパターン
<motion.div
  whileHover={{ scale: 1.03, y: -4 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
>
```

### スライドイン（左から・キレよく）
```tsx
export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const slideInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}
```

### GSAP スクロール演出
```tsx
// テキストのカウントアップ（数値実績を動的に表示）
gsap.to(counter, {
  innerHTML: targetValue,
  duration: 1.5,
  ease: "power2.out",
  snap: { innerHTML: 1 },
  scrollTrigger: { trigger: el, start: "top 80%", once: true },
})
```

### Lenis（テック系は少し速め）
```tsx
const lenis = new Lenis({ lerp: 0.12, smoothWheel: true })
```

---

## 4. フォント

| 要素 | フォント | 理由 |
|------|---------|------|
| 見出し全般 | Noto Sans JP / Inter | 視認性・テック感 |
| 数値・英数字 | Inter / Tabular Nums | アライメントとインパクト |
| 本文 | Noto Sans JP | 日本語可読性 |

```tsx
import { Inter, Noto_Sans_JP } from "next/font/google"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSans = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "700"] })
```

---

## 5. SEO

- OGP必ず実装（デフォルトOGP画像はブランドカラー背景 + ロゴ）
- `<title>` はサービス名 + 価値訴求で構成（例: `SNS集客を加速する SocialBoost`）

---

## 6. 技術スタック最適化パターン

**スタック**: Next.js 16 / React 19 / GSAP 3 / Lenis / Framer Motion v12 / microCMS / Tailwind CSS v4

### microCMS 利用ルール
```ts
import { createClient } from "microcms-js-sdk"

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

// ISR 推奨（ブログ・コンテンツページ）
export const revalidate = 3600  // 1時間
```

### Server Components 優先
```tsx
// CMSコンテンツはServer Componentでフェッチ
// framer-motion使用コンポーネントのみ "use client"
```

---

## 7. コンポーネント設計ルール

- `src/components/ui/` → 汎用UIコンポーネント
- `src/components/sections/` → ページセクション
- `src/components/animation/` → アニメーション専用ラッパー
- `any` 型の使用禁止
- `console.log` の本番コードへの混入禁止
- 画像は `next/image` を必ず使用

---

## 8. パフォーマンス基準

| 指標 | 目標値 |
|------|--------|
| LCP | 2.5秒以内 |
| FID / INP | 100ms以下 |
| CLS | 0.1以下 |
| Lighthouse Performance | 90+ |

---

## 9. アニメーション アクセシビリティ基準（2026追加）

### useReducedMotion 必須ルール

**OS の「視差効果を減らす」設定を尊重すること。テック系でも例外なく実装する。**

```tsx
// lib/motion.ts
"use client"
import { useReducedMotion } from "framer-motion"

export function useMotionSafe() {
  return !useReducedMotion()
}

// スプリングアニメーションを最適化するユーティリティ
export function getSpringConfig(reduced: boolean) {
  return reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 400, damping: 20 }
}
```

```tsx
// ホバーインタラクションでの使用例
"use client"
import { motion, useReducedMotion } from "framer-motion"

export function InteractiveCard({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      whileHover={prefersReduced ? {} : { scale: 1.03, y: -4 }}
      whileTap={prefersReduced ? {} : { scale: 0.97 }}
      transition={prefersReduced ? {} : { type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
```

### Suspense による重エフェクトの遅延

```tsx
import { Suspense } from "react"
import dynamic from "next/dynamic"
const ParticleEffect = dynamic(() => import("@/components/ParticleEffect"), { ssr: false })

<Suspense fallback={<div className="h-96 bg-brand-dark/20 animate-pulse rounded-lg" />}>
  <ParticleEffect />
</Suspense>
```

### パフォーマンス基準
- LCP要素にアニメーション禁止
- `will-change: transform` は必要な要素のみ（多用禁止）
- Lighthouse Performance スコア 90+ を維持すること

---

## Tailwind CSS v4 アニメーション定義（2026追加）

> このプロジェクトはTailwind CSS v4（`@tailwindcss/postcss`使用）のため、`globals.css` に直接定義する。

### app/globals.css への追記

```css
/* =============================================
   2026: Shimmer・Floating・Glow アニメーション
   ============================================= */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}

@keyframes floating-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-5px) rotate(0.4deg); }
  66%       { transform: translateY(-2px) rotate(-0.3deg); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(0, 64, 255, 0.3); }
  50%       { box-shadow: 0 0 24px rgba(0, 64, 255, 0.7); }
}

@keyframes slide-in-left {
  0%   { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}

/* =============================================
   Shimmer グラデーション共通ユーティリティ
   スケルトンUIに適用: className="animate-shimmer shimmer-bg"
   ============================================= */
@utility shimmer-bg {
  background: linear-gradient(
    90deg,
    theme(colors.gray.200) 25%,
    theme(colors.gray.100) 50%,
    theme(colors.gray.200) 75%
  );
  background-size: 200% 100%;
}

/* ============
   アニメーション
   ============ */
@utility animate-shimmer       { animation: shimmer 1.8s linear infinite; }
@utility animate-floating      { animation: floating 3.5s ease-in-out infinite; }
@utility animate-floating-slow { animation: floating-slow 8.0s ease-in-out infinite; }
@utility animate-glow-pulse    { animation: glow-pulse 2.5s ease-in-out infinite; }
@utility animate-slide-in-left { animation: slide-in-left 0.4s cubic-bezier(0.16, 1, 0.3, 1) both; }
```

### 使用例

```tsx
// スケルトンローディング
<div className="animate-shimmer shimmer-bg h-48 rounded-lg" />

// 浮遊するアイコン・バッジ
<div className="animate-floating">
  <Icon />
</div>

// CTAボタンのグロー
<button className="animate-glow-pulse bg-brand-primary text-white px-6 py-3 rounded-lg">
  今すぐ始める
</button>
```


---

## 10. 2026年最新：AEO・高速配信・セキュリティルール（一括追加）

### Bento Grid 2.0（グリッドUIの2026標準）

```tsx
// 角丸24px以上・Spatial UI（ガラスモーフィズム）を標準化
<div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
  {/* コンテンツ */}
</div>
```

### AEO（AI回答エンジン最適化）— JSON-LD 必須実装

```tsx
// 全ページに JSON-LD を実装する共通パターン
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", /* スキーマオブジェクト */ }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
// グループA（清蓮）: LocalBusiness + Service + FAQPage + BreadcrumbList
// グループB（テック）: Organization/SoftwareApplication + FAQPage + Article
```

### PPR（Partial Prerendering）+ AVIF デフォルト化

```ts
// next.config.ts
const config: NextConfig = {
  experimental: { ppr: true },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
}
```

### Cloudflare Turnstile（reCAPTCHA代替・全フォーム必須）

```bash
npm install @marsidev/react-turnstile
# .env.local: NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY / CLOUDFLARE_TURNSTILE_SECRET_KEY
```

```tsx
"use client"
import { Turnstile } from "@marsidev/react-turnstile"
export function TurnstileWidget({ onSuccess }: { onSuccess: (token: string) => void }) {
  return <Turnstile siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!} onSuccess={onSuccess} options={{ theme: "auto", language: "ja" }} />
}
// Server Action: challenges.cloudflare.com/turnstile/v0/siteverify でトークン検証を忘れずに
```

### Lighthouse パフォーマンス目標

| 指標 | 目標 |
|------|------|
| Performance | 90+ |
| Accessibility | 95+ |
| SEO | 100 |
| LCP | < 2.5秒 |
| CLS | < 0.1 |

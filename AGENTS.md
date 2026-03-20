# AGENTS.md — socialboost（技術エージェント向け憲法）

> 最終更新: 2026-03-19 | Package Manager: npm | Node: >=18.0.0

---

## コマンド一覧

```bash
npm run dev          # 開発サーバー起動
npm run build        # next build
npm run start        # 本番サーバー起動
npm run lint         # ESLint
```

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| Framework | Next.js 16.x (App Router) |
| React | 19.x |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 / GSAP 3 / Lenis |
| 3D | Three.js / @react-three/fiber / @react-three/drei |
| CMS | microCMS (`microcms-js-sdk`) |
| Mail | Resend |
| Icons | Lucide React |

---

## TypeScript 規約

```ts
// ✅ 型は必ず定義
type BlogPost = { id: string; title: string; body: string; publishedAt: string }

// ❌ any型禁止
// ❌ console.log の本番コード混入禁止

// ✅ Server Component デフォルト
// ✅ CMS データフェッチは Server Component で完結

// ✅ パス解決
import { cn } from "@/lib/utils"
```

---

## Next.js 規約

```
src/
  app/          ← Page・Layout のみ
  components/
    ui/          ← 汎用UIコンポーネント
    common/      ← Button・SmoothScroll 等の共通コンポーネント
    sections/    ← ページセクション
    animation/   ← アニメーション専用ラッパー
  lib/           ← ユーティリティ
  types/         ← 型定義
```

### PPR（Partial Prerendering）設定

```ts
// next.config.ts に追加
const config: NextConfig = {
  experimental: { ppr: true },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
}
```

### ISR + microCMS

```ts
// ブログ・コンテンツページ
export const revalidate = 3600  // 1時間

// データフェッチ
import { createClient } from "microcms-js-sdk"
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey:         process.env.MICROCMS_API_KEY!,
})
```

---

## セキュリティルール

- **Cloudflare Turnstile**: お問い合わせフォームに必ず実装
  ```bash
  npm install @marsidev/react-turnstile
  ```
- `CLOUDFLARE_TURNSTILE_SECRET_KEY` を `.env.local` に設定
- API Routeには Rate Limiting を実装（Upstash推奨）

---

## エラー解決手順

```bash
# ビルドエラー → 型チェックから
npx tsc --noEmit

# microCMS API エラー → 環境変数の確認
echo $MICROCMS_SERVICE_DOMAIN

# Framer Motionのハイドレーションエラー → "use client" の追加
```

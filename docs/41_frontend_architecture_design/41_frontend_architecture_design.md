# SocialBoost 公式Webサイト フロントエンドアーキテクチャ設計書

---

## 文書目的

本書は SocialBoost 公式Webサイトのフロントエンド構造、開発方針、技術構成、ディレクトリ設計を定義する。

本サイトは単なる静的ホームページではなく、
- 最先端UI
- モダンアニメーション
- 高速パフォーマンス
- SEO最適化
- 拡張可能な構造

を実現するため、モダンフロントエンドアーキテクチャを採用する。

---

## 対象プロジェクト

| 項目 | 内容 |
|:---|:---|
| 名称 | SocialBoost 公式Webサイト |
| プロジェクトフォルダ | `socialboost` |
| ドキュメント管理 | `socialboost/docs` |

---

## 関連設計書

- 要件定義書
- 基本設計書
- 詳細設計書
- 画面設計書
- UIデザインガイドライン
- モーション設計書
- コンポーネント設計書

---

## 採用技術

| 領域 | 採用技術 |
|:---|:---|
| **フレームワーク** | Next.js |
| **言語** | TypeScript |
| **UI** | React |
| **スタイリング** | TailwindCSS |
| **アニメーション** | Framer Motion, GSAP |
| **画像最適化** | Next Image |
| **フォント** | Google Fonts |

---

## アーキテクチャ方針

- コンポーネントベース設計
- 再利用可能UI
- 高速表示
- SEO対応
- 拡張可能設計

---

## ディレクトリ構造

```text
socialboost/
├── app/
├── components/
├── lib/
├── hooks/
├── styles/
├── public/
└── docs/
```

### app (Next.js App Router を使用)
**ページ管理:**
- `app/page.tsx`
- `app/services/page.tsx`
- `app/pricing/page.tsx`
- `app/works/page.tsx`
- `app/contact/page.tsx`

### components
UIコンポーネントを役割ごとに管理する。

- **`components/ui`:** 汎用的な最小単位コンポーネント
  - `Button`, `Card`, `Badge`, `Icon`
- **`components/layout`:** 画面の骨格となるコンポーネント
  - `Header`, `Footer`, `PageLayout`
- **`components/sections`:** ページ内の各セクションを構成するコンポーネント
  - `HeroSection`, `ServiceSection`, `WorksSection`, `CTASection`

### lib
ユーティリティ関数等の共通処理。
**例:** SEO設定、API処理、共通関数

### hooks
React Hooksの管理。
**例:** `useScrollAnimation`, `useWindowSize`

### styles
グローバルCSSの管理。
**例:** `globals.css`

### public
画像やロゴなどの静的アセット管理。
- `public/logo`: ロゴ
- `public/images`: サイト画像
- `public/favicon`: ファビコン

---

## パフォーマンス設計

- **画像最適化:** `Next Image` を活用する
- **Lazy Load:** スクロール表示に応じて画像を遅延読み込みする

---

## SEO対策

- **Meta設定:** 各ページのタイトル、ディスクリプション設定
- **OpenGraph:** SNSシェア時のOGP設定
- **構造化データ:** JSON-LD等を用いた検索エンジン向けデータ提示

---

## レスポンシブ設計

モバイルファーストで設計する。
**ブレークポイント:** `sm`, `md`, `lg`, `xl`

---

## 状態管理

**基本方針:**
- ローカル状態（`useState`等）を優先して使用する。
- グローバルな状態管理が必要な場合のみ `React Context` を使用する。

---

## アニメーション設計

- **ページトランジション:** Framer Motion
- **スクロールアニメーション:** GSAP

---

## アクセシビリティ

- `aria` 属性の適切な付与
- キーボード操作への対応
- 適切なHTMLセマンティックタグの使用

---

## 開発ルール

- **TypeScript必須:** すべてのコードに型定義を行う
- **コンポーネント分割:** 1コンポーネント1責務を意識する
- **再利用設計:** 特定のページに依存しないコンポーネント設計を心がける
- **TailwindCSS使用:** インラインスタイルやカスタムCSSクラスを極力避け、ユーティリティファーストでスタイリングする

---

## 本書で確定する事項

| No. | 決定事項 |
|:---|:---|
| 1 | Next.js App Routerを採用する |
| 2 | TypeScriptを使用する |
| 3 | TailwindCSSを採用する |
| 4 | Framer MotionとGSAPを使用する |
| 5 | コンポーネントベース設計を採用する |
| 6 | SEO対応を行う |
| 7 | 現時点では実装しない |

---

## 後続文書への引継事項

- バックエンド設計書
- API設計書
- データ設計書
- テスト設計書

---

以上

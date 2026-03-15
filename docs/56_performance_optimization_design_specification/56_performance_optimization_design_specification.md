# SocialBoost 公式Webサイト パフォーマンス最適化設計書

---

## 文書目的

本書は SocialBoost 公式Webサイトの表示速度、ユーザー体験、検索順位に直結するパフォーマンス最適化方針を定義する。

本サイトはモダンUI、スクロールアニメーション、画像コンテンツ、実績ギャラリーを含むため、パフォーマンス設計を事前に定義しないと、
- ページ速度低下
- SEO評価低下
- ユーザー離脱

のリスクが発生する。

そのため本書では表示速度最適化、Core Web Vitals最適化、画像最適化、コード最適化、キャッシュ戦略を定義する。

本書は以下の設計書と連携する。
- フロントエンドアーキテクチャ設計書
- モーションアニメーション設計書
- SEO設計書
- UX設計書

---

## 対象プロジェクト

| 項目 | 内容 |
|:---|:---|
| 名称 | SocialBoost 公式Webサイト |
| プロジェクトフォルダ | `socialboost` |
| ドキュメント管理 | `socialboost/docs` |

---

## パフォーマンス目標

### Lighthouse目標スコア

| カテゴリ | 目標 |
|:---|:---|
| **Performance** | 90以上 |
| **SEO** | 95以上 |
| **Accessibility** | 90以上 |
| **Best Practices** | 90以上 |

### Core Web Vitals目標

| 指標 | 目標値 |
|:---|:---|
| **LCP (Largest Contentful Paint)** | 2.5秒以下 |
| **CLS (Cumulative Layout Shift)** | 0.1以下 |
| **INP (Interaction to Next Paint)** | 200ms以下 |

---

## インフラ構成とキャッシュ戦略

### インフラ
| 項目 | 構成 |
|:---|:---|
| **ホスティング** | Vercel |
| **CDN** | Vercel Edge Network |

### キャッシュ戦略
- **静的ページ:** 全面的にキャッシュ可能（SSG）
- **実績データ:** ISR（Incremental Static Regeneration）対応。実績更新時に再生成。

---

## フロントエンド最適化

### Next.js最適化
- App Router の Server Components を活用し、クライアントバンドルを最小化する
- コード分割（Dynamic Import）を適切に適用する

### 画像最適化
- `Next Image` コンポーネントを使用する
- 画像圧縮を行う
- WebP形式を採用する
- Lazy Loading を適用する

### フォント最適化
- Google Fonts を使用する
- フォントプリロード（`next/font`）で表示速度を改善する

---

## アニメーション・JavaScript・CSS最適化

### アニメーション最適化
- GSAP使用範囲を限定する
- 不要なスクロールアニメーションは禁止する
- モバイルでは演出を軽量化する

### JavaScript最適化
- 不要ライブラリを排除する
- Tree Shaking を有効化する

### CSS最適化
- TailwindCSS を使用する
- 未使用CSSを削除する（PurgeCSS等）

---

## API・モバイル最適化

### API最適化
- レスポンスペイロードを軽量化する
- サーバー側キャッシュを活用する

### モバイル最適化
- 軽量画像（小サイズ版）を配信する
- アニメーション数を制限する

---

## パフォーマンス監視とボトルネック対策

### 監視ツール
- Lighthouse
- Web Vitals

### 監視頻度
- リリース前（必須）
- 月次確認

### ボトルネック発生時の対策
- 画像サイズ削減
- JavaScript バンドルサイズ削減
- アニメーション表現の削減・簡素化

---

## 本書で確定する事項

| No. | 決定事項 |
|:---|:---|
| 1 | Next.js の Server Components・コード分割等による最適化を行う |
| 2 | Next Image / WebP / Lazy Loading による画像最適化を行う |
| 3 | Core Web Vitals（LCP 2.5秒以下 / CLS 0.1以下 / INP 200ms以下）を管理する |
| 4 | Vercel Edge Network（CDN）を活用する |
| 5 | アニメーション負荷を管理し、モバイルでは軽量化する |
| 6 | Lighthouseスコアをリリース前および月次で監視する |
| 7 | 現時点では実装しない |

---

## 後続文書への引継事項

- Analytics設計書
- A/Bテスト設計書

---

以上

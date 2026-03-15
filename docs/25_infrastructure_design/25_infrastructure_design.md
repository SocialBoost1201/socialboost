# SocialBoost 公式Webサイト インフラ設計書

---

## 文書目的

本書は SocialBoost 公式Webサイトのインフラ構成、運用基盤、デプロイ方式、監視体制、スケーリング戦略を定義する文書である。
高可用性、高速表示、安全性、拡張性を確保することを目的とする。

本書は以下の設計書と連携する。
- 要件定義書
- 基本設計書
- 詳細設計書
- 技術設計書
- セキュリティ設計書
- 運用設計書
- テスト設計書

---

## 対象プロジェクト

| 項目 | 内容 |
|:---|:---|
| 名称 | SocialBoost 公式Webサイト |
| プロジェクトフォルダ | `socialboost` |
| ドキュメント管理 | `socialboost/docs` |

---

## インフラ設計の基本思想

1. **シンプル構成**
   過剰なサーバー構成を避ける
2. **高速表示**
   グローバルCDNを利用
3. **自動スケーリング**
   アクセス増加に対応
4. **セキュリティ優先**
   HTTPS / WAF / DDoS対策
5. **開発効率重視**
   CI/CD自動化

---

## インフラ全体構成

ユーザー → CDN → Vercel Hosting → Next.js Application → 外部サービス

### 採用インフラ

| 領域 | 採用サービス |
|:---|:---|
| ホスティング | Vercel |
| フロントエンド | Next.js |
| CDN | Vercel Edge Network |
| ドメイン管理 | Xserver または Cloudflare |
| メール送信 | Resend または SendGrid |
| 監視 | UptimeRobot または BetterStack |

### インフラ構成図

```text
ユーザー
  ↓
DNS
  ↓
CDN
  ↓
Vercel Edge
  ↓
Next.js App
  ↓
API / 外部サービス
```

---

## DNS設計

### ドメイン例

- `socialboost.jp`
- `www.socialboost.jp`

### DNS管理

Xserver または Cloudflare

**推奨：Cloudflare**
（理由：高速DNS、WAF、DDoS対策、キャッシュ機能のため）

---

## CDN設計

CDNは Vercel Edge Network を使用する。

**効果**
- ページ表示高速化
- グローバル配信
- キャッシュ最適化
- DDoS軽減

---

## キャッシュ設計

### 静的コンテンツ
HTML / 画像 / フォント / JS / CSS
- **CDNキャッシュ期間：** 1日 または 7日

### APIレスポンス
キャッシュなし または 短期キャッシュ

---

## アプリケーション構成

**Next.js App Router**

### 主な役割
- ページ生成
- SEO対応
- 動的コンテンツ
- API連携

### SSG / SSR設計

| 方式 | 対象ページ |
|:---|:---|
| **SSG** | トップページ、サービス、料金、実績 |
| **SSR** | 問い合わせ処理、将来のCMS |

---

## 画像配信設計

Next.js Image Optimization を使用する。

**画像最適化**
- WebP変換
- レスポンシブ画像
- 自動圧縮

### ファイル管理

**publicフォルダ配置**
- favicon、ロゴ、OGP画像、静的画像

**assets設計**
- ブランド画像、実績画像、アイコン、PDF

---

## CI/CD設計

GitHubを使用する。

### ブランチ構成
- `main` （production）
- `feature` （開発ブランチ）

### CI/CDフロー
Git push → GitHub → Vercel Build → Preview Deploy → Production Deploy

### Preview環境
Pull RequestごとにPreview生成
用途：デザイン確認、レビュー、テスト

### デプロイ方式
**自動デプロイ**
`main`ブランチ更新 → Vercel本番反映

---

## バックアップ設計

| 項目 | 内容 |
|:---|:---|
| 対象 | コード、設定、問い合わせデータ |
| バックアップ方法 | GitHub、自動保存 |

---

## ログ管理設計

| 項目 | 内容 |
|:---|:---|
| 取得ログ | アクセスログ、エラーログ、フォーム送信ログ |
| 保存期間 | 30日 または 90日 |

---

## 監視設計

| 項目 | 内容 |
|:---|:---|
| 監視対象 | サイト稼働、APIエラー、レスポンス時間 |
| 監視ツール | UptimeRobot または BetterStack |
| アラート基準 | サイトダウン、500エラー増加、応答遅延 |

---

## スケーリング設計

Vercel の自動スケーリングを利用。
アクセス急増、SNS流入、広告流入に自動対応可能。

---

## パフォーマンス目標

- **LCP:** 2.5秒以内
- **CLS:** 0.1以下
- **TTFB:** 500ms以下

---

## セキュリティ連携

HTTPS強制 / WAF / Bot対策 / DDoS対策

### 環境変数管理
**Vercel Environment Variables**
管理対象：APIキー、メール設定、外部サービスキー

---

## 開発環境

- **ローカル環境:** Node.js / Next.js
- **開発PC:** Mac / Windows 両対応

---

## 将来拡張

将来的に以下の拡張が可能：
- CMS導入
- APIサーバー追加
- アプリ連携
- SaaS化

---

## SEOおよびGEO対応

### GEO対応（AIクローラー最適化）
- 高速表示
- 安定配信
- 構造化データ

### SEO対応
- Core Web Vitals最適化
- 高速ページ配信
- モバイル最適化

---

## 本書で確定する事項

| No. | 決定事項 |
|:---|:---|
| 1 | ホスティングはVercel |
| 2 | CDNはVercel Edge |
| 3 | DNSはCloudflare推奨 |
| 4 | GitHub連携CI/CD |
| 5 | 自動スケーリング |
| 6 | Preview環境利用 |
| 7 | 監視ツール導入 |
| 8 | 画像最適化 |
| 9 | バックアップ管理 |
| 10 | 現時点では実装しない |

---

## 後続文書への引継事項

- 運用設計書
- 監視設計書
- テスト設計書
- デプロイ設計書

---

以上

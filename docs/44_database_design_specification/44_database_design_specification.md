# SocialBoost 公式Webサイト データベース設計書

---

## 文書目的

本書は SocialBoost 公式Webサイトにおけるデータベース構造を定義する。

本サイトは主にコーポレートサイトだが、以下の機能を実現するためデータベースを設計する。
- お問い合わせ管理
- 制作実績管理
- 資料（PDF）管理
- 将来CMS化

本書ではデータ構造、テーブル設計、カラム仕様、データ関係を定義する。

本書は以下の設計書と連携する。
- バックエンドアーキテクチャ設計書
- API設計書
- セキュリティ設計書
- 運用設計書

---

## 対象プロジェクト

| 項目 | 内容 |
|:---|:---|
| 名称 | SocialBoost 公式Webサイト |
| プロジェクトフォルダ | `socialboost` |
| ドキュメント管理 | `socialboost/docs` |

---

## 採用データベースと設計方針

### 採用データベース
**Supabase PostgreSQL**

### 設計方針
1. 拡張可能な構造
2. CMS化を前提とした設計
3. 正規化されたデータ構造
4. スケーラブル設計

---

## データベース構成・主テーブル一覧

| テーブル名 | 目的 |
|:---|:---|
| `contacts` | 問い合わせ情報を保存する |
| `projects` | 制作実績管理のメタデータを保存する |
| `project_assets` | 実績画像やPDF等の外部アセット情報を管理する |
| `project_categories` | 実績のカテゴリ分類を管理する |

---

## テーブル定義詳細

### 1. `contacts` テーブル
問い合わせ情報を保存するテーブル。

| カラム名 | データ型 | 説明 |
|:---|:---|:---|
| `id` | `uuid` | PK |
| `name` | `text` | 氏名または担当者名 |
| `email` | `text` | 返信用メールアドレス |
| `phone` | `text` | 電話番号 |
| `company` | `text` | 会社名または屋号 |
| `message` | `text` | 問い合わせ内容 |
| `created_at` | `timestamp` | 登録日時 |

### 2. `projects` テーブル
制作実績の基本メタデータと情報を保存するテーブル。

| カラム名 | データ型 | 説明 |
|:---|:---|:---|
| `id` | `uuid` | PK |
| `title` | `text` | プロジェクト名（実績タイトル） |
| `summary` | `text` | 一覧表示用概要文 |
| `description` | `text` | 詳細説明文 |
| `thumbnail_url` | `text` | サムネイル画像URL |
| `category_id` | `uuid` | カテゴリID (FK: `project_categories.id`) |
| `created_at` | `timestamp` | 登録日時 |

### 3. `project_assets` テーブル
各実績に紐づく画像（複数枚）やPDFなどのアセットリンクを管理するテーブル。

| カラム名 | データ型 | 説明 |
|:---|:---|:---|
| `id` | `uuid` | PK |
| `project_id` | `uuid` | 紐づく実績ID (FK: `projects.id`) |
| `asset_type` | `text` | アセット分類（`image` または `pdf`） |
| `asset_url` | `text` | アセットの実データURL |
| `created_at` | `timestamp` | 登録日時 |

### 4. `project_categories` テーブル
制作実績のカテゴリマスタ。

| カラム名 | データ型 | 説明 |
|:---|:---|:---|
| `id` | `uuid` | PK |
| `name` | `text` | カテゴリ名（Web制作、アプリ開発等） |
| `created_at` | `timestamp` | 登録日時 |

---

## テーブル間リレーションと設計

### テーブル関係
- **1対多 (`1:N`)**：`project_categories` (1) ─ `projects` (多)
- **1対多 (`1:N`)**：`projects` (1) ─ `project_assets` (多)

### データ関係概略図
```text
project_categories
  ↓
projects
  ↓
project_assets
```

---

## インデックス・セキュリティおよびストレージ設計

### インデックス設計（検索高速化）
以下のカラムに対してインデックスを設定し、一覧取得やソートを高速化する。
- **`projects` テーブル:** `created_at`, `category_id`
- **`contacts` テーブル:** `created_at`

### セキュリティ設計
- **Row Level Security (RLS) を適用:**
  - `contacts`：挿入(INSERT)は許可、参照(SELECT/UPDATE)はSupabase側の認証済み「管理APIロール」のみに限定等。
  - `projects`等：参照(SELECT)はパブリックに許可、変更(INSERT/UPDATE/DELETE)は「管理APIロール」のみに限定。

### ストレージ保存方針とバックアップ
- **実績画像やPDFの実態データ：** Supabase Storageに保存する。
- **データベース上の扱い：** DBにはアップロードされたファイルへのURL文字列（`asset_url` 等）のみを保存する。
- **バックアップ対策：** Supabaseの自動バックアップ機能（PITR等）を利用する。

---

## 将来拡張予定

CMS機能の追加やサービス拡大に合わせて、将来的に以下のテーブル等を追加想定する。
- `blog_posts`: ブログ記事管理
- `users` (Supabase Authと連携): コンテンツ管理者やユーザー管理（顧客ログイン等）

---

## 本書で確定する事項

| No. | 決定事項 |
|:---|:---|
| 1 | 採用データベースは Supabase（PostgreSQL） とする |
| 2 | 主テーブルとして `contacts`, `projects`, `project_assets`, `project_categories` を作成する |
| 3 | テーブル間は `1:N` の正規化されたリレーションを持つ |
| 4 | PDFおよび画像データは Supabase Storage に保存し、DBには URLのパス のみを記録する |
| 5 | インデックス（`created_at`等）やRow Level Security (RLS) を設定しパフォーマンスと安全を担保する |
| 6 | 将来のCMS化・記事管理を見据えた構成とする |
| 7 | 現時点での実装（SQL発行・スキーマ作成）は行わない |

---

## 後続文書への引継事項

- セキュリティ設計書
- テスト設計書
- 運用設計書

---

以上

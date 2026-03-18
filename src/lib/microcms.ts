import { createClient } from 'microcms-js-sdk';

// microCMS 実績レスポンス型
export type MicroCMSWork = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  category: string;
  industry?: string;
  thumbnail: { url: string; height: number; width: number };
  summary: string;
  challenge?: string;
  scope?: string;
  solution?: string;
  result?: string;
  site_url?: string;
};

export type MicroCMSWorkListResponse = {
  contents: MicroCMSWork[];
  totalCount: number;
  offset: number;
  limit: number;
};

// microCMS ブログレスポンス型
export type MicroCMSBlog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  category: string;
  description: string;   // メタディスクリプション・リード文
  body: string;          // HTML本文
  thumbnail?: { url: string; height: number; width: number }; // 既存の画像アップロード用
  thumbnail_url?: string; // GitHub自動コミット時のURL指定用（テキスト）
  tags?: string[];       // タグ（事実上のstring[]・タグ配列）
  author?: string;       // 著者名
  readTime?: string;     // "約2分"  
};

export type MicroCMSBlogListResponse = {
  contents: MicroCMSBlog[];
  totalCount: number;
  offset: number;
  limit: number;
};

// ==========================================
// Reviews (お客様の声) の型定義
// ==========================================
export type MicroCMSReview = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt?: string;
  company_name?: string;
  client_name: string;
  project_name?: string;
  rating: number;
  comment: string;
};

export type MicroCMSReviewListResponse = {
  contents: MicroCMSReview[];
  totalCount: number;
  offset: number;
  limit: number;
};

// 環境変数が未設定の場合は null を返す（ビルドエラーを防ぐ）
export function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) return null;

  return createClient({ serviceDomain, apiKey });
}

// 後方互換のために残す（既存コードへの影響最小化）
export const client = {
  get: async <T>(args: Parameters<ReturnType<typeof createClient>['get']>[0]): Promise<T> => {
    const c = getClient();
    if (!c) throw new Error('microCMS client is not configured');
    return c.get<T>(args);
  },
};

// お客様の声一覧を取得
export const getReviews = async (queries?: any) => {
  try {
    const c = getClient();
    if (!c) return { contents: [], totalCount: 0, offset: 0, limit: 0 };
    return await c.getList<MicroCMSReview>({
      endpoint: "reviews",
      queries,
    });
  } catch (error) {
    console.error("Failed to fetch reviews from microCMS:", error);
    // APIが未作成の場合などを考慮しフェイルセーフで空配列を返す
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }
};

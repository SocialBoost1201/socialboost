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
  thumbnail?: { url: string; height: number; width: number };
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

import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is not defined');
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is not defined');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

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
};

export type MicroCMSWorkListResponse = {
  contents: MicroCMSWork[];
  totalCount: number;
  offset: number;
  limit: number;
};

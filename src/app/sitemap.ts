import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/lib/services";
import { WORKS_DATA } from "@/lib/works";
import { getClient, MicroCMSBlogListResponse } from "@/lib/microcms";

const BASE_URL = "https://socialboost.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // サービス詳細ページ
  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 実績詳細ページ
  const worksPages: MetadataRoute.Sitemap = WORKS_DATA.map((work) => ({
    url: `${BASE_URL}/works/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ブログ詳細ページ
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const c = getClient();
    if (c) {
      const res = await c.get<MicroCMSBlogListResponse>({
        endpoint: "blogs",
        queries: { fields: "slug,id,updatedAt", limit: 100 },
      });
      blogPages = res.contents.map((b) => ({
        url: `${BASE_URL}/blog/${b.slug || b.id}`,
        lastModified: new Date(b.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    // ignore
  }

  const blogList: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }
  ];

  return [...staticPages, ...servicePages, ...worksPages, ...blogList, ...blogPages];
}

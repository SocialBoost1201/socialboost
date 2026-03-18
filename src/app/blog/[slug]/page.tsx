import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getClient, MicroCMSBlog, MicroCMSBlogListResponse } from "@/lib/microcms";
import { generateBreadcrumbJsonLd, generateFAQJsonLd } from "@/lib/jsonld";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string): Promise<MicroCMSBlog | null> {
  try {
    const c = getClient();
    if (!c) return null;
    const res = await c.get<MicroCMSBlogListResponse>({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    return res.contents[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return { title: "Not Found" };
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: `${blog.title} | SocialBoost ブログ`,
      description: blog.description,
      url: `https://socialboost.jp/blog/${slug}`,
      type: "article",
      publishedTime: blog.publishedAt,
      ...((blog.thumbnail || blog.thumbnail_url) && {
        images: blog.thumbnail 
          ? [{ url: blog.thumbnail.url, width: blog.thumbnail.width, height: blog.thumbnail.height }]
          : [{ url: `https://socialboost.jp${blog.thumbnail_url}`, width: 1200, height: 630 }],
      }),
    },
    alternates: { canonical: `https://socialboost.jp/blog/${slug}` },
  };
}

export const revalidate = 3600; // 1時間キャッシュ

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const publishedDate = new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.description,
            datePublished: blog.publishedAt,
            dateModified: blog.updatedAt,
            author: { "@type": "Person", name: blog.author ?? "眞如 匠馬" },
            publisher: {
              "@type": "Organization",
              name: "SocialBoost",
              url: "https://socialboost.jp",
            },
            url: `https://socialboost.jp/blog/${slug}`,
            ...((blog.thumbnail || blog.thumbnail_url) && { 
              image: blog.thumbnail ? blog.thumbnail.url : `https://socialboost.jp${blog.thumbnail_url}` 
            }),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "ブログ", url: "/blog" },
              { name: blog.title },
            ])
          ),
        }}
      />

      <Breadcrumb items={[{ name: "ブログ", href: "/blog" }, { name: blog.title }]} />

      {/* Header */}
      <section className="bg-background-alt py-12 md:py-20 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary px-3 py-1 text-sm font-semibold text-white">
                <Tag className="w-3 h-3" />
                {blog.category}
              </span>
              {blog.tags?.map((tag, i) => (
                <span key={i} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-text-secondary border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {publishedDate}
              </span>
              {blog.readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              )}
              <span className="font-medium">by {blog.author ?? "SocialBoost 編集部"}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Thumbnail */}
      {(blog.thumbnail || blog.thumbnail_url) && (
        <div className="bg-white border-b border-gray-100">
          <Container className="py-8">
            <div className="max-w-3xl mx-auto relative aspect-video rounded-2xl overflow-hidden shadow-md">
              <Image
                src={blog.thumbnail ? blog.thumbnail.url : blog.thumbnail_url!}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </div>
      )}

      {/* Body */}
      <Container className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg prose-blue max-w-none text-text-primary
              prose-headings:font-bold prose-headings:text-text-primary
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-relaxed prose-p:text-text-secondary
              prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:text-text-secondary prose-ol:text-text-secondary
              prose-strong:text-text-primary
              prose-code:text-brand-primary prose-code:bg-brand-light/30 prose-code:px-1 prose-code:rounded
              prose-blockquote:border-brand-primary prose-blockquote:not-italic prose-blockquote:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              ブログ一覧へ戻る
            </Link>
          </div>
        </div>
      </Container>

      <CTASection />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardTitle, CardDescription, CardCategoryBadge, CardImage } from "@/components/ui/Card";
import Link from "next/link";
import { Metadata } from "next";
import { getClient, MicroCMSBlogListResponse } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "ブログ・お役立ちコラム",
  description: "Web戦略、デザイン、システム開発、AI導入に関する最新トレンドやノウハウを発信しています。",
  openGraph: {
    title: "ブログ・お役立ちコラム | SocialBoost",
    description: "Web戦略、デザイン、システム開発、AI導入に関する最新トレンドやノウハウを発信しています。",
    url: "https://socialboost.jp/blog",
  },
  alternates: { canonical: "https://socialboost.jp/blog" },
};

export const revalidate = 3600;

// microCMSからブログ一覧取得（失敗時はモックにフォールバック）
async function getBlogs() {
  const MOCK = [
    {
      slug: "what-is-headless-cms",
      title: "Headless CMSとは？WordPressとの違いや導入のメリットを解説",
      description: "モダンなWeb制作で主流になりつつあるHeadless CMS。従来のWordPress等のCMSと何が違うのか、どのようなプロジェクトに適しているのかを分かりやすく解説します。",
      category: "テクノロジー",
      publishedAt: "2026-03-18T00:00:00.000Z",
      thumbnail: { url: "/images/reason-03.png" },
    },
    {
      slug: "web-design-trends-2026",
      title: "2026年最新Webデザインのトレンド予測",
      description: "グラスモーフィズムや大きなタイポグラフィなど、今年のWebデザインのトレンドと自社サイトへの取り入れ方を解説します。",
      category: "デザイン",
      publishedAt: "2026-03-10T00:00:00.000Z",
      thumbnail: { url: "/images/reason-01.png" },
    },
    {
      slug: "agile-development-for-system",
      title: "システム開発を成功に導く「アジャイル型進行」の教科書",
      description: "仕様変更に柔軟に対応し、ビジネス価値を素早く検証できるアジャイル開発の進め方と成功の秘訣を解説します。",
      category: "システム開発",
      publishedAt: "2026-02-25T00:00:00.000Z",
      thumbnail: { url: "/images/works-corporate-site.png" },
    },
  ];

  try {
    const c = getClient();
    if (!c) return MOCK;
    const res = await c.get<MicroCMSBlogListResponse>({
      endpoint: "blogs",
      queries: { orders: "-publishedAt", limit: 30 },
    });
    if (res.contents.length === 0) return MOCK;
    return res.contents.map((b) => ({
      slug: b.slug || b.id,
      title: b.title,
      description: b.description,
      category: b.category,
      publishedAt: b.publishedAt,
      thumbnail: b.thumbnail,
    }));
  } catch {
    return MOCK;
  }
}

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "ブログ" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">Blog</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">お役立ちコラム・最新情報</p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-2xl">
                <Card className="h-full">
                  {post.thumbnail && <CardImage src={post.thumbnail.url} alt={post.title} />}
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2 items-center justify-between">
                      <CardCategoryBadge>{post.category}</CardCategoryBadge>
                      <time className="text-xs text-text-secondary font-medium">
                        {new Date(post.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                      </time>
                    </div>
                    <CardTitle className="leading-snug">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
      
      <CTASection />
    </PageLayout>
  );
}

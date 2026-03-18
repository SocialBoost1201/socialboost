import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardTitle, CardDescription, CardCategoryBadge, CardImage } from "@/components/ui/Card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ・お役立ちコラム",
  description: "Web戦略、デザイン、システム開発、AI導入に関する最新トレンドやノウハウを発信しています。",
  openGraph: {
    title: "ブログ・お役立ちコラム | SocialBoost",
    description: "Web戦略、デザイン、システム開発、AI導入に関する最新トレンドやノウハウを発信しています。",
    url: "https://socialboost.jp/blog",
  },
  alternates: {
    canonical: "https://socialboost.jp/blog",
  },
};

// モックデータ
const BLOG_DATA = [
  {
    slug: "what-is-headless-cms",
    title: "Headless CMSとは？WordPressとの違いや導入のメリットを解説",
    shortDesc: "モダンなWeb制作で主流になりつつあるHeadless CMS。従来のWordPress等のCMSと何が違うのか、どのようなプロジェクトに適しているのかを分かりやすく解説します。",
    category: "テクノロジー",
    date: "2026.03.18",
    thumbnail: "/images/reason-03.png", // 仮画像
  },
  {
    slug: "web-design-trends-2026",
    title: "2026年最新Webデザインのトレンド予測 トレンドを取り入れるべきかどうかの判断基準",
    shortDesc: "グラスモーフィズムや大きなタイポグラフィなど、今年のWebデザインのトレンドを解説。あわせて、流行を自社サイトに取り入れるかどうかの見極め方もご紹介します。",
    category: "デザイン",
    date: "2026.03.10",
    thumbnail: "/images/reason-01.png", // 仮画像
  },
  {
    slug: "agile-development-for-system",
    title: "システム開発を成功に導く「アジャイル型進行」の教科書",
    shortDesc: "仕様変更に柔軟に対応し、ビジネス価値を素早く検証できるアジャイル開発。従来型のウォーターフォール開発と比較しながら、その進め方と成功の秘訣を解説します。",
    category: "システム開発",
    date: "2026.02.25",
    thumbnail: "/images/works-corporate-site.png", // 仮画像
  },
];

export default function BlogPage() {
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
          {BLOG_DATA.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-2xl">
                <Card className="h-full">
                  <CardImage src={post.thumbnail} alt={post.title} />
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2 items-center justify-between">
                      <CardCategoryBadge>{post.category}</CardCategoryBadge>
                      <time className="text-xs text-text-secondary font-medium">{post.date}</time>
                    </div>
                    <CardTitle className="leading-snug">{post.title}</CardTitle>
                    <CardDescription>{post.shortDesc}</CardDescription>
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

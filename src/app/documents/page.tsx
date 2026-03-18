import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardTitle, CardDescription, CardCategoryBadge, CardImage } from "@/components/ui/Card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お役立ち資料",
  description: "Web戦略やシステム導入、AI活用に関する無料のホワイトペーパーやお役立ち資料をダウンロードいただけます。",
  openGraph: {
    title: "お役立ち資料 | SocialBoost",
    description: "Web戦略やシステム導入、AI活用に関する無料のホワイトペーパーやお役立ち資料をダウンロードいただけます。",
    url: "https://socialboost.jp/documents",
  },
  alternates: {
    canonical: "https://socialboost.jp/documents",
  },
};

// モックデータ
const DOCUMENTS_DATA = [
  {
    slug: "b2b-site-renewal-guide",
    title: "BtoB企業のためのWebサイトリニューアル完全ガイド",
    shortDesc: "要件定義の進め方から、ベンダー選定のポイント、失敗しない進行管理までを網羅した全40ページの解説書。",
    category: "Web戦略",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Data/Analytics
  },
  {
    slug: "ai-implementation-roadmap",
    title: "中小企業向け AI導入・活用ロードマップ",
    shortDesc: "ChatGPTをはじめとした生成AIを自社業務にどう組み込むか？実証実験から社内定着までのステップを解説。",
    category: "AI導入",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop", // AI Idea
  },
  {
    slug: "system-development-cost-guide",
    title: "システム開発の費用相場と見積もり削減のコツ",
    shortDesc: "開発手法（スクラッチ、パッケージ、ノーコード等）による費用の違いと、無駄なコストを抑える要件定義のコツをご紹介。",
    category: "システム開発",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", // Coding/Setup
  },
];

export default function DocumentsPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "お役立ち資料" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl text-center uppercase">Documents</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">お役立ち資料（ホワイトペーパー）</p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTS_DATA.map((doc, i) => (
            <AnimatedSection key={doc.slug} delay={i * 0.1}>
              <Link href={`/documents/${doc.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-2xl">
                <Card className="h-full">
                  <CardImage src={doc.thumbnail} alt={doc.title} className="aspect-[1.414/1] object-cover" /> {/* A4縦イメージなどで適宜調整 */}
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <CardCategoryBadge>{doc.category}</CardCategoryBadge>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-brand-primary">
                        無料ダウンロード
                      </span>
                    </div>
                    <CardTitle className="leading-snug">{doc.title}</CardTitle>
                    <CardDescription>{doc.shortDesc}</CardDescription>
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

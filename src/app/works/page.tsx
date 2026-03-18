import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CardCategoryBadge, CardImage } from "@/components/ui/Card";
import { WORKS_DATA, WorkDetail } from "@/lib/works";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Metadata } from "next";
import { client, MicroCMSWork } from "@/lib/microcms";
import { Button } from "@/components/ui/Button";

// microCMSのデータ更新を60秒ごとに反映（ISR）
export const revalidate = 60;

export const metadata: Metadata = {
  title: "制作・開発実績 | SocialBoost",
  description: "Webサイト制作からシステム開発、AI導入まで、SocialBoostのこれまでの制作・開発実績と成果をご紹介します。",
  openGraph: {
    title: "制作・開発実績 | SocialBoost",
    description: "Webサイト制作からシステム開発、AI導入まで、SocialBoostのこれまでの制作・開発実績と成果をご紹介します。",
    url: "https://socialboost.jp/works",
  },
  alternates: {
    canonical: "https://socialboost.jp/works",
  },
};

// microCMSからデータを取得し、失敗した場合は静的データにフォールバック
async function getWorks() {
  try {
    const data = await client.get<{ contents: MicroCMSWork[] }>({
      endpoint: "works",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    if (data.contents.length > 0) return { source: "cms" as const, works: data.contents };
  } catch (e) {
    console.warn("microCMS取得失敗、静的データを使用します:", e);
  }
  return { source: "static" as const, works: WORKS_DATA };
}

export default async function WorksPage() {
  const { source, works } = await getWorks();

  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "制作実績" }]} />

      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100 relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-brand-light/30 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase mb-6">Works</h1>
            <p className="mt-4 text-center text-text-secondary font-medium text-lg leading-relaxed max-w-2xl mx-auto">
              単なる「制作」に留まらず、お客様の事業成長に直結する<br className="hidden md:block" />
              「成果」にこだわった数多くのプロジェクト支援実績がございます。
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {source === "cms"
            ? (works as MicroCMSWork[]).map((work, i) => {
                const href = work.site_url || `/works/${work.id}`;
                return (
                  <AnimatedSection key={work.id} delay={i * 0.1}>
                    <Link href={href} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
                        <CardImage src={work.thumbnail.url} alt={work.title} />
                      </div>
                      <div className="flex flex-col flex-1 p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <CardCategoryBadge>{work.category}</CardCategoryBadge>
                          {work.industry && (
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                              {work.industry}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-4 leading-snug text-left group-hover:text-brand-primary transition-colors">
                          {work.title}
                        </h3>
                        <p className="text-sm md:text-base text-text-secondary line-clamp-2 mb-6 text-left">
                          {work.summary}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between text-sm font-bold text-brand-primary pt-6 border-t border-gray-100">
                          <span>実績詳細を見る</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })
            : (works as WorkDetail[]).map((work, i) => (
                <AnimatedSection key={work.slug} delay={i * 0.1}>
                  <Link href={`/works/${work.slug}`} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
                      <CardImage src={work.thumbnail} alt={work.title} />
                    </div>
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <div className="text-xs font-bold text-gray-400 mb-2 truncate">{work.title.split(' ')[0]}</div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-6 leading-snug text-left group-hover:text-brand-primary transition-colors">
                        {work.shortDesc || work.title}
                      </h3>
                      
                      {/* BtoB向け メタデータ（成果・業種・種別） */}
                      <div className="mt-auto space-y-3 bg-background-alt p-4 rounded-xl text-sm mb-6">
                        {work.kpis && work.kpis.length > 0 && (
                          <div className="flex items-start gap-4">
                            <span className="text-gray-500 font-medium w-10 shrink-0">成 果</span>
                            <span className="text-text-primary font-bold">
                              {work.kpis.map(k => `${k.label} ${k.value}`).join("、")}
                            </span>
                          </div>
                        )}
                        <div className="flex items-start gap-4">
                          <span className="text-gray-500 font-medium w-10 shrink-0">業 種</span>
                          <span className="text-text-secondary">{work.industry}</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="text-gray-500 font-medium w-10 shrink-0">種 別</span>
                          <span className="text-text-secondary">{work.category}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm font-bold text-brand-primary pt-6 border-t border-gray-100">
                        <span>導入事例の全容を見る</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))
          }
        </div>

        {/* BtoB事例集ダウンロードCTA */}
        <AnimatedSection delay={0.4} className="mt-20 bg-white p-8 md:p-12 rounded-3xl border border-brand-primary/10 shadow-[0_10px_40px_rgba(24,119,242,0.08)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <FileText className="w-64 h-64 text-brand-primary" />
          </div>

          <div className="flex-1 relative z-10 w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-brand-navy">全70ページの事例集ダウンロード</h3>
            </div>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed md:max-w-2xl">
              社内での稟議や具体的な実績をまとめてご覧になりたい方のために、SocialBoostのこれまでの代表的な実績と数値をPDFにてご用意しました。
            </p>
          </div>
          
          <div className="w-full md:w-auto shrink-0 relative z-10">
            <Button asChild size="lg" className="w-full md:w-auto shadow-lg shadow-brand-primary/20 hover:-translate-y-1 transition-transform">
              <Link href="/documents">
                事例集PDFを無料でダウンロード
              </Link>
            </Button>
            <p className="text-center text-[11px] text-gray-400 mt-3 font-medium">※入力後すぐに閲覧可能です</p>
          </div>
        </AnimatedSection>

      </Container>

      <CTASection />
    </PageLayout>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";

import { client, MicroCMSWork } from "@/lib/microcms";
import { WORKS_DATA, WorkDetail } from "@/lib/works";

async function getPreviewWorks() {
  try {
    const data = await client.get<{ contents: MicroCMSWork[] }>({
      endpoint: "works",
      queries: { limit: 3, orders: "-publishedAt" },
    });
    if (data.contents.length > 0) return { source: "cms" as const, works: data.contents };
  } catch (e) {
    console.warn("microCMS取得失敗、静的データを使用します:", e);
  }
  return { source: "static" as const, works: WORKS_DATA.slice(0, 3) };
}

export async function WorksPreviewSection({ showMoreButton = false }: { showMoreButton?: boolean } = {}) {
  const { source, works } = await getPreviewWorks();

  return (
    <section className="bg-background-light py-24 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <AnimatedSection>
            <SectionTitle en="WORKS" ja="制作・開発実績" align="left" className="mb-0" />
            <p className="mt-4 text-text-secondary max-w-2xl">
              単なる制作に留まらず、お客様の事業成長に直結する「成果」にこだわった数多くのプロジェクト支援実績がございます。
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-6 md:mt-0 hidden md:block">
            <Link href="/works" className="group inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors">
              実績一覧を見る
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {source === "cms"
            ? (works as MicroCMSWork[]).map((work, i) => {
                const href = work.site_url || `/works/${work.id}`;
                return (
                  <AnimatedSection key={work.id} delay={i * 0.1}>
                    <Link href={href} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                        <Image
                          src={work.thumbnail.url}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-col flex-1 p-6 md:p-8">
                        <div className="text-xs font-bold text-gray-500 mb-3 text-left">{work.category}</div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-6 leading-snug group-hover:text-brand-primary transition-colors text-left">
                          {work.title}
                        </h3>
                        {/* MicroCMS側の実績データは簡略化表示 */}
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
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <div className="text-xs font-bold text-gray-400 mb-2 truncate text-left">{work.title.split(' ')[0]}</div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-6 leading-snug group-hover:text-brand-primary transition-colors text-left">
                        {work.shortDesc || work.title}
                      </h3>
                      
                      {/* BtoB向け メタデータ（成果・業種・種別） */}
                      <div className="mt-auto space-y-3 bg-background-alt p-4 rounded-xl text-sm">
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

                      <div className="flex items-center justify-between text-sm font-bold text-brand-primary pt-6 mt-6 border-t border-gray-100">
                        <span>導入事例の全容を見る</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
        </div>

        {/* baigie様基準：実績一覧の下の強力なCTA（事例集DL） */}
        <AnimatedSection delay={0.4} className="mt-16 bg-white p-8 md:p-12 rounded-3xl border border-brand-primary/10 shadow-[0_10px_40px_rgba(24,119,242,0.08)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
          {/* 背景装飾 */}
          <div className="absolute top-0 right-0 p-10 opacity-5 -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <FileText className="w-64 h-64 text-brand-primary" />
          </div>

          <div className="flex-1 relative z-10 w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-brand-navy">全70ページの事例集ダウンロード</h3>
            </div>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed md:max-w-xl">
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
        
        {/* モバイル用実績一覧ボタン */}
        <AnimatedSection delay={0.5} className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/works">すべての実績を見る</Link>
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}

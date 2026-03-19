import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WORKS_DATA, WorkDetail } from "@/lib/works";
import { Metadata } from "next";
import { client, MicroCMSWork } from "@/lib/microcms";
import { WorksContent } from "@/components/sections/works/WorksContent";
import { CTASection } from "@/components/sections/CTASection";

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

async function getWorks(): Promise<WorkDetail[]> {
  try {
    const data = await client.get<{ contents: MicroCMSWork[] }>({
      endpoint: "works",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    
    if (data.contents.length > 0) {
      // 既存の静的データとマージまたはCMS優先
      return data.contents.map(cms => ({
        slug: cms.id,
        title: cms.title,
        category: cms.category as any,
        industry: cms.industry || "IT",
        shortDesc: cms.summary,
        thumbnail: cms.thumbnail.url,
        overview: cms.summary,
        challenges: [],
        scope: [],
        implementations: [],
        results: [],
        images: [],
        pdfs: [],
        techStack: [],
        duration: "",
        teamSize: "1-3名"
      }));
    }
  } catch (e) {
    console.warn("microCMS取得失敗、静的データを使用します:", e);
  }
  return WORKS_DATA;
}

export default async function WorksPage() {
  const works = await getWorks();

  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "制作実績" }]} />

      {/* ── Page Hero ── */}
      <div className="bg-brand-navy py-24 md:py-32 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-brand-primary/10 to-transparent pointer-events-none" />
        
        <Container className="relative z-10">
          <AnimatedSection className="text-center">
            <div className="section-badge mb-6 mx-auto bg-white/5 border-white/10 text-brand-light">Works</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-8">
              事業成長の足跡。
            </h1>
            <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
              単なる「制作」に留まらず、お客様の事業課題を解決し、<br className="hidden md:block" />
              実数値としての「成果」にこだわったプロジェクト実績をご紹介します。
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <WorksContent initialWorks={works} />

      <CTASection />
    </PageLayout>
  );
}

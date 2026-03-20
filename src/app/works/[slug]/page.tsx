import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { WORKS_DATA, getWorkBySlug } from "@/lib/works";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight, ExternalLink, Quote, Clock, Wrench, Building2 } from "lucide-react";
import { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "@/lib/jsonld";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { client, MicroCMSWork } from "@/lib/microcms";

type UnifiedWorkDetail = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  shortDesc: string;
  thumbnail: string;
  overview: string;
  challenges: string[];
  scope: string[];
  implementations: string[];
  results: string[];
  images: string[];
  pdfs: { title: string; url: string }[];
  site_url?: string;
  // 拡張フィールド
  kpis?: { value: string; label: string }[];
  testimonial?: { comment: string; name: string; role: string };
  techStack?: string[];
  duration?: string;
  teamSize?: string;
};

async function getUnifiedWork(slug: string): Promise<UnifiedWorkDetail | null> {
  try {
    const cmsData = await client.get<MicroCMSWork>({
      endpoint: "works",
      contentId: slug,
    });
    if (cmsData) {
      return {
        slug: cmsData.id,
        title: cmsData.title,
        category: cmsData.category,
        industry: cmsData.industry || "その他",
        shortDesc: cmsData.summary,
        thumbnail: cmsData.thumbnail.url,
        overview: cmsData.summary,
        challenges: cmsData.challenge ? cmsData.challenge.split(/\r?\n/).filter(Boolean) : [],
        scope: cmsData.scope ? cmsData.scope.split(/\r?\n/).filter(Boolean) : [],
        implementations: cmsData.solution ? cmsData.solution.split(/\r?\n/).filter(Boolean) : [],
        results: cmsData.result ? cmsData.result.split(/\r?\n/).filter(Boolean) : [],
        images: [],
        pdfs: [],
        site_url: cmsData.site_url,
        kpis: [], // CMS側の構造に合わせて後ほど拡張
        techStack: [],
        duration: "",
        teamSize: ""
      };
    }
  } catch {
    // NotFound in CMS, fallback to static
  }

  const staticWork = getWorkBySlug(slug);
  if (staticWork) {
    return {
      ...staticWork,
    };
  }

  return null;
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = await getUnifiedWork(slug);
  if (!work) return { title: "Not Found" };
  
  return {
    title: `${work.title} | 実績`,
    description: work.shortDesc,
    openGraph: {
      title: `${work.title} | 実績 | SocialBoost`,
      description: work.shortDesc,
      url: `https://socialboost.jp/works/${slug}`,
      type: "article",
      images: [{ url: work.thumbnail, width: 800, height: 600, alt: work.title }],
    },
    alternates: {
      canonical: `https://socialboost.jp/works/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return WORKS_DATA.map((w) => ({
    slug: w.slug,
  }));
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getUnifiedWork(slug);
  
  if (!work) {
    notFound();
  }

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "制作実績", url: "/works" },
              { name: work.title },
            ])
          ),
        }}
      />
      <Breadcrumb items={[{ name: "制作実績", href: "/works" }, { name: work.title }]} />
      
      {/* ── Header Section ── */}
      <section
        className="pt-24 pb-32 lg:pt-32 lg:pb-44 bg-brand-navy overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle_at_100%_0%, rgba(24,119,242,0.18) 0%, transparent 55%), radial-gradient(circle_at_0%_100%, rgba(24,119,242,0.08) 0%, transparent 52%)",
        }}
      >
        <Container>
          <AnimatedSection className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              <span className="section-badge bg-white/5 border-white/10 text-brand-light">Case Study</span>
              <span className="section-badge bg-brand-primary/20 border-brand-primary/30 text-white">{work.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight mb-12">
              {work.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 font-bold text-sm uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-primary" />
                {work.industry}
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-primary" />
                {work.duration || "開発期間：約2ヶ月"}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── Visual & KPI Section ── */}
      <section className="relative -mt-24 lg:-mt-36 z-20 pb-20 lg:pb-24">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Main Image View */}
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-white border-8 border-white/5">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedSection>

            {/* KPI Metrics Highlight */}
            {work.kpis && work.kpis.length > 0 && (
              <AnimatedSection delay={0.4} className="mt-12 lg:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {work.kpis.map((kpi, i) => (
                    <div key={i} className="group h-full p-8 lg:p-10 bg-white rounded-3xl shadow-premium border border-slate-100 hover:-translate-y-2 transition-all duration-500">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 group-hover:text-brand-primary transition-colors">
                        {kpi.label}
                      </div>
                      <div className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tighter">
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* ── Main Narrative ── */}
            <div className="lg:col-span-8 space-y-20 lg:space-y-24">
              
              {/* Overview */}
              <AnimatedSection>
                <div className="section-badge mb-6">Overview</div>
                <h2 className="text-3xl font-black text-brand-navy mb-8 tracking-tight">プロジェクトの背景と概要</h2>
                <p className="text-lg lg:text-xl text-text-secondary leading-relaxed font-medium">
                  {work.overview}
                </p>
              </AnimatedSection>
              
              {/* Before / After Analysis */}
              <AnimatedSection>
                <div className="section-badge mb-6">Transformation</div>
                <h2 className="text-3xl font-black text-brand-navy mb-10 tracking-tight">課題解決のストーリー</h2>
                
                <div className="space-y-5 md:space-y-6">
                  {/* Before */}
                  <div className="p-8 md:p-10 bg-slate-50 rounded-4xl border border-slate-200">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 mb-6">
                      Before / Issues
                    </div>
                    <ul className="space-y-5">
                      {work.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          <span className="text-slate-600 font-medium leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center -my-3 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/30 border-4 border-white">
                      <ArrowRight className="w-5 h-5 text-white rotate-90 lg:rotate-0" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-8 md:p-10 bg-brand-navy rounded-4xl shadow-2xl">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary text-xs font-black uppercase tracking-widest text-white mb-6">
                      After / Solutions
                    </div>
                    <ul className="space-y-5">
                      {work.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="mt-0.5 w-5 h-5 text-brand-primary shrink-0" />
                          <span className="text-white font-bold leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Implementation Logic */}
              <AnimatedSection>
                <div className="section-badge mb-6">Implementation</div>
                <h2 className="text-3xl font-black text-brand-navy mb-10 tracking-tight">具体的な施策とアプローチ</h2>
                <div className="grid gap-6">
                  {work.implementations.map((imp, i) => (
                    <div key={i} className="group flex items-start gap-6 md:gap-8 p-7 md:p-10 bg-white rounded-4xl border border-slate-100 hover:border-brand-primary/20 transition-all shadow-sm hover:shadow-premium">
                      <span className="text-5xl font-black text-slate-100 group-hover:text-brand-primary/10 transition-colors tracking-tighter shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-lg text-text-secondary leading-relaxed font-bold group-hover:text-brand-navy transition-colors">{imp}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Testimonial */}
              {work.testimonial && (
                <AnimatedSection>
                  <div className="p-10 md:p-12 lg:p-16 bg-background-alt rounded-[3rem] border border-slate-200">
                    <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-brand-primary/10 mb-8">
                      <Quote className="w-8 h-8 text-brand-primary/40" />
                    </div>
                    <blockquote>
                      <p className="text-2xl lg:text-3xl font-extrabold text-brand-navy leading-tight mb-10 md:mb-12">
                        &ldquo;{work.testimonial.comment}&rdquo;
                      </p>
                      <footer className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-3xl bg-brand-navy flex items-center justify-center text-white font-black text-xl shadow-lg">
                          {work.testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <cite className="not-italic font-black text-brand-navy block text-lg mb-1">{work.testimonial.name}</cite>
                          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{work.testimonial.role}</span>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </AnimatedSection>
              )}

              {/* Gallery */}
              {work.images.length > 1 && (
                <AnimatedSection>
                  <div className="section-badge mb-6">Gallery</div>
                  <h2 className="text-3xl font-black text-brand-navy mb-10 tracking-tight">アウトプット・イメージ</h2>
                  <WorkGallery images={work.images} title={work.title} />
                </AnimatedSection>
              )}
            </div>

            {/* ── Sidebar: Project Metadata ── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Site URL CTA */}
                {work.site_url && (
                  <div className="p-8 bg-brand-navy rounded-4xl shadow-2xl border border-white/10 group bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.2)_0%,transparent_48%)]">
                    <h3 className="text-xs font-bold text-brand-primary/70 mb-6 uppercase tracking-widest">Experience</h3>
                    <a 
                      href={work.site_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-4 w-full"
                    >
                      <span className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">公開サイトを見る</span>
                      <div className="h-14 w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                        Open Project <ExternalLink className="ml-3 w-4 h-4" />
                      </div>
                    </a>
                  </div>
                )}

                {/* Tech Stack */}
                {work.techStack && work.techStack.length > 0 && (
                  <div className="p-8 bg-white rounded-4xl shadow-premium border border-slate-100">
                    <h3 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                      <Wrench className="w-3 h-3 text-brand-primary" />
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {work.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-brand-navy">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scope */}
                {work.scope.length > 0 && (
                  <div className="p-8 bg-slate-50 rounded-4xl border border-slate-200">
                    <h3 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Project Scope</h3>
                    <div className="space-y-4">
                      {work.scope.map((s, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related CTA */}
                <div className="p-8 md:p-9 bg-brand-light rounded-4xl text-center space-y-5 border border-brand-primary/10">
                  <h3 className="text-lg md:text-xl font-black text-brand-navy">類似プロジェクトの相談</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    本実績のような課題をお持ちの方は、お気軽にご相談ください。戦略から伴走します。
                  </p>
                  <Button asChild size="lg" className="w-full h-14 rounded-2xl shadow-lg shadow-brand-primary/20">
                    <Link href="/contact">この課題を無料で相談する</Link>
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <Link href="/works" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-brand-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    その他の事例を見る
                  </Link>
                </div>
              </div>
            </aside>
            
          </div>
        </Container>
      </section>
      
      <CTASection />
    </PageLayout>
  );
}

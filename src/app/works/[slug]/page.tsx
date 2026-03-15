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
import { FileText, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "@/lib/jsonld";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getWorkBySlug(params.slug);
  if (!work) return { title: "Not Found" };
  
  return {
    title: `${work.title} | 実績`,
    description: work.shortDesc,
    openGraph: {
      title: `${work.title} | 実績 | SocialBoost`,
      description: work.shortDesc,
      url: `https://socialboost.jp/works/${params.slug}`,
      type: "article",
      images: [{ url: work.thumbnail, width: 800, height: 600, alt: work.title }],
    },
    alternates: {
      canonical: `https://socialboost.jp/works/${params.slug}`,
    },
  };
}

export function generateStaticParams() {
  return WORKS_DATA.map((w) => ({
    slug: w.slug,
  }));
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  
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
      
      {/* Header & Overview */}
      <section className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-brand-primary px-3 py-1 text-sm font-semibold text-white shadow-sm">
                {work.category}
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-text-secondary border border-gray-200">
                {work.industry}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-8">
              {work.title}
            </h1>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-md bg-white mb-12">
              <Image
                src={work.thumbnail}
                alt={work.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-bold text-brand-primary mb-4">プロジェクト概要</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {work.overview}
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <Container className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Challenges & Results */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">抱えていた課題と、実施後の成果</h2>
              <div className="space-y-8">
                <div className="bg-red-50/50 p-6 md:p-8 rounded-2xl border border-red-100">
                  <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                    <span className="bg-red-100 text-red-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">前</span>
                    抱えていた課題
                  </h3>
                  <ul className="space-y-4">
                    {work.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start text-text-secondary">
                        <span className="mr-3 mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                        <span className="leading-relaxed font-medium">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-brand-light/50 p-6 md:p-8 rounded-2xl border border-brand-light">
                  <h3 className="text-lg font-bold text-brand-primary mb-4 flex items-center">
                    <span className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">後</span>
                    実施後の成果
                  </h3>
                  <ul className="space-y-4">
                    {work.results.map((result, i) => (
                      <li key={i} className="flex items-start text-text-secondary">
                        <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                        <span className="leading-relaxed font-medium text-text-primary">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Implementation Details */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">実施した内容・工夫した点</h2>
              <ul className="space-y-6">
                {work.implementations.map((imp, i) => (
                  <li key={i} className="flex items-start bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100">
                    <span className="text-4xl font-black text-gray-100 mr-6 tracking-tighter shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-lg text-text-primary leading-relaxed mt-1 font-medium">{imp}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            
            {/* Image Gallery */}
            {work.images.length > 0 && (
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">ギャラリー</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {work.images.map((img, i) => (
                    <div key={i} className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                      <Image
                        src={img}
                        alt={`${work.title} ギャラリー ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Document / PDF List */}
            {work.pdfs.length > 0 && (
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">関連資料 (PDF)</h2>
                <div className="space-y-4">
                  {work.pdfs.map((pdf, i) => (
                    <a
                      key={i}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center bg-white p-5 rounded-xl shadow-sm ring-1 ring-gray-100 hover:ring-brand-primary/40 transition-all hover:bg-brand-light/30"
                    >
                      <div className="bg-red-50 text-red-500 p-3 rounded-lg mr-5 group-hover:bg-red-100 transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors flex-1">{pdf.title}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            )}
            
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <AnimatedSection delay={0.2} className="bg-background-alt p-8 rounded-2xl">
                <h3 className="text-lg font-bold text-text-primary mb-6">対応範囲（スコープ）</h3>
                <div className="flex flex-wrap gap-2">
                  {work.scope.map((s, i) => (
                    <span key={i} className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-sm font-medium text-text-secondary border border-gray-100">
                      {s}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="bg-brand-light p-8 rounded-2xl text-center">
                <h3 className="text-lg font-bold text-brand-primary mb-4">類似プロジェクトのご相談</h3>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  本プロジェクトと同様の課題をお持ちの方は、お気軽にご相談ください。
                </p>
                <Link href="/contact" className="block" tabIndex={-1}>
                  <Button className="w-full">
                    無料で相談してみる
                  </Button>
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="text-center pt-4">
                <Link href="/works" className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  実績一覧へ戻る
                </Link>
              </AnimatedSection>
            </div>
          </div>
          
        </div>
      </Container>
      
      <CTASection />
    </PageLayout>
  );
}

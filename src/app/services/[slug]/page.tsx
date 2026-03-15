import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/jsonld";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Not Found" };
  
  return {
    title: `${service.title} | サービス`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | サービス | SocialBoost`,
      description: service.shortDesc,
      url: `https://socialboost.jp/services/${params.slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://socialboost.jp/services/${params.slug}`,
    },
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({
    slug: s.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceJsonLd(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "サービス", url: "/services" },
              { name: service.title },
            ])
          ),
        }}
      />
      <Breadcrumb items={[{ name: "サービス", href: "/services" }, { name: service.title }]} />
      
      {/* Hero */}
      <section className="bg-background-alt py-16 md:py-24 border-b border-gray-100 relative overflow-hidden">
        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
              {service.shortDesc}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Target & Problems */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">こんな課題を解決します</h2>
              <ul className="space-y-6">
                {service.problems.map((prob, i) => (
                  <li key={i} className="flex items-start bg-white p-5 rounded-xl shadow-sm ring-1 ring-gray-100">
                    <CheckCircle2 className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-brand-primary" />
                    <span className="text-lg text-text-primary leading-relaxed font-medium">{prob}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">対象となるお客様</h2>
              <ul className="space-y-6">
                {service.targetCustomers.map((target, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-primary font-bold text-sm ring-1 ring-brand-primary/20">{i+1}</span>
                    <span className="text-lg text-text-secondary leading-relaxed font-medium">{target}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Offerings & Scopes */}
      <section className="bg-white py-20 md:py-32 border-t border-gray-100">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-text-primary mb-16">ご提供内容・対応範囲</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection delay={0.1} className="bg-background-alt p-8 md:p-12 rounded-3xl">
              <h3 className="text-xl font-bold text-text-primary mb-8 text-center tracking-wide">サービスメニュー</h3>
              <ul className="space-y-4">
                {service.offerings.map((off, i) => (
                  <li key={i} className="bg-white p-4 rounded-xl text-center shadow-sm font-semibold text-text-primary ring-1 ring-gray-50 hover:ring-brand-primary/20 transition-all cursor-default">
                    {off}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-background-alt p-8 md:p-12 rounded-3xl">
              <h3 className="text-xl font-bold text-text-primary mb-8 text-center tracking-wide">制作・開発スコープ</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {service.scopes.map((scope, i) => (
                  <span key={i} className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary shadow-sm ring-1 ring-gray-100">
                    {scope}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Flow */}
      <section className="py-20 md:py-32 bg-background-alt">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-text-primary mb-16">進行フロー</h2>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {service.flow.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-brand-light text-brand-primary font-bold text-xl ring-4 ring-white shadow-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-3 mt-1">{item.title}</h3>
                      <p className="text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}

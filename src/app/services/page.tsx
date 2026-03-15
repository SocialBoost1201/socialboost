import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES_DATA } from "@/lib/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス一覧",
  description: "Web戦略設計からシステム開発、アプリ、AI導入まで、事業成長を加速させるSocialBoostの提供サービス一覧です。",
  openGraph: {
    title: "サービス一覧 | SocialBoost",
    description: "Web戦略設計からシステム開発、アプリ、AI導入まで、事業成長を加速させるSocialBoostの提供サービス一覧です。",
    url: "https://socialboost.jp/services",
  },
  alternates: {
    canonical: "https://socialboost.jp/services",
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">Services</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">事業成長を加速させる提供サービス</p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {SERVICES_DATA.map((service, idx) => (
            <AnimatedSection key={service.slug} delay={0.1}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                <div className="w-full lg:w-1/3">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-6">{service.shortDesc}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent transition-colors group">
                    詳細を見る
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background-alt p-6 md:p-8 rounded-2xl">
                    <h3 className="font-bold text-text-primary mb-4 text-sm tracking-wider uppercase">対象となる課題</h3>
                    <ul className="space-y-4">
                      {service.problems.map((prob, i) => (
                        <li key={i} className="flex items-start text-sm text-text-secondary">
                          <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-brand-primary" />
                          <span className="leading-relaxed font-medium">{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background-alt p-6 md:p-8 rounded-2xl">
                    <h3 className="font-bold text-text-primary mb-4 text-sm tracking-wider uppercase">提供内容</h3>
                    <ul className="space-y-4">
                      {service.offerings.map((off, i) => (
                        <li key={i} className="flex items-start text-sm text-text-secondary">
                          <span className="mr-3 h-2 w-2 shrink-0 rounded-full bg-brand-primary mt-1.5" />
                          <span className="leading-relaxed font-medium">{off}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
}

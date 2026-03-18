import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Globe, LayoutTemplate, Code, Smartphone, Cpu, LineChart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web戦略設計",
    description: "事業目標に基づくKPI設定、ターゲット分析、カスタマージャーニー設計など、根幹となる戦略を策定します。",
    icon: LineChart,
    href: "/services/web-design",
  },
  {
    title: "コーポレートサイト制作",
    description: "企業の信頼感を高め、採用やBtoBの問い合わせ獲得に直結する、高品質なコーポレートサイトを制作します。",
    icon: Globe,
    href: "/services/web-design",
  },
  {
    title: "LP制作（ランディングページ）",
    description: "コンバージョンに特化した設計で、広告運用やSNSからの流入を確実に問い合わせ・売上へつなげます。",
    icon: LayoutTemplate,
    href: "/services/lp",
  },
  {
    title: "Webシステム開発",
    description: "予約システム、顧客管理、ポータルサイトなど、業務効率化や新規事業を支えるシステムをフルスクラッチで開発します。",
    icon: Code,
    href: "/services/system",
  },
  {
    title: "アプリ開発",
    description: "iOS/Android対応のネイティブアプリから、PWA・クロスプラットフォームまで、最適な手法で開発をご支援します。",
    icon: Smartphone,
    href: "/services/app",
  },
  {
    title: "AI導入支援",
    description: "ChatGPTなどのLLMを活用した業務効率化、社内ナレッジ検索など、実務で使えるAIの組み込みを支援します。",
    icon: Cpu,
    href: "/services/ai",
  },
];

export function ServiceOverviewSection() {
  return (
    <section className="bg-white py-24 md:py-20">
      <Container>
        <AnimatedSection>
          <SectionTitle en="SERVICES" ja="提供サービス" />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block h-full">
                <div className="flex h-full flex-col rounded-3xl bg-linear-to-br from-brand-primary/90 to-brand-navy p-10 shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-brand-light/50 relative overflow-hidden group-hover:from-brand-primary group-hover:to-[#121c32]">
                  {/* 背景の装飾エフェクト */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand-primary border border-white/20">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mb-8 text-base leading-relaxed text-white/90 flex-1">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-bold text-white border-t border-white/20 pt-6 group-hover:text-brand-light transition-colors">
                    詳細を見る
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

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
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f1f6fc_0%,#ffffff_24%)] pt-14 pb-20 md:pt-18 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgba(8,17,26,0.1),rgba(8,17,26,0)_72%)]" />

      <Container className="relative z-10">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionTitle
            en="SERVICES"
            ja="提供サービス"
            className="mb-5 md:mb-6 [&>h2]:text-[clamp(2rem,3.2vw,3.25rem)] [&>h2]:leading-[1.12] [&>h2]:tracking-[-0.02em]"
          />
          <p className="text-[clamp(0.95rem,1.4vw,1.05rem)] text-text-secondary leading-relaxed [word-break:auto-phrase] [overflow-wrap:break-word]">
            戦略設計から制作・開発・運用改善まで、課題と成果指標に合わせて必要な支援を一体で提供します。
          </p>
        </AnimatedSection>
        
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block h-full">
                <div className="relative flex h-full min-h-[23.5rem] flex-col items-center overflow-hidden rounded-[1.75rem] bg-linear-to-br from-brand-primary to-brand-navy p-7 text-center shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-brand-light/50 group-hover:from-brand-primary/90 group-hover:to-[#121c32] md:min-h-[24.5rem] md:p-8">
                  {/* 背景の装飾エフェクト */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand-primary md:mb-6 md:h-16 md:w-16">
                    <service.icon className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <h3 className="mb-4 text-[1.25rem] md:text-[1.45rem] font-bold text-white tracking-tight leading-[1.3] [word-break:auto-phrase] [overflow-wrap:break-word]">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm md:text-[0.97rem] leading-[1.75] text-white/92 flex-1 [word-break:auto-phrase] [overflow-wrap:break-word]">
                    {service.description}
                  </p>
                  <div className="mt-auto flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 text-sm font-bold text-white/90 transition-colors group-hover:bg-white/14 group-hover:text-white">
                    詳細を見る
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
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

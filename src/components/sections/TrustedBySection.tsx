import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Building2, Command, Hexagon, Component, Layers, Layout, ShieldHalf, TrendingUp, Users, Target } from "lucide-react";

const COMPANIES = [
  { 
    name: "Global Tech Inc.", 
    icon: Command, 
    industry: "SaaS / IT", 
    result: "CVR 150%UP",
    desc: "基幹システムの刷新とUI/UX改善"
  },
  { 
    name: "Future Solutions", 
    icon: Hexagon, 
    industry: "製造・DX", 
    result: "工数60h/月 削減",
    desc: "AI画像認識による検品自動化"
  },
  { 
    name: "Innovate Group", 
    icon: Layers, 
    industry: "EC・小売", 
    result: "売上 1.8倍",
    desc: "ヘッドレスコマースへの移行"
  },
  { 
    name: "Next Frontier", 
    icon: Component, 
    industry: "医療・バイオ", 
    result: "新規リード 2倍",
    desc: "専門特化型ポータルサイト構築"
  },
];

export function TrustedBySection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <AnimatedSection>
              <div className="section-badge mb-4">Partnership Success</div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-brand-navy leading-tight">
                ビジネスの成長を加速させる、<br />
                確かなパートナーシップ。
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1} className="hidden lg:block">
            <p className="text-gray-500 font-medium text-right max-w-xs">
              スタートアップから上場企業まで、<br />
              累計50社以上の事業推進をサポートしています。
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANIES.map((company, index) => {
            const Icon = company.icon;
            return (
              <AnimatedSection key={index} delay={0.1 * index} threshold={0.2}>
                <div className="group h-full p-8 rounded-[2rem] bg-background-alt border border-slate-200 transition-all duration-500 hover:bg-white hover:border-brand-primary/30 hover:shadow-premium">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 flex items-center gap-1 border border-emerald-100">
                      <TrendingUp className="w-3 h-3" />
                      {company.result}
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-widest mb-2">
                    {company.industry}
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-navy mb-3">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {company.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.5} className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-6 px-10 py-6 bg-brand-navy rounded-[2.5rem] shadow-2xl">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-brand-navy bg-slate-700" />
              ))}
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div className="text-white text-sm font-bold">
              他、AI・フィンテック等 <span className="text-brand-primary text-lg ml-1">50+</span> 社の実績
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

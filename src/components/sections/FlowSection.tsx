import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const flowSteps = [
  { step: "01", title: "無料オンライン相談", desc: "現状の課題や目標、大まかなご予算などをヒアリングします。要件が固まっていなくてもご安心ください。" },
  { step: "02", title: "ご提案・お見積り", desc: "ヒアリング内容を元に、最適な解決策やロードマップ、費用感をご提案いたします。" },
  { step: "03", title: "要件定義・設計", desc: "目標達成に必要な機能や構成、デザインの方向性などを詳細に詰めていきます。" },
  { step: "04", title: "デザイン・開発", desc: "こまめに進捗をすり合わせながら、高品質なUIと堅牢なシステムを構築します。" },
  { step: "05", title: "公開・運用開始", desc: "十分なテストを経てリリース。その後も、データ分析や改善提案を通じて事業成長を継続的に支援します。" },
];

export function FlowSection() {
  return (
    <section id="flow" className="bg-white py-20 md:py-24">
      <Container>
        <AnimatedSection>
          <SectionTitle en="WORK FLOW" ja="進行フロー" />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl mt-16 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[28px] top-6 bottom-6 w-px bg-brand-primary/20 hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {flowSteps.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="shrink-0 flex items-center gap-4 md:block px-4 md:px-0">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light font-bold text-brand-primary ring-4 ring-white shadow-sm">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary md:hidden">{item.title}</h3>
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-gray-100 md:ml-8 relative">
                    {/* Arrow pointing left, hidden on mobile */}
                    <div className="absolute top-7 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45 hidden md:block" />
                    
                    <h3 className="mb-3 text-xl font-bold text-text-primary hidden md:block border-b border-gray-50 pb-3">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}

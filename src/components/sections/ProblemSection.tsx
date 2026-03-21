import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SearchX, MegaphoneOff, Settings2, Users, ArrowDown } from "lucide-react";

const PROBLEMS = [
  {
    icon: SearchX,
    title: "「作って終わり」になっている",
    desc: "Webサイトやシステムを作ったものの、売上や問い合わせ増加といった具体的な事業成果に結びついていない。",
  },
  {
    icon: MegaphoneOff,
    title: "自社の強みが正しく伝わらない",
    desc: "デザインは綺麗だが、ターゲット顧客に対して「なぜ他社ではなく自社を選ぶべきか」というメッセージが刺さっていない。",
  },
  {
    icon: Settings2,
    title: "DXやAI化の進め方が分からない",
    desc: "業務効率化のためにシステムやAIを導入したいが、社内に知見のある人材がおらず、何から手をつけるべきか見えない。",
  },
  {
    icon: Users,
    title: "複数社とのやり取りが手間",
    desc: "制作会社、システム開発会社、コンサルと別々に契約しており、要件定義やコミュニケーションのコストが膨大になっている。",
  },
];

export function ProblemSection() {
  return (
    <section id="issues" className="bg-background-alt pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
      {/* Hero connection bridge */}
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(8,17,26,0.2),rgba(8,17,26,0))] pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-brand-light/18 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <AnimatedSection>
            <SectionTitle
              en="ISSUES"
              ja="こんな課題はありませんか？"
              className="mb-5 md:mb-6 [&>h2]:text-[clamp(2rem,4vw,3.5rem)] [&>h2]:leading-[1.12] [&>h2]:tracking-[-0.02em]"
            />
            <p className="text-[clamp(0.95rem,1.6vw,1.125rem)] text-text-secondary leading-relaxed [word-break:auto-phrase] [overflow-wrap:break-word]">
              多くのBtoB企業が、デジタル化やWebマーケティングにおいて共通の悩みを抱えています。
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                  {/* Subtle red accent indicating "problem" */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-400 opacity-20 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-brand-navy leading-snug">
                      {problem.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4} className="mt-14 md:mt-16 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8">
            <ArrowDown className="w-5 h-5 text-brand-primary" />
          </div>
          
          <div className="inline-block bg-brand-navy text-white px-8 py-6 md:px-12 md:py-8 rounded-3xl shadow-xl border border-brand-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-brand-primary/10 to-transparent pointer-events-none" />
            <p className="text-lg md:text-2xl font-black tracking-tight relative z-10">
              SocialBoostが、これらの課題を<span className="text-brand-light">ワンストップで解決</span>します。
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Target, Layers, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "01. 事業課題の真の理解から入る",
    description: "「言われたものを作る」だけの制作会社ではありません。ビジネスモデルやターゲット、現状のボトルネックを深く理解し、本来解決すべき課題を特定した上で最適なソリューションをご提案します。",
    icon: Target,
  },
  {
    title: "02. 制作・システム・AIまで一気通貫",
    description: "Webサイトの立ち上げから、業務を効率化するシステム開発、最新のAI技術の導入まで。複数の専門業者を跨ぐことなく、一括で相談・進行が可能なため、一貫性とスピードが両立します。",
    icon: Layers,
  },
  {
    title: "03. スモールスタートからの段階的拡張",
    description: "最初から多額の投資を求めることはしません。まずは必要最小限（MVP）で小さく始めて効果を検証し、事業の成長に合わせて柔軟にシステムやサイトを拡張していく、リスクの低いロードマップを描きます。",
    icon: TrendingUp,
  },
];

export function ReasonsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle en="REASONS" ja="選ばれる理由" />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-12 mt-16 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex flex-col items-start border-t border-brand-primary/20 pt-8">
                <div className="mb-6 rounded-2xl bg-brand-light p-4 text-brand-primary">
                  <reason.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight text-text-primary">
                  {reason.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

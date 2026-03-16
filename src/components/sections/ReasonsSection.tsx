import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Target, Layers, TrendingUp } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "01. 事業課題の真の理解から入る",
    description:
      "「言われたものを作る」だけの制作会社ではありません。ビジネスモデルやターゲット、現状のボトルネックを深く理解し、本来解決すべき課題を特定した上で最適なソリューションをご提案します。",
    icon: Target,
    image: "/images/reason-01.png",
  },
  {
    title: "02. 制作・システム・AIまで一気通貫",
    description:
      "Webサイトの立ち上げから、業務を効率化するシステム開発、最新のAI技術の導入まで。複数の専門業者を跨ぐことなく、一括で相談・進行が可能なため、一貫性とスピードが両立します。",
    icon: Layers,
    image: "/images/reason-02.png",
  },
  {
    title: "03. スモールスタートからの段階的拡張",
    description:
      "最初から多額の投資を求めることはしません。まずは必要最小限（MVP）で小さく始めて効果を検証し、事業の成長に合わせて柔軟にシステムやサイトを拡張していく、リスクの低いロードマップを描きます。",
    icon: TrendingUp,
    image: "/images/reason-03.png",
  },
];

export function ReasonsSection() {
  return (
    <section className="bg-background-alt py-24 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle en="REASONS" ja="選ばれる理由" />
        </AnimatedSection>

        <div className="mt-16 space-y-16">
          {reasons.map((reason, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`flex flex-col gap-8 md:gap-16 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Image */}
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <div className="relative aspect-square w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 360px, (max-width: 1024px) 40vw, 420px"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-7/12 border-t-4 border-brand-primary pt-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-primary">
                    <reason.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold leading-tight text-text-primary sm:text-2xl">
                    {reason.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PricingGuideSection() {
  return (
    <section className="bg-background-alt py-24 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle en="PRICING" ja="料金の考え方" />
        </AnimatedSection>

        <div className="mx-auto max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-100 h-full flex flex-col transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-gray-100 pb-4">
                価値に見合った適正価格
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                「とりあえず動く」だけの安価なシステムや、「見た目が綺麗なだけ」のサイトは作りません。売上向上や業務効率化という成果を生み出すために必要な品質を、適正な価格でご提供します。
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-100 h-full flex flex-col transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-text-primary mb-4 border-b border-gray-100 pb-4">
                スモールスタートの推奨
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                初期費用を最小限に抑え、MVP（最小限のプロダクト）から仮説検証を始めるアジャイル的な進め方も可能です。事業のフェーズに合わせたご提案をいたします。
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Link href="/pricing" tabIndex={-1}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white group hover:bg-brand-light">
              サービス別ご参考料金を見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}

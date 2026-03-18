import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calculator, Crosshair } from "lucide-react";
import Link from "next/link";

export function MiniAppSection() {
  return (
    <section className="py-24 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-brand-accent/3 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-tight mb-6">
            いきなり相談するのは、<br className="md:hidden" />
            少しハードルが高いですか？
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            ご自身の課題に合ったプランや、おおよその費用感が<br className="hidden md:block" />
            カンタンにわかる無料ツールをご用意しました。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Diagnosis Card */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-primary/20 transition-all h-full flex flex-col group">
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Crosshair className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">無料 Web戦略診断</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                3〜4問のカンタンな質問にポチポチ答えるだけで、自社の課題スコアと推奨されるアプローチがその場でわかります。
              </p>
              <Link href="/contact" tabIndex={-1} className="block mt-auto">
                <Button className="w-full justify-between group-hover:bg-brand-accent transition-colors" size="lg">
                  診断をはじめる（無料）
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Pricing Simulator Card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-primary/20 transition-all h-full flex flex-col group">
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">概算 料金シミュレーター</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                ページ数や必要なシステム機能、デザインのこだわりなどを選ぶと、リアルタイムで開発費用の目安が計算されます。
              </p>
              <Link href="/pricing" tabIndex={-1} className="block mt-auto">
                <Button variant="outline" className="w-full justify-between" size="lg">
                  料金表・シミュレーターを見る
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

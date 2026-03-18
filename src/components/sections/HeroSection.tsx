import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background-light pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-25 blur-[120px] bg-brand-primary pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15 blur-[140px] bg-sky-400 pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#1877F2 1px, transparent 1px), linear-gradient(90deg, #1877F2 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <AnimatedSection delay={0.05}>
              <span className="section-label mb-6">
                デジタル戦略パートナー
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="mt-6 text-[2.6rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-black tracking-tight leading-[1.15]">
                <span className="text-text-primary">売上と</span>
                <br />
                <span className="gradient-text">ブランドを育てる、</span>
                <br />
                <span className="text-text-primary">
                  一気通貫の
                </span>
                <span className="relative inline-block text-brand-primary ml-1">
                  Web戦略
                  <span className="absolute bottom-1 left-0 w-full h-[6px] rounded-full bg-brand-primary/20" />
                </span>
                <span className="text-text-primary">。</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="mt-7 max-w-lg text-[1.05rem] leading-[1.9] text-text-secondary">
                単なる「ホームページ制作」ではありません。<br className="hidden md:block" />
                Web戦略の設計から、コーポレートサイト・LP・業務システム・AI導入まで。
                あなたの事業成長に伴走するパートナーです。
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" tabIndex={-1} className="w-full sm:w-[320px]">
                <Button size="lg" className="w-full group text-base h-13 px-7 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-shadow justify-center">
                  オンラインで無料相談する
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services" tabIndex={-1} className="w-full sm:w-[320px]">
                <Button size="lg" variant="outline" className="w-full glass-card text-base h-13 px-7 hover:bg-white/90 transition-all justify-center">
                  対応可能な領域を見る
                </Button>
              </Link>
            </AnimatedSection>

            {/* Social proof strip */}
            <AnimatedSection delay={0.45} className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
                累計50社以上の実績
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_6px_rgba(24,119,242,0.7)]" />
                戦略設計から実装まで一貫対応
              </div>
            </AnimatedSection>
          </div>

          {/* Hero image – hidden on mobile */}
          <AnimatedSection delay={0.2} className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/images/hero-visual.png"
                alt="SocialBoost Web戦略 デジタル戦略パートナー"
                fill
                priority
                fetchPriority="high"
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 0px, 500px"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

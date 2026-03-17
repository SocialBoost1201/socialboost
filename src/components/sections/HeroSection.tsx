import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background-light pt-20">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 blur-[100px] w-[800px] h-[800px] rounded-full bg-brand-primary/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 blur-[120px] w-[600px] h-[600px] rounded-full bg-brand-accent/30 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <AnimatedSection delay={0.1}>
              <span className="inline-block rounded-full bg-brand-light px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-primary mb-6 ring-1 ring-brand-primary/20 shadow-sm">
                デジタル戦略パートナー
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-text-primary leading-[1.4] md:leading-tight">
                売り上げと<br />
                ブランドを育てる、<br />
                一気通貫の<span className="text-brand-primary relative inline-block">
                  Web戦略
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-primary/20 -z-10" />
                </span>。
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                単なる「ホームページ制作」ではありません。<br className="hidden md:block" />
                Web戦略の設計から、洗練されたコーポレートサイト、業務を効率化するシステムやAI導入まで。あなたの事業成長に伴走するパートナーです。
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" tabIndex={-1} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group text-base h-13 px-7">
                  オンラインで無料相談する
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services" tabIndex={-1} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm text-base h-13 px-7">
                  対応可能な領域を見る
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          {/* Hero image – hidden on mobile */}
          <AnimatedSection delay={0.5} className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[520px] aspect-square">
              <Image
                src="/images/hero-visual.png"
                alt="SocialBoost Web戦略 デジタル戦略パートナー"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 0px, 520px"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function VisionSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-light text-sm font-bold tracking-wider mb-8">
              OUR VISION
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-12 tracking-tight">
              作るだけではなく、<br className="hidden md:block" />
              事業を<span className="text-brand-accent">加速</span>させるパートナー。
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="space-y-6 text-lg md:text-xl text-brand-light/90 leading-relaxed font-medium">
            <p>
              私たちは単なるWeb制作会社ではありません。
            </p>
            <p>
              お客様の事業課題を深く理解し、Webサイト、システム、アプリ、AIといった<br className="hidden md:block" />
              最新テクノロジーを最適なバランスで組み合わせることで、<br className="hidden md:block" />
              ビジネスの成長と効率化を一気通貫で支援します。
            </p>
            <p>
              「何から始めればいいかわからない」という段階から、<br className="hidden md:block" />
              ぜひ私たちにご相談ください。
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

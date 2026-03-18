"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-24 md:py-20 bg-brand-primary text-white relative overflow-hidden">
      {/* Noise Texture Overlay for premium frosted feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />

      {/* Dynamic Aurora / Breathing Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          x: ['25%', '28%', '25%'],
          y: ['-25%', '-28%', '-25%']
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[110px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: ['-25%', '-20%', '-25%'],
          y: ['25%', '20%', '25%'],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-light text-sm font-bold tracking-wider mb-8">
              OUR VISION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-12 tracking-tight">
              作るだけではなく、<br className="hidden md:block" />
              事業を<span className="text-yellow-300">加速</span>させるパートナー。
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
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

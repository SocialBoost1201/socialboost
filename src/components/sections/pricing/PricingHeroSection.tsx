"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function PricingHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-brand-navy pt-20 pb-20"
    >
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.15)_0%,transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex items-center justify-center mb-10"
          >
            <span className="section-badge bg-white/5 border-white/10 text-brand-light">
              Pricing Philosophy
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-12">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.1 }}
              className="block"
            >
              透明で、合理的。
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
              className="block text-brand-primary mt-2"
            >
              価値に、正しく投資する。
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            ただの「安さ」は求めない。無駄な多重下請けや非効率なプロセスを排除し、<br className="hidden md:block" />
            事業成長に直結する本質的な価値に対して、最適化された投資を。
          </motion.p>
        </motion.div>
      </Container>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Select Plan</span>
        <div className="w-px h-10 bg-white/10 overflow-hidden">
          <motion.div
            animate={{ y: [0, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-brand-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

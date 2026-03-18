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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-brand-navy pt-20 pb-20"
    >
      {/* Premium Dark Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[120px] mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-bold tracking-widest text-brand-light uppercase shadow-[0_0_30px_rgba(24,119,242,0.1)]">
              Pricing Philosophy
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="block"
            >
              透明で、合理的。
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block text-brand-light mt-2"
            >
              投資対効果を最大化する価格。
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            ただ「安い」のではありません。<br className="hidden md:block" />
            無駄なマージンと非効率なプロセスを徹底的に削ぎ落とし、事業成長に直結する「価値」だけに投資できる料金体系を実現しました。
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Code2, Globe, Sparkles, Zap } from "lucide-react";

export function ServiceHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={ref}
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-white pt-32 pb-48"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(24,119,242,0.04)_0%,transparent_70%)] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(24,119,242,0.03)_0%,transparent_70%)] rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#1B2A4A 1px, transparent 1px), linear-gradient(90deg, #1B2A4A 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div 
          style={{ y, opacity, scale }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-10 mx-auto"
          >
            Capabilities
          </motion.div>

          {/* Main Title */}
          <h1 className="text-[2.6rem] leading-[0.9] sm:text-5xl md:text-7xl lg:text-9xl font-black text-brand-navy tracking-tighter mb-10 md:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.1 }}
              className="block"
            >
              単なる「制作」を、
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
              className="block text-brand-primary mt-4"
            >
              「事業成長」に変える。
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-base md:text-xl lg:text-2xl text-text-secondary font-bold leading-relaxed max-w-3xl mx-auto mb-12 md:mb-20"
          >
            デジタル領域のあらゆる課題を、<br className="hidden md:block" />
            戦略設計から実装、運用まで一気通貫で解決します。
          </motion.p>

          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-24"
          >
            {[
              { icon: Globe, label: "Web戦略・KPI設計" },
              { icon: Code2, label: "システム・アプリ開発" },
              { icon: Zap, label: "UI/UXデザイン" },
              { icon: Sparkles, label: "AI導入・プロセス改善" }
            ].map((item, i) => (
              <div key={i} className="group relative p-5 md:p-8 rounded-2xl md:rounded-4xl bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:border-brand-primary/20 hover:shadow-premium overflow-hidden text-center">
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <item.icon className="w-7 h-7 md:w-10 md:h-10 text-brand-primary mx-auto mb-3 md:mb-6 shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3" strokeWidth={1.5} />
                <span className="block text-xs md:text-base font-black text-brand-navy tracking-tight leading-snug">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button asChild size="xl" className="w-full sm:w-auto px-16 rounded-3xl shadow-2xl shadow-brand-primary/20">
              <Link href="/contact" className="gap-3">
                <span>自社の課題を相談する</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="xl" className="w-full sm:w-auto px-12 font-black text-text-secondary hover:text-brand-primary">
              <Link href="/pricing">
                料金の目安を確認する
              </Link>
            </Button>
          </motion.div>

        </motion.div>
      </Container>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase rotate-0">Scroll</span>
        <div className="w-px h-16 bg-linear-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
}

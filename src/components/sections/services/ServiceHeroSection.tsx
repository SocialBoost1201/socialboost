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

  const words = "デジタル領域のあらゆる課題を、戦略から実装まで一気通貫で解決する。".split("");

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20 pb-32"
    >
      {/* Background Orbs & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#1B2A4A 1px, transparent 1px), linear-gradient(90deg, #1B2A4A 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div 
          style={{ y, opacity, scale }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-bold tracking-widest text-brand-primary uppercase">
              <Sparkles className="w-4 h-4" />
              Comprehensive Digital Capabilities
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-black text-text-primary leading-[1.1] tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="block"
            >
              単なる「制作」ではなく、
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block text-brand-primary mt-2"
            >
              「事業成長」を創る。
            </motion.span>
          </h1>

          {/* Staggered Text */}
          <div className="mt-8 mb-16 max-w-3xl mx-auto h-auto min-h-[60px]">
            <p className="text-lg md:text-2xl text-text-secondary font-medium leading-relaxed">
              {words.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </div>

          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {[
              { icon: Globe, label: "Web戦略・KPI設計" },
              { icon: Code2, label: "システム・アプリ開発" },
              { icon: Zap, label: "UI/UXデザイン" },
              { icon: Sparkles, label: "AI導入・プロセス改善" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/80 border border-gray-100 backdrop-blur-sm group hover:border-brand-primary/30 transition-colors">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-primary mb-4 shrink-0 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <span className="text-sm md:text-base font-bold text-text-primary tracking-wide">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-[320px] group h-14 text-base shadow-[0_0_40px_rgba(24,119,242,0.3)] hover:shadow-[0_0_60px_rgba(24,119,242,0.5)] transition-shadow">
              <Link href="/contact" tabIndex={-1}>
                自社の課題を相談してみる
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full sm:w-[280px] h-14 text-base font-bold text-text-secondary hover:text-text-primary">
              <Link href="/pricing" tabIndex={-1}>
                料金の目安を確認する
              </Link>
            </Button>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}

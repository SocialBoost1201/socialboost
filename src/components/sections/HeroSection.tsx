"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { CSSProperties } from "react";
import { FloatingWorks } from "@/components/hero/FloatingWorks";

const STATS = [
  { value: "50+", label: "支援企業数", sub: "スタートアップから上場企業まで" },
  { value: "2.5x", label: "最大成果事例", sub: "リード獲得数が2.5倍に改善" },
  { value: "60h", label: "業務削減実績", sub: "月間工数を最大60時間削減" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection() {
  const heroTokens = {
    "--hero-base": "#08111a",
    "--hero-logo": "#009ce5",
    "--hero-primary": "#3ea3ff",
    "--hero-accent": "#0e73eb",
    "--hero-grad-light": "#33d8ff",
    "--hero-grad-dark": "#006ad3",
  } as CSSProperties;

  // ─── マウス視差 ───────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 22, stiffness: 50 });
  const smoothY = useSpring(mouseY, { damping: 22, stiffness: 50 });
  const bgX = useTransform(smoothX, [0, 1], [-24, 24]);
  const bgY = useTransform(smoothY, [0, 1], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={heroTokens}
      className="relative isolate overflow-hidden bg-[var(--hero-base)]"
    >
      {/* HeroBackground — マウス視差レイヤー */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ x: bgX, y: bgY, scale: 1.06 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2560"
          alt="Premium Office Environment"
          fill
          className="object-cover opacity-[0.17] mix-blend-luminosity"
          priority
        />
        {/* 浮遊グラデーション1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(70% 80% at 50% 18%,rgba(51,216,255,0.15) 0%,rgba(8,17,26,0) 55%),radial-gradient(60% 60% at 80% 70%,rgba(0,106,211,0.22) 0%,rgba(8,17,26,0) 58%)",
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
        {/* 浮遊グラデーション2 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(125deg,rgba(62,163,255,0.08) 0%,transparent 42%,rgba(14,115,235,0.08) 100%)",
          }}
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        />
      </motion.div>

      {/* HeroOverlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(8,17,26,0.56),rgba(8,17,26,0.78)_34%,rgba(8,17,26,0.9)_100%)]" />

      {/* FloatingWorks — 浮遊ポートレート層 */}
      <div className="absolute inset-0 z-[2]">
        <FloatingWorks />
      </div>

      {/* HeroInner */}
      <div className="relative z-10 mx-auto flex min-h-svh w-[min(82.5rem,90%)] flex-col items-start justify-start pt-[9.5rem] sm:pt-[10.5rem] pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:items-center md:justify-center md:pt-[6.25rem] md:pb-20">
        <Container className="w-full max-w-none px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-4xl text-center"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-md mb-7 md:mb-8">
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-[var(--hero-primary)]"
                  animate={{ scale: [1, 2.2, 1], opacity: [0.75, 0, 0.75] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--hero-primary)]" />
              </span>
              <span className="text-xs font-bold text-slate-200 tracking-widest uppercase">
                Digital Strategy & High-end Development
              </span>
            </motion.div>

            {/* HeroTitle */}
            <motion.div variants={itemVariants} className="flex flex-col gap-[1.125rem] md:gap-[2.5rem]">
              <h1
                style={{ color: "white", fontFeatureSettings: "\"palt\" 1" }}
                className="mx-auto max-w-[15ch] md:max-w-[18ch] text-[clamp(2.2rem,12.8vw,4.125rem)] md:text-[clamp(3.1rem,2rem+3.8vw,5.7rem)] font-medium leading-[1.02] md:leading-[0.94] tracking-[-0.03em] text-balance [word-break:auto-phrase] [overflow-wrap:break-word]"
              >
                <span className="text-white">Webと業務改善を</span>
                <span className="block">
                  <span className="text-[var(--hero-primary)]">一気通貫で前に進める。</span>
                </span>
              </h1>
            </motion.div>

            {/* HeroDescription */}
            <motion.p
              variants={itemVariants}
              style={{ fontFeatureSettings: "\"palt\" 1" }}
              className="mx-auto mt-5 md:mt-8 max-w-[42rem] text-[clamp(1rem,1.6vw,1.25rem)] text-slate-200/95 leading-[1.72] font-medium text-balance [word-break:auto-phrase] [overflow-wrap:break-word]"
            >
              Web制作・業務システム・AI導入を一体で支援。課題整理から設計、実装、運用改善まで一貫して進めます。
            </motion.p>

            {/* HeroCTAGroup */}
            <motion.div variants={itemVariants} className="mt-6 md:mt-10 mx-auto flex w-full max-w-[34rem] flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:flex-1 h-[3.5rem] rounded-2xl px-6 text-sm shadow-xl shadow-brand-primary/25">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  お問い合わせ・ご相談
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:flex-1 h-[3.5rem] rounded-2xl px-6 text-sm border-white/25 text-white hover:bg-white/10 whitespace-nowrap">
                <Link href="/works" className="flex items-center justify-center gap-2">
                  制作実績を見る
                </Link>
              </Button>
            </motion.div>

            {/* HeroTrustNote */}
            <motion.div variants={itemVariants} className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs text-gray-300 font-semibold">
              <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <Clock3 className="h-3.5 w-3.5 text-[var(--hero-grad-light)]" />
                最短当日返信
              </span>
              <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--hero-grad-light)]" />
                売り込みなし
              </span>
              <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <BadgeCheck className="h-3.5 w-3.5 text-[var(--hero-grad-light)]" />
                秘密厳守で相談可能
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 flex w-full items-center justify-center gap-2 md:hidden">
              {STATS.map((s, i) => (
                <div key={i} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center">
                  <div className="text-lg font-black tracking-tight text-white">{s.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-gray-300">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* HeroProofCards */}
            <motion.div variants={itemVariants} className="mt-8 hidden md:grid grid-cols-3 gap-2.5 sm:gap-4 pt-6 md:pt-8 border-t border-white/10">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-2.5 py-3.5 text-center sm:px-4 sm:py-5 md:px-5 md:py-6">
                  <div className="mb-1 text-xl sm:text-2xl md:text-4xl font-black text-white tracking-tight">{s.value}</div>
                  <div className="mb-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-gray-300">{s.label}</div>
                  <div className="hidden md:block text-xs font-medium leading-relaxed text-gray-400">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.65 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold text-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

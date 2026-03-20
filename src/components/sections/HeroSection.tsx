"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, CheckCircle2, ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-brand-navy pt-20 pb-18 md:pt-24 md:pb-22 lg:py-0">
      {/* ── Background Visual ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2560"
          alt="Premium Office Environment"
          fill
          className="object-cover opacity-15 mix-blend-luminosity scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,12,27,0.66),rgba(2,12,27,0.86)),radial-gradient(circle_at_24%_24%,rgba(24,119,242,0.16)_0%,transparent_52%),radial-gradient(circle_at_76%_52%,rgba(24,119,242,0.08)_0%,transparent_58%)]" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 md:gap-14 lg:gap-16 xl:gap-20"
        >
          {/* ── Content Block ── */}
          <div className="flex-1 text-center lg:text-left lg:max-w-[42rem]">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-7 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="text-xs font-bold text-brand-light tracking-widest uppercase">
                Digital Strategy & High-end Development
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{ color: "white" }}
              className="max-w-[16ch] md:max-w-[18ch] mx-auto lg:mx-0 text-[clamp(2rem,3.9vw,3.7rem)] font-extrabold tracking-[-0.01em] drop-shadow-2xl leading-[1.24] mb-6 md:mb-8"
            >
              <span className="text-white">問い合わせ獲得・採用強化・業務効率化を、</span>
              <span className="block mt-1 md:mt-2">
                <span className="text-brand-primary">戦略設計から実装まで</span>
                <span className="text-white">一気通貫で支援。</span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-200/95 leading-[1.85] mb-9 md:mb-11 max-w-3xl mx-auto lg:mx-0 font-medium">
              コーポレートサイト制作、業務システム、AI活用まで。<br className="hidden lg:block" />
              事業課題に直結する成果指標を起点に、意思決定しやすい設計でプロジェクトを推進します。
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch gap-3.5 mb-7 max-w-xl mx-auto lg:mx-0">
              <Button asChild size="lg" className="w-full sm:flex-1 h-14 text-sm px-6 shadow-xl shadow-brand-primary/25">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  お問い合わせ・ご相談
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-none h-14 px-6 text-sm border-white/25 text-white hover:bg-white/10 whitespace-nowrap">
                <Link href="/works">制作実績を見る</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 text-xs text-gray-300 font-semibold mb-9 md:mb-11">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <Clock3 className="w-3.5 h-3.5 text-brand-light" />
                最短当日返信
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-light" />
                売り込みなし
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <BadgeCheck className="w-3.5 h-3.5 text-brand-light" />
                秘密厳守で相談可能
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-7 md:pt-8 border-t border-white/10">
              {STATS.map((s, i) => (
                <div key={i} className="text-left rounded-2xl border border-white/10 bg-white/5 px-4 py-5 md:px-5 md:py-6">
                  <div className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1.5">{s.value}</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-[0.18em] mb-1.5">{s.label}</div>
                  <div className="text-xs text-gray-400 font-medium leading-relaxed">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Visual Block ── */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[480px] xl:w-[500px] perspective-1000"
          >
            {/* Case Study Preview Card */}
            <div className="group bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border-t-4 border-brand-primary/80 p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden hover-lift border border-white/20">
              <div className="flex items-center justify-between mb-7">
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-navy flex items-center justify-center text-xs font-bold text-white">
                    +50
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors">
                成果数値まで確認できる<br />導入事例を見る
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-7">
                単なる公開がゴールではありません。コンバージョン率2.5倍、月間工数60時間削減など、実数値に基づいた「成功」のみを追求します。
              </p>

              <Link href="/works" className="flex items-center justify-between px-5 py-4 bg-brand-light rounded-2xl text-brand-primary font-bold group/link">
                <span className="text-sm">導入事例ギャラリー</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Floating Trust Indicator */}
            <div className="mt-5 bg-brand-navy-light/55 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Security & Privacy</div>
                <div className="text-gray-400 text-xs">エンタープライズ基準の堅牢な開発</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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

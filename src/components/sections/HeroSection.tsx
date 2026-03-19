"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Globe, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: "50+", label: "実績企業数", sub: "スタートアップ〜上場企業" },
  { value: "98%", label: "リピート率", sub: "継続的なパートナーシップ" },
  { value: "2w", label: "最短納期", sub: "戦略に基づいた超速開発" },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-brand-navy py-20 lg:py-0">
      {/* ── Background Visual ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2560"
          alt="Business Strategy"
          fill
          className="object-cover opacity-20 mix-blend-luminosity scale-105"
          priority
        />
        {/* Advanced Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(24,119,242,0.15)_0%,transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24"
        >
          {/* ── Content Block ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="text-xs font-bold text-brand-light tracking-widest uppercase">
                Digital Strategy & High-end Development
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ color: 'white' }} className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tighter drop-shadow-lg leading-tight mb-8">
              売上を、<span className="text-brand-primary">「資産」</span>へ。<br />
              戦略から実装まで。<br className="hidden md:block" />
              一貫したWebの勝ち筋。
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
              単なる「制作」で終わらせない。事業成長にフォーカスした戦略設計、<br className="hidden xl:block" />
              そして、世界水準の技術力が、貴社のビジネスを加速させます。
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16">
              <Button asChild size="lg" className="h-16 px-10">
                <Link href="/contact" className="flex items-center gap-3">
                  無料相談・お問い合わせ
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 border-white/20 text-white hover:bg-white/5">
                <Link href="/services">サービス詳細</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {STATS.map((s, i) => (
                <div key={i} className="text-left">
                  <div className="text-3xl font-black text-white tracking-tight mb-1">{s.value}</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">{s.label}</div>
                  <div className="text-[10px] text-gray-400">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Visual Block ── */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[450px] space-y-6"
          >
            {/* Case Study Preview Card */}
            <div className="group relative bg-white rounded-[2.5rem] p-8 shadow-2xl overflow-hidden hover-lift">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-navy flex items-center justify-center text-[10px] font-bold text-white">
                    +50
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors">
                成果に直結した<br />最新の事例を見る
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                単なる公開がゴールではありません。コンバージョン率2.5倍、月間工数60時間削減など、実数値に基づいた「成功」のみを追求します。
              </p>

              <Link href="/works" className="flex items-center justify-between p-4 bg-brand-light rounded-2xl text-brand-primary font-bold group/link">
                <span className="text-sm">導入事例ギャラリー</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Floating Trust Indicator */}
            <div className="bg-brand-navy-light/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5">
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
        <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Scroll</span>
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

"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

const TRUSTED_BY = [
  "累計50社以上の実績",
  "戦略設計から実装まで一貫対応",
  "最短2週間での納品実績",
];

const STATS = [
  { value: "50+", label: "支援企業数" },
  { value: "98%", label: "リピート率" },
  { value: "2w", label: "最短納期" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-white pt-16 pb-10 md:pt-20">
      {/* Background: Clean light with subtle brand gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(24,119,242,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.05)_0%,transparent_60%)] pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#1877F2 1px, transparent 1px), linear-gradient(90deg, #1877F2 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12 lg:grid lg:grid-cols-2 lg:text-left lg:items-center lg:gap-20">
          
          {/* ── テキストエリア ── */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-light/50 text-xs md:text-sm font-bold text-brand-primary tracking-widest uppercase mb-6 md:mb-8">
                <Zap className="w-3.5 h-3.5" />
                デジタル戦略パートナー
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.1rem] xs:text-[2.5rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-black tracking-tight leading-[1.18] text-brand-navy"
            >
              売上と<br />
              <span className="text-brand-primary">ブランドを育てる、</span>
              <br />
              一気通貫の<span className="relative inline-block">
                <span className="text-brand-primary">Web戦略。</span>
                <span className="absolute bottom-0.5 left-0 w-full h-[5px] rounded-full bg-brand-primary/15 -z-10" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 md:mt-7 text-base md:text-lg leading-[1.85] text-text-secondary max-w-lg mx-auto lg:mx-0"
            >
              単なる「ホームページ制作」ではありません。
              Web戦略の設計から、コーポレートサイト・LP・業務システム・AI導入まで一気通貫で支援します。
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto group text-sm md:text-base px-7 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-0.5 transition-all justify-center"
              >
                <Link href="/contact">
                  オンラインで無料相談する
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm md:text-base px-7 hover:bg-brand-light/50 border-brand-primary/30 text-brand-navy justify-center"
              >
                <Link href="/services">
                  対応可能な領域を見る
                </Link>
              </Button>
            </motion.div>

            {/* Social proof dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start"
            >
              {TRUSTED_BY.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs md:text-sm text-text-secondary">
                  <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${i === 0 ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]' : 'bg-brand-primary shadow-[0_0_6px_rgba(24,119,242,0.6)]'}`} />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── ビジュアルエリア（デスクトップ + スマホのカード表示） ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            {/* Premium stats card */}
            <div className="relative">
              {/* Floating glow behind card */}
              <div className="absolute inset-0 -m-4 bg-linear-to-br from-brand-primary/10 to-sky-400/10 blur-3xl rounded-3xl" />
              
              <div className="relative rounded-3xl border border-white bg-white/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Card Header */}
                <div className="bg-brand-navy px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">SocialBoost</div>
                      <div className="text-gray-300 text-xs">Digital Strategy Partner</div>
                    </div>
                    <div className="ml-auto flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                  {STATS.map((s, i) => (
                    <div key={i} className="p-5 text-center">
                      <div className="text-2xl md:text-3xl font-black text-brand-primary tracking-tight">{s.value}</div>
                      <div className="text-xs text-text-secondary mt-1 font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Service Tags */}
                <div className="px-6 py-5 border-t border-gray-100">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">対応領域</div>
                  <div className="flex flex-wrap gap-2">
                    {["Web制作", "LP", "業務システム", "アプリ", "AI導入", "戦略設計"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-brand-light/60 text-brand-primary text-xs font-bold rounded-lg border border-brand-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust bar */}
                <div className="px-6 pb-5">
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-emerald-700">「何から始めれば」という段階でもご相談いただけます</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

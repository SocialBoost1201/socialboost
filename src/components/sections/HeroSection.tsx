"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
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
    <section className="relative flex min-h-[95svh] items-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-navy">
      {/* ── Background Photo (Reference: baigie/Feel Design) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2560"
          alt="Business Strategy Meeting"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
          priority
        />
        {/* Dark elegant overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/60 via-brand-navy/40 to-brand-navy/80" />
      </div>

      <Container className="relative z-10 w-full mt-10 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* ── テキストブロック（白背景のフロートカード） ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] xl:w-[50%] max-w-2xl bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl relative"
          >
            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-primary rounded-t-2xl" />

            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light/80 text-[10px] font-bold text-brand-primary tracking-widest uppercase mb-5 border border-brand-primary/10">
              <Zap className="w-3 h-3" />
              デジタル戦略パートナー
            </span>

            {/* Headline (Adjusted compact size) */}
            <h1 className="text-2xl xs:text-3xl md:text-[2rem] lg:text-[2.25rem] font-extrabold tracking-tight leading-[1.4] text-brand-navy mb-5">
              売上とブランドを育てる、<br />
              一気通貫のWeb戦略。
            </h1>

            <p className="text-sm md:text-[0.95rem] leading-[1.8] text-text-secondary mb-8">
              単なる「ホームページ制作」ではありません。<br className="hidden md:block" />Web戦略の設計から、コーポレートサイト・LP・業務システム・AI導入まで、事業課題を解決する最適なソリューションをご提案します。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                asChild
                className="w-full sm:w-auto px-7 py-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all justify-center"
              >
                <Link href="/contact">
                  無料相談・お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto px-7 py-2.5 hover:bg-gray-50 border-gray-200 text-text-primary justify-center"
              >
                <Link href="/services">
                  対応領域を見る
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t border-gray-100">
              {TRUSTED_BY.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
                  <span className={`inline-block w-1 h-1 rounded-full shrink-0 ${i === 0 ? 'bg-emerald-400' : 'bg-brand-primary/60'}`} />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── ビジュアルエリア（右側のカード） ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0 lg:w-[40%]"
          >
            {/* Stats card matching the high-end BtoB feel */}
            <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="bg-brand-navy/80 px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-wide">SocialBoost</div>
                    <div className="text-brand-light/70 text-[10px] tracking-wider uppercase">Digital Strategy Partner</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/10 bg-brand-navy/50">
                {STATS.map((s, i) => (
                  <div key={i} className="p-5 text-center">
                    <div className="text-2xl xl:text-3xl font-black text-white tracking-tight">{s.value}</div>
                    <div className="text-[10px] text-gray-400 mt-1 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-6 bg-brand-navy/70">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">主な対応領域</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Web制作", "LP", "業務システム", "アプリ", "AI導入"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-lg border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 p-3.5 bg-brand-primary/20 border border-brand-primary/30 rounded-xl">
                  <Shield className="w-4 h-4 text-brand-light shrink-0" />
                  <span className="text-xs font-bold text-brand-light leading-snug">「何から始めれば」という段階でもご相談いただけます</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

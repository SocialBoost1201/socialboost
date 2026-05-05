"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// ─── 実績数値 ────────────────────────────────────────────
const STATS = [
  { value: "50+", label: "支援企業数", sub: "スタートアップから上場企業まで" },
  { value: "2.5x", label: "最大成果事例", sub: "リード獲得数が2.5倍に改善" },
  { value: "60h", label: "業務削減実績", sub: "月間工数を最大60時間削減" },
];

// ─── 約束タグ ─────────────────────────────────────────────
const PROMISES = [
  { icon: Zap,             label: "最短5日で納品",  colorClass: "text-brand-gold",  bgClass: "bg-amber-50 border-amber-200" },
  { icon: BadgeDollarSign, label: "業界最安水準",    colorClass: "text-brand-green", bgClass: "bg-green-50 border-green-200" },
  { icon: ShieldCheck,     label: "売り込みなし",    colorClass: "text-brand-coral", bgClass: "bg-rose-50 border-rose-200" },
];

// ─── 実績画像 ─────────────────────────────────────────────
const WORKS = [
  { src: "/hero/work-01.webp", title: "実績01" },
  { src: "/hero/work-02.webp", title: "実績02" },
  { src: "/hero/work-03.webp", title: "実績03" },
  { src: "/hero/work-04.webp", title: "実績04" },
  { src: "/hero/work-05.webp", title: "実績05" },
  { src: "/hero/work-06.webp", title: "実績06" },
  { src: "/hero/work-07.webp", title: "実績07" },
];

// ─── アニメーション設定 ──────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

// ─── 上部スライドショー（フェード付きクロスフェード） ────────
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const total = WORKS.length;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setPrev((p) => (p !== null ? p : current));
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % total;
      });
    }, 3800);
    return () => clearInterval(id);
  }, [prefersReducedMotion, total]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/7" }}>
      {/* 前のスライド（フェードアウト） */}
      {prev !== null && (
        <motion.div
          key={`prev-${prev}`}
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Image
            src={WORKS[prev].src}
            alt={WORKS[prev].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 82.5vw"
            priority
          />
        </motion.div>
      )}

      {/* 現在のスライド（フェードイン） */}
      <motion.div
        key={`current-${current}`}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        <Image
          src={WORKS[current].src}
          alt={WORKS[current].title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 82.5vw"
          priority={current === 0}
        />
      </motion.div>

      {/* 左右フェードマスク */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.85) 0%, transparent 18%, transparent 82%, rgba(255,255,255,0.85) 100%)",
        }}
      />
      {/* 下部フェードマスク */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 100%)",
        }}
      />

      {/* ドットインジケーター */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {WORKS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-5 bg-brand-primary" : "w-1.5 bg-brand-primary/30"
            }`}
            aria-label={`実績${i + 1}へ`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── パルスCTAボタン ─────────────────────────────────────
function PulseButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="relative inline-flex w-full sm:w-auto">
      <span className="absolute inset-0 rounded-2xl animate-ping bg-brand-primary opacity-[0.18] pointer-events-none" />
      <span className="absolute inset-0 rounded-2xl animate-ping bg-brand-primary opacity-[0.08] pointer-events-none [animation-delay:500ms]" />
      <Button
        asChild
        size="lg"
        className="relative w-full sm:w-auto h-14 rounded-2xl px-8 text-sm font-bold shadow-xl shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all hover:-translate-y-0.5"
      >
        <Link href={href} className="flex items-center justify-center gap-2">
          {children}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}

// ─── メインコンポーネント ────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* 背景メッシュグラデーション */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(37,99,235,0.05) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 40% at 100% 85%, rgba(223,48,98,0.03) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <div className="relative z-10 mx-auto w-[min(82.5rem,92%)] pt-[4rem] pb-14 sm:pt-[5rem] md:pt-[6rem] md:pb-20">
        <Container className="w-full max-w-none px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-4xl"
          >

            {/* 1. 上部スライドショー（テキストなし） */}
            <motion.div variants={itemVariants} className="mb-10 md:mb-14">
              <HeroSlideshow />
            </motion.div>

            {/* 2. H1 見出し */}
            <motion.h1
              variants={itemVariants}
              style={{ fontFeatureSettings: '"palt" 1' }}
              className="mb-4 md:mb-6 text-center md:text-left text-[clamp(2.25rem,9.5vw,4.25rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-text-primary [word-break:auto-phrase]"
            >
              遅い。高い。
              <br />
              <span className="text-brand-primary">
                そのWeb会社、変えませんか。
              </span>
            </motion.h1>

            {/* 3. サブコピー */}
            <motion.p
              variants={itemVariants}
              style={{ fontFeatureSettings: '"palt" 1' }}
              className="mb-6 md:mb-8 text-center md:text-left text-[clamp(0.95rem,1.6vw,1.15rem)] font-medium leading-[1.8] text-text-secondary [word-break:auto-phrase] max-w-[36rem] mx-auto md:mx-0"
            >
              Web制作・業務改善・AI導入を、業界最速・最安水準で一貫支援。
              <br className="hidden sm:block" />
              課題整理から設計、実装、運用改善まで一気通貫で進めます。
            </motion.p>

            {/* 4. 約束タグ */}
            <motion.div
              variants={itemVariants}
              className="mb-7 md:mb-9 flex flex-wrap justify-center md:justify-start gap-2"
            >
              {PROMISES.map(({ icon: Icon, label, colorClass, bgClass }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold ${bgClass}`}
                >
                  <Icon className={`h-3.5 w-3.5 ${colorClass}`} />
                  <span className="text-text-primary">{label}</span>
                </span>
              ))}
            </motion.div>

            {/* 5. CTAグループ */}
            <motion.div
              variants={itemVariants}
              className="mb-10 md:mb-14 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3"
            >
              <PulseButton href="/contact">無料で相談する</PulseButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 w-full sm:w-auto rounded-2xl px-8 text-sm font-bold border-gray-300 text-text-primary hover:border-brand-primary hover:text-brand-primary transition-all"
              >
                <Link href="/works">制作実績を見る</Link>
              </Button>
            </motion.div>

            {/* 6. 実績数値カード */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4"
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white px-3 py-4 sm:px-5 sm:py-5 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-0.5 text-[clamp(1.5rem,4.5vw,2.4rem)] font-black leading-none tracking-tight text-brand-primary">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-text-secondary">
                    {s.label}
                  </div>
                  <div className="mt-1 hidden sm:block text-[11px] font-medium leading-relaxed text-text-secondary/60">
                    {s.sub}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </Container>
      </div>
    </section>
  );
}

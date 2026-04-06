"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { HeroFloatingObjects } from "./HeroFloatingObjects";

// ─── パネル定義 ────────────────────────────────────────────────────
type PanelSlot = "slot-a" | "slot-b" | "slot-c" | "slot-d" | "slot-e";

type PanelItem = {
  id: string;
  src: string;
  alt: string;
  initialSlot: PanelSlot;
};

const PANELS: PanelItem[] = [
  {
    id: "p1",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    alt: "チームミーティング",
    initialSlot: "slot-a",
  },
  {
    id: "p2",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    alt: "Web制作",
    initialSlot: "slot-b",
  },
  {
    id: "p3",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    alt: "開発現場",
    initialSlot: "slot-c",
  },
  {
    id: "p4",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    alt: "SNS運用",
    initialSlot: "slot-d",
  },
  {
    id: "p5",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "AIコンサルティング",
    initialSlot: "slot-e",
  },
];

const SLOT_ROTATION: Record<PanelSlot, PanelSlot> = {
  "slot-a": "slot-b",
  "slot-b": "slot-c",
  "slot-c": "slot-d",
  "slot-d": "slot-e",
  "slot-e": "slot-a",
};

type SlotConfig = {
  x: string;
  y: string;
  width: string;
  rotateY: number;
  rotateZ: number;
  scale: number;
  opacity: number;
  zIndex: number;
  floatAmplitude: number;
  floatDuration: number;
  enterDelay: number;
};

function getSlotConfigs(): Record<PanelSlot, SlotConfig> {
  return {
    "slot-a": {
      x: "18%",
      y: "8%",
      width: "clamp(180px, 22vw, 280px)",
      rotateY: -18,
      rotateZ: -4,
      scale: 0.98,
      opacity: 1.0,
      zIndex: 8,
      floatAmplitude: 14,
      floatDuration: 6.8,
      enterDelay: 0.1,
    },
    "slot-b": {
      x: "50%",
      y: "4%",
      width: "clamp(140px, 17vw, 210px)",
      rotateY: -10,
      rotateZ: 3,
      scale: 0.88,
      opacity: 0.82,
      zIndex: 5,
      floatAmplitude: 10,
      floatDuration: 8.2,
      enterDelay: 0.25,
    },
    "slot-c": {
      x: "72%",
      y: "16%",
      width: "clamp(120px, 14vw, 170px)",
      rotateY: -5,
      rotateZ: 6,
      scale: 0.76,
      opacity: 0.55,
      zIndex: 3,
      floatAmplitude: 7,
      floatDuration: 9.6,
      enterDelay: 0.4,
    },
    "slot-d": {
      x: "40%",
      y: "54%",
      width: "clamp(150px, 18vw, 240px)",
      rotateY: -22,
      rotateZ: -7,
      scale: 0.84,
      opacity: 0.72,
      zIndex: 4,
      floatAmplitude: 11,
      floatDuration: 7.4,
      enterDelay: 0.18,
    },
    "slot-e": {
      x: "68%",
      y: "58%",
      width: "clamp(110px, 13vw, 160px)",
      rotateY: -8,
      rotateZ: 4,
      scale: 0.70,
      opacity: 0.40,
      zIndex: 2,
      floatAmplitude: 6,
      floatDuration: 11.0,
      enterDelay: 0.5,
    },
  };
}

// ─── テキストアニメーション ───────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const textItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

// ─── コンポーネント ───────────────────────────────────────────────
export function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [assignments, setAssignments] = useState<Record<string, PanelSlot>>(
    () => Object.fromEntries(PANELS.map((p) => [p.id, p.initialSlot]))
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setAssignments((cur) =>
        Object.fromEntries(
          Object.entries(cur).map(([id, slot]) => [id, SLOT_ROTATION[slot]])
        )
      );
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const slotConfigs = useMemo(() => getSlotConfigs(), []);

  // マウス視差
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { damping: 18, stiffness: 45 });
  const sy = useSpring(my, { damping: 18, stiffness: 45 });
  const panelRotX = useTransform(sy, [0, 1], [5, -5]);
  const panelRotY = useTransform(sx, [0, 1], [-8, 8]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }, [mx, my]);

  const handleMouseLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <section
      className="relative isolate overflow-hidden min-h-svh"
      style={{
        background: "linear-gradient(135deg, #0a45c8 0%, #1a6fff 38%, #33c8ef 100%)",
      }}
    >
      {/* 縦グリッドライン */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-[6%]">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="w-px h-full"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.16) 30%, rgba(255,255,255,0.04) 100%)",
            }}
          />
        ))}
      </div>

      {/* 右側グロウ */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          width: "60vw",
          height: "80vh",
          background: "radial-gradient(ellipse at right center, rgba(255,255,255,0.18) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── メインコンテンツ ── */}
      <div
        ref={stageRef}
        className="relative z-10 mx-auto w-[min(1360px,calc(100%-40px))] min-h-svh"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="min-h-svh grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-0 py-[min(8rem,15vh)]">

          {/* ── 左: テキスト ── */}
          <motion.div
            className="flex flex-col items-start justify-center pt-24 lg:pt-0 lg:pr-10 text-left"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div
              variants={textItem}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8 border border-white/20 bg-white/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <motion.span
                  className="absolute inset-0 rounded-full bg-white"
                  animate={{ scale: [1, 2.4, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-[11px] font-bold text-white tracking-widest uppercase">
                Web × 業務改善 × AI
              </span>
            </motion.div>

            {/* 英語サブキャッチ */}
            <motion.p
              variants={textItem}
              className="text-white/70 font-bold tracking-widest uppercase mb-3"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}
            >
              Beyond Digital. Beyond Limits.
            </motion.p>

            {/* メインキャッチ */}
            <motion.h1
              variants={textItem}
              className="text-white font-bold leading-[1.0] tracking-[-0.03em] mb-8"
              style={{
                fontSize: "clamp(2.6rem, 5.8vw, 5.2rem)",
                fontFeatureSettings: '"palt" 1',
              }}
            >
              Webと業務改善を
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                一気通貫で前に進める。
              </span>
            </motion.h1>

            {/* サブコピー */}
            <motion.p
              variants={textItem}
              className="text-white/85 leading-[1.8] mb-10 max-w-[36rem]"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                fontFeatureSettings: '"palt" 1',
              }}
            >
              SNS運用・LP制作・SEO設計・業務効率化まで。<br className="hidden sm:block" />
              AIとWeb戦略で、事業の伸びしろを最大化します。
            </motion.p>

            {/* CTA */}
            <motion.div variants={textItem} className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 h-[52px] font-bold text-[0.95rem] bg-white text-blue-700 shadow-[0_12px_40px_rgba(255,255,255,0.30)] transition-all hover:shadow-[0_16px_56px_rgba(255,255,255,0.40)] hover:-translate-y-0.5"
              >
                無料相談はこちら
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full px-8 h-[52px] font-bold text-[0.95rem] border border-white/40 text-white bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                制作実績を見る
              </Link>
            </motion.div>

            {/* トラストバッジ */}
            <motion.div variants={textItem} className="flex flex-wrap gap-2.5 text-[0.78rem] text-white/80 font-semibold">
              {[
                { icon: Clock3, label: "最短当日返信" },
                { icon: ShieldCheck, label: "売り込みなし" },
                { icon: BadgeCheck, label: "秘密厳守で相談可能" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── 右: 3Dパネル群 ── */}
          <div className="relative hidden lg:block" style={{ minHeight: "620px", perspective: "1000px" }}>
            {/* 浮遊・回転オブジェクト（背景レイヤー、z-index:1） */}
            <HeroFloatingObjects />
            <motion.div
              className="relative w-full h-full"
              style={{
                rotateX: panelRotX,
                rotateY: panelRotY,
                transformStyle: "preserve-3d",
              }}
            >
              <AnimatePresence>
                {mounted && PANELS.map((panel) => {
                  const slot = assignments[panel.id];
                  const cfg = slotConfigs[slot];

                  return (
                    <motion.div
                      key={panel.id}
                      className="absolute overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_60px_rgba(6,50,160,0.35)]"
                      style={{
                        left: cfg.x,
                        top: cfg.y,
                        width: cfg.width,
                        zIndex: cfg.zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.6,
                        rotateY: cfg.rotateY - 30,
                        z: -300,
                      }}
                      animate={{
                        opacity: cfg.opacity,
                        scale: cfg.scale,
                        rotateY: cfg.rotateY,
                        rotateZ: cfg.rotateZ,
                        z: 0,
                        y: [0, -cfg.floatAmplitude, 0],
                      }}
                      transition={{
                        opacity: { duration: 1.0, delay: cfg.enterDelay, ease: EASE },
                        scale: { duration: 1.2, delay: cfg.enterDelay, ease: EASE },
                        rotateY: { duration: 1.4, ease: EASE },
                        rotateZ: { duration: 1.4, ease: EASE },
                        z: { duration: 1.2, delay: cfg.enterDelay, ease: EASE },
                        y: {
                          duration: cfg.floatDuration,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: cfg.enterDelay,
                        },
                      }}
                    >
                      {/* 画像 */}
                      <div className="relative aspect-[3/4] bg-white/10">
                        <Image
                          src={panel.src}
                          alt={panel.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 0vw, 25vw"
                        />
                        {/* グラスオーバーレイ */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/40" />
                      </div>
                      {/* キャプション */}
                      <div className="px-3 py-2.5 bg-white/8 backdrop-blur-md">
                        <p className="text-[9px] font-bold text-white/60 tracking-widest uppercase mb-0.5">Portfolio</p>
                        <p className="text-[11px] font-semibold text-white leading-tight">{panel.alt}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
            animate={{ y: [0, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

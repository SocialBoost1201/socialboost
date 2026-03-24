"use client";

import type { CSSProperties, TouchEvent } from "react";
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./SocialBoostHero.module.css";
import { HERO_PORTFOLIO_ITEMS, type HeroPortfolioSlot } from "./portfolioData";

// ─── 型定義 ────────────────────────────────────────────────────────────────
type SlotMotionConfig = {
  left: number;
  top: number;
  width: number;
  rotateZ: number;
  rotateY: number;
  opacity: number;
  zIndex: number;
  scale: number;
  floatY: [number, number, number];
  floatZ: [number, number, number];
  floatDuration: number;
  enterDelay: number;
};

// ─── スロットローテーション順序 ─────────────────────────────────────────────
const SLOT_ROTATION_TARGET: Record<HeroPortfolioSlot, HeroPortfolioSlot> = {
  "slot-front-left": "slot-front-center",
  "slot-front-center": "slot-back-top",
  "slot-mid-right": "slot-front-left",
  "slot-back-top": "slot-back-bottom",
  "slot-back-bottom": "slot-mid-right",
};

const CONTENT_EASE = [0.28, 0.84, 0.42, 1] as const;

// ─── テキスト stagger variants ────────────────────────────────────────────
const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.7,
    },
  },
};

const titleLineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.28, 0.84, 0.42, 1] as [number, number, number, number] },
  },
};

// ─── 空間スロット設定（blur なし・opacity/scale/size/zIndex 差のみで奥行き） ─
function getSlotConfig(width: number, height: number): Record<HeroPortfolioSlot, SlotMotionConfig> {
  const safeWidth = Math.max(width, 960);
  const safeHeight = Math.max(height, 620);

  return {
    // 中間右：主役
    "slot-front-center": {
      left: safeWidth * 0.58,
      top: safeHeight * 0.46,
      width: Math.min(safeWidth * 0.32, 320),
      rotateZ: -2,
      rotateY: -12,
      opacity: 1.0,
      zIndex: 6,
      scale: 1.0,
      floatY: [0, -12, 0],
      floatZ: [0, 4, 0],
      floatDuration: 7.0,
      enterDelay: 0.2,
    },
    // 左前方：準主役
    "slot-front-left": {
      left: safeWidth * 0.44,
      top: safeHeight * 0.58,
      width: Math.min(safeWidth * 0.2, 180),
      rotateZ: -10,
      rotateY: -18,
      opacity: 0.92,
      zIndex: 5,
      scale: 0.94,
      floatY: [0, -9, 0],
      floatZ: [0, 2, 0],
      floatDuration: 6.4,
      enterDelay: 0.1,
    },
    // 右遠景：脇役
    "slot-mid-right": {
      left: safeWidth * 0.82,
      top: safeHeight * 0.44,
      width: Math.min(safeWidth * 0.22, 200),
      rotateZ: -5,
      rotateY: -8,
      opacity: 0.90,
      zIndex: 5,
      scale: 0.92,
      floatY: [0, -8, 0],
      floatZ: [0, 3, 0],
      floatDuration: 7.6,
      enterDelay: 0.3,
    },
    // 奥上：背景
    "slot-back-top": {
      left: safeWidth * 0.62,
      top: safeHeight * 0.12,
      width: Math.min(safeWidth * 0.17, 150),
      rotateZ: -4,
      rotateY: -20,
      opacity: 0.28,
      zIndex: 2,
      scale: 0.82,
      floatY: [0, -6, 0],
      floatZ: [0, 1, 0],
      floatDuration: 8.2,
      enterDelay: 0.4,
    },
    // 奥下：背景
    "slot-back-bottom": {
      left: safeWidth * 0.76,
      top: safeHeight * 0.26,
      width: Math.min(safeWidth * 0.17, 150),
      rotateZ: 3,
      rotateY: -6,
      opacity: 0.24,
      zIndex: 2,
      scale: 0.80,
      floatY: [0, -5, 0],
      floatZ: [0, 2, 0],
      floatDuration: 9.0,
      enterDelay: 0.5,
    },
  };
}

function buildInitialAssignments() {
  return HERO_PORTFOLIO_ITEMS.reduce<Record<string, HeroPortfolioSlot>>((acc, item) => {
    acc[item.id] = item.initialSlot;
    return acc;
  }, {});
}

// ─── コンポーネント ─────────────────────────────────────────────────────────
export default function SocialBoostHero() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const [stageSize, setStageSize] = useState({ width: 1120, height: 720 });
  const [desktopAssignments, setDesktopAssignments] = useState<Record<string, HeroPortfolioSlot>>(buildInitialAssignments);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [showIntroPanels, setShowIntroPanels] = useState(true);

  useEffect(() => {
    const hidePanelsTimer = window.setTimeout(() => {
      setShowIntroPanels(false);
    }, 1500);
    return () => { window.clearTimeout(hidePanelsTimer); };
  }, []);

  useEffect(() => {
    if (!visualRef.current) return;
    const node = visualRef.current;
    const updateSize = () => {
      const rect = node.getBoundingClientRect();
      setStageSize({ width: rect.width, height: rect.height });
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => { observer.disconnect(); };
  }, []);

  const rotateDesktopSlots = useEffectEvent(() => {
    setDesktopAssignments((current) =>
      Object.fromEntries(
        Object.entries(current).map(([id, slot]) => [id, SLOT_ROTATION_TARGET[slot]])
      ) as Record<string, HeroPortfolioSlot>
    );
  });

  const advanceMobile = useEffectEvent(() => {
    setMobileIndex((current) => (current + 1) % HERO_PORTFOLIO_ITEMS.length);
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => { rotateDesktopSlots(); }, 6000);
    return () => { window.clearInterval(intervalId); };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => { advanceMobile(); }, 5000);
    return () => { window.clearInterval(intervalId); };
  }, []);

  const slotConfig = useMemo(
    () => getSlotConfig(stageSize.width, stageSize.height),
    [stageSize.height, stageSize.width]
  );

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    const endX = event.changedTouches[0]?.clientX;
    if (startX === null || typeof endX !== "number") return;
    const delta = endX - startX;
    if (Math.abs(delta) < 44) return;
    setMobileIndex((current) => {
      if (delta < 0) return (current + 1) % HERO_PORTFOLIO_ITEMS.length;
      return (current - 1 + HERO_PORTFOLIO_ITEMS.length) % HERO_PORTFOLIO_ITEMS.length;
    });
  };

  // ─── パララックス（視差効果）用 ────────────────────────────────────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (event: React.MouseEvent) => {
    mouseX.set(event.clientX / stageSize.width);
    mouseY.set(event.clientY / stageSize.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const springConfig = { damping: 20, stiffness: 60 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-8, 8]);
  const translateX = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const translateY = useTransform(smoothMouseY, [0, 1], [-20, 20]);

  return (
    <section
      className={styles.hero}
      aria-labelledby="socialboost-hero-title"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Layer 1: 背景空間 ── */}
      <div className={styles.baseGradient} aria-hidden="true" />
      <div className={styles.noiseOverlay} aria-hidden="true" />
      <div className={styles.lineOverlay} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={styles.lineColumn} />
        ))}
      </div>

      {/* ── Layer 1.5: 環境光（リムライト） ── */}
      <div className={styles.rimLight} aria-hidden="true" />
      <div className={styles.blurGlowLeft} aria-hidden="true" />
      <div className={styles.blurGlowRight} aria-hidden="true" />

      {/* ── イントロパネル ── */}
      {showIntroPanels && (
        <div className={`${styles.introPanels} ${styles.introPanelsActive}`} aria-hidden="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className={styles.introPanel}
              style={{ "--panel-delay": `${index * 0.08}s` } as CSSProperties}
            />
          ))}
        </div>
      )}

      <motion.div
        className={styles.shell}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: CONTENT_EASE }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
      >
        {/* ── デスクトップレイアウト ── */}
        <div className={styles.desktopLayout}>
          {/* Layer 3: テキスト（空間最前面） */}
          <div className={styles.copyColumn}>
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: CONTENT_EASE }}
            >
              Web × 業務改善 × AI
            </motion.p>

            {/* 行ごとに stagger で出現 */}
            <motion.h1
              id="socialboost-hero-title"
              className={styles.title}
              variants={titleContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className={styles.titleLine} variants={titleLineVariants}>
                Webと業務改善を
              </motion.span>
              <motion.span className={styles.titleLine} variants={titleLineVariants}>
                <span className={styles.titleAccent}>一気通貫</span>で前に進める。
              </motion.span>
            </motion.h1>

            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: CONTENT_EASE }}
            >
              <span className={styles.leadLine}>SNS運用、LP制作、SEO設計、業務効率化まで。</span>
              <span className={styles.leadLine}>SocialBoostは、AIとWeb戦略で事業の伸びしろを最大化します。</span>
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: CONTENT_EASE }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                <span>無料相談はこちら</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                <span>サービスを見る</span>
              </Link>
            </motion.div>
          </div>

          {/* Layer 2: 3D空間パネル群 */}
          <div className={styles.visualColumn} ref={visualRef}>
            {/* perspective ステージ */}
            <div className={styles.visualStage}>
              {HERO_PORTFOLIO_ITEMS.map((item) => {
                const slot = desktopAssignments[item.id];
                const config = slotConfig[slot];

                return (
                  <motion.article
                    key={item.id}
                    className={styles.visualCard}
                    style={{ zIndex: config.zIndex }}
                    initial={{
                      opacity: 0,
                      y: 60,
                      scale: 0.9,
                      rotateY: config.rotateY - 20,
                    }}
                    animate={{
                      left: config.left,
                      top: config.top,
                      width: config.width,
                      opacity: config.opacity,
                      scale: config.scale,
                      rotateZ: config.rotateZ,
                      rotateY: config.rotateY,
                      y: config.floatY,
                      z: config.floatZ,
                    }}
                    transition={{
                      left: { duration: 1.4, ease: CONTENT_EASE },
                      top: { duration: 1.4, ease: CONTENT_EASE },
                      width: { duration: 1.4, ease: CONTENT_EASE },
                      opacity: { duration: 1.2, ease: CONTENT_EASE, delay: config.enterDelay },
                      scale: { duration: 1.4, ease: CONTENT_EASE },
                      rotateZ: { duration: 1.4, ease: CONTENT_EASE },
                      rotateY: { duration: 1.4, ease: CONTENT_EASE, delay: config.enterDelay },
                      y: {
                        duration: config.floatDuration,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                      z: {
                        duration: config.floatDuration * 1.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                    }}
                  >
                    <Link href={item.href ?? "/works"} className={styles.visualCardLink} aria-label={item.alt}>
                      <div className={styles.visualImageWrap}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className={styles.visualImage}
                          sizes="(max-width: 1024px) 38vw, 18vw"
                        />
                      </div>
                      <div className={styles.visualCaption}>
                        <small className={styles.visualMeta}>Portfolio</small>
                        <h2 className={styles.visualTitle}>{item.title}</h2>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── モバイルレイアウト ── */}
        <div className={styles.mobileLayout}>
          <div className={styles.mobileCopy}>
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: CONTENT_EASE }}
            >
              Web × 業務改善 × AI
            </motion.p>

            <motion.h1
              className={styles.titleMobile}
              variants={titleContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className={styles.titleLine} variants={titleLineVariants}>
                Webと業務改善を
              </motion.span>
              <motion.span className={styles.titleLine} variants={titleLineVariants}>
                <span className={styles.titleAccent}>一気通貫</span>で前に進める。
              </motion.span>
            </motion.h1>

            <motion.p
              className={styles.leadMobile}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: CONTENT_EASE }}
            >
              <span className={styles.leadLine}>SNS運用、LP制作、SEO設計、業務効率化まで。</span>
              <span className={styles.leadLine}>SocialBoostは、AIとWeb戦略で事業の伸びしろを最大化します。</span>
            </motion.p>

            <motion.div
              className={styles.actionsMobile}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: CONTENT_EASE }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                <span>無料相談はこちら</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                <span>サービスを見る</span>
              </Link>
            </motion.div>
          </div>

          <div className={styles.mobileCarouselBlock}>
            <div
              className={styles.mobileCarouselViewport}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className={styles.mobileCarouselTrack}
                animate={{ x: `-${mobileIndex * 100}%` }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              >
                {HERO_PORTFOLIO_ITEMS.map((item) => (
                  <article key={item.id} className={styles.mobileCard}>
                    <Link href={item.href ?? "/works"} className={styles.mobileCardLink}>
                      <div className={styles.mobileImageWrap}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className={styles.mobileImage}
                          sizes="(max-width: 767px) 82vw, 320px"
                        />
                      </div>
                      <div className={styles.mobileCaption}>
                        <small className={styles.mobileMeta}>Work Showcase</small>
                        <h2 className={styles.mobileTitle}>{item.title}</h2>
                      </div>
                    </Link>
                  </article>
                ))}
              </motion.div>
            </div>

            <div className={styles.mobileDots}>
              {HERO_PORTFOLIO_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.mobileDot} ${index === mobileIndex ? styles.mobileDotActive : ""}`}
                  onClick={() => setMobileIndex(index)}
                  aria-label={`${item.title} を表示`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

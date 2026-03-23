"use client";

import type { CSSProperties, TouchEvent } from "react";
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./SocialBoostHero.module.css";
import { HERO_PORTFOLIO_ITEMS, type HeroPortfolioSlot } from "./portfolioData";

type SlotMotionConfig = {
  left: number;
  top: number;
  width: number;
  rotate: number;
  opacity: number;
  zIndex: number;
  scale: number;
  floatY: [number, number, number];
  floatRotate: [number, number, number];
  floatDuration: number;
  enterDelay: number;
};

const SLOT_ROTATION_TARGET: Record<HeroPortfolioSlot, HeroPortfolioSlot> = {
  "slot-front-left": "slot-front-center",
  "slot-front-center": "slot-back-top",
  "slot-mid-right": "slot-front-left",
  "slot-back-top": "slot-back-bottom",
  "slot-back-bottom": "slot-mid-right",
};

const CONTENT_EASE = [0.28, 0.84, 0.42, 1] as const;

function getSlotConfig(width: number, height: number): Record<HeroPortfolioSlot, SlotMotionConfig> {
  const safeWidth = Math.max(width, 960);
  const safeHeight = Math.max(height, 620);

  return {
    "slot-front-left": {
      left: safeWidth * 0.48,
      top: safeHeight * 0.58,
      width: Math.min(safeWidth * 0.2, 180),
      rotate: -8,
      opacity: 1,
      zIndex: 5,
      scale: 0.96,
      floatY: [0, -10, 0],
      floatRotate: [-8, -6, -8],
      floatDuration: 6.2,
      enterDelay: 0.15,
    },
    "slot-front-center": {
      left: safeWidth * 0.61,
      top: safeHeight * 0.5,
      width: Math.min(safeWidth * 0.32, 320),
      rotate: -2,
      opacity: 1,
      zIndex: 6,
      scale: 1,
      floatY: [0, -12, 0],
      floatRotate: [-2, 0, -2],
      floatDuration: 6.8,
      enterDelay: 0.25,
    },
    "slot-mid-right": {
      left: safeWidth * 0.83,
      top: safeHeight * 0.48,
      width: Math.min(safeWidth * 0.22, 210),
      rotate: -6,
      opacity: 0.96,
      zIndex: 5,
      scale: 0.94,
      floatY: [0, -8, 0],
      floatRotate: [-6, -4, -6],
      floatDuration: 7.2,
      enterDelay: 0.35,
    },
    "slot-back-top": {
      left: safeWidth * 0.63,
      top: safeHeight * 0.16,
      width: Math.min(safeWidth * 0.17, 170),
      rotate: -4,
      opacity: 0.22,
      zIndex: 2,
      scale: 0.9,
      floatY: [0, -7, 0],
      floatRotate: [-4, -3, -4],
      floatDuration: 7.8,
      enterDelay: 0.45,
    },
    "slot-back-bottom": {
      left: safeWidth * 0.76,
      top: safeHeight * 0.28,
      width: Math.min(safeWidth * 0.17, 170),
      rotate: 2,
      opacity: 0.18,
      zIndex: 2,
      scale: 0.88,
      floatY: [0, -6, 0],
      floatRotate: [2, 3, 2],
      floatDuration: 8.4,
      enterDelay: 0.55,
    },
  };
}

function buildInitialAssignments() {
  return HERO_PORTFOLIO_ITEMS.reduce<Record<string, HeroPortfolioSlot>>((acc, item) => {
    acc[item.id] = item.initialSlot;
    return acc;
  }, {});
}

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

    return () => {
      window.clearTimeout(hidePanelsTimer);
    };
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

    return () => {
      observer.disconnect();
    };
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
    const intervalId = window.setInterval(() => {
      rotateDesktopSlots();
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      advanceMobile();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const slotConfig = useMemo(() => getSlotConfig(stageSize.width, stageSize.height), [stageSize.height, stageSize.width]);

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

  return (
    <section className={styles.hero} aria-labelledby="socialboost-hero-title">
      <div className={styles.baseGradient} aria-hidden="true" />
      <div className={styles.lineOverlay} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={styles.lineColumn} />
        ))}
      </div>
      <div className={styles.blurGlowLeft} aria-hidden="true" />
      <div className={styles.blurGlowRight} aria-hidden="true" />
      <div className={styles.blurGlowBottom} aria-hidden="true" />

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
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: CONTENT_EASE,
        }}
      >
        <div className={styles.desktopLayout}>
          <motion.div
            className={styles.copyColumn}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: CONTENT_EASE }}
          >
            <p className={styles.eyebrow}>AI × Marketing × Growth</p>

            <h1 id="socialboost-hero-title" className={styles.title}>
              <span className={styles.titleLine}>AIで、</span>
              <span className={styles.titleLine}>集客と事業成長を</span>
              <span className={styles.titleLine}>加速する。</span>
            </h1>

            <p className={styles.lead}>
              <span className={styles.leadLine}>SNS運用、LP制作、SEO設計、業務効率化まで。</span>
              <span className={styles.leadLine}>SocialBoostは、AIとWeb戦略で事業の伸びしろを最大化します。</span>
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>無料相談はこちら</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                <span>サービスを見る</span>
              </Link>
            </div>
          </motion.div>

          <div className={styles.visualColumn} ref={visualRef}>
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
                      y: 80,
                      scale: 0.96,
                    }}
                    animate={{
                      left: config.left,
                      top: config.top,
                      width: config.width,
                      opacity: config.opacity,
                      scale: config.scale,
                      rotate: config.rotate,
                      y: config.floatY,
                    }}
                    transition={{
                      left: { duration: 1.2, ease: CONTENT_EASE },
                      top: { duration: 1.2, ease: CONTENT_EASE },
                      width: { duration: 1.2, ease: CONTENT_EASE },
                      opacity: { duration: 1.2, ease: CONTENT_EASE, delay: 0.04 },
                      scale: { duration: 1.2, ease: CONTENT_EASE },
                      rotate: {
                        duration: config.floatDuration,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                      y: {
                        duration: config.floatDuration,
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

        <div className={styles.mobileLayout}>
          <div className={styles.mobileCopy}>
            <p className={styles.eyebrow}>AI × Marketing × Growth</p>

            <h1 className={styles.titleMobile}>
              <span className={styles.titleLine}>AIで、</span>
              <span className={styles.titleLine}>集客と事業成長を</span>
              <span className={styles.titleLine}>加速する。</span>
            </h1>

            <p className={styles.leadMobile}>
              <span className={styles.leadLine}>SNS運用、LP制作、SEO設計、業務効率化まで。</span>
              <span className={styles.leadLine}>SocialBoostは、AIとWeb戦略で事業の伸びしろを最大化します。</span>
            </p>

            <div className={styles.actionsMobile}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>無料相談はこちら</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                <span>サービスを見る</span>
              </Link>
            </div>
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

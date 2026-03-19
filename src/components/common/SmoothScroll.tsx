/**
 * SmoothScroll.tsx — Lenis 慣性スクロール初期設定（グループB：SocialBoost/テック系）
 * 配置先: src/components/common/SmoothScroll.tsx
 *
 * 使用方法:
 * // app/layout.tsx
 * import { SmoothScroll } from "@/components/common/SmoothScroll"
 * export default function RootLayout({ children }) {
 *   return <SmoothScroll>{children}</SmoothScroll>
 * }
 */
"use client"

import Lenis from "lenis"
import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

interface SmoothScrollProps {
  children: React.ReactNode
  /** テック系: 0.10〜0.12 でキビキビとした反応 */
  lerp?: number
}

/**
 * Lenis 慣性スクロール ラッパー（SocialBoost・テック系グループ向け）
 * - テック系は lerp=0.11 でキレのあるスクロール感を実現
 * - prefers-reduced-motion 有効時は Lenis を起動しない
 */
export function SmoothScroll({ children, lerp = 0.11 }: SmoothScrollProps) {
  const prefersReduced = useReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (prefersReduced) return

    const lenis = new Lenis({
      lerp,
      smoothWheel: true,
      touchMultiplier: 2.0,   // テック系: タッチ操作の反応を速く
      infinite: false,
    })

    lenisRef.current = lenis

    let raf: number
    function onRaf(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(onRaf)
    }
    raf = requestAnimationFrame(onRaf)

    // グローバルに公開（他コンポーネントからアクセス可能にする）
    ;(window as unknown as { lenis: Lenis }).lenis = lenis

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [lerp, prefersReduced])

  return <>{children}</>
}

export function scrollTo(target: string | HTMLElement, offset = 0) {
  const lenis = (window as unknown as { lenis?: Lenis }).lenis
  if (lenis) {
    lenis.scrollTo(target, { offset })
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target
    el?.scrollIntoView({ behavior: "smooth" })
  }
}

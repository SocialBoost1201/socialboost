/**
 * Button.tsx — 世界基準 共通ボタンコンポーネント（グループB：SocialBoost/テック系）
 * 配置先: src/components/common/Button.tsx
 */
"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "ghost" | "glow"
type ButtonSize    = "sm" | "md" | "lg"

// HTMLMotionProps<"button"> をベースにすることで motion.button との型衝突を根本排除
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant
  size?:    ButtonSize
  loading?: boolean
  icon?:    React.ReactNode
  children?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0040FF] text-white hover:bg-[#0030cc] border-transparent",
  secondary:
    "bg-[#0D2E57] text-white hover:bg-[#1a4080] border-transparent",
  ghost:
    "bg-transparent text-[#0040FF] hover:bg-[#0040FF]/10 border-transparent",
  glow:
    "bg-[#0040FF] text-white border-transparent " +
    "shadow-[0_0_12px_rgba(0,64,255,0.4)] hover:shadow-[0_0_24px_rgba(0,64,255,0.7)]",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
}

/**
 * SocialBoost・テック系グループ共通ボタン
 * - useReducedMotion でOS設定を尊重
 * - `variant="glow"` でグロー効果（CTAボタン向け）
 * - タッチターゲット最小 44px
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant  = "primary",
      size     = "md",
      loading  = false,
      icon,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const prefersReduced = useReducedMotion()

    return (
      <motion.button
        ref={ref}
        whileHover={
          prefersReduced
            ? {}
            : { scale: 1.04, y: -2, transition: { type: "spring", stiffness: 500, damping: 20 } }
        }
        whileTap={prefersReduced ? {} : { scale: 0.96 }}
        disabled={disabled || loading}
        className={cn(
          "relative inline-flex items-center justify-center gap-2",
          "rounded-lg border font-semibold tracking-wide",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1a]",
          "disabled:pointer-events-none disabled:opacity-50",
          "cursor-pointer select-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        )}
        {!loading && icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </motion.button>
    )
  },
)
Button.displayName = "Button"

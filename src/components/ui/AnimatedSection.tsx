"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  [key: string]: unknown;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // delayをCSS変数として設定
    el.style.setProperty("transition-delay", `${delay}s`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { 
        rootMargin: "0px 0px -10% 0px", // 画面下部10%に入った時点で発火
        threshold 
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn("reveal-on-scroll", className)}
      {...props}
    >
      {children}
    </div>
  );
}

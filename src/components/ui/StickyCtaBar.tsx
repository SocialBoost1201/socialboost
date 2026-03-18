"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";

/**
 * スクロール量が一定を超えたらモバイルに表示される固定CTAバー
 * Heroセクションより下にスクロールした際に表示
 */
export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400px以上スクロールで表示
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShow = visible && !dismissed;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          // md以上では非表示（デスクトップはヘッダーCTAで十分）
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-brand-navy/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3 safe-area-inset-bottom">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-brand-primary/30 hover:bg-brand-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              無料で相談する（オンライン）
            </Link>
            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 text-white/60 hover:text-white transition-colors shrink-0"
              aria-label="閉じる"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

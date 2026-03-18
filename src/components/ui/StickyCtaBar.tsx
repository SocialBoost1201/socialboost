"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

/**
 * スマホ専用の画面下部固定コンバージョンバー（Bottom Navigation CTA）
 */
export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールで表示（最初のファーストビューの抜け感は担保する）
      setVisible(window.scrollY > 100);
    };
    
    // 初回マウント時にもチェック
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          // デスクトップでは非表示
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* 
            BtoB向け王道の2分割レイアウト 
            [資料ダウンロード] [無料相談]
           */}
          <div className="flex items-center w-full bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
            <Link
              href="/documents"
              className="flex-1 flex flex-col items-center justify-center py-2.5 bg-white text-brand-navy hover:bg-gray-50 transition-colors border-r border-gray-200"
            >
              <FileText className="w-5 h-5 mb-1 text-gray-500" />
              <span className="text-[10px] font-bold">お役立ち資料</span>
            </Link>
            
            <Link
              href="/contact"
              className="flex-1 flex flex-col items-center justify-center py-2.5 bg-brand-primary text-white hover:bg-brand-accent transition-colors"
            >
              <MessageCircle className="w-5 h-5 mb-1 text-white/90" />
              <span className="text-[10px] font-bold">無料相談</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

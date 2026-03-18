"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Search, MessageCircle } from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "トップページ", icon: Home },
  { href: "/services", label: "サービス一覧", icon: Search },
  { href: "/works", label: "実績・事例紹介", icon: Search },
  { href: "/contact", label: "無料相談する", icon: MessageCircle },
];

export default function NotFound() {
  return (
    <main className="relative min-h-svh flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* BG effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10 text-center py-24">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div
            className="text-[10rem] sm:text-[14rem] font-black text-white/5 leading-none select-none tracking-tighter"
            aria-hidden
          >
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl sm:text-8xl font-black text-white tracking-tighter">
              4<span className="text-brand-primary">0</span>4
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">
            お探しのページが見つかりませんでした
          </h1>
          <p className="text-gray-300 font-medium text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
            ページが移動・削除されたか、URLが正しくない可能性があります。
            <br className="hidden sm:block" />
            以下のリンクからご希望のページへお進みください。
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-12"
        >
          {QUICK_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <link.icon className="w-5 h-5 text-brand-light group-hover:text-white transition-colors" />
              <span className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                {link.label}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button asChild size="lg" className="shadow-lg shadow-brand-primary/30 group">
            <Link href="/">
              <Home className="mr-2 w-4 h-4" />
              トップページへ戻る
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </main>
  );
}

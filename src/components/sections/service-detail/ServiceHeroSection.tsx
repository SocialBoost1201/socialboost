"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Globe, LineChart, Code2, MonitorSmartphone, Sparkles, Megaphone, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-design": Globe,
  "lp": LineChart,
  "system": Code2,
  "app": MonitorSmartphone,
  "ai": Sparkles,
  "growth": Megaphone,
};

export function ServiceHeroSection({ service }: { service: ServiceDetail }) {
  const Icon = SERVICE_ICONS[service.slug] || Globe;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section 
      ref={heroRef}
      style={{ opacity }}
      className="relative pt-24 pb-32 md:pt-48 md:pb-64 min-h-svh flex flex-col items-center justify-center text-center overflow-hidden bg-white"
    >
      {/* ── Background Visuals ── */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle,rgba(24,119,242,0.06)_0%,transparent_70%)] rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#1B2A4A 1px, transparent 1px), linear-gradient(90deg, #1B2A4A 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </motion.div>

      <Container className="relative z-20 flex flex-col items-center max-w-6xl mx-auto">
        {/* Icon Platform */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          className="relative mb-8 md:mb-12"
        >
          <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl md:rounded-4xl border border-slate-100 shadow-premium flex items-center justify-center text-brand-primary overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Icon className="w-10 h-10 md:w-14 md:h-14 relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3" strokeWidth={1.2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-badge mb-6 md:mb-10 mx-auto"
        >
          Service Detail
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-[2.2rem] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-navy tracking-tighter mb-8 md:mb-12 text-balance lg:max-w-5xl"
        >
          {service.hero.tagline}
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-base md:text-xl lg:text-2xl text-text-secondary leading-relaxed font-bold max-w-4xl text-balance mb-10 md:mb-16"
        >
          {service.hero.description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Button asChild size="xl" className="w-full sm:w-auto px-16 rounded-3xl shadow-2xl shadow-brand-primary/20">
            <Link href="/contact" className="gap-3">
              <span>無料で相談する</span>
              <Sparkles className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="xl" className="w-full sm:w-auto px-12 font-black text-text-secondary hover:text-brand-primary">
            <Link href="/works">実績を見る</Link>
          </Button>
        </motion.div>
      </Container>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs font-black tracking-[0.3em] text-slate-300 uppercase">Explore Service</span>
        <div className="w-px h-16 bg-linear-to-b from-slate-200 to-transparent" />
      </motion.div>
    </motion.section>
  );
}

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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section 
      ref={heroRef}
      style={{ opacity }}
      className="relative pt-32 pb-32 md:pt-48 md:pb-48 min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden bg-background-alt"
    >
      {/* Background Effects */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-white)_90%)] z-10" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10 mix-blend-multiply opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full -z-10 mix-blend-multiply opacity-50" />
      </motion.div>

      <Container className="relative z-20 flex flex-col items-center max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="w-20 h-20 md:w-28 md:h-28 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.06)] rounded-3xl flex items-center justify-center text-brand-primary mb-10"
        >
          <Icon className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-block px-5 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy font-bold text-sm tracking-widest uppercase mb-8"
        >
          {service.title}
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-4xl lg:text-4xl font-black text-brand-navy tracking-tight leading-[1.2] mb-10 text-balance"
        >
          {service.hero.tagline}
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl text-balance mb-14"
        >
          {service.hero.description}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button asChild size="lg" className="w-full sm:w-auto shadow-xl shadow-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-1 transition-all duration-300">
            <Link href="/contact">無料で相談する</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto hover:-translate-y-1 transition-all duration-300 border-gray-200">
            <Link href="/works">実績を見る</Link>
          </Button>
        </motion.div>
      </Container>
    </motion.section>
  );
}

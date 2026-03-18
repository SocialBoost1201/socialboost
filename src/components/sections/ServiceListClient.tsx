"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, LineChart, Code2, MonitorSmartphone, Sparkles, LucideIcon } from "lucide-react";
import { SERVICES_DATA } from "@/lib/services";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-design": Globe,
  "lp": LineChart,
  "system": Code2,
  "app": MonitorSmartphone,
  "ai": Sparkles,
};

const SERVICE_BG_TEXT: Record<string, string> = {
  "web-design": "WEB",
  "lp": "LP",
  "system": "SYS",
  "app": "APP",
  "ai": "AI",
};

export function ServiceListClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative bg-white pb-32">
      {/* Dynamic continuous dots or noise background could go here, but we will use clean gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-30 pointer-events-none" />

      <Container className="relative z-10 py-16 md:py-32">
        <div className="space-y-32 md:space-y-48">
          {SERVICES_DATA.map((service, index) => {
            const Icon = SERVICE_ICONS[service.slug] || Globe;
            const bgText = SERVICE_BG_TEXT[service.slug] || "SRV";
            const isEven = index % 2 === 0;

            return (
              <ServiceBlock 
                key={service.slug} 
                service={service} 
                Icon={Icon} 
                bgText={bgText} 
                isEven={isEven}
                index={index} 
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function ServiceBlock({ service, Icon, bgText, isEven, index }: any) {
  const blockRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={blockRef}
      style={{ opacity }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start relative`}
    >
      {/* Massive Background Text Vector */}
      <motion.div 
        style={{ y: bgY }}
        className={`absolute top-0 ${isEven ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} -z-10 pointer-events-none select-none overflow-hidden`}
      >
        <span className="text-[15rem] md:text-[25rem] font-black text-brand-primary/2 tracking-tighter leading-none">
          {bgText}
        </span>
      </motion.div>

      {/* Sticky Content Side (Left or Right) */}
      <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative Icon Glow */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary rounded-full blur-[80px] opacity-20 -z-10" />
          
          <div className="w-16 h-16 bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center text-brand-primary mb-8">
            <Icon className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6 tracking-tight leading-tight">
            {service.title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 font-medium">
            {service.hero.description}
          </p>

          <Link 
            href={`/services/${service.slug}`} 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-brand-navy rounded-full hover:bg-brand-primary hover:shadow-lg hover:shadow-brand-primary/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              詳細設計・実例を見る
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Details Side */}
      <motion.div 
        style={{ y: yOffset }}
        className="w-full lg:w-7/12 grid grid-cols-1 gap-6 md:gap-8"
      >
        {/* Problems Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-brand-primary/20 transition-colors">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="font-extrabold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-brand-primary rounded-full inline-block" />
            対象となる課題・お悩み
          </h3>
          <ul className="space-y-5 relative z-10">
            {service.beforeAfter.problems.map((prob: string, i: number) => (
              <li key={i} className="flex items-start group/item">
                <CheckCircle2 className="mr-4 h-6 w-6 shrink-0 text-gray-300 group-hover/item:text-brand-primary transition-colors mt-0.5" />
                <span className="text-base md:text-lg text-text-secondary leading-relaxed font-medium">
                  {prob}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-brand-primary/20 transition-colors mt-4 md:mt-12">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
          
          <h3 className="font-extrabold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-brand-accent rounded-full inline-block" />
            提供するソリューション
          </h3>
          <ul className="space-y-5 relative z-10">
            {service.scopes.map((scope: any, i: number) => (
              <li key={i} className="flex items-center p-4 bg-white/80 rounded-2xl border border-gray-50 shadow-sm group-hover/item:border-brand-primary/20 transition-all hover:-translate-y-1">
                <div className="w-2 h-2 rounded-full bg-brand-primary mr-4" />
                <span className="text-base font-bold text-text-primary">
                  {scope.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Globe, LineChart, Code2, MonitorSmartphone, Sparkles, LucideIcon, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/lib/services";
import Link from "next/link";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-design": Globe,
  "lp": LineChart,
  "system": Code2,
  "app": MonitorSmartphone,
  "ai": Sparkles,
};

export function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  const Icon = SERVICE_ICONS[service.slug] || Globe;
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-white overflow-hidden pb-32">
      {/* -------------------- HERO SECTION -------------------- */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-40 md:pt-48 md:pb-56 flex flex-col items-center justify-center min-h-[70vh] text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f8fafc_0%,transparent_100%)] -z-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full -z-10 mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full -z-10 mix-blend-multiply" />
        
        <Container className="relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-24 h-24 md:w-32 md:h-32 bg-white/50 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-4xl flex items-center justify-center text-brand-primary mb-12"
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.1] mb-8 max-w-5xl"
          >
            {service.title}
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl"
          >
            {service.shortDesc}
          </motion.p>
        </Container>
      </motion.section>

      {/* -------------------- BENTO BOX: TARGETS & PROBLEMS -------------------- */}
      <section className="relative z-20 -mt-24 md:-mt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Target Card */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-2xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-brand-primary/20 transition-all"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:bg-brand-primary/10 transition-colors duration-500" />
              
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center">1</span>
                こんな企業様へ
              </h2>
              
              <div className="space-y-4 relative z-10">
                {service.targetCustomers.map((target, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 group-hover:bg-white transition-colors">
                    <span className="text-4xl font-black text-gray-200">0{i+1}</span>
                    <span className="text-lg font-bold text-text-secondary">{target}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Problems Card */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-brand-navy p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
              
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-10 flex items-center gap-4 relative z-10">
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-light">2</span>
                これらの課題を解決
              </h2>
              
              <ul className="space-y-6 relative z-10">
                {service.problems.map((prob, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="mr-5 h-7 w-7 shrink-0 text-brand-primary mt-1" />
                    <span className="text-xl text-gray-200 leading-relaxed font-medium">{prob}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* -------------------- OFFERINGS & SCOPES -------------------- */}
      <section className="py-32 md:py-48 relative">
        <Container>
          <div className="text-center mb-20 md:mb-24">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight"
            >
              ご提供内容・対応範囲
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary font-medium"
            >
              目的達成に向けた包括的なアプローチ
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Offerings */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-[2.5rem] p-10 md:p-14 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-10 tracking-widest uppercase flex items-center gap-4">
                <span className="w-8 h-[2px] bg-brand-primary" />
                Service Menu
              </h3>
              <div className="flex flex-col gap-4">
                {service.offerings.map((off, i) => (
                  <div key={i} className="bg-white px-8 py-6 rounded-2xl shadow-sm text-lg font-bold text-text-primary flex items-center justify-between group hover:-translate-y-1 hover:shadow-md transition-all">
                    {off}
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scopes */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-xl font-bold text-brand-accent mb-10 tracking-widest uppercase flex items-center gap-4">
                <span className="w-8 h-[2px] bg-brand-accent" />
                Development Scope
              </h3>
              <div className="flex flex-wrap gap-4">
                {service.scopes.map((scope, i) => (
                  <span key={i} className="inline-block px-6 py-3 bg-brand-light/50 text-brand-primary rounded-full text-sm md:text-base font-bold border border-brand-primary/10">
                    {scope}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* -------------------- PROGRESS FLOW -------------------- */}
      <section className="py-32 md:py-40 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <Container>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 md:mb-32 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight">進行フロー</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-[39px] top-0 bottom-0 w-[2px] bg-gray-200" />

            <div className="space-y-16 md:space-y-24">
              {service.flow.map((item, i) => (
                <FlowStep key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function FlowStep({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"],
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const circleColor = useTransform(scrollYProgress, [0, 1], ["#e5e7eb", "#0056D2"]); // brand-primary hex
  const textColor = useTransform(scrollYProgress, [0, 1], ["#9ca3af", "#ffffff"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex items-start pl-[80px] md:pl-[120px]"
    >
      {/* Animated Circle */}
      <motion.div 
        style={{ scale: circleScale, backgroundColor: circleColor }}
        className="absolute left-0 top-0 w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-sm z-10"
      >
        <motion.span style={{ color: textColor }}>
          {item.step}
        </motion.span>
      </motion.div>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex-1 hover:border-brand-primary/20 transition-colors">
        <h3 className="text-2xl font-black text-text-primary mb-4">{item.title}</h3>
        <p className="text-lg text-text-secondary leading-relaxed font-medium">{item.desc}</p>
      </div>
    </motion.div>
  );
}

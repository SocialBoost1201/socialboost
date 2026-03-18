"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { ArrowDownCircle } from "lucide-react";

export function ServiceFlowSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100 overflow-hidden">
      <Container>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary text-sm font-bold uppercase tracking-widest mb-6">
            <ArrowDownCircle className="w-4 h-4" />
            Project Flow
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight">
            プロジェクト進行フロー
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          {/* Vertical Line */}
          <div className="absolute left-[36px] md:left-[49px] top-6 bottom-6 w-[2px] bg-gray-100" />

          <div className="space-y-12 md:space-y-16">
            {service.flow.map((item, i) => (
              <FlowStep key={i} item={item} index={i} total={service.flow.length} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FlowStep({ item, index, total }: { item: any; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const circleColor = useTransform(scrollYProgress, [0, 1], ["#f3f4f6", "#0056D2"]); // brand-primary hex
  const textColor = useTransform(scrollYProgress, [0, 1], ["#9ca3af", "#ffffff"]);
  const pulseOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 0.4]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-col md:flex-row items-start pl-[80px] md:pl-[120px]"
    >
      {/* Animated Circle Indicator */}
      <div className="absolute left-0 top-0 md:top-6 w-[72px] h-[72px] md:w-[100px] md:h-[100px] flex items-center justify-center pointer-events-none z-10">
        {/* Pulse effect behind circle */}
        <motion.div 
          style={{ opacity: pulseOpacity }}
          className="absolute inset-0 bg-brand-primary/20 rounded-full animate-ping shadow-[0_0_20px_rgba(24,119,242,0.4)]"
        />
        <motion.div 
          style={{ scale: circleScale, backgroundColor: circleColor }}
          className="relative w-14 h-14 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center font-black shadow-lg border-2 border-white"
        >
          <motion.span style={{ color: textColor }} className="text-xl md:text-2xl leading-none">
            {item.step}
          </motion.span>
        </motion.div>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-4xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-light/50 transition-colors duration-500" />
        <h3 className="text-2xl md:text-3xl font-black text-brand-navy mb-4 relative z-10">
          {item.title}
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed font-medium relative z-10">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

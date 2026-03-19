"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { ArrowDownCircle } from "lucide-react";

export function ServiceFlowSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-white border-t border-slate-100 overflow-hidden relative">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-8 mx-auto"
          >
            Project Flow
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 tracking-tighter leading-tight">
            スムーズな並走、<br className="md:hidden" /><span className="text-brand-primary">最短距離</span>での成果。
          </h2>
          <p className="text-xl text-text-secondary font-bold leading-relaxed max-w-2xl mx-auto">
            ヒアリングから戦略立案、開発、そして公開後の運用まで。<br className="hidden md:block" />
            SocialBoost独自の無駄のないフローで、プロジェクトを成功へ導きます。
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-[59px] top-10 bottom-10 w-px bg-slate-200" />

          <div className="space-y-16 md:space-y-24">
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
    offset: ["start 80%", "center center"],
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const circleColor = useTransform(scrollYProgress, [0, 1], ["#f1f5f9", "#1877F2"]); // slate-100 to brand-primary
  const textColor = useTransform(scrollYProgress, [0, 1], ["#94a3b8", "#ffffff"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      className="relative flex flex-col items-start pl-24 md:pl-40"
    >
      {/* Animated Circle Indicator */}
      <div className="absolute left-0 top-0 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center pointer-events-none z-10">
        <motion.div 
          style={{ scale: circleScale, backgroundColor: circleColor }}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center font-black shadow-lg border-4 border-white z-10"
        >
          <motion.span style={{ color: textColor }} className="text-xl md:text-2xl leading-none font-serif italic tracking-tighter">
            {item.step}
          </motion.span>
        </motion.div>
        
        {/* Glow overlay */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute inset-4 bg-brand-primary/20 blur-xl rounded-full scale-150 -z-10"
        />
      </div>

      <div className="bg-white p-10 md:p-14 rounded-4xl shadow-premium border border-slate-50 flex-1 hover:border-brand-primary/20 transition-all duration-700 relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/5 transition-colors duration-700" />
        
        <div className="relative z-10">
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Phase {index + 1}</div>
          <h3 className="text-2xl md:text-3xl font-black text-brand-navy mb-6 tracking-tight group-hover:text-brand-primary transition-colors duration-500">
            {item.title}
          </h3>
          <p className="text-lg text-text-secondary leading-relaxed font-bold">
            {item.desc}
          </p>
        </div>

        {/* Status indicator line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
      </div>
    </motion.div>
  );
}

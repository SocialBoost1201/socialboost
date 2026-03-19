"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { FileWarning, CheckCircle2, ArrowRight } from "lucide-react";

export function ServiceBeforeAfterSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-brand-navy relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-8 bg-white/5 border-white/10 text-white mx-auto"
          >
            Transformation
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
            非効率を、<span className="text-brand-primary">圧倒的成果</span>へ。
          </h2>
          <p className="text-xl text-white/50 font-bold leading-relaxed max-w-2xl mx-auto">
            業界の「当たり前」となっていた不誠実な構造を打ち破り、<br className="hidden md:block" />
            本来あるべき投資対効果を最大化させます。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          
          {/* BEFROE BOX */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-4xl p-10 md:p-14 relative overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            <div className="mb-12 flex items-center justify-between">
              <h3 className="text-4xl font-black text-white/10 tracking-tighter uppercase">Before</h3>
              <div className="px-5 py-2 rounded-full bg-red-500/10 text-red-400 text-[10px] font-black tracking-widest border border-red-500/20 uppercase">
                Common Issues
              </div>
            </div>
            
            <ul className="space-y-8">
              {service.beforeAfter.problems.map((prob, idx) => (
                <li key={idx} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 shrink-0 font-black text-xs border border-white/5">
                    0{idx + 1}
                  </div>
                  <p className="text-white/40 font-bold leading-relaxed pt-2 flex-1 group-hover:text-white/60 transition-colors">
                    {prob}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ARROW INDICATOR */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="w-24 h-24 rounded-full bg-brand-primary flex items-center justify-center shadow-premium-glow border-[6px] border-brand-navy relative"
            >
              <ArrowRight className="w-10 h-10 text-white" strokeWidth={3} />
              <div className="absolute inset-[-12px] border border-brand-primary/20 rounded-full animate-ping-slow" />
            </motion.div>
          </div>

          {/* AFTER BOX */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex-1 bg-white rounded-4xl p-10 md:p-14 lg:p-16 shadow-premium relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="mb-12 flex items-center justify-between relative z-10">
              <h3 className="text-4xl font-black text-brand-primary tracking-tighter uppercase">After</h3>
              <div className="px-5 py-2 rounded-full bg-brand-primary text-white text-[10px] font-black tracking-widest shadow-lg shadow-brand-primary/20 uppercase">
                Our Solution
              </div>
            </div>
            
            <ul className="space-y-8 relative z-10">
              {service.beforeAfter.solutions.map((sol, idx) => (
                <li key={idx} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary shadow-lg shadow-brand-primary/20 flex items-center justify-center text-white shrink-0 font-black text-xs transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    0{idx + 1}
                  </div>
                  <p className="text-brand-navy font-black text-lg leading-relaxed pt-2 flex-1">
                    {sol}
                  </p>
                </li>
              ))}
            </ul>

            {/* Subtle glow effect */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

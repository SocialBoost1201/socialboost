"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { FileWarning, CheckCircle2, ArrowRight } from "lucide-react";

export function ServiceBeforeAfterSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-20 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight"
          >
            課題と解決策
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 font-medium"
          >
            よくある業界の悩みを、確かなアプローチで打ち破ります。
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          
          {/* BEFROE BOX */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <h3 className="text-3xl font-black text-gray-400 italic font-serif">Before</h3>
              <div className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-bold border border-red-500/20 flex items-center gap-2">
                <FileWarning className="w-4 h-4" /> よくある課題
              </div>
            </div>
            
            <ul className="space-y-6">
              {service.beforeAfter.problems.map((prob, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 shrink-0 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed pt-1 flex-1">{prob}</p>
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
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center shadow-[0_0_40px_rgba(24,119,242,0.4)] border-4 border-brand-navy"
            >
              <ArrowRight className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          {/* AFTER BOX */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="mb-10 flex items-center justify-between relative z-10">
              <h3 className="text-3xl font-black text-brand-primary italic font-serif">After</h3>
              <div className="px-4 py-2 rounded-full bg-brand-light text-brand-primary text-sm font-bold border border-brand-primary/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 独自の解決策
              </div>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {service.beforeAfter.solutions.map((sol, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 font-bold text-sm group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <p className="text-brand-navy font-bold leading-relaxed pt-1 flex-1">{sol}</p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Layers } from "lucide-react";

export function ServiceScopeSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:w-1/3 sticky top-32"
          >
            <div className="section-badge mb-8 mx-0 bg-white border-slate-200 text-slate-400">Coverage</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-navy mb-8 tracking-tight leading-snug">
              提供内容・<br className="hidden md:block" />
              対応範囲
            </h2>
            <p className="text-lg text-text-secondary font-bold leading-relaxed max-w-sm">
              戦略立案の上流工程から、公開後の運用を見据えたインフラ構築まで、各領域のスペシャリストが一気通貫でカバーします。
            </p>
          </motion.div>
 
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
            {service.scopes.map((scope, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative bg-white border border-slate-100 p-10 md:p-12 rounded-4xl shadow-sm hover:shadow-premium hover:border-brand-primary/20 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-xs font-black text-brand-primary uppercase tracking-widest mb-6 block">0{idx + 1} / Coverage</div>
                  <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight group-hover:text-brand-primary transition-colors duration-500">
                    {scope.title}
                  </h3>
                  <p className="text-base text-text-secondary font-bold leading-relaxed">
                    {scope.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

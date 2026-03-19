"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Building2 } from "lucide-react";

export function ServiceTargetSection({ service }: { service: ServiceDetail }) {
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
            <div className="section-badge mb-8 mx-0 bg-white border-slate-200 text-slate-400">Target</div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 tracking-tighter leading-tight">
              このような課題を<br/>
              お持ちの企業様へ
            </h2>
            <p className="text-lg text-text-secondary font-bold leading-relaxed max-w-sm">
              SocialBoostは、現状維持ではなく「非連続な成長」を求める企業様のパートナーとして機能します。
            </p>
          </motion.div>
 
          <div className="lg:w-2/3 grid grid-cols-1 gap-6 md:gap-8">
            {service.targets.map((target, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative bg-white border border-slate-100 p-10 md:p-14 rounded-4xl shadow-sm hover:shadow-premium hover:border-brand-primary/20 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-brand-navy mb-4 tracking-tight group-hover:text-brand-primary transition-colors duration-500">
                      {target.title}
                    </h3>
                    <p className="text-lg text-text-secondary leading-relaxed font-bold">
                      {target.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle index number */}
                <div className="absolute top-8 right-10 text-4xl font-black text-slate-100 group-hover:text-brand-primary/10 transition-colors duration-500">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

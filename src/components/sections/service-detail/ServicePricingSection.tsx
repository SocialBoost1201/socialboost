"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ServicePricingSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-4xl md:rounded-[4rem] p-12 md:p-20 lg:p-24 text-center shadow-premium relative overflow-hidden group"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto bg-slate-50 rounded-3xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-700 mb-10 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
              <Calculator className="w-10 h-10" strokeWidth={1.5} />
            </div>
            
            <div className="section-badge mb-8 mx-auto bg-slate-50 border-slate-100 text-slate-400">Pricing Estimation</div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy mb-12 tracking-tight">
              投資対効果を、具体的に。
            </h2>

            <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 px-12 py-8 rounded-4xl bg-slate-50/50 border border-slate-100 mb-12 relative overflow-hidden">
              <span className="text-xl font-bold text-text-secondary">Expected Initial Cost</span>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter shadow-glow-sm">
                  {service.pricing.startingPrice}
                </span>
                <span className="text-2xl font-black text-brand-primary uppercase italic tracking-widest">JPY〜</span>
              </div>
            </div>

            <p className="text-xl text-text-secondary font-bold leading-relaxed mb-16 max-w-2xl mx-auto">
              {service.pricing.note}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="xl" className="w-full sm:w-auto px-16 rounded-3xl shadow-2xl shadow-brand-primary/20">
                <Link href="/contact">この予算感で相談する</Link>
              </Button>
              <Button asChild variant="ghost" size="xl" className="w-full sm:w-auto px-12 font-black text-text-secondary hover:text-brand-primary">
                <Link href="/pricing">料金シミュレーションを見る</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

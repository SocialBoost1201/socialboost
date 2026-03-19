"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Scale, CheckCircle2, XCircle } from "lucide-react";

export function ServiceComparisonSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-100 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-100 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-8 mx-auto"
          >
            Comparison
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 tracking-tighter leading-tight">
            圧倒的な、<span className="text-brand-primary">「質」と「スピード」</span>の違い。
          </h2>
          <p className="text-xl text-text-secondary font-bold leading-relaxed max-w-2xl mx-auto">
            開発アプローチからエンジニアの質、透明性まで。<br className="hidden md:block" />
            SocialBoostが選ばれ続ける理由を、客観的事実に基づき比較します。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header Row (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 px-10 mb-8 items-end">
            <div className="col-span-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Feature</div>
            <div className="col-span-4 bg-brand-primary rounded-t-3xl pt-8 pb-4 px-8 text-center">
              <span className="text-xs font-black text-white uppercase tracking-widest shadow-glow-sm">SocialBoost Advantage</span>
            </div>
            <div className="col-span-4 text-center pb-4">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Conventional Agency</span>
            </div>
          </div>

          <div className="space-y-4">
            {service.comparison.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] as any }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-slate-50 border border-slate-100 p-8 lg:p-0 rounded-4xl lg:rounded-none lg:bg-transparent lg:border-0 lg:border-b lg:border-slate-100"
              >
                {/* Feature Name */}
                <div className="lg:col-span-4 flex items-center lg:py-10 lg:px-10">
                  <h4 className="text-xl font-black text-brand-navy tracking-tight">{comp.feature}</h4>
                </div>

                {/* SocialBoost */}
                <div className="lg:col-span-4 bg-white lg:bg-brand-primary/5 border border-brand-primary/20 lg:border-x lg:border-t-0 lg:border-b-0 lg:border-brand-primary/10 p-8 lg:py-10 lg:px-12 relative flex items-start gap-4 shadow-sm lg:shadow-none">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0 mt-1 shadow-premium-glow">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-brand-navy font-black leading-relaxed">{comp.socialBoost}</p>
                </div>

                {/* Others */}
                <div className="lg:col-span-4 p-8 lg:py-10 lg:px-12 flex items-start gap-4 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 shrink-0 mt-1">
                    <XCircle className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <p className="text-base text-text-secondary font-bold leading-relaxed">{comp.others}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

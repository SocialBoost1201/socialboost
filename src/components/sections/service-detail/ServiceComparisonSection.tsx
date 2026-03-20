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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy mb-8 tracking-tight leading-snug">
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
            <div className="col-span-4 text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Feature</div>
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
                className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl"
              >
                {/* Feature Name - always full width */}
                <h4 className="text-base md:text-xl font-black text-brand-navy tracking-tight mb-4">{comp.feature}</h4>

                {/* SocialBoost vs Others - always 2 columns */}
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {/* SocialBoost */}
                  <div className="bg-white border border-brand-primary/20 p-4 md:p-6 rounded-2xl relative flex items-start gap-3 shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-brand-primary uppercase tracking-widest mb-1">SocialBoost</div>
                      <p className="text-sm md:text-base text-brand-navy font-black leading-snug">{comp.socialBoost}</p>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="p-4 md:p-6 rounded-2xl flex items-start gap-3 opacity-50 bg-slate-100/50">
                    <div className="w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 shrink-0 mt-0.5">
                      <XCircle className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">一般的な会社</div>
                      <p className="text-sm md:text-base text-text-secondary font-bold leading-snug">{comp.others}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

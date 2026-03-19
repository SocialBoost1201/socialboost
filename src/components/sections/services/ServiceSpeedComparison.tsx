"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const SPEEDS = [
  {
    type: "LP制作 (ランディングページ)",
    comp: "1.5 〜 2ヶ月",
    sb: "1 〜 2週間",
    save: "約80%短縮",
  },
  {
    type: "コーポレートサイト制作",
    comp: "3 〜 4ヶ月",
    sb: "3 〜 4週間",
    save: "約75%短縮",
  },
  {
    type: "Webシステム開発 (中規模)",
    comp: "4 〜 6ヶ月",
    sb: "1.5 〜 2ヶ月",
    save: "約65%短縮",
  },
];

export function ServiceSpeedComparison() {
  return (
    <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="section-badge mb-8 mx-0"
            >
              Delivery Speed
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-4xl md:text-5xl font-black leading-tight text-brand-navy tracking-tighter mb-10"
            >
              ビジネスを止めない、<br />
              <span className="text-brand-primary">圧倒的</span>な開発スピード。
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-xl text-text-secondary leading-relaxed font-bold mb-10"
            >
              最新のモダン技術（Next.js / BaaS）の標準採用と、不必要な中間マージンや階層構造の徹底排除。これにより、一般的な制作会社の半分以下の期間でのリリースを実現します。
            </motion.p>
          </div>

          {/* Right Visual Comparison */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-4xl p-8 md:p-14 lg:p-16 border border-slate-100 shadow-premium relative">
              <div className="flex justify-between items-end mb-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] px-2">
                <span>Scale / Type</span>
                <span className="text-right">Timeline Comparison</span>
              </div>
              
              <div className="space-y-12">
                {SPEEDS.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-lg md:text-xl font-black text-brand-navy tracking-tight">{item.type}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-brand-accent bg-brand-accent/5 px-4 py-1.5 rounded-full border border-brand-accent/20">
                          {item.save}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Competitor Bar */}
                      <div className="relative h-14 w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center px-6">
                        <div className="absolute left-0 top-0 bottom-0 w-full bg-slate-100/50 -z-10" />
                        <span className="text-xs font-black text-slate-400 w-24 shrink-0 uppercase tracking-widest">Market</span>
                        <span className="text-base font-bold text-slate-500">{item.comp}</span>
                      </div>

                      {/* SocialBoost Bar */}
                      <div className="relative h-16 w-full bg-white rounded-2xl overflow-hidden border border-brand-primary/20 flex items-center px-6 shadow-premium group">
                        <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "40%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: [0.16, 1, 0.3, 1] as any }}
                          className="absolute left-0 top-0 bottom-0 bg-brand-primary/5 -z-10 group-hover:bg-brand-primary/10 transition-colors" 
                        />
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-primary h-full" />
                        <span className="text-xs font-black text-brand-primary w-24 shrink-0 uppercase tracking-widest">SocialBoost</span>
                        <span className="text-2xl font-black text-brand-primary tracking-tighter shadow-glow-sm">{item.sb}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

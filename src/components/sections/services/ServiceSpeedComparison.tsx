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
    <section className="py-32 md:py-48 bg-background-alt relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center gap-4"
            >
              <span className="w-10 h-[2px] bg-brand-primary" />
              Delivery Speed
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-black leading-[1.2] text-text-primary tracking-tight mb-8"
            >
              ビジネスを止めない、<br />
              圧倒的な開発スピード
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-text-secondary leading-relaxed font-medium mb-8"
            >
              Next.jsやSupabaseといった最新のモダン技術の標準採用と、不必要な中間マージンや階層構造の排除により、一般的な制作会社の半分以下の期間でのリリースを可能にします。
            </motion.p>
          </div>

          {/* Right Visual Comparison */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <div className="flex justify-between items-end mb-8 text-sm font-bold text-gray-400 uppercase tracking-widest px-2">
                <span>プロジェクト規模</span>
                <span className="text-right">期間比較</span>
              </div>
              
              <div className="space-y-8">
                {SPEEDS.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg md:text-xl font-bold text-text-primary">{item.type}</h4>
                      <span className="text-sm font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                        {item.save}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Competitor Bar */}
                      <div className="relative h-12 w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center px-4">
                        <div className="absolute left-0 top-0 bottom-0 w-full bg-gray-100 -z-10" />
                        <span className="text-sm font-bold text-gray-500 w-24 shrink-0">一般企業</span>
                        <span className="text-sm font-bold text-gray-600">{item.comp}</span>
                      </div>

                      {/* SocialBoost Bar */}
                      <div className="relative h-14 w-full bg-white rounded-xl overflow-hidden ring-1 ring-brand-primary/20 flex items-center px-4 shadow-sm group">
                        <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "35%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 top-0 bottom-0 bg-brand-primary/10 -z-10 group-hover:bg-brand-primary/20 transition-colors" 
                        />
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary" />
                        <span className="text-sm font-bold text-brand-primary w-24 shrink-0">SocialBoost</span>
                        <span className="text-lg font-black text-brand-primary">{item.sb}</span>
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

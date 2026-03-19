"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const RANGES = [
  { name: "ランディングページ (LP) 制作", range: "15万円 〜 40万円" },
  { name: "コーポレートサイト制作", range: "30万円 〜 100万円" },
  { name: "オウンドメディア構築", range: "40万円 〜 80万円" },
  { name: "Webシステム・SaaS開発", range: "150万円 〜 500万円" },
  { name: "iOS / Androidアプリ開発", range: "200万円 〜 600万円" },
  { name: "AIチャット / LLM導入", range: "50万円 〜 200万円" },
];

export function PricingRangesSection() {
  return (
    <section className="py-24 md:py-48 bg-slate-50/50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <div className="section-badge mb-8">Standard Ranges</div>
              <h3 className="text-4xl md:text-5xl font-black leading-tight text-brand-navy tracking-tight mb-8">
                領域別の<br />
                費用目安
              </h3>
              <p className="text-lg text-text-secondary font-bold leading-relaxed max-w-sm">
                最終的なお見積もりは要件により変動しますが、標準的なプロジェクトにおける概算レンジは以下の通りです。
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {RANGES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as any }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-white border border-slate-100 rounded-3xl hover:border-brand-primary/20 shadow-sm hover:shadow-premium transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                    <span className="text-lg font-black text-brand-navy/80 group-hover:text-brand-navy transition-colors">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-6 mt-4 sm:mt-0">
                    <span className="hidden sm:block h-px w-12 bg-slate-100 group-hover:w-16 group-hover:bg-brand-primary/20 transition-all duration-500" />
                    <span className="text-2xl md:text-3xl font-black text-brand-primary tracking-tighter">
                      {item.range}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

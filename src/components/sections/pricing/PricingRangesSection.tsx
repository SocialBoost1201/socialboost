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
    <section className="py-24 bg-background-light relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-[2px] bg-brand-primary" />
              Standard Ranges
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-black leading-[1.2] text-text-primary tracking-tight mb-8"
            >
              領域ごとの<br />
              基本料金レンジ
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-text-secondary font-medium leading-relaxed"
            >
              ご要望の規模や機能要件により最終的なお見積もりは変動します。以下のレンジはあくまで「標準的なプロジェクト」における概算としてご参照ください。
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {RANGES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-primary/20 hover:shadow-lg transition-all"
                >
                  <span className="text-lg font-bold text-text-primary mb-2 sm:mb-0">{item.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-8 sm:w-16 bg-gray-200 hidden sm:block" />
                    <span className="text-xl md:text-2xl font-black text-brand-primary tracking-tight">
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

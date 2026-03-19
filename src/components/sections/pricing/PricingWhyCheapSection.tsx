"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Bot, Layers, Zap } from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "中間マージンの完全排除",
    desc: "代理店や下請け構造を挟まず、当社のプロフェッショナルチームが直接お客様とコミュニケーションし、要件定義から実装・運用まで一元管理します。",
  },
  {
    icon: Bot,
    title: "AI技術の徹底活用",
    desc: "コード生成、テスト自動化、品質管理などに最新の生成AIを組み込むことで、属人的なタスクと開発工数を劇的に削減し、クリエイティブと戦略設計にのみコストを集中させています。",
  },
  {
    icon: Zap,
    title: "モダンアーキテクチャの標準化",
    desc: "ゼロから組む必要のない認証機能やデータベース基盤には Supabase などのBaaSを積極的に採用。再利用可能なコンポーネント資産により、開発コストを適正化しています。",
  },
];

export function PricingWhyCheapSection() {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(24,119,242,0.03)_0%,transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="section-badge mb-8">Structural Efficiency</div>
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-brand-navy tracking-tight mb-8">
              高品質を、<br />
              適正価格で実現できる理由
            </h3>
            <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-md">
              SocialBoostの価格設定は、単なる「安売り」ではありません。
              業界の構造的な非効率を、テクノロジーと独自フローで徹底的に排除した結果です。
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {REASONS.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative bg-white p-8 md:p-14 rounded-4xl border border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-primary/20 transition-all duration-700 overflow-hidden"
              >
                {/* Subtle hover effect background */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                    <reason.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-brand-navy mb-4 tracking-tight group-hover:text-brand-primary transition-colors duration-500">{reason.title}</h4>
                    <p className="text-text-secondary leading-relaxed font-bold text-base md:text-lg">{reason.desc}</p>
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

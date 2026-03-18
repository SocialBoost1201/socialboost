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
    <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/3 md:sticky md:top-32"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-brand-primary" />
              Structural Efficiency
            </h2>
            <h3 className="text-3xl md:text-5xl font-black leading-[1.2] text-text-primary tracking-tight mb-6">
              なぜ、高品質なのに<br />
              適正価格なのか？
            </h3>
            <p className="text-lg text-text-secondary font-medium leading-relaxed">
              SocialBoostの価格設定の裏には、業界の構造的課題を解決する明確な理由があります。
            </p>
          </motion.div>

          <div className="md:w-2/3 flex flex-col gap-6 md:gap-8">
            {REASONS.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 md:p-12 rounded-4xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row gap-6 md:gap-8 items-start hover:shadow-[0_20px_40px_rgba(24,119,242,0.05)] hover:border-brand-primary/10 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500">
                  <reason.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-4">{reason.title}</h4>
                  <p className="text-text-secondary leading-relaxed font-medium">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

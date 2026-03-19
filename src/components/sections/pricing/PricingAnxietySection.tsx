"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { HelpCircle, MessagesSquare, Scale } from "lucide-react";

const RELIEFS = [
  {
    icon: HelpCircle,
    title: "要件が未整理でも相談可能",
    desc: "「何を作りたいか」が明確でなくても問題ありません。事業の課題や目標からヒアリングし、壁打ち相手として要件整理から伴走します。",
  },
  {
    icon: Scale,
    title: "小さく始めて大きく育てる",
    desc: "最初から巨大な予算を投下する必要はありません。まずは最低限の機能（MVP）で小さく公開し、検証結果を確認しながら段階的に拡張するプランを推奨しています。",
  },
  {
    icon: MessagesSquare,
    title: "相見積もり・比較検討を歓迎",
    desc: "他社からの提案内容や見積もりに妥当性があるかなど、セカンドオピニオンとしてのご相談も歓迎しています。強引な営業は一切行いません。",
  },
];

export function PricingAnxietySection() {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <div className="section-badge mb-8 mx-auto">Common Concerns</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-brand-navy tracking-tight mb-8">
              ご相談前の<span className="text-brand-primary">不安</span>を解消します
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed font-bold max-w-2xl mx-auto">
              IT投資は決して安価ではありません。私たちは透明性を極限まで高め、<br className="hidden md:block" />
              お客様が心から納得してスタートできる環境を整えています。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {RELIEFS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="group bg-slate-50/50 border border-slate-100 rounded-4xl p-10 md:p-14 hover:bg-white hover:shadow-premium hover:border-brand-primary/10 transition-all duration-700"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                <item.icon className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 tracking-tight">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed font-bold text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

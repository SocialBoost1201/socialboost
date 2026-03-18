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
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-black leading-[1.2] text-text-primary tracking-tight mb-6"
          >
            ご相談前のよくある<span className="text-brand-primary">不安</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-text-secondary leading-relaxed font-medium max-w-2xl mx-auto"
          >
            高額なIT投資に対する不安は当然です。私たちは透明性を第一に考え、お客様が納得して意思決定できる環境をご用意しています。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {RELIEFS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-500"
            >
              <item.icon className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-text-primary mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed font-medium text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

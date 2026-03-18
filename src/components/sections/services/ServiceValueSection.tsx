"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, FastForward, Building2, Cpu } from "lucide-react";

export function ServiceValueSection() {
  const values = [
    {
      icon: Building2,
      title: "「作るだけ」ではなく、\n事業構造から整理する",
      desc: "Webサイトやシステムは手段にすぎません。ビジネスモデルや営業プロセスを深く理解し、KGI/KPIの策定から伴走することで、確実なROI（投資対効果）を創出します。",
    },
    {
      icon: FastForward,
      title: "不要なプロセスを省いた\n圧倒的なスピード",
      desc: "一般的な多重下請けや縦割りの分業制を排除し、戦略策定からデザイン・開発までを一気通貫で実行。アジャイルな進行により、本来の半分の期間でのリリースを実現します。",
    },
    {
      icon: Cpu,
      title: "最新AI技術と\n構造化による価格低減",
      desc: "モダンなアーキテクチャ（Next.js / Supabase等）の選定と、AIを活用した開発プロセスの効率化により、ハイエンドな品質を維持しながらコストを大幅に抑えることが可能です。",
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      
      <Container>
        <div className="text-center mb-24 lg:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[2px] bg-brand-primary" />
            Our Value
            <span className="w-8 h-[2px] bg-brand-primary" />
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] text-text-primary tracking-tight"
          >
            なぜ、SocialBoostが<br className="md:hidden" />選ばれるのか
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-light/50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-text-primary mb-6 whitespace-pre-line leading-snug">
                {item.title}
              </h4>
              <p className="text-text-secondary leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

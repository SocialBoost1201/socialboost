"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, FastForward, Building2, Cpu } from "lucide-react";

export function ServiceValueSection() {
  const values = [
    {
      icon: Building2,
      title: "事業構造から整理する、\n戦略的アプローチ",
      desc: "Webサイトやシステムは、あくまで事業成長の手段です。私たちはビジネスのKGI/KPIを深く理解し、投資対効果（ROI）を最大化させるための戦略策定から伴走します。",
    },
    {
      icon: FastForward,
      title: "不要なプロセスを省いた、\n圧倒的なリリース速度",
      desc: "多重下請けや縦割りの分業を排除し、一気通貫のチーム体制を構築。アジャイルな進行とAI活用により、旧来の半分以下の期間で高品質なプロダクトをリリースします。",
    },
    {
      icon: Cpu,
      title: "最新AI技術による、\n高品質・適正価格の実現",
      desc: "Next.jsやBaaS（Supabase等）の選定に加え、AIを開発プロセスに組み込むことで工数を劇的に削減。ハイエンドな品質を維持しながら、本質的な価値にコストを集中させます。",
    },
  ];

  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-8 mx-auto"
          >
            Our Value
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-3xl md:text-5xl font-black leading-tight text-brand-navy tracking-tighter"
          >
            なぜ、SocialBoostが<br className="md:hidden" />選ばれるのか
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="group relative bg-white p-7 md:p-10 lg:p-14 rounded-3xl md:rounded-4xl border border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-primary/20 transition-all duration-700"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-primary transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-primary group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl md:text-2xl font-black text-brand-navy mb-4 whitespace-pre-line leading-tight tracking-tight group-hover:text-brand-primary transition-colors duration-500">
                {item.title}
              </h4>
              <p className="text-text-secondary leading-relaxed font-bold text-base md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

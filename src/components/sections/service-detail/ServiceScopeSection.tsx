"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Layers } from "lucide-react";

export function ServiceScopeSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-20 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-5/12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 border border-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-widest mb-6">
              <Layers className="w-4 h-4" />
              Scope of Work
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 tracking-tight leading-tight">
              提供内容・<br className="hidden md:block" />対応範囲
            </h2>
            <p className="text-lg text-text-secondary font-medium leading-relaxed">
              戦略立案の上流工程から、公開後の運用を見据えたインフラ構築まで、一気通貫でカバー。各領域のスペシャリストがチームを組み、プロジェクトを成功に導きます。
            </p>
          </motion.div>

          <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {service.scopes.map((scope, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-3xl hover:bg-white hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-sm font-black text-brand-primary/50 mb-3 font-serif">0{idx + 1}</div>
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3">{scope.title}</h3>
                <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed">{scope.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

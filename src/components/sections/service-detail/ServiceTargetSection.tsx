"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Building2 } from "lucide-react";

export function ServiceTargetSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-32 bg-white relative z-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3 sticky top-32"
          >
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight leading-tight">
              対象となる<br/>企業・ユーザー
            </h2>
            <p className="text-lg text-text-secondary font-medium leading-relaxed">
              私たちは、本質的な課題解決と事業成長を求める企業様のパートナーとして、共にビジネスの次のステージを目指します。
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 gap-6">
            {service.targets.map((target, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-light/30 border border-brand-primary/10 p-8 md:p-10 rounded-4xl hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-brand-primary/20 transition-all duration-500 group"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-primary shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 leading-snug">
                      {target.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed font-medium">
                      {target.desc}
                    </p>
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

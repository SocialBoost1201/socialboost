"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Scale, CheckCircle2, XCircle } from "lucide-react";

export function ServiceComparisonSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-100 relative">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest"
          >
            <Scale className="w-4 h-4 text-brand-primary" />
            Comparison
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight mb-6"
          >
            他社との圧倒的な違い
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary font-medium max-w-2xl mx-auto"
          >
            なぜ、SocialBoostが最前線の企業様に選ばれ続けているのか。開発アプローチとスタンスの違いを明確に比較します。
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Table Header (Desktop) */}
          <div className="hidden md:flex mb-4">
            <div className="w-1/4"></div>
            <div className="w-3/8 px-6 text-center text-xl font-black text-brand-primary">
              <div className="bg-brand-primary/10 py-3 rounded-t-2xl border-x border-t border-brand-primary/20">SocialBoost</div>
            </div>
            <div className="w-3/8 px-6 text-center text-lg font-bold text-gray-400">
              <div className="py-3">一般的な制作会社</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 relative">
            {/* Highlight Background for SocialBoost Column (Desktop) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-[25%] w-[37.5%] bg-white border-x border-brand-primary/20 shadow-[0_0_40px_rgba(24,119,242,0.05)] rounded-b-2xl -z-10" />

            {service.comparison.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row bg-white md:bg-transparent rounded-2xl md:rounded-none p-6 md:p-0 shadow-sm md:shadow-none border border-gray-100 md:border-none md:border-b md:border-gray-200 last:border-0"
              >
                {/* Feature Name */}
                <div className="w-full md:w-1/4 flex items-center md:py-8 mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-brand-navy">{comp.feature}</h4>
                </div>

                {/* SocialBoost */}
                <div className="w-full md:w-3/8 md:px-6 md:py-8 mb-4 md:mb-0 flex items-start gap-3 relative z-10">
                  <div className="md:hidden text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">SocialBoost</div>
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                  <p className="text-brand-navy font-bold leading-relaxed">{comp.socialBoost}</p>
                </div>

                {/* Others */}
                <div className="w-full md:w-3/8 md:px-6 md:py-8 flex items-start gap-3 opacity-60">
                  <div className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">一般的な会社</div>
                  <XCircle className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                  <p className="text-text-secondary font-medium leading-relaxed">{comp.others}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

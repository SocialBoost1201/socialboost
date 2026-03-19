"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Sparkles } from "lucide-react";

export function ServiceValuesSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.05)_0%,transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-8 mx-auto"
          >
            Core Values
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 tracking-tighter leading-tight">
            SocialBoostが<br className="md:hidden" /><span className="text-brand-primary">選ばれる理由</span>
          </h2>
          <p className="text-xl text-text-secondary font-bold leading-relaxed max-w-2xl mx-auto">
            単なる開発会社ではなく、事業のパートナーとして<br className="hidden md:block" />
            結果にコミットするための独自の提供価値を定義しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {service.values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="group relative bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-4xl hover:bg-white hover:shadow-premium hover:border-brand-primary/20 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black text-slate-200 mb-8 font-serif italic tracking-tighter group-hover:text-brand-primary/20 transition-colors duration-500">
                  {idx + 1}.
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-brand-navy mb-6 leading-tight group-hover:text-brand-primary transition-colors duration-500">
                  {val.title}
                </h3>
                <p className="text-lg text-text-secondary font-bold leading-relaxed">
                  {val.desc}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

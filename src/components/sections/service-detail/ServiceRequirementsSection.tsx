"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { ListChecks } from "lucide-react";

export function ServiceRequirementsSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-brand-navy text-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:w-1/3 sticky top-32"
          >
            <div className="section-badge mb-8 mx-0 bg-white/5 border-white/10 text-white">Logic</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 tracking-tight leading-snug">
              要件の可視化
            </h2>
            <p className="text-xl text-white/50 font-bold leading-relaxed max-w-sm">
              ブラックボックスになりがちなプロセスを徹底的に言語化。本質的な価値の裏側にある設計思想を公開します。
            </p>
          </motion.div>
 
          <div className="lg:w-2/3 flex flex-col gap-6 md:gap-8 w-full">
            {service.requirements.map((req, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-4xl hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-700 overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                
                <h3 className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tight group-hover:text-brand-primary transition-colors duration-500">
                  {req.title}
                </h3>
                <p className="text-lg text-white/40 font-bold leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                  {req.desc}
                </p>

                {/* Index number */}
                <div className="absolute top-10 right-14 text-4xl font-black text-white/5 group-hover:text-brand-primary/10 transition-colors duration-500">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

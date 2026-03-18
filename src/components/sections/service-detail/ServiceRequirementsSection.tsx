"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { ListChecks } from "lucide-react";

export function ServiceRequirementsSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-20 md:py-48 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/20 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3 sticky top-32 h-fit"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-light text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <ListChecks className="w-4 h-4" />
              Requirements
            </div>
            <h2 className="text-4xl md:text-4xl font-black mb-6 tracking-tight leading-tight">
              要件分解
            </h2>
            <p className="text-lg text-gray-300 font-medium leading-relaxed mb-8">
              「ブラックボックス」になりがちな制作や開発のプロセスを、徹底的に言語化・可視化。私たちが提供する本質的な価値の裏側にある、緻密なタスクと設計思想を公開します。
            </p>
          </motion.div>

          <div className="lg:w-2/3 flex flex-col gap-6">
            {service.requirements.map((req, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-4xl hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Reveal Line */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-brand-light transition-colors duration-300">
                  {req.title}
                </h3>
                <p className="text-lg text-gray-300 font-medium leading-relaxed">
                  {req.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

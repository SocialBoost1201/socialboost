"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Sparkles } from "lucide-react";

export function ServiceValuesSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100 relative">
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            Core Values
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight"
          >
            私たちが選ばれる理由
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {service.values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group"
            >
              <div className="text-4xl font-black text-brand-light mb-6 font-serif">
                0{idx + 1}.
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 leading-snug group-hover:text-brand-primary transition-colors">
                {val.title}
              </h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

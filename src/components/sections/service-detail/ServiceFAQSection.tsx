"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export function ServiceFAQSection({ service }: { service: ServiceDetail }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:w-1/3 sticky top-32"
          >
            <div className="section-badge mb-8 mx-0 bg-white border-slate-200 text-slate-400">Support</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy mb-8 tracking-tight leading-snug">
              よくあるご質問
            </h2>
            <p className="text-xl text-text-secondary font-bold leading-relaxed max-w-sm">
              ご依頼前に多く寄せられるご質問。記載のない点については、お気軽に無料相談よりお問い合わせください。
            </p>
          </motion.div>

          <div className="lg:w-2/3 space-y-6">
            {service.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] as any }}
                className={`bg-white rounded-4xl border transition-all duration-500 overflow-hidden ${openIndex === idx ? 'border-brand-primary/30 shadow-premium' : 'border-slate-100 shadow-sm hover:border-brand-primary/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-10 py-10 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-xl md:text-2xl font-black leading-tight pr-8 transition-colors duration-500 ${openIndex === idx ? 'text-brand-primary' : 'text-brand-navy group-hover:text-brand-primary'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 ${openIndex === idx ? 'bg-brand-primary text-white border-brand-primary rotate-180 shadow-premium-glow' : 'bg-slate-50 text-slate-400 border-slate-100 group-hover:bg-brand-primary/10 group-hover:text-brand-primary'}`}>
                    <ChevronDown className="w-6 h-6" strokeWidth={3} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                    >
                      <div className="px-10 pb-12 pt-4">
                        <div className="w-full h-px bg-slate-100 mb-8" />
                        <p className="text-lg text-text-secondary leading-relaxed font-bold">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

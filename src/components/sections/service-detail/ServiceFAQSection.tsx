"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export function ServiceFAQSection({ service }: { service: ServiceDetail }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-20 bg-gray-50 border-t border-gray-100">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">
              <MessageCircleQuestion className="w-4 h-4 text-brand-primary" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 tracking-tight leading-tight">
              よくあるご質問
            </h2>
            <p className="text-lg text-text-secondary font-medium leading-relaxed">
              ご依頼前に多く寄せられるご質問にお答えしています。記載のない点については、お気軽に無料相談よりお問い合わせください。
            </p>
          </motion.div>

          <div className="lg:w-2/3 space-y-4">
            {service.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  <span className="text-lg md:text-xl font-bold text-brand-navy pr-8">
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === idx ? 'bg-brand-primary text-white border-brand-primary transform rotate-180' : 'bg-gray-50 text-gray-400 border-gray-200 group-hover:bg-brand-light group-hover:text-brand-primary'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-text-secondary leading-relaxed font-medium">
                        <div className="w-full h-px bg-gray-100 mb-6" />
                        {faq.a}
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

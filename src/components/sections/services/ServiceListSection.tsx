"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services";

export function ServiceListSection() {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="max-w-3xl"
          >
            <div className="section-badge mb-8 mx-0">Service Lineup</div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight text-brand-navy tracking-tighter">
              点ではなく「面」で、<br />
              事業の全フェーズを並走する。
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="max-w-lg"
          >
            <p className="text-base md:text-xl text-text-secondary leading-relaxed font-bold">
              Web戦略の立案から、サイト・システムの実装、最新のAI導入まで。
              事業成長に直結する6つのコア領域を提供します。
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <Link 
                href={`/services/${service.slug}`}
                className="group block relative bg-slate-50 border border-slate-100 p-6 sm:p-10 md:p-14 lg:p-20 rounded-3xl md:rounded-4xl shadow-sm hover:bg-white hover:border-brand-primary/30 hover:shadow-premium transition-all duration-700 overflow-hidden"
              >
                {/* Background Text Float */}
                <div className="absolute -right-8 -bottom-8 text-[12rem] md:text-[20rem] font-black text-brand-navy/[0.02] select-none group-hover:text-brand-primary/[0.04] transition-colors duration-700 pointer-events-none tracking-tighter">
                  {service.slug.substring(0, 3).toUpperCase()}
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-20 items-center">
                  <div className="lg:col-span-4">
                    <div className="text-xs font-black tracking-[0.4em] text-brand-primary mb-4 md:mb-8 border-b border-brand-primary/10 pb-3 md:pb-4 inline-block">
                      CATEGORY 0{index + 1}
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy mb-4 md:mb-8 leading-tight group-hover:text-brand-primary transition-colors duration-500 tracking-tight">
                      {service.title}
                    </h4>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <p className="text-sm md:text-lg text-text-secondary leading-relaxed font-bold mb-6 md:mb-10 max-w-xl">
                      {service.hero.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.scopes.slice(0, 4).map((scope, i) => (
                        <span key={i} className="px-5 py-2 bg-white text-brand-navy/60 text-xs font-black rounded-full border border-slate-100 shadow-sm group-hover:border-brand-primary/20 transition-colors">
                          {scope.title}
                        </span>
                      ))}
                      {service.scopes.length > 4 && (
                        <span className="px-5 py-2 bg-white text-brand-navy/60 text-xs font-black rounded-full border border-slate-100 shadow-sm">
                          +{service.scopes.length - 4} More Area
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="hidden sm:flex lg:col-span-2 justify-start lg:justify-end">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-navy group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                      <ArrowRight className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

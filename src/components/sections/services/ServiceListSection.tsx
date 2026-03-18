"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services";

export function ServiceListSection() {
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-brand-primary" />
              Service Lineup
            </h2>
            <h3 className="text-4xl md:text-6xl font-black leading-[1.1] text-text-primary tracking-tight">
              あらゆる課題に応える<br />提供サービス
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
              Web戦略の立案から、サイト制作、業務システム開発、最先端のAI導入支援まで。点ではなく「面」で事業成長をサポートします。
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href={`/services/${service.slug}`}
                className="group block bg-white border border-gray-100 p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-brand-primary/20 hover:shadow-[0_30px_60px_rgba(24,119,242,0.08)] transition-all duration-500 overflow-hidden relative"
              >
                {/* Background Text Float */}
                <div className="absolute -right-10 -bottom-10 text-[10rem] md:text-[14rem] font-black text-gray-50 select-none group-hover:text-brand-light/50 transition-colors duration-500 pointer-events-none tracking-tighter mix-blend-multiply">
                  {service.slug.substring(0, 3).toUpperCase()}
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className="lg:col-span-4">
                    <div className="text-sm font-bold text-brand-primary mb-4 tracking-widest uppercase">
                      0{index + 1}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                      {service.hero.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.scopes.slice(0, 3).map((scope, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-50 text-text-secondary text-sm font-bold rounded-full border border-gray-100">
                          {scope.title}
                        </span>
                      ))}
                      {service.scopes.length > 3 && (
                        <span className="px-4 py-2 bg-gray-50 text-text-secondary text-sm font-bold rounded-full border border-gray-100">
                          +{service.scopes.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex justify-start lg:justify-end">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-text-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
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

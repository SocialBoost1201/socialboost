"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ServicePricingSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-brand-light/20 border border-brand-primary/10 rounded-[2.5rem] p-10 md:p-16 text-center shadow-sm"
        >
          <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm mb-8">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-8 tracking-tight">
            料金の目安
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <span className="text-xl font-bold text-text-secondary">初期費用</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-black text-brand-primary tracking-tighter">
                {service.pricing.startingPrice}
              </span>
              <span className="text-xl font-bold text-brand-primary">円〜</span>
            </div>
          </div>
          <p className="text-text-secondary font-medium leading-relaxed mb-10 max-w-2xl mx-auto text-sm md:text-base">
            {service.pricing.note}
          </p>
          <div className="flex justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white hover:bg-gray-50">
              <Link href="/pricing">すべての料金プランを見る</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

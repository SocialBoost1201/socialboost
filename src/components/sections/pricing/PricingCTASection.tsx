"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare, Briefcase, Smartphone } from "lucide-react";

export function PricingCTASection() {
  return (
    <section className="py-24 md:py-20 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-text-primary mb-8 leading-tight tracking-tight">
              未来への投資を、<br className="md:hidden" />
              <span className="text-brand-primary">最適化する。</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-12">
              まずはざっくりとしたご要望をお聞かせください。<br className="hidden md:block" />
              最適な事業方針と、概算のお見積もりをご提案いたします。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="w-full sm:w-[300px] h-14 bg-brand-primary text-white hover:bg-brand-accent shadow-[0_0_30px_rgba(24,119,242,0.3)] hover:shadow-[0_0_50px_rgba(24,119,242,0.5)] transition-all group flex items-center justify-center gap-2">
                <Link href="/contact" tabIndex={-1}>
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold">無料枠で相談してみる</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Sub CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button asChild variant="outline" className="w-full h-14 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 group border-gray-200">
                <Link href="/services" tabIndex={-1}>
                  <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                  <span className="font-bold text-text-primary">提供サービスを詳しく見る</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full h-14 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 group border-gray-200">
                <Link href="/works" tabIndex={-1}>
                  <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                  <span className="font-bold text-text-primary">過去の実績を見る</span>
                </Link>
              </Button>
            </div>
            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

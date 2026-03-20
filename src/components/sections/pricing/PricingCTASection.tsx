"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare, Briefcase, Smartphone } from "lucide-react";

export function PricingCTASection() {
  return (
    <section className="py-24 md:py-48 bg-brand-navy relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(24,119,242,0.05)_0%,transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <div className="section-badge mb-10 mx-auto bg-white/5 border-white/10 text-white">Let's Talk</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-10 leading-snug tracking-tight">
              未来への投資を、<br />
              <span className="text-brand-primary italic">最適化</span>する。
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-bold leading-relaxed mb-16 max-w-3xl mx-auto">
              まずは、お客様の想いをお聞かせください。<br className="hidden md:block" />
              そこから、最短距離での事業成長と「適正な価格」が見えてきます。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <Button asChild size="xl" className="w-full sm:w-auto px-16 rounded-3xl shadow-2xl shadow-brand-primary/40">
                <Link href="/contact" className="gap-4">
                  <MessageSquare className="w-6 h-6" />
                  <span className="font-black text-xl">無料相談を開始する</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>

            {/* Sub CTAs with Glass Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Link 
                href="/services" 
                className="group flex items-center justify-between p-8 rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-500">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-white/40 tracking-widest uppercase mb-1">Explore</div>
                    <div className="text-white font-black text-lg">サービス一覧</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>

              <Link 
                href="/works" 
                className="group flex items-center justify-between p-8 rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-500">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-white/40 tracking-widest uppercase mb-1">Showcase</div>
                    <div className="text-white font-black text-lg">制作・開発実績</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

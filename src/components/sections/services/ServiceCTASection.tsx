"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calculator, MessageSquare } from "lucide-react";

export function ServiceCTASection() {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="bg-brand-navy rounded-4xl md:rounded-[4rem] p-12 md:p-20 lg:p-32 text-center relative overflow-hidden group shadow-premium"
        >
          {/* ── Background Visuals ── */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-[-10%] w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.15)_0%,transparent_60%)] transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="section-badge mb-10 bg-white/5 border-white/10 text-white mx-auto"
            >
              Get Started
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight tracking-tighter">
              プロジェクトの現在地から、<br className="hidden md:block" />
              <span className="text-brand-primary shadow-glow-sm">最適解</span>をご提案します。
            </h2>
            <p className="text-white/60 text-xl md:text-2xl font-bold leading-relaxed mb-16 max-w-2xl mx-auto">
              「何から始めるべきか」という段階でも構いません。<br className="hidden md:block" />
              まずはお気軽にご状況をお聞かせください。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="xl" className="w-full sm:w-auto px-16 bg-white text-brand-navy hover:bg-slate-50 border-none group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20">
                <Link href="/contact" className="gap-3">
                  <MessageSquare className="w-6 h-6 text-brand-primary" />
                  <span className="font-black">この内容で相談する</span>
                  <ArrowRight className="w-5 h-5 text-brand-primary transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="xl" className="w-full sm:w-auto px-12 text-white/60 hover:text-white hover:bg-white/5 border border-white/10 font-bold transition-all duration-500">
                <Link href="/pricing" className="gap-3">
                  <Calculator className="w-5 h-5 opacity-60" />
                  <span>ケース別料金を見る</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

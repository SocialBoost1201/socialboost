"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calculator, MessageSquare } from "lucide-react";

export function ServiceCTASection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-navy rounded-[3rem] p-10 md:p-16 lg:p-24 text-center relative overflow-hidden"
        >
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              プロジェクトの現在地から、<br className="hidden md:block" />最適解をご提案します。
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-12">
              「何から始めるべきか分からない」「予算感だけ知りたい」といった段階でも構いません。まずはお気軽にご状況をお聞かせください。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button asChild size="lg" className="w-full sm:w-[280px] h-14 bg-white text-brand-navy hover:bg-gray-50 flex items-center justify-center gap-2 group transition-transform hover:-translate-y-1">
                <Link href="/contact" tabIndex={-1}>
                  <MessageSquare className="w-5 h-5 text-brand-primary" />
                  <span className="font-bold">この内容で相談する</span>
                  <ArrowRight className="w-4 h-4 text-brand-primary transition-transform group-hover:translate-x-1 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="w-full sm:w-[280px] h-14 text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 group">
                <Link href="/pricing" tabIndex={-1}>
                  <Calculator className="w-5 h-5 opacity-70" />
                  <span className="font-bold">ケース別料金を見る</span>
                  <ArrowRight className="w-4 h-4 opacity-70 transition-transform group-hover:translate-x-1 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

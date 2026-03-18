"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { FolderHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ServiceWorksSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-20 bg-brand-navy text-white relative border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 text-brand-light mb-8 shadow-sm">
            <FolderHeart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
            確かな成果と、共創の歩み
          </h2>
          <p className="text-lg text-gray-300 font-medium leading-relaxed mb-10">
            {service.title}領域における、最前線でのプロジェクト事例をご紹介します。私たちがどのように事業課題に向き合い、解決へ導いたかをご覧ください。
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-xl shadow-white/10">
              <Link href="/works">実績一覧を見る</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

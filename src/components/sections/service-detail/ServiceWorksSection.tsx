"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "@/lib/services";
import { FolderHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ServiceWorksSection({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-24 md:py-48 bg-brand-navy text-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary mb-12 shadow-premium-glow">
            <FolderHeart className="w-10 h-10" strokeWidth={1.5} />
          </div>

          <div className="section-badge mb-8 mx-auto bg-white/5 border-white/10 text-white">Our Works</div>

          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
            確かな成果と、共創の歩み
          </h2>
          <p className="text-xl text-white/50 font-bold leading-relaxed mb-16 max-w-2xl mx-auto">
            {service.title}領域における、最前線でのプロジェクト事例。私たちがどのように事業課題に向き合い、妥協なき解決へ導いたかをご覧ください。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="xl" className="bg-white text-brand-navy hover:bg-slate-100 px-16 rounded-3xl shadow-premium-glow font-black border-none">
              <Link href="/works">プロジェクト実績を見る</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/5 px-12 rounded-3xl font-black">
              <Link href="/contact">事例について詳しく聞く</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

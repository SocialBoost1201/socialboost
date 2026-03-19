"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function PricingPhilosophySection() {
  return (
    <section className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <div className="section-badge mb-10 mx-auto">Philosophy</div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-tight tracking-tighter mb-12">
              品質を犠牲にするのではなく、<br />
              <span className="text-brand-primary italic">構造</span>を変える。
            </h2>
            <div className="space-y-8 text-xl text-text-secondary font-bold leading-relaxed max-w-4xl mx-auto">
              <p>
                従来の開発プロジェクトでは、費用の多くが「多層的な中間マージン」や「非効率な伝言ゲーム」に費やされてきました。
              </p>
              <p>
                SocialBoostは、最新テクノロジーのフル活用と、上流から下流までを統合した独自フローにより、これらの無駄を徹底的に排除しました。
              </p>
              <p className="text-brand-navy text-2xl md:text-3xl font-black mt-16 pt-16 border-t border-slate-100 italic">
                「安売り」ではなく、本来あるべき「適正価格」を。
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

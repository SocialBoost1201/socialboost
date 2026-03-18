"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function PricingPhilosophySection() {
  return (
    <section className="py-24 md:py-20 bg-white relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-black text-text-primary leading-tight tracking-tight mb-8">
              品質を下げるのではなく、<br className="md:hidden" />
              <span className="text-brand-primary">構造を変える。</span>
            </h2>
            <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
              <p>
                一般的な制作・開発プロジェクトにおいて、お客様が支払う費用の半分以上は「多重下請けのマージン」や「非効率なコミュニケーションコスト」に消えています。
              </p>
              <p>
                SocialBoostは、モダンテクノロジー（AI・Next.js等）のフル活用と、上流から下流まで社内一元管理するプロセスにより、これらの無駄をゼロにしました。
              </p>
              <p className="text-text-primary font-bold">
                私たちが提示するのは「安売り」の価格ではなく、本来あるべき「適正価格」です。
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

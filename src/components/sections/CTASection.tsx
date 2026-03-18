"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="bg-brand-primary py-24 text-white relative overflow-hidden">
      {/* Noise Texture Overlay for premium frosted feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Dynamic Aurora Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0" 
      />
      
      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
          事業の成長を、<br className="md:hidden" />デジタルの力で加速させる
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Webサイト制作からシステム開発、AI導入まで。要件が固まっていなくてもお気軽にご相談ください。最適なロードマップをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-[320px] bg-white text-brand-primary hover:bg-gray-50 flex items-center justify-center gap-2 group shadow-xl transition-transform hover:-translate-y-1">
            <Link href="/contact" tabIndex={-1}>
              <MessageCircle className="w-5 h-5 cursor-pointer" />
              まずは無料で相談してみる
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-[320px] mt-4 sm:mt-0 text-white hover:bg-white/10 hover:text-white border border-white/30 transition-transform hover:-translate-y-1 justify-center">
            <Link href="/works" tabIndex={-1}>
              制作実績を見る
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/70">
          オンライン相談（Zoom対応） / ご相談・お見積もり無料
        </p>
      </Container>
    </section>
  );
}

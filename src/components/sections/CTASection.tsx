import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-brand-primary py-24 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          事業の成長を、<br className="md:hidden" />デジタルの力で加速させる
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Webサイト制作からシステム開発、AI導入まで。要件が固まっていなくてもお気軽にご相談ください。最適なロードマップをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" tabIndex={-1} className="w-full sm:w-[320px]">
            <Button size="lg" className="w-full bg-white text-brand-primary hover:bg-gray-50 flex items-center justify-center gap-2 group shadow-xl transition-transform hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" />
              まずは無料で相談してみる
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/works" tabIndex={-1} className="w-full sm:w-[320px] mt-4 sm:mt-0">
            <Button size="lg" variant="ghost" className="w-full text-white hover:bg-white/10 hover:text-white border border-white/30 transition-transform hover:-translate-y-1 justify-center">
              制作実績を見る
            </Button>
          </Link>
        </div>
        <p className="mt-8 text-sm text-blue-200">
          オンライン相談（Zoom対応） / ご相談・お見積もり無料
        </p>
      </Container>
    </section>
  );
}

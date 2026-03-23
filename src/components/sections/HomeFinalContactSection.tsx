import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeFinalContactSection() {
  return (
    <section id="home-contact" className="bg-white pt-20 pb-[calc(5rem+env(safe-area-inset-bottom))] md:py-24 lg:py-28 border-t border-slate-100">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-background-alt p-8 md:p-12 lg:p-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary/70 mb-3">Contact</p>
          <h2 className="text-[clamp(1.85rem,7.5vw,2.3rem)] font-black tracking-tight text-brand-navy mb-5 leading-tight [word-break:auto-phrase] [overflow-wrap:break-word]">
            プロジェクトの相談先を
            <br className="hidden sm:block" />
            お探しの方へ
          </h2>
          <p className="text-[clamp(0.95rem,3.7vw,1rem)] text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8 [word-break:auto-phrase] [overflow-wrap:break-word]">
            課題が言語化しきれていない段階でも問題ありません。事業状況と優先度を伺い、進め方の選択肢を整理してご提案します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="h-[3.5rem]">
              <Link href="/contact">
                お問い合わせ・ご相談
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-[3.5rem]">
              <Link href="/company">会社概要を見る</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

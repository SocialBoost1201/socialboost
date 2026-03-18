import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";

// Sections
import { PricingHeroSection } from "@/components/sections/pricing/PricingHeroSection";
import { PricingPhilosophySection } from "@/components/sections/pricing/PricingPhilosophySection";
import { PricingRangesSection } from "@/components/sections/pricing/PricingRangesSection";
import { PricingCasesSection } from "@/components/sections/pricing/PricingCasesSection";
import { PricingWhyCheapSection } from "@/components/sections/pricing/PricingWhyCheapSection";
import { PricingAnxietySection } from "@/components/sections/pricing/PricingAnxietySection";
import { PricingCTASection } from "@/components/sections/pricing/PricingCTASection";

export const metadata: Metadata = {
  title: "Pricing | 適正価格によるハイエンドなWeb開発",
  description: "SocialBoostの料金体系。無駄な中間マージンを省き、AI等のモダンな技術をフル活用することで、高品質なWebサイトやシステム開発を相場以下の「適正価格」でご提供します。",
  openGraph: {
    title: "Pricing | 適正価格によるハイエンドなWeb開発",
    description: "多重下請けや非効率なプロセスを排除。事業成長に直結する価値のみに投資できる料金体系。",
    url: "https://socialboost.jp/pricing",
  },
};

export default function PricingPage() {
  return (
    <PageLayout>
      {/* 1. Hero: 透明性と哲学の宣言 */}
      <PricingHeroSection />

      {/* 2. Philosophy: 構造への課題提示 */}
      <PricingPhilosophySection />

      {/* 3. Ranges: 標準的な料金感 */}
      <PricingRangesSection />

      {/* 4. Cases (最重要): より具体的なイメージを持てるケース別料金表 */}
      <PricingCasesSection />

      {/* 5. Why Cheap: 安さの構造的根拠（AI活用、一貫管理、モダン構成等） */}
      <PricingWhyCheapSection />

      {/* 6. Anxiety Relief: 発注前の心理的ハードル解消 */}
      <PricingAnxietySection />

      {/* 7. CTA: 相談・別ページへの誘導 */}
      <PricingCTASection />
      
    </PageLayout>
  );
}

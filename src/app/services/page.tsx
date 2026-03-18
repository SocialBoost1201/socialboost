import { generateServicesPageJsonLd } from "@/lib/jsonld";
import { PageLayout } from "@/components/layout/PageLayout";

// Sections
import { ServiceHeroSection } from "@/components/sections/services/ServiceHeroSection";
import { ServiceProblemsSection } from "@/components/sections/services/ServiceProblemsSection";
import { ServiceValueSection } from "@/components/sections/services/ServiceValueSection";
import { ServiceRequirementsBreakdown } from "@/components/sections/services/ServiceRequirementsBreakdown";
import { ServiceListSection } from "@/components/sections/services/ServiceListSection";
import { ServiceSpeedComparison } from "@/components/sections/services/ServiceSpeedComparison";
import { WorksPreviewSection } from "@/components/sections/WorksPreviewSection";
import { ServiceCTASection } from "@/components/sections/services/ServiceCTASection";

export const metadata = {
  title: "Service | SocialBoost",
  description: "SocialBoostが提供するサービス一覧。Web戦略設計、UI/UXデザイン、システム開発からAI導入まで、事業成長に直結するハイエンドなデジタルソリューションを提供します。要件別の対応範囲やスピード、他社との比較もご確認いただけます。",
  openGraph: {
    title: "Service | ベンチャー・中堅企業向けWeb戦略・システム開発",
    description: "デジタル領域のあらゆる課題を、戦略から実装まで一気通貫で解決する総合ソリューション。",
    url: "https://socialboost.jp/services",
  },
};

export default function ServicesPage() {
  const jsonLd = generateServicesPageJsonLd();

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero: 何ができるか一瞬で分かる・強いタイポグラフィ・洗練 */}
      <ServiceHeroSection />

      {/* 2. 課題提示: 高い、遅い、分かりづらいなどのよくある悩み */}
      <ServiceProblemsSection />

      {/* 3. 解決価値: なぜSocialBoostなら変えられるのか */}
      <ServiceValueSection />

      {/* 4. サービス一覧: 全領域のカード表示 */}
      <ServiceListSection />

      {/* 5. 要件分解セクション（最重要）: 分解して比較する高品位UI */}
      <ServiceRequirementsBreakdown />

      {/* 6. スピード比較: 一般的な制作会社との圧倒的差 */}
      <ServiceSpeedComparison />

      {/* 7. 実績導線: 信頼と具体性 */}
      <WorksPreviewSection showMoreButton={true} />

      {/* 8. CTA: 営業臭を抑えた上品な導線 */}
      <ServiceCTASection />

    </PageLayout>
  );
}

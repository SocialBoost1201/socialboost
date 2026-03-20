import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ServiceOverviewSection } from "@/components/sections/ServiceOverviewSection";
import { WorksPreviewSection } from "@/components/sections/WorksPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingComparisonSection } from "@/components/sections/PricingComparisonSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { PricingGuideSection } from "@/components/sections/PricingGuideSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HomeFinalContactSection } from "@/components/sections/HomeFinalContactSection";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
  generateLocalBusinessJsonLd,
  generateFAQJsonLd,
  FAQ_DATA,
} from "@/lib/jsonld";

export default function Home() {
  return (
    <PageLayout showStickyCtaBar={false}>
      {/* Organization: 会社情報 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationJsonLd()) }}
      />
      {/* LocalBusiness: 地域SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessJsonLd()) }}
      />
      {/* WebSite: SearchAction込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteJsonLd()) }}
      />
      {/* FAQ: 全22件 - GEO対策 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_DATA)) }}
      />
      {/* 理解 */}
      <HeroSection />
      <ProblemSection />
      <VisionSection />
      <ServiceOverviewSection />

      {/* 信頼 */}
      <div id="works-preview">
        <WorksPreviewSection showLeadCta={false} />
      </div>
      <TrustedBySection />
      <TestimonialsSection />
      <ReasonsSection />

      {/* 納得 */}
      <PricingComparisonSection />
      <PricingGuideSection />
      <FlowSection />
      <FAQSection />
      <InsightsSection />

      {/* 行動 */}
      <HomeFinalContactSection />
    </PageLayout>
  );
}

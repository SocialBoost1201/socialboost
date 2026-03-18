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
import { MiniAppSection } from "@/components/sections/MiniAppSection";
import { CTASection } from "@/components/sections/CTASection";
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
    <PageLayout>
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
      <HeroSection />
      <TrustedBySection />
      <ProblemSection />
      <VisionSection />
      <ServiceOverviewSection />
      <WorksPreviewSection />
      <TestimonialsSection />
      <PricingComparisonSection />
      <ReasonsSection />
      <InsightsSection />
      <PricingGuideSection />
      <FlowSection />
      <FAQSection />
      <MiniAppSection />
      <CTASection />
    </PageLayout>
  );
}


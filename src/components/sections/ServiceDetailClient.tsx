"use client";

import { ServiceDetail } from "@/lib/services";
import { ServiceHeroSection } from "./service-detail/ServiceHeroSection";
import { ServiceTargetSection } from "./service-detail/ServiceTargetSection";
import { ServiceBeforeAfterSection } from "./service-detail/ServiceBeforeAfterSection";
import { ServiceValuesSection } from "./service-detail/ServiceValuesSection";
import { ServiceScopeSection } from "./service-detail/ServiceScopeSection";
import { ServiceRequirementsSection } from "./service-detail/ServiceRequirementsSection";
import { ServiceComparisonSection } from "./service-detail/ServiceComparisonSection";
import { ServicePricingSection } from "./service-detail/ServicePricingSection";
import { ServiceFlowSection } from "./service-detail/ServiceFlowSection";
import { ServiceFAQSection } from "./service-detail/ServiceFAQSection";
import { ServiceWorksSection } from "./service-detail/ServiceWorksSection";
import { ServiceCTASection } from "./services/ServiceCTASection";

export function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  return (
    <div className="bg-white overflow-hidden pb-0">
      <ServiceHeroSection service={service} />
      <ServiceTargetSection service={service} />
      <ServiceBeforeAfterSection service={service} />
      <ServiceValuesSection service={service} />
      <ServiceScopeSection service={service} />
      <ServiceRequirementsSection service={service} />
      <ServiceComparisonSection service={service} />
      <ServicePricingSection service={service} />
      <ServiceFlowSection service={service} />
      <ServiceWorksSection service={service} />
      <ServiceFAQSection service={service} />
      <ServiceCTASection />
    </div>
  );
}

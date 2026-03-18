import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceListClient } from "@/components/sections/ServiceListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス一覧",
  description: "Web戦略設計からシステム開発、アプリ、AI導入まで、事業成長を加速させるSocialBoostの提供サービス一覧です。",
  openGraph: {
    title: "サービス一覧 | SocialBoost",
    description: "Web戦略設計からシステム開発、アプリ、AI導入まで、事業成長を加速させるSocialBoostの提供サービス一覧です。",
    url: "https://socialboost.jp/services",
  },
  alternates: {
    canonical: "https://socialboost.jp/services",
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">Services</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">事業成長を加速させる提供サービス</p>
          </AnimatedSection>
        </Container>
      </div>

      <ServiceListClient />
    </PageLayout>
  );
}

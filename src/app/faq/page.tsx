import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ_DATA, generateBreadcrumbJsonLd, generateFAQJsonLd } from "@/lib/jsonld";
import { FAQClient } from "./FAQClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくあるご質問 (FAQ) | SocialBoost",
  description: "Web戦略設計・サイト制作・システム開発・AI導入に関して、SocialBoostに寄せられるよくあるご質問にお答えします。ご不明な点がございましたらお気軽にご相談ください。",
  openGraph: {
    title: "よくあるご質問 (FAQ) | SocialBoost",
    description: "Web戦略設計・サイト制作・システム開発・AI導入に関して、SocialBoostに寄せられるよくあるご質問にお答えします。",
    url: "https://socialboost.jp/faq",
  },
  alternates: {
    canonical: "https://socialboost.jp/faq",
  },
};

export default function FAQPage() {
  const breadcrumbItems = [{ name: "よくあるご質問 (FAQ)", url: "/faq" }];

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbJsonLd(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(FAQ_DATA)),
        }}
      />

      <Breadcrumb items={[{ name: "よくあるご質問" }]} />

      {/* Hero Section */}
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">
              FAQ
            </h1>
            <p className="mt-4 text-center text-text-secondary font-medium text-lg">
              よくあるご質問
            </p>
            <p className="mt-8 max-w-2xl mx-auto text-center text-text-secondary leading-relaxed">
              ご相談・進め方、料金、サービス内容、システム開発やAI導入について、<br className="hidden sm:block" />
              過去にお客様から多く寄せられたご質問とその回答をまとめています。
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-20 md:py-32 bg-gray-50/30">
        <FAQClient faqs={FAQ_DATA} />
      </Container>
      
      <CTASection />
    </PageLayout>
  );
}

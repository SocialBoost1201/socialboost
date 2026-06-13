import { PageLayout } from "@/components/layout/PageLayout";
import { generateContactPageJsonLd } from "@/lib/jsonld";
import { ContactClient } from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | SocialBoost",
  description: "Webサイト制作・システム開発・アプリ開発・AI導入のご相談はSocialBoostへ。要件が固まっていなくても、事業の課題や目標から最適なロードマップをご提案します。無料相談を受け付けています。",
  openGraph: {
    title: "お問い合わせ | SocialBoost",
    description: "Webサイト制作・システム開発・アプリ開発・AI導入のご相談はSocialBoostへ。無料相談を受け付けています。",
    url: "https://socialboost.jp/contact",
  },
  alternates: {
    canonical: "https://socialboost.jp/contact",
  },
};

export default function ContactPage() {
  const contactJsonLd = generateContactPageJsonLd();

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </PageLayout>
  );
}

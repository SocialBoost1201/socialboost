import { PageLayout } from "@/components/layout/PageLayout";
import { getServiceBySlug, SERVICES_DATA } from "@/lib/services";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/jsonld";
import { ServiceDetailClient } from "@/components/sections/ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };
  
  return {
    title: `${service.title} | サービス`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | サービス | SocialBoost`,
      description: service.shortDesc,
      url: `https://socialboost.jp/services/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://socialboost.jp/services/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceJsonLd(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "サービス", url: "/services" },
              { name: service.title },
            ])
          ),
        }}
      />
      <Breadcrumb items={[{ name: "サービス", href: "/services" }, { name: service.title }]} />
      
      <ServiceDetailClient service={service} />

      <CTASection />
    </PageLayout>
  );
}

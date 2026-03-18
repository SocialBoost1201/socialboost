import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, CardContent, CardTitle, CardDescription, CardCategoryBadge, CardImage } from "@/components/ui/Card";
import { WORKS_DATA } from "@/lib/works";
import Link from "next/link";
import { Metadata } from "next";
import { client, MicroCMSWork } from "@/lib/microcms";

// microCMSのデータ更新を60秒ごとに反映（ISR）
export const revalidate = 60;

export const metadata: Metadata = {
  title: "制作・開発実績",
  description: "Webサイト制作からシステム開発、AI導入まで、これまでの制作・開発実績をご紹介します。",
  openGraph: {
    title: "制作・開発実績 | SocialBoost",
    description: "Webサイト制作からシステム開発、AI導入まで、これまでの制作・開発実績をご紹介します。",
    url: "https://socialboost.jp/works",
  },
  alternates: {
    canonical: "https://socialboost.jp/works",
  },
};

// microCMSからデータを取得し、失敗した場合は静的データにフォールバック
async function getWorks() {
  try {
    const data = await client.get<{ contents: MicroCMSWork[] }>({
      endpoint: "works",
      queries: { limit: 100, orders: "-publishedAt" },
    });
    if (data.contents.length > 0) return { source: "cms" as const, works: data.contents };
  } catch (e) {
    console.warn("microCMS取得失敗、静的データを使用します:", e);
  }
  return { source: "static" as const, works: WORKS_DATA };
}

export default async function WorksPage() {
  const { source, works } = await getWorks();

  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "制作実績" }]} />

      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">Works</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">これまでの制作・開発実績</p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {source === "cms"
            ? (works as MicroCMSWork[]).map((work, i) => {
                const href = work.site_url || `/works/${work.id}`;
                const isExternal = !!work.site_url;
                return (
                  <AnimatedSection key={work.id} delay={i * 0.1}>
                    <a
                      href={href}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-2xl"
                    >
                      <Card className="h-full">
                        <CardImage src={work.thumbnail.url} alt={work.title} />
                        <CardContent>
                          <div className="mb-4 flex flex-wrap gap-2">
                            <CardCategoryBadge>{work.category}</CardCategoryBadge>
                            {work.industry && (
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                                {work.industry}
                              </span>
                            )}
                          </div>
                          <CardTitle>{work.title}</CardTitle>
                          <CardDescription>{work.summary}</CardDescription>
                        </CardContent>
                      </Card>
                    </a>
                  </AnimatedSection>
                );
              })
            : (works as typeof WORKS_DATA).map((work, i) => (
                <AnimatedSection key={work.slug} delay={i * 0.1}>
                  <Link href={`/works/${work.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-2xl">
                    <Card className="h-full">
                      <CardImage src={work.thumbnail} alt={work.title} />
                      <CardContent>
                        <div className="mb-4 flex flex-wrap gap-2">
                          <CardCategoryBadge>{work.category}</CardCategoryBadge>
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                            {work.industry}
                          </span>
                        </div>
                        <CardTitle>{work.title}</CardTitle>
                        <CardDescription>{work.shortDesc}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))
          }
        </div>
      </Container>

      <CTASection />
    </PageLayout>
  );
}

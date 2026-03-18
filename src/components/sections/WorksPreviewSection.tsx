import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardTitle, CardCategoryBadge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { client, MicroCMSWork } from "@/lib/microcms";
import { WORKS_DATA } from "@/lib/works";

async function getPreviewWorks() {
  try {
    const data = await client.get<{ contents: MicroCMSWork[] }>({
      endpoint: "works",
      queries: { limit: 3, orders: "-publishedAt" },
    });
    if (data.contents.length > 0) return { source: "cms" as const, works: data.contents };
  } catch (e) {
    console.warn("microCMS取得失敗、静的データを使用します:", e);
  }
  return { source: "static" as const, works: WORKS_DATA.slice(0, 3) };
}

export async function WorksPreviewSection() {
  const { source, works } = await getPreviewWorks();

  return (
    <section className="bg-background-alt py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <AnimatedSection>
            <SectionTitle en="WORKS" ja="制作・開発実績" align="left" className="mb-0" />
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-6 md:mt-0 hidden md:block">
            <Link href="/works" className="group inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors">
              実績一覧を見る
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                      className="block h-full group"
                    >
                      <Card className="h-full overflow-hidden">
                        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
                          <Image
                            src={work.thumbnail.url}
                            alt={work.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <CardContent>
                          <div className="mb-3">
                            <CardCategoryBadge>{work.category}</CardCategoryBadge>
                          </div>
                          <CardTitle className="text-lg">{work.title}</CardTitle>
                        </CardContent>
                      </Card>
                    </a>
                  </AnimatedSection>
                );
              })
            : (works as typeof WORKS_DATA).map((work, i) => (
                <AnimatedSection key={work.slug} delay={i * 0.1}>
                  <Link href={`/works/${work.slug}`} className="block h-full group">
                    <Card className="h-full overflow-hidden">
                      <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
                        <Image
                          src={work.thumbnail}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <CardContent>
                        <div className="mb-3">
                          <CardCategoryBadge>{work.category}</CardCategoryBadge>
                        </div>
                        <CardTitle className="text-lg">{work.title}</CardTitle>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-12 text-center md:hidden">
          <Link href="/works">
            <Button variant="outline" className="w-full sm:w-auto">
              実績一覧を見る
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}

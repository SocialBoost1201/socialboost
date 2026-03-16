import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardTitle, CardCategoryBadge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const previewWorks = [
  {
    slug: "corporate-site-renewal",
    title: "株式会社◯◯様 コーポレートサイト刷新",
    category: "Webサイト制作",
    image: "/images/works-corporate-site.png",
  },
  {
    slug: "booking-system",
    title: "◯◯業界向け 予約管理システム開発",
    category: "Webシステム開発",
    image: "/images/works-booking-system.png",
  },
  {
    slug: "ai-knowledge-base",
    title: "AI社内ナレッジ検索システム導入",
    category: "AI導入支援",
    image: "/images/works-ai-system.png",
  },
];

export function WorksPreviewSection() {
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
          {previewWorks.map((work, i) => (
            <AnimatedSection key={work.slug} delay={i * 0.1}>
              <Link href={`/works/${work.slug}`} className="block h-full group">
                <Card className="h-full overflow-hidden">
                  {/* Image area */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={work.image}
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

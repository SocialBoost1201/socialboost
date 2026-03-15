import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardTitle, CardCategoryBadge, CardImage } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder images from Unsplash representing business/tech environments
const previewWorks = [
  { 
    slug: "corporate-site-renewal", 
    title: "株式会社〇〇様 コーポレートサイト刷新", 
    category: "Webサイト制作", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    slug: "booking-system", 
    title: "〇〇業界向け 予約管理システム開発", 
    category: "Webシステム開発", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    slug: "ai-knowledge-base", 
    title: "AI社内ナレッジ検索システム導入", 
    category: "AI導入支援", 
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" 
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
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewWorks.map((work, i) => (
            <AnimatedSection key={work.slug} delay={i * 0.1}>
              <Link href={`/works/${work.slug}`} className="block h-full">
                <Card className="h-full">
                  <CardImage src={work.image} alt={work.title} />
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

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileText } from "lucide-react";

const RECENT_INSIGHTS = [
  {
    id: "1",
    title: "BtoB企業が『選ばれる』コーポレートサイトを作るための3つの絶対条件",
    category: "Web戦略",
    date: "2024.11.20",
    href: "/blog/btob-corporate-site-strategy",
    type: "blog",
  },
  {
    id: "2",
    title: "【ホワイトペーパー】SaaS導入の失敗を防ぐ！自社システム化判断チェックシート",
    category: "システム開発",
    date: "2024.11.15",
    href: "/documents/saas-vs-scratch",
    type: "document",
  },
  {
    id: "3",
    title: "生成AIを社内業務に組み込むための第一歩（RAG構築入門）",
    category: "AI活用",
    date: "2024.11.05",
    href: "/blog/rag-ai-introduction",
    type: "blog",
  },
];

export function InsightsSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="flex flex-col gap-4">
            <SectionTitle
              ja="専門的インサイト・お知らせ"
              en="INSIGHTS & NEWS"
              align="left"
              className="mb-0"
            />
            <p className="text-text-secondary">
              事業成長に役立つ最新のノウハウやナレッジを発信しています。
            </p>
          </div>
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent transition-colors">
              記事一覧を見る
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_INSIGHTS.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <Link href={item.href} className="group block h-full">
                <div className="h-full border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-brand-primary/20 transition-all bg-white flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold">
                      {item.type === "document" ? <FileText className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-400 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary leading-relaxed mb-6 group-hover:text-brand-primary transition-colors flex-1">
                    {item.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center text-sm font-bold text-gray-400 group-hover:text-brand-primary transition-colors">
                    詳細を読む
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

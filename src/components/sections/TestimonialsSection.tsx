import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { getReviews } from "@/lib/microcms";

type Testimonial = {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  title: string;
  content: string;
  rating: number;
  tags: string[];
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "田中 義久 氏",
    companyName: "TechEdge Solutions 株式会社",
    role: "代表取締役 CEO",
    title: "「単なる制作」ではなく「事業成長」のパートナー",
    content: "上流工程からの伴走により、リード獲得数がリニューアル前の250%を実現。技術力はもちろん、ビジネス視点での提案が SocialBoost さんの最大の強みだと感じています。",
    rating: 5,
    tags: ["リード獲得2.5倍", "戦略設計", "UI/UX刷新"],
  },
  {
    id: "2",
    clientName: "佐藤 真一 氏",
    companyName: "ログ・ロジスティクス株式会社",
    role: "DX推進本部 本部長",
    title: "月間60時間の業務削減と、現場のストレス解消",
    content: "複雑な業務フローを完璧に理解し、現場が迷わないUIに落とし込んでくれました。導入後、入力ミスはほぼゼロになり、人的コストの大幅な削減に成功しています。",
    rating: 5,
    tags: ["工数60h/月削減", "業務システム", "ミスゼロ化"],
  },
  {
    id: "3",
    clientName: "鈴木 健平 氏",
    companyName: "Medix Research 日本支社",
    role: "マーケティングディレクター",
    title: "専門性の高い領域でも、的確な解決策を提示",
    content: "医療ドメインという特殊な分野でしたが、セキュリティ要件から特有のユーザー行動まで深く洞察。期待を上回るスピードと品質で、事業の信頼性を底上げしてくれました。",
    rating: 5,
    tags: ["専門ドメイン対応", "高セキュリティ", "信頼性向上"],
  },
];

export async function TestimonialsSection() {
  const res = await getReviews({ limit: 3 });
  const cmsReviews = res.contents;

  const displayItems = cmsReviews.length > 0 
    ? cmsReviews.map(r => ({
        id: r.id,
        clientName: r.client_name,
        companyName: r.company_name || "ご利用企業様",
        role: r.project_name || "プロジェクト担当",
        title: "お客様からの評価",
        content: r.comment,
        rating: r.rating || 5,
        tags: ["導入実績"],
      }))
    : TESTIMONIALS;

  return (
    <section className="py-24 bg-background-alt overflow-hidden relative">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="mb-20 text-center">
          <SectionTitle
            ja="お客様の声"
            en="Voice of Partners"
            align="center"
          />
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium">
            SocialBoostを戦略的パートナーとしてお選びいただいた企業様の声をご紹介します。<br />
            多くの企業様が、持続的な成長と工数削減を実現されています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayItems.map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 0.15} threshold={0.1} className="h-full">
              <div className="group h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-premium border border-slate-100 flex flex-col hover-lift">
                {/* Header: Rating & Quote */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-0.5 text-brand-primary">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-brand-light opacity-30 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Title & Tags */}
                <h3 className="text-xl font-extrabold text-brand-navy mb-4 leading-snug group-hover:text-brand-primary transition-colors">
                  {testimonial.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-brand-light text-brand-primary text-[10px] font-bold rounded-lg uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Main Content */}
                <blockquote className="text-text-secondary leading-relaxed mb-10 flex-1 font-medium text-[0.95rem]">
                  「{testimonial.content}」
                </blockquote>

                {/* Footer: Client Info */}
                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm mb-0.5">
                      {testimonial.companyName}
                    </div>
                    <div className="text-[11px] text-text-secondary font-medium">
                      {testimonial.role} <span className="mx-1 text-slate-300">/</span> {testimonial.clientName}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

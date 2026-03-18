import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Star, Quote } from "lucide-react";
import { getReviews } from "@/lib/microcms";

type Testimonial = {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  content: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "田中 様",
    companyName: "株式会社〇〇テクノロジー",
    role: "代表取締役",
    content: "単に綺麗なサイトを作るだけでなく、「事業の課題は何か」「誰に何を届けるべきか」といった上流工程から伴走してくれました。結果的にリード獲得数がリニューアル前の2.5倍になり、社内のモチベーションも大幅に向上しています。",
    rating: 5,
  },
  {
    id: "2",
    clientName: "鈴木 様",
    companyName: "〇〇サービス株式会社",
    role: "マーケティング部長",
    content: "予約管理の手間が膨大で限界を迎えていたところ、独自フローに合わせたシステム開発をご提案いただきました。複雑な要件でしたが、現場のスタッフが迷わず使えるUIに仕上げていただき、月間60時間以上の業務削減に成功しました。",
    rating: 5,
  },
  {
    id: "3",
    clientName: "佐藤 様",
    companyName: "〇〇コンサルティング",
    role: "DX推進担当",
    content: "社内マニュアル用のAIチャットボット導入でご相談しました。機密情報を扱うためセキュリティ面での不安が大きかったのですが、セキュアな環境構築からプロンプトの調整まで一貫して支援いただき、いまや社内ヘルプデスクの心強い相棒です。",
    rating: 5,
  },
];

export async function TestimonialsSection() {
  // microCMSから最新のお客様の声（レビュー）を取得
  const res = await getReviews({ limit: 3 });
  const cmsReviews = res.contents;

  // microCMSデータが存在する場合はそちらを使用し、無い場合はモックデータを表示するフェイルセーフ
  const displayItems = cmsReviews.length > 0 
    ? cmsReviews.map(r => ({
        id: r.id,
        clientName: r.client_name,
        companyName: r.company_name || "ご利用企業様",
        role: r.project_name || "プロジェクト担当",
        content: r.comment,
        rating: r.rating || 5,
      }))
    : TESTIMONIALS;

  return (
    <section className="py-24 md:py-20 bg-background-alt overflow-hidden">
      <Container>
        <div className="mb-16 md:mb-24 text-center">
          <SectionTitle
            ja="お客様の声"
            en="TESTIMONIALS"
            align="center"
            className="mb-4"
          />
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            SocialBoostをパートナーとしてお選びいただいた企業様の声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-24">
          {displayItems.map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 0.1} className="h-full">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full relative">
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 text-brand-light opacity-50">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary leading-relaxed mb-8 flex-1 text-lg">
                  「{testimonial.content}」
                </p>

                {/* Client Info */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="font-bold text-text-primary mb-1">
                    {testimonial.companyName}
                  </div>
                  <div className="text-sm text-text-secondary flex items-center gap-2">
                    <span className="font-medium">{testimonial.role}</span>
                    <span>/</span>
                    <span>{testimonial.clientName}</span>
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

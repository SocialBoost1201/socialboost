import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "料金案内",
  description: "Web戦略設計、LP・サイト制作、システム開発、AI導入などの参考料金や、価格の考え方についてご案内します。",
  openGraph: {
    title: "料金案内 | SocialBoost",
    description: "Web戦略設計、LP・サイト制作、システム開発、AI導入などの参考料金や、価格の考え方についてご案内します。",
    url: "https://socialboost.jp/pricing",
  },
  alternates: {
    canonical: "https://socialboost.jp/pricing",
  },
};

const pricingCategories = [
  {
    title: "Webサイト・LP制作",
    items: [
      { name: "LP（ランディングページ）制作", price: "30万円 〜", desc: "構成案作成、デザイン、コーディング" },
      { name: "コーポレートサイト制作（〜10P）", price: "50万円 〜", desc: "要件定義、デザイン、コーディング、WP等導入" },
      { name: "中・大規模サイト刷新", price: "150万円 〜", desc: "戦略設計、数十ページ規模の刷新、システム連携" }
    ]
  },
  {
    title: "Webシステム・アプリ開発",
    items: [
      { name: "MVP開発（最小限のプロダクト）", price: "100万円 〜", desc: "コア機能のみの最速・低コスト仮説検証開発" },
      { name: "業務システム・予約管理開発", price: "300万円 〜", desc: "フルスクラッチでの要件定義・独自システム構築" },
      { name: "スマートフォンアプリ開発", price: "300万円 〜", desc: "React Native等を用いたクロスプラットフォーム対応" }
    ]
  },
  {
    title: "AI導入・その他",
    items: [
      { name: "社内ナレッジ検索（RAG）システム", price: "100万円 〜", desc: "独自データを読み込ませた社内用AIチャット" },
      { name: "戦略設計・コンサルティング", price: "月額 20万円 〜", desc: "事業戦略に基づく継続的なWebインハウス化・改善支援" }
    ]
  }
];

const priceFactors = [
  "制作するページ数や、必要な画面数",
  "システムの複雑さや、外部機能（決済・他社API）との連携有無",
  "デザインの完全オリジナル性やイラスト・動画制作の有無",
  "要件定義やプロジェクト管理に必要となる工数"
];

export default function PricingPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "料金案内" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">Pricing</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">料金の考え方と参考価格</p>
          </AnimatedSection>
        </Container>
      </div>

      {/* Philosophy */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-text-primary mb-6">価値に見合った適正価格と、<br className="md:hidden" />柔軟なアプローチ</h2>
              <p className="text-lg text-text-secondary leading-relaxed font-medium">
                SocialBoostでは、「とりあえず動く」だけのシステムや、「きれいなだけ」の初期費用を抑えたサイト制作は基本お受けしておりません。<br className="hidden md:block" />
                事業のフェーズやご予算に合わせ、スモールスタート（MVP開発）から大規模システムまで、投資対効果を最大化するご提案を行います。
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {pricingCategories.map((category, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100 h-full transition-shadow hover:shadow-md">
                  <h3 className="text-xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary inline-block pb-2">
                    {category.title}
                  </h3>
                  <div className="space-y-8">
                    {category.items.map((item, j) => (
                      <div key={j} className="border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                        <h4 className="font-bold text-text-primary text-base mb-2">{item.name}</h4>
                        <div className="text-brand-primary font-bold text-xl md:text-2xl mb-3 tracking-tight">{item.price}</div>
                        <p className="text-sm text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Factors & Small Start */}
      <section className="bg-white py-20 md:py-32 border-t border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-text-primary mb-8 border-b-2 border-brand-primary pb-4 inline-block">お見積りが変動する主な要素</h2>
              <p className="text-text-secondary leading-relaxed font-medium mb-8">
                ご提示している金額はあくまで参考価格となります。以下のような要素によって実際の費用はお安くなることも、上振れすることもございます。
              </p>
              <ul className="space-y-4">
                {priceFactors.map((factor, i) => (
                  <li key={i} className="flex items-start bg-background-alt p-5 rounded-xl">
                    <CheckCircle2 className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-brand-primary/60" />
                    <span className="text-base text-text-primary font-medium">{factor}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-brand-navy text-white p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center shadow-lg shadow-brand-navy/10 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary blur-3xl rounded-full opacity-20 pointer-events-none" />
                <h2 className="text-2xl font-bold mb-6 text-brand-light relative z-10">小さく始めて、大きく育てる</h2>
                <p className="text-gray-200 leading-relaxed font-medium mb-6 relative z-10">
                  システム開発やアプリ開発では、最初からすべての機能を盛り込むと初期費用が膨らみます。私たちは「仮説検証に最低限必要な機能（MVP）」に絞り込み、まずは市場の反応を見る「スモールスタート」を推奨しています。
                </p>
                <p className="text-gray-200 leading-relaxed font-medium relative z-10">
                  ご予算に制約がある場合でも、どのように要件を削れば実現可能か、ロードマップを一緒に考えますのでお気軽にご相談ください。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Target, Layers, TrendingUp, Users, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "選ばれる理由 | SocialBoost",
  description: "制作会社ではなく事業成長パートナーとして、SocialBoostがお客様に選ばれる6つの理由をご紹介します。事業課題の深い理解から、一気通貫の開発、スモールスタートまで。",
  openGraph: {
    title: "選ばれる理由 | SocialBoost",
    description: "制作会社ではなく事業成長パートナーとして、SocialBoostがお客様に選ばれる6つの理由をご紹介します。",
    url: "https://socialboost.jp/why",
  },
  alternates: {
    canonical: "https://socialboost.jp/why",
  },
};

const reasons = [
  {
    title: "事業課題の真の理解から入る",
    description:
      "「言われたものを作る」だけの制作会社ではありません。ビジネスモデルやターゲット、現状のボトルネックを深く理解し、本来解決すべき課題を特定した上で最適なソリューションをご提案します。事業の目的を共有し、同じ方向を向いて進むパートナーとしてコミットします。",
    icon: Target,
    image: "/images/reason-01.png",
  },
  {
    title: "制作・システム・AIまで一気通貫",
    description:
      "Webサイトの立ち上げから、業務を効率化するシステム開発、最新のAI技術の導入まで。複数の専門業者を跨ぐことなく、一括で相談・進行が可能なため、一貫性とスピードが両立します。ベンダーコントロールの手間を省き、コア業務に集中いただけます。",
    icon: Layers,
    image: "/images/reason-02.png",
  },
  {
    title: "スモールスタートからの段階的拡張",
    description:
      "最初から多額の投資を求めることはしません。まずは必要最小限（MVP）で小さく始めて効果を検証し、事業の成長に合わせて柔軟にシステムやサイトを拡張していく、リスクの低いロードマップを描きます。",
    icon: TrendingUp,
    image: "/images/reason-03.png",
  },
  {
    title: "ユーザー視点に立ったUI/UX設計",
    description:
      "どれだけ高度な機能を持つシステムや美しいWebサイトでも、ユーザーに使われなければ意味がありません。徹底したユーザーリサーチに基づき、直感的で迷わない、行動を促すUI/UX設計をご提供します。",
    icon: Users,
    image: "/images/works-corporate-site.png", // 代替画像
  },
  {
    title: "高いセキュリティと品質担保",
    description:
      "大切な顧客情報や事業データを守るため、初期段階からセキュリティを考慮したアーキテクチャ設計を行います。また、リリース前の厳格なテストやコードレビューにより、安定して稼働する高品質なシステムをお届けします。",
    icon: ShieldCheck,
    image: "/images/hero-visual.png", // 代替画像
  },
  {
    title: "迅速な対応とアジャイルな進行",
    description:
      "変化の激しい現代のビジネス環境において、スピードは最大の武器です。定期的なミーティングと透明性の高いコミュニケーションで、状況の変化に柔軟に対応し、迅速に価値を提供し続けるアジャイルな進行を心がけています。",
    icon: Zap,
    image: "/images/works-ai-system.png", // 代替画像
  },
];

export default function WhyPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([{ name: "選ばれる理由", url: "/why" }])
          ),
        }}
      />
      <Breadcrumb items={[{ name: "選ばれる理由" }]} />

      {/* Hero Section */}
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">
              Why Us
            </h1>
            <p className="mt-4 text-center text-text-secondary font-medium text-lg">
              選ばれる理由
            </p>
            <p className="mt-8 max-w-2xl mx-auto text-center text-text-secondary leading-relaxed">
              私たちはただの「制作会社」ではありません。<br className="hidden sm:block" />
              お客様の事業成長に本気でコミットする、デジタル戦略のパートナーです。<br className="hidden sm:block" />
              SocialBoostが選ばれ続ける、6つの理由をご紹介します。
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-24 md:py-32">
        <div className="space-y-20 md:space-y-32">
          {reasons.map((reason, i) => (
            <AnimatedSection key={i}>
              <div
                className={`flex flex-col gap-8 md:gap-16 lg:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-5/12 shrink-0">
                  <div className="relative aspect-square w-full max-w-[420px] mx-auto rounded-3xl overflow-hidden shadow-xl shadow-brand-navy/5 bg-white ring-1 ring-gray-100/50">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 420px"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-7/12 border-t-4 border-brand-primary pt-8">
                  <div className="mb-6 flex">
                    <span className="text-6xl font-black text-gray-100 tracking-tighter leading-none block -mt-2 -ml-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand-primary">
                    <reason.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-6 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                    {reason.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
      
      <CTASection />
    </PageLayout>
  );
}

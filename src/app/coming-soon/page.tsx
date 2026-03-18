import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "準備中",
  description: "こちらのページは現在準備中です。",
};

// 共通で利用するプレースホルダーページ（詳細ページやカテゴリページ用）
export default function ComingSoonPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "準備中" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center">Coming Soon</h1>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-24 md:py-32">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-sm ring-1 ring-gray-100">
            <h2 className="text-2xl font-bold text-text-primary mb-4">このページは現在準備中です</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              各実績の詳細や、お役立ち資料のダウンロード、ブログの個別記事などは現在準備を進めています。<br/>
              公開まで今しばらくお待ちください。
            </p>
            <a href="/" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-brand-secondary hover:shadow-lg hover:-translate-y-0.5">
              トップページへ戻る
            </a>
          </div>
        </AnimatedSection>
      </Container>
      
      <CTASection />
    </PageLayout>
  );
}

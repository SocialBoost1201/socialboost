import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "会社概要 | SocialBoost",
  description: "SocialBoost（ソーシャルブースト）の会社概要ページです。",
};

const COMPANY_INFO = [
  { label: "会社名 / 屋号", value: "SocialBoost（ソーシャルブースト）" },
  { label: "代表", value: "眞如 匠馬" },
  { label: "事業内容", value: "Web戦略設計・コンサルティング\nコーポレートサイト・採用サイト・LP制作\nWebシステム・業務アプリ開発\nAI導入・プロンプトエンジニアリング支援" },
  { label: "連絡先", value: "TEL: 070-9175-3590\nEmail: info@socialboost.jp" },
  { label: "主要取引先", value: "（準備中）" },
];

export default function CompanyPage() {
  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,119,242,0.15)_0%,transparent_60%)]" />
        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">会社概要</h1>
            <p className="text-brand-light/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              最新のテクノロジーと緻密な戦略設計で、お客様の事業成長を加速させるデジタルパートナー。
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Company Profile Table */}
      <section className="py-24 md:py-32 bg-background-light">
        <Container>
          <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {COMPANY_INFO.map((info, idx) => (
                    <tr key={info.label} className={idx !== COMPANY_INFO.length - 1 ? "border-b border-gray-100" : ""}>
                      <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 md:w-1/4 text-sm font-bold text-text-primary align-top">
                        {info.label}
                      </th>
                      <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary whitespace-pre-wrap leading-relaxed font-medium">
                        {info.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}

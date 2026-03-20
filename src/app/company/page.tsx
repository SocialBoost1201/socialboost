import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "会社概要 | SocialBoost",
  description: "事業を加速させるデジタルパートナー、SocialBoost（ソーシャルブースト）の会社概要・ビジョンをご紹介します。",
};

const COMPANY_INFO = [
  { label: "会社名 / 屋号", value: "SocialBoost（ソーシャルブースト）" },
  { label: "代表", value: "眞如 匠馬" },
  { label: "事業内容", value: "Web戦略設計・コンサルティング\nコーポレートサイト・採用サイト・LP制作\nWebシステム・業務アプリ開発\nAI導入・プロンプトエンジニアリング支援" },
  { label: "連絡先", value: "TEL: 070-9175-3590\nEmail: info@socialboost.jp" },
  { label: "所在地", value: "〒244-0003\n神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F" },
];

export default function CompanyPage() {
  return (
    <PageLayout>
      {/* Page Hero */}
      <section
        className="bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle_at_top_right,rgba(24,119,242,0.2)_0%,transparent_58%), radial-gradient(circle_at_bottom_left,rgba(24,119,242,0.08)_0%,transparent_52%)",
        }}
      >
        <Container className="text-center">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">会社概要</h1>
            <p className="text-brand-light/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              最新のテクノロジーと緻密な戦略設計で、お客様の事業成長を加速させるデジタルパートナー。
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Vision / Message */}
      <section className="py-24 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-10 text-center">
                「作るだけ」のデジタル化を終わらせる。
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed md:text-lg">
                <p>
                  現在、多くの企業がWebサイトの構築やシステムの導入を進めていますが、その大半が「作って終わり」「導入して終わり」になってしまっているのが実情です。
                </p>
                <p>
                  表面的なデザインが美しいだけのWebサイトや、現場の業務フローから浮いてしまう高機能なシステムは、企業の本来の目的である「売上アップ」や「業務効率化」には繋がりません。
                </p>
                <p>
                  SocialBoostは、クライアントのビジネスモデルとターゲットを深く理解し、事業課題の解決から逆算したWeb戦略・システム開発をご提供します。「言われた仕様をそのまま作る」下請け業者ではなく、共に事業をスケールさせる戦略パートナーとして、貴社のデジタルシフトを強力に後押しいたします。
                </p>
              </div>
              <div className="mt-12 text-right text-text-primary font-bold">
                <p>代表　眞如 匠馬</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Company Profile Table */}
      <section className="py-24 md:py-20 bg-background-light">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">企業情報</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-16">
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

            {/* Access Map */}
            <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">アクセス</h2>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.945899478496!2d139.52445857508602!3d35.396739747754316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185add2ffc6e59%3A0xe5a363a0bf028fd3!2z44CSMjQ0LTAwMDMg56We5aWI5bed55yM5qiq5rWc5biC5oi45aGa5Yy65oi45aGa55S677yU77yR77yX77yQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}

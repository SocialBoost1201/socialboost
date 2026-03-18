import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "SocialBoostが提供するサービスに関する利用規約ページです。",
  openGraph: {
    title: "利用規約 | SocialBoost",
    description: "SocialBoostが提供するサービスに関する利用規約ページです。",
    url: "https://socialboost.jp/legal/terms",
  },
  alternates: {
    canonical: "https://socialboost.jp/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "利用規約" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center">利用規約</h1>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <AnimatedSection className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm ring-1 ring-gray-100">
          <div className="prose prose-blue max-w-none text-text-secondary space-y-8">
            <p className="leading-relaxed">
              この利用規約（以下、「本規約」といいます。）は、SocialBoost（以下、「当方」といいます。）が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
            </p>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第1条（適用）</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本規約は、ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                <li>当方は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第2条（契約の成立）</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サービスの利用においては、ユーザーが当方の定める方法によって契約の申し込みを行い、当方がこれに対する承諾をした段階で、契約が成立するものとします。</li>
                <li>当方は、ユーザーに以下の事由があると判断した場合、申し込みを承諾しないことがあり、その理由については一切の開示義務を負わないものとします。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申し込みである場合</li>
                    <li>その他、当方が利用適当でないと判断した場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第3条（知的財産権）</h2>
              <p className="leading-relaxed">
                本サービスによって提供されるコンテンツや制作物、ソースコード等の著作権その他の知的財産権は、別段の定めがある場合を除き、当方または正当な権利者に帰属します。ユーザーは、これらを無断で複製、転載、改変等することはできません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第4条（禁止事項）</h2>
              <p className="leading-relaxed pb-2">
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当方、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当方のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第5条（免責事項）</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>当方は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>当方は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。</li>
              </ol>
            </section>
            
            <section className="pt-8 border-t border-gray-100">
              <p className="text-sm text-text-secondary">
                制定日：2026年3月18日
              </p>
            </section>
          </div>
        </AnimatedSection>
      </Container>
    </PageLayout>
  );
}

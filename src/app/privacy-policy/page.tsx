import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "SocialBoostのプライバシーポリシー（個人情報保護方針）に関するページです。",
  openGraph: {
    title: "プライバシーポリシー | SocialBoost",
    description: "SocialBoostのプライバシーポリシー（個人情報保護方針）に関するページです。",
    url: "https://socialboost.jp/privacy-policy",
  },
  alternates: {
    canonical: "https://socialboost.jp/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "プライバシーポリシー" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center">プライバシーポリシー</h1>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <AnimatedSection className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm ring-1 ring-gray-100">
          <div className="prose prose-blue max-w-none text-text-secondary space-y-8">
            <p className="leading-relaxed">
              SocialBoost（以下、「当方」）は、当方が提供するサービス（以下、「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
            </p>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第1条（個人情報）</h2>
              <p className="leading-relaxed">
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第2条（個人情報の収集方法）</h2>
              <p className="leading-relaxed">
                当方は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当方の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第3条（個人情報を収集・利用する目的）</h2>
              <p className="leading-relaxed">
                当方が個人情報を収集・利用する目的は、以下のとおりです。
              </p>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>当方サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当方が提供する他のサービスの案内のメールを送付するため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第4条（利用目的の変更）</h2>
              <p className="leading-relaxed">
                当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。<br />
                利用目的の変更を行った場合には、変更後の目的について、当方所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第5条（個人情報の第三者提供）</h2>
              <p className="leading-relaxed">
                当方は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第6条（プライバシーポリシーの変更）</h2>
              <p className="leading-relaxed">
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。<br />
                当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>
            
            <section className="pt-8 border-t border-gray-100">
              <p className="text-sm text-text-secondary">
                制定日：2026年3月15日
              </p>
            </section>
          </div>
        </AnimatedSection>
      </Container>
    </PageLayout>
  );
}

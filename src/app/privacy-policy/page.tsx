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
              SocialBoost（以下、「当方」）は、提供するコンサルティング、Webサイト制作、システム開発、AI導入支援および付随するすべてのサービス（以下、「本サービス」）における、顧客およびウェブサイト訪問者（以下、「ユーザー」）の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
            </p>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第1条（個人情報）</h2>
              <p className="leading-relaxed">
                「個人情報」とは、個人情報の保護に関する法律（個人情報保護法）にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先、メールアドレス、会社名、役職、その他の記述等により特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第2条（個人情報の取得方法）</h2>
              <p className="leading-relaxed mb-4">当方は、以下の場合に個人情報を取得する場合があります。</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>本サービスに関するお問い合わせや見積もりのご依頼をいただいた場合</li>
                <li>本サービスのお申込み、ご契約手続きをしていただいた場合</li>
                <li>ホワイトペーパー・事例集等の各種資料をダウンロードいただいた場合</li>
                <li>当方が主催または共催するセミナー・イベント等にお申込みいただいた場合</li>
                <li>本ウェブサイトの閲覧に伴い、Cookie等の技術を使用して自動的にデータが取得される場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第3条（個人情報の利用目的）</h2>
              <p className="leading-relaxed mb-4">当方が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サービスに関するご提案、お見積もり、契約締結、およびプロジェクト進行上のご連絡のため</li>
                <li>ユーザーからのお問い合わせに対する調査・返答のため</li>
                <li>本サービスの開発、保守、改善、不具合対応のため</li>
                <li>当方が提供するサービス、新機能、セミナー、キャンペーン等のご案内のため（メールマガジンの送付を含みます）</li>
                <li>本サービスのご利用料金の請求および決済処理のため</li>
                <li>各種統計データの作成、マーケティングリサーチ、およびサービスの品質向上のため</li>
                <li>本規約や法令に違反したユーザーに対する対応、または不正・不当な目的での利用を防止するため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第4条（Cookieおよびアクセス解析ツール）</h2>
              <p className="leading-relaxed">
                本ウェブサイトでは、利用状況の把握や広告配信の最適化のために、Cookie（クッキー）および類似技術を使用しています。また、Googleアナリティクス等のアクセス解析ツールを利用してユーザーのトラフィックデータを匿名で収集しています。ユーザーは、ブラウザの設定を変更することによりCookieの機能を無効にすることができますが、その結果、一部のサービス機能が利用できなくなる場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第5条（個人情報の第三者提供）</h2>
              <p className="leading-relaxed mb-4">当方は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供することはありません。</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                <li>その他、個人情報保護法その他の法令で認められる場合</li>
              </ol>
              <p className="leading-relaxed mt-4">
                ただし、利用目的の達成に必要な範囲内において、外部委託先（決済代行会社、クラウドサーバー運営企業等）に個人情報を提供する場合は、この限りではありません。その際、当方は当該委託先に対し、適切な安全管理措置を講じるよう監督いたします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第6条（個人情報の開示・訂正・利用停止等）</h2>
              <p className="leading-relaxed mb-4">
                当方は、ユーザー本人から個人情報の開示、内容の訂正・追加・削除、利用の停止・消去等のご請求があった場合には、ご本人であることを確認の上、遅滞なく対応いたします。ただし、関係法令に基づき当方がこれらの義務を負わない場合は適用の対象外となります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第7条（プライバシーポリシーの変更）</h2>
              <p className="leading-relaxed">
                当方は、法令の改正や事業上の必要性等に応じ、本ポリシーを随時変更することができるものとします。変更後のプライバシーポリシーは、当方が別途定める場合を除き、本ウェブサイト上に掲載した時点からその効力を生じるものとします。定期的に本ページをご確認いただきますようお願いいたします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第8条（お問い合わせ窓口）</h2>
              <p className="leading-relaxed">
                本ポリシーに関するお問い合わせ、または個人情報の取扱いに関するご相談は、以下の窓口までお願いいたします。
              </p>
              <div className="bg-gray-50 p-6 rounded-xl mt-4 border border-gray-100">
                <p className="font-bold text-text-primary mb-2">SocialBoost（ソーシャルブースト）</p>
                <p>所在地：〒244-0003 神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F</p>
                <p>代表者：眞如 匠馬</p>
                <p>E-mail：info@socialboost.jp</p>
              </div>
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

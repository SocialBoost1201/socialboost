import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "SocialBoostが提供するサービスの利用規約です。",
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
              この利用規約（以下、「本規約」といいます。）は、SocialBoost（以下、「当方」といいます。）が本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </p>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第1条（適用）</h2>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>本規約は、ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                <li>当方は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
                <li>本規約の規定が前項の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第2条（禁止事項）</h2>
              <p className="leading-relaxed mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当方、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当方のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当方のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当方、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                <li>その他、当方が不適切と判断する行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第3条（本サービスの提供の停止等）</h2>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>
                  当方は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当方が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </li>
                <li>当方は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第4条（利用制限および登録抹消）</h2>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>
                  当方は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>本規約のいずれかの条項に違反した場合</li>
                    <li>登録事項に虚偽の事実があることが判明した場合</li>
                    <li>料金等の支払債務の不履行があった場合</li>
                    <li>当方からの連絡に対し、一定期間返答がない場合</li>
                    <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
                    <li>その他、当方が本サービスの利用を適当でないと判断した場合</li>
                  </ul>
                </li>
                <li>当方は、本条に基づき当方が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第5条（免責事項）</h2>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>当方は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>当方は、本サービスに起因してユーザーに生じたあらゆる損害について、当方の故意又は重過失による場合を除き、一切の責任を負いません。</li>
                <li>前項ただし書に定める場合であっても、当方は、当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当方またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。</li>
                <li>当方は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第6条（サービス内容の変更等）</h2>
              <p className="leading-relaxed">
                当方は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第7条（利用規約の変更）</h2>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>当方は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>本規約の変更がユーザーの一般の利益に適合するとき。</li>
                    <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</li>
                  </ul>
                </li>
                <li>当方はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-primary mb-4 border-l-4 border-brand-primary pl-4">第8条（準拠法・裁判管轄）</h2>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には、当方の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
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

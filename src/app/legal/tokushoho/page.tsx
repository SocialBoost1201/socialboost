import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "SocialBoostの特定商取引法に基づく表記です。",
};

export default function TokushohoPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "特定商取引法に基づく表記" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center">特定商取引法に基づく表記</h1>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    屋号 / サービス名
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    SocialBoost（ソーシャルブースト）
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    代表者
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    眞如 匠馬
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    所在地
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    〒244-0003<br />
                    神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    電話番号
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    070-9175-3590<br />
                    <span className="text-xs text-gray-400">※営業電話はお断りしております。お問い合わせフォームよりご連絡ください。</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    メールアドレス
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    info@socialboost.jp
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    販売価格
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    各サービス・個別お見積りごとに提示いたします。
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    商品代金以外の必要料金
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    ・消費税（10%）<br />
                    ・銀行振込手数料<br />
                    ・サーバー、ドメイン等、外部サービス利用における実費
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    お支払い方法
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    銀行振込（前払い・着手金、および納品後払い等、契約書にて別途定めます）
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    引渡し時期
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    機能や要件により大きく異なるため、各案件の契約（業務委託契約書）にて定めた納期に従って引渡しを行います。
                  </td>
                </tr>
                <tr>
                  <th className="py-6 px-6 md:px-8 bg-gray-50/50 w-1/3 text-sm font-bold text-text-primary align-top">
                    返品・キャンセルについて
                  </th>
                  <td className="py-6 px-6 md:px-8 text-sm md:text-base text-text-secondary">
                    情報提供サービスおよび役務提供（システム開発・デザイン等の無形商材）の性質上、契約締結後の返品や返金は原則としてお受けできません。契約内容に従い、瑕疵担保責任（契約不適合責任）の範囲内で修正・補修にて対応いたします。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </Container>
    </PageLayout>
  );
}

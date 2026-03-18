import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "SocialBoostの特定商取引法に基づく表記に関するページです。",
  openGraph: {
    title: "特定商取引法に基づく表記 | SocialBoost",
    description: "SocialBoostの特定商取引法に基づく表記に関するページです。",
    url: "https://socialboost.jp/legal/tokushoho",
  },
  alternates: {
    canonical: "https://socialboost.jp/legal/tokushoho",
  },
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
        <AnimatedSection className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm ring-1 ring-gray-100">
          <div className="prose prose-blue max-w-none text-text-secondary">
            <dl className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">事業者名</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">SocialBoost</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">代表者名</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">眞如 匠馬</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">所在地</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">
                  〒244-0003<br />
                  神奈川県横浜市戸塚区戸塚町4170<br />
                  高橋ビル1F
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">電話番号</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">
                  070-9175-3590<br />
                  <span className="text-sm">※お問い合わせにつきましては、行き違い等を防ぐため、原則としてお問い合わせフォームまたはメールにてお願いしております。</span>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">メールアドレス</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">info@socialboost.jp</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">販売価格（役務の対価）</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">
                  各サービス・お見積りごとに個別に設定いたします。<br />
                  詳細はヒアリング後、お見積書にてご提示いたします。
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">商品代金以外の必要料金</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">
                  ・銀行振込の場合：振込手数料<br />
                  ・サーバー、ドメイン等のインフラ利用料（お客様にて直接ご契約いただく場合を除く）
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">お支払方法</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">銀行振込</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">お支払時期</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">
                  原則として、ご契約時に着手金（50%）、納品月の月末締めで残金（50%）のご請求となります。<br />
                  （プロジェクト規模・性質により個別に定める場合がございます）
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-100 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">役務の提供時期</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">ご契約後、お見積書および契約書にて定めたスケジュールに基づき提供・納品いたします。</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-4">
                <dt className="font-bold text-text-primary md:mt-1">キャンセル・返金について</dt>
                <dd className="md:col-span-2 text-text-secondary leading-relaxed">
                  提供する役務（システム開発・Web制作等のデータ制作）という性質上、契約締結後のお客様都合によるキャンセルについては、原則として返金には応じられません。<br />
                  また、作業着手後の解約につきましては、それまでに発生した実働分の費用をご請求させていただきます。
                </dd>
              </div>
            </dl>
          </div>
        </AnimatedSection>
      </Container>
    </PageLayout>
  );
}

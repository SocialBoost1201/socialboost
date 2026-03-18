"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const CASES = [
  {
    theme: "スタートアップ向け",
    title: "リード獲得特化のLP制作",
    tagline: "短納期で検証サイクルを回すための軽量・高品質モデル",
    price: "約 30",
    unit: "万円",
    period: "約 2週間",
    includes: [
      "ワイヤーフレーム・UIデザイン",
      "Next.js等を用いたフロントエンド実装",
      "軽量なアニメーション実装",
      "基本的なSEO・表示速度最適化",
      "問い合わせフォーム設置"
    ]
  },
  {
    theme: "中規模企業向け",
    title: "コーポレートサイト刷新",
    tagline: "企業の「顔」として信頼性と先進性を示すフルリニューアル",
    price: "約 80",
    unit: "万円",
    period: "約 1.5ヶ月",
    includes: [
      "競合調査とWeb戦略設計",
      "ブランドトンマナの再構築",
      "全5〜10ページ前後の構築",
      "ヘッドレスCMS（MicroCMS等）の導入",
      "お知らせ・採用情報の更新機能"
    ],
    highlight: true,
  },
  {
    theme: "DX推進・新規事業",
    title: "予約・顧客管理SaaS開発",
    tagline: "既存のSaaSでは要件が満たせない独自の業務システム",
    price: "約 250",
    unit: "万円〜",
    period: "約 2.5ヶ月",
    includes: [
      "要件定義・非機能要件の策定",
      "DB設計（Supabase等） / API設計",
      "堅牢な認証システムと権限管理",
      "ユーザー向け・管理者向け画面実装",
      "継続的なインフラ保守・エンハンス対応"
    ]
  },
  {
    theme: "業務効率化",
    title: "社内AIナレッジ＆チャット",
    tagline: "社内ドキュメントを学習し、自動応答するRAGシステム",
    price: "約 100",
    unit: "万円",
    period: "約 1ヶ月",
    includes: [
      "OpenAI API等を用いたLLMモデル選定",
      "既存マニュアルのベクトルDB化（RAG）",
      "チャットUIの実装とチューニング",
      "社内セキュリティポリシー対応",
      "導入後のプロンプト調整サポート"
    ]
  }
];

export function PricingCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white relative overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-200/10 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[2px] bg-brand-primary" />
            Case Studies
            <span className="w-8 h-[2px] bg-brand-primary" />
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] text-text-primary tracking-tight mb-8"
          >
            ケース別 お見積もり例
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium max-w-2xl mx-auto"
          >
            ご検討中のプロジェクトに近いケースを選択していただき、<br className="hidden md:block" />どのような内容が内包されているかをご確認ください。
          </motion.p>
        </div>

        {/* CSS Grid for elegant Bento-box style layout or symmetrical cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {CASES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group bg-white border ${item.highlight ? 'border-brand-primary ring-1 ring-brand-primary/20 shadow-[0_20px_60px_rgba(24,119,242,0.1)]' : 'border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-brand-primary/30'} rounded-[2.5rem] p-8 md:p-12 transition-all duration-500`}
            >
              {/* Highlight ribbon if applicable */}
              {item.highlight && (
                <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold tracking-widest px-6 py-2 uppercase rounded-bl-2xl">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-6 ${item.highlight ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-100 text-text-secondary'}`}>
                    {item.theme}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black text-text-primary mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-text-secondary">
                    {item.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-end gap-1 mb-10 pb-10 border-b border-gray-100">
                  <span className="text-4xl md:text-[3.5rem] font-black tracking-tighter text-text-primary leading-none group-hover:text-brand-primary transition-colors duration-300">
                    {item.price}
                  </span>
                  <span className="text-lg font-bold text-text-secondary mb-1">{item.unit}</span>
                  <span className="text-sm font-semibold text-gray-400 mb-1 ml-4 line-clamp-1 border-l pl-4 border-gray-200">期間目安: {item.period}</span>
                </div>

                {/* Include List */}
                <div className="mb-10 grow">
                  <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Included</p>
                  <ul className="space-y-4">
                    {item.includes.map((incl, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-text-primary font-medium text-sm md:text-base leading-snug">{incl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link 
                  href="/contact"
                  className={`flex items-center justify-between w-full p-4 rounded-xl border ${item.highlight ? 'bg-brand-primary text-white border-transparent hover:bg-brand-accent' : 'bg-gray-50 text-text-primary border-gray-100 hover:border-brand-primary/50 hover:bg-white'} font-bold transition-all duration-300 group/btn`}
                >
                  <span>このケースに似た相談をする</span>
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover/btn:translate-x-1`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

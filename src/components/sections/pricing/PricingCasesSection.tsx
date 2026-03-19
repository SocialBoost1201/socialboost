"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

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
    <section ref={containerRef} className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[800px] h-[800px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-8"
          >
            Estimation Cases
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-brand-navy tracking-tight mb-8"
          >
            ケース別 お見積もり例
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium max-w-2xl mx-auto"
          >
            プロジェクトの規模や目的に合わせた概算費用です。
            <br className="hidden md:block" />
            SocialBoostでは、無駄な工程を省いた「適正価格」での提供を徹底しています。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {CASES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className={cn(
                "relative overflow-hidden group bg-white border rounded-3xl md:rounded-4xl p-7 sm:p-10 md:p-14 transition-all duration-700",
                item.highlight 
                  ? "border-brand-primary/30 shadow-premium ring-1 ring-brand-primary/5" 
                  : "border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-primary/20"
              )}
            >
              {/* Highlight badge */}
              {item.highlight && (
                <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-black tracking-[0.2em] px-8 py-3 uppercase rounded-bl-3xl shadow-lg shadow-brand-primary/20">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-10">
                  <span className={cn(
                    "inline-flex items-center px-4 py-1.5 text-[10px] font-black tracking-widest rounded-full mb-8 uppercase border",
                    item.highlight ? "bg-brand-primary/5 border-brand-primary/20 text-brand-primary" : "bg-slate-50 border-slate-100 text-slate-400"
                  )}>
                    {item.theme}
                  </span>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-navy mb-4 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-base text-text-secondary font-medium leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Price & Period Display */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10 pb-10 border-b border-slate-100">
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Estimated Price</div>
                    <div className="flex items-baseline group-hover:text-brand-primary transition-colors duration-500">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-brand-navy group-hover:text-brand-primary transition-colors">{item.price}</span>
                      <span className="text-base font-black text-slate-400 ml-2">{item.unit}</span>
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-slate-100 sm:pl-6">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Est. Delivery</div>
                    <div className="text-xl md:text-2xl font-black text-brand-navy tracking-tight">{item.period}</div>
                  </div>
                </div>

                {/* Scope List */}
                <div className="mb-12 grow">
                  <div className="text-[10px] font-extrabold text-slate-300 tracking-widest uppercase mb-6">Service Scope</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                    {item.includes.map((incl, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1.5 w-4 h-4 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-brand-primary" strokeWidth={4} />
                        </div>
                        <span className="text-text-secondary font-bold text-sm md:text-base leading-snug">{incl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  variant={item.highlight ? "default" : "outline"}
                  size="xl"
                  className="w-full rounded-2xl h-16 text-lg font-black group/btn shadow-lg"
                >
                  <Link href="/contact" className="justify-between px-8">
                    <span>このプランで相談する</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

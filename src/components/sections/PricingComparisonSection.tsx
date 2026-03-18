"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, XCircle, Wallet, Clock, Star, Settings2, Sparkles } from "lucide-react";

type ServiceCategory = "web" | "lp" | "system" | "app" | "ai";

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: "web", label: "Web制作" },
  { id: "lp", label: "LP制作" },
  { id: "system", label: "システム開発" },
  { id: "app", label: "アプリ開発" },
  { id: "ai", label: "AI導入支援" },
];

const COMPARISON_DATA: Record<ServiceCategory, any> = {
  web: {
    items: [
      {
        icon: Wallet,
        title: "要件定義・戦略立案",
        competitor: { value: "約30万〜50万円", desc: "別途コンサル会社頼みで高額化" },
        us: { value: "実質0円〜", desc: "事業理解の深い代表が直接入り伝言ゲームを排除" },
      },
      {
        icon: Star,
        title: "デザイン・UI制作費",
        competitor: { value: "約50万〜80万円", desc: "外注デザイナー・中間マージン" },
        us: { value: "最適化された低コスト", desc: "モダンなUIシステムを内製活用し工数を大幅削減" },
      },
      {
        icon: Settings2,
        title: "CMS・DB構築費",
        competitor: { value: "約30万〜60万円", desc: "重厚長大な独自構築" },
        us: { value: "15万円〜", desc: "軽量で保守性の高いヘッドレスCMS等を即座に構築" },
      },
      {
        icon: Clock,
        title: "制作・公開スピード",
        competitor: { value: "約3〜4ヶ月", desc: "部署間の連携ロス・確認待ち" },
        us: { value: "最短約1.5ヶ月", desc: "企画から実装まで完全一気通貫の少数精鋭アジャイル体制" },
      },
    ],
  },
  lp: {
    items: [
      {
        icon: Wallet,
        title: "コピーライティング費",
        competitor: { value: "別途10万〜30万円", desc: "外部ライター手配等で追加請求" },
        us: { value: "基本制作費に内包", desc: "マーケティング起点で設計するためデザインと分離しない" },
      },
      {
        icon: Settings2,
        title: "LP制作・実装費",
        competitor: { value: "約30万〜60万円", desc: "重い画像ベースの実装" },
        us: { value: "15万〜30万円目安", desc: "コンポーネント実装で素早く・軽く・安く構築" },
      },
      {
        icon: Clock,
        title: "公開スピード",
        competitor: { value: "約1.5〜2ヶ月", desc: "制作会社側のリソース空き待ち" },
        us: { value: "最短2週間〜", desc: "レスポンシブ前提のモダンコーディング技術による超速実装" },
      },
      {
        icon: Star,
        title: "公開後の改善（LPO）",
        competitor: { value: "修正のたびに追加費用", desc: "テキスト変更だけでも数万円" },
        us: { value: "即座に変更可能なツール提供", desc: "ABテストや微修正を素早く回せる基盤を最初から用意" },
      },
    ],
  },
  system: {
    items: [
      {
        icon: Wallet,
        title: "要件定義・設計費",
        competitor: { value: "総予算の30%以上", desc: "誰も読まない数百枚の紙の仕様書" },
        us: { value: "モックアップベースで極小化", desc: "直接動くプロトタイプで要件を固めるため設計コストが激減" },
      },
      {
        icon: Settings2,
        title: "DB構築・バックエンド",
        competitor: { value: "数百万円〜", desc: "古い技術でのフルスクラッチ開発" },
        us: { value: "BaaS活用で劇的コストダウン", desc: "汎用機能を最新BaaSで代替しコア機能開発のみに投資" },
      },
      {
        icon: Clock,
        title: "全体開発期間",
        competitor: { value: "半年〜1年以上", desc: "要件が全部固まるまで作らない" },
        us: { value: "最短1.5ヶ月〜 (MVP)", desc: "最小限のプロダクトを最速で世に出し、声を聴きながら育てる" },
      },
      {
        icon: Star,
        title: "保守・インフラ監視",
        competitor: { value: "月額10万円〜", desc: "人手によるサーバー保守要員費" },
        us: { value: "月額数万円〜", desc: "サーバーレス基盤の活用で保守監視コストを極限まで低減" },
      },
    ],
  },
  app: {
    items: [
      {
        icon: Wallet,
        title: "基本開発費用",
        competitor: { value: "iOS/Androidの2重費用", desc: "別々に作るためコストが2倍" },
        us: { value: "費用を約1/2まで圧縮", desc: "クロスプラットフォーム技術で1つのコードで両OS対応" },
      },
      {
        icon: Star,
        title: "UI/UXデザイン",
        competitor: { value: "約100万円〜", desc: "OSごとの個別デザイン費" },
        us: { value: "共通のモダンUIを適用", desc: "Webの最新UI知見を横展開し、美しく使いやすいデザインへ" },
      },
      {
        icon: Settings2,
        title: "メンテ・改修スピード",
        competitor: { value: "両OSの更新で遅延・高コスト", desc: "片方ずつのアップデート対応" },
        us: { value: "1回の修正で両ストア即時反映", desc: "新機能追加やバグ修正も一元管理され開発スピードが2倍" },
      },
      {
        icon: Clock,
        title: "申請サポート",
        competitor: { value: "数十万のオプションまたは自社丸投げ", desc: "審査落ちリスクが高い" },
        us: { value: "申請・デプロイまでフルサポート", desc: "最新の審査ノウハウを共有しリジェクトリスクを最小化" },
      },
    ],
  },
  ai: {
    items: [
      {
        icon: Wallet,
        title: "コンサルティング内容",
        competitor: { value: "一般的なツールの導入支援", desc: "口出しや座学研修で終わる" },
        us: { value: "非効率業務の特定から実益まで", desc: "「どの作業をAIに任せれば最も費用対効果が高いか」を設計" },
      },
      {
        icon: Clock,
        title: "現場での活用教育",
        competitor: { value: "ネットで分かる座学・概要", desc: "実態に沿っていないため使われない" },
        us: { value: "実務直結の実践的テクニック指導", desc: "顧客の業務データに合わせた究極のプロンプト構築術を徹底指導" },
      },
      {
        icon: Settings2,
        title: "社内浸透・定着化",
        competitor: { value: "数回の研修で終了", desc: "現場に投げて放置" },
        us: { value: "業務フローへの確実な組み込み", desc: "自ら使いこなせるようになるまで運用フェーズも伴走サポート" },
      },
      {
        icon: Star,
        title: "将来のシステム構想",
        competitor: { value: "技術知見がなくシステムは専門外", desc: "高度な自動化は提案できない" },
        us: { value: "自社データ連携(RAG)等のシステム提案", desc: "より高度な要件には、セキュアな技術的システム開発までシームレスに実現" },
      },
    ],
  },
};

export function PricingComparisonSection() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("web");

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/4 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            ja="なぜ、圧倒的に合理的か"
            en="COMPETITIVE ADVANTAGE"
            align="center"
            className="mb-6"
          />
          <p className="text-text-secondary text-lg leading-relaxed">
            単なる「安さ」ではなく、無駄な管理費のカットやモダン技術の活用により、
            <br className="hidden md:block" />
            <strong className="text-brand-primary font-bold">「相場より安く・早く・高品質」</strong>
            な価値を生み出す根拠を領域別にご紹介します。
          </p>
        </div>

        {/* Tab Navigation */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/50 backdrop-blur-md rounded-2xl md:rounded-full border border-gray-200/50 shadow-sm max-w-4xl mx-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-3 text-sm md:text-base font-bold rounded-xl md:rounded-full transition-all duration-300 ${
                  activeTab === cat.id
                    ? "text-white shadow-md"
                    : "text-text-secondary hover:text-brand-primary hover:bg-gray-100"
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-linear-to-r from-brand-primary to-brand-accent rounded-xl md:rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Comparison Content */}
        <div className="max-w-5xl mx-auto">
          {/* Table Header (Desktop only) */}
          <div className="hidden md:grid grid-cols-12 gap-6 mb-6 px-6">
            <div className="col-span-3"></div>
            <div className="col-span-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-gray-200 text-gray-500 rounded-full text-sm font-bold tracking-wide">
                一般的な開発・制作会社
              </span>
            </div>
            <div className="col-span-5 text-center relative">
              {/* Highlight Glow for SocialBoost Column */}
              <div className="absolute inset-0 bg-linear-to-b from-brand-accent/20 to-transparent blur-2xl -z-10 rounded-t-3xl" />
              <span className="flex items-center justify-center px-4 py-1.5 bg-brand-primary text-white rounded-full text-sm font-bold tracking-wide shadow-lg shadow-brand-primary/30 max-w-[200px] mx-auto gap-2">
                <Sparkles className="w-4 h-4" />
                SocialBoost
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 md:space-y-6"
              >
                {COMPARISON_DATA[activeTab].items.map((item: any, idx: number) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-6 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:border-brand-primary/30 transition-colors"
                    >
                      {/* Metric Name */}
                      <div className="col-span-3 p-6 md:p-8 flex items-center gap-4 bg-gray-50/50 md:bg-transparent border-b md:border-b-0 border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-primary shrink-0 transition-transform group-hover:scale-110 duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-text-primary text-lg md:text-base leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* Mobile Header for Competitor */}
                      <div className="md:hidden px-6 pt-6 pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        一般的なシステム会社
                      </div>

                      {/* Competitor Column */}
                      <div className="col-span-4 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/30">
                        <div className="flex items-start gap-3 opacity-60">
                          <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-gray-500 mb-1 line-through decoration-gray-300">
                              {item.competitor.value}
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {item.competitor.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Header for SocialBoost */}
                      <div className="md:hidden px-6 pt-6 pb-2 text-xs font-bold text-brand-primary uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        SocialBoost
                      </div>

                      {/* SocialBoost Column */}
                      <div className="col-span-5 p-6 md:p-8 flex flex-col justify-center relative bg-linear-to-br from-white to-brand-light/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                          <div>
                            <div className="font-extrabold text-brand-primary text-lg md:text-xl mb-1.5">
                              {item.us.value}
                            </div>
                            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                              {item.us.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

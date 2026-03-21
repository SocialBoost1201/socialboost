"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, XCircle, Wallet, Clock, Star, Settings2, Sparkles, type LucideIcon } from "lucide-react";

type ServiceCategory = "web" | "lp" | "system" | "app" | "ai";
type ComparisonItem = {
  icon: LucideIcon;
  title: string;
  competitor: { value: string; desc: string };
  us: { value: string; desc: string };
};

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: "web", label: "Web制作" },
  { id: "lp", label: "LP制作" },
  { id: "system", label: "システム開発" },
  { id: "app", label: "アプリ開発" },
  { id: "ai", label: "AI導入支援" },
];

const COMPARISON_PERSPECTIVES = ["価格の妥当性", "対応範囲", "立ち上げ速度", "公開後の改善余地"];

const COMPARISON_DATA: Record<ServiceCategory, { items: ComparisonItem[] }> = {
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
    <section
      id="pricing"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fafc_18%,#f8fafc_100%)] pt-16 pb-20 md:pt-20 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgba(8,17,26,0.07),rgba(8,17,26,0)_78%)]" />
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/4 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
          <SectionTitle
            ja="価格の比較より、成果の比較。"
            en="PRICING COMPARISON"
            align="center"
            className="mb-5 md:mb-6 [&>h2]:text-[clamp(2rem,3.3vw,3.4rem)] [&>h2]:leading-[1.12] [&>h2]:tracking-[-0.02em]"
          />
          <p className="mx-auto max-w-3xl text-[clamp(0.98rem,1.35vw,1.08rem)] text-text-secondary leading-relaxed [text-wrap:balance] [word-break:auto-phrase] [overflow-wrap:break-word]">
            価格だけを比べると、判断を誤ることがあります。SocialBoostは
            <strong className="mx-1 text-brand-primary font-semibold">対応範囲・スピード・改善余地</strong>
            まで含め、総コストで納得できる設計を行います。
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:mt-6">
            {COMPARISON_PERSPECTIVES.map((perspective) => (
              <span
                key={perspective}
                className="rounded-full border border-gray-200 bg-white/90 px-3.5 py-1.5 text-[0.7rem] md:text-xs font-semibold text-text-secondary tracking-[0.03em]"
              >
                {perspective}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <AnimatedSection className="mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/50 backdrop-blur-md rounded-2xl md:rounded-full border border-gray-200/50 shadow-sm max-w-4xl mx-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative min-h-11 px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-xl md:rounded-full transition-all duration-300 ${
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
            <div className="col-span-3 text-center">
              <span className="inline-block px-4 py-1.5 bg-white text-gray-500 rounded-full text-sm font-bold tracking-wide border border-gray-200">
                比較軸
              </span>
            </div>
            <div className="col-span-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-gray-200 text-gray-500 rounded-full text-sm font-bold tracking-wide">
                他社・一般的な制作/開発会社
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
                {COMPARISON_DATA[activeTab].items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-6 rounded-[1.75rem] border border-gray-200/70 bg-white shadow-[0_12px_28px_rgba(8,17,26,0.06)] overflow-hidden group transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_18px_36px_rgba(8,17,26,0.1)] md:min-h-[12.25rem]"
                    >
                      {/* Metric Name */}
                      <div className="col-span-3 p-5 md:p-7 flex items-center gap-4 bg-gray-50/55 md:bg-transparent border-b md:border-b-0 border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-primary shrink-0 transition-transform group-hover:scale-110 duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="md:hidden mb-1 text-[0.68rem] font-semibold text-gray-500 tracking-[0.08em]">比較軸</div>
                          <h3 className="font-bold text-text-primary text-base md:text-[1.04rem] leading-snug [word-break:auto-phrase] [overflow-wrap:break-word]">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Mobile Header for Competitor */}
                      <div className="md:hidden px-6 pt-5 pb-2 text-[0.68rem] font-semibold text-gray-500 tracking-[0.08em]">
                        他社・一般的な制作/開発会社
                      </div>

                      {/* Competitor Column */}
                      <div className="col-span-4 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/35">
                        <div className="flex items-start gap-3.5">
                          <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="mb-1 font-semibold text-gray-700 text-[0.95rem] md:text-base leading-snug [word-break:auto-phrase] [overflow-wrap:break-word]">
                              {item.competitor.value}
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed [word-break:auto-phrase] [overflow-wrap:break-word]">
                              {item.competitor.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Header for SocialBoost */}
                      <div className="md:hidden px-6 pt-5 pb-2 text-[0.68rem] font-semibold text-brand-primary tracking-[0.08em] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        SocialBoost
                      </div>

                      {/* SocialBoost Column */}
                      <div className="col-span-5 p-6 md:p-8 flex flex-col justify-center relative bg-blue-50/55 border-t border-brand-primary/10 md:border-t-0">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-brand-primary text-[1rem] md:text-[1.12rem] leading-snug mb-1.5 [word-break:auto-phrase] [overflow-wrap:break-word]">
                              {item.us.value}
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed font-medium [word-break:auto-phrase] [overflow-wrap:break-word]">
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

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Check, X } from "lucide-react";

type BreakdownItem = {
  title: string;
  desc: string;
  competitor: {
    price: string;
    scope: string;
  };
  socialBoost: {
    price: string;
    scope: string;
  };
};

const BREAKDOWNS: BreakdownItem[] = [
  {
    title: "Web戦略・KPI設計",
    desc: "事業目標に基づくターゲット選定、カスタマージャーニー作成、KGI/KPI定義",
    competitor: { price: "30万〜100万円", scope: "別会社のコンサルタントに外注" },
    socialBoost: { price: "無料〜15万円", scope: "社内ディレクターが一貫して担当" },
  },
  {
    title: "UI / UX設計",
    desc: "ワイヤーフレーム段階でのユーザーテスト、導線設計、プロトタイピング",
    competitor: { price: "50万〜150万円", scope: "デザインとは別費用で発生" },
    socialBoost: { price: "デザイン費用に内包", scope: "実装を前提とした実用的な設計" },
  },
  {
    title: "SEO / GEO内部設計",
    desc: "サイト構造化、セマンティックタグ、JSON-LD設定、表示速度チューニング",
    competitor: { price: "20万〜50万円", scope: "基本的なタグ設置のみ" },
    socialBoost: { price: "標準実装（無料）", scope: "Core Web Vitals 90点以上保証" },
  },
  {
    title: "デザイン制作",
    desc: "ブランドガイドラインの策定、トンマナ設計、ビジュアルアセット制作",
    competitor: { price: "50万〜200万円", scope: "修正回数に厳しい制限あり" },
    socialBoost: { price: "30万〜100万円", scope: "納得いくまでアジャイルに調整" },
  },
  {
    title: "フロントエンド開発",
    desc: "Next.js / React 等を用いたモダンアーキテクチャでのコンポーネント実装",
    competitor: { price: "100万〜300万円", scope: "レガシーなjQueryや静的HTML" },
    socialBoost: { price: "50万〜150万円", scope: "ヘッドレスCMS前提のモダン環境" },
  },
  {
    title: "CMS / DB構築",
    desc: "WordPressやSupabase、MicroCMSなどのデータ基盤構築",
    competitor: { price: "80万〜200万円", scope: "要件定義からDB設計まで重厚" },
    socialBoost: { price: "20万〜80万円", scope: "BaaS活用により工数大幅カット" },
  },
  {
    title: "AIチャット / RAG導入",
    desc: "自社データに基づくAIチャットボットや社内ナレッジ検索の実装",
    competitor: { price: "200万〜500万円", scope: "大規模なPoCが必須" },
    socialBoost: { price: "50万〜150万円", scope: "セキュアな既存LLM APIの活用" },
  },
];

export function ServiceRequirementsBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-brand-navy relative overflow-hidden text-white">
      {/* Background Orbs to give it a premium feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      <Container className="relative z-10">
        <div className="text-center mb-24 lg:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-bold tracking-widest text-brand-light uppercase mb-6 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[2px] bg-brand-light" />
            Requirement Breakdown
            <span className="w-8 h-[2px] bg-brand-light" />
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] text-white tracking-tight"
          >
            必要な領域を、<br className="md:hidden" />分解して比較する
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            一般的な開発会社では「ブラックボックス」になりがちな要件ごとの価格感と対応範囲を、すべて透明化して可視化します。
          </motion.p>
        </div>

        {/* Breakdown Interface */}
        <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[900px]">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-6 mb-8 px-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
              <div className="col-span-4 flex items-end">Area / Description</div>
              <div className="col-span-4 flex justify-center items-end text-gray-500">一般的な制作会社・代理店</div>
              <div className="col-span-4 flex justify-center items-end text-brand-light">SocialBoost</div>
            </div>

            {/* List Rows */}
            <div className="space-y-4">
              {BREAKDOWNS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-12 gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 items-center hover:bg-white/10 transition-colors group"
                >
                  {/* Scope Info */}
                  <div className="col-span-4">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium pr-4">{item.desc}</p>
                  </div>

                  {/* Competitor */}
                  <div className="col-span-4 flex flex-col justify-center bg-black/20 rounded-xl p-5 border border-white/5 relative">
                    <div className="absolute top-4 right-4 text-gray-600">
                      <X className="w-5 h-5" />
                    </div>
                    <div className="text-sm text-gray-400 mb-1 font-medium">価格感</div>
                    <div className="text-xl font-bold text-gray-300 mb-4">{item.competitor.price}</div>
                    <div className="text-sm text-gray-400 mb-1 font-medium">対応範囲・制約</div>
                    <div className="text-sm text-gray-300 leading-relaxed">{item.competitor.scope}</div>
                  </div>

                  {/* SocialBoost */}
                  <div className="col-span-4 flex flex-col justify-center bg-brand-primary/20 rounded-xl p-5 border border-brand-primary/40 relative group-hover:bg-brand-primary/30 group-hover:border-brand-primary transition-colors shadow-[0_0_30px_rgba(24,119,242,0.1)]">
                    <div className="absolute top-4 right-4 text-brand-light">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="text-sm text-brand-light/80 mb-1 font-medium">価格感</div>
                    <div className="text-xl font-bold text-white mb-4 drop-shadow-md">{item.socialBoost.price}</div>
                    <div className="text-sm text-brand-light/80 mb-1 font-medium">対応範囲・強み</div>
                    <div className="text-sm text-white leading-relaxed font-semibold">{item.socialBoost.scope}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}

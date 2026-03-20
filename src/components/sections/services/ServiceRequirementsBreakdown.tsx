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
    <section ref={containerRef} className="py-24 md:py-48 bg-brand-navy relative overflow-hidden text-white">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(24,119,242,0.05)_0%,transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="section-badge mb-8 bg-white/5 border-white/10 text-white mx-auto"
          >
            Requirement Breakdown
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tighter"
          >
            ブラックボックスを、<br />
            <span className="text-brand-primary italic">透明</span>にする。
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="mt-10 text-xl text-white/50 max-w-2xl mx-auto font-bold leading-relaxed"
          >
            一般的な制作会社では曖昧になりがちな「要件別の価格と範囲」を、<br className="hidden md:block" />
            SocialBoostはすべて可視化し、根拠のある提案を行います。
          </motion.p>
        </div>

        {/* Breakdown List */}
        <div className="space-y-6 lg:space-y-8">
          {/* Header Legend (PC only) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 px-10 mb-6 text-xs font-black text-white/30 tracking-[0.4em] uppercase">
            <div className="col-span-4">Area & Description</div>
            <div className="col-span-4 text-center">Conventional Agency</div>
            <div className="col-span-4 text-center text-brand-primary">SocialBoost Value</div>
          </div>

          {BREAKDOWNS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as any }}
              className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-4xl p-6 md:p-10 transition-all duration-700 hover:bg-white/10 hover:border-brand-primary/30"
            >
              {/* Title - full width always */}
              <div className="mb-5">
                <h4 className="text-base md:text-2xl font-black text-white tracking-tight group-hover:text-brand-primary transition-colors">{item.title}</h4>
                <p className="hidden md:block text-sm text-white/40 leading-relaxed font-bold mt-2">{item.desc}</p>
              </div>

              {/* Comparison - always 2 columns side by side */}
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {/* Competitor */}
                <div className="bg-black/20 rounded-2xl p-4 md:p-7 border border-white/5 relative opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute top-3 right-3 md:top-6 md:right-6 text-white/10">
                    <X className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div className="text-xs md:text-xs font-black text-white/20 uppercase tracking-widest mb-1 md:mb-2">一般的な会社</div>
                  <div className="text-sm md:text-xl font-black text-white/80 mb-2 md:mb-4 tracking-tight leading-snug">{item.competitor.price}</div>
                  <div className="text-xs font-black text-white/20 uppercase tracking-widest mb-1 hidden md:block">内容</div>
                  <div className="text-xs text-white/40 leading-relaxed font-bold hidden md:block">{item.competitor.scope}</div>
                </div>

                {/* SocialBoost */}
                <div className="bg-brand-primary/10 rounded-2xl p-4 md:p-7 border border-brand-primary/30 relative shadow-2xl shadow-brand-primary/5 group-hover:bg-brand-primary/20 group-hover:border-brand-primary transition-all duration-700">
                  <div className="absolute top-3 right-3 md:top-6 md:right-6 text-brand-primary">
                    <Check className="w-4 h-4 md:w-6 md:h-6 shadow-glow" strokeWidth={3} />
                  </div>
                  <div className="text-xs md:text-xs font-black text-brand-primary/60 uppercase tracking-widest mb-1 md:mb-2">SocialBoost</div>
                  <div className="text-sm md:text-2xl font-black text-white mb-2 md:mb-4 tracking-tight leading-snug">{item.socialBoost.price}</div>
                  <div className="text-xs font-black text-brand-primary/60 uppercase tracking-widest mb-1 hidden md:block">強み</div>
                  <div className="text-xs text-white font-black leading-relaxed hidden md:block">{item.socialBoost.scope}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

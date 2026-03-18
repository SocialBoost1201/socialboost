"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calculator, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";

type StepKey = "service" | "scale" | "features" | "result";

const SERVICES = [
  { id: "lp", label: "LP制作", base: 200000, icon: "📄" },
  { id: "corporate", label: "コーポレートサイト", base: 600000, icon: "🏢" },
  { id: "system", label: "業務システム", base: 1800000, icon: "⚙️" },
  { id: "app", label: "アプリ開発", base: 2500000, icon: "📱" },
  { id: "ai", label: "AI導入支援", base: 800000, icon: "🤖" },
];

const SCALES: Record<string, { id: string; label: string; desc: string; mult: number }[]> = {
  lp: [
    { id: "simple", label: "シンプル", desc: "1スクロール・CTA重視", mult: 0.7 },
    { id: "standard", label: "スタンダード", desc: "3〜5セクション構成", mult: 1.0 },
    { id: "premium", label: "プレミアム", desc: "フルアニメーション・動画対応", mult: 1.8 },
  ],
  corporate: [
    { id: "small", label: "小規模", desc: "5ページ以下", mult: 0.7 },
    { id: "medium", label: "中規模", desc: "10〜15ページ", mult: 1.0 },
    { id: "large", label: "大規模", desc: "20ページ以上・CMS統合", mult: 1.7 },
  ],
  system: [
    { id: "mvp", label: "MVP", desc: "コア機能のみ", mult: 0.6 },
    { id: "standard", label: "スタンダード", desc: "一般的な業務フロー対応", mult: 1.0 },
    { id: "enterprise", label: "エンタープライズ", desc: "複雑な権限管理・大規模対応", mult: 2.0 },
  ],
  app: [
    { id: "mvp", label: "MVP", desc: "主要機能のみ", mult: 0.5 },
    { id: "standard", label: "スタンダード", desc: "iOS + Android対応", mult: 1.0 },
    { id: "enterprise", label: "エンタープライズ", desc: "高度な機能・バックエンド含む", mult: 2.0 },
  ],
  ai: [
    { id: "basic", label: "ベーシック", desc: "既存ツール連携・基本チューニング", mult: 0.6 },
    { id: "standard", label: "スタンダード", desc: "RAGシステム構築", mult: 1.0 },
    { id: "custom", label: "カスタム", desc: "独自モデル微調整（Fine-tuning）", mult: 2.2 },
  ],
};

const FEATURES = [
  { id: "cms", label: "CMS / 更新機能", add: 150000 },
  { id: "seo", label: "SEO基盤強化", add: 80000 },
  { id: "animation", label: "高度なアニメーション", add: 120000 },
  { id: "auth", label: "認証・会員システム", add: 200000 },
  { id: "multilang", label: "多言語対応", add: 130000 },
  { id: "maintenance", label: "運用・保守サポート", add: 80000 },
];

function formatPrice(price: number) {
  if (price >= 10000000) return `${(price / 10000000).toFixed(1)}千万円〜`;
  if (price >= 1000000) return `${(price / 10000).toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,")}万円〜`;
  return `${(price / 10000).toFixed(0)}万円〜`;
}

export function PricingSimulatorSection() {
  const [step, setStep] = useState<StepKey>("service");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedScale, setSelectedScale] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const serviceData = SERVICES.find((s) => s.id === selectedService);
  const scaleData = selectedService ? SCALES[selectedService]?.find((s) => s.id === selectedScale) : null;

  const basePrice = serviceData ? serviceData.base : 0;
  const scaledPrice = basePrice * (scaleData ? scaleData.mult : 1);
  const featuresAdd = FEATURES.filter((f) => selectedFeatures.includes(f.id)).reduce((sum, f) => sum + f.add, 0);
  const totalPrice = Math.round((scaledPrice + featuresAdd) / 10000) * 10000;

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const steps: { key: StepKey; label: string }[] = [
    { key: "service", label: "サービス" },
    { key: "scale", label: "規模・要件" },
    { key: "features", label: "オプション" },
    { key: "result", label: "概算結果" },
  ];

  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <section className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
      {/* BG Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-brand-light text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Calculator className="w-4 h-4" />
            Price Simulator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            概算料金シミュレーター
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-medium max-w-xl mx-auto text-base md:text-lg"
          >
            ご検討中のプロジェクトを選択して、費用感の目安をご確認ください。
            最終的なお見積もりは無料相談にて詳しくご提示いたします。
          </motion.p>
        </div>

        {/* Simulator Card */}
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-0 mb-8 md:mb-10">
            {steps.map((s, i) => (
              <div key={s.key} className="flex items-center">
                <button
                  onClick={() => {
                    if (i < stepIndex || (i === 1 && selectedService) || (i === 2 && selectedScale)) {
                      setStep(s.key);
                    }
                  }}
                  className={`flex flex-col items-center gap-1 transition-all ${i <= stepIndex ? 'opacity-100' : 'opacity-40'}`}
                >
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all ${i < stepIndex ? 'bg-brand-primary border-brand-primary text-white' : i === stepIndex ? 'bg-white border-white text-brand-navy' : 'bg-transparent border-white/30 text-white/50'}`}>
                    {i < stepIndex ? "✓" : i + 1}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold hidden sm:block text-white/70 whitespace-nowrap">{s.label}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-8 md:w-12 h-px mx-1 md:mx-2 ${i < stepIndex ? 'bg-brand-primary' : 'bg-white/20'} transition-all`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection */}
              {step === "service" && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="p-6 md:p-10"
                >
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2">どのサービスをお探しですか？</h3>
                  <p className="text-gray-400 text-sm mb-8">最も近いものを選択してください</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedService(s.id);
                          setSelectedScale(null);
                          setSelectedFeatures([]);
                          setStep("scale");
                        }}
                        className={`group text-left p-5 rounded-2xl border transition-all duration-300 ${selectedService === s.id ? 'bg-brand-primary/20 border-brand-primary shadow-[0_0_30px_rgba(24,119,242,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'}`}
                      >
                        <div className="text-2xl mb-3">{s.icon}</div>
                        <div className="text-white font-bold text-sm md:text-base leading-snug">{s.label}</div>
                        <div className="text-gray-400 text-xs mt-1">{formatPrice(s.base)} 〜</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Scale */}
              {step === "scale" && selectedService && (
                <motion.div
                  key="scale"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="p-6 md:p-10"
                >
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2">規模・要件はどの程度ですか？</h3>
                  <p className="text-gray-400 text-sm mb-8">プロジェクトの規模感を選択してください</p>
                  <div className="flex flex-col gap-3">
                    {(SCALES[selectedService] || []).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedScale(s.id);
                          setStep("features");
                        }}
                        className={`group text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${selectedScale === s.id ? 'bg-brand-primary/20 border-brand-primary' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'}`}
                      >
                        <div className="flex-1">
                          <div className="text-white font-bold text-base md:text-lg">{s.label}</div>
                          <div className="text-gray-400 text-sm mt-1">{s.desc}</div>
                        </div>
                        <div className="text-brand-light font-black text-sm md:text-base whitespace-nowrap">
                          {formatPrice(Math.round(serviceData!.base * s.mult))}
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep("service")} className="mt-6 text-gray-500 text-sm hover:text-white transition-colors">← 戻る</button>
                </motion.div>
              )}

              {/* Step 3: Features */}
              {step === "features" && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="p-6 md:p-10"
                >
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2">追加したいオプションは？</h3>
                  <p className="text-gray-400 text-sm mb-8">複数選択可。不要な場合はスキップできます</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FEATURES.map((f) => {
                      const isSelected = selectedFeatures.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          onClick={() => toggleFeature(f.id)}
                          className={`text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${isSelected ? 'bg-brand-primary/20 border-brand-primary' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                        >
                          <div className={`w-5 h-5 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${isSelected ? 'bg-brand-primary border-brand-primary' : 'border-gray-600'}`}>
                            {isSelected && <span className="text-white text-xs font-black">✓</span>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm md:text-base truncate">{f.label}</div>
                          </div>
                          <div className="text-gray-400 text-xs font-bold shrink-0">+{(f.add / 10000).toFixed(0)}万</div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button onClick={() => setStep("scale")} className="text-gray-500 text-sm hover:text-white transition-colors">← 戻る</button>
                    <Button
                      asChild
                      size="lg"
                      className="flex-1 shadow-lg shadow-brand-primary/30 justify-center"
                    >
                      <button onClick={() => setStep("result")}>
                        概算を見る <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Result */}
              {step === "result" && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 md:p-10"
                >
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-light text-sm font-bold mb-6">
                      <Calculator className="w-4 h-4" /> 概算見積もり
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
                      {formatPrice(totalPrice)}
                    </div>
                    <p className="text-gray-400 text-sm">
                      ※ あくまで目安です。詳細は無料相談でご確認ください
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{serviceData?.label}（{scaleData?.label}）</span>
                      <span className="text-white font-bold">{formatPrice(Math.round(scaledPrice))}</span>
                    </div>
                    {FEATURES.filter((f) => selectedFeatures.includes(f.id)).map((f) => (
                      <div key={f.id} className="flex justify-between text-sm">
                        <span className="text-gray-300">+ {f.label}</span>
                        <span className="text-white font-bold">+{(f.add / 10000).toFixed(0)}万円</span>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-white/10 flex justify-between font-black">
                      <span className="text-white">概算合計</span>
                      <span className="text-brand-light text-lg">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="flex-1 shadow-lg shadow-brand-primary/30 justify-center">
                      <Link href="/contact">
                        <MessageCircle className="mr-2 w-4 h-4" />
                        無料で詳しく相談する
                      </Link>
                    </Button>
                    <button
                      onClick={() => {
                        setStep("service");
                        setSelectedService(null);
                        setSelectedScale(null);
                        setSelectedFeatures([]);
                      }}
                      className="flex-1 py-3 px-6 rounded-lg border border-white/20 text-white/70 text-sm font-bold hover:border-white/40 hover:text-white transition-all"
                    >
                      やり直す
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-center text-gray-500 text-xs mt-6">
            ※ 表示される金額はあくまで概算です。最終的なお見積もりは要件定義後にご提示いたします。
          </p>
        </div>
      </Container>
    </section>
  );
}

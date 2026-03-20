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

import { cn } from "@/lib/utils";

function PriceDisplay({ price, className, size = "md" }: { price: number; className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const isTenMillion = price >= 10000000;
  const value = isTenMillion 
    ? (price / 10000000).toFixed(1) 
    : (price / 10000).toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  const unit = isTenMillion ? "千万円〜" : "万円〜";

  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-6xl",
  };

  return (
    <span className={cn("inline-flex items-baseline gap-0.5 font-sans", className)}>
      <span className={cn("font-black tracking-tighter transition-colors duration-300", sizeClasses[size])}>
        {value}
      </span>
      <span className={cn("font-bold text-text-secondary opacity-80", size === "xl" ? "text-xl" : "text-sm")}>
        {unit}
      </span>
    </span>
  );
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
    { key: "service", label: "SERVICE" },
    { key: "scale", label: "SCALE" },
    { key: "features", label: "OPTIONS" },
    { key: "result", label: "RESULT" },
  ];

  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <section className="py-32 md:py-48 bg-brand-navy relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[200px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-6"
          >
            Estimation Tool
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8"
          >
            概算シミュレーター
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium max-w-2xl mx-auto text-lg leading-relaxed"
          >
            プロジェクトの要件を選択するだけで、概算の費用感をご確認いただけます。
            <br className="hidden md:block" />
            より精緻なお見積もりは、無料相談にて承ります。
          </motion.p>
        </div>

        {/* ── Simulator Interface ── */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex justify-between mb-16 relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-white/10 z-0" />
            {steps.map((s, i) => (
              <div key={s.key} className="relative z-10 flex flex-col items-center gap-3">
                <button
                  onClick={() => {
                    if (i < stepIndex || (i === 1 && selectedService) || (i === 2 && selectedScale)) {
                      setStep(s.key);
                    }
                  }}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 border-2",
                    i < stepIndex ? "bg-brand-primary border-brand-primary text-white" :
                    i === stepIndex ? "bg-white border-white text-brand-navy shadow-[0_0_20px_rgba(255,255,255,0.3)]" :
                    "bg-brand-navy border-white/20 text-white/30"
                  )}
                >
                  {i < stepIndex ? "✓" : i + 1}
                </button>
                <span className={cn(
                  "text-xs font-black tracking-widest uppercase transition-colors duration-500",
                  i <= stepIndex ? "text-white" : "text-white/20"
                )}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Card Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-brand-primary/20 to-blue-500/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-white/3 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {step === "service" && (
                  <motion.div
                    key="service"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-8 md:p-16"
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-10 tracking-tight">プランを選択してください</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setSelectedService(s.id);
                            setSelectedScale(null);
                            setSelectedFeatures([]);
                            setStep("scale");
                          }}
                          className={cn(
                            "group text-left p-8 rounded-3xl border transition-all duration-500",
                            selectedService === s.id 
                              ? "bg-brand-primary border-brand-primary shadow-lg" 
                              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
                          )}
                        >
                          <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                          <div className={cn(
                            "font-black text-lg mb-2",
                            selectedService === s.id ? "text-white" : "text-white/90"
                          )}>{s.label}</div>
                          <PriceDisplay 
                            price={s.base} 
                            size="sm" 
                            className={selectedService === s.id ? "text-white/80" : "text-brand-light"} 
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === "scale" && selectedService && (
                  <motion.div
                    key="scale"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-8 md:p-16"
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-10 tracking-tight">規模・要件はどの程度ですか？</h3>
                    <div className="space-y-4">
                      {(SCALES[selectedService] || []).map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setSelectedScale(s.id);
                            setStep("features");
                          }}
                          className={cn(
                            "group w-full text-left p-8 rounded-3xl border transition-all duration-500 flex items-center justify-between",
                            selectedScale === s.id 
                              ? "bg-brand-primary border-brand-primary shadow-lg" 
                              : "bg-white/5 border-white/10 hover:bg-white/10"
                          )}
                        >
                          <div className={cn(
                            "flex-1",
                            selectedScale === s.id ? "text-white" : "text-white/80"
                          )}>
                            <div className="font-black text-xl mb-1">{s.label}</div>
                            <div className="text-sm opacity-60 font-medium">{s.desc}</div>
                          </div>
                          <div className="flex items-center gap-6">
                            <PriceDisplay 
                              price={Math.round(serviceData!.base * s.mult)} 
                              size="md" 
                              className={selectedScale === s.id ? "text-white" : "text-brand-light"} 
                            />
                            <ChevronRight className={cn(
                              "w-6 h-6 transition-transform group-hover:translate-x-1",
                              selectedScale === s.id ? "text-white" : "text-white/20"
                            )} />
                          </div>
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setStep("service")} 
                      className="mt-12 text-white/30 hover:text-white transition-colors flex items-center gap-2 font-bold text-sm"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" /> プラン選択に戻る
                    </button>
                  </motion.div>
                )}

                {step === "features" && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-8 md:p-16"
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-10 tracking-tight">追加オプション</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {FEATURES.map((f) => {
                        const isSelected = selectedFeatures.includes(f.id);
                        return (
                          <button
                            key={f.id}
                            onClick={() => toggleFeature(f.id)}
                            className={cn(
                              "text-left p-6 rounded-3xl border transition-all duration-500 flex items-center gap-4",
                              isSelected 
                                ? "bg-brand-primary border-brand-primary shadow-lg" 
                                : "bg-white/5 border-white/10 hover:bg-white/10"
                            )}
                          >
                            <div className={cn(
                              "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300",
                              isSelected ? "bg-white border-white" : "border-white/20"
                            )}>
                              {isSelected && <ArrowRight className="w-4 h-4 text-brand-primary" />}
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-white text-base">{f.label}</div>
                              <div className="text-xs text-white/50 font-medium mt-0.5">
                                +{(f.add / 10000).toFixed(0)}万円
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-16 flex items-center justify-between">
                      <button 
                        onClick={() => setStep("scale")} 
                        className="text-white/30 hover:text-white transition-colors flex items-center gap-2 font-bold text-sm"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" /> 要件選択に戻る
                      </button>
                      <Button
                        size="xl"
                        className="px-12 rounded-2xl shadow-2xl shadow-brand-primary/30"
                        onClick={() => setStep("result")}
                      >
                        概算結果を見る <ArrowRight className="ml-3 w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="p-8 md:p-20 text-center"
                  >
                    <div className="section-badge mb-10 bg-brand-primary/20 text-white border-brand-primary/30 mx-auto">
                      Estimated Cost
                    </div>
                    
                    <div className="mb-4 text-white/40 font-bold tracking-widest uppercase text-xs">概算合計金額</div>
                    <div className="mb-12">
                      <PriceDisplay price={totalPrice} size="xl" className="text-white scale-125 md:scale-150 transform transition-transform" />
                    </div>

                    {/* Breakdown List */}
                    <div className="max-w-md mx-auto bg-white/5 rounded-4xl border border-white/10 p-10 mb-16 space-y-6">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/50 font-bold">{serviceData?.label}（{scaleData?.label}）</span>
                        <PriceDisplay price={Math.round(scaledPrice)} size="sm" className="text-white" />
                      </div>
                      {FEATURES.filter((f) => selectedFeatures.includes(f.id)).map((f) => (
                        <div key={f.id} className="flex justify-between items-center text-sm">
                          <span className="text-white/50 font-bold">+ {f.label}</span>
                          <span className="text-white font-black font-inter">+{(f.add / 10000).toFixed(0)}万円</span>
                        </div>
                      ))}
                      <div className="pt-6 border-t border-white/10 flex justify-between items-baseline">
                        <span className="text-white font-black text-lg">TOTAL</span>
                        <PriceDisplay price={totalPrice} size="lg" className="text-brand-primary" />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                      <Button asChild size="xl" className="flex-1 rounded-2xl shadow-2xl shadow-brand-primary/30">
                        <Link href="/contact" className="gap-3">
                          <MessageCircle className="w-5 h-5" />
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
                        className="flex-1 h-16 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
                      >
                        シミュレーションをやり直す
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-white/20 text-xs font-bold tracking-widest mt-12 uppercase"
          >
            ※ The above prices are estimates and may vary based on specific requirements.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Send, Clock, Phone, Mail, Zap } from "lucide-react";
import React, { useState } from "react";
import { generateContactPageJsonLd } from "@/lib/jsonld";

// GA4 gtag グローバル型宣言
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    preferred_date: "",
    type: "",
    service: "",
    message: "",
  });

  const contactJsonLd = generateContactPageJsonLd();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("送信に失敗しました。");

      // GA4 コンバージョンイベント発火
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: formData.type || "other",
        });
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "予期せぬエラーが発生しました。時間をおいて再度お試しください。";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Breadcrumb items={[{ name: "お問い合わせ" }]} />
      
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl text-center uppercase">Contact</h1>
            <p className="mt-4 text-center text-text-secondary font-medium">無料相談・お問い合わせ</p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 lg:order-2">
            <AnimatedSection>
              <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-10 sticky top-32 shadow-xl shadow-brand-navy/10">
                <h2 className="text-2xl font-bold mb-6 text-brand-light">お気軽にご相談ください</h2>
                <p className="text-gray-300 leading-relaxed font-medium mb-10">
                  Webサイト制作、システム開発、AI導入など、まだ具体的な要件が固まっていなくても問題ありません。事業の課題や目標をお聞かせいただければ、私たちが最適なロードマップをご提案いたします。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-brand-light mr-4 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">返信までの時間</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">原則として1〜2営業日以内に、担当者よりご連絡させていただきます。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-brand-light mr-4 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">メールでのご相談</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">フォーム送信後、ご入力いただいたメールアドレス宛に自動返信メールが届きます。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-brand-light mr-4 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">オンラインミーティング</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">初回のご相談はZoom等のオンラインツールにて、30〜60分程度で実施いたします。</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <AnimatedSection delay={0.1}>
              {isSubmitted ? (
                <div className="bg-brand-light/30 border border-brand-light p-10 rounded-2xl text-center">
                  <div className="mx-auto w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 ml-1" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">お問い合わせを受け付けました</h2>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    ご入力いただいたメールアドレス宛に自動返信メールを送信いたしました。<br />
                    内容を確認次第、担当者より1〜2営業日以内にご連絡させていただきます。
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    続けてお問い合わせをする
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm ring-1 ring-gray-100">
                  <div className="space-y-8">
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-text-primary mb-2">
                        会社名・屋号
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border"
                        placeholder="株式会社SocialBoost"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-2">
                        お名前 <span className="ml-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border"
                        placeholder="山田 太郎"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2">
                        メールアドレス <span className="ml-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border"
                        placeholder="info@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-text-primary mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border"
                        placeholder="03-0000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferred_date" className="block text-sm font-bold text-text-primary mb-2">
                        希望日 <span className="ml-2 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">任意</span>
                      </label>
                      <input
                        type="date"
                        id="preferred_date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="type" className="block text-sm font-bold text-text-primary mb-2">
                        ご相談種別 <span className="ml-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                      </label>
                      <select
                        id="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border appearance-none"
                      >
                        <option value="">選択してください</option>
                        <option value="web-design">Webサイト・LP制作について</option>
                        <option value="system">Webシステム開発について</option>
                        <option value="app">アプリ開発について</option>
                        <option value="ai">AI導入支援について</option>
                        <option value="not_sure">何を依頼すべきかまだ整理されていない</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    {/* 希望サービス */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-text-primary mb-2">
                        希望サービス <span className="ml-2 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">任意</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border appearance-none"
                      >
                        <option value="">選択してください（任意）</option>
                        <option value="corporate">コーポレートサイト制作</option>
                        <option value="lp">ランディングページ（LP）制作</option>
                        <option value="ec">ECサイト構築</option>
                        <option value="system">業務システム・SaaS開発</option>
                        <option value="app">モバイルアプリ開発（iOS / Android）</option>
                        <option value="ai">AI・LLM導入支援</option>
                        <option value="strategy">Web戦略設計・コンサルティング</option>
                        <option value="maintenance">保守・運用・改善サポート</option>
                        <option value="other_service">その他・まだ決まっていない</option>
                      </select>
                      <p className="text-xs text-text-secondary mt-2">まだ決まっていない場合も、「その他」を選択いただければ詳しくお聞きします。</p>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-2">
                        ご相談内容 <span className="ml-2 text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                      </label>
                      {/* Prompt: より具体的な要望を促すメッセージ */}
                      <div className="flex items-start gap-3 mb-3 p-3 bg-brand-light/40 border border-brand-primary/15 rounded-xl">
                        <Zap className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-brand-primary font-semibold leading-relaxed">
                          <strong>具体的な要望があるほど、見積もり・実装が早くなります。</strong><br />
                          スケジュール・予算・現在の課題・参考サイトなど、分かる範囲でお知らせください。
                        </p>
                      </div>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-text-primary focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary outline-none transition-colors border resize-y"
                        placeholder={`（記入例）\n・現状の課題: 問い合わせが少ない、デザインが古い\n・ご希望: 採用強化のためにリニューアルしたい\n・予算感: 〇〇万円前後\n・希望公開時期: 〇月頃\n・参考サイト: https://example.com`}
                      ></textarea>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                        {error}
                      </div>
                    )}

                    <div className="pt-6 border-t border-gray-100 text-center">
                      <p className="text-sm text-text-secondary mb-6">
                        <a href="/privacy-policy" className="text-brand-primary hover:underline underline-offset-4 font-semibold" target="_blank">プライバシーポリシー</a>
                        に同意の上、送信してください。
                      </p>
                      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto h-14 px-12 text-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 group disabled:opacity-70 disabled:hover:translate-y-0">
                        {isSubmitting ? "送信中..." : "同意して送信する"}
                        {!isSubmitting && <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                      </Button>
                    </div>

                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}

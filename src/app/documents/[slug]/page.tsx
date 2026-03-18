"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { getDocumentData } from "@/lib/documents";

export default function DocumentDetailPage({ params }: { params: { slug: string } }) {
  const doc = getDocumentData(params.slug);
  if (!doc) return notFound();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      company: formData.get("company"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      documentTitle: doc.title,
      pdfUrl: doc.pdfUrl,
    };

    try {
      const res = await fetch("/api/documents/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました。時間をおいて再度お試しください。");
      }

      setIsSuccess(true);
      // CV計測（Google Analytics連動など）
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "document_download",
          event_label: doc.slug,
        });
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <Breadcrumb items={[{ name: "お役立ち資料", href: "/documents" }, { name: doc.title }]} />
      
      <div className="bg-background-alt py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* 左側：資料の紹介 */}
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-brand-primary">
                {doc.category}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl mb-6 leading-snug">
                {doc.title}
              </h1>
              
              <div className="relative aspect-[1.414/1] w-full max-w-md bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-8 outline-1 outline-gray-200">
                <Image
                  src={doc.thumbnail}
                  alt={doc.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p className="font-medium text-text-primary text-lg">{doc.shortDesc}</p>
                <p>{doc.fullDesc}</p>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-text-primary mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  こんな方におすすめ
                </h3>
                <ul className="space-y-3">
                  {doc.targetAudience.map((aud, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-text-secondary">{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 右側：ダウンロードフォーム */}
            <div className="relative">
              <div className="sticky top-24 bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">受付が完了しました</h3>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                      ご入力いただいたメールアドレス宛に、<br className="hidden md:block"/>
                      資料のダウンロードURLを送信いたしました。<br/>
                      今しばらくお待ちください。
                    </p>
                    <p className="text-sm text-gray-400">
                      ※数分待ってもメールが届かない場合は、迷惑メールフォルダをご確認いただくか、別のメールアドレスをお試しください。
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 border-b border-gray-100 pb-6">
                      <h2 className="text-2xl font-bold text-text-primary mb-2">無料ダウンロード</h2>
                      <p className="text-sm text-text-secondary">
                        以下のフォームに入力いただくと、ご指定のメールアドレス宛に資料のリンクをお送りします。
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1">
                          会社名・屋号 <span className="text-xs text-brand-primary ml-1 px-1.5 py-0.5 bg-blue-50 rounded">任意</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="株式会社サンプル"
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                          お名前 <span className="text-xs text-red-500 ml-1">必須</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="山田 太郎"
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                          メールアドレス <span className="text-xs text-red-500 ml-1">必須</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="taro@example.com"
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">
                          電話番号 <span className="text-xs text-brand-primary ml-1 px-1.5 py-0.5 bg-blue-50 rounded">任意</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="090-1234-5678"
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                        />
                      </div>

                      <div className="pt-2">
                        <label className="flex items-start text-sm text-text-secondary cursor-pointer">
                          <input type="checkbox" required className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
                          <span>
                            <a href="/privacy-policy" target="_blank" className="text-brand-primary hover:underline">プライバシーポリシー</a>
                            に同意してダウンロードします。
                          </span>
                        </label>
                      </div>

                      {error && (
                        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                          {error}
                        </div>
                      )}

                      <div className="pt-4">
                        <Button type="submit" variant="primary" className="w-full py-4 text-base font-bold" disabled={isSubmitting}>
                          {isSubmitting ? "送信中..." : "無料でダウンロードする"}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

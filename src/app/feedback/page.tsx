"use client";

import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      company_name: formData.get("company_name"),
      client_name: formData.get("client_name"),
      project_name: formData.get("project_name"),
      rating: formData.get("rating"),
      comment: formData.get("comment"),
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました。時間をおいて再度お試しください。");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="bg-background-alt py-16 md:py-24 border-b border-gray-100">
        <Container>
          <AnimatedSection>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl text-center">
              プロジェクト完了アンケート
            </h1>
            <p className="mt-4 text-center text-text-secondary max-w-2xl mx-auto">
              この度はプロジェクトにご協力いただき誠にありがとうございました。今後のサービス品質向上と、導入事例としてのご紹介のため、お客様から率直なご感想をお伺いできれば幸いです。
            </p>
          </AnimatedSection>
        </Container>
      </div>

      <Container className="py-16 md:py-24 max-w-3xl">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">アンケートのご協力ありがとうございました</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                お寄せいただいた貴重なご意見は、今後のサービス改善に役立てさせていただきます。<br />
                引き続き、よろしくお願い申し上げます。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-text-primary mb-2">
                    御社名
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="client_name" className="block text-sm font-medium text-text-primary mb-2">
                    お名前 <span className="text-xs text-red-500 ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    id="client_name"
                    name="client_name"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project_name" className="block text-sm font-medium text-text-primary mb-2">
                  対象プロジェクト（例：コーポレートサイト制作）
                </label>
                <input
                  type="text"
                  id="project_name"
                  name="project_name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  総合的なご満足度を教えてください <span className="text-xs text-red-500 ml-1">必須</span>
                </label>
                <div className="flex justify-between items-center sm:w-2/3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="text-sm font-medium text-gray-500 hidden sm:inline">不満</span>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="flex flex-col items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="rating"
                        value={num}
                        defaultChecked={num === 5}
                        className="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary"
                      />
                      <span className="mt-2 text-sm text-gray-700 font-medium group-hover:text-brand-primary">{num}</span>
                    </label>
                  ))}
                  <span className="text-sm font-medium text-brand-primary hidden sm:inline">満足</span>
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-text-primary mb-2">
                  プロジェクトのご感想・良かった点・改善点など <span className="text-xs text-red-500 ml-1">必須</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  rows={6}
                  placeholder="事前の期待に対し、実際の成果はいかがでしたか？ご自由にお書きください。"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-colors"
                ></textarea>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="pt-4 border-t border-gray-100">
                <Button type="submit" variant="default" className="w-full py-4 text-lg font-bold" disabled={isSubmitting}>
                  {isSubmitting ? "送信中..." : "回答を送信する"}
                </Button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  ご入力いただいた内容は無断で公開されることはありません。
                </p>
              </div>
            </form>
          )}
        </div>
      </Container>
    </PageLayout>
  );
}

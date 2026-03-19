"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CardImage } from "@/components/ui/Card";
import { WorkDetail } from "@/lib/works";
import Link from "next/link";
import { ArrowRight, Filter, Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface WorksContentProps {
  initialWorks: WorkDetail[];
}

const CATEGORIES = ["すべて", "Web制作", "LP制作", "システム開発", "AI導入・DX"];
const INDUSTRIES = ["すべて", "IT・SaaS", "製造・メーカー", "医療・バイオ", "EC・小売", "不動産・建設", "サービス・その他"];

export function WorksContent({ initialWorks }: WorksContentProps) {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [activeIndustry, setActiveIndustry] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorks = useMemo(() => {
    return initialWorks.filter((work) => {
      const matchCategory = activeCategory === "すべて" || work.category === activeCategory;
      const matchIndustry = activeIndustry === "すべて" || work.industry === activeIndustry;
      const matchSearch = searchQuery === "" || 
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchIndustry && matchSearch;
    });
  }, [initialWorks, activeCategory, activeIndustry, searchQuery]);

  return (
    <>
      {/* ── Filter Section ── */}
      <section className="py-12 border-b border-slate-100 bg-white sticky top-[64px] z-30 shadow-sm">
        <Container>
          <div className="flex flex-col gap-8">
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="キーワードで検索 (例: 業務自動化, 高セキュリティ)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              )}
            </div>

            {/* Filter Groups */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex items-center gap-3 shrink-0">
                <Filter className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">絞り込み</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-2 border-r border-slate-200 pr-4 mr-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "px-4 py-2 rounded-full text-xs font-bold transition-all",
                        activeCategory === cat 
                          ? "bg-brand-navy text-white shadow-md" 
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveIndustry(ind)}
                      className={cn(
                        "px-4 py-2 rounded-full text-xs font-bold transition-all",
                        activeIndustry === ind
                          ? "bg-brand-primary text-white shadow-md"
                          : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
                      )}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Results Grid ── */}
      <Container className="py-20 md:py-24">
        <div className="mb-10 flex items-center justify-between">
          <div className="text-sm font-medium text-slate-500">
            全 <span className="text-brand-navy font-bold">{initialWorks.length}</span> 件中 
            <span className="text-brand-primary font-bold ml-1">{filteredWorks.length}</span> 件を表示
          </div>
          { (activeCategory !== "すべて" || activeIndustry !== "すべて" || searchQuery !== "") && (
            <button 
              onClick={() => {
                setActiveCategory("すべて");
                setActiveIndustry("すべて");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
            >
              フィルタをリセット
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredWorks.map((work, i) => (
              <AnimatedSection key={work.slug} delay={i % 4 * 0.1}>
                <Link href={`/works/${work.slug}`} className="group block h-full">
                  <article className="flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
                    {/* Thumbnail Area */}
                    <div className="relative aspect-16/10 overflow-hidden">
                      <div className="absolute inset-0 bg-brand-navy/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardImage src={work.thumbnail} alt={work.title} className="group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-navy shadow-sm">
                          {work.category}
                        </span>
                        <span className="px-3 py-1 bg-brand-navy/90 backdrop-blur-md rounded-full text-[10px] font-bold text-white shadow-sm">
                          {work.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col flex-1 p-8 lg:p-10">
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-navy mb-5 leading-tight group-hover:text-brand-primary transition-colors">
                        {work.shortDesc || work.title}
                      </h3>
                      
                      {/* BtoB KPI Meta */}
                      {work.kpis && work.kpis.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 mb-8 bg-background-alt p-6 rounded-3xl border border-slate-100">
                          {work.kpis.slice(0, 2).map((kpi, index) => (
                            <div key={index} className="flex flex-col">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</span>
                              <span className="text-lg lg:text-xl font-black text-brand-navy tracking-tight">{kpi.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-brand-primary" />
                          </div>
                          <span className="text-sm font-bold text-brand-navy">プロジェクトの詳細を見る</span>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">View Case Study</div>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">条件に一致する実績が見つかりませんでした</h3>
            <p className="text-slate-500">条件を変えて再度お試しいただくか、リセットしてください。</p>
            <Button 
              variant="outline" 
              className="mt-8"
              onClick={() => {
                setActiveCategory("すべて");
                setActiveIndustry("すべて");
                setSearchQuery("");
              }}
            >
              すべての実績を表示する
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}

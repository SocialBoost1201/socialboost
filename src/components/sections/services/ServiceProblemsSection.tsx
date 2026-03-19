"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

const PROBLEMS = [
  {
    num: "01",
    title: "価格が高すぎる、内訳が不明瞭",
    desc: "多重下請け構造や不要なマージンにより、見積もりが肥大化。なぜその価格になるのか分からないまま発注してしまう。",
  },
  {
    num: "02",
    title: "公開までのスピードが遅すぎる",
    desc: "要件定義やデザインの度に長い期間が空き、ビジネスチャンスを逃している。",
  },
  {
    num: "03",
    title: "自社の強みを言語化・整理できない",
    desc: "「何を伝えるべきか」から提案してほしかったが、言われた通りのものしか上がってこない。",
  },
  {
    num: "04",
    title: "「作って終わり」でビジネスに繋がらない",
    desc: "デザインは綺麗だが、問い合わせや売上が増えず、ただのコストになってしまっている。",
  },
];

export function ServiceProblemsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-48 bg-brand-navy text-white relative overflow-hidden">
      {/* ── Background Visuals ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(24,119,242,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Left: Sticky Title */}
          <div className="lg:col-span-12 xl:col-span-5 relative">
            <motion.div 
              style={{ y: titleY, opacity: titleOpacity }}
              className="sticky top-32"
            >
              <div className="section-badge mb-8 bg-white/5 border-white/10 text-white mx-0">Common Challenges</div>
              <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-8">
                デジタルの投資が、<br />
                <span className="text-white/40 italic">「ただの出費」</span>に<br />
                なっていませんか？
              </h3>
              <p className="text-base md:text-xl text-white/60 leading-relaxed font-bold max-w-lg mb-6">
                多くのお客様が「期待した成果が出ない」「構造的に不透明」といった悩みを抱えています。その根本原因は、旧態依然とした業界構造にあります。
              </p>
            </motion.div>
          </div>

          {/* Right: Problem Cards */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROBLEMS.map((prob, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-7 md:p-10 lg:p-12 rounded-3xl md:rounded-4xl hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-700"
              >
                <div className="text-[10px] font-black tracking-[0.4em] text-white/20 mb-8 border-b border-white/5 pb-4 group-hover:text-brand-primary/40 group-hover:border-brand-primary/20 transition-colors">
                  PROBLEM {prob.num}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight leading-snug pr-4">{prob.title}</h4>
                <p className="text-white/60 leading-relaxed font-bold text-base">
                  {prob.desc}
                </p>

                {/* Subtle light effect on hover */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-brand-primary/0 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all duration-700" />
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

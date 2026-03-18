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
    <section ref={containerRef} className="py-32 md:py-48 bg-brand-navy text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-l from-white/5 to-transparent skew-x-[-15deg] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left: Sticky Title */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: titleY, opacity: titleOpacity }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-6 flex items-center gap-4">
                <span className="w-10 h-[2px] bg-brand-primary" />
                Common Challenges
              </h2>
              <h3 className="text-3xl md:text-5xl font-black leading-[1.2] tracking-tight mb-8">
                デジタルの投資が<br/>
                <span className="text-gray-400">「ただの出費」</span>に<br/>
                なっていませんか？
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                多くのお客様が、制作会社への不満や、期待した成果が出ない悩みを抱えた状態でご相談にいらっしゃいます。
              </p>
            </motion.div>
          </div>

          {/* Right: Problem Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {PROBLEMS.map((prob, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-4xl hover:bg-white/10 transition-colors"
              >
                <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-brand-primary/10 transition-colors duration-500">
                  {prob.num}
                </div>
                <h4 className="text-2xl font-bold mb-4 pr-16 text-white">{prob.title}</h4>
                <p className="text-gray-300 leading-relaxed font-medium">
                  {prob.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

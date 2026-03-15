import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const problems = [
  "Webサイトを作ったが、売上や問い合わせに直結していない",
  "デザインは綺麗でも、自社の強みが正しく伝わっていない",
  "システム化やAI導入を進めたいが、何から始めればいいか分からない",
  "制作会社、システム会社、コンサルタントと別々にやり取りするのが手間で疲れる",
];

export function ProblemSection() {
  return (
    <section className="bg-background-alt py-24 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle en="ISSUES" ja="こんな課題はありませんか？" />
        </AnimatedSection>
        
        <div className="mx-auto max-w-3xl mt-12">
          <AnimatedSection delay={0.2} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-12 relative overflow-hidden">
            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-primary" />
            
            <ul className="space-y-6 md:space-y-8">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-brand-primary" />
                  <span className="ml-4 text-base md:text-lg font-medium text-text-primary leading-relaxed md:leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-gray-100 pt-8 text-center">
              <p className="text-lg md:text-xl font-bold tracking-tight text-brand-primary">
                SocialBoostが、これらの課題をワンストップで解決します。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

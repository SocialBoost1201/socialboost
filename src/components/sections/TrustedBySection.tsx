import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Building2, Command, Hexagon, Component, Layers, Layout, ShieldHalf } from "lucide-react";

const COMPANIES = [
  { name: "Global Tech Inc.", icon: Command },
  { name: "Future Solutions", icon: Hexagon },
  { name: "Innovate Group", icon: Layers },
  { name: "Next Frontier", icon: Component },
  { name: "Smart Services", icon: Layout },
  { name: "Trust Security", icon: ShieldHalf },
];

export function TrustedBySection() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-b border-gray-100">
      <Container>
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">
            スタートアップから上場企業まで、多くの事業推進をサポート
          </p>
        </AnimatedSection>

        {/* CSS Marquee wrapper */}
        <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-linear-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-linear-to-l after:from-white after:to-transparent">
          <AnimatedSection delay={0.2} className="w-full">
            {/* Simple static grid on mobile, flex on desktop. If marquee is needed, we will add animation class in tailwind. For now we use a clean flex wrap */}
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {COMPANIES.map((company, index) => {
                const Icon = company.icon;
                return (
                  <div key={index} className="flex items-center gap-3 transition-transform hover:scale-105">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
                    <span className="font-extrabold text-xl md:text-2xl text-gray-800 tracking-tight">
                      {company.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

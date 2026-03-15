"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQ_DATA } from "@/lib/jsonld";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// UI表示件数（JSON-LD全件はpage.tsxのFAQ_DATAを使用）
const DISPLAY_COUNT = 8;

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const displayFaqs = FAQ_DATA.slice(0, DISPLAY_COUNT);

  return (
    <section className="bg-background-alt py-24 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle en="FAQ" ja="よくあるご質問" />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl mt-12 space-y-3">
          {displayFaqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left gap-4 group cursor-pointer"
                >
                  <span className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white text-xs font-semibold mt-0.5">Q</span>
                    <span className="text-base md:text-lg font-bold text-text-primary leading-relaxed">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-primary transition-transform duration-300",
                      open === i && "rotate-180"
                    )}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 md:px-7 md:pb-7 pl-17">
                    <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}


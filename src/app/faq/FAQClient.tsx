"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface FAQClientProps {
  faqs: { question: string; answer: string }[];
}

export function FAQClient({ faqs }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, i) => (
        <AnimatedSection key={i} delay={i * 0.05}>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4 group cursor-pointer bg-white"
            >
              <span className="flex items-start gap-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary text-sm font-bold mt-0.5">
                  Q
                </span>
                <span className="text-lg md:text-xl font-bold text-text-primary leading-relaxed pr-4">
                  {faq.question}
                </span>
              </span>
              <ChevronDown
                className={cn(
                  "h-6 w-6 shrink-0 text-brand-primary transition-transform duration-300",
                  openIndex === i && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 pl-18">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-text-secondary leading-relaxed text-base md:text-lg whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

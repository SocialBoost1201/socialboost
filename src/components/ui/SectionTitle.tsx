import { cn } from "@/lib/utils";
import * as React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  en: string;
  ja: string;
  align?: "left" | "center";
}

export function SectionTitle({ en, ja, align = "center", className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-2", align === "center" ? "items-center text-center" : "items-start text-left", className)} {...props}>
      <span className="text-sm font-bold tracking-widest text-brand-primary uppercase">
        {en}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {ja}
      </h2>
    </div>
  );
}

import { cn } from "@/lib/utils";
import * as React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  en: string;
  ja: string;
  align?: "left" | "center";
}

export function SectionTitle({ en, ja, align = "center", className, ...props }: SectionTitleProps) {
  return (
    <div 
      className={cn(
        "mb-12 flex flex-col gap-5", 
        align === "center" ? "items-center text-center" : "items-start text-left", 
        className
      )} 
      {...props}
    >
      <span className="section-badge shrink-0">
        {en}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tighter text-brand-navy md:text-4xl lg:text-5xl leading-tight">
        {ja}
      </h2>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "default";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const resolvedVariant = variant === "default" ? "primary" : variant;

    return (
      <Comp
        className={cn(
          "btn-premium inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-accent hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-1": resolvedVariant === "primary",
            "bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:bg-brand-navy-light hover:shadow-xl hover:shadow-brand-navy/30 hover:-translate-y-1": resolvedVariant === "secondary",
            "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1": resolvedVariant === "outline",
            "hover:bg-brand-light text-brand-navy hover:text-brand-primary": resolvedVariant === "ghost",
            "h-10 px-6 text-xs": size === "sm",
            "h-12 px-8 text-sm": size === "md",
            "h-15 px-10 text-base md:text-lg": size === "lg",
            "h-20 px-12 text-lg md:text-xl tracking-tight": size === "xl",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

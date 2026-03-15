import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-primary text-white hover:bg-brand-accent shadow-sm": variant === "primary",
            "bg-brand-navy text-white hover:bg-brand-navy-light shadow-sm": variant === "secondary",
            "border border-brand-primary text-brand-primary hover:bg-brand-light": variant === "outline",
            "hover:bg-background-alt text-text-primary": variant === "ghost",
            "h-9 px-4 py-2": size === "sm",
            "h-11 px-6 py-2": size === "md",
            "h-14 px-8 py-3 text-base": size === "lg",
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

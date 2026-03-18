import { cn } from "@/lib/utils";
import * as React from "react";
import Image from "next/image";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-background-alt", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export const CardCategoryBadge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand-primary", className)}>
      {children}
    </span>
  );
};

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-1 flex-col p-6 text-left", className)} {...props} />;
};

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h3 className={cn("mt-3 text-lg md:text-xl lg:text-2xl font-bold leading-snug text-text-primary text-left", className)} {...props} />;
};

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("mt-3 text-sm md:text-base leading-relaxed text-text-secondary line-clamp-3 text-left", className)} {...props} />;
};

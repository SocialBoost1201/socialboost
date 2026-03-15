import { cn } from "@/lib/utils";
import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl px-5 md:px-8", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

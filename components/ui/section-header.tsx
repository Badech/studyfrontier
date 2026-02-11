import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: string;
  align?: "left" | "center";
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, badge, align = "center", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4",
          align === "center" ? "items-center text-center" : "items-start text-left",
          className
        )}
        {...props}
      >
        {badge && (
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary border border-primary/20">
            {badge}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };

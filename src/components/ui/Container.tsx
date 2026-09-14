import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  /** Max content width. Change once to re-flow the whole site. */
  width?: "narrow" | "default" | "wide" | "full";
  className?: string | undefined;
};

const widths: Record<NonNullable<ContainerProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-[78rem]",
  wide: "max-w-[90rem]",
  full: "max-w-none",
};

export function Container({ children, width = "default", className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[width], className)}>
      {children}
    </div>
  );
}

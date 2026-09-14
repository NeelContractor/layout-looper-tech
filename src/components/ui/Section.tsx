import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Background of the band. */
  tone?: "white" | "yellow" | "pink" | "cream" | "surface" | "ink";
  /** Vertical rhythm. */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Diagonal cut on the band's edges, like the original template. */
  slant?: "none" | "top" | "bottom" | "both";
  className?: string | undefined;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-background text-foreground",
  yellow: "bg-brand-yellow text-brand-ink",
  pink: "bg-brand-pink text-brand-ink",
  cream: "bg-brand-cream text-brand-ink",
  surface: "bg-surface text-foreground",
  ink: "bg-brand-ink text-primary-foreground",
};

const paddings: Record<NonNullable<SectionProps["padding"]>, string> = {
  none: "py-0",
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-24 sm:py-32 lg:py-40",
};

const slants: Record<NonNullable<SectionProps["slant"]>, string> = {
  none: "",
  top: "slant-top",
  bottom: "slant-bottom",
  both: "slant-both",
};

export function Section({
  children,
  id,
  tone = "white",
  padding = "lg",
  slant = "none",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full", tones[tone], paddings[padding], slants[slant], className)}
    >
      {children}
    </section>
  );
}

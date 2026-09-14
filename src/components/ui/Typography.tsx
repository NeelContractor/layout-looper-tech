import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Splits "\n" in content into real line breaks so text can be shaped exactly. */
function withBreaks(children: ReactNode) {
  if (typeof children !== "string") return children;
  return children.split("\n").map((line, i, all) => (
    <span key={i} className="block">
      {line}
      {i < all.length - 1 ? "" : ""}
    </span>
  ));
}

type HeadingProps = {
  children: ReactNode;
  /** Visual size — independent from the HTML tag. */
  size?: "hero" | "h2" | "h3" | "h4";
  /** HTML tag for correct document outline. */
  as?: ElementType;
  weight?: "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  tone?: "ink" | "light" | "muted";
  className?: string | undefined;
};

const headingSizes = {
  hero: "text-hero tracking-[-0.02em]",
  h2: "text-h2 tracking-[-0.01em]",
  h3: "text-h3",
  h4: "text-base sm:text-lg",
} as const;

const weights = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
} as const;

const aligns = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const tones = {
  ink: "text-foreground",
  light: "text-primary-foreground",
  muted: "text-muted-foreground",
} as const;

export function Heading({
  children,
  size = "h2",
  as,
  weight = "normal",
  align = "left",
  tone = "ink",
  className,
}: HeadingProps) {
  const Tag: ElementType = as ?? (size === "hero" ? "h1" : size === "h2" ? "h2" : "h3");
  return (
    <Tag
      className={cn(
        "font-display",
        headingSizes[size],
        weights[weight],
        aligns[align],
        tones[tone],
        className,
      )}
    >
      {withBreaks(children)}
    </Tag>
  );
}

type TextProps = {
  children: ReactNode;
  size?: "small" | "body" | "lead";
  weight?: "normal" | "bold";
  align?: "left" | "center" | "right";
  tone?: "ink" | "light" | "muted";
  className?: string | undefined;
  as?: ElementType;
};

const textSizes = {
  small: "text-small",
  body: "text-body",
  lead: "text-[1.125rem] leading-[1.55]",
} as const;

export function Text({
  children,
  size = "small",
  weight = "normal",
  align = "left",
  tone = "ink",
  className,
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-body",
        textSizes[size],
        weight === "bold" ? "font-bold" : "font-normal",
        aligns[align],
        tones[tone],
        className,
      )}
    >
      {withBreaks(children)}
    </Tag>
  );
}

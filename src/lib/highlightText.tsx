import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Splits `text` on any of the given `phrases` and wraps matches
 * in a highlighted <mark> — yellow highlighter background,
 * maroon brand text — to draw attention to price/product phrases.
 */
export function highlightText(
  text: string,
  phrases: string[] = [],
  className?: string
): ReactNode[] {
  if (phrases.length === 0) return [text];

  const pattern = new RegExp(
    `(${phrases
      .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g"
  );

  return text.split(pattern).map((chunk, i) =>
    phrases.includes(chunk) ? (
      <mark
        key={i}
        className={cn(
          "rounded-sm bg-brand-yellow px-1 font-semibold text-brand-maroon",
          className
        )}
      >
        {chunk}
      </mark>
    ) : (
      <span key={i}>{chunk}</span>
    )
  );
}
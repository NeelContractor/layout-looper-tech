import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "yellow" | "outline" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  /* Black button with white label (primary across the site) */
  solid: "bg-primary text-primary-foreground hover:bg-primary/85",
  /* Brand yellow button with black label (header CTA) */
  yellow: "bg-brand-yellow text-brand-ink hover:brightness-95",
  /* Black outline on transparent */
  outline: "border-2 border-foreground text-foreground hover:bg-foreground/5",
  /* White button with black label (inside dark cards) */
  light: "bg-background text-foreground hover:bg-background/85",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.875rem]",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-[52px] px-8 text-base",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant | undefined;
  size?: Size | undefined;
  /** Corner rounding — the template uses square-ish buttons. */
  radius?: "none" | "sm" | "md" | "full" | undefined;
  fullWidth?: boolean | undefined;
  className?: string | undefined;
};

const radii = {
  none: "rounded-none",
  sm: "rounded-[4px]",
  md: "rounded-md",
  full: "rounded-full",
} as const;

function classesFor({
  variant = "solid",
  size = "md",
  radius = "sm",
  fullWidth,
  className,
}: Omit<BaseProps, "children">) {
  return cn(
    "inline-flex items-center justify-center gap-2 font-display font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    radii[radius],
    fullWidth && "w-full",
    className,
  );
}

export function Button({
  children,
  variant,
  size,
  radius,
  fullWidth,
  className,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={classesFor({ variant, size, radius, fullWidth, className })} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant,
  size,
  radius,
  fullWidth,
  className,
  href,
  ...rest
}: BaseProps & ComponentProps<"a">) {
  return (
    <a
      href={href}
      className={classesFor({ variant, size, radius, fullWidth, className })}
      {...rest}
    >
      {children}
    </a>
  );
}

export function ButtonRoute({
  children,
  variant,
  size,
  radius,
  fullWidth,
  className,
  ...rest
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link className={classesFor({ variant, size, radius, fullWidth, className })} {...rest}>
      {children}
    </Link>
  );
}

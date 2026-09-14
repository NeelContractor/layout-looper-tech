import { Link } from "@tanstack/react-router";
import { CircleUserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/BrandButton";
import { brand, nav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-background/95 backdrop-blur">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
          <Link
            to="/"
            className="flex min-w-0 items-center"
            aria-label={brand.name}
          >
            <img
              src="/images/Astro-Logo.jpeg"
              alt={`${brand.name} — ${brand.tagline}`}
              style={{ height: brand.logoHeight }}
              className="w-auto max-w-full object-contain"
            />
             <span
  className="text-2xl font-bold"
  style={{ fontFamily: "var(--font-display)" }}
>
  GrahAura
</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body type-small text-foreground transition-colors hover:text-brand-gold"
                activeProps={{
                  className:
                    "font-body type-small text-foreground underline underline-offset-4",
                }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={nav.login.href}
              className="flex items-center gap-2 font-body type-small text-brand-gold"
            >
              <CircleUserRound className="h-6 w-6" strokeWidth={1.5} />
              {nav.login.label}
            </a>

            <ButtonLink
              href={nav.cta.href}
              variant="yellow"
              size="sm"
              radius="sm"
            >
              {nav.cta.label}
            </ButtonLink>
          </nav>

          {/* Mobile / tablet trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-icon border border-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile / tablet panel */}
      {open && (
        <div className="border-t border-foreground/10 bg-background lg:hidden">
          <Container>
            <div className="flex flex-col gap-4 py-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="self-end text-foreground"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>

              {nav.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-foreground"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={nav.login.href}
                className="flex items-center gap-2 font-body text-base text-brand-gold"
              >
                <CircleUserRound className="h-5 w-5" strokeWidth={1.5} />
                {nav.login.label}
              </a>

              <ButtonLink
                href={nav.cta.href}
                variant="yellow"
                size="md"
                radius="sm"
                fullWidth
              >
                {nav.cta.label}
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/BrandButton";
import { Text } from "@/components/ui/Typography";
import { brand, footer } from "@/content/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <footer className="w-full bg-brand-yellow text-brand-ink">
      <Container className="py-14 sm:py-20">
        {/* Brand lockup */}
        <div className="flex min-w-0 items-center gap-4">
          <img
            src={brand.logo}
            alt={`${brand.name} — ${brand.tagline}`}
            style={{ height: brand.logoHeight }}
            className="w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Contact */}
          <div className="min-w-0">
            <Text weight="bold" size="lead" className="mb-6">
              {footer.contact.title}
            </Text>
            <Text className="mb-6">{footer.contact.address}</Text>
            <div className="space-y-4">
              {footer.contact.items.map((item) => (
                <Text key={item.label}>{`${item.label}\n${item.value}`}</Text>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="min-w-0">
            <Text weight="bold" size="lead" className="mb-6">
              {footer.quickLinks.title}
            </Text>
            <ul className="space-y-4">
              {footer.quickLinks.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-small underline underline-offset-4 hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-0">
            <Text weight="bold" size="lead" className="mb-6">
              {footer.follow.title}
            </Text>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block font-body text-small" htmlFor="footer-email">
                {footer.follow.emailLabel}
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full rounded-[4px] border-2 border-foreground bg-brand-yellow px-3 font-body text-small outline-none focus:ring-2 focus:ring-foreground/30"
              />
              <label className="flex items-start gap-3 font-body text-small">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-black"
                />
                {footer.follow.checkboxLabel}
              </label>
              <Button type="submit" variant="solid" size="md" radius="sm" fullWidth>
                {sent ? "Thanks!" : footer.follow.submitLabel}
              </Button>
            </form>
          </div>

          {/* Socials */}
          <div className="min-w-0 lg:pt-14">
            <ul className="space-y-4">
              {footer.follow.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="font-body text-small font-bold underline underline-offset-4 hover:opacity-70"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-brand-ink py-4">
        <Container>
          <Text align="center" tone="light" className="text-[0.8125rem]">
            {footer.copyright}
          </Text>
        </Container>
      </div>
    </footer>
  );
}

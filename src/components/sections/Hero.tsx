import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/BrandButton";
import { Heading, Text } from "@/components/ui/Typography";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { hero } from "@/content/site";
import { highlightText } from "@/lib/highlightText";

type HeroProps = {
  title?: string;
  subtitle?: string;
  subtitleHighlights?: string[];
  cta?: { label: string; href: string };
  imageAlt?: string;
  imageWidth?: number;
  className?: string;
};

export function Hero({
  title = hero.title,
  subtitle = hero.subtitle,
  subtitleHighlights = hero.subtitleHighlights,
  cta = hero.cta,
  imageAlt = hero.imageAlt,
  className,
}: HeroProps) {
  return (
    <Section tone="white" padding="lg" className={className}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div className="order-2 min-w-0 lg:order-1">
            <Heading size="hero">{title}</Heading>

            <Text size="lead" className="mt-6 max-w-md">
              {highlightText(subtitle, subtitleHighlights)}
            </Text>

            <ButtonLink
              href={cta.href}
              variant="solid"
              size="md"
              radius="sm"
              className="mt-8"
            >
              {cta.label}
            </ButtonLink>
          </div>

          {/* Right Product Preview */}
          <div
            className="order-1 min-w-0 lg:order-2"
            aria-label={imageAlt}
          >
            <ProductPreview
              brandName={hero.productPreview.brandName}
              navItems={hero.productPreview.navItems}
              heroTitle={hero.productPreview.heroTitle}
              heroText={hero.productPreview.heroText}
              heroButton={hero.productPreview.heroButton}
              services={hero.productPreview.services}
              astrologerName={hero.productPreview.astrologerName}
              astrologerRole={hero.productPreview.astrologerRole}
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}

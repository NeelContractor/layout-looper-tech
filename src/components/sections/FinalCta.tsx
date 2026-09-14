import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/BrandButton";
import { Heading } from "@/components/ui/Typography";
import { finalCta } from "@/content/site";

type FinalCtaProps = {
  title?: string;
  cta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  className?: string;
};

/** Centered closing call to action; the illustration bleeds into the footer. */
export function FinalCta({
  title = finalCta.title,
  cta = finalCta.cta,
  image = finalCta.image,
  imageAlt = finalCta.imageAlt,
  className,
}: FinalCtaProps) {
  return (
    <Section tone="white" padding="none" className={className}>
      <Container className="pt-20 sm:pt-28">
        <Heading size="h2" align="center" className="mx-auto max-w-3xl">
          {title}
        </Heading>
        <div className="mt-10 flex justify-center">
          <ButtonLink href={cta.href} variant="solid" size="md" radius="sm">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
      <div className="relative mt-10 -mb-px">
        {/* Yellow strip behind the lower part of the illustration */}
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-brand-yellow" />
        <img
          src={image}
          alt={imageAlt}
          className="relative mx-auto h-auto w-full max-w-3xl px-5 sm:px-8"
        />
      </div>
    </Section>
  );
}

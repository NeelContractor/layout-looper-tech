import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { FeatureItem } from "@/components/ui/FeatureIcon";
import { creatives } from "@/content/site";

type CreativesProps = {
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  highlights?: { icon: string; label: string }[];
  className?: string;
};

/** Illustration with lavender circle / wave / yellow block decorations. */
export function Creatives({
  title = creatives.title,
  body = creatives.body,
  image = creatives.image,
  imageAlt = creatives.imageAlt,
  highlights = creatives.highlights,
  className,
}: CreativesProps) {
  return (
    <Section tone="white" padding="lg" className={className}>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Decorated illustration */}
          <div className="relative order-2 min-w-0 lg:order-1">
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-40 w-40 rounded-full bg-brand-lavender sm:h-56 sm:w-56"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-2 right-6 h-28 w-28 bg-brand-yellow-soft sm:h-36 sm:w-36"
            />
            <img
              src="/images/waves.svg"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-[18%] w-32 sm:w-44"
            />
            <img src={image} alt={imageAlt} className="relative mx-auto h-auto w-full max-w-lg" />
          </div>

          {/* Copy */}
          <div className="order-1 min-w-0 lg:order-2">
            <Heading size="h2">{title}</Heading>
            <Text size="small" className="mt-6 max-w-xl">
              {body}
            </Text>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <FeatureItem key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

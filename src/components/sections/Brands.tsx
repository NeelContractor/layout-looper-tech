import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { brands } from "@/content/site";
import { cn } from "@/lib/utils";

type BrandsProps = {
  title?: string;
  body?: string;
  logos?: { src: string; alt: string }[];
  /** Logo height in px. */
  logoHeight?: number;
  columns?: 2 | 3 | 4;
  className?: string;
};

/** Pink diagonal band with a grid of client logos. */
export function Brands({
  title = brands.title,
  body = brands.body,
  logos = brands.logos,
  logoHeight = 72,
  columns = 4,
  className,
}: BrandsProps) {
  const gridCols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" }[columns];

  return (
    <Section tone="pink" padding="xl" slant="top" className={className}>
      <Container>
        <Heading size="h2">{title}</Heading>
        <Text size="small" className="mt-6 max-w-xl">
          {body}
        </Text>

        <div className={cn("mt-16 grid grid-cols-2 gap-y-14 gap-x-8", gridCols)}>
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logoHeight }}
                className="w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { about } from "@/content/site";

type AboutProps = {
  title?: string;
  body?: string;
  /** Band background. */
  tone?: "yellow" | "pink" | "cream" | "surface" | "white";
  className?: string;
};

/** Yellow diagonal band: headline on the left, paragraph on the right. */
export function About({
  title = about.title,
  body = about.body,
  tone = "yellow",
  className,
}: AboutProps) {
  return (
    <Section tone={tone} padding="xl" slant="both" className={className}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Heading size="h2" className="max-w-sm">
            {title}
          </Heading>
          <Text size="small" className="max-w-xl">
            {body}
          </Text>
        </div>
      </Container>
    </Section>
  );
}

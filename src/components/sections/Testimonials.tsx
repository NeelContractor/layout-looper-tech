import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { testimonials } from "@/content/site";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  plant?: string;
  /** Border thickness in px. */
  borderWidth?: number;
  className?: string;
};

/** Browser-window styled quote card with a plant peeking out of the corner. */
export function TestimonialCard({
  quote,
  author,
  plant,
  borderWidth = 2,
  className,
}: TestimonialCardProps) {
  return (
    <figure className={cn("relative min-w-0", className)}>
      <div
        className="overflow-hidden rounded-card border-foreground bg-background"
        style={{ borderWidth }}
      >
        <div
          className="flex items-center gap-2 bg-brand-yellow px-4"
          style={{ height: 32, borderBottom: `${borderWidth}px solid var(--foreground)` }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-brand-ink" />
          ))}
        </div>
        <div className="px-8 py-10 sm:px-10">
          <Text size="small" className="max-w-[16rem]">
            {quote}
          </Text>
          <figcaption className="mt-10 flex justify-end">
            <Text size="small" weight="bold" align="right">
              {author}
            </Text>
          </figcaption>
        </div>
      </div>
      {plant && (
        <img
          src={plant}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -left-8 w-24 sm:w-28"
        />
      )}
    </figure>
  );
}

type TestimonialsProps = {
  title?: string;
  items?: typeof testimonials.items;
  columns?: 1 | 2 | 3;
  className?: string;
};

export function Testimonials({
  title = testimonials.title,
  items = testimonials.items,
  columns = 3,
  className,
}: TestimonialsProps) {
  const gridCols = { 1: "", 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3" }[columns];

  return (
    <Section tone="white" padding="lg" className={className}>
      <Container>
        <Heading size="h2">{title}</Heading>
        <div className={cn("mt-14 grid gap-14 sm:gap-10", gridCols)}>
          {items.map((item) => (
            <TestimonialCard key={item.author} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

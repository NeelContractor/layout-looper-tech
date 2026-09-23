import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";
import { testimonials } from "@/content/site";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

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
  const gridCols = {
    1: "",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <Section id= "faq" tone="white" padding="lg" className={className}>
      <Container>
        <Heading size="h2">{title}</Heading>

        <div
          className={cn(
            "mt-14 grid gap-10 sm:gap-8",
            gridCols
          )}
        >
          {items.map((item) => (
            <TestimonialCard
              key={item.author}
              {...item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
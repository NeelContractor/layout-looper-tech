import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  body: string;
  image: string;
  /** Card image aspect ratio, e.g. "3/4". */
  ratio?: string;
  className?: string;
};

export function ServiceCard({ title, body, image, ratio = "242/321", className }: ServiceCardProps) {
  return (
    <article className={cn("min-w-0", className)}>
      <div className="overflow-hidden rounded-card" style={{ aspectRatio: ratio }}>
        <img src={image} alt={title.replace(/\n/g, " ")} className="h-full w-full object-cover" />
      </div>
      <Heading size="h3" weight="bold" className="mt-6">
        {title}
      </Heading>
      <Text size="small" className="mt-4">
        {body}
      </Text>
    </article>
  );
}

type ServicesProps = {
  title?: string;
  intro?: string;
  items?: typeof services.items;
  /** Cards per row on large screens. */
  columns?: 2 | 3 | 4;
  className?: string;
};

export function Services({
  title = services.title,
  intro = services.intro,
  items = services.items,
  columns = 4,
  className,
}: ServicesProps) {
  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns];

  return (
    <Section tone="white" padding="lg" className={className}>
      <Container>
        <Heading size="h2">{title}</Heading>
        <Text size="small" className="mt-6 max-w-sm">
          {intro}
        </Text>

        <div className={cn("mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8", gridCols)}>
          {items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

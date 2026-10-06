import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";
import { AstrologerDemoModal } from "./AstrologerDemoModal";

/* ------------------------------------------------------------------ */
/*  EDIT THE DEMO BUTTON HERE                                          */
/* ------------------------------------------------------------------ */
const DEMO_BUTTON = {
  show: true, // set to false to hide the button
  label: "Explore Free Demo", // button text
  arrow: "→", // set to "" to remove the arrow
  // Tailwind classes for the button look (colour, size, shape, hover)
  className:
    "bg-black text-white px-7 py-3 text-sm font-medium rounded-full hover:scale-[1.02]",
};

type ServiceCardProps = {
  title: string;
  body: string;
  image: string;
  /** Card image aspect ratio, e.g. "3/4". */
  ratio?: string;
  className?: string;
};

export function ServiceCard({
  title,
  body,
  image,
  ratio = "242/321",
  className,
}: ServiceCardProps) {
  return (
    <article className={cn("min-w-0", className)}>
      <div className="overflow-hidden rounded-card" style={{ aspectRatio: ratio }}>
        <img
          src={image}
          alt={title.replace(/\n/g, " ")}
          className="h-full w-full object-cover"
        />
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
  /** Optional overrides for the demo button (defaults come from DEMO_BUTTON). */
  showDemoButton?: boolean;
  demoButtonLabel?: string;
  demoButtonClassName?: string;
};

export function Services({
  title = services.title,
  intro = services.intro,
  items = services.items,
  columns = 4,
  className,
  showDemoButton = DEMO_BUTTON.show,
  demoButtonLabel = DEMO_BUTTON.label,
  demoButtonClassName = DEMO_BUTTON.className,
}: ServicesProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns];

  return (
    <Section id="features" tone="white" padding="lg" className={className}>
      <Container>
        {/* Heading + intro on the left, demo button on the right */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Heading size="h2">{title}</Heading>
            <Text size="small" className="mt-6 max-w-sm">
              {intro}
            </Text>
          </div>

          {showDemoButton && (
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className={cn(
                "inline-flex shrink-0 items-center justify-center self-start transition-transform sm:self-end",
                demoButtonClassName,
              )}
            >
              {demoButtonLabel}
              {DEMO_BUTTON.arrow && <span className="ml-2">{DEMO_BUTTON.arrow}</span>}
            </button>
          )}
        </div>

        <div className={cn("mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8", gridCols)}>
          {items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </Container>

      <AstrologerDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </Section>
  );
}
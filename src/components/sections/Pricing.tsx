import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink, ButtonRoute } from "@/components/ui/BrandButton";
import { Heading, Text } from "@/components/ui/Typography";
import { pricing } from "@/content/site";
import { cn } from "@/lib/utils";

export type Plan = {
  badge?: string;
  name: string;
  currency: string;
  price: string;
  period: string;
  description: string;
  validity: string;
  cta: { label: string; href: string };
};

type PlanCardProps = Plan & {
  /** Price number size in px. */
  priceSize?: number;
  className?: string;
};

/** Black membership card with an optional yellow "Best Value" tab. */
export function PlanCard({
  badge,
  name,
  currency,
  price,
  period,
  description,
  validity,
  cta,
  priceSize = 70,
  className,
}: PlanCardProps) {
  return (
    <div className={cn("relative min-w-0 pt-5", className)}>
      {badge && (
        <span className="absolute right-6 top-0 z-10 bg-brand-yellow px-3 py-1 font-body text-[0.8125rem] text-brand-ink">
          {badge}
        </span>
      )}
      <div className="rounded-card bg-brand-ink px-8 py-9 text-primary-foreground sm:px-10">
        <Text size="lead" tone="light" className="text-[1.25rem]">
          {name}
        </Text>
        <div className="mt-3 flex items-start gap-1">
          <span className="font-body text-[1.125rem] leading-tight">{currency}</span>
          <span
            className="font-body leading-[0.95]"
            style={{ fontSize: priceSize, lineHeight: 0.95 }}
          >
            {price}
          </span>
        </div>
        <Text tone="light" className="mt-1 text-[0.75rem]">
          {period}
        </Text>
        <Text tone="light" className="mt-5">
          {description}
        </Text>
        <Text tone="light" className="mt-8">
          {validity}
        </Text>
        <ButtonLink
          href={cta.href}
          variant="light"
          size="md"
          radius="sm"
          fullWidth
          className="mt-6"
        >
          {cta.label}
        </ButtonLink>
      </div>
    </div>
  );
}

type PricingProps = {
  title?: string;
  body?: string;
  cta?: { label: string; to: "/pricing-plans" };
  plans?: Plan[];
  className?: string;
};

export function Pricing({
  title = pricing.title,
  body = pricing.body,
  cta = pricing.cta,
  plans = pricing.plans,
  className,
}: PricingProps) {
  return (
    <Section tone="surface" padding="lg" className={className}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <Heading size="h2">{title}</Heading>
            <Text size="small" className="mt-8 max-w-xl">
              {body}
            </Text>
            <ButtonRoute to={cta.to} variant="solid" size="md" radius="sm" className="mt-10">
              {cta.label}
            </ButtonRoute>
          </div>
          <div className="grid min-w-0 gap-8">
            {plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

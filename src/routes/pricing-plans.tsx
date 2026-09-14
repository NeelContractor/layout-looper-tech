import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { PlanCard } from "@/components/sections/Pricing";
import { Brands } from "@/components/sections/Brands";
import { FinalCta } from "@/components/sections/FinalCta";
import { pricingPage } from "@/content/site";

const title = "Pricing Plans — WeDu";
const description =
  "Compare WeDu membership plans and pick the workflow package that fits your team. Change or cancel any time.";

export const Route = createFileRoute("/pricing-plans")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPlansPage,
});

function PricingPlansPage() {
  return (
    <>
      <Section tone="white" padding="lg">
        <Container>
          <Heading size="hero" align="center" className="mx-auto max-w-2xl">
            {pricingPage.title}
          </Heading>
          <Text size="lead" align="center" className="mx-auto mt-6 max-w-xl">
            {pricingPage.intro}
          </Text>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPage.plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </Container>
      </Section>
      <Brands />
      <FinalCta />
    </>
  );
}

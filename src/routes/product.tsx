import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Services } from "@/components/sections/Services";
import { Creatives } from "@/components/sections/Creatives";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { productPage } from "@/content/site";

const title = "Product — WeDu Workflow Platform";
const description =
  "See how the WeDu product brings workflows, file sharing, automation and customer support together in one place.";

export const Route = createFileRoute("/product")({
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
  component: ProductPage,
});

function ProductPage() {
  return (
    <>
      <Section tone="white" padding="lg">
        <Container>
          <Heading size="hero" className="max-w-2xl">
            {productPage.title}
          </Heading>
          <Text size="lead" className="mt-6 max-w-xl">
            {productPage.intro}
          </Text>
        </Container>
      </Section>
      <About />
      <Services />
      <Creatives />
      <Testimonials />
      <FinalCta />
    </>
  );
}

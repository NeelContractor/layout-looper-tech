// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/terms-and-conditions')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/terms-and-conditions"!</div>
// }
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

const title = "Terms & Conditions";
const description =
  "Terms and conditions for using our astrology website and digital services.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `${title} — WeDu` },
      { name: "description", content: description },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <Section tone="white" padding="lg">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Heading size="hero">Terms & Conditions</Heading>

          <Text size="small" className="mt-6">
            Please read these terms carefully before using our website or
            purchasing our services.
          </Text>

          <div className="mt-14 space-y-10">
            <section>
              <Heading size="h2">1. About Our Services</Heading>
              <Text size="small" className="mt-4">
                We provide professional website solutions and digital
                services designed for astrologers and astrology businesses.
                Our services may include website creation, appointment
                booking functionality, customization, branding, and
                personalized software development.
              </Text>
            </section>

            <section>
              <Heading size="h2">2. Website Services</Heading>
              <Text size="small" className="mt-4">
                Our standard website package provides the features and
                functionality described on our website at the time of
                purchase. Certain features may be subject to the selected
                package, technical requirements, or customization requests.
              </Text>
            </section>

            <section>
              <Heading size="h2">3. Custom Services</Heading>
              <Text size="small" className="mt-4">
                Custom websites and software are developed according to the
                requirements discussed and agreed upon with the client.
                Pricing for custom projects may vary depending on the
                functionality, design, integrations, development time, and
                technical requirements.
              </Text>
            </section>

            <section>
              <Heading size="h2">4. Client Responsibilities</Heading>
              <Text size="small" className="mt-4">
                The client is responsible for providing accurate information,
                images, branding assets, service details, contact information,
                and other content required to create or customize the website.
                The client must also ensure that any content supplied to us
                can legally be used.
              </Text>
            </section>

            <section>
              <Heading size="h2">5. Payments</Heading>
              <Text size="small" className="mt-4">
                Payment terms depend on the service selected. Standard website
                services may require payment before development begins.
                Custom projects may require an advance payment before work
                starts, with remaining payments based on the agreed project
                terms.
              </Text>
            </section>

            <section>
              <Heading size="h2">6. Delivery</Heading>
              <Text size="small" className="mt-4">
                Delivery timelines may vary depending on the selected service,
                client requirements, content availability, revisions, and
                technical complexity. Delays caused by missing information or
                client-side approvals may affect the delivery timeline.
              </Text>
            </section>

            <section>
              <Heading size="h2">7. Intellectual Property</Heading>
              <Text size="small" className="mt-4">
                Website content, branding assets, images, logos, and other
                materials supplied by the client remain the responsibility of
                the client. Custom-developed website components and software
                ownership or licensing will be determined according to the
                agreed project terms.
              </Text>
            </section>

            <section>
              <Heading size="h2">8. Third-Party Services</Heading>
              <Text size="small" className="mt-4">
                Websites may use third-party services such as hosting
                providers, payment gateways, booking tools, analytics
                services, communication platforms, or other integrations.
                Availability and performance of third-party services are
                subject to their respective terms and policies.
              </Text>
            </section>

            <section>
              <Heading size="h2">9. Acceptable Use</Heading>
              <Text size="small" className="mt-4">
                You agree not to use our services for unlawful activities,
                fraudulent purposes, distribution of harmful content, or any
                activity that may damage our services, systems, or reputation.
              </Text>
            </section>

            <section>
              <Heading size="h2">10. Changes to Services</Heading>
              <Text size="small" className="mt-4">
                We may update, modify, or improve our services from time to
                time. Features, pricing, availability, or technical
                specifications may change without notice for future purchases.
              </Text>
            </section>

            <section>
              <Heading size="h2">11. Limitation of Liability</Heading>
              <Text size="small" className="mt-4">
                We will make reasonable efforts to provide reliable services.
                However, we are not responsible for interruptions, failures,
                data loss, or issues caused by third-party services, hosting
                providers, internet connectivity, or circumstances beyond our
                reasonable control.
              </Text>
            </section>

            <section>
              <Heading size="h2">12. Changes to These Terms</Heading>
              <Text size="small" className="mt-4">
                We may update these Terms & Conditions when necessary. Any
                updated version will be published on this page.
              </Text>
            </section>

            <section>
              <Heading size="h2">13. Contact</Heading>
              <Text size="small" className="mt-4">
                If you have questions regarding these Terms & Conditions,
                please contact us through the contact details provided on our
                website.
              </Text>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
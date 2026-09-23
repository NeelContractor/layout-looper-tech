// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/refund-policy')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/refund-policy"!</div>
// }
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

const title = "Refund Policy";
const description =
  "Our refund policy for professional astrology website and custom software services.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: `${title} — WeDu` },
      { name: "description", content: description },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <Section tone="white" padding="lg">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Heading size="hero">Refund Policy</Heading>

          <Text size="small" className="mt-6">
            Please review this policy before purchasing our website or custom
            software services.
          </Text>

          <div className="mt-14 space-y-10">
            <section>
              <Heading size="h2">1. Standard Website Package</Heading>
              <Text size="small" className="mt-4">
                Because our professional website package involves setup,
                customization, configuration, and development work, payments
                may become non-refundable once development or customization
                has started.
              </Text>
            </section>

            <section>
              <Heading size="h2">2. Custom Website & Software</Heading>
              <Text size="small" className="mt-4">
                Custom projects are developed specifically according to the
                client's requirements. Once development has started, advance
                payments are generally non-refundable because resources and
                development time have already been allocated to the project.
              </Text>
            </section>

            <section>
              <Heading size="h2">3. Before Development Begins</Heading>
              <Text size="small" className="mt-4">
                If a refund request is made before development or customization
                begins, the request may be reviewed on a case-by-case basis.
                Any applicable refund will depend on the work already
                completed and expenses incurred.
              </Text>
            </section>

            <section>
              <Heading size="h2">4. Change of Mind</Heading>
              <Text size="small" className="mt-4">
                Refunds are generally not provided solely because a customer
                changes their mind after development or customization has
                started.
              </Text>
            </section>

            <section>
              <Heading size="h2">5. Client Delays</Heading>
              <Text size="small" className="mt-4">
                If a project is delayed because required information, content,
                approvals, images, or other materials are not provided by the
                client, the project timeline may be extended. Such delays do
                not automatically create a right to a refund.
              </Text>
            </section>

            <section>
              <Heading size="h2">6. Revisions</Heading>
              <Text size="small" className="mt-4">
                Reasonable revisions related to the agreed requirements may be
                included depending on the selected service. Requests for
                substantial changes or new functionality outside the original
                scope may require additional charges.
              </Text>
            </section>

            <section>
              <Heading size="h2">7. Technical Issues</Heading>
              <Text size="small" className="mt-4">
                If you experience a technical issue with a service we have
                delivered, please contact us so that we can review and resolve
                the issue where reasonably possible. A technical issue does not
                automatically result in a refund.
              </Text>
            </section>

            <section>
              <Heading size="h2">8. Third-Party Services</Heading>
              <Text size="small" className="mt-4">
                Payments or services provided by third parties may be governed
                by the respective third party's refund and cancellation
                policies. We are not responsible for refund policies of
                independent third-party providers.
              </Text>
            </section>

            <section>
              <Heading size="h2">9. How to Request a Refund</Heading>
              <Text size="small" className="mt-4">
                If you believe you are eligible for a refund, contact us with
                your name, order or project details, payment information, and
                the reason for your request. We will review the request and
                respond accordingly.
              </Text>
            </section>

            <section>
              <Heading size="h2">10. Policy Updates</Heading>
              <Text size="small" className="mt-4">
                We may update this Refund Policy from time to time. The latest
                version will be published on this page.
              </Text>
            </section>

            <section>
              <Heading size="h2">11. Contact Us</Heading>
              <Text size="small" className="mt-4">
                For refund-related questions or requests, please contact us
                through the contact information provided on our website.
              </Text>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/privacy-policy')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/privacy-policy"!</div>
// }
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

const title = "Privacy Policy";
const description =
  "Learn how we collect, use, and protect information when you use our website and services.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `${title} — WeDu` },
      { name: "description", content: description },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <Section tone="white" padding="lg">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Heading size="hero">Privacy Policy</Heading>

          <Text size="small" className="mt-6">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect information when you use our website and
            services.
          </Text>

          <div className="mt-14 space-y-10">
            <section>
              <Heading size="h2">1. Information We Collect</Heading>
              <Text size="small" className="mt-4">
                We may collect information that you provide directly to us,
                including your name, email address, phone number, business
                information, website requirements, and other information
                necessary to provide our services.
              </Text>
            </section>

            <section>
              <Heading size="h2">2. Information Provided for Websites</Heading>
              <Text size="small" className="mt-4">
                When you request a website, you may provide information such as
                your profile details, astrology services, pricing, images,
                social media links, contact information, and other business
                content. This information is used to create and customize your
                website according to your requirements.
              </Text>
            </section>

            <section>
              <Heading size="h2">3. How We Use Information</Heading>
              <Text size="small" className="mt-4">
                We may use collected information to provide and improve our
                services, communicate with you, process requests and payments,
                provide customer support, customize websites, and maintain the
                security and functionality of our services.
              </Text>
            </section>

            <section>
              <Heading size="h2">4. Payments</Heading>
              <Text size="small" className="mt-4">
                Payments may be processed through third-party payment
                providers. We do not intend to store complete payment card
                information on our own systems. Payment providers may process
                information according to their own privacy policies.
              </Text>
            </section>

            <section>
              <Heading size="h2">5. Cookies and Analytics</Heading>
              <Text size="small" className="mt-4">
                Our website may use cookies or similar technologies to improve
                website functionality, understand how visitors use the website,
                and improve our services.
              </Text>
            </section>

            <section>
              <Heading size="h2">6. Third-Party Services</Heading>
              <Text size="small" className="mt-4">
                We may use third-party providers for hosting, payments,
                analytics, communication, booking functionality, or other
                services. These providers may process information according to
                their own policies.
              </Text>
            </section>

            <section>
              <Heading size="h2">7. Data Security</Heading>
              <Text size="small" className="mt-4">
                We take reasonable measures to protect information against
                unauthorized access, misuse, alteration, or disclosure.
                However, no internet-based service can guarantee complete
                security.
              </Text>
            </section>

            <section>
              <Heading size="h2">8. Data Retention</Heading>
              <Text size="small" className="mt-4">
                We retain information only for as long as reasonably necessary
                to provide our services, maintain business records, resolve
                disputes, comply with legal requirements, or protect our
                legitimate interests.
              </Text>
            </section>

            <section>
              <Heading size="h2">9. Your Choices</Heading>
              <Text size="small" className="mt-4">
                You may contact us if you want to request correction or
                clarification of information you have provided to us, subject
                to applicable legal and operational requirements.
              </Text>
            </section>

            <section>
              <Heading size="h2">10. Children's Privacy</Heading>
              <Text size="small" className="mt-4">
                Our services are intended for businesses and general users. We
                do not knowingly collect personal information from children for
                purposes unrelated to providing our services.
              </Text>
            </section>

            <section>
              <Heading size="h2">11. Updates to This Policy</Heading>
              <Text size="small" className="mt-4">
                We may update this Privacy Policy from time to time. Changes
                will be reflected on this page.
              </Text>
            </section>

            <section>
              <Heading size="h2">12. Contact Us</Heading>
              <Text size="small" className="mt-4">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact us through the contact
                information available on our website.
              </Text>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
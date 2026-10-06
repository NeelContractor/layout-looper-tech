// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/refund-policy')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/refund-policy"!</div>
// }
// 
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

/* ------------------------------------------------------------------ */
/*  EDIT THESE VALUES BEFORE GOING LIVE                                */
/* ------------------------------------------------------------------ */
const BUSINESS = {
  name: "Grahaura",
  email: "contactgrahaura@gmail.com",
  phone: "+91 91043 84812",
  lastUpdated: "5 October 2026",
  enquiryFee: "₹500", // Custom Plan enquiry fee
  miniBilling: "monthly", // TODO: "annually" | "monthly" | "one-time" (match your Terms)
};

const title = "Refund & Cancellation Policy";
const description =
  "Refund and cancellation policy for Grahaura's astrologer websites, custom software services, and enquiry fees.";

type Block = { title: string; paragraphs?: string[]; bullets?: string[]; after?: string };

const sections: Block[] = [
  {
    title: "1. About This Policy",
    paragraphs: [
      `This Refund & Cancellation Policy applies to payments made to ${BUSINESS.name} for our Mini Website Plan, our Custom Website & Software Plan, and the Custom Plan enquiry fee. Please read it carefully before making a payment. By paying us, you confirm that you have read and accepted this policy along with our Terms & Conditions.`,
    ],
  },
  {
    title: "2. Mini Website Plan",
    paragraphs: [
      "Our Mini Website Plan will be reviewed by our team after your registration. Once the required details have been verified, your personalised URL, selected template, and booking features will be set up and made available to you shortly.",
      "Because of this:",
    ],
    bullets: [
      "Fees paid for the Mini Website Plan are non-refundable once the website has been created or activated.",
      "Fees are not refunded for unused time after a voluntary cancellation or if you stop using the website.",
      "If your registration cannot be approved by us (for example, the details cannot be verified or the content is not allowed under our Terms & Conditions), and the website has not been activated, the amount you paid will be returned as described in section 9.",
      "If you have paid but your website has not been activated because of a payment or technical failure, please contact us and we will either activate it or return the amount, as described in section 9.",
    ],
  },
  {
    title: "3. Custom Plan Enquiry Fee",
    paragraphs: [
      `To start a Custom Plan enquiry, a fee of ${BUSINESS.enquiryFee} (plus applicable taxes) is charged. It covers our time for the requirement discussion and consultation meeting with the astrologer.`,
    ],
    bullets: [
      "The enquiry fee is non-refundable under all circumstances.",
      "It is not refunded if the astrologer decides not to go ahead with a custom project, does not agree to the quoted fees, or does not attend the scheduled meeting.",
      "It is not adjusted against or deducted from any later project fee.",
    ],
  },
  {
    title: "4. Custom Website & Software Plan",
    paragraphs: [
      "Custom projects are built specifically for each astrologer. The custom solution and its fees are explained to the astrologer during the consultation meeting, and it is entirely the astrologer's decision whether to accept or decline.",
    ],
    bullets: [
      "Once the astrologer accepts the quotation and makes a payment (advance or any milestone payment), all payments made are non-refundable in every case.",
      "This applies even if the astrologer later cancels, pauses, or stops the project, because the payment covers planning, design, development time, and resources reserved for the project.",
      "If the astrologer decides not to proceed after the meeting, no project payment is due, and the enquiry fee remains non-refundable as set out in section 3.",
    ],
  },
  {
    title: "5. Cancellation by the Client",
    paragraphs: [
      "You may cancel your plan or stop a request at any time. Cancelling means you stop using the service going forward. It does not entitle you to a refund, except as stated in this policy.",
    ],
    bullets: [
      `Mini Website Plan: to cancel, email us at ${BUSINESS.email} from your registered email address or phone number, mentioning your website URL. Your website stays active until the end of the period you have already paid for, and after that it may be suspended and later deleted. The plan is billed ${BUSINESS.miniBilling}.`,
      "Mini Website Plan renewals: to avoid being charged for the next period, please cancel before your renewal date. A renewal payment that has already been charged is non-refundable.",
      "Custom Plan enquiry and meeting: if you cancel the enquiry or the scheduled meeting, or do not attend, the enquiry fee is not refunded. We may reschedule a meeting once at our discretion if you give us reasonable advance notice.",
      "Custom Plan project: to cancel a project, please inform us in writing (email or WhatsApp). Work will stop from the date we receive your notice. No payment already made is refunded, and any payment that has become due under the agreed milestones up to that date remains payable.",
      "Ownership of Custom Plan deliverables passes to the client only after full payment, as set out in our Terms & Conditions. A cancelled project does not entitle you to receive unfinished work or source code unless we agree in writing.",
    ],
  },
  {
    title: "6. Cancellation or Suspension by Grahaura",
    paragraphs: [
      "We may suspend, cancel, or end a plan, website, or project in the following cases:",
    ],
    bullets: [
      "You break our Terms & Conditions, including posting prohibited, misleading, or unlawful content, or using the platform for fraud or misuse.",
      "Payment is overdue, or a payment is reversed or disputed.",
      "We are required to do so by law, a court, a payment partner or another authority.",
      "You do not provide the information, content, or approvals needed to continue a project for a long period after we have reminded you.",
    ],
    after:
      "In these cases, no refund is given for amounts already paid. If we cancel a plan for a reason that is entirely on our side and you have not received the service at all, we will return the amount paid for the part of the service that was not provided.",
  },
  {
    title: "7. Hosting, Downtime and Technical Issues",
    paragraphs: [
      "Our websites are hosted on cloud servers. Temporary downtime can happen because of server maintenance, upgrades, natural events, power or network failures, cyber attacks, or issues with the hosting provider or other third parties.",
    ],
    bullets: [
      "Such downtime does not entitle you to a refund, credit, or compensation.",
      "We make reasonable efforts to restore the service as soon as possible.",
      "If you face a technical issue with a service we have delivered, please contact us so that we can review and try to resolve it. A technical issue does not automatically result in a refund.",
    ],
  },
  {
    title: "8. Situations Where Refunds Are Not Given",
    bullets: [
      "Change of mind after payment, activation, or the start of development.",
      "Delays caused by the client, such as missing information, content, images, approvals, or late responses.",
      "Dissatisfaction with a design, feature, or choice that was already approved or that was part of the agreed scope.",
      "Requests for substantial changes or new functionality outside the agreed scope. These may need additional charges, not a refund.",
      "Lack of bookings, enquiries, or income from the website. We provide the platform and do not guarantee any business results.",
      "Website downtime or interruptions as described in section 7.",
      "Cancellation by the client as described in section 5.",
      "Suspension or termination of an account for breach of our Terms & Conditions, as described in section 6.",
    ],
  },
  {
    title: "9. Duplicate or Failed Payments",
    paragraphs: [
      "If a payment is charged twice by mistake, or the amount is deducted but the service was not activated because of a payment failure, we will correct it. The extra or unused amount will be returned to the original payment method, usually within 7 to 10 working days, subject to the payment gateway and your bank. We may ask for transaction details to verify the payment.",
    ],
  },
  {
    title: "10. Payments Made by End Users to Astrologers",
    paragraphs: [
      `${BUSINESS.name} is only a platform provider. When an End User books and pays an astrologer through a website built on our platform, the payment is processed through third-party payment partner and settled to the astrologer's linked account.`,
    ],
    bullets: [
      "We do not receive or hold these booking payments, and we are not the seller of the astrologer's service.",
      "Refunds, cancellations, rescheduling, and complaints for such bookings must be requested directly from the astrologer, whose own policy applies.",
      "If an astrologer cancels or reschedules an appointment, any refund or new slot is to be arranged by the astrologer, not by us.",
      "We are not responsible for any refund, dispute, or loss between an astrologer and an End User.",
      "Astrologers are responsible for resolving End User refund requests and any related chargebacks fairly and on time.",
    ],
  },
  {
    title: "11. Third-Party Services",
    paragraphs: [
      "Domains, hosting, payment gateways, SMS or email services, and other third-party tools may be governed by the refund and cancellation policies of their own providers. We are not responsible for the refund policies of independent third parties, and amounts paid directly to them are not refundable by us.",
    ],
  },
  {
    title: "12. Reporting a Payment Issue",
    paragraphs: [
      "If you believe you were charged incorrectly, contact us with your name, registered phone number or email, order or project details, payment reference or transaction ID, and a short description of the issue. We will review it and reply within a reasonable time. Approved amounts are returned as described in section 9.",
    ],
  },
  {
    title: "13. Policy Updates",
    paragraphs: [
      "We may update this Refund & Cancellation Policy from time to time. The latest version will be published on this page with a new 'last updated' date. The policy that applies to a payment is the one in force at the time you made it.",
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: [
      "For questions about payments, cancellations, or this policy, please contact us:",
    ],
    bullets: [`Email: ${BUSINESS.email}`, `Phone: ${BUSINESS.phone}`],
  },
];

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: `${title} — ${BUSINESS.name}` },
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
          <Heading size="hero">{title}</Heading>

          <Text size="small" className="mt-4">
            Last updated: {BUSINESS.lastUpdated}
          </Text>

          <Text size="small" className="mt-6">
            Please review this policy before purchasing our website or custom
            software services.
          </Text>

          <div className="mt-14 space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <Heading size="h2">{s.title}</Heading>

                {s.paragraphs?.map((p) => (
                  <Text key={p} size="small" className="mt-4">
                    {p}
                  </Text>
                ))}

                {s.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                {s.after && (
                  <Text size="small" className="mt-4">
                    {s.after}
                  </Text>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
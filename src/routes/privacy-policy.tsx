// import { createFileRoute } from '@tanstack/react-router

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

/* ------------------------------------------------------------------ */
/*  EDIT THESE VALUES BEFORE GOING LIVE                                */
/* ------------------------------------------------------------------ */
const BUSINESS = {
  name: "Grahaura",
  email: "contactgrahaura@gmail.com", // TODO: replace
  phone: "+91 91043 84812", // TODO: replace
  grievanceOfficer: "Grievance Officer, Grahaura", // TODO: add a real name
  grievanceEmail: "contactgrahaura@gmail.com", // TODO: replace
  lastUpdated: "5 October 2026",
};

const title = "Privacy Policy";
const description =
  "Learn how Grahaura collects, uses, and protects information when you use our website, astrologer websites, and services.";

type Block = { title: string; paragraphs?: string[]; bullets?: string[]; after?: string };

const sections: Block[] = [
  {
    title: "1. About This Policy",
    paragraphs: [
      `${BUSINESS.name} ("we", "us", "our") is a technology platform that helps astrologers build an online presence, showcase their services, and manage bookings and payments. This Privacy Policy explains how we collect, use, share, and protect personal information when you use our website, our platform, or a website built on our platform.`,
      "We follow applicable Indian laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023. By using our services, you agree to this policy.",
    ],
  },
  {
    title: "2. Who This Policy Covers",
    bullets: [
      "Astrologers and businesses (our clients) who buy a plan or enquire about our services.",
      "End Users who visit an astrologer's website built on our platform, and who make a booking or payment there.",
      "Visitors to our own website.",
    ],
  },
  {
    title: "3. Our Role: Platform Provider",
    paragraphs: [
      `For our clients' own information, we decide why and how it is used, so we act as the main data controller.`,
      "For End User information collected through an astrologer's website (for example booking details), the astrologer decides why it is collected and how it is used. We act only as a technology provider that stores and processes this data on the astrologer's behalf to run the platform. The astrologer is responsible for using that data lawfully and for their own privacy practices. Please read the astrologer's own policy, if they provide one, to understand how they use your data.",
    ],
  },
  {
    title: "4. Information We Collect",
    paragraphs: ["Depending on how you use our services, we may collect:"],
    bullets: [
      "From astrologers and clients: name, email address, phone number, business name, city, plan details, billing details, enquiry details, and communication with us (including notes from consultation meetings).",
      "For websites: profile details, photographs, introduction, astrology services, pricing, social media links, branding assets, and other content you provide.",
      "For payments: bank account, UPI, PAN, or other KYC details needed to set up payouts, which are collected and verified by third-party payment partner and not stored by us in full.",
      "From End Users: name, phone number, email address, preferred date and time, the service booked, and any details they choose to share, such as date, time, and place of birth, and questions for the astrologer.",
      "Technical information: IP address, device and browser type, pages visited, and cookies or similar identifiers.",
    ],
    after:
      "Birth details and the questions asked of an astrologer can be personal. We ask End Users to share only what they are comfortable sharing.",
  },
  {
    title: "5. How We Use Information",
    bullets: [
      "To create, customise, host, and maintain websites and booking systems.",
      "To schedule and run consultation meetings for custom projects and understand client requirements.",
      "To process plan payments, send invoices, and manage accounts.",
      "To enable End User bookings and payments and to deliver booking confirmations and reminders on the astrologer's behalf.",
      "To provide customer support and respond to your requests.",
      "To keep our services secure, prevent fraud and misuse, and fix technical problems.",
      "To improve our services and understand how they are used.",
      "To send service-related messages, such as plan renewals and important updates.",
      "To comply with legal obligations and enforce our Terms & Conditions.",
    ],
    after:
      "We do not sell personal information to anyone. We do not use End User data from astrologers' websites for our own marketing.",
  },
  {
    title: "6. Payments and third-party payment partner",
    paragraphs: [
      "Payments are processed by third-party payment partner, a third-party payment gateway, including through its Route feature that settles booking payments to the astrologer's linked account. Card, UPI, and net banking details are handled by third-party payment partner and are not stored on our systems. third-party payment partner processes data under its own privacy policy and terms.",
      "We receive only the information we need about a transaction, such as the amount, status, date, and reference number, to confirm bookings and show payment records.",
    ],
  },
  {
    title: "7. Sharing of Information",
    paragraphs: ["We share personal information only when necessary:"],
    bullets: [
      "With the astrologer: End User booking details are shared with the astrologer whose website was used.",
      "With service providers who help us run the platform, such as cloud hosting, payment gateways, email, SMS or WhatsApp messaging, analytics, and booking tools. They may only use the data to provide their services to us.",
      "When the law requires it, such as a court order or a request from a government authority, or to protect our rights, users, or the security of our services.",
      "In a business transfer, such as a merger or sale of our business, with the same level of protection.",
    ],
    after:
      "Astrologers are independent from us. Once an astrologer receives End User data, how it is used is the astrologer's responsibility, and we are not responsible for any misuse by an astrologer or any other person.",
  },
  {
    title: "8. Cookies and Analytics",
    paragraphs: [
      "We and the websites built on our platform may use cookies and similar technologies to keep the website working, remember preferences, understand how visitors use the website, and improve our services. You can control or delete cookies in your browser settings. Disabling some cookies may affect how parts of the website work.",
    ],
  },
  {
    title: "9. Third-Party Services and Links",
    paragraphs: [
      "We rely on third-party providers such as cloud hosting, payment gateways, messaging, and analytics services. Astrologers' websites may also link to external sites, including social media. These third parties have their own privacy policies, and we are not responsible for their practices. Servers or providers may be located outside India, in which case we take reasonable steps to keep your data protected.",
    ],
  },
  {
    title: "10. Data Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect information against unauthorised access, misuse, loss, alteration, or disclosure. These include access controls and secure cloud infrastructure. However, no internet-based service can guarantee complete security, and you share information at your own risk. Please keep your login details confidential and tell us at once if you think your account has been misused.",
    ],
  },
  {
    title: "11. Data Retention",
    paragraphs: [
      "We keep information only for as long as needed to provide our services, maintain business and tax records, resolve disputes, comply with legal requirements, and protect our legitimate interests. When a plan ends, website data may be kept for a limited period and then deleted or anonymised, unless the law requires us to keep it longer. Backups may take some time to be removed.",
    ],
  },
  {
    title: "12. Your Rights and Choices",
    paragraphs: ["Subject to applicable law, you may:"],
    bullets: [
      "Ask for access to the personal information we hold about you.",
      "Ask us to correct inaccurate or incomplete information.",
      "Ask us to delete your information, unless we must keep it by law or for a legitimate business reason.",
      "Withdraw your consent where we rely on it, which will not affect earlier lawful use.",
      "Nominate another person to exercise your rights if you are unable to.",
      "Make a complaint about how your information is handled.",
    ],
    after: `To use these rights, email us at ${BUSINESS.email}. For End User data on an astrologer's website, your request may need to go to the astrologer, and we will help pass it on where we can. We may need to verify your identity first.`,
  },
  {
  title: "13. Children's Privacy and Bookings for Children",
  paragraphs: [
    "Our services are meant for adults and businesses, and our platform is not directed at children. A person under 18 should not create an account or make a booking on their own.",
    "A parent or legal guardian may book a consultation for their child, and may share the child's details, such as name, date, time, and place of birth, for that purpose. By doing so, the parent or guardian confirms that they are the child's parent or legal guardian and that they consent to the child's information being collected and used for the booking.",
  ],
  bullets: [
    "We use a child's information only to provide the booked service, and not for advertising, tracking, or profiling the child.",
    "The booking must be made using the parent's or guardian's own contact and payment details.",
    "Astrologers must not take bookings directly from minors without a parent's or guardian's consent, and must keep a child's information confidential.",
  ],
  after:
    `If you believe a child has given us information without a parent's or guardian's consent, or if you want to correct or delete a child's information, please contact us at ${BUSINESS.email} and we will take appropriate steps.`,
},
  {
    title: "14. Responsibilities of Astrologers",
    bullets: [
      "Collect End User information only for providing their services and with proper notice and consent.",
      "Keep End User information confidential and never sell it or share it without a lawful basis.",
      "Respond to End User requests about their data and follow applicable privacy laws.",
      "Not misuse birth details, contact details, or questions shared by End Users for fraud, harassment, or unrelated marketing.",
    ],
    after:
      "We are not responsible for an astrologer's handling of End User data, as set out in our Terms & Conditions.",
  },
  {
    title: "15. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new 'last updated' date. If a change is significant, we may also tell you by email or through the website. Continued use of our services after an update means you accept the changes.",
    ],
  },
  {
    title: "16. Grievance Officer and Contact",
    paragraphs: [
      "If you have questions, concerns, or complaints about this Privacy Policy or how your information is handled, please contact us. We will try to respond within a reasonable time.",
    ],
    bullets: [
      `Grievance Officer: ${BUSINESS.grievanceOfficer}`,
      `Email: ${BUSINESS.grievanceEmail}`,
      `General support: ${BUSINESS.email}`,
      `Phone: ${BUSINESS.phone}`,
    ],
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `${title} — ${BUSINESS.name}` },
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
          <Heading size="hero">{title}</Heading>

          <Text size="small" className="mt-4">
            Last updated: {BUSINESS.lastUpdated}
          </Text>

          <Text size="small" className="mt-6">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect information when you use our website and
            services.
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
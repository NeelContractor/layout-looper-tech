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

/* ------------------------------------------------------------------ */
/*  EDIT THESE VALUES BEFORE GOING LIVE                                */
/* ------------------------------------------------------------------ */
const BUSINESS = {
  name: "Grahaura",
  email: "contactgrahaura@gmail.com", // TODO: replace
  phone: "+91 91043 84812", // TODO: replace
  city: "Ahmedabad, Gujarat", // TODO: jurisdiction city
  lastUpdated: "5 October 2026",
  miniDomain: "yourname.grahaura.com", // TODO: replace with real platform domain
  miniRenewal: "monthly", // TODO: "annually" | "monthly" | "one-time"
  platformFeeNote:
    "Payment gateway charges and any applicable platform fee will be shown clearly before you subscribe.", // TODO: edit
};

const title = "Terms & Conditions";
const description =
  "Terms and conditions for using Grahaura's astrologer websites, booking tools, and custom software services.";

type Block = { title: string; paragraphs?: string[]; bullets?: string[]; after?: string };

const sections: Block[] = [
  {
    title: "1. About Grahaura",
    paragraphs: [
      `${BUSINESS.name} ("we", "us", "our") is a technology provider. We build digital solutions for astrologers, helping them create an online presence, showcase their services, and manage appointments and payments through professional technology.`,
      "By accessing our website, purchasing a plan, or using any of our services, you agree to these Terms & Conditions. If you do not agree, please do not use our services.",
    ],
  },
  {
    title: "2. Definitions",
    bullets: [
      '"Client" or "Astrologer" means the person or business that purchases a plan from us.',
      '"End User" means a person who visits an astrologer\'s website and books or pays for a consultation.',
      '"Mini Website Plan" means our ready-to-use, template-based website with a personalised URL.',
      '"Custom Plan" means our Custom Website & Software Plan, built to the client\'s requirements.',
      '"Platform" means our website, dashboards, templates, booking system, and related tools.',
    ],
  },
  {
    title: "3. Our Plans",
    paragraphs: [
      "We currently offer two plans. Features and pricing are described on our website at the time of purchase.",
    ],
    bullets: [
      `Mini Website Plan (starting at ₹999): a personalised website on a platform URL such as ${BUSINESS.miniDomain}, including the astrologer's profile, photo, introduction, services, pricing, contact details, and an appointment booking system where End User payments are received directly into the astrologer's account through third-party payment partner. The website can be customised within our predefined templates (content, colours, images, and other available design options).`,
      "Custom Website & Software Plan: a fully customised website or software solution built around the client's brand, design, features, and business model, usually on the client's own domain such as yourname.com. Pricing is quoted individually based on the astrologer's requirements, and the final cost is agreed in writing before work begins.",
    ],
    after:
      '"Starting at" prices are indicative. The final price depends on the plan, features, and (for custom projects) the agreed scope. Taxes such as GST are charged where applicable.',
  },
  {
    title: "4. Eligibility and Accounts",
    bullets: [
      "You must be at least 18 years old and legally able to enter into a contract under Indian law.",
      "You must provide accurate, complete, and current information when registering.",
      "You are responsible for keeping your login credentials safe and for all activity under your account.",
      "One account is intended for one astrologer or business. Reselling or sharing access requires our written permission.",
    ],
  },
  {
    title: "5. Mini Website Plan: Specific Terms",
    bullets: [
      `Your personalised URL is provided on our domain for as long as your plan is active and paid. The plan is billed ${BUSINESS.miniRenewal}.`,
      "You do not own the platform subdomain, templates, or underlying code. You receive a limited, non-exclusive, non-transferable right to use them during your active plan.",
      "Template customisation is limited to the options we provide. Changes outside those options may require the Custom Plan.",
      "Several astrologers may use the same templates, so we do not guarantee that your design will be unique.",
      "We may choose a different URL if your requested one is taken, misleading, offensive, or infringes someone's trademark or name.",
      "We may apply reasonable fair-use limits on storage, bandwidth and images to keep the platform stable for everyone.",
    ],
  },
  {
    title: "6. Custom Website & Software Plan: Specific Terms",
    bullets: [
      "Enquiry and consultation fee: to start a Custom Plan enquiry, a fee of ₹500 (plus applicable taxes) must be paid. After payment, we will schedule a meeting with the astrologer to understand their requirements and needs.",
      "The enquiry fee is for the time spent on the consultation and requirement discussion. It is completely non-refundable in all cases, whether or not the astrologer decides to proceed with a custom project, and it is not adjusted against or deducted from any project fee.",
      "The custom solution, its scope, and its fees are explained to the astrologer during the meeting. The astrologer is free to accept or decline. Declining does not entitle the astrologer to any refund of the enquiry fee.",
      "If the astrologer agrees to proceed, the scope, features, design, timelines, pricing, and payment milestones are shared in a written quotation or agreement (email, WhatsApp, quotation, or contract) and must be accepted by the client before work begins. This agreement forms part of these Terms.",
      "Pricing for custom projects is quoted individually and depends on the features, design, integrations, development effort, and technical requirements.",
      "Requests outside the agreed scope are treated as change requests and may change the price and timeline. We will confirm any such change before starting that work.",
      "A reasonable number of revision rounds is included, as stated in your quotation. Additional revisions may be charged.",
      "Unless the agreement says otherwise, the client's own domain, hosting accounts, and third-party subscriptions (such as payment gateway, SMS, or email services) are paid for by the client and should be registered in the client's name.",
      "Ownership of the source code and custom work is as stated in the agreement. Unless the agreement says otherwise, we keep ownership of our pre-existing code, tools, libraries, and frameworks, and grant the client a licence to use them as part of the delivered project.",
      "Ownership of the final deliverables transfers to the client only after full payment has been received.",
      "Any booking, payment, or other feature we build is a technical tool only. The client is solely responsible for how it is used, including all dealings, payments, refunds, and disputes with their own customers, as set out in sections 7 and 9.",
      "Post-delivery support, maintenance, hosting, and feature updates are available only if they are included in the agreement or purchased separately.",
    ],
  },
  {
    title: "7. Platform Provider Only: Our Role and Non-Responsibility",
    paragraphs: [
      `${BUSINESS.name} is only a technology platform provider. We are not an astrology service provider, consultant, agent, marketplace, or intermediary, and we are not a party to any booking, consultation, or transaction between an astrologer and an End User.`,
    ],
    bullets: [
      "The astrologer is solely and fully responsible for their services, including the accuracy, quality, delivery, and outcome of any consultation, prediction, remedy, product, or advice.",
      "We do not verify, endorse, or guarantee any astrologer's qualifications, skills, claims, identity, or conduct, and we do not monitor the consultations that take place.",
      "We are not responsible or liable for any fraud, cheating, misrepresentation, dishonest or unethical conduct, harassment, misbehaviour, or any other unlawful or improper activity by an astrologer, an End User, or any other person using a website built on our platform.",
      "We are not responsible for any loss, damage, or dispute (financial, emotional, or otherwise) arising from an End User's reliance on an astrologer's advice or from any dealings between them, whether on or off the website.",
      "All disputes, complaints, refund requests, and claims between an astrologer and an End User must be resolved directly between them. The End User must not hold us responsible for these.",
      "We may, at our discretion and without obligation, suspend a website or share booking and payment records with authorities or payment partners where required by law or where we receive a credible complaint.",
    ],
    after:
      "Nothing in these Terms limits any responsibility that we cannot lawfully exclude under applicable Indian law.",
  },
  {
    title: "8. Client Responsibilities",
    bullets: [
      "Provide accurate information, images, branding assets, service details, pricing, and contact information.",
      "Make sure you have the legal right to use all content you give us, including photos, logos, text, music, and fonts.",
      "Respond to our questions and approve work within a reasonable time. Delays on your side may delay delivery.",
      "Keep your services, prices, availability, and contact details on the website up to date.",
      "Honour the appointments booked and paid for through your website, and handle End User refunds and complaints fairly.",
      "Follow all laws that apply to your business, including consumer protection, advertising, tax, and data protection laws.",
    ],
  },
  {
    title: "9. Bookings, Payments and Settlements",
    paragraphs: [
      "When an End User makes a booking on an astrologer's website, the payment is processed through third-party payment partner, a third-party payment gateway, using its Route feature. The amount paid for the booking is settled to the astrologer's linked bank account. We provide only the technical tools that connect the website to the payment gateway. We do not provide the astrologer's service, and we are not the seller of that service.",
    ],
    bullets: [
      "The astrologer is solely responsible for all payments, settlements, invoices, refunds, cancellations, rescheduling, and customer support relating to bookings made on their website.",
      "To receive payments, you must create a linked account with third-party payment partner and complete its KYC and verification. You also agree to third-party payment partner's terms and policies. Payouts may be delayed, held, or blocked until this is done.",
      "Settlement timelines, payment failures, and holds depend on third-party payment partner and your bank. We do not control them and are not liable for them.",
      "Refunds, chargebacks, and payment disputes raised by End Users are your responsibility to resolve with the End User. Any amount reversed, debited, or penalised by third-party payment partner in connection with them will be borne by you, and we may recover it from you if it is charged to us.",
      BUSINESS.platformFeeNote,
      "You are responsible for the accuracy of your bank and KYC details. We are not liable for payouts sent to incorrect details you provided.",
      "You are responsible for your own income tax, GST, invoicing, and all other tax and legal compliance on the money you receive.",
      "We do not hold, guarantee, or take responsibility for any End User's money, and we are not liable if a payment is delayed, lost, or disputed between you and the End User.",
      "We may suspend or disable the booking and payment features of a website if we reasonably suspect fraud, misuse, or a breach of these Terms, or if required by law, third-party payment partner, or another authority.",
    ],
  },
  {
    title: "10. Fees, Billing and Taxes",
    bullets: [
      "Plan fees must be paid in advance as described at checkout. Taxes are added where applicable.",
      "Mini Website Plan fees are charged for the billing period you select. If the plan is not renewed, the website may be suspended and later deleted.",
      "For Custom Plan projects, an advance payment is required before work starts. Remaining payments follow the milestones in the agreed quotation.",
      "Late or missed payments may pause work, delay delivery, or suspend your website.",
      "We may change our prices for future purchases or renewals. We will give reasonable notice before any change affects an existing plan.",
    ],
  },
  {
    title: "11. Refunds and Cancellation",
    bullets: [
      "Mini Website Plan: because the website is set up and made available after our team reviews and verifies your registration, fees are generally non-refundable once the website has been created or activated. Websites are hosted on cloud servers, and temporary downtime can happen due to server maintenance, upgrades, natural events, power or network failures, or issues with the hosting provider. Such downtime does not entitle you to a refund, credit, or compensation. We will make reasonable efforts to restore the service as soon as possible.",
      "Custom Plan enquiry fee: the ₹500 (+ applicable taxes) enquiry fee is non-refundable under all circumstances, including if the astrologer chooses not to proceed after the meeting, does not agree to the quoted fees, or does not attend the scheduled meeting.",
      "Custom Plan project fees: the custom solution and its fees are explained during the consultation meeting, and the astrologer is free to accept or decline. Once the astrologer accepts and pays the advance or any other payment, all payments made are non-refundable in every case, including if the astrologer cancels or stops the project midway, as they cover planning, design, development time, and resources reserved for the project.",
      "Refunds are not given for change of mind, lack of content or response from the client, dissatisfaction with a design choice that was approved, or unused periods after a voluntary cancellation.",
      "If a payment is charged twice by mistake, or is deducted but the service was not activated because of a payment failure, the extra or unused amount will be returned to the original payment method within 7 to 10 working days, subject to the payment gateway and bank.",
      `To report a payment issue, email ${BUSINESS.email} with your registered details and transaction information.`,
    ],
  },
  {
    title: "12. Delivery Timelines",
    paragraphs: [
      "Mini Website Plan websites are usually activated shortly after you complete the setup and payment. Custom Plan timelines are agreed in writing. All timelines are estimates and depend on how quickly you provide content, feedback, and approvals, as well as technical complexity. Delays caused by missing information, late approvals, or third-party services may extend the timeline.",
    ],
  },
  {
    title: "13. Content, Intellectual Property and Licence",
    bullets: [
      "You keep ownership of the content you provide (text, photos, logos, branding). You give us a limited licence to host, display, and process it so that we can deliver the service.",
      `The platform, templates, designs, source code, and the ${BUSINESS.name} name and logo belong to us and are protected by intellectual property laws. You may not copy, resell, reverse engineer, or redistribute them.`,
      "You are fully responsible for any claim that your content infringes the rights of a third party. You agree to indemnify us against such claims.",
      "We may display a small 'Powered by Grahaura' credit on websites, and may showcase your website in our portfolio or marketing, unless you ask us in writing not to (Custom Plan clients can agree otherwise in their agreement).",
    ],
  },
  {
    title: "14. Acceptable Use and Prohibited Content",
    paragraphs: ["You agree not to use our services to:"],
    bullets: [
      "Break any law, or carry out fraud, cheating, or deceptive practices.",
      "Make false or misleading claims, such as guaranteeing results, promising miracle cures, or claiming certainty about health, legal, financial, or life-and-death outcomes.",
      "Promote black magic, illegal remedies, or practices that exploit fear, grief, or vulnerability, or that are prohibited by applicable law.",
      "Offer or promote medical, legal, or financial advice you are not qualified to give.",
      "Publish hateful, abusive, obscene, defamatory, or discriminatory content.",
      "Infringe copyrights, trademarks, or privacy rights, or impersonate another person or astrologer.",
      "Send spam, distribute malware, or attempt to hack, overload, or disrupt our systems.",
      "Use the platform for any purpose that could harm our services, systems, or reputation.",
    ],
  },
  {
    title: "15. Disclaimer on Astrology",
    paragraphs: [
      "Astrology is a belief-based practice, and predictions and remedies are not scientifically proven. Content on astrologers' websites is for guidance and general information only. It is not a substitute for professional medical, legal, financial, or psychological advice. End Users should use their own judgement, and we are not responsible for decisions made based on any astrologer's advice.",
    ],
  },
  {
    title: "16. Privacy and Data Protection",
    paragraphs: [
      "We collect and process personal data in line with our Privacy Policy and applicable Indian laws, including the Digital Personal Data Protection Act, 2023.",
    ],
    bullets: [
      "For End User data collected through your website (such as names, contact details, birth details, and booking history), you are responsible for using it lawfully, keeping it confidential, and using it only to provide your services.",
      "You must not sell, misuse, or share End User data without a lawful basis and their consent.",
      "We process this data on your behalf only to run the platform, and take reasonable security measures to protect it.",
      "No system is completely secure, and we cannot guarantee absolute security of data transmitted over the internet.",
    ],
  },
  {
    title: "17. Third-Party Services",
    paragraphs: [
      "Our services rely on third-party providers such as hosting, domain registrars, payment gateways, SMS and email services, video or calling tools, analytics, and other integrations. These are governed by their own terms and policies. We are not responsible for their downtime, price changes, policy changes, or actions, including account holds by a payment gateway.",
    ],
  },
  {
    title: "18. Availability and Maintenance",
    paragraphs: [
      "We work to keep the platform available and reliable, but we do not promise uninterrupted or error-free service. We may carry out maintenance, updates, or improvements that cause temporary interruptions. We take reasonable backups, but you should keep your own copies of important content, as we are not responsible for data loss.",
    ],
  },
  {
    title: "19. Suspension and Termination",
    bullets: [
      "You may stop using our services at any time. Cancelling does not entitle you to a refund except as described in the Refunds section.",
      "We may suspend or terminate your website or account, with or without notice, if you breach these Terms, fail to pay, post prohibited content, or if required by law or a payment partner.",
      "On termination, your website and access may be disabled, and your content may be deleted after a reasonable period. Custom Plan deliverables already fully paid for remain yours as per the agreement.",
      "Sections that by nature should continue (such as payments owed, intellectual property, liability, and dispute resolution) will survive termination.",
    ],
  },
  {
    title: "20. Limitation of Liability",
    paragraphs: [
      "We will make reasonable efforts to provide reliable services. However, to the maximum extent permitted by law, we are not responsible for interruptions, failures, data loss, loss of income or bookings, or issues caused by third-party services, hosting providers, internet connectivity, payment gateways, or circumstances beyond our reasonable control.",
      "As a platform provider only, we are not liable for the acts, omissions, advice, services, or conduct of any astrologer or End User, including any fraud, dishonesty, or unlawful activity, or for any payment, refund, or settlement dispute between them.",
      "Our total liability for any claim relating to our services is limited to the amount you paid us for the plan in the 12 months before the claim arose (or, for a Custom Plan, the amount paid for the affected project). We are not liable for indirect, incidental, or consequential damages.",
    ],
  },
  {
    title: "21. Indemnity",
    paragraphs: [
      "You agree to protect and compensate us against any claims, losses, penalties, or expenses (including reasonable legal fees) arising from your content, your astrology services, your dealings with End Users, any payment, refund, or chargeback dispute, your breach of these Terms, or your violation of any law or third-party rights.",
    ],
  },
  {
    title: "22. Force Majeure",
    paragraphs: [
      "Neither party is liable for delays or failures caused by events outside reasonable control, such as natural disasters, power or internet outages, government action, strikes, cyber attacks, or third-party platform failures.",
    ],
  },
  {
    title: "23. Changes to Services and Terms",
    paragraphs: [
      "We may update, modify, or improve our services, features, pricing, and technical specifications from time to time. Changes to pricing or features apply to future purchases and renewals. We may also update these Terms when necessary. The updated version will be published on this page with a new 'last updated' date. Continued use of our services after changes means you accept the updated Terms.",
    ],
  },
  {
  title: "24. Governing Law and Jurisdiction",
  paragraphs: [
    "These Terms & Conditions, and any dispute arising out of or in connection with our services, are governed by the laws of India.",
    "We encourage you to contact us first so that we can try to resolve any concern amicably. If a dispute cannot be resolved this way, it will be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India only. By using our services, you agree that no other court will have jurisdiction over any claim, dispute, or legal proceeding relating to us or our services.",
  ],
},
  {
    title: "25. General",
    bullets: [
      "These Terms, together with any written agreement or quotation for your plan, form the entire agreement between you and us.",
      "If any part of these Terms is found invalid, the rest remains in effect.",
      "Our failure to enforce a right is not a waiver of that right.",
      "You may not transfer your rights under these Terms without our written consent.",
      "Communication from us may be sent by email, phone, SMS, or WhatsApp to the details you provide.",
    ],
  },
  {
    title: "26. Contact Us",
    paragraphs: [
      "If you have questions about these Terms & Conditions, please contact us:",
    ],
    bullets: [
      `Email: ${BUSINESS.email}`,
      `Phone: ${BUSINESS.phone}`,
    ],
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: `${title} — ${BUSINESS.name}` },
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
          <Heading size="hero">{title}</Heading>

          <Text size="small" className="mt-4">
            Last updated: {BUSINESS.lastUpdated}
          </Text>

          <Text size="small" className="mt-6">
            Please read these terms carefully before using our website or
            purchasing our services. By using {BUSINESS.name}, you agree to
            be bound by them.
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
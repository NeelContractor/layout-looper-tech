// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { ButtonLink, ButtonRoute } from "@/components/ui/BrandButton";
// import { Heading, Text } from "@/components/ui/Typography";
// import { pricing } from "@/content/site";
// import { cn } from "@/lib/utils";

// export type Plan = {
//   badge?: string;
//   name: string;
//   currency: string;
//   price: string;
//   period: string;
//   description: string;
//   validity: string;
//   cta: { label: string; href: string };
// };

// type PlanCardProps = Plan & {
//   /** Price number size in px. */
//   priceSize?: number;
//   className?: string;
// };

// /** Black membership card with an optional yellow "Best Value" tab. */
// export function PlanCard({
//   badge,
//   name,
//   currency,
//   price,
//   period,
//   description,
//   validity,
//   cta,
//   priceSize = 70,
//   className,
// }: PlanCardProps) {
//   return (
//     <div className={cn("relative min-w-0 pt-5", className)}>
//       {badge && (
//         <span className="absolute right-6 top-0 z-10 bg-brand-yellow px-3 py-1 font-body text-[0.8125rem] text-brand-ink">
//           {badge}
//         </span>
//       )}
//       <div className="rounded-card bg-brand-ink px-8 py-9 text-primary-foreground sm:px-10">
//         <Text size="lead" tone="light" className="text-[1.25rem]">
//           {name}
//         </Text>
//         <div className="mt-3 flex items-start gap-1">
//           <span className="font-body text-[1.125rem] leading-tight">{currency}</span>
//           <span
//             className="font-body leading-[0.95]"
//             style={{ fontSize: priceSize, lineHeight: 0.95 }}
//           >
//             {price}
//           </span>
//         </div>
//         <Text tone="light" className="mt-1 text-[0.75rem]">
//           {period}
//         </Text>
//         <Text tone="light" className="mt-5">
//           {description}
//         </Text>
//         <Text tone="light" className="mt-8">
//           {validity}
//         </Text>
//         <ButtonLink
//           href={cta.href}
//           variant="light"
//           size="md"
//           radius="sm"
//           fullWidth
//           className="mt-6"
//         >
//           {cta.label}
//         </ButtonLink>
//       </div>
//     </div>
//   );
// }

// type PricingProps = {
//   title?: string;
//   body?: string;
//   cta?: { label: string; to: "/pricing-plans" };
//   plans?: Plan[];
//   className?: string;
// };

// export function Pricing({
//   title = pricing.title,
//   body = pricing.body,
//   cta = pricing.cta,
//   plans = pricing.plans,
//   className,
// }: PricingProps) {
//   return (
//     <Section tone="surface" padding="lg" className={className}>
//       <Container>
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
//           <div className="min-w-0">
//             <Heading size="h2">{title}</Heading>
//             <Text size="small" className="mt-8 max-w-xl">
//               {body}
//             </Text>
//             <ButtonRoute to={cta.to} variant="solid" size="md" radius="sm" className="mt-10">
//               {cta.label}
//             </ButtonRoute>
//           </div>
//           <div className="grid min-w-0 gap-8">
//             {plans.map((plan) => (
//               <PlanCard key={plan.name} {...plan} />
//             ))}
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }
// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { ButtonLink } from "@/components/ui/BrandButton";
// import { Heading, Text } from "@/components/ui/Typography";
// import { pricing } from "@/content/site";
// import { cn } from "@/lib/utils";

// export type Plan = {
//   badge?: string;
//   name: string;
//   currency: string;
//   price: string;
//   period: string;
//   description: string;
//   validity: string | string[];
//   features?: string[];
//   cta: {
//     label: string;
//     href: string;
//   };
// };

// type PlanCardProps = Plan & {
//   /** Price number size in px. */
//   priceSize?: number;
//   className?: string;
// };

// /** Black pricing card with the existing yellow accent and theme. */
// export function PlanCard({
//   badge,
//   name,
//   currency,
//   price,
//   period,
//   description,
//   validity,
//   features,
//   cta,
//   priceSize = 70,
//   className,
// }: PlanCardProps) {
//   return (
//     <div className={cn("relative min-w-0 pt-5", className)}>
//       {badge && (
//         <span className="absolute right-6 top-0 z-10 bg-brand-yellow px-3 py-1 font-body text-[0.8125rem] text-brand-ink">
//           {badge}
//         </span>
//       )}

//       <div className="rounded-card bg-brand-ink px-7 py-9 text-primary-foreground sm:px-8">
//         {/* Plan name */}
//         <Text
//           size="lead"
//           tone="light"
//           className="text-[1.15rem]"
//         >
//           {name}
//         </Text>

//         {/* Price */}
//         <div className="mt-3 flex items-start gap-1">
//           <span className="font-body text-[1.125rem] leading-tight">
//             {currency}
//           </span>

//           <span
//             className="font-body leading-[0.95]"
//             style={{
//               fontSize: priceSize,
//               lineHeight: 0.95,
//             }}
//           >
//             {price}
//           </span>
//         </div>

//         {/* Period */}
//         <Text
//           tone="light"
//           className="mt-1 text-[0.75rem]"
//         >
//           {period}
//         </Text>

//         {/* Description */}
//         <Text
//           tone="light"
//           className="mt-5"
//         >
//           {description}
//         </Text>

//         {/* Features */}
//         {features && features.length > 0 && (
//           <div className="mt-7 space-y-3">
//             {features.map((feature) => (
//               <div
//                 key={feature}
//                 className="flex items-start gap-2"
//               >
//                 <span className="mt-0.5 shrink-0 text-brand-yellow">
//                   ✓
//                 </span>

//                 <Text
//                   tone="light"
//                   size="small"
//                   className="leading-snug"
//                 >
//                   {feature}
//                 </Text>
//               </div>
//             ))}
//           </div>
//         )}

//        {/* Validity / Important Information */}
// {Array.isArray(validity) ? (
//   <div className="mt-7 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3">
//     <div className="space-y-2">
//       {validity.map((item) => (
//         <div
//           key={item}
//           className="flex items-start gap-2"
//         >
//           <span className="mt-0.5 shrink-0 text-brand-yellow text-sm">
//             ✓
//           </span>

//           <Text
//             tone="light"
//             size="small"
//             className="leading-snug"
//           >
//             {item}
//           </Text>
//         </div>
//       ))}
//     </div>
//   </div>
// ) : (
//   <Text
//     tone="light"
//     className="mt-8"
//   >
//     {validity}
//   </Text>
// )}

//         {/* CTA */}
//         <ButtonLink
//           href={cta.href}
//           variant="light"
//           size="md"
//           radius="sm"
//           fullWidth
//           className="mt-6"
//         >
//           {cta.label}
//         </ButtonLink>
//       </div>
//     </div>
//   );
// }

// type PricingProps = {
//   plans?: Plan[];
//   className?: string;
// };

// export function Pricing({
//   plans = pricing.plans,
//   className,
// }: PricingProps) {
//   return (
//     <Section
//       id="pricing"
//       tone="surface"
//       padding="lg"
//       className={className}
//     >
//       <Container>
//         {/* Centered Heading */}
//         <Heading
//           size="hero"
//           align="center"
//           className="mx-auto"
//         >
//           Pricing Plans
//         </Heading>

//         {/* Short intro */}
//         <Text
//           size="lead"
//           align="center"
//           className="mx-auto mt-6 max-w-2xl"
//         >
//           {pricing.body}
//         </Text>

//         {/* Pricing Cards */}
//         <div className="mt-14 grid min-w-0 gap-8 md:grid-cols-2">
//           {plans.map((plan) => (
//             <PlanCard
//               key={plan.name}
//               {...plan}
//             />
//           ))}
//         </div>
//       </Container>
//     </Section>
//   );
// }
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/BrandButton";
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
  validity: string | string[];
  features?: string[];
  cta: {
    label: string;
    href: string;
  };
};

type PlanCardProps = Plan & {
  /** Price number size in px. */
  priceSize?: number;
  className?: string;
};

/** Black pricing card with the existing yellow accent and theme. */
export function PlanCard({
  badge,
  name,
  currency,
  price,
  period,
  description,
  validity,
  features,
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

      <div className="rounded-card bg-brand-ink px-7 py-9 text-primary-foreground sm:px-8">
        {/* Plan name */}
        <Text
          size="lead"
          tone="light"
          className="text-[1.15rem]"
        >
          {name}
        </Text>

        {/* Price + Consultation Information */}
        <div className="mt-3 flex items-center justify-between gap-5">
          {/* Price */}
          <div className="shrink-0">
            <div className="flex items-start gap-1">
              <span className="font-body text-[1.125rem] leading-tight">
                {currency}
              </span>

              <span
                className="font-body leading-[0.95]"
                style={{
                  fontSize: priceSize,
                  lineHeight: 0.95,
                }}
              >
                {price}
              </span>
            </div>

            {/* Period */}
            <Text
              tone="light"
              className="mt-1 text-[0.75rem]"
            >
              {period}
            </Text>
          </div>

          {/* Consultation Points */}
          {name === "Custom Website + Software" &&
            Array.isArray(validity) && (
              <div className="min-w-0 flex-1 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="space-y-2">
                  {validity.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-0.5 shrink-0 text-sm text-brand-yellow">
                        ✓
                      </span>

                      <Text
                        tone="light"
                        size="small"
                        className="leading-snug"
                      >
                        {item}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>

        {/* Description */}
        <Text
          tone="light"
          className="mt-5"
        >
          {description}
        </Text>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mt-7 space-y-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2"
              >
                <span className="mt-0.5 shrink-0 text-brand-yellow">
                  ✓
                </span>

                <Text
                  tone="light"
                  size="small"
                  className="leading-snug"
                >
                  {feature}
                </Text>
              </div>
            ))}
          </div>
        )}

        {/* Validity for non-custom plans */}
        {name !== "Custom Website + Software" && (
          <>
            {Array.isArray(validity) ? (
              <div className="mt-7 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="space-y-2">
                  {validity.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-0.5 shrink-0 text-sm text-brand-yellow">
                        ✓
                      </span>

                      <Text
                        tone="light"
                        size="small"
                        className="leading-snug"
                      >
                        {item}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Text
                tone="light"
                className="mt-8"
              >
                {validity}
              </Text>
            )}
          </>
        )}

        {/* CTA */}
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
  plans?: Plan[];
  className?: string;
};

export function Pricing({
  plans = pricing.plans,
  className,
}: PricingProps) {
  return (
    <Section
      id="pricing"
      tone="surface"
      padding="lg"
      className={className}
    >
      <Container>
        {/* Centered Heading */}
        <Heading
          size="hero"
          align="center"
          className="mx-auto"
        >
          Pricing Plans
        </Heading>

        {/* Short intro */}
        <Text
          size="lead"
          align="center"
          className="mx-auto mt-6 max-w-2xl"
        >
          {pricing.body}
        </Text>

        {/* Pricing Cards */}
        <div className="mt-14 grid min-w-0 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
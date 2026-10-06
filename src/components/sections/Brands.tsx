// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { Heading, Text } from "@/components/ui/Typography";
// import { brands } from "@/content/site";
// import { cn } from "@/lib/utils";

// type BrandsProps = {
//   title?: string;
//   body?: string;
//   logos?: { src: string; alt: string }[];
//   /** Logo height in px. */
//   logoHeight?: number;
//   columns?: 2 | 3 | 4;
//   className?: string;
// };

// /** Pink diagonal band with a grid of client logos. */
// export function Brands({
//   title = brands.title,
//   body = brands.body,
//   logos = brands.logos,
//   logoHeight = 72,
//   columns = 4,
//   className,
// }: BrandsProps) {
//   const gridCols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" }[columns];

//   return (
//     <Section tone="pink" padding="xl" slant="top" className={className}>
//       <Container>
//         <Heading size="h2">{title}</Heading>
//         <Text size="small" className="mt-6 max-w-xl">
//           {body}
//         </Text>

//         <div className={cn("mt-16 grid grid-cols-2 gap-y-14 gap-x-8", gridCols)}>
//           {logos.map((logo) => (
//             <div key={logo.alt} className="flex items-center justify-center">
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 style={{ height: logoHeight }}
//                 className="w-auto object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </Section>
//   );
// }
// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { Heading, Text } from "@/components/ui/Typography";
// import { brands } from "@/content/site";
// import { cn } from "@/lib/utils";

// type BrandsProps = {
//   title?: string;
//   body?: string;
//   logos?: { src: string; alt: string }[];
//   /** Logo height in px. */
//   logoHeight?: number;
//   columns?: 2 | 3 | 4;
//   className?: string;
// };

// /**
//  * Custom website & software showcase.
//  * Keeps the existing pink section and visual system,
//  * but uses the space to present personalized solutions.
//  */
// export function Brands({
//   title = brands.title,
//   body = brands.body,
//   logos = brands.logos,
//   logoHeight = 72,
//   columns = 4,
//   className,
// }: BrandsProps) {
//   const gridCols = {
//     2: "sm:grid-cols-2",
//     3: "sm:grid-cols-3",
//     4: "sm:grid-cols-4",
//   }[columns];

//   return (
//     <Section
//     id = "custom-solutions"
//       tone="pink"
//       padding="xl"
//       slant="top"
//       className={className}
//     >
//       <Container>

//         {/* Heading */}
//         <div className="max-w-2xl">
//           <Heading size="h2">
//             {title}
//           </Heading>

//           <Text size="small" className="mt-6 max-w-xl">
//             {body}
//           </Text>
//         </div>


//         {/* Custom capabilities */}
//         <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
//           <span>Custom Website</span>
//           <span>•</span>
//           <span>Booking System</span>
//           <span>•</span>
//           <span>Dashboard</span>
//           <span>•</span>
//           <span>Client Management</span>
//         </div>


//         {/* Visual Showcase */}
//         <div
//           className={cn(
//             "mt-14 grid grid-cols-2 gap-6 sm:gap-8",
//             gridCols,
//           )}
//         >
//           {logos.map((logo) => (
//             <div
//               key={logo.alt}
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 overflow-hidden
//                 rounded-2xl
//                 bg-white/70
//                 p-4
//               "
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 style={{ maxHeight: logoHeight * 2 }}
//                 className="h-auto w-full object-contain"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>


//         {/* Bottom CTA */}
//         <div className="mt-12">

//           <Text size="small" className="max-w-xl">
//             Need something completely personalized? We can build a digital
//             platform around your business, workflow and requirements.
//           </Text>

//           <div className="mt-6 flex flex-wrap items-center gap-4">

//             <span className="text-base font-semibold">
//               Custom Website + Software
//             </span>

//             <span className="rounded-full bg-brand-maroon px-4 py-2 text-sm font-semibold text-white">
//               Starting at ₹15,000
//             </span>

//           </div>

//         </div>

//       </Container>
//     </Section>
//   );
// }
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { brands } from "@/content/site";
import { cn } from "@/lib/utils";

type BrandsProps = {
  title?: string;
  body?: string;
  logos?: { src: string; alt: string }[];
  /** Logo height in px. */
  logoHeight?: number;
  columns?: 2 | 3 | 4;
  className?: string;
};

/**
 * Custom website & software showcase.
 * Keeps the existing pink section and visual system,
 * but uses the space to present personalized solutions.
 */
export function Brands({
  title = brands.title,
  body = brands.body,
  logos = brands.logos,
  logoHeight = 72,
  columns = 4,
  className,
}: BrandsProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  }[columns];

  return (
    <Section
      id="custom-solutions"
      tone="pink"
      padding="xl"
      slant="top"
      className={className}
    >
      <Container>

        {/* Heading */}
        <div className="max-w-2xl">
          <Heading size="h2">
            {title}
          </Heading>

          <Text size="small" className="mt-6 max-w-xl">
            {body}
          </Text>
        </div>

        {/* Custom capabilities */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <span>Custom Website</span>
          <span>•</span>
          <span>Booking System</span>
          <span>•</span>
          <span>Dashboard</span>
          <span>•</span>
          <span>Client Management</span>
        </div>

        {/* Visual Showcase */}
        <div
          className={cn(
            "mt-14 grid grid-cols-2 gap-6 sm:gap-8",
            gridCols,
          )}
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-white/70
                p-4
              "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxHeight: logoHeight * 2 }}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">

          <Text size="small" className="max-w-xl">
            Need something completely personalized? We can build a digital
            platform around your business, workflow and requirements.
          </Text>

          {/* Custom Software Heading + Consultation Fee */}
          <div className="mt-6 flex flex-wrap items-center gap-4">

            <span className="text-base font-semibold">
              Custom Website + Software
            </span>

            <span className="rounded-full bg-brand-maroon px-4 py-2 text-sm font-semibold text-white">
              ₹500 + GST Consultation Fee
            </span>

          </div>

          {/* Consultation Information */}
          <div className="mt-5 max-w-2xl">

            <Text size="small">
              You’re just one step away from your personalised website and
              software. Get in touch with our team and we’ll connect with you
              shortly to understand your requirements.
            </Text>

            <Text size="small" className="mt-3">
              The ₹500 + GST fee is only for the initial consultation. Your
              final project pricing will be proposed separately based on your
              requirements.
            </Text>

            <Text
              size="small"
              className="mt-3 font-semibold"
            >
              Please note: The consultation fee is non-refundable.
            </Text>

          </div>

        </div>

      </Container>
    </Section>
  );
}
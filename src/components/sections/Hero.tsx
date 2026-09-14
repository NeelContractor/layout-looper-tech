// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { ButtonLink } from "@/components/ui/BrandButton";
// import { Heading, Text } from "@/components/ui/Typography";
// import { FeatureItem } from "@/components/ui/FeatureIcon";
// import { hero } from "@/content/site";

// type HeroProps = {
//   title?: string;
//   subtitle?: string;
//   cta?: { label: string; href: string };
//   image?: string;
//   imageAlt?: string;
//   highlights?: { icon: string; label: string }[];
//   /** Illustration max width in px. */
//   imageWidth?: number;
//   className?: string;
// };

// export function Hero({
//   title = hero.title,
//   subtitle = hero.subtitle,
//   cta = hero.cta,
//   image = hero.image,
//   imageAlt = hero.imageAlt,
//   highlights = hero.highlights,
//   imageWidth = 640,
//   className,
// }: HeroProps) {
//   return (
//     <Section tone="white" padding="lg" className={className}>
//       <Container>
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
//           <div className="min-w-0 order-2 lg:order-1">
//             <Heading size="hero">{title}</Heading>
//             <Text size="lead" className="mt-6 max-w-md">
//               {subtitle}
//             </Text>
//             <ButtonLink href={cta.href} variant="solid" size="md" radius="sm" className="mt-8">
//               {cta.label}
//             </ButtonLink>

//             <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
//               {highlights.map((item) => (
//                 <FeatureItem key={item.label} icon={item.icon} label={item.label} />
//               ))}
//             </div>
//           </div>

//           <div className="order-1 min-w-0 lg:order-2">
//             <img
//               src={image}
//               alt={imageAlt}
//               style={{ maxWidth: imageWidth }}
//               className="mx-auto h-auto w-full"
//             />
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/BrandButton";
import { Heading, Text } from "@/components/ui/Typography";
import { hero } from "@/content/site";

type HeroProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  /** Illustration max width in px. */
  imageWidth?: number;
  className?: string;
};

export function Hero({
  title = hero.title,
  subtitle = hero.subtitle,
  cta = hero.cta,
  image = hero.image,
  imageAlt = hero.imageAlt,
  imageWidth = 640,
  className,
}: HeroProps) {
  return (
    <Section tone="white" padding="lg" className={className}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          
          {/* Left Content */}
          <div className="min-w-0 order-2 lg:order-1">
            <Heading size="hero">{title}</Heading>

            <Text size="lead" className="mt-6 max-w-md">
              {subtitle}
            </Text>

            <ButtonLink
              href={cta.href}
              variant="solid"
              size="md"
              radius="sm"
              className="mt-8"
            >
              {cta.label}
            </ButtonLink>
          </div>

          {/* Right Illustration */}
          <div className="order-1 min-w-0 lg:order-2">
            <img
              src={image}
              alt={imageAlt}
              style={{ maxWidth: imageWidth }}
              className="mx-auto h-auto w-full"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}
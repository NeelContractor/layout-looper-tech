import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section
  tone="white"
  padding="lg"
  className="!py-4"
>
      <Container>

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-maroon">
            Getting Started Is Easy
          </p>

          <Heading size="h2" className="mt-3">
            {howItWorks.title}
          </Heading>

          <Text size="small" className="mt-5 max-w-xl">
            {howItWorks.body}
          </Text>
        </div>


        {/* Steps */}
        <div className="relative mt-14">

          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-7
              hidden
              border-t
              border-dashed
              border-black/20
              lg:block
            "
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="relative min-w-0"
              >

                {/* Number */}
                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-black
                    text-base
                    font-semibold
                    ${step.background}
                  `}
                >
                  {step.number}
                </div>


                {/* Content */}
                <div className="mt-6">

                  <h3 className="text-lg font-semibold leading-tight">
                    {step.title}
                  </h3>

                  <Text
                    size="small"
                    className="mt-3 max-w-xs"
                  >
                    {step.description}
                  </Text>

                </div>

              </div>
            ))}

          </div>
        </div>


        {/* Reassurance */}
        <div className="mt-14 flex items-center gap-3">

          <span
            aria-hidden="true"
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-black
              text-sm
              text-white
            "
          >
            ✦
          </span>

          <p className="text-sm font-medium">
            {howItWorks.reassurance}
          </p>

        </div>

      </Container>
    </Section>
  );
}
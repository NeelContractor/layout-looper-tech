import { Text } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type TestimonialCardProps = {
  quote: FAQItem[];
  author: string;

  /** Border thickness in px. */
  borderWidth?: number;

  className?: string;
};

/** Browser-window styled FAQ card with expandable questions. */
export function TestimonialCard({
  quote,
  author,
  borderWidth = 2,
  className,
}: TestimonialCardProps) {
  return (
    <figure className={cn("relative flex h-full min-w-0", className)}>
      <div
        className="overflow-hidden rounded-card border-foreground bg-background"
        style={{ borderWidth }}
      >
        {/* Browser header */}
        <div
          className="flex items-center gap-2 bg-brand-yellow px-4"
          style={{
            height: 32,
            borderBottom: `${borderWidth}px solid var(--foreground)`,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-brand-ink"
            />
          ))}
        </div>

        {/* FAQ questions */}
        <div className="px-7 py-7 sm:px-8">
          <div className="space-y-4">
            {quote.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-foreground/15 pb-4 last:border-b-0 last:pb-0"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3">
                  {/* Number */}
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-bold">
                    {index + 1}
                  </span>

                  {/* Question + icon */}
                  <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
                    <Text
                      size="small"
                      weight="bold"
                      className="leading-snug"
                    >
                      {item.question}
                    </Text>

                    {/* Expand icon */}
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-sm leading-none transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                {/* Answer */}
                <div className="ml-10 mt-3 pr-2">
                  <Text size="small" className="leading-relaxed">
                    {item.answer}
                  </Text>
                </div>
              </details>
            ))}
          </div>

          {/* Category */}
          <figcaption className="mt-7">
            <Text size="small" weight="bold">
              {author}
            </Text>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
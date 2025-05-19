import { ArrowRight, Database, PiggyBank, RotateCcw, SlidersHorizontal, Timer, X } from "lucide-react";
import Section from "@/components/section";
import SectionTwoColumns, { SectionTwoColumnsItem } from "../section-two-columns";

const items: SectionTwoColumnsItem[] = [
  {
    icon: X,
    title: "Low quality",
    description: "Traditional crawlers extract noise (ads, navigation, cookies), not content.",
  },

  {
    icon: Timer,
    title: "Single-threaded",
    description: "It takes hours or days to crawl what should take minutes on a distributed infrastructure.",
  },
  {
    icon: RotateCcw,
    title: "No failure recovery",
    description: "One error means starting over from the beginning of the queue.",
  },
  {
    icon: PiggyBank,
    title: "Expensive per-page fee",
    description: "Costs add up fast, especially for re-crawls.",
  },
  {
    icon: Database,
    title: "Fixed storage options",
    description: "Providers force you to use their database, not yours.",
  },
  {
    icon: SlidersHorizontal,
    title: "Poor configurability",
    description: "Crawlers lack customizability to be tuned for every use-case and often return irrelevant content.",
  },
];
export function Problem() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-12 text-center">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4 text-left">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Built for production</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A modern web crawler engineered specifically for LLM applications. Fast, reliable, and produces clean data
            you can actually use.
          </p>
        </div>
        {/* Main content grid */}

        {/* Technical Problems */}
        <div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                className="flex flex-col text-left items-start space-y-4 rounded-xl p-8 shadow-sm bg-muted border aspect-square"
                key={item.title}
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-red-100">
                  <span className="text-red-600 font-bold text-sm">{item.icon}</span>
                </div>
                <div className="font-medium text-primary text-lg">{item.title}</div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div> */}
          <SectionTwoColumns
            title="Why traditional crawlers fail"
            subtitle="Traditional crawlers extract noise (ads, navigation, cookies), not content."
            image={{ src: "/images/problem.png", alt: "Problem" }}
            items={items}
            ctaText="Learn more"
            ctaHref="/"
          />
        </div>
      </div>{" "}
      {/* Quote */}
      <div className="p-8 mt-16 text-center">
        <blockquote className="text-xl text-gray-600 italic max-w-4xl mx-auto">
          &quot;We spent 3 months trying to make existing crawlers work for our RAG system. The extracted data was so
          poor that our chatbot started giving users cookie policy information instead of actual answers.&quot;
        </blockquote>
        <div className="mt-4 text-gray-500">— Senior ML Engineer, Fortune 500 Company</div>
      </div>
    </Section>
  );
}

import { Check, Database, SlidersHorizontal, Timer, TextSearch, Banknote } from "lucide-react";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
const items = [
  {
    icon: TextSearch,
    title: "Extract content, not noise",
    description: (
      <>
        Extract <span className="text-foreground">clean, structured content optimized for LLM applications</span>. While
        70% of traditional crawlers extract irrelevant data like cookie banners, navigation menus or ads, we help you
        extract the content you need.
      </>
    ),
    features: [
      <>
        <Check className="w-4 h-4 text-green-500" /> Clean article content
      </>,
      <>
        <Check className="w-4 h-4 text-green-500" /> Structured data
      </>,
      <>
        <Check className="w-4 h-4 text-green-500" /> Relevant images
      </>,
      <>
        <Check className="w-4 h-4 text-green-500" /> No cookie banners, navigation menus or ads
      </>,
    ],
    colSpan: 2,
  },
  {
    icon: Timer,
    title: "Distributed crawling infrastructure",
    description: (
      <>
        Scale across multiple nodes to crawl thousands of pages in parallel, and resume from exactly where you left off
        if anything goes wrong. No more starting over from scratch, and no more waiting hours because of single-threaded
        crawler.
      </>
    ),
    colSpan: 1,
    features: [
      <>
        <div className="space-y-2">
          <Button variant="link" asChild className="p-0">
            <Link href="/sdk">Read about distributed crawling →</Link>
          </Button>
        </div>
      </>,
    ],
  },

  {
    icon: Database,
    title: "Your storage, your choice",
    description: (
      <>
        MongoDB, PostgreSQL, S3, or any database.{" "}
        <span className="text-foreground">Plug into your existing tech stack.</span>
      </>
    ),
    colSpan: 1,
    features: [
      <>
        <div className="space-y-2">
          <Button variant="link" asChild className="p-0">
            <Link href="/sdk">Read supported storage options →</Link>
          </Button>
        </div>
      </>,
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Highly configurable",
    description: (
      <>
        Write <span className="text-foreground">your own extraction logic</span> for complex scenarios and return only
        the content you need.
      </>
    ),
    colSpan: 2,
    features: [
      <>
        <div className="rounded-lg border bg-accent">
          <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs text-muted-foreground">config.yaml</div>
          </div>
          <div className="p-6">
            <pre className="rounded-lg p-4 font-mono">
              <code className="text-sm">
                {`crawl_config:
  targets: ["https://example.com/docs/*"]
  extraction:
    remove: [".cookie-banner", ".navigation", ".ads"]
    extract: [".main-content", ".article-body"]
  storage:
    type: "mongodb"
    connection: "mongodb://your-cluster"
  schedule: "daily"`}
              </code>
            </pre>
          </div>
        </div>
      </>,
    ],
  },
];
export function BuiltForProduction() {
  return (
    <Section id="features">
      <div className="flex flex-col items-start space-y-12 text-center">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4 text-left">
          <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-medium w-fit">
            <Banknote className="w-4 h-4 text-primary" />
            Complete set of features
          </span>
          <h2 className="font-medium text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Built for production</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A modern web crawler engineered specifically for LLM applications. Fast, reliable, and produces clean data
            you can actually use.
          </p>
        </div>
        {/* Main content grid */}

        {/* Technical Problems */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                className={cn(
                  "flex flex-col justify-between text-left items-start space-y-4 rounded-xl p-8 min-h-[450px] bg-card border",
                  {
                    "col-span-1": item.colSpan === 1,
                    "col-span-2": item.colSpan === 2,
                  }
                )}
                key={item.title}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    <p>{item.description}</p>
                  </div>
                </div>
                {item?.features && (
                  <div className="flex items-center gap-1">
                    <ul className="flex flex-col gap-1">
                      {item?.features?.map((feature, index) => (
                        <li className="flex items-center gap-1" key={index}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

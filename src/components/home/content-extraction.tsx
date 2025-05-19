import Section from "@/components/section";

export function ContentExtraction() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          LLM-optimized content extraction
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Extract clean, structured content optimized for LLM applications
        </p>
      </div>
      <div className="grid max-w-5xl gap-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* The Problem */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">The problem</h3>
            <p className="text-muted-foreground">
              Standard crawlers extract entire pages including irrelevant content:
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <span className="text-destructive">×</span>
                <span>Cookie notifications and banners</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">×</span>
                <span>Navigation menus and footers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">×</span>
                <span>Advertisements and tracking scripts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">×</span>
                <span>Duplicate content across pages</span>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our solution</h3>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Smart filtering</h4>
                <p className="text-sm text-muted-foreground">Removes common page elements automatically</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Configurable rules</h4>
                <p className="text-sm text-muted-foreground">
                  Define extraction logic via CSS selectors or custom code
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">LLM code generation</h4>
                <p className="text-sm text-muted-foreground">
                  Generate extraction code using LLMs, test on sample pages, then run at scale
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Quality assurance</h4>
                <p className="text-sm text-muted-foreground">Test runs on subsets before full crawls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

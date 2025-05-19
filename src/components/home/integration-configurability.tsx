export function IntegrationConfigurability() {
  return (
    <section className=" space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Fits Into Your Existing Tech Stack
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Flexible configuration options to match your needs
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Simple Config</h3>
            <p className="text-sm text-muted-foreground">JSON-based rules for common use cases</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Custom Code</h3>
            <p className="text-sm text-muted-foreground">Full programmatic control for complex extractions</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">LLM-Assisted</h3>
            <p className="text-sm text-muted-foreground">Generate extraction logic using AI, validate, then deploy</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Storage Backends</h3>
            <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, S3, or custom databases via plugins</p>
          </div>
        </div>

        {/* Code Example */}
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Example Configuration</h3>
            <pre className="rounded-lg bg-muted p-4">
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
      </div>
    </section>
  );
}

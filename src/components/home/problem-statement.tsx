import Section from "@/components/section";

export function ProblemStatement() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Why existing crawlers fail for LLM applications
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Traditional web crawlers weren&apos;t built with LLM applications in mind. Here&apos;s how we&apos;re
          different.
        </p>
      </div>
      <div className="gap-4">
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Existing solutions</h3>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">×</span>
                    <span>Single-threaded, slow crawls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">×</span>
                    <span>No checkpoint/recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">×</span>
                    <span>Extract raw HTML with ads/banners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">×</span>
                    <span>Fixed storage options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">×</span>
                    <span>High per-page costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">×</span>
                    <span>Poor configurability</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Our solution</h3>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Distributed crawling infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Automatic checkpointing & recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Intelligent content filtering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Pluggable storage (MongoDB, PostgreSQL, S3)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Cost-efficient incremental crawling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Code-level customization + sensible defaults</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

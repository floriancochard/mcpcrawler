import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section";

export default function TechnicalBlog() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Learn from Our Engineering Team</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Technical deep-dives and engineering insights
        </p>
      </div>
      <div className="grid gap-8">
        {/* Featured Articles */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Why Most Web Crawlers Fail at LLM Content Extraction</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              A deep dive into the challenges of content extraction for LLM applications
            </p>
            <Button variant="link" asChild className="p-0">
              <Link href="/blog/crawler-failures">Read Article →</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Building Fault-Tolerant Distributed Crawlers</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Lessons learned from building enterprise-grade crawling infrastructure
            </p>
            <Button variant="link" asChild className="p-0">
              <Link href="/blog/fault-tolerance">Read Article →</Link>
            </Button>
          </div>
        </div>

        {/* Engineering Insights */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Monthly Deep-Dives</h3>
            <p className="text-sm text-muted-foreground">Technical architecture and performance optimization</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Open Source</h3>
            <p className="text-sm text-muted-foreground">Core algorithms and community contributions</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Performance Guides</h3>
            <p className="text-sm text-muted-foreground">Optimization techniques and best practices</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

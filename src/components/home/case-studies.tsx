import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section";
import { PersonStanding } from "lucide-react";

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <div className="flex flex-col items-start space-y-4 text-left">
        <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-medium w-fit">
          <PersonStanding className="w-4 h-4 text-primary" />
          Real-world examples
        </span>

        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Case-study</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          See how our customers are transforming their data pipelines.
        </p>
      </div>
      <div className="grid gap-8">
        {/* Case Studies Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Case Study 1 */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">E-commerce merchant</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Challenge:</strong> 50,000+ product pages with inconsistent layouts
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Solution:</strong> Custom extraction rules + automatic ad removal
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Results:</strong> 95% content accuracy, 3x faster crawls
              </p>
              <Button variant="link" asChild className="mt-2 p-0">
                <Link href="/case-studies/ecommerce">Read Case Study →</Link>
              </Button>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Legal firm</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Challenge:</strong> Complex legal documents distributed across jurisdictions
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Solution:</strong> LLM-assisted extraction code generation
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Results:</strong> Real-time legal database, 99.995% uptime
              </p>
              <Button variant="link" asChild className="mt-2 p-0">
                <Link href="/case-studies/legal">Read Case Study →</Link>
              </Button>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Ads company</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Challenge:</strong> Fragmented docs across 20+ portals
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Solution:</strong> Distributed crawling with content filtering
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Results:</strong> Unified knowledge base, 10M+ queries/month
              </p>
              <Button variant="link" asChild className="mt-2 p-0">
                <Link href="/case-studies/tech-docs">Read Case Study →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {/* <div className="rounded-lg border bg-card p-6">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &quot;Finally, a crawler that understands what we actually need for LLM applications. The content quality
              is night and day compared to other solutions.&quot;
            </p>
            <footer className="text-sm text-muted-foreground">
              — Senior Data Engineer, Fortune 500 Financial Services
            </footer>
          </blockquote>
        </div> */}
      </div>
    </Section>
  );
}

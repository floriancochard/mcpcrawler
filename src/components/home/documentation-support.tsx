import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section";
import { Book } from "lucide-react";

export function DocumentationSupport() {
  return (
    <Section id="documentation">
      <div className="flex flex-col items-start space-y-4 text-left">
        <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-medium w-fit">
          <Book className="w-4 h-4 text-primary" />
          Documentation
        </span>

        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Support & documentation</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Learn more about the LLM data engineering community. Everything you need to succeed with our platform.
        </p>
      </div>
      <div className="grid gap-8">
        {/* Resources Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical resources</h3>
            <div className="grid gap-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Technical documentation</h4>
                <p className="text-sm text-muted-foreground">Complete API reference and implementation guides</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/docs">View Documentation →</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Best practices</h4>
                <p className="text-sm text-muted-foreground">Extraction optimization and performance tuning guides</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/best-practices">Learn More →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support channels</h3>
            <div className="grid gap-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Community support</h4>
                <p className="text-sm text-muted-foreground">Join our developer forum and knowledge base</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/community">Join Community →</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Enterprise support</h4>
                <p className="text-sm text-muted-foreground">Priority support for enterprise customers</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/enterprise-support">Contact support →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-2 font-medium">GitHub</h4>
            <p className="text-sm text-muted-foreground">Open source components and examples</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="https://github.com/mcpcrawler">View on GitHub →</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-2 font-medium">Slack Community</h4>
            <p className="text-sm text-muted-foreground">Join 2,000+ data engineers and ML practitioners</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/slack">Join Slack →</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-2 font-medium">Contact us</h4>
            <p className="text-sm text-muted-foreground">Do you have any questions? We&apos;re here to help.</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/contact">Contact us →</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

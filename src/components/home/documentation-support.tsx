import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section";

export function DocumentationSupport() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Documentation & Support</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to succeed with our platform
        </p>
      </div>
      <div className="grid gap-8">
        {/* Resources Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Resources</h3>
            <div className="grid gap-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Technical Documentation</h4>
                <p className="text-sm text-muted-foreground">Complete API reference and implementation guides</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/docs">View Documentation →</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Best Practices</h4>
                <p className="text-sm text-muted-foreground">Extraction optimization and performance tuning guides</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/best-practices">Learn More →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support Channels</h3>
            <div className="grid gap-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Community Support</h4>
                <p className="text-sm text-muted-foreground">Join our developer forum and knowledge base</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/community">Join Community →</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Enterprise Support</h4>
                <p className="text-sm text-muted-foreground">Priority support for enterprise customers</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/enterprise-support">Contact Support →</Link>
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
            <h4 className="mb-2 font-medium">Monthly Office Hours</h4>
            <p className="text-sm text-muted-foreground">Live Q&A with our engineering team</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/office-hours">Register →</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

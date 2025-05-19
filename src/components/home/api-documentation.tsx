import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section";

export function ApiDocumentation() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Developer-First Design</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get started quickly with our comprehensive API and SDKs
        </p>
      </div>
      <div className="grid gap-8">
        {/* Quick Start Example */}
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Quick Start</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code className="text-sm">
                {`curl -X POST https://api.mcpcrawler.com/v1/crawl \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "urls": ["https://docs.example.com"],
    "extraction_config": "clean_docs",
    "storage": {
      "type": "webhook",
      "url": "https://your-app.com/webhook"
    }
  }'`}
              </code>
            </pre>
          </div>
        </div>

        {/* Developer Resources */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">API Reference</h3>
            <p className="text-sm text-muted-foreground">Complete API documentation</p>
            <Button variant="link" asChild className="p-0">
              <Link href="/api">View API Docs →</Link>
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">SDK Downloads</h3>
            <p className="text-sm text-muted-foreground">Python, Node.js, Go SDKs</p>
            <Button variant="link" asChild className="p-0">
              <Link href="/sdk">Download SDKs →</Link>
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Integration Examples</h3>
            <p className="text-sm text-muted-foreground">Code samples and tutorials</p>
            <Button variant="link" asChild className="p-0">
              <Link href="/examples">View Examples →</Link>
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Webhook Docs</h3>
            <p className="text-sm text-muted-foreground">Real-time data delivery</p>
            <Button variant="link" asChild className="p-0">
              <Link href="/webhooks">Learn More →</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

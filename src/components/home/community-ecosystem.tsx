import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";

export default function CommunityEcosystem() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Join the LLM Data Engineering Community
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Connect with fellow developers and ML practitioners
        </p>
      </div>
      <div className="grid gap-8">
        {/* Open Source */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Open Source Contributions</h3>
            <div className="grid gap-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Core Algorithms</h4>
                <p className="text-sm text-muted-foreground">MIT licensed extraction algorithms</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/github">View on GitHub →</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Community Plugins</h4>
                <p className="text-sm text-muted-foreground">Storage plugins and integration templates</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/plugins">Browse Plugins →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Partner Ecosystem</h3>
            <div className="grid gap-4">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">LLM Providers</h4>
                <p className="text-sm text-muted-foreground">OpenAI, Anthropic, Cohere integrations</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/integrations/llm">View Integrations →</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="mb-2 font-medium">Vector Databases</h4>
                <p className="text-sm text-muted-foreground">Pinecone, Weaviate, Chroma connectors</p>
                <Button variant="link" asChild className="mt-2 p-0">
                  <Link href="/integrations/vector-db">View Connectors →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-2 font-medium">Slack Workspace</h4>
            <p className="text-sm text-muted-foreground">2,000+ data engineers and ML practitioners</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/slack">Join Slack →</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-2 font-medium">GitHub Discussions</h4>
            <p className="text-sm text-muted-foreground">Feature requests and integration help</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/github/discussions">Join Discussions →</Link>
            </Button>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-2 font-medium">Community Showcase</h4>
            <p className="text-sm text-muted-foreground">User-built tools and integrations</p>
            <Button variant="link" asChild className="mt-2 p-0">
              <Link href="/showcase">View Showcase →</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/section";

export function UseCases() {
  return (
    <Section>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Purpose-Built for LLM Data Pipelines
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Transform any website into structured data for your LLM applications
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Primary Use Cases</h3>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">RAG System Data Ingestion</h4>
                <p className="text-sm text-muted-foreground">Clean, structured content for retrieval systems</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Training Data Collection</h4>
                <p className="text-sm text-muted-foreground">High-quality datasets for model fine-tuning</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Knowledge Base Construction</h4>
                <p className="text-sm text-muted-foreground">Structured data from documentation sites</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Competitive Intelligence</h4>
                <p className="text-sm text-muted-foreground">Monitor competitor content and updates</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">MCP Server Integration</h3>
            <div className="rounded-lg border bg-card p-6">
              <p className="text-muted-foreground">
                Transform any website into an MCP (Model Context Protocol) server for seamless LLM integration.
              </p>
              <div className="mt-4">
                <Button asChild>
                  <Link href="/docs/mcp-integration">
                    Learn More About MCP Integration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

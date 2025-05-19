import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <Section>
      <div className="mx-auto flex flex-col items-center gap-12 text-center md:gap-24">
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight tracking-tight">
          <span className="text-white">Production-ready</span>
          <br />
          <span className="text-primary"> web crawler for LLMs</span>
        </h1>
        <p className="max-w-[80%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Distributed crawling with intelligent content extraction. No more failed runs, incomplete datasets, or
          unusable extractions cluttered with ads and banners.
        </p>

        {/* <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/signup">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">View Documentation</Link>
          </Button>
        </div> */}

        <div className="w-2/3 bg-muted rounded-lg p-6 border shadow-sm">
          <div className="flex flex-col items-start space-y-4 p-6">
            <Input type="url" placeholder="e.g. https://www.google.com" className="h-12 bg-white" />
            <Button variant="default" size="lg" className="cursor-pointer w-1/2 mx-auto">
              Try it out
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

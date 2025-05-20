import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <Section id="hero">
      <div className="mx-auto flex flex-col items-center gap-6 text-center md:gap-6">
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight tracking-tight">
          <span className="text-white">Production-ready</span>
          <br />
          <span className="text-primary">crawler for LLMs</span>
        </h1>
        <p className="max-w-[80%] leading-normal text-foreground sm:text-xl sm:leading-8">
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

        <div className="w-2/3 rounded-lg p-4">
          <div className="flex flex-col items-start space-y-4 p-6">
            <Input
              type="url"
              placeholder="e.g. https://www.google.com"
              className="h-12 rounded-full p-6"
              id="url-input"
            />
            <div className="flex justify-center items-center w-full gap-4">
              <Button variant="default" size="lg" className="cursor-pointer w-48">
                Try it out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

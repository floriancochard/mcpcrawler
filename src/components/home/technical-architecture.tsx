import Section from "@/components/section";

export function TechnicalArchitecture() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Built for production</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Our architecture is designed for reliability, scalability, and enterprise-grade performance.
        </p>
      </div>
      <div className="grid gap-8">
        {/* Architecture Diagram Placeholder */}
        <div className="rounded-lg border bg-card p-8">
          <div className="aspect-video rounded-lg bg-muted" />
        </div>

        {/* Technical Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Incremental crawling</h3>
            <p className="text-sm text-muted-foreground">Only fetch changed/new content on subsequent runs</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Checkpointing</h3>
            <p className="text-sm text-muted-foreground">Resume from point of failure without re-crawling</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Content intelligence</h3>
            <p className="text-sm text-muted-foreground">Automatic removal of navigation, ads, cookie banners</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Storage flexibility</h3>
            <p className="text-sm text-muted-foreground">Your database, your format, your infrastructure</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

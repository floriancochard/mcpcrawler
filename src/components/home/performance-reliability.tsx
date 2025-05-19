import Section from "@/components/section";

export function PerformanceReliability() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Enterprise-Grade Performance Metrics
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Built for reliability and scale
        </p>
      </div>
      <div className="grid gap-8">
        {/* Benchmarks Table */}
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Performance Benchmarks</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-4 text-left font-medium">Metric</th>
                    <th className="pb-4 text-left font-medium">Our Crawler</th>
                    <th className="pb-4 text-left font-medium">Spider.cloud</th>
                    <th className="pb-4 text-left font-medium">Crawl4AI</th>
                    <th className="pb-4 text-left font-medium">FireCrawl</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">1000 pages crawl time</td>
                    <td className="py-4">X minutes</td>
                    <td className="py-4">Y minutes</td>
                    <td className="py-4">Z minutes</td>
                    <td className="py-4">W minutes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Content accuracy</td>
                    <td className="py-4">95%+</td>
                    <td className="py-4">Variable</td>
                    <td className="py-4">Variable</td>
                    <td className="py-4">Variable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Cost per 1K pages</td>
                    <td className="py-4">$X</td>
                    <td className="py-4">$Y</td>
                    <td className="py-4">$Z</td>
                    <td className="py-4">$W</td>
                  </tr>
                  <tr>
                    <td className="py-4">Recovery from failures</td>
                    <td className="py-4">Automatic</td>
                    <td className="py-4">Manual restart</td>
                    <td className="py-4">Manual restart</td>
                    <td className="py-4">Partial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Infrastructure Features */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Distributed Architecture</h3>
            <p className="text-sm text-muted-foreground">Scale horizontally across regions</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Monitoring</h3>
            <p className="text-sm text-muted-foreground">Real-time crawl status, error tracking, performance metrics</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">SLA</h3>
            <p className="text-sm text-muted-foreground">99.9% uptime guarantee with automatic failover</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

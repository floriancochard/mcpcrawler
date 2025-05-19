import { Button } from "../ui/button";

export default function RoiCalculator() {
  return (
    <section className=" space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Calculate Your Crawling Cost Savings
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          See how much you can save with our enterprise crawler
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8">
        {/* Calculator Interface */}
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Input Fields */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Your Current Costs</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="pages" className="text-sm font-medium">
                      Pages to crawl per month
                    </label>
                    <input
                      type="number"
                      id="pages"
                      placeholder="e.g., 10000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="current-cost" className="text-sm font-medium">
                      Current cost per page
                    </label>
                    <input
                      type="number"
                      id="current-cost"
                      placeholder="e.g., 0.02"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="engineering-hours" className="text-sm font-medium">
                      Engineering hours spent on maintenance
                    </label>
                    <input
                      type="number"
                      id="engineering-hours"
                      placeholder="e.g., 20"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Your Savings</h3>
                <div className="rounded-lg border bg-muted p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Monthly cost savings</span>
                      <span className="font-medium">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Engineering hour savings</span>
                      <span className="font-medium">0 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Data quality improvement</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">ROI timeline</span>
                      <span className="font-medium">0 months</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Calculate Savings</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Typical Savings Examples */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Small Team</h3>
            <p className="text-sm text-muted-foreground">10K pages/month: $500/month + 20 hours engineering time</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Medium Company</h3>
            <p className="text-sm text-muted-foreground">100K pages/month: $2,000/month + 40 hours engineering time</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Enterprise</h3>
            <p className="text-sm text-muted-foreground">1M+ pages/month: $10,000/month + dedicated team efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
}

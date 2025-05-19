import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section";

export function Pricing() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Transparent, Usage-Based Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that fits your needs
        </p>
      </div>
      <div className="grid gap-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Developer Plan */}
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Developer</h3>
              <div className="space-y-2">
                <p className="text-3xl font-bold">$0.01</p>
                <p className="text-sm text-muted-foreground">per page</p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>10K pages/month included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>All extraction features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Storage integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Monitoring dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional</h3>
              <div className="space-y-2">
                <p className="text-3xl font-bold">$0.008</p>
                <p className="text-sm text-muted-foreground">per page</p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Volume discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>All Developer features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Advanced monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <div className="space-y-2">
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-sm text-muted-foreground">pricing</p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>On-premise deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Dedicated infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>All Professional features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Custom SLAs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Security compliance</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

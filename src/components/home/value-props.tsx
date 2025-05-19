import { CheckCircle2, Shield, Zap } from "lucide-react";
import Section from "@/components/section";

export function ValueProps() {
  return (
    <Section>
      <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[250px] flex-col justify-between rounded-md p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Bulletproof infrastructure</h3>
              <p className="text-muted-foreground">
                Distributed crawling, checkpointing, auto-recovery, and incremental crawls.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[250px] flex-col justify-between rounded-md p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Clean extraction</h3>
              <p className="text-muted-foreground">
                Purpose-built filters remove cookies, ads, headers/footers, and other clutter automatically.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[250px] flex-col justify-between rounded-md p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Enterprise integration</h3>
              <p className="text-muted-foreground">
                Storage options, configurable workflows, production monitoring, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

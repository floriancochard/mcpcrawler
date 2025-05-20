import Section from "@/components/section";
import { ShieldPlus } from "lucide-react";

export function SecurityCompliance() {
  return (
    <div className="">
      <Section>
        <div className="flex flex-col items-start space-y-4 text-left">
          <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-medium w-fit">
            <ShieldPlus className="w-4 h-4 text-primary" />
            Safe and secure
          </span>

          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Bank-level security standards</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We built distributed systems at some of the largest banks in the world (Wise, JPMorgan). So we know what it
            takes to build secure, scalable and trusted systems to process sensitive data.
          </p>
        </div>
        <div className="grid gap-8">
          {/* Certifications */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-muted-foreground/10 p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">
                  Certified for security, availability, and confidentiality
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-muted-foreground/10 p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">GDPR Compliant</h3>
                <p className="text-sm text-muted-foreground">Data processing meets EU privacy standards</p>
              </div>
            </div>
            <div className="rounded-lg border bg-muted-foreground/10 p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Information security management certified</p>
              </div>
            </div>
          </div>

          {/* Security Features */}
        </div>
      </Section>
    </div>
  );
}

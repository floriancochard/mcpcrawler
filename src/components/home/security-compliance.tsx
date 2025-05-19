import Section from "@/components/section";

export function SecurityCompliance() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Enterprise Security Standards</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Built with security and compliance at the core
        </p>
      </div>
      <div className="grid gap-8">
        {/* Certifications */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">SOC 2 Type II</h3>
              <p className="text-sm text-muted-foreground">Certified for security, availability, and confidentiality</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">GDPR Compliant</h3>
              <p className="text-sm text-muted-foreground">Data processing meets EU privacy standards</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">ISO 27001</h3>
              <p className="text-sm text-muted-foreground">Information security management certified</p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Security Features</h3>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>VPC deployment options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Audit logging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Role-based access control</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Compliance & Privacy</h3>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Data residency options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Data processing agreements</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Privacy by design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Regular security audits</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { CaseStudies } from "@/components/home/case-studies";
import { EnterpriseGrade } from "@/components/home/enterprise-grade";
import { SecurityCompliance } from "@/components/home/security-compliance";
import { DocumentationSupport } from "@/components/home/documentation-support";
import { BuiltForProduction } from "@/components/home/built-for-production";
import Quote from "@/components/home/quote";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Key Value Props */}
        {/* <ValueProps /> */}

        {/* Problem Section */}
        <BuiltForProduction />

        {/* Interactive Demo Section */}
        <EnterpriseGrade />

        {/* Quote Section */}
        <Quote />

        {/* Problem Statement Section */}
        {/* <ProblemStatement /> */}

        {/* Integration & Configurability Section */}
        {/* <IntegrationConfigurability /> */}

        {/* Use Cases & Applications Section */}
        {/* <UseCases /> */}

        {/* Pricing Section */}
        {/* <Pricing /> */}

        {/* Security & Compliance Section */}
        <SecurityCompliance />

        {/* Case Studies Section */}
        <CaseStudies />

        {/* Documentation & Support Section */}
        <DocumentationSupport />

        {/* Technical Blog Section */}
        {/* <TechnicalBlog /> */}

        {/* ROI Calculator Section */}
        {/* <RoiCalculator /> */}
      </main>
      <Footer />
    </div>
  );
}

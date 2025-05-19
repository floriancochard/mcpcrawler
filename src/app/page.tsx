import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { PerformanceReliability } from "@/components/home/performance-reliability";
import { ProblemStatement } from "@/components/home/problem-statement";
import { TechnicalArchitecture } from "@/components/home/technical-architecture";
import { ContentExtraction } from "@/components/home/content-extraction";
import { CaseStudies } from "@/components/home/case-studies";
import { InteractiveDemo } from "@/components/home/interactive-demo";
import { Pricing } from "@/components/home/pricing";
import { ApiDocumentation } from "@/components/home/api-documentation";
import { SecurityCompliance } from "@/components/home/security-compliance";
import { DocumentationSupport } from "@/components/home/documentation-support";
import TechnicalBlog from "@/components/home/technical-blog";
import CommunityEcosystem from "@/components/home/community-ecosystem";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Key Value Props */}
        <ValueProps />

        {/* Interactive Demo Section */}
        <InteractiveDemo />

        {/* Problem Section */}
        <Problem />

        {/* Solution Section */}
        <Solution />

        {/* Problem Statement Section */}
        <ProblemStatement />

        {/* Content Extraction Engine Section */}
        <ContentExtraction />

        {/* Technical Architecture Section */}
        <TechnicalArchitecture />

        {/* Integration & Configurability Section */}
        {/* <IntegrationConfigurability /> */}

        {/* Use Cases & Applications Section */}
        {/* <UseCases /> */}

        {/* Performance & Reliability Section */}
        <PerformanceReliability />

        {/* Pricing Section */}
        <Pricing />

        {/* API Documentation Section */}
        <ApiDocumentation />

        {/* Security & Compliance Section */}
        <SecurityCompliance />

        {/* Documentation & Support Section */}
        <DocumentationSupport />

        {/* Case Studies Section */}
        <CaseStudies />

        {/* Technical Blog Section */}
        <TechnicalBlog />
        {/* Community & Ecosystem Section */}
        <CommunityEcosystem />

        {/* ROI Calculator Section */}
        {/* <RoiCalculator /> */}
      </main>
      <Footer />
    </div>
  );
}

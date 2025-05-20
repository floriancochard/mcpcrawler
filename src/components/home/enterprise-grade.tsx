import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart } from "@/components/ui/bar-chart";
import Section from "@/components/section";
import { Rocket } from "lucide-react";

const comparisonData = [
  {
    title: "Pages crawled per second",
    data: [
      { name: "MCPCrawler", value: 50, color: "#000000" },
      { name: "Spider", value: 20, color: "#666666" },
      { name: "Firecrawl", value: 15, color: "#666666" },
      { name: "Crawl4AI", value: 25, color: "#666666" },
    ],
    format: "speed" as const,
  },
  {
    title: "Percentage of relevant content for LLMs",
    data: [
      { name: "MCPCrawler", value: 99, color: "#000000" },
      { name: "Spider", value: 75, color: "#666666" },
      { name: "Firecrawl", value: 80, color: "#666666" },
      { name: "Crawl4AI", value: 85, color: "#666666" },
    ],
    format: "percentage" as const,
  },
  {
    title: "Cost per 1000 pages",
    data: [
      { name: "MCPCrawler", value: 5, color: "#000000" },
      { name: "Spider", value: 15, color: "#666666" },
      { name: "Firecrawl", value: 12, color: "#666666" },
      { name: "Crawl4AI", value: 8, color: "#666666" },
    ],
    format: "cost" as const,
  },
];

export function EnterpriseGrade() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-4 text-left">
        <span className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-xs font-medium w-fit">
          <Rocket className="w-4 h-4 text-primary" />
          Scalable and reliable
        </span>

        <h2 className="font-medium text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Enterprise-grade performances</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Faster, cheaper, and more reliable than any other web crawlers.
        </p>
      </div>
      <div className="grid gap-8">
        <Tabs defaultValue="speed" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12 rounded-full overflow-hidden bg-muted">
            <TabsTrigger value="speed" className="cursor-pointer rounded-full">
              Speed
            </TabsTrigger>
            <TabsTrigger value="relevance" className="cursor-pointer rounded-full">
              Relevance
            </TabsTrigger>
            <TabsTrigger value="cost" className="cursor-pointer rounded-full">
              Cost
            </TabsTrigger>
          </TabsList>

          <TabsContent value="speed" className="bg-red">
            <BarChart data={comparisonData[0].data} title={comparisonData[0].title} format={comparisonData[0].format} />
          </TabsContent>
          <TabsContent value="relevance" className="bg-red">
            <BarChart data={comparisonData[1].data} title={comparisonData[1].title} format={comparisonData[1].format} />
          </TabsContent>
          <TabsContent value="cost" className="bg-red">
            <BarChart data={comparisonData[2].data} title={comparisonData[2].title} format={comparisonData[2].format} />
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}

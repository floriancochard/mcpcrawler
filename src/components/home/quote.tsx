export default function Quote() {
  return (
    <div className="p-8 mt-16 bg- text-center">
      <blockquote className="text-xl italic max-w-4xl mx-auto">
        Finally, a crawler that understands what we actually need for LLM applications. Before we started using MCP
        Crawler, we spent 3 months trying to make existing crawlers work for our RAG system, but the extracted data was
        so poor that our chatbot started giving users cookie policy information instead of actual answers.
      </blockquote>
      <div className="mt-4 text-gray-500">— Senior ML Engineer, Fortune 500 Company</div>
    </div>
  );
}

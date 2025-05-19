import Section from "@/components/section";

export function Solution() {
  return (
    <Section>
      <div className="flex flex-col items-start space-y-12 text-center">
        <div className="flex flex-col items-start space-y-4 text-left">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our bulletproof solution</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A modern web crawler engineered specifically for LLM applications. Fast, reliable, and produces clean data
            you can actually use.
          </p>
        </div>
        {/* Main features grid */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="grid lg:grid-cols-2 gap-12"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Excellence */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Production-Ready Infrastructure</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Distributed crawling</div>
                  <div className="text-gray-600">
                    Automatically scale across multiple nodes to crawl thousands of pages in parallel
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Smart checkpointing</div>
                  <div className="text-gray-600">
                    Resume from exactly where you left off if anything goes wrong. No more starting over.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Incremental updates</div>
                  <div className="text-gray-600">
                    Only crawl what&apos;s changed since your last run. Save time and money.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Your storage, your choice</div>
                  <div className="text-gray-600">
                    MongoDB, PostgreSQL, S3, or any database. Plug into your existing tech stack.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Content Extraction */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">LLM-Optimized Extraction</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Before & After</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-red-600 mb-2">❌ What you used to get:</div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Cookie banners</li>
                      <li>• Navigation menus</li>
                      <li>• Advertisements</li>
                      <li>• Footer junk</li>
                      <li>• Social widgets</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-green-600 mb-2">✅ What you get now:</div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Clean article content</li>
                      <li>• Structured data</li>
                      <li>• Relevant images</li>
                      <li>• Key metadata</li>
                      <li>• Nothing else</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Configuration options */}
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Simple configuration</h4>
                  <p className="text-gray-600 text-sm">
                    JSON-based rules for common use cases. Get started in minutes.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Custom code</h4>
                  <p className="text-gray-600 text-sm">Write your own extraction logic for complex scenarios.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">AI-assisted extraction</h4>
                  <p className="text-gray-600 text-sm">Let AI generate extraction code, test it, then run at scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code example */}
        <div className="mt-16">
          <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Get started in 3 lines of code</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`curl -X POST https://api.mcpcrawler.com/v1/crawl \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -d '{
      "urls": ["https://docs.example.com"],
      "extraction": "clean_content",
      "storage": {"type": "webhook", "url": "https://your-app.com/data"}
    }'`}</code>
            </pre>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to crawl like a pro?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of teams who&apos;ve already upgraded from slow, unreliable crawlers to our production-ready
              solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

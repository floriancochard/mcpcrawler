import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCP Crawler - Production-ready crawler for LLM pipelines",
  description:
    "Distributed crawling with intelligent content extraction. No more failed runs, incomplete datasets, or unusable extractions cluttered with ads and banners.",
  keywords: ["data extraction", "web crawler", "LLM", "MCP", "MCP Crawler"],
  alternates: {
    canonical: "https://mcpcrawler.vercel.app",
    languages: {
      "en-US": "https://mcpcrawler.vercel.app",
    },
  },
  category: "data extraction",
  openGraph: {
    title: "MCP Crawler - Production-ready crawler for LLM pipelines",
    description:
      "Distributed crawling with intelligent content extraction. No more failed runs, incomplete datasets, or unusable extractions cluttered with ads and banners.",
    type: "website",
    url: "https://mcpcrawler.vercel.app",
    locale: "en_US",
    siteName: "www.mcp-crawler.com",
    images: [{ url: "opengraph-image.png" }],
  },
  twitter: {
    title: "MCP Crawler - Production-ready crawler for LLM pipelines",
    description:
      "Distributed crawling with intelligent content extraction. No more failed runs, incomplete datasets, or unusable extractions cluttered with ads and banners.",
    card: "summary_large_image",
    site: "@mcp-crawler",
    images: ["twitter-image.png"],
  },
  referrer: "no-referrer",
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
    },
  },
  icons: {
    icon: "icon.png",
    shortcut: "icon.png",
    apple: "apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  other: {
    siteId: "1246367075704147968",
    bookmarks: ["https://mcpcrawler.vercel.app"],
  },
  appleWebApp: {
    title: "MCP Crawler",
    statusBarStyle: "black-translucent",
    startupImage: [
      "apple-touch-startup-image-768x1004.png",
      {
        url: "apple-touch-startup-image-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-background" suppressHydrationWarning>
      <body className={cn("min-h-full bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

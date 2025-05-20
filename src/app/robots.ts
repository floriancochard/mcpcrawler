export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://mcpcrawler.vercel.app/sitemap.xml",
  };
}

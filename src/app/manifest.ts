export default function manifest() {
  return {
    name: "MCP Crawler",
    short_name: "MCP Crawler",
    start_url: "/",
    id: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0a0a0a",
    description: "Production-ready crawler for LLM pipelines",
    theme_color: "#0a0a0a",
    category: "data extraction",
    icons: [
      {
        src: "favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        src: "icon.png",
        type: "image/png",
        sizes: "any",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        url: "/",
        description: "Production-ready crawler for LLM pipelines",
        icons: [
          {
            src: "icon.png",
            type: "image/png",
            sizes: "1024x1024",
          },
          {
            src: "icon2.png",
            type: "image/png",
            sizes: "128x128",
          },
        ],
      },
    ],
  };
}

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const mainNavItems = [
  {
    title: "Product",
    items: [
      {
        title: "Features",
        href: "/features",
        description: "Explore our core features and capabilities",
      },
      {
        title: "Use Cases",
        href: "/use-cases",
        description: "See how MCP Crawler solves real-world problems",
      },
      {
        title: "Pricing",
        href: "/pricing",
        description: "Transparent, usage-based pricing plans",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        title: "Documentation",
        href: "/docs",
        description: "Complete API reference and guides",
      },
      {
        title: "API Reference",
        href: "/api",
        description: "Detailed API documentation",
      },
      {
        title: "SDK Downloads",
        href: "/sdk",
        description: "Get started with our SDKs",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "/blog",
        description: "Technical articles and updates",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "Real-world implementation examples",
      },
      {
        title: "Community",
        href: "/community",
        description: "Join our developer community",
      },
    ],
  },
];

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">{subItem.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{subItem.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

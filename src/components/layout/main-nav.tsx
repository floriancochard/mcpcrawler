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
        href: "#features",
        description: "Explore our core features and capabilities",
      },
      {
        title: "Case studies",
        href: "#case-studies",
        description: "Real-world implementation examples",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        title: "Documentation",
        href: "#documentation",
        description: "Complete API reference and guides",
      },
      {
        title: "API Reference",
        href: "/",
        description: "Detailed API documentation",
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

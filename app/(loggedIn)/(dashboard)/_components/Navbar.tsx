"use client";

import SmallLogo from "@/components/SmallLogo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Strength",
    href: "/",
    description: "Workouts based on strength",
  },
  {
    title: "Speed",
    href: "/",
    description: "Workouts focussed on improving speed",
  },
];

const Navbar = () => {
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <div className="flex items-center justify-between p-5">
      {/* <nav className="fixed top-0 w-full h-14 flex justify-between p-5">
        <div>
          <SmallLogo />
        </div>

        <ul className="flex space-x-2 items-center">
          <Link href="/dashboard">
            <Button size="sm" variant="outline">
              Dashboard
            </Button>
          </Link>
          <Link href="/workouts">
            <Button size="sm" variant="outline">
              Workouts
            </Button>
          </Link>
          <Link href="/blog">
            <Button size="sm" variant="outline">
              Blog
            </Button>
          </Link>
          <div className="">
            <UserButton />
          </div>
        </ul>
      </nav> */}
      <div>
        <SmallLogo />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Workouts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <UserButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

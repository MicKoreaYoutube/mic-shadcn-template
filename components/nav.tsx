import Link from "next/link"

import { cn } from "@/lib/utils"

import { HeaderNavItem, FooterNavItem } from "@/types/nav"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

import React from "react"

interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: HeaderNavItem[]
}

interface FooterNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: FooterNavItem[]
  className?: string
}

function HeaderNav({ items, ...props }: HeaderNavProps) {
  return (
    <div {...props}>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.href ? (
                <Link href={`${item.href}`} className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  {item.title}
                </Link>
              ) : (
                <>
                  <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={cn(
                        "p-6",
                        item.mainLink && "grid grid-cols-[3fr_4fr] gap-2",
                        !item.mainLink && item.linkList && item.linkList.length <= 3 ? "w-75" : "w-125",
                      )}
                    >
                      {item.mainLink && (
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              className="h-full to-primary/50 flex flex-col justify-center rounded-md bg-linear-to-b from-transparent p-4 no-underline outline-hidden select-none"
                              href={`${item.mainLink?.href}`}
                            >
                              {item.mainLink.logo && <item.mainLink.logo className="size-6" />}
                              <h1 className="my-2 text-lg leading-tight font-medium">{item.mainLink?.title}</h1>
                              <p className="text-muted-foreground text-sm leading-tight">
                                {item.mainLink?.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      <li>
                        <ScrollArea className="h-45">
                          <ul
                            className={cn(
                              "grid gap-2",
                              !(item.mainLink || (item.linkList && item.linkList.length <= 3)) && "grid-cols-2",
                            )}
                          >
                            {item.linkList?.map((linkListItem, index) => (
                              <li key={index}>
                                <NavigationMenuLink asChild>
                                  <Link href={linkListItem.href} className="flex flex-row items-center">
                                    {linkListItem.icon && (
                                      <linkListItem.icon className="text-accent-foreground size-7" />
                                    )}
                                    <div className="flex flex-col justify-center gap-1">
                                      <h1 className="text-sm leading-none font-medium">{linkListItem.title}</h1>
                                      <p className="text-muted-foreground text-sm leading-none">
                                        {linkListItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </ScrollArea>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function FooterNav({ items, className, ...props }: FooterNavProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-24", className)} {...props}>
      {items?.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h2 className="text-foreground text-2xl font-medium">{item.title}</h2>
          <ul className="text-muted-foreground flex flex-col gap-2 font-medium">
            {item.content.map((contentItem, contentIndex) => (
              <li key={contentIndex}>
                <Link href={contentItem.href} className="hover:underline">
                  {contentItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export { HeaderNav, FooterNav }

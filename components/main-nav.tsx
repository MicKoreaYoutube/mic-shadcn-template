"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

import { NavItem } from "@/types/nav"

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

import Logo from "@/public/logo.svg"
import React from "react"

interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavItem[]
}

export function MainNav({ items, ...props }: MainNavProps) {
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
                        "grid gap-2 p-6 h-55",
                        item.mainLink ? "grid-cols-[3fr_4fr]" : null,
                        !item.mainLink && item.linkList && item.linkList.length <= 3 ? "w-75" : "w-125",
                      )}
                    >
                      {item.mainLink ? (
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex flex-col justify-center rounded-md p-4 no-underline outline-hidden select-none focus:shadow-md"
                              href={`${item.mainLink?.href}`}
                            >
                              {item.mainLink.logo ? <item.mainLink.logo className="size-6" /> : null}
                              <h1 className="my-2 text-lg leading-tight font-medium">{item.mainLink?.title}</h1>
                              <p className="text-muted-foreground text-sm leading-tight">
                                {item.mainLink?.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ) : null}
                      <li className="h-full">
                        <ScrollArea className="h-44">
                          <ul
                            className={cn(
                              "grid gap-2",
                              item.mainLink || (item.linkList && item.linkList.length <= 3) ? null : "grid-cols-2",
                            )}
                          >
                            {item.linkList?.map((linkListItem, index) => (
                              <li key={index}>
                                <NavigationMenuLink asChild>
                                  <Link href={linkListItem.href}>
                                    <h1 className="text-sm leading-none font-medium">{linkListItem.title}</h1>
                                    <p className="text-muted-foreground line-clamp-2 text-sm">
                                      {linkListItem.description}
                                    </p>
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

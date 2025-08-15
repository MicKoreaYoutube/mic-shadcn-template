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
  NavigaitionMenuListItem,
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
          {items?.length ? (
            <>
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
                        <ScrollArea>
                          <ul
                            className={cn(item.mainLink ? "lg:grid-cols-[3fr_4fr]" : "md:grid-cols-2", "grid max-h-[250px] w-[300px] gap-3 p-6 md:w-[400px] lg:w-[500px]")}>
                            {item.mainLink ? (
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    className="outline-hidden flex size-full select-none flex-col justify-center rounded-md p-4 no-underline focus:shadow-md"
                                    href={`${item.mainLink?.href}`}>
                                    <Logo className={cn("size-6", item.mainLink?.logo ? null : "hidden")} />
                                    <div className="mb-2 mt-4 text-lg font-medium leading-tight">
                                      {item.mainLink?.title}
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      {item.mainLink?.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ) : null}
                            {item.linkList?.map((linkListItem, index) => (
                              <NavigaitionMenuListItem key={index} title={linkListItem.title} href={linkListItem.href}>
                                {linkListItem.description}
                              </NavigaitionMenuListItem>
                            ))}
                          </ul>
                        </ScrollArea>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </>
          ) : null}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

import Link from "next/link"
import React from "react"

import { useMediaQuery } from "react-responsive"

import { cn } from "@/lib/utils"

import { Menu } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig, navDropDownContent } from "@/config/site"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buttonVariants, Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NavigationMenuStyle } from "@/components/ui/navigation-menu"

import { ThemeToggle } from "@/components/theme-toggle"
import { DropDown } from "@/components/dropdown"

import { useInView } from "react-intersection-observer"

import { tailwindBreakPoints } from "@/lib/tailwind"

import { SearchDialog } from "@/components/search-dialog"
import { FamilyService } from "@/components/family-service"

import Logo from "@/public/logo.svg"

interface NavSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavItem[]
}

export function NavSheet({ items, ...props }: NavSheetProps) {
  return (
    <>
      <Sheet {...props}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="font-RixInooAriDuriR flex h-dvh flex-col justify-between overflow-auto">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex flex-row space-x-2">
                <Logo className="size-6" />
                <span className="inline-block font-bold">{siteConfig.name}</span>
              </Link>
            </SheetTitle>
            <SheetDescription>{siteConfig.description}</SheetDescription>
          </SheetHeader>
          <Accordion type="single" collapsible className="w-full flex-1">
            {items?.length && (
              <>
                {items?.map((item, index) => (
                  <AccordionItem key={index} value={index.toString()}>
                    {item.href ? (
                      <Link
                        href={`${item.href}`}
                        className="flex flex-1 items-center justify-between py-4 font-medium transition-all"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul className={cn("", item.mainLink && "grid grid-cols-[3fr_2fr] gap-2")}>
                            {item.mainLink && (
                              <li>
                                <Link
                                  className={cn(NavigationMenuStyle, "h-full flex flex-col justify-center rounded-md p-4 no-underline outline-hidden select-none focus:shadow-md")}
                                  href={`${item.mainLink?.href}`}
                                >
                                  {item.mainLink.logo && <item.mainLink.logo className="size-6" />}
                                  <h1 className="my-2 text-lg leading-tight font-medium">{item.mainLink?.title}</h1>
                                  <p className="text-muted-foreground text-sm leading-tight">
                                    {item.mainLink?.description}
                                  </p>
                                </Link>
                              </li>
                            )}
                            <li>
                              <ScrollArea className="h-40">
                                <ul className={cn("grid gap-2", !item.mainLink && item.linkList && "grid-cols-2")}>
                                  {item.linkList?.map((linkListItem, index) => (
                                    <li key={index}>
                                      <Link
                                        href={linkListItem.href}
                                        className={cn(NavigationMenuStyle, "flex flex-row items-center")}
                                      >
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
                                    </li>
                                  ))}
                                </ul>
                              </ScrollArea>
                            </li>
                          </ul>
                        </AccordionContent>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </>
            )}
          </Accordion>
          <SheetFooter>
            <div className="w-full flex justify-between md:justify-end">
              {!useMediaQuery({ minWidth: tailwindBreakPoints["md"] }) && <FamilyService />}
              <DropDown label="My Account" items={navDropDownContent} />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

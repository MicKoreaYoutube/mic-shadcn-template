import Link from "next/link"
import { useState } from "react"

import { useMediaQuery } from "react-responsive"

import { cn } from "@/lib/utils"

import { Menu, LogIn } from "lucide-react"

import { HeaderNavItem } from "@/types/nav"
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerStyle,
} from "@/components/ui/accordion"
import { NavigationMenuStyle } from "@/components/ui/navigation-menu"

import { ThemeToggle } from "@/components/theme-toggle"
import { NavDropDown } from "@/components/dropdown"

import { useInView } from "react-intersection-observer"

import { tailwindBreakPoints } from "@/lib/tailwind"

import { SearchDialog } from "@/components/search-dialog"
import { FamilyService } from "@/components/family-service"

import Logo from "@/public/logo.svg"

interface NavSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: HeaderNavItem[]
}

export function NavSheet({ items, ...props }: NavSheetProps) {
  const [isLogin, changeLoginState] = useState(true)
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
          <Accordion type="single" collapsible className="w-full flex-1 p-4">
            {items?.length && (
              <>
                {items?.map((item, index) => (
                  <AccordionItem key={index} value={index.toString()}>
                    {item.href ? (
                      <Link href={`${item.href}`} className={cn(AccordionTriggerStyle(), "hover:shadow-md")}>
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <AccordionTrigger className="hover:bg-accent hover:shadow-md data-[state=open]:shadow-md data-[state=closed]:shadow-none">{item.title}</AccordionTrigger>
                        <AccordionContent className="py-2">
                          <ScrollArea className="h-40">
                            <ul className={cn("grid gap-2")}>
                              {item.mainLink && (
                                <li>
                                  <Link
                                    className={cn(
                                      NavigationMenuStyle(),
                                      "to-primary/50 flex flex-col justify-end rounded-md bg-linear-to-b from-transparent p-4 no-underline outline-hidden select-none",
                                    )}
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
                                <ul className={cn("grid gap-2", !item.mainLink && item.linkList && "grid-cols-2")}>
                                  {item.linkList?.map((linkListItem, index) => (
                                    <li key={index}>
                                      <Link
                                        href={linkListItem.href}
                                        className={cn(NavigationMenuStyle(), "flex flex-row items-center")}
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
                              </li>
                            </ul>
                          </ScrollArea>
                        </AccordionContent>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </>
            )}
          </Accordion>
          <SheetFooter>
            <div className="flex w-full justify-between md:justify-end">
              {!useMediaQuery({ minWidth: tailwindBreakPoints["md"] }) && <FamilyService />}
              {isLogin ? (
                <NavDropDown label="My Account" items={navDropDownContent} />
              ) : (
                <Button asChild variant="ghost" size="icon">
                  <Link href="/auth/login">
                    <LogIn className="size-5" />
                  </Link>
                </Button>
              )}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

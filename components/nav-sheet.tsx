import Link from "next/link"

import { cn } from "@/lib/utils"

import { Menu } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { ThemeToggle } from "@/components/theme-toggle"
import { DropDown } from "@/components/dropdown"

import { useInView } from "react-intersection-observer"

import { SearchDialog } from "@/components/search-dialog"

import Logo from "@/public/logo.svg"

interface NavSheetProps {
  items?: NavItem[]
}

export function NavSheet({ items }: NavSheetProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex h-dvh flex-col overflow-auto font-RixInooAriDuriR">
          <SheetHeader className="flex-none">
            <SheetTitle>
              <Link href="/" className="flex flex-row space-x-2">
                <Logo className="size-6" />
                <span className="inline-block font-bold">{siteConfig.name}</span>
              </Link>
            </SheetTitle>
            <SheetDescription>{siteConfig.description}</SheetDescription>
          </SheetHeader>
          <div className="grow">
            <Accordion type="single" collapsible className="w-full">
              {items?.length ? (
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
                            <ScrollArea>
                              <ul className={cn(item.mainLink ? "grid-cols-[3fr_2fr] flex-row" : null, "grid gap-3")}>
                                {item.mainLink ? (
                                  <li className="h-full">
                                    <div className="h-full rounded-md transition duration-700 hover:bg-accent">
                                      <Link
                                        className="outline-hidden flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline focus:shadow-md"
                                        href={`${item.mainLink?.href}`}
                                      >
                                        <Logo className={cn("size-6", item.mainLink?.logo ? null : "hidden")} />
                                        <div className="mb-2 mt-4 text-lg font-medium leading-tight">
                                          {item.mainLink?.title}
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                          {item.mainLink?.description}
                                        </p>
                                      </Link>
                                    </div>
                                  </li>
                                ) : null}
                                <div
                                  className={
                                    item.mainLink ? "flex flex-col justify-between" : "grid grid-cols-2 gap-x-3 gap-y-1"
                                  }
                                >
                                  {item.linkList?.map((linkListItem, index) => (
                                    <Link
                                      className="flex flex-col rounded-md px-2 py-4 transition duration-700 hover:bg-accent"
                                      key={index}
                                      href={linkListItem.href}
                                    >
                                      <span className="font-medium leading-tight">{linkListItem.title}</span>
                                      <span className="leading-tight text-muted-foreground">
                                        {linkListItem.description}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </ul>
                            </ScrollArea>
                          </AccordionContent>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </>
              ) : null}
            </Accordion>
          </div>
          <SheetFooter className="flex-none">
            <div className="flex justify-between md:justify-end">
              <div className="md:hidden">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">패밀리 서비스</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="font-RixInooAriDuriR text-xl font-medium">패밀리 서비스</DrawerTitle>
                    </DrawerHeader>
                    <div className="m-4 flex flex-col gap-2 font-RixInooAriDuriR font-normal">
                      {siteConfig.FamilySurvice?.length
                        ? siteConfig.FamilySurvice?.map((item, index) => (
                            <Link key={index} href={item.href} className="text-muted-foreground hover:underline">
                              <span>{item.name}</span>
                            </Link>
                          ))
                        : null}
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
              <DropDown label="My Account" items={navDropDownContent} />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

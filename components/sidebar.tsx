"use client"

import Link from "next/link"

import Logo from "@/public/logo.svg"

import { cn, toTitleCase } from "@/lib/utils"

import { docsItem, tocListItem } from "@/types/docs"

// import { SearchDialog } from "@/components/search"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  Plus,
  GalleryVerticalEnd,
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  MoreHorizontal,
  Share,
  Trash2,
  ChevronsUpDown,
  Sparkles,
  BadgeCheck,
  CreditCard,
  Bell,
  LogOut,
} from "lucide-react"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuAction,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { usePathname } from "next/navigation"

import { Link as TargetLink } from "react-scroll"
import React from "react"

// interface dashboardSidebarInterface {
//   items?: dashboardSidebarItem[]
// }

interface docsSidebarInterface {
  rootPath: string
  items?: docsItem[]
}

interface chapterSidebarInterface {
  items?: tocListItem[]
}

interface ChapterSidebarTargetLinkInterface {
  to: string
  className?: string
  children?: string
}

export function DashbaordSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, isMobile } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <div>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <Command className="size-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-base">Acme Inc</span>
                  <span className="text-xs">Enterprise</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <Accordion type="multiple">
                  {[...Array(3).keys()].map((item) => (
                    <SidebarMenuItem key={item}>
                      <AccordionItem value={item.toString()}>
                        <AccordionTrigger
                          className={cn(
                            "hover:bg-accent flex items-center py-2",
                            isMobile || state === "expanded" ? "justify-between" : "justify-center [&>svg]:hidden",
                          )}
                        >
                          <Link href="/dashboard/test" className="flex flex-row items-center justify-center gap-2">
                            <Command className="size-5" />
                            {(isMobile || state === "expanded") && <span>이름</span>}
                          </Link>
                        </AccordionTrigger>
                        {(isMobile || state === "expanded") && (
                          <AccordionContent className="pb-0">
                            <SidebarMenuSub className="mr-0 pr-0">
                              <Accordion type="multiple">
                                {[...Array(3).keys()].map((item) => (
                                  <SidebarMenuItem key={item}>
                                    <AccordionItem value={item.toString()}>
                                      <AccordionTrigger
                                        className={cn(
                                          "hover:bg-accent flex items-center py-2",
                                          isMobile || state === "expanded"
                                            ? "justify-between"
                                            : "justify-center [&>svg]:hidden",
                                        )}
                                      >
                                        <Link
                                          href="/dashboard/test"
                                          className="flex flex-row items-center justify-center gap-2"
                                        >
                                          <Command className="size-5" />
                                          {(isMobile || state === "expanded") && <span>이름</span>}
                                        </Link>
                                      </AccordionTrigger>
                                      {(isMobile || state === "expanded") && (
                                        <AccordionContent>
                                          {/* <DashbaordSidebarTree sidebarState={{isMoblie: isMobile, state: state}} /> */}
                                        </AccordionContent>
                                      )}
                                    </AccordionItem>
                                  </SidebarMenuItem>
                                ))}
                              </Accordion>
                            </SidebarMenuSub>
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    </SidebarMenuItem>
                  ))}
                </Accordion>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  )
}

function DashbaordSidebarTree({ sidebarState }: { sidebarState: { isMoblie: boolean; state: string } }) {
  return (
    <SidebarMenuSub className="mr-0 pr-0">
      {[...Array(3).keys()].map((item) => (
        <SidebarMenuItem key={item}>
          <Collapsible className="[&[data-state=open]>button>svg[data-role=expanded-indicator]]:rotate-90">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                className={cn(
                  "flex items-center",
                  sidebarState.isMoblie || sidebarState.state === "expanded" ? "justify-between" : "justify-center",
                )}
              >
                <Link href="/dashboard/test" className="flex flex-row items-center justify-center gap-2">
                  <Command className="size-5" />
                  {(sidebarState.isMoblie || sidebarState.state === "expanded") && <span>이름</span>}
                </Link>
                {(sidebarState.isMoblie || sidebarState.state === "expanded") && (
                  <ChevronRight className="transition-transform" data-role="expanded-indicator" />
                )}
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <DashbaordSidebarTree sidebarState={sidebarState} />
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenuItem>
      ))}
    </SidebarMenuSub>
  )
}

export function DocsSidebar({ items, rootPath }: docsSidebarInterface) {
  return (
    <div className="font-TheJamsil5Bold">
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>Documentation</SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <ScrollArea>
                {items?.length
                  ? items.map((item, index) => <DocsSidebarTree key={index} item={item} parentPath={rootPath} />)
                  : null}
              </ScrollArea>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  )
}

function DocsSidebarTree({ item, parentPath }: { item: docsItem; parentPath?: string }) {
  const pathName = usePathname()

  const currentPath = `${parentPath}/${item.id}`

  if (item.subDocList) {
    return (
      <SidebarMenuItem>
        <Collapsible className="[&[data-state=open]>button>svg[data-role=expanded-indicator]]:rotate-90">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="grid grid-cols-[1fr_auto]">
              <Link
                href={item.isDoc ? currentPath : ""}
                className={`${decodeURI(pathName) == currentPath ? "font-bold" : ""}`}
              >
                {toTitleCase(item.id.replaceAll("-", " "))}
              </Link>
              <ChevronRight className="transition-transform" data-role="expanded-indicator" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className="mr-0 pr-0">
              {item.subDocList.map((subItem, index) => (
                <DocsSidebarTree key={index} item={subItem} parentPath={currentPath} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    )
  } else {
    return (
      <SidebarMenuButton className="data-[active=true]:bg-transparent">
        <Link
          href={item.isDoc ? currentPath : ""}
          className={`${decodeURI(pathName) == currentPath ? "font-bold" : ""}`}
        >
          {toTitleCase(item.id.replaceAll("-", " "))}
        </Link>
      </SidebarMenuButton>
    )
  }
}

function ChapterSidebarTargetLink({ to, children, ...props }: ChapterSidebarTargetLinkInterface) {
  return (
    <TargetLink
      activeClass="font-bold"
      spy
      smooth
      isDynamic
      to={to}
      offset={-70}
      className="font-SUITE_Regular cursor-pointer"
      duration={700}
      {...props}
    >
      {children}
    </TargetLink>
  )
}

export function ChapterSidebar({ items }: chapterSidebarInterface) {
  return (
    <div className="w-32">
      <h1 className="font-KBODiaGothic_bold font-bold">Chapter</h1>
      <ScrollArea className="h-60">
        <div className="grid gap-1">
          {items?.length
            ? items.map((item, index) => (
                <div key={index} style={{ marginLeft: (item.depth - 1) * 8 }}>
                  <ChapterSidebarTargetLink to={`heading-${item.text.replaceAll(" ", "-")}`}>
                    {item.text}
                  </ChapterSidebarTargetLink>
                </div>
              ))
            : null}
        </div>
      </ScrollArea>
    </div>
  )
}

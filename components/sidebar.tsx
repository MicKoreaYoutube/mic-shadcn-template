"use client"

import Link from "next/link"

import Logo from "@/public/logo.svg"

import { cn, toTitleCase } from "@/lib/utils"

import { dashboardSidebarGroupItem, dashboardSidebarItem } from "@/types/sidebar"
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
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuAction,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarSeparator,
  useSidebar,
  SidebarContextProps,
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AccordionTriggerStyle } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge"

import { DropDownTree } from "@/components/dropdown"

import { usePathname } from "next/navigation"

import { Link as TargetLink } from "react-scroll"
import React from "react"

interface dashboardSidebarInterface extends React.ComponentProps<typeof Sidebar> {
  items?: dashboardSidebarGroupItem[]
}

interface DashbaordSidebarTreeProps extends React.RefAttributes<HTMLDivElement> {
  items?: dashboardSidebarItem[]
  sidebarState: Partial<SidebarContextProps>
  className?: string
}

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

export function DashbaordSidebar({ items, ...props }: dashboardSidebarInterface) {
  const { state, isMobile } = useSidebar()

  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }

  return (
    <Sidebar collapsible="icon" {...props}>
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
        {items?.map((item, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarTree items={item.subItemList} sidebarState={{ isMobile: isMobile, state: state }} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user.name}</span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}



function SidebarTree({ items, sidebarState, className, ...props }: DashbaordSidebarTreeProps) {
  const hideAccordionIndicatorClass = "[&>svg[data-role=accordian-indicator]]:hidden"

  return (
    <Accordion type="multiple" {...props}>
      {items?.map((item, index) => (
        <SidebarMenuItem key={index}>
          <AccordionItem value={index.toString()}>
            <AccordionTrigger
              className={cn(
                "hover:bg-accent flex items-center gap-2 py-2",
                sidebarState.isMobile || sidebarState.state === "expanded"
                  ? "justify-between"
                  : `justify-center ${hideAccordionIndicatorClass}`,
                !item.subItemList && hideAccordionIndicatorClass
              )}
            >
              <div
                className={cn(
                  "flex w-full",
                  sidebarState.isMobile || sidebarState.state === "expanded"
                    ? "justify-between"
                    : "justify-center [&>div[data-role=sidebar-utilities]]:hidden",
                )}
              >
                <Link href={item.href ?? "#"} className="flex flex-row items-center justify-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {item.icon && <item.icon className="size-5" />}
                    </TooltipTrigger>
                    {sidebarState.state == "collapsed" && <TooltipContent className="font-TheJamsil5Bold" side="right">{item.title}</TooltipContent>}
                  </Tooltip>
                  {(sidebarState.isMobile || sidebarState.state === "expanded") && <span>{item.title}</span>}
                </Link>
                <div className="flex gap-2" data-role="sidebar-utilities">
                  {item.badge && <Badge variant={item.badge?.variant}>{item.badge.title}</Badge>}
                  {item.dropdown && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropDownTree items={item.dropdown} className="font-TheJamsil5Bold" />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </AccordionTrigger>
            {item.subItemList ? (
              <AccordionContent className="pb-0">
                <SidebarMenuSub className="mr-0 pr-0">
                  <SidebarTree items={item.subItemList} sidebarState={{ isMobile: sidebarState.isMobile, state: sidebarState.state }} />
                </SidebarMenuSub>
              </AccordionContent>
            ) : null}
          </AccordionItem>
        </SidebarMenuItem>
      ))}
    </Accordion>
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

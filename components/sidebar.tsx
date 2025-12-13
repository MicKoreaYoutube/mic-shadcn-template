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

export function DashbaordSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar()

  return (
    <Sidebar collapsible="icon" className={cn("font-TheJamsil5Bold", className)} {...props}>
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
              {[...Array(3).keys()].map((item) => (
                <SidebarMenuItem key={item}>
                  <Collapsible className="[&[data-state=open]>button>svg[data-role=expanded-indicator]]:rotate-90">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="grid group-data-[state=expanded]:grid-cols-[auto_1fr_auto]">
                        <Command className="size-5" />
                        <span>이름</span>
                        <ChevronRight className="transition-transform" data-role="expanded-indicator" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="mr-0 pr-0">
                        <SidebarMenuItem>
                          <Collapsible className="[&[data-state=open]>button>svg[data-role=expanded-indicator]]:rotate-90">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton className="grid grid-cols-[auto_1fr_auto]">
                                <Command />
                                <span>왜 안 되지</span>
                                <ChevronRight className="transition-transform" data-role="expanded-indicator" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="mr-0 pr-0">
                                <SidebarMenuItem>
                                  <SidebarMenuButton asChild>
                                    <Link href="#">
                                      <Command />
                                      <span>ㅅㅂ</span>
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </Collapsible>
                        </SidebarMenuItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter>
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
      </SidebarFooter> */}
    </Sidebar>
  )
}

function DashbaordSidebarTree() {

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

"use client"

import Link from "next/link"

import Logo from "@/public/logo.svg"

import { cn, toTitleCase } from "@/lib/utils"

import { docsItem, tocListItem } from "@/types/docs"

// import { SearchDialog } from "@/components/search"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Home, Inbox, Search, Settings, ChevronDown, ChevronRight, File, Folder } from "lucide-react"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

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

export function DashbaordSidebar() {
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      {
        title: "Getting Started",
        url: "#",
        items: [
          {
            title: "Installation",
            url: "#",
          },
          {
            title: "Project Structure",
            url: "#",
          },
        ],
      },
      {
        title: "Building Your Application",
        url: "#",
        items: [
          {
            title: "Routing",
            url: "#",
          },
          {
            title: "Data Fetching",
            url: "#",
            isActive: true,
          },
          {
            title: "Rendering",
            url: "#",
          },
          {
            title: "Caching",
            url: "#",
          },
          {
            title: "Styling",
            url: "#",
          },
          {
            title: "Optimizing",
            url: "#",
          },
          {
            title: "Configuring",
            url: "#",
          },
          {
            title: "Testing",
            url: "#",
          },
          {
            title: "Authentication",
            url: "#",
          },
          {
            title: "Deploying",
            url: "#",
          },
          {
            title: "Upgrading",
            url: "#",
          },
          {
            title: "Examples",
            url: "#",
          },
        ],
      },
      {
        title: "API Reference",
        url: "#",
        items: [
          {
            title: "Components",
            url: "#",
          },
          {
            title: "File Conventions",
            url: "#",
          },
          {
            title: "Functions",
            url: "#",
          },
          {
            title: "next.config.js Options",
            url: "#",
          },
          {
            title: "CLI",
            url: "#",
          },
          {
            title: "Edge Runtime",
            url: "#",
          },
        ],
      },
      {
        title: "Architecture",
        url: "#",
        items: [
          {
            title: "Accessibility",
            url: "#",
          },
          {
            title: "Fast Refresh",
            url: "#",
          },
          {
            title: "Next.js Compiler",
            url: "#",
          },
          {
            title: "Supported Browsers",
            url: "#",
          },
          {
            title: "Turbopack",
            url: "#",
          },
        ],
      },
      {
        title: "Community",
        url: "#",
        items: [
          {
            title: "Contribution Guide",
            url: "#",
          },
        ],
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" className="font-TheJamsil5Bold">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex items-center gap-2">
                <Logo className="size-7" />
                <div className="flex flex-col">
                  <span className="text-base">Username</span>
                  <span className="text-xs">Description</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <Collapsible title="테스트" defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                테스트 텍스트
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>테스트 텍스트</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}

export function DocsSidebar({ items, rootPath }: docsSidebarInterface) {
  return (
    <>
      <SidebarMenu className="p-4 font-TheJamsil5Bold">
        <ScrollArea>
          {items?.length
            ? items.map((item, index) => <DocsTree key={index} item={item} parentPath={rootPath} />)
            : null}
        </ScrollArea>
      </SidebarMenu>
    </>
  )
}

function DocsTree({ item, parentPath }: { item: docsItem; parentPath?: string }) {
  const pathName = usePathname()

  const currentPath = `${parentPath}/${item.id}`

  if (item.subDocList) {
    return (
      <SidebarMenuItem>
        <Collapsible className="group/collapsible [&[data-state=open]>button>svg:last-child]:rotate-90">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <Link
                href={item.isDoc ? currentPath : ""}
                className={`${decodeURI(pathName) == currentPath ? "font-bold" : ""}`}
              >
                {toTitleCase(item.id.replaceAll("-", " "))}
              </Link>
              <ChevronRight className="transition-transform" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subDocList.map((subItem, index) => (
                <DocsTree key={index} item={subItem} parentPath={currentPath} />
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
      className="cursor-pointer font-SUITE_Regular"
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

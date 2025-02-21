"use client"

import Link from "next/link"

import { docsItem, chapterSidebarItem } from "@/types/sidebar"

// import { SearchDialog } from "@/components/search"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Home, Inbox, Search, Settings, ChevronDown } from "lucide-react"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

import { usePathname } from "next/navigation"

import { Link as TargetLink } from "react-scroll"

// interface dashboardSidebarInterface {
//   items?: dashboardSidebarItem[]
// }

interface docsSidebarInterface {
  items?: docsItem[]
}

interface chapterSidebarInterface {
  items?: chapterSidebarItem[]
}

interface ChapterSidebarTargetLinkInterface {
  to: string
  children?: string
}

export function DashbaordSidebar() {
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}

export function DocsSidebar({ items }: docsSidebarInterface) {
  const pathName = usePathname()

  return (
    <>
      <ScrollArea className="h-[80vh] w-48">
        <div className="m-8">
          {items?.length
            ? items.map((item, index) => (
                <div key={index} className="py-2">
                  <Link
                    href={`${item.isDoc ? `/docs/${item.id ?? item.title}` : "#"}`}
                    className={`font-KBO-Dia-Gothic_bold my-3 block text-lg ${(decodeURI(pathName) == "/docs" && index == 0) || decodeURI(pathName) == `/docs/${item.id}` || decodeURI(pathName) == `/docs/${item.title}` ? "underline underline-offset-4" : "font-bold"}`}>
                    {item.title}
                  </Link>
                  {item.subDocList?.length
                    ? item.subDocList.map((subDocItem, subDocIndex) => (
                        <Link
                          key={subDocIndex}
                          href={`/docs/${item.id ?? item.title}/${subDocItem.id ?? subDocItem.title}`}
                          className={`font-SUITE-Regular text-md my-1 block ${decodeURI(pathName) == `/docs/${item.id}/${subDocItem.title}` || decodeURI(pathName) == `/docs/${item.title}/${subDocItem.title}` ? "font-bold text-foreground underline underline-offset-4" : "text-muted-foreground"}`}>
                          {subDocItem.title}
                        </Link>
                      ))
                    : null}
                </div>
              ))
            : null}
        </div>
      </ScrollArea>
    </>
  )
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
      className="font-SUITE-Regular cursor-pointer"
      duration={700}
      {...props}>
      {children}
    </TargetLink>
  )
}

export function ChapterSidebar({ items }: chapterSidebarInterface) {
  return (
    <div className="w-32">
      <div className="fixed py-10">
        <h1 className="font-KBO-Dia-Gothic_bold font-bold">Chapter</h1>
        <div className="grid gap-1">
          {items?.length
            ? items.map((item, index) => (
                <div key={index}>
                  <ChapterSidebarTargetLink to={`chapter-${item.title}`}>{item.title}</ChapterSidebarTargetLink>
                  {item?.subChapterList?.length ? (
                    <div className="px-3 grid gap-1 pt-1">
                      {item?.subChapterList.map((subChapterItem, subChapterIndex) => (
                        <ChapterSidebarTargetLink to={`chapter-${subChapterItem.title}`} key={subChapterIndex}>
                          {subChapterItem.title}
                        </ChapterSidebarTargetLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

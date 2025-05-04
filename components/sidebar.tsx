"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

import { docsItem } from "@/types/docs"

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

// interface dashboardSidebarInterface {
//   items?: dashboardSidebarItem[]
// }

interface docsSidebarInterface {
  items?: docsItem[]
}

// interface chapterSidebarInterface {
//   items?: chapterSidebarItem[]
// }

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
      <ScrollArea className="w-64">
        <div className="lg:my-8">
          <SidebarProvider>
            <SidebarMenu>
              {items?.length ? items.map((item, index) => <Tree key={index} item={item} />) : null}
            </SidebarMenu>
          </SidebarProvider>
        </div>
      </ScrollArea>
    </>
  )
}

function Tree({ item, parentPath = "/docs" }: { item: docsItem, parentPath?: string }) {

  const currentPath = `${parentPath}/${item.id}`

  if (item.subDocList) {
    return (
      <SidebarMenuItem>
        <Collapsible className="group/collapsible [&[data-state=open]>button>svg:last-child]:rotate-90">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <Link href={item.isDoc ? currentPath.replaceAll(" ", "-") : ""}>{item.id}</Link>
              <ChevronRight className="transition-transform" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subDocList.map((subItem, index) => (
                <Tree key={index} item={subItem} parentPath={currentPath} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    )
  } else {
    return (
      <SidebarMenuButton className="data-[active=true]:bg-transparent">
        <Link href={item.isDoc ? currentPath.replaceAll(" ", "-") : ""}>{item.id}</Link>
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

// export function ChapterSidebar({ items }: chapterSidebarInterface) {
//   return (
//     <div className="w-32">
//       <div className="fixed py-10">
//         <h1 className="font-KBODiaGothic_bold font-bold">Chapter</h1>
//         <div className="grid gap-1">
//           {items?.length
//             ? items.map((item, index) => (
//                 <div key={index}>
//                   <ChapterSidebarTargetLink to={`chapter-${item.title}`}>{item.title}</ChapterSidebarTargetLink>
//                   {item?.subChapterList?.length ? (
//                     <div className="grid gap-1 px-3 pt-1">
//                       {item?.subChapterList.map((subChapterItem, subChapterIndex) => (
//                         <ChapterSidebarTargetLink to={`chapter-${subChapterItem.title}`} key={subChapterIndex}>
//                           {subChapterItem.title}
//                         </ChapterSidebarTargetLink>
//                       ))}
//                     </div>
//                   ) : null}
//                 </div>
//               ))
//             : null}
//         </div>
//       </div>
//     </div>
//   )
// }

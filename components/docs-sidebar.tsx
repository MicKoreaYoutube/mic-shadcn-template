"use client"

import Link from "next/link"

import Logo from "@/public/logo.svg"

import { cn, toTitleCase } from "@/lib/utils"

import { sidebarContentItem, sidebarGroupItem } from "@/types/sidebar"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { SidebarContentComp, SidebarTree } from "@/components/sidebar-comp"
import React from "react"

interface docsSidebarInterface extends React.ComponentProps<typeof Sidebar> {
  items?: docsItem[]
}

export function DocsSidebar({ items, ...props }: docsSidebarInterface) {
  const { state, isMobile } = useSidebar()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <Command className="size-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-base">Docs</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarTree items={items} stem={["docs"]} sidebarState={{ state: state, isMobile: isMobile }} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
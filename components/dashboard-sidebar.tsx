"use client"

import Link from "next/link"

import { sidebarContentItem } from "@/types/sidebar"

import { Command } from "lucide-react"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { SidebarContentComp } from "@/components/sidebar-comp"

interface dashboardSidebarProps extends React.ComponentProps<typeof Sidebar> {
  contentItems?: sidebarContentItem[]
}

export function DashbaordSidebar({ contentItems, ...props }: dashboardSidebarProps) {
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
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <Command className="size-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-base">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContentComp items={contentItems} root="dashboard" sidebarState={{ state: state, isMobile: isMobile }} />
    </Sidebar>
  )
}
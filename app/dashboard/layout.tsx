"use client"

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import { DashbaordSidebar } from "@/components/dashboard-sidebar"
import { BreadcrumbByLink } from "@/components/breadcrumb"

import { dashboardSidebarContent } from "@/config/site"

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashbaordSidebar className="top-16 md:h-[calc(100dvh-4rem)] font-TheJamsil5Bold" variant="inset" contentItems={dashboardSidebarContent} />
      <SidebarInset className="h-[calc(100dvh-4rem)] md:h-[calc(100dvh-5rem)]">
        <div className="border-b px-3 py-3 flex items-center gap-3 bg-accent/50 backdrop-blur-sm z-30">
          <SidebarTrigger />
          <Separator orientation="vertical" />
          <BreadcrumbByLink />
        </div>
        <div className="overflow-auto p-2">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

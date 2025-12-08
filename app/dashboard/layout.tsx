import Link from "next/link"

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { DashbaordSidebar } from "@/components/sidebar"
import { Separator } from "@/components/ui/separator"
import { BreadcrumbByLink } from "@/components/breadcrumb"

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashbaordSidebar className="sticky top-16 h-[calc(100dvh-4rem)]" />
      <SidebarInset>
        <div className="border-b px-3 py-3 flex items-center gap-3 sticky top-16 bg-accent/50 backdrop-blur-sm">
          <SidebarTrigger />
          <Separator orientation="vertical"/>
          <BreadcrumbByLink />
        </div>
        <div className="p-2">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

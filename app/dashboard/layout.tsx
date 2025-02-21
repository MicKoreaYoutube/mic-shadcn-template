"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashbaordSidebar } from "@/components/sidebar"

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashbaordSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

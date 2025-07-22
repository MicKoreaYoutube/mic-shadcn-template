"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DashbaordSidebar } from "@/components/sidebar"

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashbaordSidebar />
      <main>
        <SidebarTrigger />
        <ScrollArea>{children}</ScrollArea>
      </main>
    </SidebarProvider>
  )
}

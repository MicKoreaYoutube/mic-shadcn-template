import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { DashbaordSidebar } from "@/components/sidebar"

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashbaordSidebar className="sticky top-16" />
      <SidebarInset>
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

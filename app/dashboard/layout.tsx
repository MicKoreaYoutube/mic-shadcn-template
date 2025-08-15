import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashbaordSidebar } from "@/components/sidebar"

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="sticky top-16 hidden h-dvh lg:inline">
          <DashbaordSidebar />
        </div>
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}

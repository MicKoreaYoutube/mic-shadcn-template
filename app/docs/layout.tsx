import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import { DocsSidebar } from "@/components/docs-sidebar"
import { BreadcrumbByLink } from "@/components/breadcrumb"

import { docsTree } from "@/config/site"

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocsSidebar className="top-16 md:h-[calc(100dvh-4rem)] font-TheJamsil5Bold" items={docsTree} />
      <SidebarInset>
        <div className="sticky top-16 border-b px-3 py-3 flex items-center gap-3 bg-accent/50 backdrop-blur-sm">
          <SidebarTrigger />
          <Separator orientation="vertical"/>
          <BreadcrumbByLink />
        </div>
        <div className="px-10 py-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

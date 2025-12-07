import { Menu } from "lucide-react"

import { docsTree } from "@/config/site"

import { DocsSidebar } from "@/components/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex size-full flex-col lg:flex-row">
        <div className="sticky top-16 hidden h-dvh lg:inline">
          <Sidebar className="overflow-hidden">
            <DocsSidebar items={docsTree} rootPath="/docs" />
          </Sidebar>
        </div>
        <div className="inline px-6 pt-10 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <DocsSidebar items={docsTree} rootPath="/docs" />
            </SheetContent>
          </Sheet>
        </div>
        <main className="grow">{children}</main>
      </div>
    </SidebarProvider>
  )
}

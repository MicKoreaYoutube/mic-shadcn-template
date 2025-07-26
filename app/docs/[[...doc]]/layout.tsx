import fs from "fs"
import path from "path"

import { Menu } from "lucide-react"

import { docsTree } from "@/config/site"
import { docsItem } from "@/types/docs"

import { DocsSidebar } from "@/components/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="hidden lg:inline">
          <Sidebar className="sticky top-16 overflow-hidden">
            <DocsSidebar items={docsTree} />
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
              <DocsSidebar items={docsTree} />
            </SheetContent>
          </Sheet>
        </div>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}

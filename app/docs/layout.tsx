"use client"

import { siteConfig, docsSidebarContent } from "@/config/site"

import { Menu } from "lucide-react"

import { DocsSidebar } from "@/components/sidebar"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <div className="relative flex flex-col md:flex-row">
        <div className="inline p-5 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <DocsSidebar items={docsSidebarContent} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:inline">
          <DocsSidebar items={docsSidebarContent} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  )
}
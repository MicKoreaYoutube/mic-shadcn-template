"use client"

import { docsContent } from "@/config/site"

import { Menu } from "lucide-react"

import { DocsSidebar } from "@/components/sidebar"
import {
  Sheet,
  SheetTitle,
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
        <div className="inline px-12 pt-8 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="font-KBO-Dia-Gothic_bold text-3xl">문서</SheetTitle>
              <DocsSidebar items={docsContent} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:inline">
          <DocsSidebar items={docsContent} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  )
}
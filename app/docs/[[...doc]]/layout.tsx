import fs from "fs"
import path from "path"

import { Menu } from "lucide-react"

import { docsItem } from "@/types/docs"

import { DocsSidebar } from "@/components/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


interface getDocsTreeFunctionType {
  currentPath: string
}

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const docsPath = path.join(process.cwd(), "docs")

  function getDocsTree({ currentPath }: getDocsTreeFunctionType): docsItem[] {
    const currentTree: docsItem[] = []
    const directory = fs.readdirSync(currentPath, { withFileTypes: true })

    directory.forEach((element) => {
      const baseName = element.name.replace(".mdx", "")

      const existing = currentTree.find((item) => item.id === baseName)

      if (element.isFile() && element.name.endsWith(".mdx")) {
        if (existing) {
          existing.isDoc = true
        } else {
          currentTree.push({ id: baseName, isDoc: true })
        }
      } else if (element.isDirectory()) {
        const subPath = path.join(currentPath, element.name)
        const subTree = getDocsTree({ currentPath: subPath })

        if (existing) {
          existing.subDocList = subTree
        } else {
          currentTree.push({
            id: baseName,
            subDocList: subTree,
          })
        }
      }
    })

    return currentTree
  }

  const docsTree = getDocsTree({ currentPath: docsPath })

  return (
    <div className="flex flex-col justify-center lg:flex-row">
      <div className="hidden lg:inline">
        <DocsSidebar items={docsTree} />
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
  )
}

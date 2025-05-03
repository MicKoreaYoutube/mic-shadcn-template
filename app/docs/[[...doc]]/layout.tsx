import fs from "fs"
import path from "path"

import { docsItem } from "@/types/docs"

import { DocsSidebar } from "@/components/sidebar"

interface getDocsTreeFunctionType {
  currentPath: string
}

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const docsPath = path.join(process.cwd(), "docs")

  function getDocsTree({ currentPath }: getDocsTreeFunctionType): docsItem[] {
    const currentTree: docsItem[] = []
    const directory = fs.readdirSync(currentPath, { withFileTypes: true })
  
    directory.forEach((element) => {
      const baseName = element.name.replace(".mdx", "") // 파일이면 확장자 제거
  
      const existing = currentTree.find(item => item.id === baseName)
  
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
            subDocList: subTree
          })
        }
      }
    })
  
    return currentTree
  }

  const docsTree = getDocsTree({ currentPath: docsPath })

  return (
    <div className="flex justify-center">
      <DocsSidebar items={docsTree} />
      <main>{children}</main>
    </div>
  )
}

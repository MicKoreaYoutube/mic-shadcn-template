import fs from "fs"
import path from "path"

interface docsStaticParamsItem {
  doc: string[] | undefined
}

const docsPath = path.join(process.cwd(), "docs")

export async function getDocsTree({ currentPath }: { currentPath: string }) {
  const docsStaticParams: docsStaticParamsItem[] = []
  const directory = fs.readdirSync(currentPath, { withFileTypes: true })

  directory.forEach(async (element) => {
    if (element.isFile() && element.name.endsWith(".mdx")) {
      const currentFilePath = path.relative(docsPath, path.join(element.parentPath, element.name.replace(".mdx", "")))
      const docParamsArray = currentFilePath.split("/")
      docsStaticParams.push({ doc: docParamsArray })
    } else if (element.isDirectory()) {
      const subDocs = getDocsTree({ currentPath: path.join(currentPath, element.name) })
      docsStaticParams.push(...await subDocs)
    }
  })

  return docsStaticParams
}

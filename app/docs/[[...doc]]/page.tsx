import fs from "fs"
import path from "path"

interface docsStaticParamsItem {
  doc: string[] | undefined
}

interface generateDocsFunctionType {
  rootPath: string
  currentPath: string
}

export default async function DocPage({ params }: { params: Promise<{ doc: string[] | undefined }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.doc?.length ? resolvedParams.doc : ["introduction"]
  const path = decodeURI(slug.join("/"))

  const { default: Document } = await import(`@/docs/${path}.mdx`)

  return (
    <article className="mx-auto p-10 lg:w-[65vw]">
      <Document />
    </article>
  )
}

export async function generateStaticParams() {
  const docsPath = path.join(process.cwd(), "docs")

  async function generateDocsParams({ rootPath, currentPath }: generateDocsFunctionType) {
    const docsStaticParams: docsStaticParamsItem[] = []
    const directory = fs.readdirSync(currentPath, { withFileTypes: true })

    directory.forEach(async (element) => {
      if (element.isFile() && element.name.endsWith(".mdx")) {
        const currentFilePath = path.relative(rootPath, path.join(element.parentPath, element.name.replace(".mdx", "")))
        const docParamsArray = currentFilePath.split("/")
        docsStaticParams.push({ doc: docParamsArray })
      } else if (element.isDirectory()) {
        const subDocs = generateDocsParams({ rootPath: docsPath, currentPath: path.join(currentPath, element.name) })
        docsStaticParams.push(...(await subDocs))
      }
    })

    return docsStaticParams
  }

  const allSlugs = generateDocsParams({ rootPath: docsPath, currentPath: docsPath })
  ;(await allSlugs).push({ doc: undefined })

  return allSlugs
}

export const dynamicParams = false

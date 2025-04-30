import fs from "fs"
import path from "path"

export default async function DocPage({ params }: { params: { doc: string[] } }) {
  const slug = params.doc?.length ? params.doc : ["introduction"]
  const path = decodeURI(slug.join("/"))

  const { default: Document } = await import(`@/docs/${path}.mdx`)

  return (
    <article className="mx-auto p-10 lg:w-[65vw]">
      <Document />
    </article>
  )
}

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "docs")

  const walk = (dir: string): string[][] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const result: string[][] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        result.push(...walk(fullPath))
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const relativePath = path.relative(docsDir, fullPath)
        const slugArray = relativePath.replace(/\.mdx$/, "").split(path.sep)
        result.push(slugArray)
      }
    }

    return result
  }

  const allSlugs = walk(docsDir)

  return [...allSlugs, undefined].map((slug) => ({
    doc: slug,
  }))
}

export const dynamicParams = false
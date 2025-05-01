import { getDocsTree } from "@/app/docs/_utils/getDocsTree"
import path from "path"

export default async function DocPage({ params }: { params: { doc: string[] } }) {
  const slug = params.doc?.length ? params.doc : ["introduction"]
  const path = decodeURI(slug.join("/"))

  const { default: Document } = await import(`@/docs/${path}.mdx`)

  return (
    <article className="p-10 lg:w-[65vw]">
      <Document />
    </article>
  )
}

export async function generateStaticParams() {
  const docsPath = path.join(process.cwd(), "docs")

  const allSlugs = getDocsTree({ currentPath: docsPath })
  allSlugs.push({ doc: [] })

  return allSlugs
}

export const dynamicParams = false
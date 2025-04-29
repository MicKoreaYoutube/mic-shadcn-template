import { getDocsContent } from "@/components/docs"
import { notFound } from "next/navigation"

export default async function DocPage({ params }: { params: { doc: string[] } }) {
  try {
    const content = await getDocsContent(params.doc ?? ["introduction"])
    return (
      <article className="mx-auto p-10 lg:w-[65vw]">
        {content}
      </article>
    )
  } catch (err) {
    notFound()
  }
}
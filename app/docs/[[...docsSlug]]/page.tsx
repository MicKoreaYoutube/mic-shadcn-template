import type { Metadata } from 'next'

export default async function DocsPage({ params }: {
  params: Promise<{ docsSlug: string[] }>
}) {

  const docsSlug = ((await params).docsSlug ?? ["introduction"])
  const docsPath = decodeURI(docsSlug.join("/"))
  const { default: Post, metadata } = await import(`@/mdx/docs/${docsPath}.mdx`)

  return (
    <div>
      <h1 className="mb-4 mt-9 border-b pb-3 font-KBODiaGothic_bold text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
        {metadata.title}
      </h1>
      <p className="my-4 font-SUITE_Regular text-lg text-muted-foreground md:text-xl">
        {metadata.description}
      </p>
      <Post />
    </div>
  )
}
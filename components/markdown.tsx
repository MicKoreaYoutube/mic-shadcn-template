import { promises as fs } from "fs"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"

import { notFound } from "next/navigation"

interface markdownPropsInterface {
  path: string
}

export async function Markdown({ path }: markdownPropsInterface) {
  try {
    const file = await fs.readFile(process.cwd() + path, "utf8")

    return (
      <ReactMarkdown
        className="mx-auto p-8"
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="mb-4 mt-9 border-b pb-3 font-KBODiaGothic_bold text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl" {...props} />,
          h2: ({ node, ...props }) => <h2 className="mb-3 mt-8 border-b pb-2 font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" {...props} />,
          h3: ({ node, ...props }) => <h3 className="font-KBODiaGothic_bold text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl" {...props} />,
          h4: ({ node, ...props }) => <h4 className="font-KBODiaGothic_bold text-xl font-extrabold leading-tight tracking-tighter md:text-2xl" {...props} />,
          p: ({ node, ...props }) => <p className="my-4 font-SUITE_Regular text-lg text-muted-foreground md:text-xl" {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-2 pl-6 font-TheJamsil5Bold italic" {...props} />,
          pre: ({ node, ...props }) => <pre className="m-5 rounded bg-muted p-2 font-mono text-sm font-semibold" {...props} />,
          code: ({ node, ...props }) => <code className="rounded bg-muted px-2 py-1 font-mono text-sm font-semibold" {...props} />,
          a: ({ node, href, ...props }) => <Link className="text-primary hover:underline" href={href ?? "#"} {...props} />,
          ul: ({ node, ...props }) => <ul className="my-4 block list-disc px-9" {...props} />,
          ol: ({ node, ...props }) => <ol className="my-4 block list-decimal px-9" {...props} />,
        }}
      >
        {file}
      </ReactMarkdown>
    )
  } catch (error) {
    notFound()
  }
}

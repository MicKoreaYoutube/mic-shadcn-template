import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ node, ...props }) => (
      <h1
        className="mb-4 mt-9 border-b pb-3 font-KBODiaGothic_bold text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl"
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className="mb-3 mt-8 border-b pb-2 font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        className="font-KBODiaGothic_bold text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl"
        {...props}
      />
    ),
    h4: ({ node, ...props }) => (
      <h4
        className="font-KBODiaGothic_bold text-xl font-extrabold leading-tight tracking-tighter md:text-2xl"
        {...props}
      />
    ),
    p: ({ node, ...props }) => (
      <p className="my-4 font-SUITE_Regular text-lg text-muted-foreground md:text-xl" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-2 pl-6 font-TheJamsil5Bold italic" {...props} />
    ),
    pre: ({ node, ...props }) => (
      <pre className="m-5 rounded-lg bg-muted p-2 font-mono text-sm font-semibold" {...props} />
    ),
    code: ({ node, ...props }) => (
      <code className="rounded bg-muted px-2 py-1 font-mono text-sm font-semibold" {...props} />
    ),
    a: ({ node, href, ...props }) => (
      <Link className="text-primary hover:underline" href={href ?? "#"} {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="my-4 block list-disc px-9 font-SUITE_Regular text-muted-foreground" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="my-4 block list-decimal px-9 font-SUITE_Regular text-muted-foreground" {...props} />
    ),
    li: ({ node, ...props }) => <li className="marker:text-foreground" {...props} />,
    ...components,
  }
}
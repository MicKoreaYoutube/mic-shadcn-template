import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ node, children, ...props }) => (
      <h1
        className="mb-4 mt-9 border-b pb-3 font-KBODiaGothic_bold text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl"
        name={"heading-" + children.replaceAll(" ", "-")}
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ node, children, ...props }) => (
      <h2
        className="mb-3 mt-8 border-b pb-2 font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
        name={"heading-" + children.replaceAll(" ", "-")}
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ node, children, ...props }) => (
      <h3
        className="font-KBODiaGothic_bold text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl"
        name={"heading-" + children.replaceAll(" ", "-")}
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ node, children, ...props }) => (
      <h4
        className="font-KBODiaGothic_bold text-xl font-extrabold leading-tight tracking-tighter md:text-2xl"
        name={"heading-" + children.replaceAll(" ", "-")}
        {...props}
      >
        {children}
      </h4>
    ),
    h5: ({ node, children, ...props }) => (
      <h4
        className="font-KBODiaGothic_bold text-lg font-extrabold leading-tight tracking-tighter md:text-xl"
        name={"heading-" + children.replaceAll(" ", "-")}
        {...props}
      >
        {children}
      </h4>
    ),
    h6: ({ node, children, ...props }) => (
      <h4
        className="font-KBODiaGothic_bold text-base font-extrabold leading-tight tracking-tighter md:text-lg"
        name={"heading-" + children.replaceAll(" ", "-")}
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ node, children, ...props }) => (
      <p className="my-4 font-SUITE_Regular text-lg text-muted-foreground md:text-xl" {...props}>
        {children}
      </p>
    ),
    blockquote: ({ node, children, ...props }) => (
      <blockquote className="border-l-2 pl-6 font-TheJamsil5Bold italic" {...props}>
        {children}
      </blockquote>
    ),
    pre: ({ node, children, ...props }) => (
      <pre className="m-5 rounded-lg bg-gray-300 p-2 font-mono text-sm font-semibold" {...props}>
        {children}
      </pre>
    ),
    code: ({ node, children, ...props }) => (
      <code className="rounded bg-muted px-2 py-1 font-mono text-sm font-semibold" {...props}>
        {children}
      </code>
    ),
    a: ({ node, href, children, ...props }) => (
      <Link className="text-primary hover:underline" href={href ?? "#"} {...props}>
        {children}
      </Link>
    ),
    ul: ({ node, children, ...props }) => (
      <ul className="my-4 block list-disc px-9 font-SUITE_Regular text-muted-foreground" {...props}>
        {children}
      </ul>
    ),
    ol: ({ node, children, ...props }) => (
      <ol className="my-4 block list-decimal px-9 font-SUITE_Regular text-muted-foreground" {...props}>
        {children}
      </ol>
    ),
    li: ({ node, children, ...props }) => (
      <li className="marker:text-foreground" {...props}>
        {children}
      </li>
    ),
    ...components,
  }
}

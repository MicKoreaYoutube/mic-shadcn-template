import { promises as fs } from "fs"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export async function Markdown() {
  const file = await fs.readFile(process.cwd() + "/README.md", "utf8")

  return (
    <ReactMarkdown
      className="prose"
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" {...props} />,
        h2: ({ node, ...props }) => <h2 className="font-KBODiaGothic_bold text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl" {...props} />,
        h3: ({ node, ...props }) => <h3 className="font-KBODiaGothic_bold text-xl font-extrabold leading-tight tracking-tighter md:text-2xl" {...props} />,
        h4: ({ node, ...props }) => <h4 className="font-KBODiaGothic_bold text-lg font-extrabold leading-tight tracking-tighter md:text-xl" {...props} />,
        p: ({ node, ...props }) => <p className="font-SUITE_Regular text-lg font-extrabold leading-tight tracking-tighter md:text-xl" {...props} />,
        ul: ({ node, ...props }) => (
          <ul
            style={{
              display: "block",
              listStyleType: "disc",
              paddingInlineStart: "40px",
            }}
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            style={{
              display: "block",
              listStyleType: "decimal",
              paddingInlineStart: "40px",
            }}
            {...props}
          />
        ),
      }}
    >
      {file}
    </ReactMarkdown>
  )
}

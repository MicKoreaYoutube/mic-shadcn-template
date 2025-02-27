import { promises as fs } from "fs"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
// 활용 예시
import { unified } from "unified"
import markdown from "remark-parse"
import remark2rehype from "remark-rehype"
// html을 문자열로 반환하는 플러그인
import html from "rehype-stringify"

export async function Markdown() {
  const file = await fs.readFile(process.cwd() + "/README.md", "utf8")

  return (
    <ReactMarkdown
      className="prose"
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-6xl font-bold" {...props} />,
        h2: ({ node, ...props }) => <h1 className="text-5xl font-bold" {...props} />,
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

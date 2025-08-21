import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  eslint: {
    // 개발 중에도 ESLint 경고를 띄우도록 설정
    ignoreDuringBuilds: false,
  },
  outputFileTracingExcludes: {
    "*": [
      "./.next/cache/webpack/**",
      "./.next/cache/images/**",
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

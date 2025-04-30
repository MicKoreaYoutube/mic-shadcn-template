// import { getDocsTree } from "@/components/sidebar"
// import { Sidebar } from "@/components/Sidebar"

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
//   const sidebarItems = getDocsTree()

  // ✅ 콘솔에 출력 (서버 측에서 출력됨)
//   console.log("🔍 Sidebar Items:", sidebarItems)

  return (
    <div className="flex">
      {/* <Sidebar items={sidebarItems} /> */}
      <main>{children}</main>
    </div>
  )
}
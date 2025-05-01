

export default async function DocsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex justify-center">
      {/* <Sidebar items={sidebarItems} /> */}
      <main>{children}</main>
    </div>
  )
}

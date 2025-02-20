"use client"

import { mainNavContent, navDropDownContent } from "@/config/site"

import { MainNav } from "@/components/main-nav"
import { NavDropDown } from "@/components/dropdown"
import { NavSheet } from "@/components/nav-sheet"
import { SearchDialog } from "@/components/search-dialog"

export function SiteHeader() {

  // const [open, setOpen] = useState(false)

  // let result
  // let arrayResult: string[] = []
  // const [sortedResult, setSortedResult] = useState(["test"])

  // useEffect(() => {
  //   const down = (e: KeyboardEvent) => {
  //     if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
  //       e.preventDefault()
  //       setOpen((open) => !open)
  //     }
  //   }

  //   document.addEventListener("keydown", down)
  //   return () => document.removeEventListener("keydown", down)
  // }, [])

  // const data = ["Calendar", "Search Emoji", "Calculator", "Profile", "Billing", "Settings"]
  // const fuse = new fuseAPI(data)

  return (
    <header className="font-RixInooAriDuriR sticky top-0 z-40 w-full bg-accent/50 border-b backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={mainNavContent} />
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <SearchDialog />
          <NavDropDown items={navDropDownContent}/>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <NavSheet items={mainNavContent} />
        </div>
      </div>
    </header>
  )
}
"use client"

import { mainNavContent, navDropDownContent } from "@/config/site"

import { MainNav } from "@/components/main-nav"
import { NavDropDown } from "@/components/dropdown"
import { NavSheet } from "@/components/nav-sheet"
import { SearchDialog } from "@/components/search-dialog"

export function SiteHeader() {
  return (
    <header className="font-RixInooAriDuriR sticky top-0 z-40 w-full bg-accent/50 border-b backdrop-blur-sm">
      <div className="flex h-16 items-center space-x-4 max-w-[80vw] mx-auto sm:justify-between sm:space-x-0 lg:max-w-[90vw] xl:max-w-[80vw]">
        <MainNav items={mainNavContent} />
        <div className="hidden flex-1 items-center justify-end space-x-4 lg:flex">
          <SearchDialog />
          <NavDropDown items={navDropDownContent}/>
        </div>
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <NavSheet items={mainNavContent} />
        </div>
      </div>
    </header>
  )
}
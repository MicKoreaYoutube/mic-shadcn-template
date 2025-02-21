"use client"

import Link from "next/link"

import { siteConfig, mainNavContent, navDropDownContent } from "@/config/site"

import { MainNav } from "@/components/main-nav"
import { NavDropDown } from "@/components/dropdown"
import { NavSheet } from "@/components/nav-sheet"
import { SearchDialog } from "@/components/search-dialog"

import Logo from "@/public/logo.svg"

export function SiteHeader() {
  return (
    <header className="font-RixInooAriDuriR sticky top-0 z-40 w-full bg-accent/50 border-b backdrop-blur-sm">
      <div className="flex h-16 items-center space-x-4 max-w-[80vw] mx-auto sm:justify-between sm:space-x-0 lg:max-w-[90vw] xl:max-w-[80vw]">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-7 w-7" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <MainNav items={mainNavContent} className="hidden lg:flex" />
        </div>
        <div className="hidden flex-1 items-center justify-end space-x-4 lg:flex">
          <SearchDialog />
          <NavDropDown items={navDropDownContent} />
        </div>
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <NavSheet items={mainNavContent} />
        </div>
      </div>
    </header>
  )
}

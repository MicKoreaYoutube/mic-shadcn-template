"use client"

import Link from "next/link"

import { siteConfig, mainNavContent, navDropDownContent } from "@/config/site"

import { MainNav } from "@/components/main-nav"
import { DropDown } from "@/components/dropdown"
import { NavSheet } from "@/components/nav-sheet"
import { SearchDialog } from "@/components/search-dialog"

import Logo from "@/public/logo.svg"

export function SiteHeader() {
  return (
    <header className="bg-accent/50 font-RixInooAriDuriR sticky top-0 z-40 flex h-16 2xl:px-35 md:px-20 px-15 items-center justify-between border-b backdrop-blur-sm">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="size-7" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <MainNav items={mainNavContent} className="hidden lg:flex" />
      </div>
      <div className="flex items-center gap-10">
        {/* <SearchDialog /> */}
        <DropDown label="My Account" items={navDropDownContent} className="flex items-center"/>
        <NavSheet items={mainNavContent} />
      </div>
    </header>
  )
}

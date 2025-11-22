"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { useMediaQuery } from "react-responsive"

import { HeaderNav } from "@/components/nav"
import { DropDown } from "@/components/dropdown"
import { NavSheet } from "@/components/nav-sheet"

import { SearchDialog } from "@/components/search-dialog"

import { siteConfig, headerNavContent, navDropDownContent } from "@/config/site"
import { tailwindBreakPoints } from "@/lib/tailwind"

import Logo from "@/public/logo.svg"

export function SiteHeader() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const isLg = useMediaQuery({ minWidth: tailwindBreakPoints["lg"] })

  return (
    <header className="bg-accent/50 font-RixInooAriDuriR sticky top-0 z-40 flex h-16 items-center justify-between border-b px-15 backdrop-blur-sm md:px-20 2xl:px-35">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="size-7" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        {mounted && isLg && <HeaderNav items={headerNavContent} />}
      </div>
      <div className="flex items-center gap-10">
        {/* <SearchDialog /> */}
        {mounted && isLg && <DropDown label="My Account" items={navDropDownContent} />}
        <NavSheet items={headerNavContent} />
      </div>
    </header>
  )
}

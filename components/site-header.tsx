"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { useMediaQuery } from "react-responsive"
import { useInView } from "react-intersection-observer"
import { ChevronDown, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoadingComp } from "@/components/loading-comp"
import { HeaderNav } from "@/components/nav"
import { NavDropDown, DropDownTree } from "@/components/dropdown"
import { NavSheet } from "@/components/nav-sheet"

import { SearchDialog } from "@/components/search-dialog"

import { siteConfig, headerNavContent, navDropDownContent } from "@/config/site"
import { tailwindBreakPoints } from "@/lib/tailwind"
import { cn } from "@/lib/utils"

import Logo from "@/public/logo.svg"

export function SiteHeader() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [isLogin, changeLoginState] = useState(true)
  const [DropDownRef, DropDownRefInView] = useInView({
    threshold: 1,
  })

  const isLg = useMediaQuery({ minWidth: tailwindBreakPoints["lg"] })

  return (
    <header className="bg-accent/50 font-RixInooAriDuriR sticky top-0 z-40 flex h-16 items-center justify-between border-b px-15 backdrop-blur-sm md:px-20 2xl:px-35 [&>div]:flex [&>div]:items-center [&>div]:gap-10">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Logo className="size-7" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        {mounted && isLg && <HeaderNav items={headerNavContent} />}
      </div>
      <div>
        {/* <SearchDialog /> */}
        {mounted && isLg && (
          <>
            {isLogin ? (
              <NavDropDown label="My Account" items={navDropDownContent} />
            ) : (
              <Button asChild variant="ghost" size="icon">
                <Link href="/auth/login">
                  <LogIn className="size-5" />
                </Link>
              </Button>
            )}
          </>
        )}
        <NavSheet items={headerNavContent} />
      </div>
    </header>
  )
}

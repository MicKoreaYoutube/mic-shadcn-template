"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { useMediaQuery } from "react-responsive"

import { Github, Instagram } from "lucide-react"

import { siteConfig, footerNavContent } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

import { useInView } from "react-intersection-observer"

import { tailwindBreakPoints } from "@/lib/tailwind"

import { FooterNav } from "@/components/nav"
import { FamilyService } from "@/components/family-service"

import Logo from "@/public/logo.svg"

export function SiteFooter() {
  const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, [])

  const isMd = useMediaQuery({ minWidth: tailwindBreakPoints["md"] })

  return (
    <footer className="bg-accent/50 font-RixInooAriDuriR z-40 flex w-full flex-col justify-center gap-10 border-t p-5 py-5 md:px-20 md:py-10 2xl:px-35">
      <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="size-7" />
            <span className="text-2xl font-semibold">{siteConfig.name}</span>
          </Link>
          <p className="text-muted-foreground max-w-100">{siteConfig.description}</p>
        </div>
        <FooterNav items={footerNavContent} />
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            {siteConfig.name}™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex items-center gap-3">
          {mounted && isMd && <FamilyService />}
          <div className="flex gap-2 sibal">
            <Link href={siteConfig.links.micGithub} target="_blank">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Github className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.micInstagram} target="_blank">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

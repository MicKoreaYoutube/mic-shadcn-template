"use client"

import Link from "next/link"

import { useMediaQuery } from "react-responsive"

import { Github, Instagram } from "lucide-react"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

import { useInView } from "react-intersection-observer"

import { tailwindBreakPoints } from "@/lib/tailwind"

import { FamilyService } from "@/components/family-service"

import Logo from "@/public/logo.svg"

export function SiteFooter() {
  const [FamilySurviceRef, FamilySurviceRefInView] = useInView({
    threshold: 1,
  })

  return (
    <footer className="inset-x-0 bottom-0 z-40 w-full border-t bg-accent/50 font-RixInooAriDuriR">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="size-7" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-[400px] text-muted-foreground">{siteConfig.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-24">
            {siteConfig.footerContent?.length ? (
              <>
                {siteConfig.footerContent?.map((item, index) => (
                  <div key={index}>
                    <h2 className="mb-6 text-2xl font-medium text-foreground">{item.title}</h2>
                    <ul className="font-medium text-muted-foreground">
                      {item.content?.length ? (
                        <>
                          {item.content?.map((contentItem, contentIndex) => (
                            <li className="mb-4" key={contentIndex}>
                              <Link href={contentItem.href} className="hover:underline">
                                {contentItem.title}
                              </Link>
                            </li>
                          ))}
                        </>
                      ) : null}
                    </ul>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
        <div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground sm:text-center">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                {siteConfig.name}™
              </Link>
              . All Rights Reserved.
            </span>
            <nav className="flex items-center space-x-1">
              {useMediaQuery({ query: `(min-width: ${tailwindBreakPoints.md}px)` }) && <FamilyService />}
              <div className="flex">
                <Link href={siteConfig.links.micGithub} target="_blank" rel="noreferrer">
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
                <Link href={siteConfig.links.micInstagram} target="_blank" rel="noreferrer">
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

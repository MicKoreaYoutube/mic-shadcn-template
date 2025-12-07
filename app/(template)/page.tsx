import Link from "next/link"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { IntersectionObserverComp, ReverseTheme } from "@/components/util-components"
import React from "react"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    <>
      {[0, 1, 2, 3].map((item) => (
        <React.Fragment key={item}>
          {item % 2 == 0 ? (
            <PageComp />
          ) : (
            <ReverseTheme className="text-foreground">
              <PageComp />
            </ReverseTheme>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

function PageComp() {
  const classToAdd = "animate__animated animate__fadeIn"

  return (
    <div className="bg-background flex flex-col gap-2 p-8 md:p-10">
      <section className="container mx-auto">
        <IntersectionObserverComp triggerOnce={true} threshold={1} originalClass="invisible" addedClass={classToAdd}>
          <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold tracking-tighter md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
        </IntersectionObserverComp>
        <p className="font-SUITE_Regular text-muted-foreground text-lg">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 13 Ready.
        </p>
        <div className="font-TheJamsil5Bold flex gap-4">
          <Link href={siteConfig.links.shadcnuiDocs} target="_blank" className={buttonVariants()}>
            Documentation
          </Link>
          <Link target="_blank" href={siteConfig.links.micGithub} className={buttonVariants({ variant: "outline" })}>
            GitHub
          </Link>
        </div>
      </section>
    </div>
  )
}

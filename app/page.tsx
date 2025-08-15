import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { IntersectionObserverComp } from "@/components/util-components"

import { cn } from "@/lib/utils"

export default function Page() {
  const classToAdd = "animate__animated animate__fadeIn"

  return (
    <>
      <div className="flex flex-col gap-2 bg-background p-8 md:p-10">
        <IntersectionObserverComp triggerOnce={true} threshold={1} originalClass="invisible" addedClass={classToAdd}>
          <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold tracking-tighter md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
        </IntersectionObserverComp>
        <p className="font-SUITE_Regular text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 13 Ready.
        </p>
        <div className="flex gap-4 font-TheJamsil5Bold">
          <Link href={siteConfig.links.shadcnuiDocs} target="_blank" className={buttonVariants()}>
            Documentation
          </Link>
          <Link target="_blank" href={siteConfig.links.micGithub} className={buttonVariants({ variant: "outline" })}>
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-foreground p-8 md:p-10">
        <IntersectionObserverComp triggerOnce={true} threshold={1} originalClass="invisible" addedClass={classToAdd}>
          <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold tracking-tighter text-background md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
        </IntersectionObserverComp>
        <p className="font-SUITE_Regular text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 13 Ready.
        </p>
        <div className="flex gap-4 font-TheJamsil5Bold">
          <Link href={siteConfig.links.shadcnuiDocs} target="_blank" className={buttonVariants()}>
            Documentation
          </Link>
          <Link target="_blank" href={siteConfig.links.micGithub} className={buttonVariants({ variant: "outline" })}>
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-background p-8 md:p-10">
        <IntersectionObserverComp triggerOnce={true} threshold={1} originalClass="invisible" addedClass={classToAdd}>
          <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold tracking-tighter md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
        </IntersectionObserverComp>
        <p className="font-SUITE_Regular text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 13 Ready.
        </p>
        <div className="flex gap-4 font-TheJamsil5Bold">
          <Link href={siteConfig.links.shadcnuiDocs} target="_blank" className={buttonVariants()}>
            Documentation
          </Link>
          <Link target="_blank" href={siteConfig.links.micGithub} className={buttonVariants({ variant: "outline" })}>
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-foreground p-8 md:p-10">
        <IntersectionObserverComp triggerOnce={true} threshold={1} originalClass="invisible" addedClass={classToAdd}>
          <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold tracking-tighter text-background md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
        </IntersectionObserverComp>
        <p className="font-SUITE_Regular text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 13 Ready.
        </p>
        <div className="flex gap-4 font-TheJamsil5Bold">
          <Link href={siteConfig.links.shadcnuiDocs} target="_blank" className={buttonVariants()}>
            Documentation
          </Link>
          <Link target="_blank" href={siteConfig.links.micGithub} className={buttonVariants({ variant: "outline" })}>
            GitHub
          </Link>
        </div>
      </div>
    </>
  )
}

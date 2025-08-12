import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "@/components/ui/button"
import { IntersectionObserverComp } from "@/components/util-components"

import { cn } from "@/lib/utils"

export default function Page() {
  const classToAdd = "animate__animated animate__fadeIn"

  return (
    <>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <IntersectionObserverComp
              triggerOnce={true}
              threshold={1}
              originalClass="invisible"
              addedClass={classToAdd}
            >
              <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Beautifully designed components <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
              </h1>
            </IntersectionObserverComp>
            <p className="font-SUITE_Regular text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
              Next.js 13 Ready.
            </p>
          </div>
          <div className="flex gap-4 font-TheJamsil5Bold">
            <Link href={siteConfig.links.shadcnuiDocs} target="_blank" rel="noreferrer" className={buttonVariants()}>
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.micGithub}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-foreground">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <IntersectionObserverComp
              triggerOnce={true}
              threshold={1}
              originalClass="invisible"
              addedClass={classToAdd}
            >
              <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter text-background md:text-4xl">
                Beautifully designed components <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
              </h1>
            </IntersectionObserverComp>
            <p className="font-SUITE_Regular text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
              Next.js 13 Ready.
            </p>
          </div>
          <div className="flex gap-4 font-TheJamsil5Bold">
            <Link
              href={siteConfig.links.shadcnuiDocs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.micGithub}
              className={cn(buttonVariants(), "border border-muted-foreground")}
            >
              GitHub
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-background">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <IntersectionObserverComp
              triggerOnce={true}
              threshold={1}
              originalClass="invisible"
              addedClass={classToAdd}
            >
              <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Beautifully designed components <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
              </h1>
            </IntersectionObserverComp>
            <p className="font-SUITE_Regular text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
              Next.js 13 Ready.
            </p>
          </div>
          <div className="flex gap-4 font-TheJamsil5Bold">
            <Link href={siteConfig.links.shadcnuiDocs} target="_blank" rel="noreferrer" className={buttonVariants()}>
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.micGithub}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-foreground">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-2">
            <IntersectionObserverComp
              triggerOnce={true}
              threshold={1}
              originalClass="invisible"
              addedClass={classToAdd}
            >
              <h1 className="font-KBODiaGothic_bold text-3xl font-extrabold leading-tight tracking-tighter text-background md:text-4xl">
                Beautifully designed components <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
              </h1>
            </IntersectionObserverComp>
            <p className="font-SUITE_Regular text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
              Next.js 13 Ready.
            </p>
          </div>
          <div className="flex gap-4 font-TheJamsil5Bold">
            <Link
              href={siteConfig.links.shadcnuiDocs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.micGithub}
              className={cn(buttonVariants(), "border border-muted-foreground")}
            >
              GitHub
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

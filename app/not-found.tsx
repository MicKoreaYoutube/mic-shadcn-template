import { Metadata } from "next"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { BackwardButton } from "@/components/util-components"

export const metadata: Metadata = {
  title: "Page Not Found",
}

export default function NotFound() {
  return (
    <>
      <div className="container mx-auto h-[80vh] content-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-KBODiaGothic_bold text-6xl font-extrabold tracking-tighter md:text-9xl">404</h1>
          <p className="font-SUITE_Regular text-4xl text-secondary-foreground md:text-6xl">No Page Found</p>
          <p className="font-SUITE_Regular text-lg text-muted-foreground md:text-xl">
            The page your looking for does not exist. Please check the url or the realseNote to check out the problem.
          </p>
          <div className="font-TheJamsil5Bold flex justify-center gap-4">
            <Link href="/" className={buttonVariants()}>
              Go Home
            </Link>
            <BackwardButton variant="outline">Go Back</BackwardButton>
          </div>
        </div>
      </div>
    </>
  )
}

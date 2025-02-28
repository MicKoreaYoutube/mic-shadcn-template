"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button, buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <>
      <div className="flex h-[80vh] items-center justify-center bg-background">
        <section className="container">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-KBODiaGothic_bold text-6xl font-extrabold leading-tight tracking-tighter md:text-9xl">
              404
            </h1>
            <div className="text-center">
              <p className="font-SUITE_Regular text-4xl text-slate-500 md:text-6xl">No Page Found</p>
              <p className="font-SUITE_Regular text-lg text-slate-300 md:text-xl">
                The page your looking for does not exist. Please check the url or the realseNote to check out the
                problem.
              </p>
            </div>
          </div>
          <div className="mt-2 flex justify-center gap-4 font-TheJamsil5Bold">
            <Link href="/" rel="noreferrer" className={buttonVariants()}>
              Go to home
            </Link>
            <Button
              variant={"outline"}
              rel="noreferrer"
              onClick={() => {
                router.back()
              }}>
              Go back to recent page
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

"use client"

import { siteConfig } from "@/config/site"

import Logo from "@/public/logo.svg"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex size-full justify-between lg:h-[94vh]">
        <div className="hidden basis-1/2 flex-col justify-between bg-primary p-12 dark:bg-accent lg:flex">
          <h3 className="flex gap-2 font-KBODiaGothic_bold text-lg font-medium text-background">
            <Logo className="size-7 text-background" />
            {siteConfig.name}
          </h3>
          <span className="w-52 font-SUITE_Regular text-xl text-white">{siteConfig.description}</span>
        </div>
        <div className="flex h-full basis-full flex-col justify-start p-8 lg:basis-1/2 lg:justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

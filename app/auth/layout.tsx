"use client"

import { siteConfig } from "@/config/site"

import Logo from "@/public/logo.svg"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex size-full justify-between lg:h-[94vh]">
        <div className="bg-primary dark:bg-accent hidden basis-1/2 flex-col justify-between p-12 lg:flex">
          <h3 className="font-KBO-Dia-Gothic_bold text-background flex gap-2 text-lg font-medium">
            <Logo className="text-background size-7" />
            {siteConfig.name}
          </h3>
          <span className="font-SUITE-Regular w-54 text-xl text-white">{siteConfig.description}</span>
        </div>
        <div className="flex h-full basis-full flex-col justify-start p-8 lg:basis-1/2 lg:justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

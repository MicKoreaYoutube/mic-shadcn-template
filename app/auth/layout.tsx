"use client"

import { siteConfig } from "@/config/site"

import Logo from "@/public/logo.svg"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="flex h-full w-full justify-between lg:h-[94vh]">
        <div className="hidden basis-1/2 flex-col justify-between bg-primary p-12 dark:bg-accent lg:flex">
          <h3 className="font-KBO-Dia-Gothic_bold flex text-lg font-medium text-background gap-2">
            <Logo className="text-background h-7 w-7" />
            {siteConfig.name}
          </h3>
          <span className="font-SUITE-Regular w-54 text-xl text-white">
            {siteConfig.description}
          </span>
        </div>
        <div className="flex h-full basis-full flex-col justify-start p-8 lg:basis-1/2 lg:justify-center">
          {children}
        </div>
      </div>
    </>
  )
}
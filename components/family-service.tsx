"use client"

import Link from "next/link"

import { useInView } from "react-intersection-observer"
import { useMediaQuery } from "react-responsive"

import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { tailwindBreakPoints } from "@/lib/tailwind"

import { siteConfig } from "@/config/site"

export function FamilyService() {
  const [FamilySurviceRef, FamilySurviceRefInView] = useInView({
    threshold: 1,
  })

  const isMd = useMediaQuery({ minWidth: tailwindBreakPoints["md"] })

  if (isMd) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-accent/50">
            패밀리 서비스
            <ChevronDown
              className={cn(
                "size-3 shrink-0 transition-transform duration-100",
                FamilySurviceRefInView && "rotate-180",
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-RixInooAriDuriR w-1" ref={FamilySurviceRef}>
          <DropdownMenuGroup>
            <DropdownMenuLabel className="font-medium">패밀리 서비스</DropdownMenuLabel>
            {siteConfig.FamilySurvice?.length
              ? siteConfig.FamilySurvice?.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <DropdownMenuItem>
                      <span>{item.name}</span>
                    </DropdownMenuItem>
                  </Link>
                ))
              : null}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  } else {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">패밀리 서비스</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="font-RixInooAriDuriR text-xl font-medium">패밀리 서비스</DrawerTitle>
          </DrawerHeader>
          <div className="font-RixInooAriDuriR m-4 flex flex-col gap-2 font-normal">
            {siteConfig.FamilySurvice?.length
              ? siteConfig.FamilySurvice?.map((item, index) => (
                  <Link key={index} href={item.href} className="text-muted-foreground hover:underline">
                    <span>{item.name}</span>
                  </Link>
                ))
              : null}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }
}
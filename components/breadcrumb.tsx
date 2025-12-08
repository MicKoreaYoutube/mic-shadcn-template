"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { toTitleCase } from "@/lib/utils"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

function BreadcrumbByLink() {
  const pathname = usePathname()
  const slug = pathname.split("/").slice(1)

  return (
    <Breadcrumb className="font-TheJamsil5Bold">
      <BreadcrumbList>
        {slug.map((item, index) => (
          <React.Fragment key={index}>
            {index != 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${slug.slice(0, index + 1).join("/")}`}>
                {toTitleCase(decodeURI(item).replaceAll("-", " "))}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { BreadcrumbByLink }

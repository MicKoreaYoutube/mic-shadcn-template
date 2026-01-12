"use client"

import React, { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { ChevronDown, LogIn } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoadingComp } from "@/components/loading-comp"

import { dropDownItem } from "@/types/dropdown"

interface dropDownTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: dropDownItem[][]
}

interface dropDownProps extends dropDownTreeProps {
  label: string
}

function NavDropDown({ label, items, ...props }: dropDownProps) {
  return (
    <div {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center rounded-full p-1 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <LoadingComp />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-TheJamsil5Bold w-56">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropDownTree items={items} className="font-TheJamsil5Bold" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function DropDownTree({ items, ...props }: dropDownTreeProps) {
  const router = useRouter()

  return (
    <div {...props}>
      {items?.map((group, index) => (
        <React.Fragment key={index}>
          {index != 0 && <DropdownMenuSeparator />}
          <DropdownMenuGroup>
            {group.map((item, subIndex) => (
              <React.Fragment key={subIndex}>
                {item.subDropDown ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger
                      disabled={item.disable}
                      className={`${item.disable && "cursor-not-allowed"}`}
                    >
                      {item.icon && <item.icon />}
                      <Link href={item.href ?? "#"}>{item.title}</Link>
                      <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropDownTree items={item.subDropDown} {...props} />
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem
                    disabled={item.disable}
                    className={`${item.disable && "cursor-not-allowed"}`}
                  >
                    {item.icon && <item.icon />}
                    <Link href={item.href ?? "#"}>{item.title}</Link>
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                )}
              </React.Fragment>
            ))}
          </DropdownMenuGroup>
        </React.Fragment>
      ))}
    </div>
  )
}

export { NavDropDown, DropDownTree }

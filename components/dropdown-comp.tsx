"use client"

import React from "react"
import Link from "next/link"

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

function DropDownTree({ items, ...props }: dropDownTreeProps) {
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

export { DropDownTree, type dropDownTreeProps }
